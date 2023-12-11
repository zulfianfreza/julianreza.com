"use client";

import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";
import Container from "../container";

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
          <span className=" ml-24 lg:ml-60">Together</span>
        </h1>
      </div>
    </Container>
  );
}
