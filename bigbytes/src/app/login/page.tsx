'use client';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/redux/slicers/userSlice";
import type { RootState } from "@/redux/store/store";
import Development from "@/app/under-dev";
import { useRouter } from "next/navigation";
import { FaArchway } from 'react-icons/fa';
import clsx from "clsx";
import Link from "next/link";

type LoginProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  };
};

export default function Login({ classList }: LoginProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const user = useSelector((state: RootState) => state.user);
  const [session, setSession] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const underDevelopment = useSelector((state: RootState) => state.development?.pages?.feed);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    // e.preventDefault();
    console.log("Logging in with:", { username, password });
    setSession(true);
  };

  const handleRegister = () => {
    console.log("Redirect to register");
  };
  
  useEffect(() => {
    if(!user?.sts && session) {
      dispatch(login(username));
    }
  }, [session]);

  useEffect(() => {
    if(user?.sts) {
      router.push("/account");
    }
  }, [user?.sts, router]);
    
  if(underDevelopment) return <Development type={true}/>

  return (
    <main id="login" className={cls}>
      <div className="container">
        <h2 className="title">Welcome</h2>
        <Link href="/" className="redirect">
          <span>Back to Home&nbsp;&nbsp;</span>
          <FaArchway />
        </Link>
        <form className="login_form">
          <input
            type="text"
            placeholder="Username"
            className="input_field text_input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input_field text_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form_actions">
            <button
              onClick={handleRegister}
              className="action_btn btn_reg"
              >
              Register
            </button>
            <button
              onClick={handleLogin}
              className="action_btn btn_login"
              >
              Log-In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}