"use client";

import useMenuOpen from "@/hooks/use-menu-open";
import { MENU, archivo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileNav() {
  const { isOpen, onClose } = useMenuOpen();
  const pathname = usePathname();
  const clear = () => {
    onClose();
    document.body.style.overflow = "";
  };
  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const menuVars: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars: Variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  const navVars: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          className="fixed inset-0 z-[49] flex h-screen w-full origin-top items-center justify-center bg-black lg:hidden"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={navVars}
            initial="initial"
            animate="open"
            exit="initial"
            className=" flex flex-col gap-4 text-center"
          >
            {MENU.map((menu, i) => (
              <div className=" overflow-hidden" key={i}>
                <motion.div variants={mobileLinkVars}>
                  <Link
                    href={menu.path}
                    className={cn(
                      " group relative text-[36px] leading-tight text-white",
                      archivo.className,
                    )}
                  >
                    {menu.title}
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
