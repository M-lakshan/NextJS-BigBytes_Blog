"use client";

import Link from "next/link";

type DevelopmentProps = {
  type?: boolean
}

export default function Development({ type }: DevelopmentProps) {
  return <main className="under_development">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-600">🚧 Under Development</h1>
    <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-600">
      This {(type) ? "feature" : "page"} is currently under development.&nbsp;
      {(type) ? "We’re working hard to make it available soon!" : "Sorry for any inconvenience caused!"}
    </p>
    <button className="action_btn"><Link href="/">Go back?</Link></button>
  </main>
}