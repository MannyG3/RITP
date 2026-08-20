import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DepartmentTabs } from "@/components/DepartmentTabs";
import { SharedLayout } from "@/components/SharedLayout";
import { departmentDetails, type DepartmentSlug } from "@/constants/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(departmentDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const department = departmentDetails[slug as DepartmentSlug];
  if (!department) return {};
  return {
    title: `${department.name} – RITP Polytechnic Pune`,
    description: `${department.name} at RITP Pune. ${department.heroTitle} MSBTE affiliated diploma programme. Lohegaon, Pune.`,
    alternates: { canonical: `https://ritppune.com/departments/${slug}` },
    openGraph: {
      title: `${department.name} – RITP Polytechnic Pune`,
      description: `${department.heroTitle}`,
      url: `https://ritppune.com/departments/${slug}`,
    },
  };
}

export const dynamic = "force-static";

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const departmentSlug = slug as DepartmentSlug;
  const department = departmentDetails[departmentSlug];

  if (!department) {
    notFound();
  }

  return (
    <SharedLayout>
      {/* Editorial Split Hero */}
      <section className="px-4 md:px-8 mb-32">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Departments", href: "/departments/computer" },
              { label: department.name }
            ]}
            tone="light"
          />
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-end">
            <div>
              {/* Massive 2-line constrained H1 */}
              <h1 className="max-w-5xl font-heading text-[clamp(2.5rem,5vw,5rem)] tracking-tight leading-[1.05] text-navy-deep font-black">
                {department.name}
                <span 
                  className="inline-block w-[120px] md:w-[180px] h-[50px] md:h-[70px] align-middle bg-cover bg-center mx-3 border border-black/10" 
                  style={{backgroundImage: `url('https://picsum.photos/seed/${department.slug}engine/800/400')`, filter: 'grayscale(100%) contrast(120%)'}}
                ></span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-lg md:text-xl text-slate-muted leading-relaxed font-medium">
                {department.heroTitle}
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#explore" className="inline-flex h-14 items-center justify-center bg-navy-deep px-8 text-sm font-bold text-white transition-transform hover:scale-105">
                  Explore Programme
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="explore">
        <DepartmentTabs department={department} />
      </div>
    </SharedLayout>
  );
}
