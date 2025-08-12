"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main id="not_found" className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-600">⚠️&nbsp;404 : {` NOT FOUND `}</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for was not found.</p>
      <Link
        href="/"
        className="action_btn"
      >
        Home
      </Link>
    </main>
  );
}