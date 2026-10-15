"use client";
import FadeUp from "../ui/FadeUp";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32" style={{ backgroundColor: "#F8F6F1" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="mb-16">
            <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Find Us</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 300, color: "#1A1A1A" }}>
              Contact & <em>Office</em>
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-10">
          <FadeUp delay={0.1}>
            <div className="space-y-4">
              {/* Address */}
              <div className="p-8" style={{ backgroundColor: "#fff", border: "1px solid #E2DDD6" }}>
                <div className="flex items-start gap-4">
                  <MapPin size={18} color="#6B6B6B" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>Office Address</p>
                    <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A" }}>
                      IB Import Export<br />
                      Main Market, Phaltan<br />
                      Satara District, Maharashtra 415523<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6" style={{ backgroundColor: "#fff", border: "1px solid #E2DDD6" }}>
                  <Phone size={16} color="#6B6B6B" style={{ marginBottom: 12 }} />
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>Phone</p>
                  <a href="tel:+919876543210" className="text-sm font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", textDecoration: "none" }}>+91 98765 43210</a>
                </div>
                <div className="p-6" style={{ backgroundColor: "#fff", border: "1px solid #E2DDD6" }}>
                  <Mail size={16} color="#6B6B6B" style={{ marginBottom: 12 }} />
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "#9A9A9A" }}>Email</p>
                  <a href="mailto:info@ibimportexport.com" className="text-sm font-light break-all" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", textDecoration: "none" }}>info@ibimportexport.com</a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20import%20export%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 px-6 w-full text-sm tracking-widest uppercase transition-colors duration-300"
                style={{ backgroundColor: "#1A1A1A", color: "#fff", fontFamily: "'DM Sans', sans-serif", textDecoration: "none", display: "flex" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#2C2C2C")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={0.2}>
            <div style={{ border: "1px solid #E2DDD6", overflow: "hidden", height: "420px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30594.16!2d74.4218!3d17.9874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25dce21a00d8d%3A0x7e8e9cc9f4a0e0db!2sPhaltan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999"
                width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(90%) contrast(1.05)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
