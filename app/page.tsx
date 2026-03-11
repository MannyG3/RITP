import { BentoGrid } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactBar } from "@/components/ImpactBar";
import { InstitutionalSections } from "@/components/InstitutionalSections";
import { Navbar } from "@/components/Navbar";
import { NoticeFeed } from "@/components/NoticeFeed";
import { RecruiterCarousel } from "@/components/RecruiterCarousel";

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
