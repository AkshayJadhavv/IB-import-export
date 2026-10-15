"use client";
import { useState } from "react";
import FadeUp from "../ui/FadeUp";

const products = [
  { icon: "🌾", title: "Agricultural Products", desc: "Premium grains, spices, pulses, oilseeds, and cash crops sourced directly from Indian farms and global producers.", tags: ["Grains", "Spices", "Pulses", "Oilseeds"] },
  { icon: "🧵", title: "Textiles", desc: "Quality fabrics, garments, home textiles, and industrial cloth from handloom traditions to modern power loom production.", tags: ["Fabrics", "Garments", "Home Textiles"] },
  { icon: "⚙️", title: "Machinery", desc: "Industrial equipment, precision tools, agricultural machinery, and manufacturing plant components for global industries.", tags: ["Industrial", "Agricultural", "Equipment"] },
  { icon: "🧪", title: "Chemicals", desc: "Specialty chemicals, agro-chemicals, industrial solvents, dyes, and pharmaceutical raw materials meeting international standards.", tags: ["Specialty", "Agro-chem", "Industrial"] },
  { icon: "🍱", title: "Food Products", desc: "Processed foods, packaged goods, organic produce, condiments, and ready-to-eat products for retail and wholesale markets.", tags: ["Processed", "Organic", "Packaged"] },
  { icon: "🔄", title: "Multi-product Trading", desc: "Comprehensive trading solutions across categories for buyers seeking consolidated international sourcing partnerships.", tags: ["General Trade", "Multi-category"] },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-8 cursor-default transition-all duration-350"
      style={{ backgroundColor: hovered ? "#1A1A1A" : "#fff" }}
    >
      <div className="text-3xl mb-6" style={{ filter: "grayscale(100%)" }}>{product.icon}</div>
      <h3 className="text-lg mb-3 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: hovered ? "#fff" : "#1A1A1A", fontSize: "1.2rem" }}>{product.title}</h3>
      <p className="text-sm leading-relaxed mb-6 font-light transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif", color: hovered ? "rgba(255,255,255,0.5)" : "#6B6B6B" }}>{product.desc}</p>
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag, j) => (
          <span key={j} className="text-xs px-3 py-1 tracking-widest uppercase transition-colors duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif", border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "#E2DDD6"}`, color: hovered ? "rgba(255,255,255,0.4)" : "#9A9A9A" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-32" style={{ backgroundColor: "#F8F6F1" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Our Portfolio</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#1A1A1A" }}>Products & <em>Industries</em></h2>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#E2DDD6" }}>
          {products.map((p, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <ProductCard product={p} index={i} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
