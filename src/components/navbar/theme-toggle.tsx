"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" flex flex-1 justify-end">
      <button
        className={cn(
          " group flex w-4 rounded-full bg-neutral-200 transition-theme duration-500 hover:w-9 hover:p-[2.5px] dark:bg-neutral-700",
        )}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        <div
          className={cn(
            " aspect-square h-4 rounded-full bg-black transition-[margin] duration-500 dark:bg-white",
            " group-hover:ml-4",
            " dark:ml-0 dark:group-hover:ml-0",
          )}
        ></div>
      </button>
    </div>
  );
}
