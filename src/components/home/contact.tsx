"use client";

import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";
import Container from "../container";
import { GoArrowRight } from "react-icons/go";

export default function Contact() {
  return (
    <Container className=" mt-16">
      <div className="">
        <h1
          className={cn(
            " text-[56px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
            archivo.className,
          )}
        >
          Let&apos;s Work <br />
          <span className=" ml-0 lg:ml-60">Together</span>
        </h1>
      </div>

      <div className="mt-2 flex flex-col gap-x-24 gap-y-8 lg:mt-16 lg:flex-row">
        <div className=" flex-1 ">
          <div className=" flex flex-col gap-4 lg:max-w-xs">
            <p>
              Engage with Me: Feel Free to Get in Touch – I&apos;m Excited to
              Connect with You!
            </p>
            <GoArrowRight size={20} className=" hidden lg:block" />
          </div>
        </div>

        <div className=" w-full lg:w-[calc(100%/2+72px)]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className=" space-y-2">
              <label htmlFor="">What&apos;s your name?</label>
              <input
                type="text"
                className=" h-14 w-full rounded-full border border-black px-4 py-2.5 focus:outline-none dark:bg-neutral-800"
              />
            </div>
            <div className=" space-y-2">
              <label htmlFor="">What&apos;s your email?</label>
              <input
                type="text"
                className=" h-14 w-full rounded-full border border-black px-4 py-2.5 focus:outline-none  dark:bg-neutral-800"
              />
            </div>
          </div>
          <div className=" mt-4 space-y-2">
            <label htmlFor="">Your message</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className=" w-full rounded-[28px] border border-black px-4 py-2.5 focus:outline-none dark:bg-neutral-800"
            ></textarea>
          </div>
          <div className=" mt-8 flex justify-center lg:justify-start">
            <button className=" group relative flex aspect-square w-36 items-center justify-center overflow-hidden rounded-full bg-black px-6 dark:bg-white">
              <p className="flex items-center gap-2 text-white transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 dark:text-black">
                Send it!
              </p>
              <p className="absolute flex translate-y-6 items-center gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-black">
                Soon
              </p>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
