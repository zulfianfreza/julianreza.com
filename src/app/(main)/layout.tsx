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
      <Navbar />
      <div className=" flex min-h-screen w-full flex-col">
        <main className=" w-full flex-1">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
