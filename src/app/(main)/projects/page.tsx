import Container from "@/components/container";
import MotionContainer from "@/components/motion-container";
import ProjectItem from "@/components/project-item";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getProjects } from "@/services/project";
import { Metadata } from "next";
import Image from "next/image";
import { GoArrowDownLeft } from "react-icons/go";

export const metadata: Metadata = {
  title: "Projects - Julian Reza",
};

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <Container className=" min-h-screen pt-24 lg:pt-24">
      <MotionContainer>
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col">
            <div className="relative flex items-center gap-2 lg:gap-4">
              <div className=" relative aspect-[16/10] h-[40px] overflow-hidden rounded-full bg-black md:h-[72px] lg:h-[108px]">
                <Image
                  src="/images/work.gif"
                  className=" object-cover"
                  fill
                  alt=""
                  sizes="100%"
                />
              </div>
              <h1
                className={cn(
                  " flex text-[56px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
                  archivo.className,
                )}
              >
                Project <br />
              </h1>
            </div>
            <h1
              className={cn(
                " text-[56px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
                archivo.className,
              )}
            >
              Showcase
            </h1>
          </div>
          <div className="mt-2 flex flex-col items-start gap-4 lg:mt-0">
            <p>
              Tech Tales: A Journey <br className=" hidden lg:block" /> Through
              My Project Showcase.
            </p>
            <GoArrowDownLeft size={20} className=" hidden lg:block" />
          </div>
        </div>

        <div className=" mt-8 flex flex-col gap-8 lg:gap-16">
          {projects
            .filter((project) => project.isShow)
            .map((project, i) => (
              <ProjectItem
                key={i}
                project={project}
                isRight={!!(i & 1)}
                index={i + 1}
              />
            ))}
        </div>
      </MotionContainer>
    </Container>
  );
}
