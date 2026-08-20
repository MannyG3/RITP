import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { aboutSections, type AboutSectionSlug } from "@/constants/site-pages";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  const item = aboutSections.find((s) => s.slug === section);
  if (!item) return {};
  return {
    title: `${item.title} – RITP Polytechnic Pune`,
    description: Array.isArray(item.content) && item.content.length > 0 ? item.content[0].slice(0, 155) : `${item.title} at RITP – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune.`,
    alternates: { canonical: `https://ritppune.com/about/${section}` },
  };
}

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
      {/* Editorial Split Hero */}
      <section className="px-4 md:px-8 mb-24 md:mb-40">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: item.title }]}
            tone="light"
          />
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-end">
            <div>
              <h1 className="max-w-5xl font-heading text-[clamp(2.5rem,5vw,5rem)] tracking-tight leading-[1.05] text-navy-deep font-black">
                {item.title}
                <span 
                  className="inline-block w-[100px] md:w-[160px] h-[50px] md:h-[70px] align-middle bg-cover bg-center mx-3 border border-black/10" 
                  style={{backgroundImage: `url('https://picsum.photos/seed/${item.slug}about/800/400')`, filter: 'grayscale(100%) contrast(120%)'}}
                ></span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-lg md:text-xl text-slate-muted leading-relaxed font-medium">
                {item.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 md:px-8 pb-32">
        <article className="bg-white">
          {isAboutInstitute ? (
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 relative items-start">
              {/* Pinned Left Column */}
              <div className="lg:sticky lg:top-32 pb-8">
                <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-navy-deep font-bold leading-tight max-w-xl">{item.content[1]}</h2>
                <p className="mt-8 text-lg md:text-xl text-slate-muted leading-relaxed font-medium">{item.content[2]}</p>
              </div>

              {/* Scrolling Right Column with Stacking Cards */}
              <div className="flex flex-col gap-8 pb-32">
                <article className="sticky top-32 group border border-black/5 bg-slate-50 p-10 hover:bg-white hover:shadow-cardHover transition-all duration-500 overflow-hidden relative min-h-[300px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-navy-deep mb-6">{item.content[3]}</h3>
                    <p className="text-lg leading-relaxed text-slate-muted font-medium">{item.content[4]}</p>
                  </div>
                </article>
                <article className="sticky top-40 group border border-black/5 bg-slate-50 p-10 hover:bg-white hover:shadow-cardHover transition-all duration-500 overflow-hidden relative min-h-[400px] mt-12 shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-navy-deep mb-8">{item.content[5]}</h3>
                    <ul className="space-y-6 text-lg text-slate-muted font-medium">
                      {item.content.slice(6).map((missionPoint, i) => (
                        <li key={i} className="flex gap-5 items-start">
                          <span className="text-gold font-bold text-xl mt-1">0{i + 1}</span>
                          <span className="leading-relaxed">{missionPoint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              {item.image ? (
                <div className="mb-16 overflow-hidden bg-slate-100 aspect-[4/5] md:aspect-video w-full relative group">
                  <Image src={item.image.src} alt={item.image.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
                </div>
              ) : null}

              {item.contact && item.image ? (
                <div className="mb-12 pl-6  ">
                  <p className="font-heading text-3xl font-bold text-navy-deep">{item.contact.name}</p>
                  <p className="mt-1 text-lg font-medium text-slate-muted">{item.contact.designation}</p>
                </div>
              ) : null}

              <div className="space-y-8 text-lg md:text-xl text-slate-muted leading-relaxed font-medium">
                {item.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {item.contact && !item.image ? (
                <div className="mt-16 pl-6  ">
                  <p className="font-heading text-3xl font-bold text-navy-deep">{item.contact.name}</p>
                  <p className="mt-1 text-lg font-medium text-slate-muted">{item.contact.designation}</p>
                </div>
              ) : null}
            </div>
          )}
        </article>
      </section>
    </SharedLayout>
  );
}
