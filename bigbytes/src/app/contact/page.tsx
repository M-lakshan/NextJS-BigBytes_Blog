import clsx from "clsx";

type ContactProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Contact({ classList }: ContactProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="contact" className={cls}>
    <h2>Contact Page</h2>    
  </main>
}
