import clsx from "clsx";

type ResultProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Result({ classList }: ResultProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="Result" className={cls}>
    <h2>Result Page</h2>    
  </main>
}
