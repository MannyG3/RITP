import Link from "next/link";
import { IconChevronRight, IconHome } from "@tabler/icons-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items, tone = "light" }: { items: BreadcrumbItem[]; tone?: "light" | "dark" }) {
  const baseText = tone === "dark" ? "text-white/70" : "text-slate-muted";
  const activeText = tone === "dark" ? "font-bold text-white" : "font-bold text-navy-dark";

  return (
    <nav aria-label="Breadcrumb" className={`mx-auto max-w-grid px-4 md:px-8 py-5 text-xs ${baseText}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="inline-flex items-center gap-1.5">
          <Link href="/" className="hover:text-navy transition-colors flex items-center gap-1">
            <IconHome size={14} />
            <span>Home</span>
          </Link>
          <IconChevronRight size={13} className="text-slate-light" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-navy">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? activeText : undefined}>{item.label}</span>
              )}
              {!isLast && <IconChevronRight size={13} className="text-slate-light" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
