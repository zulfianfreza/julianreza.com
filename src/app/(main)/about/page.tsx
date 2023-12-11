import Educations from "@/components/about/educations";
import Skills from "@/components/about/skills";
import Container from "@/components/container";
import MotionContainer from "@/components/motion-container";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoArrowDownLeft } from "react-icons/go";

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

        <div className="mt-8 flex flex-col gap-24 lg:flex-row">
          <div className=" flex-1">
            <p>
              Fullstack sorcerer conjuring code magic for captivating digital
              experiences. Passionate about crafting seamless interfaces and
              powerful backend to shape the digital frontier. Proficient in
              modern framework and libraries like React.js, Next.js, TypeScript,
              Tailwind CSS, Golang, Flutter, and more.
            </p>

            <Educations />
            <Skills />
          </div>
          <div className=" w-96">
            <div className="flex flex-col">
              <p>
                Github: <Link href="">https://github.com/zulfianfreza</Link>
              </p>
              <p>
                Website: <Link href="">https://julianreza.com/</Link>
              </p>
            </div>
          </div>
        </div>
      </MotionContainer>
    </Container>
  );
}
