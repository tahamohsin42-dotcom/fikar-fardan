"use client";
import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import Link from "next/link";
import { STARTUP_PROGRAMS, BRAND } from "@/data/content";

// ── TYPES ────────────────────────────────────────────────────────────────────
type Prog = typeof STARTUP_PROGRAMS[number];
type DonationType = "Full Sponsorship" | "Partial Donation";

interface DonateForm {
  name: string;
  phone: string;
  email: string;
  program: string;
  amount: string;
  donationType: DonationType;
  duaName: string;
  message: string;
  screenshot: File | null;
}

const EMPTY_FORM: DonateForm = {
  name: "", phone: "", email: "", program: "", amount: "",
  donationType: "Full Sponsorship", duaName: "", message: "", screenshot: null,
};

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function StartupPage() {
  const [activeProg, setActiveProg]   = useState<Prog | null>(null);
  const [form, setForm]               = useState<DonateForm>(EMPTY_FORM);
  const [errors, setErrors]           = useState<Partial<DonateForm>>({});
  const [status, setStatus]           = useState<"idle"|"loading"|"success">("idle");

  const openModal = (prog: Prog) => {
    setActiveProg(prog);
    setForm({ ...EMPTY_FORM, program: prog.title, amount: String(prog.donationAmount) });
    setStatus("idle");
    setErrors({});
  };
  const closeModal = () => { if (status !== "loading") { setActiveProg(null); setStatus("idle"); } };

  const set = (k: keyof DonateForm, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<DonateForm> = {};
    if (!form.name.trim())  e.name  = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone / WhatsApp is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.amount || isNaN(Number(form.amount))) e.amount = "Enter a valid amount";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          category: "startup",
          cause: `Startup Fund — ${form.program}`,
          donationType: form.donationType,
          duaName: form.duaName,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch { /* handled by success state */ }
    setStatus("success");
  };

  // ── RENDER MODAL ─────────────────────────────────────────────────────────
  const Modal = () => {
    if (!activeProg) return null;
    return (
      <div
        style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.78)", zIndex:3000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem" }}
        onClick={closeModal}
      >
        <div
          style={{ background:"white", borderRadius:24, maxWidth:520, width:"100%", maxHeight:"92vh", overflowY:"auto", boxShadow:"0 24px 80px rgba(0,0,0,.3)" }}
          onClick={e => e.stopPropagation()}
        >
          {status === "success" ? (
            /* ── SUCCESS STATE ── */
            <div style={{ padding:"2.5rem 2rem", textAlign:"center" }}>
              <div style={{ width:70, height:70, borderRadius:"50%", background:"linear-gradient(135deg,#0d9e6a,#0b7a53)", margin:"0 auto 1.25rem", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem" }}>✓</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.9rem", fontWeight:700, color:"#0d9e6a", marginBottom:".75rem" }}>
                JazakAllah Khair!
              </h2>
              <p style={{ color:"#444", fontSize:15, lineHeight:1.82, marginBottom:"1.5rem" }}>
                Thank you, <strong>{form.name}</strong>. Your donation can help someone start earning with dignity.
                Our team will contact you soon on <strong>{form.phone}</strong>.
              </p>

              {/* Bank Details */}
              <div style={{ background:"linear-gradient(135deg,#F8F6FB,#f0eeff)", border:"1.5px solid rgba(107,45,143,.2)", borderRadius:16, padding:"1.4rem 1.5rem", marginBottom:"1.5rem", textAlign:"left" }}>
                <p style={{ fontSize:11, fontWeight:800, color:"#6B2D8F", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"1rem" }}>
                  📋 Bank Transfer Details
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:"6px 14px", fontSize:13, color:"#444" }}>
                  <span style={{ fontWeight:700, color:"#555" }}>Bank</span>
                  <span>{BRAND.bankName}</span>
                  <span style={{ fontWeight:700, color:"#555" }}>Account</span>
                  <span>{BRAND.bankTitle}</span>
                  <span style={{ fontWeight:700, color:"#555" }}>IBAN</span>
                  <span style={{ fontFamily:"monospace", fontSize:12, letterSpacing:".5px", color:"#6B2D8F", fontWeight:700 }}>{BRAND.bankIBAN}</span>
                  <span style={{ fontWeight:700, color:"#555" }}>Program</span>
                  <span>{form.program}</span>
                  <span style={{ fontWeight:700, color:"#555" }}>Amount</span>
                  <span style={{ fontWeight:700, color:"#0d9e6a" }}>PKR {Number(form.amount).toLocaleString()}</span>
                </div>
                <p style={{ fontSize:11, color:"#888", marginTop:"1rem", lineHeight:1.65 }}>
                  After transfer, send screenshot to <a href={`mailto:${BRAND.email}`} style={{ color:"#6B2D8F" }}>{BRAND.email}</a> with your name and program.
                </p>
              </div>

              <div style={{ display:"flex", gap:"1rem", justifyContent:"center" }}>
                <button className="btn-primary" onClick={closeModal} style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>
                  Close ✓
                </button>
                <a href={`https://wa.me/${BRAND.whatsapp}?text=Assalam%20o%20Alaikum%21%20I%20donated%20for%20${encodeURIComponent(form.program)}%20-%20${form.name}`}
                  target="_blank" rel="noopener noreferrer">
                  <button style={{ padding:"12px 24px", borderRadius:10, fontSize:14, background:"#25D366", color:"white", border:"none", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600 }}>
                    WhatsApp Us 💬
                  </button>
                </a>
              </div>
            </div>
          ) : (
            /* ── FORM STATE ── */
            <div style={{ padding:"2rem" }}>
              {/* Modal header */}
              <div style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius:16, padding:"1.25rem 1.5rem", marginBottom:"1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <p style={{ fontSize:11, color:"rgba(212,160,23,.85)", fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:4 }}>Startup Fund Donation</p>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"white" }}>{activeProg.title}</h3>
                  <p style={{ fontSize:13, color:"rgba(255,255,255,.6)", marginTop:4 }}>
                    Suggested: <strong style={{ color:"#D4A017" }}>{activeProg.donationLabel}</strong>
                  </p>
                </div>
                <button onClick={closeModal} style={{ background:"rgba(255,255,255,.12)", border:"none", color:"white", width:34, height:34, borderRadius:"50%", cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>✕</button>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:".9rem" }}>
                {/* Name */}
                <div className="input-group">
                  <label className="input-label">Donor Name *</label>
                  <input className={`form-field ${errors.name?"error":""}`} placeholder="Your full name"
                    value={form.name} onChange={e=>set("name",e.target.value)} />
                  {errors.name && <span className="input-error">⚠ {errors.name}</span>}
                </div>

                {/* Phone + Email */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  <div className="input-group">
                    <label className="input-label">Phone / WhatsApp *</label>
                    <input className={`form-field ${errors.phone?"error":""}`} type="tel" placeholder="+92 3XX XXXXXXX"
                      value={form.phone} onChange={e=>set("phone",e.target.value)} />
                    {errors.phone && <span className="input-error">⚠ {errors.phone}</span>}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email *</label>
                    <input className={`form-field ${errors.email?"error":""}`} type="email" placeholder="you@email.com"
                      value={form.email} onChange={e=>set("email",e.target.value)} />
                    {errors.email && <span className="input-error">⚠ {errors.email}</span>}
                  </div>
                </div>

                {/* Selected Program */}
                <div className="input-group">
                  <label className="input-label">Selected Program</label>
                  <select className="form-field" value={form.program} onChange={e=>set("program",e.target.value)} style={{ cursor:"pointer" }}>
                    {STARTUP_PROGRAMS.map(p => (
                      <option key={p.id} value={p.title}>{p.title} — {p.donationLabel}</option>
                    ))}
                  </select>
                </div>

                {/* Amount + Type */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  <div className="input-group">
                    <label className="input-label">Donation Amount (PKR) *</label>
                    <input className={`form-field ${errors.amount?"error":""}`} type="number" placeholder="Enter amount"
                      value={form.amount} onChange={e=>set("amount",e.target.value)} />
                    {errors.amount && <span className="input-error">⚠ {errors.amount}</span>}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Donation Type</label>
                    <select className="form-field" value={form.donationType} onChange={e=>set("donationType",e.target.value as DonationType)} style={{ cursor:"pointer" }}>
                      <option value="Full Sponsorship">Full Sponsorship</option>
                      <option value="Partial Donation">Partial Donation</option>
                    </select>
                  </div>
                </div>

                {/* Dua Name */}
                <div className="input-group">
                  <label className="input-label">Dua / Name for Prayers (optional)</label>
                  <input className="form-field" placeholder="Name to include in our prayers (e.g. For my father's health)"
                    value={form.duaName} onChange={e=>set("duaName",e.target.value)} />
                </div>

                {/* Message */}
                <div className="input-group">
                  <label className="input-label">Message (optional)</label>
                  <textarea className="form-field" rows={2} placeholder="Any message or special instructions..."
                    value={form.message} onChange={e=>set("message",e.target.value)}
                    style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
                </div>

                {/* Screenshot upload */}
                <div className="input-group">
                  <label className="input-label">Payment Screenshot (after bank transfer)</label>
                  <input type="file" accept="image/*,application/pdf" className="form-field"
                    onChange={e => setForm(f => ({ ...f, screenshot: e.target.files?.[0] ?? null }))}
                    style={{ cursor:"pointer" }} />
                  <span style={{ fontSize:11, color:"#aaa", marginTop:3, display:"block" }}>
                    Transfer to Meezan Bank IBAN: {BRAND.bankIBAN} — then upload screenshot
                  </span>
                </div>

                {/* Submit */}
                <button className="btn-primary" onClick={submit} disabled={status==="loading"}
                  style={{ padding:"14px", borderRadius:11, fontSize:15, fontWeight:700, marginTop:".25rem" }}>
                  {status==="loading" ? "Submitting..." : "Submit Donation →"}
                </button>

                <p style={{ fontSize:12, color:"#aaa", textAlign:"center", lineHeight:1.6 }}>
                  Your donation creates opportunity, not dependency. JazakAllah Khair ❤️
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ── PAGE RENDER ──────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />

      <PageHero
        badge="Startup Fund Program"
        title="Help Deserving People"
        highlight="Become Self-Reliant"
        subtitle="Your donation doesn't give aid — it gives a business, a daily income, and dignity for life. Opportunity, not dependency."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Young entrepreneur receiving startup support through Fikr Fardan Foundation Pakistan"
      />

      {/* PHILOSOPHY */}
      <section style={{ background:"#F8F6FB", padding:"3.5rem 1.5rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.25rem" }}>
          {[
            ["💡","Give Opportunity","Not Dependency"],
            ["🔄","Transform Support","Into Sustainable Livelihood"],
            ["🏆","Your Donation Creates","Dignity & Independence"],
          ].map(([icon,l1,l2]) => (
            <FadeSection key={l1}>
              <div style={{ background:"white", borderRadius:16, padding:"1.4rem 1.6rem", border:"1px solid rgba(107,45,143,.1)", textAlign:"center", boxShadow:"0 4px 20px rgba(107,45,143,.05)" }}>
                <div style={{ fontSize:"2rem", marginBottom:".5rem" }}>{icon}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", fontWeight:700, color:"#1a0533", lineHeight:1.35 }}>
                  {l1}<br /><span style={{ color:"#6B2D8F" }}>{l2}</span>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section style={{ background:"white", padding:"5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <span className="section-label">11 Active Programs</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>
                Choose a Life to Change
              </h2>
              <p style={{ color:"#888", fontSize:14, marginTop:".5rem", maxWidth:560, margin:".5rem auto 0" }}>
                Every rupee funds a real business. Every business creates real income, real independence, and real dignity.
              </p>
            </div>
          </FadeSection>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"1.75rem" }}>
            {STARTUP_PROGRAMS.map((prog, i) => (
              <FadeSection key={prog.id} delay={i * .05}>
                <div
                  className="card-hover"
                  style={{ background:"#F8F6FB", borderRadius:22, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column", boxShadow:"0 4px 24px rgba(107,45,143,.06)" }}
                >
                  {/* Image */}
                  <div style={{ height:210, position:"relative", overflow:"hidden" }}>
                    <img
                      src={prog.image}
                      alt={prog.alt}
                      loading="lazy"
                      decoding="async"
                      width={600} height={210}
                      style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s ease" }}
                      onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                      onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
                    />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.72) 0%,rgba(13,5,32,.1) 55%,transparent 100%)" }} />

                    {/* Program icon */}
                    <div style={{ position:"absolute", bottom:12, left:14, fontSize:"2.2rem" }}>{prog.icon}</div>

                    {/* Delivered badge */}
                    <div style={{ position:"absolute", top:12, right:12, background:"rgba(13,5,32,.78)", backdropFilter:"blur(8px)", borderRadius:11, padding:"7px 13px", textAlign:"center", border:"1px solid rgba(212,160,23,.3)" }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>{prog.delivered}</div>
                      <div style={{ fontSize:10, color:"rgba(255,255,255,.65)", fontWeight:600, letterSpacing:".3px" }}>{prog.unit}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontWeight:700, color:"#1a0533", marginBottom:".5rem" }}>
                      {prog.title}
                    </h3>
                    <p style={{ color:"#666", fontSize:13, lineHeight:1.78, marginBottom:"1rem", flex:1 }}>{prog.desc}</p>

                    {/* Donation amount — PROMINENT */}
                    <div style={{ background:"linear-gradient(135deg,rgba(107,45,143,.1),rgba(107,45,143,.05))", border:"1.5px solid rgba(107,45,143,.2)", borderRadius:12, padding:"12px 14px", marginBottom:"1rem" }}>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                        <div>
                          <p style={{ fontSize:10, color:"#888", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", marginBottom:3 }}>Donation Required</p>
                          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:700, color:"#6B2D8F", lineHeight:1 }}>
                            {prog.donationLabel}
                          </p>
                        </div>
                        <div style={{ fontSize:"1.8rem" }}>💜</div>
                      </div>
                      <p style={{ fontSize:11, color:"#888", marginTop:6, lineHeight:1.6, fontStyle:"italic" }}>
                        {prog.emotionalLine}
                      </p>
                    </div>

                    {/* Impact tags */}
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:"1.1rem" }}>
                      {prog.impact.map(imp => (
                        <span key={imp} style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(107,45,143,.08)", color:"#6B2D8F", fontWeight:600, border:"1px solid rgba(107,45,143,.12)" }}>
                          {imp}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      className="btn-primary"
                      onClick={() => openModal(prog)}
                      style={{ width:"100%", padding:"12px", borderRadius:11, fontSize:14, fontWeight:700 }}
                    >
                      {prog.cta} →
                    </button>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT QUOTE */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <div style={{ maxWidth:700, margin:"0 auto" }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"4rem", color:"rgba(212,160,23,.3)", lineHeight:.6, marginBottom:"1.25rem" }}>&ldquo;</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.5rem,3.5vw,2.5rem)", fontWeight:700, color:"white", lineHeight:1.3, marginBottom:"1.25rem" }}>
              Every Rupee Creates a Business.<br />Every Business Creates Dignity.
            </h2>
            <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, marginBottom:"2rem" }}>
              Small funding. Life-changing impact. Sustainable self-reliance.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/donate">
                <button className="btn-primary" style={{ padding:"14px 32px", borderRadius:12, fontSize:15, fontWeight:700 }}>
                  Donate Now ❤️
                </button>
              </Link>
              <Link href="/impact">
                <button className="btn-ghost" style={{ padding:"14px 32px", borderRadius:12, fontSize:14 }}>
                  See Impact Stories →
                </button>
              </Link>
            </div>
          </div>
        </FadeSection>
      </section>

      <Footer />

      {/* DONATION MODAL */}
      <Modal />

      {/* SEO meta */}
      <style>{`
        @media(max-width:600px){
          div[style*="grid-template-columns: 1fr 1fr"]{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </>
  );
}
