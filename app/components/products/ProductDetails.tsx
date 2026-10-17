import Link from "next/link";
import { categoryHref, type Product } from "@/app/data/products";
import Breadcrumbs from "./Breadcrumbs";
import ProductImage from "./ProductImage";
import { c, sans, serif } from "./theme";

/** Section 1 — Product overview */
export default function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="pt-32 pb-16 lg:pb-24" style={{ backgroundColor: c.cream }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.category, href: categoryHref(product.categorySlug) },
            { label: product.name },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border bg-white" style={{ borderColor: c.line }}>
            <ProductImage
              src={product.image}
              alt={`${product.name} – ${product.category} offered by IB Import Export`}
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          </div>

          <div>
            <Link
              href={categoryHref(product.categorySlug)}
              className="inline-block mb-5 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: c.muted, fontFamily: sans, letterSpacing: "0.35em" }}
            >
              {product.category}
            </Link>
            <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", color: c.ink, lineHeight: 1.1 }}>
              {product.name}
            </h1>
            <p className="mt-6 mb-10 max-w-xl text-base leading-relaxed font-light" style={{ color: c.muted, fontFamily: sans }}>
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?product=${product.slug}`}
                className="px-9 py-4 text-xs tracking-widest uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
                style={{ backgroundColor: c.ink, color: c.paper, fontFamily: sans }}
              >
                Request a Quote
              </Link>
              <Link
                href={categoryHref(product.categorySlug)}
                className="px-9 py-4 text-xs tracking-widest uppercase border transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white"
                style={{ borderColor: c.ink, color: c.ink, fontFamily: sans }}
              >
                All {product.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section 3 — Product description */
export function ProductDescription({ product }: { product: Product }) {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: c.cream }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="mb-8" style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: c.ink }}>
          About {product.name}
        </h2>
        <div className="space-y-5">
          {product.description.map((para, i) => (
            <p key={i} className="text-base leading-loose font-light" style={{ color: c.text, fontFamily: sans }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
