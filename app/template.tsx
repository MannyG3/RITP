'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FrozenRouter } from './frozen-router';
import { PageTransition } from './page-transition';
import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={pathname}>
        <FrozenRouter>{children}</FrozenRouter>
      </PageTransition>
    </AnimatePresence>
  );
}
