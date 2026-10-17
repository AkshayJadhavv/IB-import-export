import Link from "next/link";
import { sans } from "./theme";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const base = tone === "dark" ? "rgba(255,255,255,0.55)" : "#6B6B6B";
  const current = tone === "dark" ? "#fff" : "#1A1A1A";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase" style={{ fontFamily: sans, color: base }}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href && !last ? (
                <Link href={item.href} className="transition-opacity hover:opacity-60">{item.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined} style={{ color: last ? current : base }}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
