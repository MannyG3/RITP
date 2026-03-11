"use client";

import { useEffect, useState } from "react";
import { placementTestimonials } from "@/constants/site-pages";

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
    <section className="mx-auto max-w-grid px-4 md:px-8 pb-20" aria-labelledby="success-stories-title">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Success Stories</p>
          <h2 id="success-stories-title" className="mt-2 font-heading text-3xl md:text-4xl text-navy">
            Students placed in top MNCs
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + placementTestimonials.length) % placementTestimonials.length)}
            className="h-10 w-10 rounded-sm border border-slate/20 bg-white text-navy"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % placementTestimonials.length)}
            className="h-10 w-10 rounded-sm border border-slate/20 bg-white text-navy"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <article className="mt-7 rounded-sm border border-slate/20 bg-white p-6 md:p-8 shadow-card">
        <p className="text-lg md:text-xl leading-8 text-slate">“{activeItem.quote}”</p>
        <div className="mt-6">
          <p className="font-heading text-2xl text-navy">{activeItem.name}</p>
          <p className="mt-1 text-sm font-semibold text-gold">{activeItem.role}</p>
        </div>
      </article>
    </section>
  );
}
