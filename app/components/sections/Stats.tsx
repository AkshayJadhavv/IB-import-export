"use client";
import { useEffect, useRef, useState } from "react";
import FadeUp from "../ui/FadeUp";

function useCounter(to: number, duration = 2000) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return { val, ref };
}

function StatBlock({ value, suffix, label, sub, alt }: { value: number; suffix: string; label: string; sub: string; alt: boolean }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="py-12 px-8 text-center" style={{ backgroundColor: alt ? "#F8F6F1" : "#fff" }}>
      <div className="mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.02em" }}>
        {val}{suffix}
      </div>
      <div className="text-sm font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A" }}>{label}</div>
      <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>{sub}</div>
    </div>
  );
}

const stats = [
  { value: 120, suffix: "+", label: "Global Partnerships", sub: "Verified buyers & suppliers" },
  { value: 6, suffix: "", label: "Trade Categories", sub: "Diversified product portfolio" },
  { value: 24, suffix: "+", label: "Countries Served", sub: "Active international presence" },
  { value: 15, suffix: "+", label: "Years Experience", sub: "In international commerce" },
];

export default function Stats() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F8F6F1" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#E2DDD6" }}>
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <StatBlock {...s} alt={i % 2 !== 0} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
