"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-agriculture.png"
          alt="Agricultural commodities warehouse and global trade"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay — darker on the left */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Content — pinned to the LEFT of the screen */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-6 py-24 text-left" // ← CHANGED: removed mx-auto/max-w-6xl, added left padding
      >
        {/* Small heading */}
        <motion.div variants={itemVariants} className="mb-5">
          <span
            className="inline-block text-[13px] md:text-[14px] font-semibold uppercase"
            style={{
              color: "#D4A843",
              fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
              letterSpacing: "2px",
            }}
          >
            Welcome to IB Import Export
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-white mb-6 md:mb-8 max-w-[850px] text-left"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Connecting Indian Agriculture
          <br className="hidden sm:block" /> to Global Markets
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-10 md:mb-12 max-w-[650px] text-left leading-[1.7]"
          style={{
            fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
            fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)",
            color: "#E5E7EB",
          }}
        >
          IB Import Export is an import-export company based in Phaltan,
          Maharashtra, connecting quality agricultural products with domestic
          and international markets through reliable sourcing and professional
          trading solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-start items-start"
        >
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: "#D4A843",
              color: "#1B4332",
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: "4px",
              minWidth: "220px",
            }}
          >
            Explore Our Products
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/10"
            style={{
              border: "1.5px solid rgba(255,255,255,0.6)",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: "4px",
              minWidth: "200px",
            }}
          >
            Contact Us
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — aligned with content left padding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-6 sm:left-10 lg:left-16 xl:left-24 z-20 flex flex-col items-start gap-2" // ← CHANGED
      >
        <span
          className="text-[11px] uppercase tracking-[0.3em]"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        />
      </motion.div>
    </section>  
  );
}