import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Posts from "@/components/home/posts";
import Projects from "@/components/home/projects";
import MotionContainer from "@/components/motion-container";
import { getPosts } from "@/services/post";
import { getProjects } from "@/services/project";
import { Archivo } from "next/font/google";

const font = Archivo({ subsets: ["latin"] });

export default function HomePage() {
  const projects = getProjects();
  const posts = getPosts();
  return (
    <MotionContainer>
      <Hero />

      <Projects projects={projects} />

      <Posts posts={posts} />

      <Contact />
    </MotionContainer>
  );
}
