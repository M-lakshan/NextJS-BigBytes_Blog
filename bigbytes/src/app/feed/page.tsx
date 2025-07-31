import clsx from "clsx";

type FeedProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Feed({ classList }: FeedProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="feed" className={cls}>
    <h2>Feed Page</h2>    
  </main>
}
