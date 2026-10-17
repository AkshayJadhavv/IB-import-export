"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { categories, categoryHref, getProductsByCategory, productHref } from "@/app/data/products";

/* ── Hero palette (single source of truth) ── */
const palette = {
  green: "#1B4332",
  greenSoft: "#2D6A4F",
  greenDeep: "#0d2818",
  gold: "#D4A843",
  white: "#FFFFFF",
  light: "#E5E7EB",
  muted: "rgba(229,231,235,0.65)",
  line: "rgba(255,255,255,0.12)",
  panel: "#0f2a1c", // dark green panel
  cream: "rgba(212,168,67,0.06)", // subtle gold tint footer strip
};

const sans = "'DM Sans', 'Segoe UI', sans-serif";
const serif = "'Cormorant Garamond', Georgia, serif";

const focusRing =
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]";

/* ───────────────────────── Desktop ───────────────────────── */
interface DesktopProps {
  solid: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ProductsMegaMenu({ solid, onOpenChange }: DesktopProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByHover = useRef(false);
  const pathname = usePathname();

  const set = useCallback(
    (v: boolean) => {
      if (!v) openedByHover.current = false;
      setOpen(v);
      onOpenChange?.(v);
    },
    [onOpenChange]
  );

  const clearTimer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const handleEnter = () => {
    clearTimer();
    if (!open) openedByHover.current = true;
    set(true);
  };
  const handleLeave = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => set(false), 150);
  };

  useEffect(() => {
    set(false);
  }, [pathname, set]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) set(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        set(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, set]);

  const links = () => Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);

  const onTriggerKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      set(true);
      setTimeout(() => links()[0]?.focus(), 30);
    }
  };

  const onPanelKey = (e: React.KeyboardEvent) => {
    const items = links();
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[Math.min(i + 1, items.length - 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (i <= 0) triggerRef.current?.focus();
      else items[i - 1]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <div
      ref={wrapRef}
      className="h-20 flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) set(false);
      }}
    >
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="products-mega-menu"
        onClick={() => {
          if (openedByHover.current) {
            openedByHover.current = false;
            return;
          }
          set(!open);
        }}
        onKeyDown={onTriggerKey}
        className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{
          fontFamily: sans,
          color: solid ? palette.green : palette.white,
        }}
      >
        Products
        <ChevronDown
          size={13}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Panel */}
      <div
        id="products-mega-menu"
        ref={panelRef}
        onKeyDown={onPanelKey}
        className={`absolute left-0 right-0 top-full transition-all duration-200 ${
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          style={{
            backgroundColor: palette.panel,
            borderTop: `1px solid ${palette.line}`,
            borderBottom: `1px solid ${palette.line}`,
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.55)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-4 gap-8 xl:gap-14">
            {categories.map((cat) => (
              <div key={cat.slug}>
                {/* Category heading — gold */}
                <Link
                  href={categoryHref(cat.slug)}
                  className={`block pb-3 mb-4 border-b transition-opacity hover:opacity-80 ${focusRing}`}
                  style={{
                    borderColor: palette.gold,
                    fontFamily: serif,
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: palette.gold,
                  }}
                >
                  {cat.name}
                </Link>

                {/* Product links — light */}
                <ul>
                  {getProductsByCategory(cat.slug).map((p) => (
                    <li key={p.id}>
                      <Link
                        href={productHref(p)}
                        className={`block py-1.5 text-sm font-light transition-all duration-200 hover:translate-x-1 hover:text-[#D4A843] ${focusRing}`}
                        style={{ color: palette.light, fontFamily: sans }}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div
            className="border-t"
            style={{ borderColor: palette.line, backgroundColor: palette.cream }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
              <span
                className="text-xs font-light"
                style={{ color: palette.muted, fontFamily: sans }}
              >
                15 products across 4 categories
              </span>
              <Link
                href="/products"
                className={`text-xs tracking-widest uppercase transition-opacity hover:opacity-70 ${focusRing}`}
                style={{ color: palette.gold, fontFamily: sans }}
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Mobile accordion ───────────────────────── */
export function MobileProductsAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState<string | null>(null);

  return (
    <div className="border-b" style={{ borderColor: palette.line }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-products"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left py-5 text-2xl font-light"
        style={{ fontFamily: serif, color: palette.white }}
      >
        Products
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div id="mobile-products" className="pb-4">
          {categories.map((cat) => {
            const isOpen = openCat === cat.slug;
            return (
              <div key={cat.slug} className="border-t" style={{ borderColor: palette.line }}>
                <div className="flex items-stretch">
                  <Link
                    href={categoryHref(cat.slug)}
                    onClick={onNavigate}
                    className="flex-1 flex items-center min-h-12 py-3 pl-2 text-lg"
                    style={{ fontFamily: serif, color: palette.gold }}
                  >
                    {cat.name}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${cat.name}`}
                    onClick={() => setOpenCat(isOpen ? null : cat.slug)}
                    className="w-12 flex items-center justify-center"
                    style={{ color: palette.gold }}
                  >
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <ul className="pb-3 pl-6">
                    {getProductsByCategory(cat.slug).map((p) => (
                      <li key={p.id}>
                        <Link
                          href={productHref(p)}
                          onClick={onNavigate}
                          className="flex items-center min-h-12 text-sm font-light"
                          style={{ color: palette.light, fontFamily: sans }}
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          <Link
            href="/products"
            onClick={onNavigate}
            className="flex items-center min-h-12 pl-2 border-t text-xs tracking-widest uppercase"
            style={{ borderColor: palette.line, color: palette.gold, fontFamily: sans }}
          >
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
}