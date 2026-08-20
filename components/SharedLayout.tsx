import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar forceSolid />
      <main className="overflow-x-hidden w-full max-w-full min-h-screen py-32 md:py-48">
        {children}
      </main>
      <Footer />
    </>
  );
}
