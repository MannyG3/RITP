import { impactMetrics } from "@/constants/data";

export function ImpactBar() {
  return (
    <section className="bg-navy" aria-label="Impact metrics">
      <div className="mx-auto max-w-grid px-4 md:px-8 py-5 border-x border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-white text-sm md:text-base">
          {impactMetrics.map((item) => (
            <p key={item} className="font-medium tracking-wide text-center">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
