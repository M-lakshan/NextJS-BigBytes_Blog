'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slicers/userSlice";
import type { RootState } from "@/redux/store/store";
import { FaBullseye, FaUserCog, FaPowerOff, FaSearch } from 'react-icons/fa';

type HeaderProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  },
  logo?: string,
  slug?: string
}

export default function Header({ classList, logo, slug }: HeaderProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);
  
  const links = [
    ...(user?.sts ? [{ _href: "/activity", _label: "Activity" }] : []),
    { _href: "/feed", _label: "Feed" },
    { _href: "/browse", _label: "Browse" },
    { _href: "/about", _label: "About" },
  ];

  const dispatch = useDispatch();
  const pathname = usePathname();

  return <header className={`${cls} ${(pathname!="/") ? "overlay" : ''}`}>
    <div className="logo_h">
      <Link href="/">
        <img src={logo} alt="bigbytes_logo"/>
      </Link>
    </div>
    <nav className="nav_container">
      <div className="nav_links">
        {links.map(({ _href, _label }) => (
          <Link
            key={_href}
            href={_href}
            className={clsx("nav_link", { active: pathname === _href })}
          >
            {_label}
          </Link>
        ))}
      </div>
      <div className="extensions">
        <button className="nav_act_btn nav_search"><FaSearch/></button>
        {(user?.sts) && <button 
          className="nav_act_btn nav_logout"
          onClick={() => dispatch(logout())}
        >
          <FaPowerOff className="nav_icon logout" />
        </button>}
        {(pathname!="/login") && <button className="nav_act_btn nav_logout">
          {(user?.sts) ? <Link href="/account">
            <FaUserCog className="nav_icon user" />
          </Link> : <Link href="/login">
            <FaBullseye className="nav_icon login" />
          </Link>}
        </button>}
      </div>
    </nav>
  </header>
}