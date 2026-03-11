import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DepartmentTabs } from "@/components/DepartmentTabs";
import { SharedLayout } from "@/components/SharedLayout";
import { departmentDetails, type DepartmentSlug } from "@/constants/site-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(departmentDetails).map((slug) => ({ slug }));
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
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Departments", href: "/departments/computer" },
            { label: department.name }
          ]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Department Profile</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">{department.name}</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">{department.heroTitle}</p>
        </div>
      </section>

      <DepartmentTabs department={department} />
    </SharedLayout>
  );
}
