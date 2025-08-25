import SpecificPost from "./specificPost";
import PostTemplate from "@/components/specific/slugPostFix";
import NotFound from "@/app/not-found";
import { getCMSContentBySlug } from "@/lib/cms";
import path from "path";

const CMS_CONTENT_PATH = path.join(process.cwd(), ".leadcms", "content");

// export default function Page({ params }: { params: { slug: string[] } }) {
  
//   return <SpecificPost slugs={params} />;
// }

interface PageProps {
  params: { slug: string[] }
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug.join("/")
  const content = await getCMSContentBySlug(slug, CMS_CONTENT_PATH)
  
  // if (loading) return <ProgressState />; // wont be needing - direct building contents
  if (!content) return <NotFound 
    type="post"
    redirect="browse"
  />

  return <PostTemplate content={content} />
}