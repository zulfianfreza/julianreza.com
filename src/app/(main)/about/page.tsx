import Container from "@/components/container";
import MotionContainer from "@/components/motion-container";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { GoArrowDownLeft, GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "About - Julian Reza",
};

export default function AboutPage() {
  return (
    <Container className=" min-h-screen pt-24 lg:pt-24">
      <MotionContainer>
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col">
            <h1
              className={cn(
                " text-[72px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
                archivo.className,
              )}
            >
              About
            </h1>
            <div className="relative flex items-center gap-2 lg:gap-4">
              <div className=" relative aspect-[16/10] h-[56px] overflow-hidden rounded-full bg-black md:h-[72px] lg:h-[108px]">
                <Image
                  src="/images/about.gif"
                  className=" object-cover"
                  fill
                  alt=""
                />
              </div>
              <h1
                className={cn(
                  " flex text-[72px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
                  archivo.className,
                )}
              >
                Me
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Unveiling the Wizard Behind <br className=" hidden lg:block" />{" "}
              the Code: My Journey, My Passion, My Story.
            </p>
            <GoArrowDownLeft size={20} className=" hidden lg:block" />
          </div>
        </div>

        <div className=" mx-auto mt-16 max-w-2xl">
          <p>
            Fullstack sorcerer conjuring code magic for captivating digital
            experiences. Passionate about crafting seamless interfaces and
            powerful backend to shape the digital frontier. Proficient in modern
            framework and libraries like React.js, Next.js, TypeScript, Tailwind
            CSS, Golang, Flutter, and more.
          </p>

          <div className=" mt-16">
            <h1 className=" text-lg font-medium">Educations</h1>
            <p>
              I&apos;m graduated from University of Computer Indonesia with a
              Bachelor in Informatics Engineering.
            </p>
          </div>

          <div className=" mt-16">
            <h1 className=" text-lg font-medium">Skills</h1>
            <div className="mt-4 flex flex-col gap-4">
              <div className=" grid grid-cols-12 gap-8">
                <div className=" col-span-4 flex justify-start">
                  <p>Programming Languages</p>
                </div>
                <div className=" col-span-8">
                  <p>JavaScript, TypeScript, Dart, Golang, PHP</p>
                </div>
              </div>

              <div className=" grid grid-cols-12 gap-8">
                <div className=" col-span-4 flex justify-start">
                  <p>Framework and Libraries</p>
                </div>
                <div className=" col-span-8">
                  <p className=" leading-relaxed">
                    React.js, Next.js, Express, MongoDB, MySQL, PostgreSQL,
                    React Query, Redux Toolkit, Zustand, Prisma, Drizzle ORM,
                    Tailwind CSS, Bootstrap, Flutter, BLoC, Gin, Gorm, and
                    others.
                  </p>
                </div>
              </div>
              <div className=" grid grid-cols-12 gap-8">
                <div className=" col-span-4 flex justify-start">
                  <p>API</p>
                </div>
                <div className=" col-span-8">
                  <p>REST, tRPC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionContainer>
    </Container>
  );
}
