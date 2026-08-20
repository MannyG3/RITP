"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconArrowRight,
  IconPhone,
  IconMail,
  IconMapPin
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-[#071324] text-white pt-20 pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-grid px-4 md:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="h-14 w-14 bg-white p-1 flex items-center justify-center shrink-0 shadow-md">
                  <Image
                    src="/images/logos/logo.png"
                    alt="RITP Logo"
                    width={48}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-heading text-lg sm:text-xl font-bold leading-tight text-white">
                    RIT POLYTECHNIC
                  </p>
                  <p className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                    Lohegaon, Pune • DTE: 6456
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs text-white/75 leading-relaxed max-w-sm">
                Kasegaon Education Society&apos;s Rajarambapu Institute of Technology (Polytechnic).
                AICTE approved, affiliated to MSBTE Mumbai, and recognized by the Government of Maharashtra.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <IconMapPin size={15} className="text-crimson shrink-0 mt-0.5" />
                  <span>S. No. 35/4, Vadgaon-Shinde Road, Lohegaon, Pune-411047</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone size={15} className="text-gold shrink-0" />
                  <a href="tel:+919607956658" className="hover:text-gold transition-colors">
                    +91 9607956658 / 59 / 60
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IconMail size={15} className="text-gold shrink-0" />
                  <a href="mailto:info@ritppune.com" className="hover:text-gold transition-colors">
                    info@ritppune.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="h-9 w-9 bg-white/10 flex items-center justify-center text-white/80 hover:bg-gold hover:text-navy-dark transition-all"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={16} />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/10 flex items-center justify-center text-white/80 hover:bg-gold hover:text-navy-dark transition-all"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={16} />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/10 flex items-center justify-center text-white/80 hover:bg-gold hover:text-navy-dark transition-all"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={16} />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/10 flex items-center justify-center text-white/80 hover:bg-gold hover:text-navy-dark transition-all"
                aria-label="YouTube"
              >
                <IconBrandYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase text-gold mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Institute
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions 2026
                </Link>
              </li>
              <li>
                <Link href="/placement-cell" className="hover:text-white transition-colors">
                  Placement Cell
                </Link>
              </li>
              <li>
                <Link href="/student-activities" className="hover:text-white transition-colors">
                  Student Activities
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-white transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/about/location" className="hover:text-white transition-colors">
                  Campus Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programmes (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase text-gold mb-5">
              Academic Branches
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75">
              <li>
                <Link href="/departments/computer" className="hover:text-white transition-colors">
                  Computer Engineering (120 Seats)
                </Link>
              </li>
              <li>
                <Link href="/departments/aiml" className="hover:text-white transition-colors">
                  AI &amp; Machine Learning (120 Seats)
                </Link>
              </li>
              <li>
                <Link href="/departments/mech" className="hover:text-white transition-colors">
                  Mechanical Engineering (60 Seats)
                </Link>
              </li>
              <li>
                <Link href="/departments/civil" className="hover:text-white transition-colors">
                  Civil Engineering (60 Seats)
                </Link>
              </li>
              <li>
                <Link href="/academics/science-and-humanities" className="hover:text-white transition-colors">
                  Science &amp; Humanities
                </Link>
              </li>
              <li>
                <Link href="/admissions/first-year" className="hover:text-white transition-colors">
                  First Year Diploma Eligibility
                </Link>
              </li>
              <li>
                <Link href="/admissions/direct-second-year" className="hover:text-white transition-colors">
                  Direct Second Year Lateral Entry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Enquiries (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase text-gold mb-5">
              Admissions Newsletter
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe to receive verified CAP round announcements, merit lists, and scholarship notifications.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col gap-2.5"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full h-11 border border-white/20 bg-white/10 px-4 text-xs text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-9 px-4 bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                >
                  <span>Join</span>
                  <IconArrowRight size={13} stroke={2.5} />
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-white/5 border border-white/10">
              <p className="text-[11px] font-bold text-gold uppercase tracking-wider">Direct Admissions Desk</p>
              <p className="text-xs text-white/80 mt-1">
                Contact: Mr. Dhiraj Nimbalkar <br />
                <a href="tel:9822850858" className="font-semibold text-white hover:text-gold">+91 9822850858</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Rajarambapu Institute of Technology (Polytechnic), Pune. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>AICTE Approved</span>
            <span>•</span>
            <span>MSBTE Affiliated</span>
            <span>•</span>
            <span>DTE Code: 6456</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
