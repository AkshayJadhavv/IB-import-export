import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory } from "@/app/data/products";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import CategoryHero from "@/app/components/products/CategoryHero";
import ProductGrid from "@/app/components/products/ProductGrid";
import ContactCTA from "@/app/components/products/ContactCTA";
import JsonLd from "@/app/components/products/JsonLd";
import { c } from "@/app/components/products/theme";

type Props = { params: Promise<{ category: string }> };

//export const dynamicParams = false; // unknown categories -> 404

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  const url = `${SITE_URL}/products/${cat.slug}`;
  const title = `${cat.seoTitle} | ${SITE_NAME}`;
  return {
    title: { absolute: title },
    description: cat.seoDescription,
    alternates: { canonical: url },
    openGraph: { title, description: cat.seoDescription, url, type: "website", images: [{ url: `${SITE_URL}${cat.image}` }] },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const items = getProductsByCategory(cat.slug);

  return (
    <main>
      <CategoryHero category={cat} productCount={items.length} />

      <section className="py-20 lg:py-28" style={{ backgroundColor: c.cream }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ProductGrid products={items} />
        </div>
      </section>

      <ContactCTA
        title={`Enquire about ${cat.name}`}
        text={`Tell us which ${cat.name.toLowerCase()} you need, your quantity and your destination. Our team will respond to your enquiry.`}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
            { "@type": "ListItem", position: 3, name: cat.name, item: `${SITE_URL}/products/${cat.slug}` },
          ],
        }}
      />
    </main>
  );
}
