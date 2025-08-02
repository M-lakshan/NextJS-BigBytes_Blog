'use client';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type AccountProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Account({ classList }: AccountProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if(!user?.sts) {
      router.push("/login");
    }
  }, [user?.sts, router]);

  return <main id="profile" className={cls}>
    <h2>Profile Page</h2>    
  </main>
}
