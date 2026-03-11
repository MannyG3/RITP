import { AdmissionsInquiryForm } from "@/components/AdmissionsInquiryForm";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import Link from "next/link";
import { admissionsInfo, admissionsSteps } from "@/constants/site-pages";

export default function AdmissionsPage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Admissions" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Admissions Portal</p>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl tracking-tight">Your diploma journey starts with a clear process.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-grid gap-8 px-4 py-12 md:px-8 lg:grid-cols-[0.9fr_1.1fr] md:py-16">
        <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Step-by-Step Guide</h2>
          <ol className="mt-6 space-y-5">
            {admissionsSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  {index < admissionsSteps.length - 1 ? <span className="mt-2 h-full w-px bg-slate/20" /> : null}
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <AdmissionsInquiryForm />
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 pb-16">
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Admission Track</p>
            <h2 className="mt-3 font-heading text-3xl text-navy">First Year Diploma</h2>
            <p className="mt-3 text-slate leading-7">
              Complete guidance for SSC-based CAP admission, eligibility, documents, and official process links.
            </p>
            <Link
              href="/admissions/first-year"
              className="mt-5 inline-flex h-11 items-center rounded-sm border border-gold px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Explore First Year
            </Link>
          </article>

          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Admission Track</p>
            <h2 className="mt-3 font-heading text-3xl text-navy">Direct Second Year</h2>
            <p className="mt-3 text-slate leading-7">
              Lateral-entry information for eligible HSC Science, MCVC, and ITI candidates with process details.
            </p>
            <Link
              href="/admissions/direct-second-year"
              className="mt-5 inline-flex h-11 items-center rounded-sm border border-gold px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Explore Direct Second Year
            </Link>
          </article>
        </div>

        <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Admissions 2026 Snapshot</h2>
          <p className="mt-4 text-slate leading-7">
            <span className="font-semibold text-navy">Eligibility:</span> {admissionsInfo.eligibility}
          </p>
          <p className="mt-3 text-slate leading-7">
            <span className="font-semibold text-navy">Process:</span> {admissionsInfo.process}
          </p>
          <div className="mt-5">
            <p className="font-semibold text-navy">Documents Required:</p>
            <ul className="mt-2 space-y-2 text-slate">
              {admissionsInfo.documents.map((doc) => (
                <li key={doc}>• {doc}</li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-slate">
            <span className="font-semibold text-navy">Admissions Office:</span> {admissionsInfo.officeContact} |
            <a href={`tel:${admissionsInfo.officePhone}`} className="ml-2 font-semibold text-navy hover:text-gold">
              {admissionsInfo.officePhone}
            </a>
          </p>
        </article>
      </section>
    </SharedLayout>
  );
}
