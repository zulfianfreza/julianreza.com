import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { heebo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Julian Reza",
  description: "Hi, i'm julian. I'm a Fullstack Developer.",
  icons: "/images/logo-black.png",
  openGraph: {
    title: "Julian Reza",
    description: "Hi, i'm julian. I'm a fullstack developer.",
    images: ["/images/og-image.png"],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.png"] },
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
