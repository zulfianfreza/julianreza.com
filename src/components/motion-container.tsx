"use client";

import { animate, initial, transition } from "@/lib/constants";
import { motion } from "framer-motion";

export default function MotionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        ...transition,
        delay: 0.5,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
