import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune",
  description:
    "Kasegaon Education Society's Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune.",
  openGraph: {
    title: "RIT Polytechnic Pune",
    description:
      "Approved by AICTE, Affiliated to MSBTE, and Recognized by Government of Maharashtra. DTE Code: 6456.",
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
