'use client';

import clsx from "clsx";
import Link from "next/link";
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

  const dispatch = useDispatch();

  return <header className={cls}>
    <div className="logo_h">
      <Link href="/">
        <img src={logo} alt="bigbytes_logo"/>
      </Link>
    </div>
    <nav className="flex gap-4">
      {(user?.sts) && <Link href="/activity">Activity</Link>}
      <Link href="/feed">Feed</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/about">About</Link>
      <button className="nav_act_btn nav_search"><FaSearch/></button>
      {(user?.sts) && <button 
        className="nav_act_btn nav_logout"
        onClick={() => dispatch(logout())}
      >
        <FaPowerOff className="nav_icon logout" />
      </button>}
      {(user?.sts) ? <Link href="/account">
        <FaUserCog className="nav_icon user" />
      </Link> : <Link href="/login">
        <FaBullseye className="nav_icon login" />
      </Link>}
    </nav>
  </header>
}