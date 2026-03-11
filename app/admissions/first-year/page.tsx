import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { admissionTracks } from "@/constants/site-pages";

export default function FirstYearAdmissionPage() {
  const track = admissionTracks.find((item) => item.slug === "first-year");

  if (!track) {
    notFound();
  }

  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "First Year" }]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Admissions</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">{track.title}</h1>
          <p className="mt-4 max-w-3xl text-white/80 leading-7">{track.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Overview</h2>
            <div className="mt-4 space-y-3 text-slate leading-7">
              {track.overview.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Eligibility</h2>
            <ul className="mt-4 space-y-3 text-slate leading-7">
              {track.eligibility.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Admission Process</h2>
            <ol className="mt-4 space-y-3 text-slate leading-7">
              {track.process.map((item, index) => (
                <li key={item}>{index + 1}. {item}</li>
              ))}
            </ol>
          </article>

          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Documents Required</h2>
            <ul className="mt-4 space-y-3 text-slate leading-7">
              {track.documents.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-6 rounded-sm border border-slate/20 bg-white p-6 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Important Notes</h2>
          <ul className="mt-4 space-y-3 text-slate leading-7">
            {track.importantNotes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h3 className="mt-7 font-heading text-2xl text-navy">Official Reference Links</h3>
          <ul className="mt-3 space-y-2 text-slate">
            {track.sourceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="font-semibold text-navy hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex h-11 items-center rounded-sm border border-gold px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Back to Admissions
            </Link>
            <Link
              href="/admissions/direct-second-year"
              className="inline-flex h-11 items-center rounded-sm border border-slate/25 px-5 text-sm font-semibold text-navy transition-colors hover:border-navy"
            >
              View Direct Second Year
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
