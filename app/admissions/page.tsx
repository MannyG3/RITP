import type { Metadata } from "next";
import { AdmissionsInquiryForm } from "@/components/AdmissionsInquiryForm";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { admissionsInfo, admissionsSteps } from "@/constants/site-pages";

export const metadata: Metadata = {
  title: "Admissions 2026 – RITP Polytechnic Pune | First Year & Lateral Entry",
  description:
    "Admissions open at RITP Pune for 2026. Apply for First Year Diploma (SSC-based CAP) and Direct Second Year (Lateral Entry) in Computer, Civil, Mechanical & AIML Engineering. MSBTE affiliated, DTE Code 6456.",
  alternates: { canonical: "https://ritppune.com/admissions" },
};

export default function AdmissionsPage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Admissions" }]} tone="dark" />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pb-4">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Your diploma journey starts with a clear, guided process.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Join the Next <br />
              <span className="text-crimson">Generation.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-4 py-32 md:px-8 lg:grid-cols-[1fr_1.2fr] md:py-48 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="pb-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-navy-deep leading-[1.05]">
              Step-by-Step <br/>Guide
            </h2>
            <p className="mt-8 text-lg text-slate-muted leading-relaxed font-medium">
              We ensure complete transparency throughout the admission lifecycle.
            </p>
          </div>
          <div className="mt-12">
            <AdmissionsInquiryForm />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {admissionsSteps.map((step, index) => (
            <article key={step.title} className="group relative bg-slate-50 p-10 md:p-14 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-black/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-deep/5 rounded-bl-[4rem] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
              <div className="relative z-10">
                <span className="font-mono text-4xl font-black text-navy-deep/20 group-hover:text-gold transition-colors block mb-8">
                  0{index + 1}
                </span>
                <h3 className="font-heading text-3xl font-bold text-navy-deep tracking-tight mb-4">{step.title}</h3>
                <p className="text-lg text-slate-muted leading-relaxed font-medium">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 pb-32 md:pb-48">
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <article className="group bg-navy-deep p-10 md:p-14 text-white hover:-translate-y-2 transition-transform duration-500 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-20 -mt-20"></div>
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-6 relative z-10">First Year <br/>Diploma</h2>
            <p className="text-lg text-white/70 leading-relaxed font-medium mb-12 relative z-10">
              Complete guidance for SSC-based CAP admission, eligibility, documents, and official process links.
            </p>
            <Link
              href="/admissions/first-year"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-white transition-colors relative z-10"
            >
              <span>Explore First Year</span>
              <IconArrowUpRight size={18} stroke={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </article>

          <article className="group bg-slate-50 p-10 md:p-14 hover:-translate-y-2 transition-transform duration-500 border border-black/5">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-6">Direct Second <br/>Year</h2>
            <p className="text-lg text-slate-muted leading-relaxed font-medium mb-12">
              Lateral-entry information for eligible HSC Science, MCVC, and ITI candidates with process details.
            </p>
            <Link
              href="/admissions/direct-second-year"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-deep hover:text-crimson transition-colors"
            >
              <span>Explore Direct Second Year</span>
              <IconArrowUpRight size={18} stroke={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </article>
        </div>

        <article className="bg-slate-50 p-10 md:p-16 border border-black/5">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-10">Admissions 2026 Snapshot</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-muted leading-relaxed font-medium mb-6">
                <span className="block text-sm font-black uppercase tracking-[0.1em] text-navy-deep mb-2">Eligibility</span> 
                {admissionsInfo.eligibility}
              </p>
              <p className="text-lg text-slate-muted leading-relaxed font-medium mb-6">
                <span className="block text-sm font-black uppercase tracking-[0.1em] text-navy-deep mb-2">Process</span> 
                {admissionsInfo.process}
              </p>
              <p className="text-lg text-slate-muted leading-relaxed font-medium">
                <span className="block text-sm font-black uppercase tracking-[0.1em] text-navy-deep mb-2">Admissions Office</span> 
                {admissionsInfo.officeContact} <br/>
                <a href={`tel:${admissionsInfo.officePhone}`} className="text-navy-deep hover:text-crimson font-bold mt-1 inline-block">
                  {admissionsInfo.officePhone}
                </a>
              </p>
            </div>
            <div>
              <span className="block text-sm font-black uppercase tracking-[0.1em] text-navy-deep mb-4">Documents Required</span>
              <ul className="space-y-4">
                {admissionsInfo.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-lg text-slate-muted font-medium">
                    <span className="text-crimson mt-1">•</span> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
