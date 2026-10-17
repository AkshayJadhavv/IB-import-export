"use client";
import FadeUp from "../ui/FadeUp";
import { ArrowUpFromLine } from "lucide-react";

const exports = [
  "Premium Spices",
  "Agricultural Products",
  "Fresh Fruits",
  "Fruit Pulp",
];

export default function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-20">
            <span
              className="text-xs tracking-widest uppercase block mb-4"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.35em",
              }}
            >
              What We Do
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--heading)",
              }}
            >
              Export <em style={{ color: "var(--primary)" }}>Services</em>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="p-10 lg:p-14 rounded-sm"
            style={{
              backgroundColor: "var(--primary)",
              boxShadow: "0 20px 40px -20px rgba(27,67,50,0.4)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left — heading + description */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm"
                    style={{ border: "1px solid rgba(212,168,67,0.5)" }}
                  >
                    <ArrowUpFromLine size={20} color="var(--accent)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.75rem",
                        fontWeight: 400,
                        color: "var(--bg-white)",
                      }}
                    >
                      Export Services
                    </h3>
                    <p
                      className="text-xs tracking-widest uppercase mt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent)" }}
                    >
                      India to the World
                    </p>
                  </div>
                </div>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)" }}
                >
                  We proudly represent Indian excellence globally. Our export services connect
                  Indian producers of spices, agricultural commodities, fresh fruits, and fruit
                  pulp with international buyers seeking quality, reliability, and competitive value.
                </p>
              </div>

              {/* Right — product categories list */}
              <ul className="space-y-4">
                {exports.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-base font-light pb-3"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "var(--bg-white)",
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}