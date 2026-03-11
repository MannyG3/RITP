import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar forceSolid />
      <main className="min-h-screen bg-[#f7f8fb] pt-24">{children}</main>
      <Footer />
    </>
  );
}
