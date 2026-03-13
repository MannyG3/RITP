import type { Metadata } from "next";
import { BentoGrid } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactBar } from "@/components/ImpactBar";
import { InstitutionalSections } from "@/components/InstitutionalSections";
import { Navbar } from "@/components/Navbar";
import { NoticeFeed } from "@/components/NoticeFeed";
import { RecruiterCarousel } from "@/components/RecruiterCarousel";

export const metadata: Metadata = {
  title: "RITP Pune – Official Website | Diploma Admissions 2026",
  description:
    "Welcome to RITP – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune. AICTE approved, MSBTE affiliated. Admissions open for Diploma in Computer, Civil, Mechanical & AIML Engineering. DTE Code 6456.",
  alternates: { canonical: "https://ritppune.com" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactBar />
        <InstitutionalSections />
        <BentoGrid />
        <NoticeFeed />
        <RecruiterCarousel />
        <Footer />
      </main>
    </>
  );
}
