"use client";
import FadeUp from "../ui/FadeUp";
import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

const imports = ["Raw Material Procurement","Industrial Machinery & Equipment","Electronic Components","Specialty Chemicals & Compounds","Consumer Goods & Textiles","Agricultural Inputs & Seeds"];
const exports = ["Premium Agricultural Produce","Handloom & Power Loom Textiles","Processed Food Products","Industrial Components","Pharmaceutical Raw Materials","Organic & Natural Products"];

export default function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#1A1A1A" }}>Import & Export <em>Services</em></h2>
          </div>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Import */}
          <FadeUp delay={0.1}>
            <div className="p-10 h-full" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  <ArrowDownToLine size={18} color="rgba(255,255,255,0.65)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#fff" }}>Import Services</h3>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}>Global Sourcing to India</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-8 font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)" }}>
                We source high-quality goods from trusted international suppliers and deliver them seamlessly to Indian businesses, managing documentation, compliance, and logistics end-to-end.
              </p>
              <ul className="space-y-3">
                {imports.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.65)" }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          {/* Export */}
          <FadeUp delay={0.2}>
            <div className="p-10 h-full" style={{ backgroundColor: "#fff", border: "1px solid #E2DDD6" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: "1px solid #E2DDD6" }}>
                  <ArrowUpFromLine size={18} color="#6B6B6B" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#1A1A1A" }}>Export Services</h3>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>India to the World</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-8 font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6B6B" }}>
                We proudly represent Indian excellence globally. Our export services connect Indian manufacturers and producers with international buyers seeking quality, reliability, and competitive value.
              </p>
              <ul className="space-y-3">
                {exports.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6B6B" }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#9A9A9A" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
