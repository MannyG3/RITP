import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { admissionTracks } from "@/constants/site-pages";

export const metadata: Metadata = {
  title: "Direct Second Year Lateral Entry Admission – RITP Pune",
  description:
    "Direct Second Year (DSY) lateral entry diploma admission at RITP Pune. Eligible for HSC Science, MCVC & ITI graduates. MSBTE affiliated, DTE Code 6456. Step-by-step CAP process.",
  alternates: { canonical: "https://ritppune.com/admissions/direct-second-year" },
};

export default function DirectSecondYearAdmissionPage() {
  const track = admissionTracks.find((item) => item.slug === "direct-second-year");

  if (!track) {
    notFound();
  }

  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Direct Second Year" }]}
          tone="dark"
        />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pb-4">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Lateral entry for HSC Science, MCVC & ITI graduates.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Direct Second <br />
              <span className="text-crimson">Year.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border border-black/5 bg-slate-50 p-10 md:p-14">
            <h2 className="font-heading text-4xl font-black text-navy-deep mb-8">Overview</h2>
            <div className="space-y-4 text-lg text-slate-muted font-medium leading-relaxed">
              {track.overview.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="border border-black/5 bg-slate-50 p-10 md:p-14">
            <h2 className="font-heading text-4xl font-black text-navy-deep mb-8">Eligibility</h2>
            <ul className="space-y-4">
              {track.eligibility.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-crimson mt-1 text-xl font-bold">•</span>
                  <p className="text-lg text-slate-muted font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-black/5 bg-slate-50 p-10 md:p-14">
            <h2 className="font-heading text-4xl font-black text-navy-deep mb-8">Admission Process</h2>
            <ol className="space-y-6">
              {track.process.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-navy-deep text-white text-sm font-bold mt-1">
                    {index + 1}
                  </span>
                  <p className="text-lg text-slate-muted font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="border border-black/5 bg-slate-50 p-10 md:p-14">
            <h2 className="font-heading text-4xl font-black text-navy-deep mb-8">Documents Required</h2>
            <ul className="space-y-4">
              {track.documents.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-crimson mt-1 text-xl font-bold">•</span>
                  <p className="text-lg text-slate-muted font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-8 bg-slate-50 p-10 md:p-16 border border-black/5">
          <h2 className="font-heading text-4xl font-black text-navy-deep mb-8">Important Notes</h2>
          <ul className="space-y-4 mb-12">
            {track.importantNotes.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-crimson mt-1 text-xl font-bold">•</span>
                <p className="text-lg text-slate-muted font-medium leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-heading text-2xl font-black text-navy-deep mb-6">Official Reference Links</h3>
          <ul className="space-y-3 mb-16">
            {track.sourceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="inline-block text-lg font-bold text-navy-deep hover:text-crimson transition-colors underline underline-offset-4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-8 border-t border-black/10">
            <Link
              href="/admissions"
              className="inline-flex h-14 items-center justify-center bg-navy-deep px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson"
            >
              Back to Admissions
            </Link>
            <Link
              href="/admissions/first-year"
              className="inline-flex h-14 items-center justify-center border border-black/20 px-8 text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-slate-100"
            >
              View First Year
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
