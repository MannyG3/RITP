import { Breadcrumb } from "@/components/Breadcrumb";
import { SharedLayout } from "@/components/SharedLayout";

export default function AdminOfficePage() {
  return (
    <SharedLayout>
      <section className="bg-navy text-white">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Academics & Programmes" },
            { label: "Admin Office" }
          ]}
          tone="dark"
        />
        <div className="mx-auto max-w-grid px-4 md:px-8 pb-14 pt-4 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Academics & Programmes</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl md:text-6xl tracking-tight leading-tight">Admin Office</h1>
          <p className="mt-5 max-w-3xl text-white/80 leading-7">
            The Admin Office supports academic operations, student records, timetable coordination, examination
            documentation, fee-related workflows, and day-to-day institutional administration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 md:px-8 py-10 md:py-14">
        <article className="rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
          <h2 className="font-heading text-3xl text-navy">Key Services</h2>
          <ul className="mt-4 space-y-3 text-slate leading-7 list-disc pl-6">
            <li>Student admission records, bonafide, and transfer-related document processing.</li>
            <li>Coordination for MSBTE examination forms, internal records, and notices.</li>
            <li>Support for scholarship verification and administrative attestations.</li>
            <li>Academic schedule circulars and institutional communication support.</li>
          </ul>
        </article>
      </section>
    </SharedLayout>
  );
}
