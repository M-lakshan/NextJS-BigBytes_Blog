'use client';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/redux/slicers/userSlice";
import type { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
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
    console.log(!user?.sts,session);
    if(!user?.sts && session) {
      dispatch(login(username));
    }
  }, [session]);

  useEffect(() => {
    if(user?.sts) {
      router.push("/account");
    }
  }, [user?.sts, router]);

  return (
    <main id="login" className={cls}>
      <div className="w-full max-w-md bg-white rounded shadow p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Log-In
          </button>
          <button
            onClick={handleRegister}
            className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
          >
            Register
          </button>
        </div>
        <p className="text-center text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}