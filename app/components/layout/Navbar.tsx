"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ProductsMegaMenu, MobileProductsAccordion } from "@/app/components/products/ProductsMegaMenu";

const navLinks: { label: string; href: string; mega?: boolean }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Export", href: "#services" },
  { label: "Products", href: "/products", mega: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const solid = scrolled || !isHome || menuOpen || mobileOpen;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const go = (href: string) => {
    setMobileOpen(false);
    if (isHome && href.startsWith("#")) {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      router.push(`/${href.replace(/^#/, "#")}`);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: solid ? "rgba(248,247,242,0.97)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: solid ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => go("#home")}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
            aria-label="IB Import Export — Home"
          >
            <div
              className="w-8 h-8 flex items-center justify-center border transition-colors rounded-sm"
              style={{ borderColor: solid ? "var(--primary)" : "rgba(255,255,255,0.6)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest"
                style={{
                  color: solid ? "var(--primary)" : "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                IB
              </span>
            </div>
            <span
              className="hidden xs:inline text-sm sm:text-base tracking-widest uppercase font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: solid ? "var(--heading)" : "#fff",
                letterSpacing: "0.2em",
              }}
            >
              Import Export
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) =>
              l.mega ? (
                <ProductsMegaMenu key={l.label} solid={solid} onOpenChange={setMenuOpen} />
              ) : (
                <button
                  key={l.label}
                  onClick={() => go(l.href)}
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: solid ? "var(--heading)" : "rgba(255,255,255,0.85)",
                  }}
                >
                  {l.label}
                </button>
              )
            )}
            <button
              onClick={() => go("#contact")}
              className="ml-2 px-5 py-2.5 text-xs tracking-widest uppercase rounded-sm transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--bg-white)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ color: solid ? "var(--heading)" : "#fff" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-16 sm:pt-20 overflow-y-auto lg:hidden"
            style={{ backgroundColor: "var(--bg-cream)" }}
          >
            <div className="flex flex-col p-6 sm:p-8 gap-0">
              {navLinks.map((l, i) =>
                l.mega ? (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <MobileProductsAccordion onNavigate={() => setMobileOpen(false)} />
                  </motion.div>
                ) : (
                  <motion.button
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => go(l.href)}
                    className="text-left py-4 sm:py-5 border-b text-xl sm:text-2xl font-light"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      borderColor: "var(--border)",
                      color: "var(--heading)",
                    }}
                  >
                    {l.label}
                  </motion.button>
                )
              )}
              <button
                onClick={() => go("#contact")}
                className="mt-6 sm:mt-8 py-4 text-sm tracking-widest uppercase text-center rounded-sm transition-all duration-300 hover:brightness-110"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-white)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}