import { ON_REQUEST, type Product } from "@/app/data/products";
import { c, sans, serif } from "./theme";

const list = (items: string[]) => (items.length ? items.join(", ") : ON_REQUEST);

/** Section 2 — Product information. Unconfirmed fields always read "Available on Request". */
export default function ProductSpecifications({ product }: { product: Product }) {
  const rows: [string, string][] = [
    ["Product Name", product.name],
    ["Category", product.category],
    ["Origin", product.origin || ON_REQUEST],
    ["Available Grades", list(product.grades)],
    ["Packaging Options", list(product.packaging)],
    ["Minimum Order Quantity", product.minimumOrderQuantity || ON_REQUEST],
    ["Quality Specifications", list(product.specifications)],
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y" style={{ borderColor: c.line }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="mb-10" style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: c.ink }}>
          Product Information
        </h2>
        <dl className="border-t" style={{ borderColor: c.line }}>
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-5 border-b sm:grid-cols-[16rem_1fr] sm:gap-8" style={{ borderColor: c.line }}>
              <dt className="text-xs tracking-widest uppercase pt-0.5" style={{ color: c.muted, fontFamily: sans, letterSpacing: "0.2em" }}>
                {label}
              </dt>
              <dd className="text-base font-light" style={{ color: value === ON_REQUEST ? c.faint : c.ink, fontFamily: sans }}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
