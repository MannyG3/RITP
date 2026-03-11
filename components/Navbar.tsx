"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navTabs } from "@/constants/data";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-slate/30 bg-navy/95" : "border-white/20 bg-navy/70"
      }`}
    >
      <nav className="mx-auto max-w-grid px-4 md:px-8 h-20 flex items-center justify-between gap-4" aria-label="Global navigation">
        <Link href="#" className="inline-flex items-center gap-3 font-heading text-white text-lg xl:text-xl tracking-tight font-semibold whitespace-nowrap">
          <Image
            src="/images/college-logo.png"
            alt="RIT logo"
            width={46}
            height={18}
            className="h-9 w-auto rounded-sm bg-white/95 p-1"
            priority
          />
          <span>RIT Polytechnic Pune</span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-end">
          <div className="relative flex w-full max-w-5xl overflow-visible rounded-xl border border-white/20 bg-gradient-to-b from-[#0b2e58] to-[#001d3d] shadow-card">
            {navTabs.map((tab) => (
              <div
                key={tab.label}
                className="relative flex-1"
                onMouseEnter={() => setActiveDropdown(tab.children ? tab.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={tab.href}
                  className={`h-12 px-3 inline-flex w-full items-center justify-center text-center text-[15px] border-r border-white/10 transition-colors ${
                    tab.active
                      ? "bg-gradient-to-b from-[#d4af37] to-[#b9911a] text-navy font-semibold"
                      : "text-white/90 hover:bg-[#173d69]"
                  }`}
                >
                  {tab.label}
                </Link>

                <AnimatePresence>
                  {activeDropdown === tab.label && tab.children ? (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute left-0 top-12 z-40 min-w-[260px] rounded-b-xl border border-white/20 bg-[#082848] py-2 shadow-xl"
                    >
                      <ul className="space-y-1 px-3 py-2">
                        {tab.children.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-center text-[14px] tracking-wide text-white/90 hover:bg-[#123a66]"
                            >
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
        </div>

        <button
          className="lg:hidden h-11 px-4 rounded-sm border border-gold text-gold text-sm font-semibold"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
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
  );
}
