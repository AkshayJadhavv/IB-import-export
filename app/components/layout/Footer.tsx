"use client";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Global Presence", href: "#global" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const categories = ["Agricultural Products","Textiles","Machinery","Chemicals","Food Products","General Trading"];

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                <span className="text-xs font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>IB</span>
              </div>
              <span className="uppercase font-light text-sm text-white" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em" }}>Import Export</span>
            </div>
            <p className="text-xs leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)" }}>
              Connecting global markets with trust, precision, and excellence from Phaltan, Maharashtra, India.
            </p>
            <div className="flex gap-5">
              {["LinkedIn","WhatsApp","Instagram","X"].map(s => (
                <a key={s} href={s === "WhatsApp" ? "https://wa.me/917499280907" : "#"}
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em" }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)} className="text-sm font-light text-left transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em" }}>Trade Categories</h4>
            <ul className="space-y-3">
              {categories.map(c => (
                <li key={c}>
                  <button onClick={() => go("#products")} className="text-sm font-light text-left transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}>
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em" }}>Contact Info</h4>
            <div className="space-y-4">
              <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}>
                Main Market, Phaltan<br />Satara, Maharashtra 415523<br />India
              </p>
              <a href="tel:+919876543210" className="block text-sm font-light transition-opacity hover:opacity-70"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                +91 98765 43210
              </a>
              <a href="mailto:info@ibimportexport.com" className="block text-sm font-light transition-opacity hover:opacity-70"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                ibimex2228@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()} IB Import Export. All rights reserved. Phaltan, India.
          </p>
          <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.1)" }}>
            International Trade · Import · Export
          </p>
        </div>
      </div>
    </footer>
  );
}
