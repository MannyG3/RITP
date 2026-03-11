"use client";

import { motion } from "framer-motion";
import { notices } from "@/constants/data";

export function NoticeFeed() {
  return (
    <section className="mx-auto max-w-grid px-4 md:px-8 py-16" aria-labelledby="news-title">
      <h2 id="news-title" className="font-heading text-3xl md:text-4xl text-navy tracking-tight">
        Latest News
      </h2>
      <div className="mt-7 space-y-4">
        {notices.map((notice, index) => (
          <motion.article
            key={notice.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-sm border border-slate/20 p-5 md:p-6 bg-white"
          >
            <p className="inline-flex px-3 h-8 items-center rounded-sm border border-gold text-gold text-xs font-semibold">
              {notice.date}
            </p>
            <h3 className="mt-3 font-heading text-xl text-navy">{notice.title}</h3>
            <p className="mt-2 text-sm text-slate">{notice.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
