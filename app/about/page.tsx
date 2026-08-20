import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InstitutionalSections } from "@/components/InstitutionalSections";
import { SharedLayout } from "@/components/SharedLayout";

export const metadata: Metadata = {
  title: "About RITP Pune – Vision, Mission & Principal's Message",
  description:
    "Learn about RITP – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune. Established by Kasegaon Education Society. AICTE approved, MSBTE affiliated polytechnic with a strong vision for technical education.",
  alternates: { canonical: "https://ritppune.com/about" },
};

export default function AboutPage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Institute" }]} tone="dark" />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pb-4">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Institutional vision, governance, and campus identity.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Shaping Future <br />
              <span className="text-crimson">Innovators.</span>
            </h1>
          </div>
        </div>
      </section>
      <InstitutionalSections />
    </SharedLayout>
  );
}
