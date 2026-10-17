import Link from "next/link";
import { sans, serif } from "./theme";

interface Props {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

export default function ContactCTA({
  title = "Looking for a specific product?",
  text = "Tell us what you need, your quantity and your destination. Our team will respond to your enquiry.",
  href = "/contact",
  label = "Contact Us",
}: Props) {
  return (
    <section className="py-24" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", color: "#fff" }}>{title}</h2>
        <p className="mt-5 mb-10 text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: sans }}>
          {text}
        </p>
        <Link
          href={href}
          className="inline-block px-9 py-4 text-xs tracking-widest uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white"
          style={{ backgroundColor: "#FAFAF8", color: "#1A1A1A", fontFamily: sans }}
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
