import "./globals.css";
import type { Metadata } from "next";
import Hydrate from "@/components/hydration";
import { Open_Sans, Oswald } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-openSans",
});

const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "DMN Portfolio",
  description: "Dario Nalerio's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${openSans.variable} ${oswald.variable} scroll-smooth`}>
      <Hydrate>{children}</Hydrate>
    </html>
  );
}
