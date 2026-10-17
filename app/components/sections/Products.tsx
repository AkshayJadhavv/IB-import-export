"use client";
import Link from "next/link";
import FadeUp from "../ui/FadeUp";
import ProductImage from "@/app/components/products/ProductImage";
import { categories, categoryHref, getProductsByCategory, productHref } from "@/app/data/products";

export default function Products() {
  return (
    <section id="products" className="py-32" style={{ backgroundColor: "var(--bg-cream)" }}>
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
              Our Portfolio
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--heading)",
              }}
            >
              Our Export <em style={{ color: "var(--primary)" }}>Products</em>
            </h2>
            <p
              className="mt-6 max-w-xl mx-auto text-sm leading-relaxed font-light"
              style={{ color: "var(--body)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Fresh fruits, fruit pulps, agricultural staples and Indian spices, handled from Phaltan, Maharashtra.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const items = getProductsByCategory(cat.slug);
              return (
                <article
                  key={cat.slug}
                  className="group flex flex-col rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 8px 24px -12px rgba(0,0,0,0.08)",
                  }}
                >
                  <Link
                    href={categoryHref(cat.slug)}
                    aria-label={`Explore ${cat.name}`}
                    className="relative block aspect-[4/3] overflow-hidden"
                  >
                    <ProductImage
                      src={cat.image}
                      alt={`${cat.name} offered by IB Import Export`}
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gold accent bar that appears on hover */}
                    <span
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  </Link>

                  <div className="flex flex-col flex-1 p-8">
                    <h3
                      className="mb-3 transition-colors duration-300 group-hover:text-[var(--primary)]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                        fontSize: "1.5rem",
                        color: "var(--heading)",
                      }}
                    >
                      <Link href={categoryHref(cat.slug)}>{cat.name}</Link>
                    </h3>
                    <p
                      className="text-sm leading-relaxed font-light mb-6"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--body)" }}
                    >
                      {cat.shortDescription}
                    </p>

                    <ul className="mb-8 flex flex-wrap gap-2">
                      {items.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={productHref(p)}
                            className="block text-xs px-3 py-1 tracking-widest uppercase transition-colors duration-300"
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              border: "1px solid var(--border)",
                              color: "var(--body)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = "var(--primary)";
                              e.currentTarget.style.color = "var(--primary)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "var(--border)";
                              e.currentTarget.style.color = "var(--body)";
                            }}
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={categoryHref(cat.slug)}
                      className="mt-auto inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-70"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--primary)" }}
                    >
                      Explore {cat.name} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </FadeUp>

        <div className="text-center mt-14">
          <Link
            href="/products"
            className="inline-block px-9 py-4 text-xs tracking-widest uppercase rounded-sm transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bg-white)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}