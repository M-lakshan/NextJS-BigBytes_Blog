"use client";

import Link from "next/link";
import clsx from "clsx";

type NotFoundProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  type?: string
  redirect?: string
};

export default function NotFound({ classList, type, redirect }: NotFoundProps) {
  const cls = clsx(
    classList?.tw,
    "min-h-screen flex flex-col items-center justify-center p-8 text-center",
    classList?.cs
  );

  return (
    <main id="not_found" className={cls}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-600">⚠️&nbsp;404 : {` NOT FOUND `}</h1>
      <p className="text-xl mb-8">Sorry, the {(type) ? type : "page"} you are looking for was not found.</p>
      <Link
        href={(redirect) ? `/${redirect}` : '/'}
        className="action_btn"
      >
        Go Back
      </Link>
    </main>
  );
}