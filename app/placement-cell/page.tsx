import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PlacementTestimonials } from "@/components/PlacementTestimonials";
import { SharedLayout } from "@/components/SharedLayout";
import { placementContact, placementServices, placementStats, recruiterWall } from "@/constants/site-pages";

export const dynamic = "force-static";

const recruiterStyles = [
  "from-slate-100 to-slate-200",
  "from-stone-100 to-slate-200",
  "from-zinc-100 to-slate-200",
  "from-slate-200 to-zinc-100"
] as const;

export default function PlacementCellPage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Placement Cell" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Training & Placement Cell</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">
            Bridging Academics to Industry Excellence.
          </h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-7">
            The RITP placement ecosystem connects diploma education with professional outcomes through structured training,
            internship support, recruiter engagement, and role-specific interview readiness.
          </p>
          <ul className="mt-6 grid gap-2 md:grid-cols-2 text-white/90 text-sm">
            {placementServices.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {placementStats.map((stat) => (
            <article key={stat.label} className="rounded-none border border-slate/20 bg-white p-6 shadow-card">
              <p className="text-4xl font-heading text-navy">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 pb-16 md:pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Recruiters</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl text-navy">Recruiter Wall</h2>
          </div>
          <p className="max-w-xl text-sm text-slate">
            Strong relationships with core engineering, IT, analytics, and manufacturing employers across Pune and beyond.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {recruiterWall.map((company, index) => (
            <article
              key={company}
              className="group rounded-sm border border-slate/20 bg-white p-4 text-center grayscale transition-all duration-200 hover:grayscale-0 hover:-translate-y-1"
            >
              <div
                className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b ${
                  recruiterStyles[index % recruiterStyles.length]
                } text-sm font-bold text-navy`}
              >
                {company
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate group-hover:text-navy">{company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 pb-16 md:pb-20">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-sm border border-slate/20 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1400&q=80"
              alt="Training and Placement Officer"
              fill
              className="object-cover"
            />
          </div>
          <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Message From TPO</p>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl text-navy">Placement readiness is built, not improvised.</h2>
            <p className="mt-5 text-slate leading-7">
              Our objective is to ensure that every student moves into the placement season with clear career direction, disciplined preparation, and the confidence to engage with recruiters professionally. We focus on communication, aptitude, technical review, interview readiness, and live industry expectations.
            </p>
            <p className="mt-4 text-slate leading-7">
              We work closely with departments and employers to align student capability with market demand. From internships to final placements, the T&P cell serves as an active bridge between classroom learning and employment outcomes.
            </p>
            <div className="mt-8 border-t border-slate/15 pt-5">
              <p className="font-heading text-2xl text-navy">{placementContact.name}</p>
              <p className="mt-1 text-sm font-semibold text-gold">{placementContact.role}</p>
              <a href={`mailto:${placementContact.email}`} className="mt-2 inline-block text-sm text-slate hover:text-navy">
                {placementContact.email}
              </a>
            </div>
          </article>
        </div>
      </section>

      <PlacementTestimonials />
    </SharedLayout>
  );
}
