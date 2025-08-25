import { MDXComponents, MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc"
import type { CMSContent } from "@/types";

interface PostTemplateProps {
  content: CMSContent
}

export default function PostTemplate({ content }: PostTemplateProps) {
  const options: MDXRemoteOptions = {
    parseFrontmatter: true,
  }

  console.log(content);

  const components: MDXComponents = {
    // Standard HTML elements with custom styling
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
    p: ({ children }) => <p className="text-trust-grey mb-4">{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    b: ({ children }) => <b className="font-bold">{children}</b>,
    // Layout wrapper
    wrapper: ({ children }) => (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">{children}</div>
      </div>
    ),
  }

  // For static builds, let errors bubble up to fail the build
  // No need for Suspense or error handling since everything is resolved at build time
  return <MDXRemote source={content.body} options={options} components={components} />
}
 