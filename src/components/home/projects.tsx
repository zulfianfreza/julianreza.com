"use client";

import { IProject } from "@/@types";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";
import { Element } from "react-scroll";
import Container from "../container";
import ProjectItem from "../project-item";

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Element name="projects" />
      <Container className=" mt-16 min-h-screen">
        <div className="flex flex-col-reverse items-start justify-between gap-2 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <p className=" ">
              Have a look at some of <br className=" hidden lg:block" /> the
              projects i&apos;ve worked on.
            </p>
            <GoArrowDownRight size={20} className="hidden lg:block" />
          </div>
          <div className="flex">
            <h1
              className={cn(
                " text-left text-[56px] font-medium leading-none tracking-tight md:text-[96px] lg:text-right lg:text-[156px]",
                archivo.className,
              )}
            >
              Selected <br className=" hidden lg:block" />
              Projects
            </h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-8 lg:gap-16">
          {projects
            .filter((project) => project.isPinned)
            .reverse()
            .map((project, i) => (
              <ProjectItem
                project={project}
                key={i}
                index={i + 1}
                isRight={!!(i & 1)}
              />
            ))}
        </div>

        <div className=" mt-8 flex justify-center lg:mt-16">
          <Link
            href="/projects"
            className=" group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-8 dark:bg-white"
          >
            <p className="flex items-center gap-2 text-white transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 dark:text-black">
              Explore all projects. <GoArrowRight />
            </p>
            <p className="absolute flex translate-y-6 items-center gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-black">
              Explore all projects. <GoArrowRight />
            </p>
          </Link>
        </div>
      </Container>
    </>
  );
}
