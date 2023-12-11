"use client";

import Footer from "@/components/footer/footer";
import LenisProvider from "@/components/lenis-provider";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar/navbar";
import { MENU, SOCIAL_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <LenisProvider>
      {/* <AnimatePresence mode="wait"> */}
      {/* <motion.div key={pathname}> */}
      <Navbar />
      <div className=" flex min-h-screen w-full flex-col">
        <main className=" w-full flex-1">{children}</main>
        <Footer />
      </div>
      {/* <motion.div
            className=" fixed left-0 top-0 z-[999] flex h-screen w-full origin-bottom items-center justify-center bg-black dark:bg-white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className=" fixed left-0 top-0 z-[999] flex h-screen w-full origin-top items-center justify-center bg-black dark:bg-white"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div> */}
      {/* </AnimatePresence> */}
    </LenisProvider>
  );
}
