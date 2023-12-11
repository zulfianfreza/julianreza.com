"use client";

import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="/"
      className=" flex w-7 text-lg font-bold text-slate-800 dark:text-slate-50"
    >
      <div className="inline-block  h-[22px] w-[22px] overflow-hidden">
        <div className=" h-8 origin-top-right rotate-45 transform bg-black  dark:bg-white"></div>
      </div>
      <div className="-ml-4  -mt-[10px] inline-block w-[22px] overflow-hidden ">
        <div className=" h-8 origin-bottom-left rotate-45 transform bg-black backdrop-invert dark:bg-white"></div>
      </div>
    </Link>
  );
}
