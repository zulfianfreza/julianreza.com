import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { heebo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Julian Reza",
  description: "My portfolio website that includes all my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          heebo.className,
          " bg-white tracking-tight antialiased dark:bg-black",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
