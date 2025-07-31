import clsx from "clsx";

type AccountProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Account({ classList }: AccountProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="profile" className={cls}>
    <h2>Profile Page</h2>    
  </main>
}
