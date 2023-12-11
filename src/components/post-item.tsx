"use client";

import { IPost } from "@/@types";
import { archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return (
    <div className=" w-full">
      <div className=" group relative aspect-[16/10] w-full overflow-hidden rounded-xl ">
        <Image
          src={post?.thumbnail as string}
          fill
          alt=""
          className=" object-cover object-center transition-all duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <Link
        href={`/blog/${post?.slug}`}
        className={cn(
          " mt-4 line-clamp-2 w-fit text-[20px] font-medium leading-tight",
          archivo.className,
        )}
      >
        {post?.title}
      </Link>
      <div className=" mt-2 flex justify-between">
        <p className=" text-sm">
          {format(
            post?.date ? new Date(post?.date) : new Date(),
            "dd MMM, yyyy",
          )}
        </p>
        <p className=" text-sm">{readingTime} min</p>
      </div>
    </div>
  );
}
