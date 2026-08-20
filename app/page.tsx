import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HeritageSection } from "@/components/HeritageSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BentoGrid } from "@/components/BentoGrid";
import { CampusEventBanner } from "@/components/CampusEventBanner";
import { VoicesCommunity } from "@/components/VoicesCommunity";
import { NoticeFeed } from "@/components/NoticeFeed";
import { FAQSection } from "@/components/FAQSection";
import { RecruiterCarousel } from "@/components/RecruiterCarousel";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RITP Pune | Rajarambapu Institute of Technology Polytechnic, Lohegaon",
  description:
    "Welcome to RITP – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune. AICTE approved, MSBTE affiliated, Govt. of Maharashtra recognised. DTE Code 6456. Admissions open for Diploma in Computer, Civil, Mechanical & AIML Engineering.",
  alternates: { canonical: "https://ritppune.com" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeritageSection />
        <WhyChooseUs />
        <BentoGrid />
        <CampusEventBanner />
        <VoicesCommunity />
        <NoticeFeed />
        <FAQSection />
        <RecruiterCarousel />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
