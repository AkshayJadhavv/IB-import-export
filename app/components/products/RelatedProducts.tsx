import { getRelatedProducts, type Product } from "@/app/data/products";
import ProductCard from "./ProductCard";
import { c, serif } from "./theme";

/** Section 5 — up to three other products from the same category */
export default function RelatedProducts({ product }: { product: Product }) {
  const related = getRelatedProducts(product, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: c.cream }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="mb-12" style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: c.ink }}>
          Related Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
