"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { aboutSections } from "@/constants/site-pages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function InstitutionalSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".institutional-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="ritp-unique" ref={containerRef} className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start" aria-labelledby="institutional-title">
      <div className="lg:sticky lg:top-32 pl-6 md:pl-10 pb-12 lg:pb-0 mb-12 lg:mb-0">
        <h2 id="institutional-title" className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.05]">
          Institutional <br/>Highlights
        </h2>
        <p className="mt-8 text-lg md:text-xl font-medium text-slate-muted leading-relaxed max-w-md">
          Explore the vision, governance, and legacy that shapes the future of our students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-12 w-full max-w-2xl lg:ml-auto">
        {aboutSections.map((item) => (
          <article id={item.slug} key={item.slug} className="institutional-card group scroll-mt-32">
            {/* Outer Shell */}
            <div className="h-full border border-black/5 bg-black/[0.02] p-2 transition-transform duration-500 ease-out hover:scale-[0.98]">
              {/* Inner Core */}
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white p-8 md:p-10 shadow-[0_8px_32px_rgba(26,58,110,0.04)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] border border-black/5">
                <div>
                  <h3 className="font-heading text-3xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-5 text-base md:text-lg leading-relaxed text-slate">{item.summary}</p>
                </div>
                
                <div className="mt-10">
                  <Link
                    href={`/about/${item.slug}`}
                    className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition-colors hover:text-crimson"
                  >
                    <span>Read section</span>
                    <div className="flex h-8 w-8 items-center justify-center bg-black/5 transition-transform group-hover:translate-x-2 group-hover:bg-crimson/10">
                      <IconArrowRight size={16} stroke={2.5} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
