import Container from "@/components/container";
import MDXContent from "@/components/mdx-content";
import MotionContainer from "@/components/motion-container";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getProjectBySlug } from "@/services/project";
import "highlight.js/styles/atom-one-dark.min.css";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: ProjectPageParams): Metadata => {
  const post = getProjectBySlug(params.slug);
  return {
    title: post.title + " - Julian Reza",
    description: post.summary,
  };
};

export default async function ProjectPage({ params }: ProjectPageParams) {
  const project = getProjectBySlug(params.slug);

  const content = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  });
  return (
    <Container className=" mx-auto min-h-screen w-full max-w-5xl pt-24 lg:pt-24">
      <MotionContainer>
        <h1
          className={cn(
            archivo.className,
            "text-[24px] font-medium leading-tight tracking-tight lg:text-[36px]",
          )}
        >
          {project.title}
        </h1>
        <p className="">{project.summary}</p>
        <div className="mt-4 flex gap-4">
          <Link
            href={project.repo}
            target={project.repo && project.repo != "" ? "_blank" : ""}
            className="flex items-center gap-1"
          >
            {/* <SiGithub /> */}
            <span>Repository</span>
          </Link>
          <Link
            target="_blank"
            href={project.demo}
            className="flex items-center gap-1"
          >
            {/* <HiOutlineGlobeAlt /> */}
            <span>Visit</span>
          </Link>
        </div>
        <div className=" mt-8">
          {project.isMockup ? (
            <div
              className=" aspect-[4/3] w-full overflow-hidden "
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
                  className=" scale-[1] object-cover object-center transition-all duration-500 hover:scale-[1.05]"
                />
              </div>
            </div>
          ) : (
            <div className=" flex aspect-[16/10] w-full items-center justify-center bg-neutral-100 p-16">
              <div className=" relative aspect-video w-full">
                <Image
                  src={project.image ?? ""}
                  fill
                  alt={project.title}
                  className=" object-cover object-top transition-all duration-500 group-hover:scale-[1.05]"
                />
              </div>
            </div>
          )}
        </div>

        <MDXContent content={content} />

        <div className=" mt-8">
          <h1 className="">Tech Stack</h1>
          <div className="flex flex-row flex-wrap gap-x-2.5">
            {/* {project.stack.map((tech, i) => ( */}
            <p className=" leading-relaxed">{project.stack.join(", ")}</p>
            {/* ))} */}
          </div>
        </div>
      </MotionContainer>
    </Container>
  );
}
