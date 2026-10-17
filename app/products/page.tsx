import type { Metadata } from "next";
import { products, productHref } from "@/app/data/products";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import Breadcrumbs from "@/app/components/products/Breadcrumbs";
import ProductGrid from "@/app/components/products/ProductGrid";
import ContactCTA from "@/app/components/products/ContactCTA";
import JsonLd from "@/app/components/products/JsonLd";
import { c, sans, serif } from "@/app/components/products/theme";

const description =
  "Explore our range of agricultural products, fresh fruits, fruit pulps, and premium Indian spices.";

export const metadata: Metadata = {
  title: { absolute: `Our Export Products | ${SITE_NAME}` },
  description,
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: { title: `Our Export Products | ${SITE_NAME}`, description, url: `${SITE_URL}/products`, type: "website" },
};

export default function ProductsPage() {
  return (
    <main>
      <section className="pt-36 pb-14" style={{ backgroundColor: c.cream }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <span
            className="block mt-12 mb-4 text-xs tracking-widest uppercase"
            style={{ color: c.muted, fontFamily: sans, letterSpacing: "0.35em" }}
          >
            Our Portfolio
          </span>
          <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(2.4rem, 5vw, 4rem)", color: c.ink }}>
            Our Export Products
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed font-light" style={{ color: c.muted, fontFamily: sans }}>
            {description}
          </p>
        </div>
      </section>

      <section className="pb-28" style={{ backgroundColor: c.cream }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ProductGrid products={products} showFilters />
        </div>
      </section>

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Our Export Products",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            url: `${SITE_URL}${productHref(p)}`,
          })),
        }}
      />
    </main>
  );
}
