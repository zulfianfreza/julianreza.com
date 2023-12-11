"use client";

import { IPost } from "@/@types";
import { cn } from "@/lib/utils";
import { GoArrowDownLeft, GoArrowRight } from "react-icons/go";
import Container from "../container";
import PostItem from "../post-item";
import { archivo } from "@/lib/constants";

interface PostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Container className=" mt-8 lg:mt-16">
      <div className=" flex flex-col items-start justify-between lg:flex-row lg:items-center">
        <h1
          className={cn(
            "text-[56px] font-medium leading-none tracking-tight md:text-[96px] lg:text-[156px]",
            archivo.className,
          )}
        >
          Latest <br className=" hidden lg:block" />
          Posts
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            Discover <br className=" hidden lg:block" />
            my random posts.
          </p>
          <GoArrowDownLeft size={20} className=" hidden lg:block" />
        </div>
      </div>

      <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
        {posts
          .filter((post) => post.isPinned)
          .map((post, i) => (
            <div
              className={cn({ "lg:mt-24": i == 0 }, { "lg:mt-8": i == 1 })}
              key={i}
            >
              <PostItem post={post} />
            </div>
          ))}
      </div>

      <div className=" mt-8 flex justify-center">
        <button className=" group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-8 dark:bg-white">
          <p className="flex items-center gap-2 text-white transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0 dark:text-black">
            See all posts. <GoArrowRight />
          </p>
          <p className="absolute flex translate-y-6 items-center gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 dark:text-black">
            See all posts. <GoArrowRight />
          </p>
        </button>
      </div>
    </Container>
  );
}
