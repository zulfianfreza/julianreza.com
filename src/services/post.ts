import { IPost } from "@/@types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getPostBySlug = (slug: string): IPost => {
  const folder = path.join(process.cwd(), "src/data/post/");
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    title: matterResult.data.title,
    slug: file.replace(".mdx", ""),
    content: matterResult.content,
    summary: matterResult.data.summary,
    date: matterResult.data.date,
    isPinned: matterResult.data.isPinned,
    thumbnail: matterResult.data.thumbnail,
  };
};

export const getPosts = (): IPost[] => {
  const folder = path.join(process.cwd(), "src/data/post/");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`src/data/post/${filename}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      summary: matterResult.data.summary,
      date: matterResult.data.date,
      slug: filename.replace(".mdx", ""),
      content: matterResult.content,
      isPinned: matterResult.data.isPinned,
      thumbnail: matterResult.data.thumbnail,
    };
  });

  return posts;
};
