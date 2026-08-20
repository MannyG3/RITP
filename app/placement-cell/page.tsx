import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PlacementTestimonials } from "@/components/PlacementTestimonials";
import { SharedLayout } from "@/components/SharedLayout";

export const metadata: Metadata = {
  title: "Placement Cell & Training – RITP Polytechnic Pune",
  description:
    "RITP Pune Placement Cell – connecting students with top recruiters. Campus placements, industry training, and career services for diploma students in Computer, Civil, Mechanical & AIML Engineering.",
  alternates: { canonical: "https://ritppune.com/placement-cell" },
};
import { placementContact, placementServices, placementStats, recruiterWall } from "@/constants/site-pages";

export const dynamic = "force-static";

export default function PlacementCellPage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Placement Cell" }]} tone="dark" />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Industry <br />
              <span className="text-gold">Excellence.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl font-medium text-white/80 leading-relaxed max-w-2xl">
              The RITP placement ecosystem connects diploma education with professional outcomes through structured training,
              internship support, recruiter engagement, and role-specific interview readiness.
            </p>
          </div>
          <div className="pl-6 md:pl-8 ">
            <ul className="space-y-3 text-white/90 text-sm md:text-base font-medium">
              {placementServices.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48 border-b border-black/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {placementStats.map((stat, i) => (
            <article key={stat.label} className={`flex flex-col ${i !== 0 ? 'lg:border-l lg:border-black/5 lg:pl-12' : ''}`}>
              <p className="text-6xl md:text-8xl font-heading font-black text-navy-deep tracking-tighter">
                {stat.value}
              </p>
              <p className="mt-4 text-sm font-bold uppercase text-slate-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16">
          <div className="pl-6 md:pl-10 ">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.05]">
              Recruiter Wall
            </h2>
          </div>
          <p className="max-w-xl text-lg text-slate-muted font-medium leading-relaxed">
            Strong relationships with core engineering, IT, analytics, and manufacturing employers across Pune and beyond.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-5">
          {recruiterWall.map((company) => (
            <article
              key={company.name}
              className="group flex flex-col items-center justify-center border border-black/5 bg-slate-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-16 w-32 overflow-hidden mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity">
                <Image src={company.logo} alt={`${company.name} logo`} fill className="object-contain" sizes="128px" unoptimized />
              </div>
              <p className="mt-6 text-sm font-bold text-slate-muted group-hover:text-navy-deep text-center">{company.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 pb-32 md:pb-48">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
          <div className="relative min-h-[500px] lg:min-h-[700px] w-full overflow-hidden shadow-2xl">
            <Image
              src="/images/tnp/mayurphoto.jpeg"
              alt="TNP Faculty Mr. Mayur Gund"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/20 mix-blend-overlay"></div>
          </div>
          
          <article className="lg:-ml-32 relative z-10 border border-black/5 bg-white p-10 md:p-16 shadow-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight leading-[1.05] mb-8">
              Placement readiness is built, not improvised.
            </h2>
            <div className="space-y-6 text-lg text-slate-muted font-medium leading-relaxed">
              <p>
                Our objective is to ensure that every student moves into the placement season with clear career direction, disciplined preparation, and the confidence to engage with recruiters professionally. We focus on communication, aptitude, technical review, interview readiness, and live industry expectations.
              </p>
              <p>
                We work closely with departments and employers to align student capability with market demand. From internships to final placements, the T&P cell serves as an active bridge between classroom learning and employment outcomes.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-black/10">
              <p className="font-heading text-3xl font-black text-navy-deep mb-2">{placementContact.name}</p>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-gold mb-2">{placementContact.role}</p>
              <a href={`mailto:${placementContact.email}`} className="inline-block text-lg font-medium text-slate-muted hover:text-crimson transition-colors">
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
