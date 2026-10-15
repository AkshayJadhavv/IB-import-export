"use client";
import { useState } from "react";
import FadeUp from "../ui/FadeUp";

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

const productOptions = ["Agricultural Products","Textiles","Machinery","Chemicals","Food Products","Multi-product / General","Other"];

const inp: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  padding: "13px 16px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  display: "block",
};

export default function Inquiry() {
  const [form, setForm] = useState({ name:"", company:"", country:"", email:"", phone:"", product:"", tradeType:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) { alert("Please fill Name, Email and Message."); return; }
    setStatus("loading");
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method:"POST", mode:"no-cors", headers:{"Content-Type":"application/json"}, body: JSON.stringify({...form, timestamp: new Date().toISOString()}) });
      setStatus("success");
      setForm({ name:"", company:"", country:"", email:"", phone:"", product:"", tradeType:"", message:"" });
    } catch { setStatus("error"); }
  };

  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => e.target.style.borderColor = "rgba(255,255,255,0.4)";
  const blur  = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => e.target.style.borderColor = "rgba(255,255,255,0.12)";

  return (
    <section id="inquiry" className="py-32" style={{ backgroundColor: "#111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left info */}
          <div>
            <FadeUp>
              <span className="text-xs tracking-widest uppercase block mb-4" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.35em" }}>Get In Touch</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
                Start a Trade<br /><em>Conversation</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-sm leading-relaxed font-light mb-12" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}>
                Whether you are looking to import quality goods into India or export Indian products to global markets, our team is ready to understand your needs and provide tailored trade solutions.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="space-y-0">
                {[
                  { label: "Response Time", value: "Within 24–48 business hours" },
                  { label: "Languages", value: "English, Hindi, Marathi" },
                  { label: "Availability", value: "Mon – Sat, 9 AM – 6 PM IST" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)" }}>{item.label}</span>
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right form */}
          <FadeUp delay={0.2}>
            {status === "success" ? (
              <div className="p-12 text-center" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff" }}>Inquiry Received</p>
                <p className="text-sm font-light" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}>Our team will contact you within 24–48 hours.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="name" placeholder="Full Name *" value={form.name} onChange={set} onFocus={focus} onBlur={blur} style={inp} />
                  <input name="company" placeholder="Company Name" value={form.company} onChange={set} onFocus={focus} onBlur={blur} style={inp} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="country" placeholder="Country" value={form.country} onChange={set} onFocus={focus} onBlur={blur} style={inp} />
                  <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={set} onFocus={focus} onBlur={blur} style={inp} />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="phone" placeholder="Phone / WhatsApp" value={form.phone} onChange={set} onFocus={focus} onBlur={blur} style={inp} />
                  <select name="product" value={form.product} onChange={set} onFocus={focus} onBlur={blur}
                    style={{ ...inp, color: form.product ? "#fff" : "rgba(255,255,255,0.3)" }}>
                    <option value="" disabled style={{ backgroundColor: "#1a1a1a" }}>Product Interest</option>
                    {productOptions.map(p => <option key={p} value={p} style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>{p}</option>)}
                  </select>
                </div>
                {/* Trade type toggle */}
                <div className="grid grid-cols-2 gap-3">
                  {["Import","Export"].map(type => (
                    <button key={type} onClick={() => setForm(f => ({ ...f, tradeType: type }))}
                      className="py-3 text-xs tracking-widest uppercase transition-all duration-200"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        border: `1px solid ${form.tradeType === type ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: form.tradeType === type ? "#fff" : "rgba(255,255,255,0.3)",
                        backgroundColor: form.tradeType === type ? "rgba(255,255,255,0.07)" : "transparent",
                      }}
                    >{type}</button>
                  ))}
                </div>
                <textarea name="message" placeholder="Your Message *" rows={5} value={form.message} onChange={set} onFocus={focus} onBlur={blur}
                  style={{ ...inp, resize: "vertical" }} />
                <button onClick={submit} disabled={status === "loading"}
                  className="w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#fff", color: "#1A1A1A", opacity: status === "loading" ? 0.7 : 1 }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e8e8e8")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  {status === "loading" ? "Sending…" : "Send Inquiry"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif", color: "#f87171" }}>
                    Something went wrong. Please email us directly.
                  </p>
                )}
              </div>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
