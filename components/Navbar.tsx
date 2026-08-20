"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { navTabs } from "@/constants/data";
import { instituteProfile } from "@/constants/site-pages";
import {
  IconChevronDown,
  IconMenu2,
  IconX,
  IconPhone,
  IconMail,
  IconArrowUpRight,
  IconSearch,
  IconFileText,
  IconSparkles
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(forceSolid);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (forceSolid) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  const isTabActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    const normalizedHref = href.split("#")[0];
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  const filteredTabs = useMemo(() => {
    if (!searchQuery.trim()) return navTabs;
    const q = searchQuery.toLowerCase();
    return navTabs
      .map((tab) => ({
        ...tab,
        children: (tab.children ?? []).filter((item) =>
          item.label.toLowerCase().includes(q)
        ),
      }))
      .filter(
        (tab) =>
          tab.label.toLowerCase().includes(q) || (tab.children ?? []).length > 0
      );
  }, [searchQuery]);

  return (
    <>
      <header className="relative w-full z-40 bg-white border-b border-black/[0.06]">
        {/* Top Utility Bar */}
        <div className="bg-navy-dark text-white/90 border-b border-white/10">
          <div className="mx-auto max-w-grid px-4 md:px-8 h-10 flex items-center justify-between text-xs tracking-wide">
            <div className="flex items-center gap-6">
              <a
                href="tel:+912332300383"
                className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
              >
                <IconPhone size={13} stroke={2} className="text-gold" />
                <span>+91 233 2300383</span>
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="mailto:info@ritppune.com"
                className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
              >
                <IconMail size={13} stroke={2} className="text-gold" />
                <span>info@ritppune.com</span>
              </a>
              <span className="hidden md:inline text-white/20">|</span>
              <span className="hidden md:inline text-white/75">
                DTE Code: <strong className="text-white font-semibold">{instituteProfile.dteCode}</strong>
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-crimson/90 text-white font-semibold uppercase tracking-wider">
                <IconSparkles size={11} stroke={2.5} />
                Admissions 2026 Open
              </span>
              <span className="hidden lg:inline text-white/60">MSBTE Affiliated • AICTE Approved</span>
            </div>
          </div>
        </div>

        {/* Institutional Identity Strip */}
        <div className="mx-auto max-w-grid px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 p-1 bg-white shadow-sm border border-black/5 flex items-center justify-center">
              <Image
                src="/images/logos/logo.png"
                alt="Rajarambapu Institute of Technology Polytechnic Crest"
                width={80}
                height={80}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-crimson text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Kasegaon Education Society&apos;s
              </p>
              <h1 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-navy-dark group-hover:text-navy transition-colors">
                RAJARAMBAPU INSTITUTE OF TECHNOLOGY
              </h1>
              <p className="font-heading text-xs sm:text-sm font-medium tracking-wide text-slate-muted">
                (POLYTECHNIC) LOHEGAON, PUNE — <span className="text-navy font-semibold">DTE CODE: 6456</span>
              </p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-crimson text-white text-xs font-bold uppercase tracking-wider hover:bg-crimson-hover shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Apply for Admissions</span>
              <IconArrowUpRight size={15} stroke={2.5} />
            </Link>
            <Link
              href="/about/location"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-black/15 text-navy text-xs font-semibold hover:bg-black/5 transition-all"
            >
              <span>Campus Location</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Sticky Navigation Bar (Inspiration Style: Floating Pill / Sticky Capsule) */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-card border-b border-black/[0.08] py-2"
            : "bg-navy-dark text-white shadow-sm py-0"
        )}
        aria-label="Global navigation"
      >
        <div className="mx-auto max-w-grid px-4 md:px-8 flex items-center justify-between h-14">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
            {navTabs.map((tab) => (
              <div
                key={tab.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(tab.children ? tab.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={tab.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-semibold transition-all duration-200",
                    scrolled
                      ? isTabActive(tab.href)
                        ? "bg-navy text-white shadow-sm"
                        : "text-slate hover:bg-black/5 hover:text-navy"
                      : isTabActive(tab.href)
                      ? "bg-white/15 text-gold font-bold shadow-inner"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <span>{tab.label}</span>
                  {tab.children && (
                    <IconChevronDown
                      size={13}
                      stroke={2.5}
                      className={cn(
                        "transition-transform duration-200 opacity-70",
                        activeDropdown === tab.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === tab.label && tab.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-0 top-[calc(100%-4px)] min-w-[280px] border border-black/10 bg-white p-2.5 shadow-cardHover backdrop-blur-xl z-50 text-slate"
                    >
                      <div className="p-2 border-b border-black/5 mb-1.5">
                        <p className="text-[10px] font-bold uppercase text-slate-muted">
                          {tab.label} Sections
                        </p>
                      </div>
                      <div className="flex flex-col gap-0.5 max-h-[360px] overflow-y-auto pr-1">
                        {tab.children.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-slate hover:bg-navy/5 hover:text-navy transition-colors group"
                          >
                            <span>{item.label}</span>
                            <IconArrowUpRight
                              size={13}
                              className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-crimson"
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Scrolled Small Logo Indicator */}
          <div className={cn("flex lg:hidden items-center gap-3", !scrolled && "text-white")}>
            <Link href="/" className="flex items-center gap-2.5 font-heading font-bold text-sm">
              <Image
                src="/images/logos/logo.png"
                alt="RITP Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className={scrolled ? "text-navy" : "text-white"}>RITP Pune</span>
            </Link>
          </div>

          {/* Actions & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/admissions/first-year"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
                scrolled
                  ? "bg-crimson text-white hover:bg-crimson-hover shadow-sm"
                  : "bg-gold text-navy-dark hover:bg-gold-hover"
              )}
            >
              <span>Apply Now</span>
              <IconArrowUpRight size={14} stroke={2.5} />
            </Link>

            <button
              onClick={() => setDrawerOpen(true)}
              className={cn(
                "flex lg:hidden h-10 w-10 items-center justify-center transition-all active:scale-95",
                scrolled
                  ? "bg-black/5 text-navy hover:bg-black/10"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
              aria-label="Open navigation menu"
            >
              <IconMenu2 size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Inspiration Quality Modal Menu) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 top-0 h-full w-[90%] max-w-md bg-white p-6 shadow-2xl flex flex-col justify-between"
              aria-label="Mobile menu"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logos/logo.png"
                      alt="RITP Logo"
                      width={36}
                      height={36}
                      className="h-9 w-auto"
                    />
                    <div>
                      <p className="font-heading text-sm font-bold text-navy-dark leading-tight">RITP Pune</p>
                      <p className="text-[10px] text-slate-muted">DTE Code: 6456</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="flex h-9 w-9 items-center justify-center bg-black/5 text-slate hover:bg-black/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <IconX size={18} />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="mt-4 relative">
                  <IconSearch size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menu and branches..."
                    className="w-full h-10 border border-black/10 bg-slate-50 pl-10 pr-4 text-xs text-slate outline-none focus:border-navy transition-colors"
                  />
                </div>

                {/* Nav Links List */}
                <div className="mt-6 flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-280px)] pr-2">
                  {filteredTabs.map((tab) => (
                    <div key={tab.label} className="border-b border-black/5 pb-2">
                      <Link
                        href={tab.href}
                        onClick={() => setDrawerOpen(false)}
                        className="font-heading text-base font-bold text-navy-dark flex items-center justify-between py-1 hover:text-crimson transition-colors"
                      >
                        <span>{tab.label}</span>
                        <IconArrowUpRight size={14} className="text-slate-muted" />
                      </Link>
                      {tab.children && tab.children.length > 0 && (
                        <div className="mt-1.5 grid grid-cols-1 gap-1 pl-3 border-l-2 border-gold/30">
                          {tab.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setDrawerOpen(false)}
                              className="py-1 text-xs font-medium text-slate hover:text-crimson transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 border-t border-black/10 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 bg-crimson text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-crimson-hover transition-colors"
                >
                  <IconFileText size={16} />
                  <span>Apply for Admissions 2026</span>
                </Link>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-muted">
                  <a href="tel:+912332300383" className="hover:text-navy">+91 233 2300383</a>
                  <span>•</span>
                  <a href="mailto:info@ritppune.com" className="hover:text-navy">info@ritppune.com</a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
