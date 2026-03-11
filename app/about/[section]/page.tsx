import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { aboutSections, type AboutSectionSlug } from "@/constants/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return aboutSections.map((item) => ({ section: item.slug }));
}

export default async function AboutSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const item = aboutSections.find((entry) => entry.slug === (section as AboutSectionSlug));
  const isAboutInstitute = item?.slug === "about-us";

  if (!item) {
    notFound();
  }

  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Institute", href: "/about" }, { label: item.title }]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">About Institute</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">{item.title}</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">{item.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
          {!isAboutInstitute && item.slug !== "principals-message" ? <h2 className="font-heading text-3xl text-navy">Section Details</h2> : null}

          {isAboutInstitute ? (
            <div>
              <div className="rounded-sm border border-slate/20 bg-[#f8fbff] p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{item.content[0]}</p>
                <h2 className="mt-3 font-heading text-4xl text-navy">{item.content[1]}</h2>
                <p className="mt-5 text-slate leading-8">{item.content[2]}</p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.content[3]}</p>
                  <p className="mt-3 text-lg leading-8 text-navy font-semibold">{item.content[4]}</p>
                </article>
                <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.content[5]}</p>
                  <ul className="mt-3 space-y-2 text-slate leading-7">
                    {item.content.slice(6).map((missionPoint) => (
                      <li key={missionPoint}>{missionPoint}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          ) : (
            <>
              {item.image ? (
                <div className="mt-5 mx-auto overflow-hidden rounded-sm border border-slate/20 bg-slate-50 p-2 max-w-sm">
                  <Image src={item.image.src} alt={item.image.alt} width={532} height={690} className="h-auto w-full object-cover" priority />
                </div>
              ) : null}

              {item.contact && item.image ? (
                <div className="mt-4 mx-auto max-w-sm rounded-sm border border-slate/20 bg-[#f8fbff] p-5 text-center">
                  <p className="font-heading text-2xl text-navy">{item.contact.name}</p>
                  <p className="mt-1 text-sm font-semibold text-gold">{item.contact.designation}</p>
                  <a href={`tel:${item.contact.phone}`} className="mt-3 block text-slate hover:text-navy">
                    {item.contact.phone}
                  </a>
                  <a href={`mailto:${item.contact.email}`} className="mt-1 block text-slate hover:text-navy">
                    {item.contact.email}
                  </a>
                </div>
              ) : null}

              <div className="mt-4 space-y-4 text-slate leading-7">
                {item.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {item.contact && !item.image ? (
                <div className="mt-8 rounded-sm border border-slate/20 bg-[#f8fbff] p-5">
                  <p className="font-heading text-2xl text-navy">{item.contact.name}</p>
                  <p className="mt-1 text-sm font-semibold text-gold">{item.contact.designation}</p>
                  <a href={`tel:${item.contact.phone}`} className="mt-3 block text-slate hover:text-navy">
                    {item.contact.phone}
                  </a>
                  <a href={`mailto:${item.contact.email}`} className="mt-1 block text-slate hover:text-navy">
                    {item.contact.email}
                  </a>
                </div>
              ) : null}
            </>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-sm border border-gold px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Back to About
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-sm border border-slate/25 px-5 text-sm font-semibold text-navy transition-colors hover:border-navy"
            >
              Back to Home
            </Link>
          </div>
        </article>
      </section>
    </SharedLayout>
  );
}
