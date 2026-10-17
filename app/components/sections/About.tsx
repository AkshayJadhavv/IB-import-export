"use client";
import FadeUp from "../ui/FadeUp";

const cards = [
  { label: "Established", value: "Phaltan, India", dark: false },
  { label: "Trade Scope", value: "Worldwide", dark: true },
  { label: "Product Categories", value: "Spices, Agriculture, Fruits & Fruit Pulp", dark: false, wide: true },
  { label: "Client Focus", value: "B2B Global", dark: true },
];

export default function About() {
  return (
    <section id="about" className="py-32" style={{ backgroundColor: "var(--bg-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <FadeUp>
              <span
                className="text-xs tracking-widest uppercase block mb-4"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.35em",
                }}
              >
                Who We Are
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-8 leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  fontWeight: 300,
                  color: "var(--heading)",
                }}
              >
                A Legacy of Trust in
                <br />
                <em style={{ color: "var(--primary)" }}>International Commerce</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="mb-6 leading-relaxed font-light text-base"
                style={{ color: "var(--body)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Founded in Phaltan, India, IB Import Export has established itself as a
                dependable force in global trade. We operate at the intersection of Indian
                enterprise and international markets, creating value for buyers and suppliers
                across six continents.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                className="mb-10 leading-relaxed font-light text-base"
                style={{ color: "var(--body)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Our approach is rooted in transparency, meticulous quality assurance, and a
                deep understanding of diverse market requirements. From spices and
                agricultural commodities to fresh fruits and fruit pulp — IB Import Export
                delivers with reliability.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex items-center gap-5">
                <div className="h-px w-14" style={{ backgroundColor: "var(--accent)" }} />
                <blockquote
                  className="italic text-base"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--heading)",
                    fontSize: "1.1rem",
                  }}
                >
                  &ldquo;Trade is our language. Trust is our currency.&rdquo;
                </blockquote>
              </div>
            </FadeUp>
          </div>

          {/* Right — stat cards */}
          <FadeUp delay={0.2}>
            <div
              className="grid grid-cols-2 gap-3"
              style={{ backgroundColor: "transparent" }}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  className={`p-8 flex flex-col justify-between rounded-sm ${c.wide ? "col-span-2 sm:col-span-1" : ""}`}
                  style={{
                    backgroundColor: c.dark ? "var(--dark-bg)" : "var(--bg-white)",
                    border: c.dark ? "1px solid var(--dark-bg)" : "1px solid var(--border)",
                    boxShadow: c.dark
                      ? "0 8px 24px -12px rgba(16,42,35,0.35)"
                      : "0 8px 24px -12px rgba(0,0,0,0.08)",
                    minHeight: "150px",
                  }}
                >
                  <span
                    className="text-xs tracking-widest uppercase block mb-4"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: c.dark ? "rgba(255,255,255,0.6)" : "var(--accent)",
                      letterSpacing: "0.3em",
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      color: c.dark ? "var(--bg-white)" : "var(--heading)",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}