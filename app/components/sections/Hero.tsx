"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      {/* World map SVG */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.09 }}>
        <svg viewBox="0 0 1000 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#ffffff" strokeWidth="0.6" fill="rgba(255,255,255,0.04)">
            <path d="M 120 80 L 240 60 L 280 100 L 260 160 L 220 200 L 160 220 L 100 180 L 80 130 Z" />
            <path d="M 180 240 L 240 230 L 260 300 L 240 380 L 200 420 L 170 380 L 150 300 Z" />
            <path d="M 430 60 L 510 50 L 540 100 L 510 140 L 450 150 L 420 120 L 410 80 Z" />
            <path d="M 440 160 L 520 150 L 550 200 L 540 320 L 490 380 L 440 340 L 420 260 L 420 190 Z" />
            <path d="M 540 50 L 760 40 L 820 100 L 800 180 L 720 200 L 620 220 L 540 180 L 520 120 Z" />
            <path d="M 720 280 L 820 260 L 850 320 L 820 360 L 760 370 L 720 330 Z" />
            <path d="M 610 145 L 660 135 L 675 195 L 650 255 L 615 245 L 600 195 Z" />
          </g>
          {[0,100,200,300,400].map(y=><line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#fff" strokeWidth="0.2" strokeDasharray="3 9"/>)}
          {[0,125,250,375,500,625,750,875,1000].map(x=><line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#fff" strokeWidth="0.2" strokeDasharray="3 9"/>)}
          {[[150,120],[480,90],[640,170],[750,130],[200,280],[530,200],[820,300],[300,150],[700,200],[635,180]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="3.5" fill="rgba(255,255,255,0.6)" />
          ))}
          <line x1="150" y1="120" x2="480" y2="90" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
          <line x1="480" y1="90" x2="635" y2="180" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
          <line x1="635" y1="180" x2="750" y2="130" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
          <line x1="200" y1="280" x2="530" y2="200" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
          <line x1="530" y1="200" x2="820" y2="300" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
          <line x1="300" y1="150" x2="150" y2="120" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 6"/>
        </svg>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-6">
          <span className="text-xs tracking-widest uppercase text-white" style={{ opacity: 0.4, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.4em" }}>
            Phaltan, India · Worldwide Trading
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.1 }}
        >
          Connecting Markets.<br />
          <em>Delivering Global</em><br />
          Trade Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mb-12 text-base lg:text-lg font-light leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)" }}
        >
          IB Import Export bridges global markets with precision and integrity. From agricultural produce to advanced machinery, we facilitate seamless international trade across continents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => go("#contact")}
            className="px-8 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#fff", color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", minWidth: "180px" }}
          >Contact Us</button>
          <button
            onClick={() => go("#services")}
            className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontFamily: "'DM Sans', sans-serif", minWidth: "200px" }}
          >Global Trade Solutions</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        </motion.div>
      </div>
    </section>
  );
}
