"use client";

import { SOCIAL_LIST, archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";
import { Link as LinkRS } from "react-scroll";
import Container from "../container";

export default function Hero() {
  return (
    <Container className=" relative flex min-h-[100dvh] w-full flex-col items-center justify-between ">
      <div className="absolute bottom-24 right-6 flex flex-col items-center gap-4 lg:right-10 ">
        {SOCIAL_LIST.filter((social) => social.isPinned).map((social, i) => (
          <Link
            href={social.url}
            key={i}
            className=" group relative flex items-center justify-center overflow-hidden"
          >
            <social.icon className=" h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        ))}
      </div>

      <div className=""></div>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className=" flex w-full flex-col items-start">
            <h1
              className={cn(
                "  text-[72px] font-medium leading-none tracking-tight md:text-[112px] lg:text-[156px] xl:text-[196px] ",
                archivo.className,
              )}
            >
              Julian <br />
              <span>Reza</span>
            </h1>
          </div>
          <div className=" mt-8 max-w-md lg:mt-0">
            <GoArrowDownRight size={20} data-scroll data-scroll-speed={0.3} />
            <p className=" mt-4 leading-relaxed lg:mt-10">
              Fullstack sorcerer conjuring code magic for captivating digital
              experiences. Passionate about crafting seamless interfaces and
              powerful backend to shape the digital frontier.
              {/* Proficient in
              modern framework and libraries like React.js, Next.js, TypeScript,
              Tailwind CSS, Golang, Flutter, and more. */}
            </p>
          </div>
        </div>
        <div className=" mt-8 flex w-full items-center justify-start gap-6">
          <Link
            href="mailto:zulfian.025fr@gmail.com"
            className=" group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-8 dark:bg-white"
          >
            <p className="flex items-center gap-2 text-white transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 dark:text-black">
              Let&apos;s Connect
            </p>
            <p className="absolute flex translate-y-6 items-center gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-black">
              Let&apos;s Connect
            </p>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1ZE-REowUDG-3Qxoz_6J_ECCWS1d0JiO-/view?usp=drive_link"
            target="_blank"
            className=" group relative flex flex-col gap-2 overflow-hidden py-1.5 text-black dark:text-white"
          >
            <span className=" transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0">
              Resume
            </span>
            <span className=" absolute translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Resume
            </span>
          </Link>
        </div>
      </div>

      <LinkRS
        to="projects"
        spy={true}
        smooth="easeInOutQuart"
        duration={1000}
        className=" flex cursor-pointer justify-self-end lg:bottom-10"
      >
        Scroll
      </LinkRS>
    </Container>
  );
}
