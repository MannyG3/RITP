import Link from "next/link";
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
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Student Activities", href: "/student-activities" }, { label: item.title }]}
          tone="dark"
        />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pl-6 md:pl-8 ">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Explore {item.title} initiatives and events.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              {item.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48 grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32 pl-6 md:pl-10 pb-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.05]">
            Overview
          </h2>
          <p className="mt-8 text-lg font-medium text-slate-muted leading-relaxed max-w-md">
            Learn more about the {item.title.toLowerCase()} and how you can participate.
          </p>
        </div>

        <article className="border border-black/5 bg-slate-50 p-10 md:p-16 shadow-xl">
          <div className="space-y-6 text-lg text-slate-muted font-medium leading-relaxed">
            <p>{item.description}</p>
            <p>
              This section can be expanded with official notices, downloadable forms, event schedules, and eligibility
              details specific to {item.title.toLowerCase()}.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-black/10">
            <Link href="/student-activities" className="inline-flex h-14 items-center justify-center bg-navy-deep px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson">
              Back to Activities
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
