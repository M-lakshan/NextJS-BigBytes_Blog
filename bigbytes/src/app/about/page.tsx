import clsx from "clsx";

type HeaderProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function About({ classList }: HeaderProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="about" className={cls}>
    <h2>About Page</h2>    
  </main>
}
