import { AdmissionsInquiryForm } from "@/components/AdmissionsInquiryForm";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";
import { admissionsSteps } from "@/constants/site-pages";

export default function AdmissionsPage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Admissions" }]} tone="dark" />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Admissions Portal</p>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl tracking-tight">Your diploma journey starts with a clear process.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-grid gap-8 px-4 py-12 md:px-8 lg:grid-cols-[0.9fr_1.1fr] md:py-16">
        <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Step-by-Step Guide</h2>
          <ol className="mt-6 space-y-5">
            {admissionsSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  {index < admissionsSteps.length - 1 ? <span className="mt-2 h-full w-px bg-slate/20" /> : null}
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <AdmissionsInquiryForm />
      </section>
    </SharedLayout>
  );
}
