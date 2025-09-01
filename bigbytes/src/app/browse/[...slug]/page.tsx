import { SinglePostAlt } from "@/components/specific/post";
import NotFound from "@/app/not-found";
import { getCMSContentBySlug } from "@/lib/cms";
import path from "path";

const CMS_CONTENT_PATH = path.join(process.cwd(), ".leadcms", "content");

interface PageProps {
  params: { slug: string[] }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const content = await getCMSContentBySlug(slugPath, CMS_CONTENT_PATH)
  
  // if (loading) return <ProgressState />; // wont be needing - direct building contents
  if (!content) return <NotFound 
    type="post"
    redirect="browse"
  />

  return (
    <main id="browse" className={''}>
      <div className="single_post">
        <SinglePostAlt
          classList={{ tw: [], cs: [] }}
          publisher_alt={null}
          coauthor_alt={null}
          postObj={content}
          format="feed"
          layout="single"
          session_exists={false}
        />
      </div>
    </main>
  );
}