"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navTabs } from "@/constants/data";
import { instituteProfile } from "@/constants/site-pages";

export function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(forceSolid);
  const [compact, setCompact] = useState(forceSolid);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (forceSolid) {
      setSolid(true);
      setCompact(true);
      return;
    }

    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 8);
      setCompact(y > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  const isTabActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return false;
    }

    const normalizedHref = href.split("#")[0];
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  const filteredTabs = useMemo(() => {
    if (!search.trim()) {
      return navTabs;
    }

    const query = search.toLowerCase();
    return navTabs
      .map((tab) => ({
        ...tab,
        children: (tab.children ?? []).filter((item) => item.label.toLowerCase().includes(query))
      }))
      .filter((tab) => tab.label.toLowerCase().includes(query) || (tab.children ?? []).length > 0);
  }, [search]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-slate/20 bg-white transition-shadow ${solid ? "shadow-sm" : ""}`}>
        <motion.div
          animate={{ height: compact ? 0 : "auto", opacity: compact ? 0 : 1, y: compact ? -20 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="bg-[#3c3a98] text-white">
            <div className="mx-auto max-w-grid h-11 px-4 md:px-8 flex items-center justify-between text-sm">
              <div className="hidden md:flex items-center gap-5">
                <a href="tel:+912332300383" className="hover:text-gold transition-colors">
                  Phone: +91 233 2300383
                </a>
                <a href="mailto:info@ritppune.com" className="hover:text-gold transition-colors">
                  info@ritppune.com
                </a>
              </div>
              <div className="md:hidden text-xs">{instituteProfile.shortName}</div>
              <div className="hidden md:block">Online Services • Communication</div>
            </div>
          </div>

          <div className="bg-[#ececec] border-b border-slate/15">
            <div className="mx-auto max-w-grid px-4 md:px-8 py-5 md:py-7 text-center">
              <Image src="/images/college-logo.png" alt="College crest" width={132} height={132} className="mx-auto h-24 w-auto" priority />
              <p className="mt-2 text-[#ef3340] text-base md:text-lg font-medium">Kasegaon Education Society&apos;s</p>
              <h1 className="mt-1 font-heading text-2xl md:text-4xl font-semibold tracking-tight text-[#ef3340]">
                RAJARAMBAPU INSTITUTE OF TECHNOLOGY
                <span className="block text-xl md:text-3xl">(POLYTECHNIC) LOHEGAON, PUNE</span>
              </h1>
              <p className="mt-2 text-[#ef3340] text-sm md:text-base">
                {instituteProfile.affiliations}
              </p>
            </div>
          </div>
        </motion.div>

        <nav className="bg-[#efefef]" aria-label="Global navigation">
          <div className="mx-auto max-w-grid px-4 md:px-8 h-14 hidden lg:flex items-center justify-between">
            {navTabs.map((tab) => (
              <div
                key={tab.label}
                className="relative h-full"
                onMouseEnter={() => setActiveDropdown(tab.children ? tab.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={tab.href}
                  className={`h-full px-3 inline-flex items-center gap-1 border-b-2 transition-colors ${
                    isTabActive(tab.href)
                      ? "border-b-gold text-navy font-semibold"
                      : "border-b-transparent text-[#1f1f1f] hover:text-[#3c3a98]"
                  }`}
                >
                  {tab.label}
                  {tab.children ? <span aria-hidden className="text-xs">v</span> : null}
                </Link>

                <AnimatePresence>
                  {activeDropdown === tab.label && tab.children ? (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute left-0 top-14 z-40 min-w-[280px] rounded-b-md border border-slate/15 bg-white py-2 shadow-xl"
                    >
                      <ul className="space-y-1 px-2">
                        {tab.children.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="block rounded-md px-3 py-2 text-[15px] text-slate hover:bg-slate-100 hover:text-navy">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-grid px-4 md:px-8 h-14 flex lg:hidden items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
              <Image src="/images/college-logo.png" alt="College crest" width={28} height={28} className="h-7 w-7" />
              {instituteProfile.shortName}
            </Link>
            <button
              className="h-10 px-4 rounded-sm border border-navy text-navy text-sm font-semibold"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              Open
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {drawerOpen ? (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
                className="fixed inset-0 z-50 bg-black/45"
                aria-label="Close menu overlay"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed right-0 top-0 z-[60] h-full w-[88%] max-w-sm bg-navy text-white p-6 border-l border-gold/40"
                aria-label="Mobile menu"
              >
                <div className="flex items-center justify-between">
                  <p className="font-heading text-lg">Explore RITP</p>
                  <button
                    className="h-10 px-3 rounded-sm border border-gold text-gold text-sm"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                  >
                    Close
                  </button>
                </div>

                <label className="mt-5 block">
                  <span className="sr-only">Search menu</span>
                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search menu"
                    className="w-full h-11 rounded-sm border border-white/25 bg-transparent px-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-gold"
                  />
                </label>

                <div className="mt-5 space-y-4 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
                  {filteredTabs.map((tab) => (
                    <section key={tab.label} className="rounded-sm border border-white/20 p-4">
                      <Link href={tab.href} className="font-semibold text-gold" onClick={() => setDrawerOpen(false)}>
                        {tab.label}
                      </Link>
                      {(tab.children ?? []).length > 0 ? (
                        <ul className="mt-3 space-y-2">
                          {(tab.children ?? []).map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="text-sm text-white/90 hover:text-gold"
                                onClick={() => setDrawerOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>
      </header>

      <motion.div
        aria-hidden
        animate={{ height: compact ? 56 : 242 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="w-full"
      />
    </>
  );
}
