"use client";

import Image from "next/image";
import Link from "next/link";
import { IconPlayerPlay, IconCalendar, IconMapPin, IconArrowUpRight } from "@tabler/icons-react";

export function CampusEventBanner() {
  return (
    <section className="py-12 bg-white" aria-labelledby="event-banner-heading">
      <div className="mx-auto max-w-grid px-4 md:px-8">
        <div className="relative overflow-hidden bg-navy-dark text-white min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 border border-black/10 shadow-2xl">
          {/* Background Photo with Dark Cinematic Overlay */}
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
            alt="Annual technical symposium at RITP Pune"
            fill
            className="object-cover opacity-35 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-dark/60 to-transparent" />

          {/* Left Floating Content Card (Inspiration Image 1) */}
          <div className="relative z-10 max-w-2xl">
            {/* Play Button Capsule */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="flex h-7 w-7 items-center justify-center bg-crimson text-white shadow-md">
                <IconPlayerPlay size={14} className="fill-white translate-x-0.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Campus Highlights 2026</span>
            </div>

            <h2
              id="event-banner-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              KAIZEN National Technical Fest & Annual Convocation
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <IconCalendar size={16} className="text-gold" />
                <span>Annual Campus Showcase</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMapPin size={16} className="text-crimson" />
                <span>Lohegaon Campus, Pune - 411047</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/student-activities/ritech-2k25"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark text-xs font-bold uppercase tracking-wider hover:bg-gold-hover shadow-lg transition-all"
              >
                <span>Event Highlights & Participation</span>
                <IconArrowUpRight size={15} stroke={2.5} />
              </Link>
              <Link
                href="/student-activities"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all"
              >
                <span>All Student Activities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
