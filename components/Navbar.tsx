"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navGroups } from "@/constants/data";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredGroups = useMemo(() => {
    if (!search.trim()) {
      return navGroups;
    }

    const query = search.toLowerCase();
    return navGroups
      .map((group) => ({
        ...group,
        links: group.links.filter((item) => item.label.toLowerCase().includes(query))
      }))
      .filter((group) => group.label.toLowerCase().includes(query) || group.links.length > 0);
  }, [search]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-slate/20 bg-navy" : "border-white/20 bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-grid px-4 md:px-8 h-20 flex items-center justify-between" aria-label="Global navigation">
        <Link href="#" className="font-heading text-white text-xl tracking-tight font-semibold">
          RIT Polytechnic Pune
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <Link href={group.href} className="text-sm text-white/90 hover:text-gold transition-colors">
                {group.label}
              </Link>

              <AnimatePresence>
                {activeGroup === group.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute left-0 top-8 w-80 rounded-sm border border-slate/20 bg-white p-5 shadow-card"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">{group.label}</p>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="text-sm text-slate hover:text-navy transition-colors">
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
                  placeholder="Search departments or admissions"
                  className="w-full h-11 rounded-sm border border-white/25 bg-transparent px-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-gold"
                />
              </label>

              <div className="mt-5 space-y-4 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
                {filteredGroups.map((group) => (
                  <section key={group.label} className="rounded-sm border border-white/20 p-4">
                    <Link href={group.href} className="font-semibold text-gold" onClick={() => setDrawerOpen(false)}>
                      {group.label}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((item) => (
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
