"use client";

import React from "react";

export default function Summary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className=" col-span-4">
        <p>(Summary)</p>
      </div>
      <div className="col-span-8 flex flex-col">
        <h1 className=" font-medium">Hi, i&apos;m Julian 👋</h1>
        <p className=" leading-relaxed">
          I&apos;m a fullstack developer who learns quickly and has a strong
          interest in acquiring new skills. I&apos;m passionate about crafting
          seamless interfaces and powerful backends to shape the digital
          frontier. I&apos;m proficient in modern frameworks and libraries like
          React.js, Next.js, TypeScript, Tailwind CSS, Golang, Flutter, and
          more.
        </p>
      </div>
    </div>
  );
}
