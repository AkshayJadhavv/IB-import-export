"use client";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "/products" },
  // { label: "Global Presence", href: "#global" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  { label: "Spices", href: "/products/spices" },
  { label: "Agriculture", href: "/products/agriculture" },
  { label: "Fruits", href: "/products/fruits" },
  { label: "Fruit Pulp", href: "/products/fruit-pulp" },
];

export default function Footer() {
  const go = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "var(--primary)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-sm"
                style={{ border: "1px solid var(--accent)" }}
              >
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent)", letterSpacing: "0.1em" }}
                >
                  IB
                </span>
              </div>
              <span
                className="uppercase font-light text-sm"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "0.2em",
                  color: "var(--bg-white)",
                }}
              >
                Import Export
              </span>
            </div>
            <p
              className="text-xs leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)" }}
            >
              Connecting Indian agriculture to global markets with trust, precision, and excellence from Phaltan, Maharashtra.
            </p>
            <div className="flex gap-5">
              {["LinkedIn", "WhatsApp", "Instagram", "X"].map((s) => (
                <a
                  key={s}
                  href={s === "WhatsApp" ? "https://wa.me/917499280907" : "#"}
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-100"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                  }}
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--accent)",
                letterSpacing: "0.3em",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("#") ? (
                    <button
                      onClick={() => go(l.href)}
                      className="text-sm font-light text-left transition-opacity hover:opacity-100"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm font-light text-left transition-opacity hover:opacity-100"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Trade Categories — matches real product catalog */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--accent)",
                letterSpacing: "0.3em",
              }}
            >
              Our Products
            </h4>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm font-light text-left transition-opacity hover:opacity-100"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--accent)",
                letterSpacing: "0.3em",
              }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <p
                className="text-sm font-light leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)" }}
              >
                Anand nagar,Phaltan
                <br />
                Satara, Maharashtra 415523
                <br />
                India
              </p>
              <a
                href="tel:+917499280907"
                className="block text-sm font-light transition-opacity hover:opacity-100"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                }}
              >
                +91 7499280907
              </a>
              <a
                href="mailto:ibimex2228@gmail.com"
                className="block text-sm font-light transition-opacity hover:opacity-100 break-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                }}
              >
                ibimex2228@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
          >
            © {new Date().getFullYear()} IB Import Export. All rights reserved. Phaltan, India.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)" }}
          >
            International Trade · Import · Export
          </p>
        </div>
      </div>
    </footer>
  );
}