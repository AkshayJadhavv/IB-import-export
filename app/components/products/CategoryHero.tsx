import type { Category } from "@/app/data/products";
import Breadcrumbs from "./Breadcrumbs";
import { sans, serif } from "./theme";

export default function CategoryHero({ category, productCount }: { category: Category; productCount: number }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24" style={{ backgroundColor: "#1A1A1A" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url(${category.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.92) 100%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Breadcrumbs
          tone="dark"
          items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]}
        />
        <span
          className="block mt-12 mb-4 text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: sans, letterSpacing: "0.35em" }}
        >
          {productCount} {productCount === 1 ? "Product" : "Products"}
        </span>
        <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(2.4rem, 5vw, 4.2rem)", color: "#fff" }}>
          {category.name}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed font-light"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: sans }}
        >
          {category.intro}
        </p>
      </div>
    </section>
  );
}
