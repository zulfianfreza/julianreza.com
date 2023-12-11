"use client";

import { MENU, SOCIAL_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { useLenis } from "@studio-freight/react-lenis";
import Container from "../container";
import { animateScroll } from "react-scroll";
import { GoArrowUp } from "react-icons/go";

export default function Footer() {
  const lenis = useLenis();
  return (
    <Container className=" mt-16">
      <div className="flex items-start justify-between">
        <div className="flex gap-10 lg:gap-20">
          <div className="flex flex-col">
            <h1 className={cn("text-lg font-medium")}>Sitemap</h1>
            <div className="mt-4 flex flex-col gap-1.5">
              {MENU.map((menu, i) => (
                <Link href={menu.path} key={i}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className={cn("text-lg font-medium")}>Socials</h1>
            <div className="mt-4 flex flex-col gap-1.5">
              {SOCIAL_LIST.map((social, i) => (
                <Link href={social.url} key={i}>
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button
          className=" flex cursor-pointer items-center gap-1"
          onClick={() =>
            animateScroll.scrollToTop({
              smooth: "easeInOutQuart",
              duration: 1000,
              spy: true,
            })
          }
        >
          Back to top <GoArrowUp size={16} />
        </button>
      </div>
      <div className=" mt-16 flex justify-between">
        <div className=" ml-0 ">
          <Logo />
        </div>

        <p className=" flex justify-end ">
          Copyright &copy; julianreza.com 2023.
        </p>
      </div>
    </Container>
  );
}
