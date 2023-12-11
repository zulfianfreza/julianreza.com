"use client";

import useMenuOpen from "@/hooks/use-menu-open";
import { MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Nav() {
  const { isOpen, onClose, onOpen } = useMenuOpen();

  const toggleMenuOpen = () => {
    if (isOpen) {
      onClose();
      document.body.style.overflow = "";
    } else {
      onOpen();
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <nav className="hidden items-center gap-8 lg:flex">
        {MENU.map((menu, i) => (
          <Link
            href={menu.path}
            key={i}
            scroll
            className=" group relative flex flex-col gap-2 overflow-hidden py-1.5 text-black dark:text-white"
          >
            <span className=" transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0">
              {menu.title}
            </span>
            <span className=" absolute translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {menu.title}
            </span>
          </Link>
        ))}
      </nav>

      <nav className=" flex lg:hidden">
        <button
          className=" relative flex h-6 items-center overflow-hidden "
          onClick={toggleMenuOpen}
        >
          <span
            className={cn(
              " translate-y-0 opacity-100 transition-all duration-500",
              {
                " -translate-y-6 opacity-0": isOpen,
              },
            )}
          >
            Menu
          </span>
          <span
            className={cn(
              " absolute translate-y-6 opacity-0 transition-all duration-500",
              {
                "translate-y-0 opacity-100": isOpen,
              },
            )}
          >
            Close
          </span>
        </button>
      </nav>
    </>
  );
}
