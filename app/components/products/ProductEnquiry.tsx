import Link from "next/link";
import type { Product } from "@/app/data/products";
import { sans, serif } from "./theme";

/** Section 4 — Product enquiry. Links to /contact?product=<slug> */
export default function ProductEnquiry({ product }: { product: Product }) {
  return (
    <section className="py-24" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", color: "#fff" }}>
          Interested in {product.name}?
        </h2>
        <p className="mt-5 mb-10 text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: sans }}>
          Send us your quantity, packing preference and destination. We will respond with the details available for your requirement.
        </p>
        <Link
          href={`/contact?product=${product.slug}`}
          className="inline-block px-10 py-4 text-xs tracking-widest uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white"
          style={{ backgroundColor: "#FAFAF8", color: "#1A1A1A", fontFamily: sans }}
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
