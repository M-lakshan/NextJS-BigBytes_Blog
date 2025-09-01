'use client';

import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import { SinglePost } from "@/components/specific/post";
import Development from "@/app/under-dev";
import clsx from "clsx";

type FeedProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  };
  feedPosts?: object[];
}

export default function Feed({ classList, feedPosts }: FeedProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);
  const blog = useSelector((state: RootState) => state.blog) || feedPosts;
  const underDevelopment = useSelector((state: RootState) => state.development?.pages?.feed);
  const [pageLayout, setPageLayout] = useState("list");

  if(underDevelopment) return <Development />

  if() {
    return <main id="feed" className={cls}>
      {(blog?.posts.length >= 1 && blog?.publishers.length >= 1) ? <div className="blog_posts">
        {blog.posts.map((eachBP,idx) => (blog.publishers.map(pbl => pbl.id).includes(eachBP.publisher)) ? <SinglePost
          key={`bp_${idx+1}_${eachBP.id}`}
          classList={{
            tw: [],
            cs: []
          }}
          publisher_alt={blog?.publishers?.find(pb => pb.id === eachBP.publisher)}
          coauthor_alt={blog?.coauthors?.find(ca => ca.id === eachBP.coauthor)}
          postObj={eachBP}
          type="feed"
          layout={pageLayout}
          session_exists={(user?.sts)}
          dynamic_posts={(feedPosts!=null)}
          /> : null)}
      </div> : <div className="empty_context">
        <p>- nothing to show | blog is empty -</p>
      </div>}
    </main>
  }

  return <main id="feed" className={cls}>
    {(blog?.posts.length >= 1 && blog?.publishers.length >= 1) ? <div className="blog_posts">
      {blog.posts.map((eachBP,idx) => (blog.publishers.map(pbl => pbl.id).includes(eachBP.publisher)) ? <SinglePost
        key={`bp_${idx+1}_${eachBP.id}`}
        classList={{
          tw: [],
          cs: []
        }}
        publisher_alt={blog?.publishers?.find(pb => pb.id === eachBP.publisher)}
        coauthor_alt={blog?.coauthors?.find(ca => ca.id === eachBP.coauthor)}
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
