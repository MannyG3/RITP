"use client";

import Link from "next/link";
import { IconArrowUpRight, IconBulb, IconCertificate, IconCpu } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: IconBulb,
    title: "Inspiring Student Life",
    summary:
      "Vibrant campus experience featuring annual technical fest Kaizen, sports leagues, cultural platforms, and active technical clubs.",
    href: "/student-activities",
    btnText: "Explore Activities",
    tag: "Campus Culture"
  },
  {
    icon: IconCertificate,
    title: "Education Affordability",
    summary:
      "Transparent fee structure, government scholarship guidance (EBC/TFWS/Minority), and dedicated support for every aspiring engineer.",
    href: "/admissions/first-year",
    btnText: "Admission Guide",
    tag: "Scholarships & Aid"
  },
  {
    icon: IconCpu,
    title: "Core-Level Academics",
    summary:
      "Modern AI/ML computing clusters, machine workshops, civil surveying grounds, and MSBTE-aligned curriculum taught by expert faculty.",
    href: "/departments/computer",
    btnText: "View Academics",
    tag: "Lab Infrastructure"
  }
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // EMIL standard: scale/opacity combo with stagger
    gsap.fromTo(
      ".pillar-card",
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 bg-white relative"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-4xl pl-6 md:pl-10 mb-20">
          <h2
            id="why-choose-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-deep leading-[1.05]"
          >
            One of Pune&apos;s Most Trusted{" "}
            <span className="font-serif italic font-normal text-crimson">Polytechnic Institutes</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-slate-muted leading-relaxed font-medium">
            Delivering disciplined diploma education with world-class laboratory facilities, expert mentorship,
            and proven recruitment pathways.
          </p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="pillar-card opacity-0 group flex flex-col justify-between bg-slate-50 p-10 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden relative border border-transparent hover:border-black/5"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-deep/5 rounded-bl-[4rem] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-12">
                    <span className="font-mono text-2xl font-black text-navy-deep/20 group-hover:text-gold transition-colors">0{idx + 1}</span>
                    <div className="h-14 w-14 bg-white flex items-center justify-center text-navy-deep shadow-sm">
                      <Icon size={24} stroke={2} />
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl font-bold text-navy-deep tracking-tight mb-6">
                    {pillar.title}
                  </h3>

                  <p className="text-lg text-slate-muted leading-relaxed font-medium mb-10 flex-grow">
                    {pillar.summary}
                  </p>

                  <div className="pt-8 border-t border-black/10">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-deep hover:text-crimson transition-colors"
                    >
                      <span>{pillar.btnText}</span>
                      <IconArrowUpRight size={16} stroke={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
