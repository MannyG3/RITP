"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconUsers, IconClock } from "@tabler/icons-react";
import { departmentDetails } from "@/constants/site-pages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const deptList = Object.values(departmentDetails);

const deptImages: Record<string, string> = {
  computer: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  aiml: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
  civil: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  mech: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
};

export function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".dept-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="departments"
      ref={containerRef}
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="dept-hub-heading"
    >
      <div className="mx-auto max-w-grid px-4 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <h2
              id="dept-hub-heading"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-dark leading-tight"
            >
              Four Core Diploma <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-navy">Engineering Tracks</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate leading-relaxed">
            Approved by AICTE and affiliated to MSBTE. Built for rigorous practical training, modern software literacy,
            and immediate career placement.
          </p>
        </div>

        {/* 4 Department Cards Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {deptList.map((dept) => (
            <article
              key={dept.slug}
              className="dept-card opacity-0 group border border-black/8 bg-[#FAFBFD] overflow-hidden shadow-sm hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={deptImages[dept.slug] || dept.labs[0]?.image}
                    alt={dept.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-dark/20 to-transparent" />

                  {/* Header overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md text-navy text-xs font-bold uppercase tracking-wider">
                      <IconUsers size={13} className="text-crimson" />
                      {dept.intake} Seats
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-navy/80 backdrop-blur-md text-white text-xs font-semibold">
                      <IconClock size={13} className="text-gold" />
                      {dept.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {dept.name}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-slate leading-relaxed line-clamp-2">
                    {dept.heroTitle}
                  </p>

                  {/* Focus Areas Tag Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {dept.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="px-2.5 py-1 bg-white border border-black/8 text-[11px] font-semibold text-navy"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-black/5">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy group-hover:text-crimson transition-colors"
                >
                  <span>Explore Curriculum & Labs</span>
                  <IconArrowUpRight size={15} stroke={2.5} />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-dark text-white text-xs font-bold tracking-wide hover:bg-crimson transition-colors"
                >
                  <span>Apply Branch</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
