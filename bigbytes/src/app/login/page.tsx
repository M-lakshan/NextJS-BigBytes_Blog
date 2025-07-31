import clsx from "clsx";

type LoginProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function Login({ classList }: LoginProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <main id="login" className={cls}>
    <h2>Login Page</h2>    
  </main>
}
