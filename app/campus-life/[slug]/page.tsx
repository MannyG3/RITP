import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { campusLifePages, type CampusLifeSlug } from "@/constants/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return campusLifePages.map((page) => ({ slug: page.slug }));
}

export default async function CampusLifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = campusLifePages.find((page) => page.slug === (slug as CampusLifeSlug));

  if (!item) {
    notFound();
  }

  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Campus Life", href: "/campus-life" }, { label: item.title }]}
          tone="dark"
        />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pl-6 md:pl-8 ">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Explore {item.title} facilities and services.
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
            Learn more about the {item.title.toLowerCase()} and what it offers to our students.
          </p>
        </div>

        <article className="border border-black/5 bg-slate-50 p-10 md:p-16 shadow-xl">
          <div className="space-y-6 text-lg text-slate-muted font-medium leading-relaxed">
            <p>{item.description}</p>
            <p>
              This section belongs to the Campus Life module and can be expanded with photo galleries, policy documents,
              downloadable notices, and contact information specific to {item.title.toLowerCase()}.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-black/10">
            <Link href="/campus-life" className="inline-flex h-14 items-center justify-center bg-navy-deep px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson">
              Back to Campus Life
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
