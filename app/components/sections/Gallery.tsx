"use client";
import { useState } from "react";
import FadeUp from "../ui/FadeUp";

const items = [
  { label: "Agricultural Exports", category: "Products", bg: "#1e1e1e" },
  { label: "Textile Manufacturing", category: "Production", bg: "#252525" },
  { label: "Global Logistics", category: "Operations", bg: "#141414" },
  { label: "Port Clearance", category: "Logistics", bg: "#2a2a2a" },
  { label: "Corporate Office", category: "Phaltan HQ", bg: "#1a1a1a" },
  { label: "Trade Exhibition", category: "Outreach", bg: "#222222" },
];

function GalleryCard({ item }: { item: typeof items[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: "4/3", backgroundColor: item.bg }}
    >
      {/* Abstract SVG art */}
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={item.bg} />
        <rect x="30" y="30" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="50" y="50" width="140" height="90" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="320" cy="70" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="320" cy="70" r="25" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <rect x="50" y="200" width="180" height="1" fill="rgba(255,255,255,0.1)" />
        <text x="50" y="260" fill="rgba(255,255,255,0.1)" fontSize="26" fontFamily="Georgia, serif" fontStyle="italic">{item.label}</text>
      </svg>

      {/* Hover reveal */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
        style={{
          opacity: hov ? 1 : 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
        }}
      >
        <span className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}>{item.category}</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#fff", fontWeight: 400 }}>{item.label}</span>
      </div>

      {/* Scale on hover */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{ transform: hov ? "scale(1.04)" : "scale(1)" }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-32" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Visual Profile</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#1A1A1A" }}>Gallery</h2>
            </div>
            <p className="hidden lg:block text-sm font-light max-w-xs text-right" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>
              Our operations, products, and presence around the world.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <GalleryCard item={item} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-8 text-center text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>
            Real product & facility photos to be added
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
