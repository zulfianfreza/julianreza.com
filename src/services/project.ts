import { IProject } from "@/@types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getProjectBySlug = (slug: string): IProject => {
  const folder = path.join(process.cwd(), "src/data/project/");
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    title: matterResult.data.title,
    slug: file.replace(".mdx", ""),
    image: matterResult.data.image,
    summary: matterResult.data.summary,
    finish: matterResult.data.finish,
    content: matterResult.content,
    repo: matterResult.data.repo,
    demo: matterResult.data.demo,
    stack: matterResult.data.stack,
    isPinned: matterResult.data.isPinned,
    isMockup: matterResult.data.isMockup,
    isShow: matterResult.data.isShow,
  };
};

export const getProjects = (): IProject[] => {
  const folder = path.join(process.cwd(), "src/data/project/");
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".mdx"));

  const projects = markdownProjects.map((filename) => {
    const fileContents = fs.readFileSync(
      `src/data/project/${filename}`,
      "utf-8",
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".mdx", ""),
      image: matterResult.data.image,
      summary: matterResult.data.summary,
      finish: matterResult.data.finish,
      content: matterResult.content,
      repo: matterResult.data.repo,
      demo: matterResult.data.demo,
      stack: matterResult.data.stack,
      isPinned: matterResult.data.isPinned,
      isMockup: matterResult.data.isMockup,
      isShow: matterResult.data.isShow,
    };
  });

  return projects;
};
