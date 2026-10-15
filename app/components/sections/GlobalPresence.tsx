"use client";
import { useState } from "react";
import FadeUp from "../ui/FadeUp";

const regions = [
  { region: "South Asia", countries: ["India 🇮🇳", "Bangladesh 🇧🇩", "Sri Lanka 🇱🇰", "Nepal 🇳🇵"] },
  { region: "Southeast Asia", countries: ["Vietnam 🇻🇳", "Thailand 🇹🇭", "Indonesia 🇮🇩", "Malaysia 🇲🇾"] },
  { region: "Middle East", countries: ["UAE 🇦🇪", "Saudi Arabia 🇸🇦", "Qatar 🇶🇦", "Kuwait 🇰🇼"] },
  { region: "Europe", countries: ["Germany 🇩🇪", "Netherlands 🇳🇱", "United Kingdom 🇬🇧", "France 🇫🇷"] },
  { region: "Africa", countries: ["Kenya 🇰🇪", "Nigeria 🇳🇬", "South Africa 🇿🇦", "Egypt 🇪🇬"] },
  { region: "Americas", countries: ["USA 🇺🇸", "Canada 🇨🇦", "Brazil 🇧🇷", "Mexico 🇲🇽"] },
];

function RegionCard({ r }: { r: typeof regions[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="p-8 transition-all duration-300"
      style={{ border: `1px solid ${hov ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)"}` }}
    >
      <h3 className="text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em" }}>{r.region}</h3>
      <div className="space-y-3">
        {r.countries.map((c, j) => (
          <div key={j} className="text-sm font-light transition-all duration-200" style={{ fontFamily: "'DM Sans', sans-serif", color: hov ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)" }}>{c}</div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section id="global" className="py-32" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Our Reach</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#fff" }}>
              Global <em>Presence</em>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-sm font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}>
              Operating across six continents, IB Import Export maintains active trade relationships with partners in over 24 countries worldwide.
            </p>
          </div>
        </FadeUp>

        {/* Decorative line */}
        <FadeUp delay={0.1}>
          <div className="w-full h-px mb-16" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <RegionCard r={r} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.2)" }}>
              + continuously expanding into new markets
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
