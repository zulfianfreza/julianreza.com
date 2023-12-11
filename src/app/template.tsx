"use client";
import useMenuOpen from "@/hooks/use-menu-open";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { onClose } = useMenuOpen();
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {children}
        <motion.div
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
      </motion.div>
    </AnimatePresence>
  );
}
