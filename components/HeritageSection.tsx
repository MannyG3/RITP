"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconAward } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeritageSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".heritage-item",
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
      ref={containerRef}
      className="bg-[#0A1A30] text-white py-20 lg:py-28 overflow-hidden relative"
      aria-labelledby="heritage-heading"
    >
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-grid px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Stack & Stats (From Inspiration Image 1) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Portrait Graduate Photo */}
              <div className="heritage-item opacity-0 relative h-72 sm:h-80 overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                  alt="Graduating technocrats at RITP Pune"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white mt-0.5">MSBTE Diploma Excellence</p>
                </div>
              </div>

              {/* Landscape Photo */}
              <div className="heritage-item opacity-0 relative h-72 sm:h-80 overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                  alt="Students in engineering laboratory"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white mt-0.5">Practical Hands-on Learning</p>
                </div>
              </div>
            </div>

            {/* Stat Counters with Underline Bars (Inspiration Image 1) */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="heritage-item opacity-0">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                  100%
                </div>
                <p className="text-xs text-white/75 mt-2 leading-relaxed">
                  Placement & career assistance provided to every eligible final-year student.
                </p>
                <div className="mt-3 h-1 w-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gold w-full" />
                </div>
              </div>

              <div className="heritage-item opacity-0">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                  95%
                </div>
                <p className="text-xs text-white/75 mt-2 leading-relaxed">
                  Students placed or pursuing higher engineering degrees in their field of study.
                </p>
                <div className="mt-3 h-1 w-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-crimson w-[95%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Landmark Graduation Photo */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="heritage-item opacity-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 border border-white/15 text-gold text-xs font-bold uppercase mb-4">
                <IconAward size={14} />
                SINCE 2009
              </span>

              <h2
                id="heritage-heading"
                className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                The right opportunity can turn dreams into{" "}
                <span className="font-serif italic font-normal text-gold">limitless potential.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
                Founded in 2009 under Kasegaon Education Society, RITP Lohegaon is a community-driven polytechnic
                institution renowned for its academic discipline, industry-aligned diploma curriculum, and dedicated faculty.
              </p>
            </div>

            {/* Landmark Photo: Graduates with Flying Caps */}
            <div className="heritage-item opacity-0 mt-8 relative h-64 sm:h-72 w-full overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80"
                alt="RITP students celebration"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/70">Over 17 Years of Shaping Engineers</p>
                  <p className="text-sm font-bold text-white">Lohegaon, Pune • Maharashtra</p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-navy-dark text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors"
                >
                  <span>About Us</span>
                  <IconArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
