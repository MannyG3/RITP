import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { campusLifePages } from "@/constants/site-pages";

export const metadata: Metadata = {
  title: "Campus Life – RITP Polytechnic Pune",
  description:
    "Discover campus life at RITP Pune – a vibrant polytechnic campus in Lohegaon, Pune with modern labs, sports facilities, cultural events, and a student-friendly environment.",
  alternates: { canonical: "https://ritppune.com/campus-life" },
};

export default function CampusLifePage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Campus Life" }]} tone="dark" />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-end">
          <div className="pl-6 md:pl-8 ">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Student experience, facilities, and the entire campus ecosystem.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Vibrant <br />
              <span className="text-crimson">Ecosystem.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campusLifePages.map((item, idx) => (
            <article key={item.slug} className="group relative bg-slate-50 p-10 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-transparent hover:border-black/5 flex flex-col justify-between min-h-[320px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-deep/5 rounded-bl-[4rem] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <span className="font-mono text-xl font-black text-navy-deep/20 group-hover:text-gold transition-colors block mb-6">
                  0{idx + 1}
                </span>
                <h2 className="font-heading text-3xl font-bold text-navy-deep tracking-tight mb-4">{item.title}</h2>
                <p className="text-lg text-slate-muted leading-relaxed font-medium">{item.description}</p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-black/10">
                <Link href={`/campus-life/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-deep group-hover:text-crimson transition-colors">
                  <span>Explore Module</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SharedLayout>
  );
}
