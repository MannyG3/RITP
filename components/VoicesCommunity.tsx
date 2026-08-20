"use client";

import { IconQuote, IconStarFilled, IconSparkles } from "@tabler/icons-react";
import { placementTestimonials } from "@/constants/site-pages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const allTestimonials = [
  ...placementTestimonials,
  {
    name: "Omkar Bhosale",
    role: "Junior Engineer, Bharat Forge",
    quote:
      "The practical workshop sessions at RITP gave me real-world mechanical fabrication and CAD experience that helped me clear the technical rounds with ease."
  },
  {
    name: "Snehal Deshmukh",
    role: "Associate Developer, Persistent Systems",
    quote:
      "Faculty support and the coding labs enabled me to build strong programming fundamentals in C, Python, and web development."
  },
  {
    name: "Pranav Shinde",
    role: "Design Engineer Trainee, Hyundai",
    quote:
      "From drafting standards to industrial maintenance, the hands-on diploma learning prepared me directly for industry plant operations."
  }
];

export function VoicesCommunity() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
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
      className="py-20 lg:py-28 bg-[#FBFBFC]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-grid px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-crimson/5 border border-crimson/15 text-crimson text-xs font-bold uppercase mb-4">
            <IconSparkles size={13} />
            Testimonials
          </div>

          <h2
            id="testimonials-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-dark leading-tight"
          >
            Voices From Our{" "}
            <span className="font-serif italic font-normal text-crimson">Alumni Community</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate leading-relaxed">
            Real experiences from students who launched rewarding careers at top multinational companies.
          </p>
        </div>

        {/* Top 2 Featured Large Cards (Inspiration Image 1) */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {allTestimonials.slice(0, 2).map((item) => (
            <article
              key={item.name}
              className="testimonial-card group border border-black/8 bg-white p-8 sm:p-10 shadow-sm hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-navy/5 text-crimson flex items-center justify-center">
                    <IconQuote size={20} className="rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <IconStarFilled key={i} size={15} />
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base text-slate leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4">
                <div className="h-12 w-12 bg-navy text-white font-heading font-bold text-sm flex items-center justify-center shrink-0">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy-dark">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-crimson mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom 4 Compact Cards (Inspiration Image 1) */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {allTestimonials.slice(2, 6).map((item) => (
            <article
              key={item.name}
              className="testimonial-card border border-black/6 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-gold">
                  <IconQuote size={16} className="text-navy/30 rotate-180" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <IconStarFilled key={i} size={12} />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate leading-relaxed line-clamp-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-3">
                <div className="h-8 w-8 bg-navy/10 text-navy font-bold text-xs flex items-center justify-center shrink-0">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-dark">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-muted line-clamp-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
