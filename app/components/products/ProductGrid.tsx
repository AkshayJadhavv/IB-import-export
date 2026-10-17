"use client";
import { useState } from "react";
import { categories, type Product } from "@/app/data/products";
import ProductCard from "./ProductCard";
import { c, sans } from "./theme";

const filters = [{ label: "All Products", value: "all" }, ...categories.map((cat) => ({ label: cat.name, value: cat.slug }))];

export default function ProductGrid({ products, showFilters = false }: { products: Product[]; showFilters?: boolean }) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? products : products.filter((p) => p.categorySlug === active);

  return (
    <div>
      {showFilters && (
        <div role="group" aria-label="Filter products by category" className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => {
            const on = active === f.value;
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.value)}
                className="px-5 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
                style={{
                  fontFamily: sans,
                  borderColor: c.ink,
                  backgroundColor: on ? c.ink : "transparent",
                  color: on ? "#fff" : c.ink,
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      )}

      <p className="sr-only" aria-live="polite">{visible.length} products shown</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProductCard key={p.id} product={p} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
