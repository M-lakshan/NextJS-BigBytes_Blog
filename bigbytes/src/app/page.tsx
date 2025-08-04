'use client';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main id="home" className="min-h-screen p-8 bg-white">
      <article className="background">
        <div className="bg_img_placeholder bg_img_placeholder_i"></div>
        <div className="bg_img_placeholder bg_img_placeholder_ii"></div>
      </article>

      <article className="page">
        <section className="hero mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to BigBytes Blog</h1>
          <p className="text-lg context mx-auto">
            Discover insightful articles, tutorials, and thought pieces on tech, design, and innovation.
          </p>
          <h3>
            <Link href="/feed">
              <FaAngleLeft className="icon" />
              <FaAngleLeft className="icon" />
              <FaAngleLeft className="icon" />
              <span>&nbsp;Browse Posts&nbsp;</span>
              <FaAngleRight className="icon"/>
              <FaAngleRight className="icon" />
              <FaAngleRight className="icon" />
            </Link>
          </h3>
        </section>

        <section className="sub_containers features grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Fresh Content</h3>
            <p className="context">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sem sed purus hendrerit tincidunt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tech Insights</h3>
            <p className="context">
              Quisque porta magna at orci suscipit, at vulputate nulla tempor. Suspendisse potenti.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Open Discussions</h3>
            <p className="context">
              Join our community and share your thoughts on trending topics. Sed ut perspiciatis unde omnis iste natus.
            </p>
          </div>
        </section>

        <section className="cta mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Exploring Now</h2>
          <p className="context mb-6">
            Dive into curated knowledge and contribute your own. BigBytes is built for learners and thinkers.
          </p>
          <h3>
            <Link href="/about">
              <FaAngleLeft className="icon" />
              <FaAngleLeft className="icon" />
              <FaAngleLeft className="icon" />
              <span>&nbsp;Learn More About Us&nbsp;</span>
              <FaAngleRight className="icon"/>
              <FaAngleRight className="icon" />
              <FaAngleRight className="icon" />
            </Link>
          </h3>
        </section>
      </article>
    </main>
  );
}
