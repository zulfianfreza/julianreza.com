"use client";

import { IProject } from "@/@types";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  project: IProject;
  isRight?: boolean;
  index: number;
}

export default function ProjectItem({
  project,
  isRight,
  index,
}: ProjectItemProps) {
  const number = String(index).padStart(2, "0");
  return (
    <div
      className={cn("flex flex-col lg:flex-row lg:gap-8", {
        "lg:flex-row-reverse": isRight,
      })}
    >
      {project.isMockup ? (
        <Link
          href={`/projects/${project.slug}`}
          className=" group aspect-[4/3] w-full overflow-hidden lg:w-3/5 "
          // data-scroll-section
        >
          <div
            className=" relative h-full w-full  overflow-hidden rounded-[16px]  bg-neutral-800 p-10 "
            data-scroll
            data-scroll-speed={0.5}
          >
            <Image
              src={project.image ?? ""}
              fill
              alt=""
              className=" object-cover object-center transition-all duration-500 group-hover:scale-[1.025] group-hover:blur-lg group-hover:brightness-75"
            />
            <div className=" absolute left-1/2 top-1/2 flex aspect-square w-[100px] -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-white text-black transition-all delay-75 duration-500 group-hover:scale-100">
              <p>View</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className=" group flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[0px] bg-neutral-200 p-16 lg:w-3/5">
          <div className=" relative h-full w-full shadow-xl">
            <Image
              src={project.image ?? ""}
              fill
              alt={project.title}
              className=" object-cover object-top transition-all duration-500 group-hover:scale-[1.05]"
            />
          </div>
        </div>
      )}
      <div
        className={cn("flex flex-1 flex-col items-start justify-end", {
          "lg:items-end lg:text-right": isRight,
        })}
        data-scroll
        data-scroll-speed={2}
      >
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "  mt-2 line-clamp-2 flex gap-[4px] text-[20px] font-medium leading-snug lg:text-[28px] xl:text-[36px]",
            archivo.className,
          )}
        >
          {project.title}
        </Link>
        <p className=" mt-1 line-clamp-2">{project.summary}</p>
      </div>
    </div>
  );
}
