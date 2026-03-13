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
    <section className="mx-auto max-w-grid px-4 md:px-8 pb-20">
      <div className="mb-6 flex flex-wrap gap-3">
        {departmentLinks.map((item) => (
          <Link
            key={item.slug}
            href={`/departments/${item.slug}`}
            className={`inline-flex h-11 items-center rounded-sm border px-4 text-sm font-semibold transition-colors ${
              item.slug === department.slug
                ? "border-gold bg-gold/10 text-navy"
                : "border-slate/20 bg-white text-slate hover:border-navy hover:text-navy"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="border-b border-slate/20">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`h-11 px-5 border-b-2 text-sm font-semibold transition-colors ${
                activeTab === tab ? "border-gold text-navy" : "border-transparent text-slate hover:text-navy"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Overview" ? (
        <div className="grid gap-4 py-8 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Department Overview</h2>
            <div className="mt-4 space-y-4 text-slate leading-7">
              {department.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h3 className="font-heading text-2xl text-navy">Why This Department</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>
                Intake: <span className="font-semibold text-navy">{department.intake} Seats</span>
              </li>
              <li>
                Duration: <span className="font-semibold text-navy">{department.duration}</span>
              </li>
              {department.focusAreas.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </aside>
        </div>
      ) : null}

      {activeTab === "Faculty" ? (
        <div className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-3">
          {department.faculty.map((member) => (
            <article key={member.name} className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
              <h2 className="font-heading text-2xl text-navy">{member.name}</h2>
              <p className="mt-2 text-sm text-slate">{member.designation}</p>
              {member.phone ? (
                <a href={`tel:${member.phone}`} className="mt-4 block text-sm font-medium text-slate hover:text-navy">
                  {member.phone}
                </a>
              ) : null}
              {member.email ? (
                <a href={`mailto:${member.email}`} className="mt-1 block text-sm font-medium text-slate hover:text-navy break-all">
                  {member.email}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "Laboratories" ? (
        <div className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-3">
          {department.labs.map((lab) => (
            <article key={lab.title} className="overflow-hidden rounded-sm border border-slate/20 bg-white shadow-card">
              <div className="relative h-56">
                <Image src={lab.image} alt={lab.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-2xl text-navy">{lab.title}</h2>
                <p className="mt-3 text-sm text-slate leading-7">{lab.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {activeTab === "Syllabus" ? (
        <div className="py-8">
          <article className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
            <h2 className="font-heading text-3xl text-navy">Syllabus Snapshot</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2 text-slate">
              {department.syllabus.map((subject) => (
                <li key={subject} className="rounded-sm border border-slate/15 px-4 py-3">
                  {subject}
                </li>
              ))}
            </ul>
          </article>
        </div>
      ) : null}
    </section>
  );
}
