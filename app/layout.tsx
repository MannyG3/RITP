import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "RIT Polytechnic Pune | Lohegaon",
  description:
    "RIT Polytechnic Pune, Lohegaon. AICTE and MSBTE approved diploma institute with industry-led departments and placement excellence.",
  openGraph: {
    title: "RIT Polytechnic Pune",
    description:
      "75 Years of Technical Mastery with AICTE and MSBTE approved diploma programs at Lohegaon, Pune.",
    url: "https://ritppune.com",
    siteName: "RIT Polytechnic Pune",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} font-sans bg-white`}>{children}</body>
    </html>
  );
}
