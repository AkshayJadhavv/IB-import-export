"use client";
import FadeUp from "../ui/FadeUp";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32" style={{ backgroundColor: "var(--bg-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="mb-16">
            <span
              className="text-xs tracking-widest uppercase block mb-4"
              style={{
                color: "var(--accent)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.35em",
              }}
            >
              Find Us
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--heading)",
              }}
            >
              Contact & <em style={{ color: "var(--primary)" }}>Office</em>
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-10">
          <FadeUp delay={0.1}>
            <div className="space-y-4">
              {/* Address */}
              <div
                className="p-8 rounded-sm"
                style={{
                  backgroundColor: "var(--bg-white)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 24px -12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-start gap-4">
                  <MapPin size={18} color="var(--primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-3"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent)" }}
                    >
                      Office Address
                    </p>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--heading)" }}
                    >
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
                <div
                  className="p-6 rounded-sm"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 8px 24px -12px rgba(0,0,0,0.08)",
                  }}
                >
                  <Phone size={16} color="var(--primary)" style={{ marginBottom: 12 }} />
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent)" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+917499280907"
                    className="text-sm font-light transition-colors duration-200 hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--heading)", textDecoration: "none" }}
                  >
                    +91 7499280907
                  </a>
                </div>
                <div
                  className="p-6 rounded-sm"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 8px 24px -12px rgba(0,0,0,0.08)",
                  }}
                >
                  <Mail size={16} color="var(--primary)" style={{ marginBottom: 12 }} />
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--accent)" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@ibimportexport.com"
                    className="text-sm font-light break-all transition-colors duration-200 hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--heading)", textDecoration: "none" }}
                  >
                    info@ibimportexport.com
                  </a>
                </div>
              </div>

              {/* WhatsApp button — primary green */}
              <a
                href="https://wa.me/917499280907?text=Hello%2C%20I%20am%20interested%20in%20your%20import%20export%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 px-6 w-full text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:brightness-110"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-white)",
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "none",
                  display: "flex",
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-sm"
              style={{
                border: "1px solid var(--border)",
                overflow: "hidden",
                height: "420px",
                boxShadow: "0 8px 24px -12px rgba(0,0,0,0.08)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30594.16!2d74.4218!3d17.9874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25dce21a00d8d%3A0x7e8e9cc9f4a0e0db!2sPhaltan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IB Import Export office location — Phaltan, Maharashtra"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}