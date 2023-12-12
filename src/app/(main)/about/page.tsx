import Educations from "@/components/about/educations";
import Skills from "@/components/about/skills";
import Summary from "@/components/about/summary";
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
                  sizes="100%"
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

        <div className="mt-8 flex items-center gap-2">
          <div className="relative aspect-square w-3">
            <div className=" absolute aspect-square w-3 animate-ping rounded-full bg-green-500"></div>
            <div className=" absolute left-1/2 top-1/2 aspect-square w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
          </div>
          <p className=" text-green-500">Available for work</p>
        </div>
        <div className="mt-2 flex flex-col gap-0 lg:flex-row lg:gap-24">
          <div className=" flex-1">
            <Summary />
            <Educations />
            <Skills />
          </div>
          <div className=" w-96">
            {/* <div className="flex flex-col leading-relaxed">
              <p>
                Github:{" "}
                <Link
                  href="https://github.com/zulfianfreza"
                  className=" font-medium"
                >
                  https://github.com/zulfianfreza
                </Link>
              </p>
              <p>
                Website:{" "}
                <Link href="https://julianreza.com" className=" font-medium">
                  https://julianreza.com/
                </Link>
              </p>
              <p>
                Linkedin:{" "}
                <Link
                  href="https://www.linkedin.com/in/zulfian-fachru-reza/"
                  className=" font-medium"
                >
                  https://www.linkedin.com/in/zulfian-fachru-reza/
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </MotionContainer>
    </Container>
  );
}
