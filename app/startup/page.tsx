"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import Link from "next/link";
import { STARTUP_PROGRAMS, BRAND } from "@/data/content";

type FormState = { name:string; email:string; phone:string; amount:string; message:string };
const EMPTY: FormState = { name:"", email:"", phone:"", amount:"", message:"" };

export default function StartupPage() {
  const [donatingTo, setDonatingTo] = useState<string|null>(null);
  const [form, setForm]             = useState<FormState>(EMPTY);
  const [status, setStatus]         = useState<"idle"|"loading"|"success">("idle");

  const prog = STARTUP_PROGRAMS.find(p => p.id === donatingTo);

  const submit = async () => {
    if (!form.name || !form.email || !form.amount) return;
    setStatus("loading");
    try {
      await fetch("/api/donate", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ ...form, cause:`Startup Fund — ${prog?.title}`, category:"startup" }),
      });
    } catch { /* handled below */ }
    setStatus("success");
  };

  const close = () => { setDonatingTo(null); setStatus("idle"); setForm(EMPTY); };

  return (
    <>
      <Navbar />
      <PageHero
        badge="Startup Fund Program"
        title="Help Deserving People"
        highlight="Become Self-Reliant"
        subtitle="Your donation doesn't just give aid — it gives someone a business, an income, and dignity for life."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Young South Asian entrepreneur planning startup business supported by Fikr Fardan Foundation"
      />

      {/* PHILOSOPHY STRIP */}
      <section style={{ background:"#F8F6FB", padding:"3.5rem 1.5rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.25rem" }}>
          {[
            ["💡","Give Opportunity","Not Dependency"],
            ["🔄","Transform Support","Into Sustainable Livelihood"],
            ["🏆","Your Donation Creates","Dignity & Independence"],
          ].map(([icon,l1,l2]) => (
            <FadeSection key={l1}>
              <div style={{ background:"white", borderRadius:16, padding:"1.4rem 1.6rem", border:"1px solid rgba(107,45,143,.1)", textAlign:"center" }}>
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
              <p style={{ color:"#888", fontSize:14, marginTop:".5rem" }}>
                Every rupee funds a real business. Every business creates a real income.
              </p>
            </div>
          </FadeSection>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:"1.75rem" }}>
            {STARTUP_PROGRAMS.map((prog, i) => (
              <FadeSection key={prog.id} delay={i*.05}>
                <div className="card-hover" style={{ background:"#F8F6FB", borderRadius:20, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column" }}>
                  {/* Image */}
                  <div style={{ height:195, position:"relative", overflow:"hidden" }}>
                    <img src={prog.image} alt={prog.title}
                      style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .4s" }}
                      onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                      onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.72),transparent 55%)" }} />
                    <div style={{ position:"absolute", bottom:14, left:14, fontSize:"2rem" }}>{prog.icon}</div>
                    {/* Delivered badge */}
                    <div style={{ position:"absolute", top:12, right:12, background:"rgba(13,5,32,.75)", backdropFilter:"blur(6px)", borderRadius:10, padding:"6px 12px", textAlign:"center" }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>{prog.delivered}</div>
                      <div style={{ fontSize:10, color:"rgba(255,255,255,.7)", fontWeight:600 }}>{prog.unit}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", fontWeight:700, color:"#1a0533", marginBottom:".5rem" }}>{prog.title}</h3>
                    <p style={{ color:"#666", fontSize:13, lineHeight:1.78, flex:1, marginBottom:"1rem" }}>{prog.desc}</p>

                    {/* Impact tags */}
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:"1.1rem" }}>
                      {prog.impact.map(imp => (
                        <span key={imp} style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(107,45,143,.08)", color:"#6B2D8F", fontWeight:600, border:"1px solid rgba(107,45,143,.12)" }}>{imp}</span>
                      ))}
                    </div>

                    <button className="btn-primary"
                      onClick={() => setDonatingTo(prog.id)}
                      style={{ width:"100%", padding:"11px", borderRadius:10, fontSize:13, fontWeight:700 }}>
                      {prog.cta} →
                    </button>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION MODAL */}
      {donatingTo && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.72)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem" }}
          onClick={() => { if (status!=="loading") close(); }}>
          <div style={{ background:"white", borderRadius:24, padding:"2.5rem", maxWidth:480, width:"100%", maxHeight:"90vh", overflowY:"auto" }}
            onClick={e => e.stopPropagation()}>

            {status === "success" ? (
              <div style={{ textAlign:"center", padding:"1rem 0" }}>
                <div style={{ fontSize:"4rem", marginBottom:"1rem" }}>🎉</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:700, color:"#0d9e6a", marginBottom:".75rem" }}>JazakAllah Khair!</h3>
                <p style={{ color:"#555", fontSize:14, lineHeight:1.82, marginBottom:"1.25rem" }}>
                  Your donation for <strong>{prog?.title}</strong> has been received. Our team will contact you within 24 hours.
                </p>
                <div style={{ background:"#F8F6FB", borderRadius:12, padding:"1.1rem 1.25rem", fontSize:13, color:"#555", marginBottom:"1.5rem", textAlign:"left", lineHeight:1.75 }}>
                  <strong>📋 Bank Transfer Details</strong><br />
                  Bank: {BRAND.bankName}<br />
                  Account Name: {BRAND.bankTitle}<br />
                  IBAN: <span style={{ fontFamily:"monospace", fontSize:12 }}>{BRAND.bankIBAN}</span><br />
                  <span style={{ fontSize:11, color:"#888" }}>Email screenshot to {BRAND.email}</span>
                </div>
                <button className="btn-primary" onClick={close} style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>Close ✓</button>
              </div>
            ) : (
              <>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
                  <div>
                    <p style={{ fontSize:11, color:"#6B2D8F", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" }}>Startup Fund</p>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#1a0533" }}>{prog?.cta}</h3>
                  </div>
                  <button onClick={close} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:"#aaa" }}>✕</button>
                </div>

                <div style={{ background:"#F8F6FB", borderRadius:12, padding:"1rem", fontSize:13, color:"#555", marginBottom:"1.5rem", lineHeight:1.7 }}>
                  <strong>📋 Bank Transfer</strong><br />
                  {BRAND.bankName} · {BRAND.bankTitle}<br />
                  <span style={{ fontFamily:"monospace", fontSize:11 }}>{BRAND.bankIBAN}</span>
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:".9rem" }}>
                  {(["name","email","phone"] as const).map(k => (
                    <div className="input-group" key={k}>
                      <label className="input-label">{k==="name"?"Full Name *":k==="email"?"Email *":"Phone"}</label>
                      <input className="form-field"
                        type={k==="email"?"email":k==="phone"?"tel":"text"}
                        placeholder={k==="name"?"Your full name":k==="email"?"you@example.com":"+92 3XX XXXXXXX"}
                        value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} />
                    </div>
                  ))}

                  <div className="input-group">
                    <label className="input-label">Donation Amount (PKR) *</label>
                    <input className="form-field" type="number" placeholder="Enter amount in PKR"
                      value={form.amount} onChange={e=>setForm(f=>({...f,amount:e.target.value}))} />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Message (optional)</label>
                    <textarea className="form-field" rows={3} placeholder="Any message for us?"
                      value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                      style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
                  </div>

                  <button className="btn-primary" onClick={submit} disabled={status==="loading"}
                    style={{ padding:"13px", borderRadius:10, fontSize:14, fontWeight:700, marginTop:".25rem" }}>
                    {status==="loading" ? "Submitting..." : "Submit Donation →"}
                  </button>
                  <p style={{ fontSize:12, color:"#aaa", textAlign:"center" }}>Your support changes lives ❤️</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* IMPACT QUOTE */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <div style={{ maxWidth:700, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:700, color:"white", lineHeight:1.22, marginBottom:"1rem" }}>
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
    </>
  );
}
