'use client';

import { useEffect, useState } from "react";
import { SinglePostAlt } from "@/components/specific/post";
import clsx from "clsx";
import NotFound from '@/app/not-found';
import ProgressState from "@/components/elements/progressState";

type SpecificPostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  params: { slug: string[] }
};

export default function SpecificPost({ classList, params }: SpecificPostProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const slugPath = params.slug?.join("/") ?? "";

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
      <h2>Post Page</h2>
      <SinglePostAlt
        classList={{ tw: [], cs: [] }}
        publisher_alt={null}
        coauthor_alt={null}
        postObj={postData}
        format="feed"
        layout="grid"
        session_exists={false}
      />
    </main>
  );
}