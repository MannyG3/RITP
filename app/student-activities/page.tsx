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
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Student Activities" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Student Activities</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">Student Activity Section</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">
            Explore institutional student activity modules including forms, innovation events, and orientation initiatives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studentActivityPages.map((item) => (
            <Link
              key={item.slug}
              href={`/student-activities/${item.slug}`}
              className="rounded-sm border border-slate/20 bg-white p-5 shadow-card transition-colors hover:border-gold"
            >
              <h2 className="font-heading text-2xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </SharedLayout>
  );
}
