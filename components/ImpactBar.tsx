import { impactMetrics } from "@/constants/data";

export function ImpactBar() {
  return (
    <section className="relative z-10 -mt-16 mx-auto max-w-grid px-4 md:px-8" aria-label="Impact metrics">
      <div className="border border-black/5 bg-white/60 p-2 shadow-2xl backdrop-blur-3xl transition-transform duration-500 hover:-translate-y-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 rounded-[calc(2rem-0.5rem)] bg-navy px-8 py-8 text-white text-sm md:text-base border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
          {impactMetrics.map((item) => (
            <p key={item} className="font-heading font-medium tracking-wide text-center lg:text-lg">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
