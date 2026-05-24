"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { BRAND } from "@/data/content";

type Stage = "form" | "success";
interface CForm { name: string; email: string; phone: string; subject: string; message: string; }

const SUBJECTS = ["General Inquiry", "Donation Support", "Partnership / Sponsorship", "Volunteer Inquiry", "Media / Press", "Technical Support", "Other"];

const CONTACT_INFO = [
  { icon: "📧", label: "Email", value: BRAND.email,   href: `mailto:${BRAND.email}` },
  { icon: "📞", label: "Phone",  value: BRAND.phone,   href: `tel:${BRAND.phone.replace(/\s/g,"")}` },
  { icon: "💬", label: "WhatsApp",value: BRAND.phone,  href: `https://wa.me/${BRAND.whatsapp}` },
  { icon: "📍", label: "Address", value: BRAND.address, href: "#" },
];

export default function ContactPage() {
  const [stage, setStage] = useState<Stage>("form");
  const [form, setForm] = useState<CForm>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<CForm>>({});
  const [loading, setLoading] = useState(false);

  function set(k: keyof CForm, v: string) { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: "" })); }

  function validate() {
    const e: Partial<CForm> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Please write a message (min 10 chars)";
    setErrors(e);
    return !Object.keys(e).length;
  }

  async function submit() {
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } catch { /* offline */ }
    setTimeout(() => { setLoading(false); setStage("success"); }, 900);
  }

  const fieldStyle = (k: keyof CForm): React.CSSProperties => ({
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: `1.5px solid ${errors[k] ? "#ef4444" : "#e0daea"}`,
    fontSize: 14, fontFamily: "'Outfit',sans-serif", color: "#333",
    background: "#fafaf8", outline: "none",
  });

  return (
    <>
      <Navbar />
      <PageHero badge="Get in Touch" title="We'd Love to" highlight="Hear From You" subtitle="Whether you have a question, want to partner, or just want to learn more — our team responds within 24 hours." />

      <section style={{ background: "#F8F6FB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

          {/* Contact Info */}
          <div>
            <FadeSection>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: "1.75rem" }}>Contact Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {CONTACT_INFO.map(c => (
                  <a key={c.label} href={c.href} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "white", borderRadius: 14, padding: "1.1rem 1.25rem", border: "1px solid rgba(107,45,143,0.1)", textDecoration: "none", transition: "border-color 0.2s, transform 0.2s", color: "inherit" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#6B2D8F"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(107,45,143,0.1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)"; }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(107,45,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</div>
                      <div style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 18, padding: "2rem", color: "white" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Office Hours</h3>
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday",  time: "10:00 AM – 3:00 PM" },
                  { day: "Sunday",    time: "Closed" },
                ].map(h => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: 13 }}>
                    <span style={{ opacity: 0.75 }}>{h.day}</span>
                    <span style={{ fontWeight: 600, color: h.time === "Closed" ? "rgba(255,255,255,0.4)" : "#D4A017" }}>{h.time}</span>
                  </div>
                ))}
                <p style={{ marginTop: "1rem", fontSize: 12, opacity: 0.6 }}>WhatsApp responses are available 24/7 for urgent queries.</p>
              </div>
            </FadeSection>
          </div>

          {/* Contact Form */}
          <FadeSection delay={0.15}>
            <div style={{ background: "white", borderRadius: 24, padding: "2.5rem", border: "1px solid rgba(107,45,143,0.1)", boxShadow: "0 8px 40px rgba(107,45,143,0.08)" }}>
              {stage === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✉️</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".75rem" }}>Message Sent!</h2>
                  <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "2rem" }}>JazakAllah for reaching out. Our team will respond to your message within 24 hours, InshAllah.</p>
                  <button onClick={() => { setStage("form"); setForm({ name:"",email:"",phone:"",subject:"",message:"" }); }}
                    style={{ padding: "11px 28px", borderRadius: 10, background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)", color: "white", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "#1a0533", marginBottom: "0.5rem" }}>Send a Message</h2>
                  <p style={{ color: "#888", fontSize: 13, marginBottom: "2rem" }}>We read every message personally and respond quickly.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-2col">
                    <div>
                      <input style={fieldStyle("name")} placeholder="Full Name *" value={form.name} onChange={e => set("name", e.target.value)} />
                      {errors.name && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <input style={fieldStyle("email")} placeholder="Email Address *" type="email" value={form.email} onChange={e => set("email", e.target.value)} />
                      {errors.email && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-2col">
                    <input style={fieldStyle("phone")} placeholder="Phone (optional)" type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} />
                    <select value={form.subject} onChange={e => set("subject", e.target.value)}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e0daea", fontSize: 14, fontFamily: "'Outfit',sans-serif", color: form.subject ? "#333" : "#999", background: "#fafaf8", outline: "none" }}>
                      <option value="">Subject (optional)</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <textarea style={{ ...fieldStyle("message"), resize: "vertical" }} placeholder="Your message... *" rows={5} value={form.message} onChange={e => set("message", e.target.value)} />
                    {errors.message && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.message}</p>}
                  </div>
                  <button onClick={submit} disabled={loading}
                    style={{ width: "100%", padding: 14, borderRadius: 12, background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)", color: "white", border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 15, fontWeight: 700, fontFamily: "'Outfit',sans-serif", opacity: loading ? 0.75 : 1, transition: "all 0.2s" }}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                  <p style={{ textAlign: "center", marginTop: "1rem", fontSize: 12, color: "#aaa" }}>Or WhatsApp us directly at {BRAND.phone}</p>
                </>
              )}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding: "0 1.5rem 5rem", background: "#F8F6FB" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", height: 320, background: "linear-gradient(135deg,#0D0520,#1a0533)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1586769852044-692d6f415e47?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
            <div style={{ position: "relative", textAlign: "center", color: "white" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700 }}>Lahore, Pakistan</h3>
              <p style={{ opacity: 0.6, fontSize: 14, marginTop: "0.5rem" }}>Fikr Fardan Foundation Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:768px){ .contact-grid{grid-template-columns:1fr!important;} .form-2col{grid-template-columns:1fr!important;} }
      `}</style>
    </>
  );
}
