"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface ProjectContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: ProjectContentProps) {
  return (
    <div className=" prose-code:scrollbar-thin prose-code:scrollbar-track-transparent prose-code:scrollbar-thumb-secondary-400 prose-pre:scrollbar-thumb-rounded-full prose mt-8 max-w-full dark:prose-invert prose-pre:border prose-pre:border-white/25 prose-pre:p-0 prose-img:rounded-lg">
      <MDXRemote {...content} />
    </div>
  );
}
