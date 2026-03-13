import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { studentActivityPages, type StudentActivitySlug } from "@/constants/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return studentActivityPages.map((item) => ({ slug: item.slug }));
}

export default async function StudentActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = studentActivityPages.find((entry) => entry.slug === (slug as StudentActivitySlug));

  if (!item) {
    notFound();
  }

  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Student Activities", href: "/student-activities" }, { label: item.title }]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Student Activities</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">{item.title}</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">{item.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Overview</h2>
          <p className="mt-4 text-slate leading-7">{item.description}</p>
          <p className="mt-4 text-slate leading-7">
            This section can be expanded with official notices, downloadable forms, event schedules, and eligibility
            details specific to {item.title.toLowerCase()}.
          </p>
        </article>
      </section>
    </SharedLayout>
  );
}
