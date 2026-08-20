"use client";

import Image from "next/image";
import { recruiterWall, placementStats } from "@/constants/site-pages";
import { IconBuilding } from "@tabler/icons-react";

export function RecruiterCarousel() {
  return (
    <section id="placement" className="py-20 lg:py-28 bg-white" aria-labelledby="recruiter-heading">
      <div className="mx-auto max-w-grid px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-navy/5 border border-navy/10 text-navy text-xs font-bold uppercase mb-4">
            <IconBuilding size={13} />
            Career Placements
          </div>

          <h2
            id="recruiter-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-dark leading-tight"
          >
            Our Leading{" "}
            <span className="font-serif italic font-normal text-navy">Recruiting Partners</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate leading-relaxed">
            Over 50+ national and multinational engineering enterprises regularly recruit from RITP Pune.
          </p>
        </div>

        {/* Recruiter Logos Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {recruiterWall.map((recruiter) => (
            <div
              key={recruiter.name}
              className="h-24 border border-black/8 bg-[#FAFBFD] p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:bg-white transition-all group"
            >
              <div className="relative h-10 w-28 flex items-center justify-center">
                <Image
                  src={recruiter.logo}
                  alt={recruiter.name}
                  width={110}
                  height={40}
                  className="max-h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-muted mt-1 group-hover:text-navy">
                {recruiter.name}
              </span>
            </div>
          ))}
        </div>

        {/* Placement Metrics & Top Placements Bar */}
        <div className="mt-12 bg-navy-dark text-white p-8 sm:p-10 shadow-xl border border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {placementStats.map((stat, idx) => (
              <div key={stat.label} className={idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-gold">{stat.value}</p>
                <p className="text-xs text-white/80 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
