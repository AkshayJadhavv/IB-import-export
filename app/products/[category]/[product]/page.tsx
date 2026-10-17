import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products, productHref } from "@/app/data/products";
import { SITE_LOCATION, SITE_NAME, SITE_URL } from "@/app/lib/site";
import ProductDetails, { ProductDescription } from "@/app/components/products/ProductDetails";
import ProductSpecifications from "@/app/components/products/ProductSpecifications";
import ProductEnquiry from "@/app/components/products/ProductEnquiry";
import RelatedProducts from "@/app/components/products/RelatedProducts";
import JsonLd from "@/app/components/products/JsonLd";

type Props = { params: Promise<{ category: string; product: string }> };

//export const dynamicParams = false; // unknown products, or a product under the wrong category -> 404

export function generateStaticParams() {
  return products.map((p) => ({ category: p.categorySlug, product: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product: slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};

  const url = `${SITE_URL}${productHref(product)}`;
  const title = `${product.name} Exporter in India | ${SITE_NAME}`;
  const description = `Explore ${product.name} sourcing and export enquiries with ${SITE_NAME}, based in ${SITE_LOCATION}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [{ url: `${SITE_URL}${product.image}`, alt: product.name }] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, product: slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  const url = `${SITE_URL}${productHref(product)}`;

  return (
    <main>
      <ProductDetails product={product} />
      <ProductSpecifications product={product} />
      <ProductDescription product={product} />
      <ProductEnquiry product={product} />
      <RelatedProducts product={product} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.shortDescription,
          image: `${SITE_URL}${product.image}`,
          category: product.category,
          url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
            { "@type": "ListItem", position: 3, name: product.category, item: `${SITE_URL}/products/${product.categorySlug}` },
            { "@type": "ListItem", position: 4, name: product.name, item: url },
          ],
        }}
      />
    </main>
  );
}
