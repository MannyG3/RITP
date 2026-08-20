import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Student Activities – RITP Polytechnic Pune",
  description:
    "Explore student activities at RITP Pune – cultural events, sports, clubs, student council, KAIZEN TechFest, VLab, ideathon, orientation and more.",
  alternates: { canonical: "https://ritppune.com/student-activities" },
};
import { SharedLayout } from "@/components/SharedLayout";
import { studentActivityPages } from "@/constants/site-pages";

export const dynamic = "force-static";

export default function StudentActivitiesPage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Student Activities" }]} tone="dark" />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pl-6 md:pl-8 ">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Explore innovation events, clubs, and orientation initiatives.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Beyond the <br />
              <span className="text-crimson">Classroom.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studentActivityPages.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/student-activities/${item.slug}`}
              className="group relative bg-slate-50 p-10 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-transparent hover:border-black/5 flex flex-col min-h-[320px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-deep/5 rounded-bl-[4rem] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10 flex-grow">
                <span className="font-mono text-xl font-black text-navy-deep/20 group-hover:text-gold transition-colors block mb-6">
                  0{idx + 1}
                </span>
                <h2 className="font-heading text-3xl font-bold text-navy-deep tracking-tight mb-4">{item.title}</h2>
                <p className="text-lg text-slate-muted leading-relaxed font-medium">{item.description}</p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-navy-deep group-hover:text-crimson transition-colors">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SharedLayout>
  );
}
