"use client"; // Mark as client component if you want to use hooks or interactivity

import Link from "next/link";

export default function NotFound() {
  return (
    <main id="not_found" className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for was not found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </main>
  );
}