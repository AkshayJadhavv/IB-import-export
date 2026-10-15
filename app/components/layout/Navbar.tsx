"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Import", href: "#services" },
  { label: "Export", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Global Presence", href: "#global" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,250,248,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E2DDD6" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <button onClick={() => go("#home")} className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center border transition-colors"
              style={{ borderColor: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.6)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest"
                style={{ color: scrolled ? "#1A1A1A" : "#fff", fontFamily: "'DM Sans', sans-serif" }}
              >IB</span>
            </div>
            <span
              className="text-base tracking-widest uppercase font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: scrolled ? "#1A1A1A" : "#fff",
                letterSpacing: "0.2em",
              }}
            >Import Export</span>
          </button>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled ? "#2C2C2C" : "rgba(255,255,255,0.85)",
                }}
              >{l.label}</button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="ml-2 px-5 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 hover:bg-charcoal hover:text-white"
              style={{
                borderColor: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.6)",
                color: scrolled ? "#1A1A1A" : "#fff",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >Contact Us</button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            style={{ color: scrolled ? "#1A1A1A" : "#fff" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ backgroundColor: "#FAFAF8" }}
          >
            <div className="flex flex-col p-8 gap-0">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left py-5 border-b text-2xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", borderColor: "#E2DDD6", color: "#1A1A1A" }}
                >{l.label}</motion.button>
              ))}
              <button
                onClick={() => go("#contact")}
                className="mt-8 py-4 text-sm tracking-widest uppercase text-center"
                style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8", fontFamily: "'DM Sans', sans-serif" }}
              >Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
