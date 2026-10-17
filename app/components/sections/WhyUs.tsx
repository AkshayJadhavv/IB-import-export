"use client";
import { useState } from "react";
import FadeUp from "../ui/FadeUp";
import { Globe, ShieldCheck, TrendingUp, Headphones, Clock } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Global Network", desc: "Established relationships with verified buyers and suppliers across Asia, Europe, the Americas, Africa, and Oceania." },
  { icon: ShieldCheck, title: "Quality Focused", desc: "Rigorous quality checks and compliance with international trade standards on every shipment we handle." },
  { icon: TrendingUp, title: "Competitive Trade", desc: "Leveraging market intelligence and our supplier network to offer competitive pricing without compromising quality." },
  { icon: Headphones, title: "Dedicated Support", desc: "Responsive account management and multilingual support for smooth communication across time zones." },
  { icon: Clock, title: "Timely Delivery", desc: "We uphold delivery schedules with precision, ensuring your supply chain runs uninterrupted at all times." },
];

function ReasonCard({ r }: { r: typeof reasons[0] }) {
  const [hov, setHov] = useState(false);
  const Icon = r.icon;
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} className="group">
      <div className="mb-5 flex items-center gap-4">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300"
          style={{
            border: `1px solid ${hov ? "var(--primary)" : "var(--border)"}`,
            backgroundColor: hov ? "var(--primary)" : "transparent",
          }}
        >
          <Icon size={16} color={hov ? "var(--accent)" : "var(--primary)"} />
        </div>
        <div
          className="h-px flex-1 transition-colors duration-300"
          style={{ backgroundColor: hov ? "var(--accent)" : "var(--border)" }}
        />
      </div>
      <h3
        className="mb-3 transition-colors duration-300"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.15rem",
          fontWeight: 500,
          color: hov ? "var(--primary)" : "var(--heading)",
        }}
      >
        {r.title}
      </h3>
      <p
        className="text-sm leading-relaxed font-light"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--body)" }}
      >
        {r.desc}
      </p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="mb-20">
            <span
              className="text-xs tracking-widest uppercase block mb-4"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.35em",
              }}
            >
              Our Differentiators
            </span>
            <div className="flex items-end gap-8">
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  fontWeight: 300,
                  color: "var(--heading)",
                  maxWidth: "500px",
                }}
              >
                Why Businesses <em style={{ color: "var(--primary)" }}>Choose</em> IB Import Export
              </h2>
              <div
                className="hidden lg:block h-px flex-1 mb-5"
                style={{ backgroundColor: "var(--border)" }}
              />
            </div>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((r, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <ReasonCard r={r} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}