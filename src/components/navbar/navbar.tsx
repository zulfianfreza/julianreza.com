"use client";

import Container from "../container";
import Logo from "../logo";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <>
      <div className="fixed left-0 top-0 z-[50] w-full mix-blend-difference invert dark:invert-0">
        <Container className=" flex items-center py-6 lg:py-6">
          <div className=" flex flex-1 items-center gap-4">
            <Logo />
          </div>
          <Nav />
          <ThemeToggle />
        </Container>
      </div>
      <MobileNav />
    </>
  );
}
