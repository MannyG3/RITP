"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck, IconBuildingCommunity } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-main-photo",
        { opacity: 0, scale: 0.96, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1"
      )
      .fromTo(
        ".hero-floating-card",
        { opacity: 0, x: -30, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 1, ease: "back.out(1.4)" },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-140px)] bg-gradient-to-b from-[#FAFBFD] via-[#F5F7FA] to-white py-12 lg:py-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-grid px-4 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Editorial Content */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Pill */}
          <div className="hero-badge opacity-0 w-max inline-flex items-center gap-2 border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-navy shadow-sm">
            <span className="h-2 w-2 bg-crimson animate-pulse" />
            <span>Educate • Innovate • Lead</span>
            <span className="text-black/30">|</span>
            <span className="text-slate-muted">DTE Code: 6456</span>
          </div>

          {/* Headline inspired by inspiration image 1 */}
          <h1
            id="hero-heading"
            className="hero-title opacity-0 mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-navy-dark leading-[1.08]"
          >
            Turn Your Ambition <br className="hidden sm:inline" />
            into{" "}
            <span className="font-serif italic font-normal text-crimson decoration-gold/40 underline decoration-2 underline-offset-8">
              Technical Mastery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle opacity-0 mt-6 max-w-xl text-base sm:text-lg text-slate leading-relaxed">
            AICTE approved, affiliated to MSBTE, and recognized by Government of Maharashtra. Delivering
            disciplined diploma education with industry-linked outcomes for future technocrats.
          </p>

          {/* CTAs */}
          <div className="hero-cta opacity-0 mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy-dark text-white text-sm font-bold tracking-wide hover:bg-navy transition-all shadow-card hover:shadow-cardHover active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <IconArrowUpRight size={17} stroke={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/departments/computer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-black/15 bg-white text-navy text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <IconBuildingCommunity size={17} className="text-crimson" />
              <span>Explore Departments</span>
            </Link>
          </div>

          {/* Stat Pill & Avatars (Inspiration image 1 design) */}
          <div className="hero-stats opacity-0 mt-10 pt-8 border-t border-black/10 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-dark">
                99%
              </div>
              <div className="text-xs font-medium text-slate-muted leading-tight">
                Our Placement <br />
                <strong className="text-slate font-bold">Assistance Rate</strong>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-[1px] bg-black/10" aria-hidden />

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 ring-2 ring-white bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                  SP
                </div>
                <div className="inline-block h-8 w-8 ring-2 ring-white bg-crimson text-white text-[10px] font-bold flex items-center justify-center">
                  RJ
                </div>
                <div className="inline-block h-8 w-8 ring-2 ring-white bg-gold text-navy font-bold text-[10px] flex items-center justify-center">
                  AK
                </div>
              </div>
              <div className="text-xs font-medium text-slate-muted leading-tight">
                <span className="font-bold text-navy">50+ Recruiters</span> <br />
                Tata Motors, Hyundai, TCS
              </div>
            </div>
          </div>
        </div>

        {/* Right Asymmetrical Layered Photography (Inspiration image 1 composition) */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
          {/* Main Arched Campus Photo */}
          <div className="hero-main-photo opacity-0 relative w-full max-w-[420px] lg:max-w-none h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://studyriserr.com/images/cover/171295144316009407661.jpg"
              alt="RIT Polytechnic Campus at Lohegaon Pune"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

            {/* Bottom Caption Pill inside photo */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
              <p className="text-xs font-semibold text-navy-dark mt-0.5">
                Modern Laboratories, Workshops & Green Campus
              </p>
            </div>
          </div>

          {/* Overlapping Floating Secondary Photo */}
          <div className="hero-floating-card absolute -bottom-6 -left-4 sm:left-4 md:-left-8 w-56 sm:w-64 h-36 sm:h-44 overflow-hidden border-4 border-white shadow-2xl bg-white hidden sm:block">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
              alt="Engineering diploma students collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gold text-navy-dark px-2 py-0.5 rounded-md">
                <IconCheck size={11} stroke={3} /> Verified
              </span>
              <p className="text-xs font-bold mt-1">17+ Years of Academic Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
