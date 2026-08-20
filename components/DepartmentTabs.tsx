"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { departmentDetails, type DepartmentDetail } from "@/constants/site-pages";

const tabs = ["Overview", "Faculty", "Laboratories", "Syllabus"] as const;

type TabKey = (typeof tabs)[number];

export function DepartmentTabs({ department }: { department: DepartmentDetail }) {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const departmentLinks = Object.values(departmentDetails);

  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 pb-32">
      {/* Branch Switcher Pills */}
      <div className="mb-16 flex flex-wrap gap-3">
        {departmentLinks.map((item) => (
          <Link
            key={item.slug}
            href={`/departments/${item.slug}`}
            className={`inline-flex items-center px-6 py-3 text-sm font-bold transition-all border ${
              item.slug === department.slug
                ? "bg-navy-deep text-white border-navy-deep"
                : "bg-white text-slate-muted border-black/10 hover:border-black/30"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24">
        {/* Navigation Sidebar */}
        <div className="flex flex-col gap-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`group flex items-center justify-between py-4 border-b border-black/10 text-left transition-all ${
                activeTab === tab ? "border-navy-deep" : "hover:border-black/30"
              }`}
            >
              <span className={`font-heading text-2xl md:text-3xl font-bold tracking-tight transition-all ${
                activeTab === tab ? "text-navy-deep" : "text-slate-light group-hover:text-slate-muted"
              }`}>
                {tab}
              </span>
              <span className={`font-mono text-sm transition-all ${
                activeTab === tab ? "text-gold font-bold" : "text-slate-light"
              }`}>
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          {/* Tab 1: Overview */}
          {activeTab === "Overview" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="grid gap-12 xl:grid-cols-[1.5fr_1fr]">
                <article>
                  <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-8">
                    Overview
                  </h2>
                  <div className="space-y-6 text-lg text-slate-muted leading-relaxed font-medium">
                    {department.overview.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>

                <aside className="bg-slate-50 p-10 border border-black/5">
                  <h3 className="font-heading text-2xl font-bold text-navy-deep mb-8">Programme Info</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xl font-bold text-navy-deep">{department.intake} Seats Intake</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-navy-deep">{department.duration} Duration</p>
                    </div>
                    <div className="pt-6 border-t border-black/10">
                      <div className="flex flex-wrap gap-2">
                        {department.focusAreas.map((focus, i) => (
                          <span key={i} className="px-4 py-2 border border-black/10 text-xs font-bold text-navy-deep bg-white">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          )}

          {/* Tab 2: Faculty */}
          {activeTab === "Faculty" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-12">
                Faculty
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {department.faculty.map((member, i) => (
                  <article key={i} className="group border border-black/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-2xl font-bold text-navy-deep group-hover:text-gold transition-colors">{member.name}</h3>
                      <span className="text-xs font-bold uppercase text-slate-muted bg-slate-100 px-3 py-1">
                        {member.designation}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-muted font-medium">
                      {member.phone && <a href={`tel:${member.phone}`} className="hover:text-navy-deep">{member.phone}</a>}
                      {member.email && <a href={`mailto:${member.email}`} className="hover:text-navy-deep">{member.email}</a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Laboratories */}
          {activeTab === "Laboratories" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-12">
                Laboratories
              </h2>
              <div className="grid gap-10 md:grid-cols-2">
                {department.labs.map((lab, i) => (
                  <article key={i} className="group cursor-pointer">
                    <div className="relative h-64 w-full overflow-hidden mb-6 border border-black/10">
                      <Image src={lab.image} alt={lab.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy-deep mb-3 group-hover:text-gold transition-colors">{lab.title}</h3>
                    <p className="text-slate-muted leading-relaxed font-medium">{lab.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Syllabus */}
          {activeTab === "Syllabus" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-deep tracking-tight mb-12">
                Syllabus Snapshot
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {department.syllabus.map((subject, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-black/5 hover:border-black/20 transition-colors">
                    <p className="font-heading text-xl font-bold text-navy-deep">{subject}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
