import clsx from "clsx";
import Link from "next/link";
import { FaBullseye, FaUserCog, FaPowerOff, FaSearch } from 'react-icons/fa';

type HeaderProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  },
  logo?: string,
  slug?: string,
  session: boolean
}

export default function Header({ classList, logo, session, slug }: HeaderProps) {
  const cls = clsx(classList?.tw, classList?.cs);

  return <header className={cls}>
    <div className="logo_h">
      <Link href="/">
        <img src={logo} alt="bigbytes_logo"/>
      </Link>
    </div>
    <nav className="flex gap-4">
      <Link href="/about">About</Link>
      <Link href="/browse">Browse</Link>
      <FaSearch/>
      {(session) && <Link href="/account">
        <FaUserCog className="nav_icon user" />
      </Link>}
      <Link href="/login">
        {(session) ? <FaPowerOff className="nav_icon logout" /> : <FaBullseye className="nav_icon login" />}
      </Link>
    </nav>
  </header>
}