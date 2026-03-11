import Link from "next/link";
import { aboutSections } from "@/constants/site-pages";

export function InstitutionalSections() {
  return (
    <section id="ritp-unique" className="mx-auto max-w-grid px-4 md:px-8 py-16 md:py-20" aria-labelledby="institutional-title">
      <h2 id="institutional-title" className="font-heading text-3xl md:text-4xl text-navy tracking-tight">
        RITP Unique
      </h2>
      <p className="mt-3 max-w-3xl text-slate text-sm md:text-base">
        Institutional highlights and governance information based on the sections available in the navigation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {aboutSections.map((item) => (
          <article id={item.slug} key={item.slug} className="rounded-sm border border-slate/20 bg-white p-5 md:p-6 shadow-card scroll-mt-28">
            <h3 className="font-heading text-2xl text-navy">{item.title}</h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate">{item.summary}</p>
            <Link
              href={`/about/${item.slug}`}
              className="mt-5 inline-flex h-10 items-center rounded-sm border border-gold px-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Read section
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
