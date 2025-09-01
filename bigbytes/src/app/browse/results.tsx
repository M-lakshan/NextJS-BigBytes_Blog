"use client";

import { FaLocationArrow } from 'react-icons/fa';
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import Development from "@/app/under-dev";
import SubTitle from "@/components/elements/subTitle";
import Link from "next/link";
import clsx from "clsx";

type ResultProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  },
  slugList?: string[]
}

export default function Results({ classList, slugList }: ResultProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const underDevelopment = useSelector((state: RootState) => state.development?.pages?.browse);
    
  if(underDevelopment) return <Development/>

  return <main id="browse" className={cls}>
    <SubTitle 
      elm_for="Popular Topics"
      expander={true}
    />   
    <ul className="topics">
      {slugList?.map((slug) => (
        <li key={slug} className="topic_container">
          <Link href={`/browse/${slug}`} className="topic">
            <FaLocationArrow className="selection" />
            {slug}
          </Link>
        </li>
      ))}
    </ul> 
  </main>
}
