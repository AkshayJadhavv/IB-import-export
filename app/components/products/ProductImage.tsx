"use client";
import Image from "next/image";
import { useState } from "react";
import { sans } from "./theme";

interface Props {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Parent must be `relative` with a fixed aspect ratio. Falls back to a neutral panel if the file is missing. */
export default function ProductImage({ src, alt, sizes, priority = false, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#EDE9E1" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#9A9A9A", fontFamily: sans }}>
          IB Import Export
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
