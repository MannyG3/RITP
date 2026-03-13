import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";

export default function ScienceAndHumanitiesPage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Academics & Programmes" },
            { label: "Science and Humanities" }
          ]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Academics & Programmes</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">Science and Humanities</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">
            The Science and Humanities section strengthens communication, applied science understanding, mathematics,
            and professional ethics to support all engineering diploma programs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Department Focus</h2>
          <ul className="mt-4 space-y-3 text-slate leading-7 list-disc pl-6">
            <li>Applied Physics and Applied Chemistry foundations for engineering practice.</li>
            <li>Engineering Mathematics for analytical problem-solving across all branches.</li>
            <li>Communication Skills and environmental studies for professional readiness.</li>
            <li>Value-based education, soft skills, and interdisciplinary academic support.</li>
          </ul>
        </article>
      </section>
    </SharedLayout>
  );
}
