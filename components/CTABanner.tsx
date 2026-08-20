"use client";

import Link from "next/link";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";

export function CTABanner() {
  return (
    <section className="py-12 lg:py-20 bg-white" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-grid px-4 md:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-black/10 p-10 sm:p-16 lg:p-20 text-center shadow-lg">
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-crimson/5 border border-crimson/15 text-crimson text-xs font-bold uppercase mb-6">
              <IconSparkles size={13} />
              Admissions Open For Academic Year 2026-27
            </span>

            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-dark leading-tight"
            >
              Start Your Journey <br />
              <span className="font-serif italic font-normal text-crimson">Toward a Brighter Future.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate max-w-xl leading-relaxed">
              Join a disciplined, forward-thinking polytechnic institute in Pune committed to technical competence,
              hands-on innovation, and direct industry employment.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-dark text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-navy shadow-card hover:shadow-cardHover transition-all active:scale-[0.98]"
              >
                <span>Apply for Admissions</span>
                <IconArrowUpRight size={16} stroke={2.5} />
              </Link>

              <Link
                href="/about/location"
                className="inline-flex items-center gap-2 px-6 py-4 border border-black/15 bg-white text-navy text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Visit Campus</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
