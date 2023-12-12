import Container from "@/components/container";
import MotionContainer from "@/components/motion-container";
import PostItem from "@/components/post-item";
import { cn } from "@/lib/utils";
import { getPosts } from "@/services/post";
import { Metadata } from "next";
import { GoArrowDown } from "react-icons/go";

export const metadata: Metadata = {
  title: "Blog - Julian Reza",
};
export default function BlogPage() {
  const posts = getPosts();
  return (
    <Container className=" min-h-screen pt-24 lg:pt-24">
      <MotionContainer>
        <div className=" flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <h1
            className={cn(
              "text-[56px] font-medium leading-none tracking-tight lg:text-[156px]",
            )}
          >
            Latest
            <br />
            Posts
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Random Thoughts: Navigating the Uncharted
              <br className=" hidden lg:block" /> Territories of Tech, Life, and
              Everything In Between
            </p>
            <GoArrowDown size={20} className=" hidden lg:block" />
          </div>
        </div>

        <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts
            .filter((post) => post.isPinned)
            .map((post, i) => (
              <PostItem post={post} key={i} />
            ))}
        </div>
      </MotionContainer>
    </Container>
  );
}
