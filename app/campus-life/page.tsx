import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { campusLifePages } from "@/constants/site-pages";

export default function CampusLifePage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Campus Life" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Campus Life</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">Student experience, facilities, and campus ecosystem.</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">
            Browse all campus life subsections including infrastructure, libraries, computing, hostels, activities, and student services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {campusLifePages.map((item) => (
            <article key={item.slug} className="rounded-sm border border-slate/20 bg-white p-5 shadow-card">
              <h2 className="font-heading text-2xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
              <Link href={`/campus-life/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-gold transition-colors">
                Explore Page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SharedLayout>
  );
}
