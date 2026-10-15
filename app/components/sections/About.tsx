"use client";
import FadeUp from "../ui/FadeUp";

const cards = [
  { label: "Established", value: "Phaltan, India", dark: false },
  { label: "Trade Scope", value: "Worldwide", dark: true },
  { label: "Product Categories", value: "6+ Sectors", dark: false },
  { label: "Client Focus", value: "B2B Global", dark: true },
];

export default function About() {
  return (
    <section id="about" className="py-32" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeUp>
              <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "#888888", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Who We Are</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#1C1C1C" }}>
                A Legacy of Trust in<br /><em>International Commerce</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mb-6 leading-relaxed font-light text-base" style={{ color: "#666666", fontFamily: "'DM Sans', sans-serif" }}>
                Founded in Phaltan, India, IB Import Export has established itself as a dependable force in global trade. We operate at the intersection of Indian enterprise and international markets, creating value for buyers and suppliers across six continents.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mb-10 leading-relaxed font-light text-base" style={{ color: "#666666", fontFamily: "'DM Sans', sans-serif" }}>
                Our approach is rooted in transparency, meticulous quality assurance, and a deep understanding of diverse market requirements. Whether you are sourcing agricultural commodities, textiles, or specialty chemicals — IB Import Export delivers with reliability.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="flex items-center gap-5">
                <div className="h-px w-14" style={{ backgroundColor: "#1C1C1C" }} />
                <blockquote className="italic text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1C1C1C", fontSize: "1.1rem" }}>
                  "Trade is our language. Trust is our currency."
                </blockquote>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "#CCCCCC" }}>
              {cards.map((c, i) => (
                <div key={i} className="p-8 flex flex-col justify-between" style={{ backgroundColor: c.dark ? "#4A4A4A" : "#FFFFFF", minHeight: "150px" }}>
                  <span className="text-xs tracking-widest uppercase block mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: c.dark ? "rgba(255,255,255,0.45)" : "#AAAAAA", letterSpacing: "0.3em" }}>{c.label}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: c.dark ? "#FFFFFF" : "#1C1C1C" }}>{c.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}