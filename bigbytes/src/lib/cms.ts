import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { serialize } from 'next-mdx-remote-client/serialize';
import { CMSContent, PostAlt } from "@/types"

export async function getCMSContentBySlug(
  slug: string,
  contentDir: string
// ): Promise<PostAlt | null> {
): Promise<CMSContent | null> {
  // Try both .mdx and .json extensions
  const mdxPath = path.join(contentDir, `${slug}.mdx`)
  const jsonPath = path.join(contentDir, `${slug}.json`)
  console.log("### ",contentDir,slug);
  try {
    // Try MDX first - combine existence check with read operation
    try {
      const file = await fs.readFile(mdxPath, "utf8")
      const { data, content } = matter(file)

      // const mdxSource = await serialize(content)

      return {
        ...data,
        slug,
        body: content,
      // } as PostAlt
      } as CMSContent
    } catch (mdxError: any) {
      // If MDX doesn't exist or can't be read, try JSON
      if (mdxError.code !== 'ENOENT') {
        // If it's not a "file not found" error, rethrow
        throw mdxError
      }
    }
    
    // Try JSON
    try {
      const file = await fs.readFile(jsonPath, "utf8")
      const data = JSON.parse(file)
      return {
        ...data,
        slug,
      // } as PostAlt
      } as CMSContent
    }
    catch (jsonError: any) {
      // If JSON doesn't exist or can't be read, return null
      if (jsonError.code === 'ENOENT') {
        return null
      }
      // If it's a parse error or other issue, rethrow
      throw jsonError
    }
  } catch (e) {
    return null
  }
}

export async function getAllCMSFileSlugs(): Promise<string[]> {
  const contentPath = path.join(process.cwd(), ".leadcms", "content");

  try {
    const files = await fs.readdir(contentPath);
    return files
      .filter((file) => file.endsWith(".json") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.(json|mdx)$/, ""));
  } catch (error) {
    console.error("Failed to read CMS content directory:", error);
    return [];
  }
}
