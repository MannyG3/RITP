import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items, tone = "light" }: { items: BreadcrumbItem[]; tone?: "light" | "dark" }) {
  const baseText = tone === "dark" ? "text-white/70" : "text-slate";
  const activeText = tone === "dark" ? "font-semibold text-white" : "font-semibold text-navy";

  return (
    <nav aria-label="Breadcrumb" className={`mx-auto max-w-grid px-4 md:px-8 py-5 text-sm ${baseText}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? activeText : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
