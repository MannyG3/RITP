"use client";

import { useEffect, useState } from "react";
import { placementTestimonials } from "@/constants/site-pages";
import { IconChevronLeft, IconChevronRight, IconStarFilled } from "@tabler/icons-react";

export function PlacementTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % placementTestimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = placementTestimonials[activeIndex];

  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-32 md:py-48" aria-labelledby="success-stories-title">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b-2 border-black/5 pb-8 mb-16">
        <div className="pl-6 md:pl-10 ">
          <h2 id="success-stories-title" className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.05]">
            Placement <br/>Testimonials
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + placementTestimonials.length) % placementTestimonials.length)}
            className="h-14 w-14 border border-black/10 bg-white text-navy-deep hover:bg-navy-deep hover:text-white flex items-center justify-center transition-all shadow-sm"
            aria-label="Previous testimonial"
          >
            <IconChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % placementTestimonials.length)}
            className="h-14 w-14 border border-black/10 bg-white text-navy-deep hover:bg-navy-deep hover:text-white flex items-center justify-center transition-all shadow-sm"
            aria-label="Next testimonial"
          >
            <IconChevronRight size={24} />
          </button>
        </div>
      </div>

      <article className="relative mt-8 bg-slate-50 p-10 md:p-16 shadow-sm overflow-hidden min-h-[400px] flex flex-col justify-center">
        {/* Decorative Quote Mark */}
        <div className="absolute top-8 left-8 text-[180px] font-serif leading-none text-black/[0.03] select-none pointer-events-none">
          &ldquo;
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-1.5 text-gold mb-10">
            {[...Array(5)].map((_, i) => (
              <IconStarFilled key={i} size={20} />
            ))}
          </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed lg:leading-relaxed text-navy-deep font-medium">
            &ldquo;{activeItem.quote}&rdquo;
          </p>
          <div className="mt-12 flex items-center gap-6">
            <div className="h-16 w-16 bg-navy-deep text-white font-heading font-bold text-lg flex items-center justify-center shadow-lg">
              {activeItem.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-heading text-xl font-bold text-navy-deep">{activeItem.name}</p>
              <p className="text-sm font-bold text-crimson mt-1 uppercase tracking-wider">{activeItem.role}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
