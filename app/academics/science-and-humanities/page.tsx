import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";

export default function ScienceAndHumanitiesPage() {
  return (
    <SharedLayout>
      <section className="bg-navy-deep text-white pb-32">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Academics & Programmes" },
            { label: "Science and Humanities" }
          ]}
          tone="dark"
        />
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-16 md:pt-24 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-end">
          <div className="pl-6 md:pl-8 ">
            <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed">
              Foundational science, mathematics, and ethics.
            </p>
          </div>
          <div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-black leading-[1.02]">
              Science &amp; <br />
              <span className="text-crimson">Humanities.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48 grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32 pl-6 md:pl-10 pb-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.05]">
            Core <br/>Foundations
          </h2>
          <p className="mt-8 text-lg font-medium text-slate-muted leading-relaxed max-w-md">
            The Science and Humanities section strengthens communication, applied science understanding, mathematics,
            and professional ethics to support all engineering diploma programs.
          </p>
        </div>

        <article className="border border-black/5 bg-slate-50 p-10 md:p-16 shadow-xl">
          <h3 className="font-heading text-3xl font-bold text-navy-deep tracking-tight mb-8">Department Focus</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-crimson mt-1 text-xl font-bold">•</span>
              <p className="text-lg text-slate-muted font-medium leading-relaxed">Applied Physics and Applied Chemistry foundations for engineering practice.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-crimson mt-1 text-xl font-bold">•</span>
              <p className="text-lg text-slate-muted font-medium leading-relaxed">Engineering Mathematics for analytical problem-solving across all branches.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-crimson mt-1 text-xl font-bold">•</span>
              <p className="text-lg text-slate-muted font-medium leading-relaxed">Communication Skills and environmental studies for professional readiness.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-crimson mt-1 text-xl font-bold">•</span>
              <p className="text-lg text-slate-muted font-medium leading-relaxed">Value-based education, soft skills, and interdisciplinary academic support.</p>
            </li>
          </ul>
        </article>
      </section>
    </SharedLayout>
  );
}
