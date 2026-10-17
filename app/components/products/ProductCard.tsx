import Link from "next/link";
import { categoryHref, productHref, type Product } from "@/app/data/products";
import ProductImage from "./ProductImage";
import { c, sans, serif } from "./theme";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const href = productHref(product);
  return (
    <article
      className="group flex flex-col bg-white border transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)]"
      style={{ borderColor: c.line }}
    >
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] overflow-hidden">
        <ProductImage
          src={product.image}
          alt={`${product.name} – ${product.category} from IB Import Export`}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={priority}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-col flex-1 p-7">
        <Link
          href={categoryHref(product.categorySlug)}
          className="text-xs tracking-widest uppercase mb-3 self-start transition-opacity hover:opacity-60"
          style={{ color: c.muted, fontFamily: sans, letterSpacing: "0.25em" }}
        >
          {product.category}
        </Link>
        <h3 className="mb-3" style={{ fontFamily: serif, fontWeight: 400, fontSize: "1.5rem", color: c.ink }}>
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className="text-sm leading-relaxed font-light mb-7" style={{ color: c.muted, fontFamily: sans }}>
          {product.shortDescription}
        </p>
        <Link
          href={href}
          className="mt-auto self-start px-6 py-3 text-xs tracking-widest uppercase border transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          style={{ borderColor: c.ink, color: c.ink, fontFamily: sans }}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
