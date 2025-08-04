"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import Development from "@/app/under-dev";
import clsx from "clsx";

type ResultProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Result({ classList }: ResultProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const underDevelopment = useSelector((state: RootState) => state.development?.pages?.browse);
    
  if(underDevelopment) return <Development type={true}/>

  return <main id="Result" className={cls}>
    <h2>Result Page</h2>    
  </main>
}
