import Providers from "@/components/providers";
import { heebo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Reza",
  metadataBase: new URL("https://julianreza.com/"),
  description: "Hi, i'm Julian. I'm a Fullstack Developer.",
  icons: "/images/logo-black.png",
  creator: "Zulfian Fachru  Reza",
  publisher: "Zulfian Fachru Reza",
  openGraph: {
    title: "Julian Reza",
    description: "Hi, i'm Julian. I'm a fullstack developer.",
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
