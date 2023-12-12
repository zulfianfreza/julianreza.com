"use client";

import { IPost } from "@/@types";
import { archivo } from "@/lib/constants";
import { cn, getReadingTime } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className=" flex w-full flex-col">
      <Link
        href={`/blog/${post?.slug}`}
        className=" group relative aspect-[16/10] w-full overflow-hidden rounded-xl "
      >
        <Image
          src={post?.thumbnail as string}
          fill
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover object-center transition-all duration-500 group-hover:scale-[1.05]"
        />
      </Link>
      <Link
        href={`/blog/${post?.slug}`}
        className={cn(
          " mt-2 line-clamp-2 w-fit text-[20px] font-medium leading-snug",
          archivo.className,
        )}
      >
        {post?.title}
      </Link>
      <div className=" mt-1 flex justify-between">
        <p className=" text-sm">
          {format(
            post?.date ? new Date(post?.date) : new Date(),
            "dd MMM, yyyy",
          )}
        </p>
        <p className=" text-sm">{getReadingTime(post.content)} min</p>
      </div>
    </div>
  );
}
