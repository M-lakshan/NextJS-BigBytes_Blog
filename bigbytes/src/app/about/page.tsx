'use client';

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Development from "@/app/under-dev";
import clsx from "clsx";

type AboutProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
}

export default function About({ classList }: AboutProps) {
  const cls = clsx(classList?.tw, classList?.cs);
  const underDevelopment = useSelector((state: RootState) => state.development?.pages?.about);
    
  if(underDevelopment) return <Development type={true}/>

  return (
    <main id="about" className="min-h-screen px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">BigBytes Blog</h1>
        <p className="context text-lg leading-relaxed">
          Welcome to <strong>BigBytes</strong>, a digital space where we explore technology, creativity, and everything in between.
          Whether you're a curious coder, a design enthusiast, or just here to learn something new — you're in the right place.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Why Us?</h2>
        <p className="context text-md leading-relaxed">
          BigBytes is more than just a blog. It's a passion project aimed at breaking down complex tech concepts into digestible reads.
          From frontend frameworks to backend best practices, we serve up knowledge in hearty, byte-sized chunks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Meet Our Team</h2>
        <ul className="space-y-2">
          <li><strong>Elena Ruiz</strong> – AI Researcher</li>
          <li><strong>James Fulton</strong> – Full-Stack Developer</li>
          <li><strong>Priya Mehta</strong> – Product Designer</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Want to Get in Touch?</h2>
        <p className="context mb-4">We’d love to hear from you! Reach out on social or send us an email.</p>
        <div className="socials flex items-center space-x-4 text-xl">
          <a className="social_link" href="https://github.com/m-lakshan" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a className="social_link" href="https://twitter.com/#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a className="social_link" href="mail@bigbytes.blog">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
}
