'use client';

import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { SinglePostAlt } from "@/components/specific/post";
import clsx from "clsx";
import NotFound from '@/app/not-found';
import ProgressState from "@/components/elements/progressState";

type SpecificPostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  slugs?: { slug: string[] }
};

export default function SpecificPost({ classList, slugs }: SpecificPostProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // console.log((slugs)); //not-working -> alternative: useParams() hook

  const params = useParams();
  
  const slugArray = (Array.isArray(params.slug)) ? params.slug : [params.slug];
  const slugPath = slugArray.join("/") ?? "";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/cms/${slugPath}`);

        if (!res.ok) throw new Error("Post not found");
        
        const data = await res.json();
        setPostData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slugPath]);

  if (loading) return <ProgressState />;
  if (error || !postData) return <NotFound 
    type="post"
    redirect="browse"
  />

  return (
    <main id="browse" className={cls}>
      <div className="single_post">
        <SinglePostAlt
          classList={{ tw: [], cs: [] }}
          publisher_alt={null}
          coauthor_alt={null}
          postObj={postData}
          format="feed"
          layout="single"
          session_exists={false}
        />
      </div>
    </main>
  );
}