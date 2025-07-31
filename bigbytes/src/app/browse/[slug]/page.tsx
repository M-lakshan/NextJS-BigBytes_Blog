import clsx from "clsx";

type SpecifPostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function SpecifPost({ classList }: SpecifPostProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="specific_post" className={cls}>
    <h2>Post Page</h2>    
  </main>
}
