"use client";

import { motion } from "framer-motion";
import { departments } from "@/constants/data";

export function BentoGrid() {
  return (
    <section id="departments" className="mx-auto max-w-grid px-4 md:px-8 py-16 md:py-20" aria-labelledby="dept-title">
      <h2 id="dept-title" className="font-heading text-3xl md:text-4xl text-navy tracking-tight">
        Interactive Department Hub
      </h2>
      <p className="mt-3 text-slate text-sm md:text-base max-w-2xl">
        Four core diploma tracks built for practical engineering competence and modern industry readiness.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {departments.map((dept, index) => (
          <motion.article
            key={dept.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="group rounded-sm border border-slate/20 p-5 md:p-6 shadow-card bg-white"
          >
            <h3 className="font-heading text-xl text-navy">{dept.name}</h3>
            <p className="mt-3 text-sm text-slate leading-relaxed">{dept.summary}</p>
            <div className="mt-5 hidden group-hover:flex gap-2">
              <a
                href={dept.hodMessageHref}
                className="h-10 px-3 inline-flex items-center rounded-sm border border-slate/30 text-xs font-semibold text-slate"
              >
                Quick View HOD Message
              </a>
              <a
                href={dept.curriculumHref}
                className="h-10 px-3 inline-flex items-center rounded-sm border border-gold text-xs font-semibold text-gold"
              >
                Curriculum
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
