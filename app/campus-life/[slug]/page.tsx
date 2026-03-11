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
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Campus Life", href: "/campus-life" }, { label: item.title }]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Campus Life</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">{item.title}</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">{item.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Overview</h2>
          <p className="mt-4 text-slate leading-7">{item.description}</p>
          <p className="mt-4 text-slate leading-7">
            This section belongs to the Campus Life module and can be expanded with photo galleries, policy documents,
            downloadable notices, and contact information specific to {item.title.toLowerCase()}.
          </p>
          <div className="mt-7">
            <Link href="/campus-life" className="inline-flex h-11 items-center rounded-sm border border-gold px-5 text-sm font-semibold text-gold hover:bg-gold hover:text-navy transition-colors">
              Back to Campus Life
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
