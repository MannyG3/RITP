"use client";

import Image from "next/image";
import { useState } from "react";
import { IconChevronDown, IconHelpCircle } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What diploma programmes are offered at RITP Pune?",
    answer:
      "RITP offers 4 major 3-year AICTE-approved and MSBTE-affiliated diploma engineering programmes: Computer Engineering (120 Seats), AI & Machine Learning (120 Seats), Mechanical Engineering (60 Seats), and Civil Engineering (60 Seats)."
  },
  {
    question: "How can I apply for First Year or Direct Second Year admission?",
    answer:
      "Admissions are conducted through the Centralized Admission Process (CAP) organized by DTE Maharashtra (DTE Code: 6456). Candidates with 10th SSC (min 35%) can apply for First Year, while 12th Science/MCVC/ITI candidates can apply for lateral entry to Direct Second Year. Our Lohegaon campus facilitation center provides free guidance."
  },
  {
    question: "Are government scholarships and financial concessions available?",
    answer:
      "Yes. RITP assists all eligible students in claiming Government of Maharashtra scholarships, including EBC (Economically Backward Class), TFWS (Tuition Fee Waiver Scheme), minority scholarships, and category fee concessions as per state norms."
  },
  {
    question: "What facilities are provided for student housing and transport?",
    answer:
      "The campus provides separate supervised hostels for boys and girls equipped with 500 Mbps Wi-Fi, solar water heating, and 24/7 security. The institute also operates dedicated bus transport routes covering major zones across Pune."
  },
  {
    question: "How does the Training & Placement Cell support career readiness?",
    answer:
      "The Placement Cell provides 100% career assistance, conducting aptitude training, resume building, mock interviews, and technical workshops. Top recruiters include Tata Motors, Hyundai, TCS, KPIT Technologies, Bharat Forge, and Persistent Systems."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFC]" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-grid px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-navy/5 border border-navy/10 text-navy text-xs font-bold uppercase mb-4">
            <IconHelpCircle size={13} />
            FAQ
          </div>

          <h2
            id="faq-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-dark leading-tight"
          >
            Frequently Asked{" "}
            <span className="font-serif italic font-normal text-crimson">Questions</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate leading-relaxed">
            Essential information regarding eligibility, CAP rounds, documents, and campus life at RITP Pune.
          </p>
        </div>

        {/* Split Layout matching Inspiration Image 1 */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Tall Arched Campus Architecture Photo */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[580px] overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="https://studyriserr.com/images/cover/171295144316009407661.jpg"
              alt="RIT Polytechnic Academic Building Lohegaon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-white/40 text-navy-dark">
              <p className="text-sm font-bold mt-1">Have more questions? Visit our Lohegaon campus</p>
              <p className="text-xs text-slate mt-1">Call: +91 9607956658 / 59 / 60</p>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border border-black/8 bg-white overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-navy-dark">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center bg-slate-100 text-navy shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-navy text-white" : ""
                      }`}
                    >
                      <IconChevronDown size={16} stroke={2.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate leading-relaxed border-t border-black/5 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
