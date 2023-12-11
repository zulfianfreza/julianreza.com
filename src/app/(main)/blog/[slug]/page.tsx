import Container from "@/components/container";
import MDXContent from "@/components/mdx-content";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getPostBySlug } from "@/services/post";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import React from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/atom-one-dark.min.css";
import { Metadata } from "next";
import MotionContainer from "@/components/motion-container";

interface PostPageParams {
  params: { slug: string };
}

export const generateMetadata = ({ params }: PostPageParams): Metadata => {
  const post = getPostBySlug(params.slug);
  return {
    title: post.title + " - Julian Reza",
    description: post.summary,
  };
};

export default async function PostPage({ params }: PostPageParams) {
  const post = getPostBySlug(params.slug);

  const content = await serialize(post.content, {
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
            "text-[56px] font-medium leading-tight",
          )}
        >
          {post.title}
        </h1>

        <div
          className=" relative mt-4 aspect-[16/10] w-full  overflow-hidden rounded-xl  bg-neutral-800 p-10 "
          data-scroll
          data-scroll-speed={0.5}
        >
          <Image
            src={post.thumbnail ?? ""}
            fill
            alt=""
            className=" scale-[1] object-cover object-center transition-all duration-500 hover:scale-[1.05]"
          />
        </div>

        <MDXContent content={content} />
      </MotionContainer>
    </Container>
  );
}
