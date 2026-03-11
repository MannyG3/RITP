import { Breadcrumb } from "@/components/Breadcrumb";
import { InstitutionalSections } from "@/components/InstitutionalSections";
import { SharedLayout } from "@/components/SharedLayout";

export default function AboutPage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Institute" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">About Institute</p>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl tracking-tight">Institutional vision, governance, and campus identity.</h1>
        </div>
      </section>
      <InstitutionalSections />
    </SharedLayout>
  );
}
