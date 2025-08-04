"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  },
  logo?: string,
  year: string;
}

export default function Footer({ classList, logo, year }: FooterProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  const pathname = usePathname();

  return <footer className={`${cls} ${(pathname!="/") ? "overlay" : ''}`}>
    <div className="logo_f">
      <Link href="/">
        <img src={logo} alt="bigbytes_logo"/>
      </Link>
    </div>
    <div className="copyright">
      <p>All Rights Recieved | BigBytes &copy; {year}</p>
    </div>
  </footer>
}