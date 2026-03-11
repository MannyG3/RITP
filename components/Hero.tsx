"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-20" aria-labelledby="hero-heading">
      <Image
        src="https://studyriserr.com/images/cover/171295144316009407661.jpg"
        alt="RIT Polytechnic Pune campus at Lohegaon"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative mx-auto max-w-grid px-4 md:px-8 h-[calc(92vh-5rem)] grid-overlay grid lg:grid-cols-2 gap-8 items-center">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-white/25 rounded-sm p-8 md:p-12 bg-black/20"
        >
          <p className="text-gold text-xs uppercase tracking-[0.2em]">Established in 2009 | Lohegaon, Pune</p>
          <h1 id="hero-heading" className="mt-4 font-heading text-4xl md:text-6xl text-white tracking-tight leading-tight">
            17 Years of Technical Mastery
          </h1>
          <p className="mt-5 text-white/90 max-w-xl text-sm md:text-base">
            AICTE approved, affiliated to MSBTE, and recognized by Government of Maharashtra, delivering
            disciplined diploma education with industry-linked outcomes for future technocrats.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#admissions"
              className="h-11 px-6 inline-flex items-center rounded-sm border border-gold bg-gold text-navy text-sm font-semibold"
            >
              Apply for Admissions 2025
            </a>
            <a
              href="#departments"
              className="h-11 px-6 inline-flex items-center rounded-sm border border-white text-white text-sm font-semibold"
            >
              Explore Departments
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
