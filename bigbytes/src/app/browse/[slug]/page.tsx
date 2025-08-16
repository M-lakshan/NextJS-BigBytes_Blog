'use client';

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store/store";
import { SinglePostAlt } from "@/components/specific/post";
import { getCMSContentBySlug } from "@/lib/cms";
import path from "path";
import clsx from "clsx";

type SpecifPostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  params: { slug: string[] }
}

export default async function SpecifPost({ classList, params }: SpecifPostProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);
  const CMS_CONTENT_PATH = path.join(process.cwd(), "content/cms");
  const slug = params.slug.join("/");
  const secPhaseBlogPost = await getCMSContentBySlug(slug, CMS_CONTENT_PATH);

  return <main id="specific_post" className={cls}>
    <h2>Post Page</h2>    
    
    <SinglePostAlt
      classList={{
        tw: [],
        cs: []
      }}
      publisher_alt={null}
      coauthor_alt={null}
      postObj={secPhaseBlogPost}
      format="feed"
      layout="grid"
      session_exists={(user?.sts)}
    />
  </main>
}
