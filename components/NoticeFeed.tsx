"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { notices } from "@/constants/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const allNotices = [
  ...notices,
  {
    date: "25 Feb 2026",
    title: "KAIZEN National Level Technical Symposium Registration Live",
    description: "Inter-college project competition, paper presentation, and coding hackathon guidelines announced."
  },
  {
    date: "18 Feb 2026",
    title: "Campus Placement Drive by Tata Motors & KPIT Scheduled",
    description: "Final year diploma students of Mechanical and Computer/AIML branches to report for technical tests."
  }
];

export function NoticeFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // EMIL standard: hardware-accelerated transforms, stagger, fast exit/slow enter
    gsap.fromTo(
      ".notice-row",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 bg-white"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
        {/* Left Editorial Sticky Column */}
        <div className="lg:sticky lg:top-32 pl-6 md:pl-10 pb-8">
          <h2
            id="news-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-navy-deep font-black leading-[1.05]"
          >
            News &amp; Notices
          </h2>
          <p className="mt-8 text-lg md:text-xl text-slate-muted leading-relaxed font-medium max-w-md">
            Stay informed with the latest technical symposiums, placement drives, and academic schedules.
          </p>
          
          <Link
            href="/student-activities/online-platforms"
            className="mt-10 group inline-flex items-center gap-2 border-b-2 border-navy-deep pb-1 text-sm font-bold uppercase tracking-wider text-navy-deep hover:text-crimson hover:border-crimson transition-all"
          >
            <span>View All Notices</span>
            <IconArrowUpRight size={16} stroke={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Right Scrolling Rows */}
        <div className="flex flex-col">
          {allNotices.map((notice, idx) => (
            <div
              key={notice.title}
              className="notice-row opacity-0 group flex flex-col md:flex-row md:items-start justify-between gap-6 py-8 border-b border-black/10 hover:border-black/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 w-full">
                {/* Date */}
                <div className="shrink-0 md:w-32">
                  <span className="font-mono text-sm font-bold text-slate-muted uppercase tracking-wider">
                    {notice.date}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy-deep group-hover:text-crimson transition-colors leading-tight">
                    {notice.title}
                  </h3>
                  <p className="text-lg text-slate-muted mt-4 font-medium leading-relaxed max-w-2xl">
                    {notice.description}
                  </p>
                </div>
              </div>
              
              {/* Minimal Action Arrow */}
              <div className="shrink-0 self-start mt-1 md:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <Link href="/admissions" aria-label={`Read ${notice.title}`} className="inline-flex h-12 w-12 items-center justify-center bg-slate-50 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                  <IconArrowUpRight size={20} stroke={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
