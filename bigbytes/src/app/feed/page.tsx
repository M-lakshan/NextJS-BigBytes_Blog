'use client';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import SinglePost from "@/components/specific/post";
import clsx from "clsx";

type FeedProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Feed({ classList }: FeedProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);
  const blog = useSelector((state: RootState) => state.blog);
  const [pageLayout, setPageLayout] = useState("list");
  
  return <main id="feed" className={cls}>
    <h2>Feed Page</h2>
    {(blog?.posts.length >= 1 && blog?.publishers.length >= 1) ? <div className="blog_posts">
      {blog.posts.map((eachBP,idx) => (blog.publishers.map(pbl => pbl.id  ).includes(eachBP.publisher)) ? <SinglePost
        key={`bp_${idx}_${eachBP.id}`}
        classList={{
          tw: [],
          cs: []
        }}
        postObj={eachBP}
        type="feed"
        layout={pageLayout}
        session_exists={(user?.sts)}
      /> : null)}
    </div> : <div className="empty_context">
      <p>- nothing to show | blog is empty -</p>
    </div>}
  </main>
}
