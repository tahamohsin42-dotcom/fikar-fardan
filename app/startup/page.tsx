"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import Link from "next/link";
import { STARTUP_PROGRAMS } from "@/data/content";

export default function StartupPage() {
  const [donatingTo, setDonatingTo] = useState<string | null>(null);
  const [form, setForm] = useState({ name:"", email:"", phone:"", amount:"", message:"", screenshot:null as File|null });
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");

  const submit = async () => {
    if (!form.name || !form.email || !form.amount) return;
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("success");
  };

  const pct = (raised: number, goal: number) => Math.min(100, Math.round((raised / goal) * 100));

  return (
    <>
      <Navbar />
      <PageHero
        badge="Startup Fund"
        title="Help Deserving People"
        highlight="Become Self-Reliant"
        subtitle="Your donation doesn't just give aid — it gives someone a business, an income, and dignity for life. Opportunity, not dependency."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
      />

      {/* PHILOSOPHY */}
      <section style={{ background: "#F8F6FB", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <FadeSection>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                ["💡", "Give Opportunity", "Not Dependency"],
                ["🔄", "Transform Support", "Into Sustainable Livelihood"],
                ["🏆", "Your Donation Creates", "Dignity & Independence"],
              ].map(([icon, line1, line2]) => (
                <div key={line1} style={{ background: "white", borderRadius: 16, padding: "1.5rem 2rem", border: "1px solid rgba(107,45,143,.1)", textAlign: "center", minWidth: 200 }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a0533", lineHeight: 1.3 }}>{line1}<br /><span style={{ color: "#6B2D8F" }}>{line2}</span></div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">11 Active Programs</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#1a0533" }}>Choose a Life to Change</h2>
            </div>
          </FadeSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.75rem" }}>
            {STARTUP_PROGRAMS.map((prog, i) => {
              const p = pct(prog.raised, prog.goal);
              return (
                <FadeSection key={prog.id} delay={i * .05}>
                  <div className="card-hover" style={{ background: "#F8F6FB", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(107,45,143,.08)", height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* Image */}
                    <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                      <img src={prog.image} alt={prog.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(13,5,32,.7),transparent 55%)" }} />
                      <div style={{ position: "absolute", bottom: 14, left: 14, fontSize: "2rem" }}>{prog.icon}</div>
                    </div>
                    {/* Content */}
                    <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>{prog.title}</h3>
                      <p style={{ color: "#666", fontSize: 13, lineHeight: 1.78, flex: 1, marginBottom: "1rem" }}>{prog.desc}</p>

                      {/* Impact tags */}
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1rem" }}>
                        {prog.impact.map(imp => (
                          <span key={imp} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 50, background: "rgba(107,45,143,.08)", color: "#6B2D8F", fontWeight: 600 }}>{imp}</span>
                        ))}
                      </div>

                      {/* Progress */}
                      <div style={{ marginBottom: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
                          <span style={{ color: "#888" }}>Raised: PKR {prog.raised.toLocaleString()}</span>
                          <span style={{ color: "#6B2D8F", fontWeight: 700 }}>{p}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${p}%` }} />
                        </div>
                        <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>Goal: PKR {prog.goal.toLocaleString()}</div>
                      </div>

                      <button className="btn-primary" onClick={() => setDonatingTo(prog.id)}
                        style={{ width: "100%", padding: "11px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>
                        {prog.cta} →
                      </button>
                    </div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* DONATION MODAL */}
      {donatingTo && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}
          onClick={() => { if (status !== "loading") { setDonatingTo(null); setStatus("idle"); setForm({ name:"", email:"", phone:"", amount:"", message:"", screenshot:null }); } }}>
          <div style={{ background: "white", borderRadius: 24, padding: "2.5rem", maxWidth: 480, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={e => e.stopPropagation()}>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#0d9e6a", marginBottom: ".75rem" }}>JazakAllah Khair!</h3>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8, marginBottom: ".75rem" }}>
                  Your donation submission has been received. Our team will verify and process it within 24 hours.
                </p>
                <div style={{ background: "#F8F6FB", borderRadius: 12, padding: "1rem", fontSize: 13, color: "#555", marginBottom: "1.5rem", textAlign: "left" }}>
                  <strong>📋 Bank Transfer Details:</strong><br />
                  Bank: Meezan Bank<br />
                  Account: Fikr Fardan Foundation<br />
                  IBAN: PK36MEZN0003180106685083<br />
                  <span style={{ fontSize: 11, color: "#888" }}>Send your payment screenshot to fikrfardan@gmail.com</span>
                </div>
                <button className="btn-primary" onClick={() => { setDonatingTo(null); setStatus("idle"); setForm({ name:"", email:"", phone:"", amount:"", message:"", screenshot:null }); }}
                  style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14 }}>Close</button>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a0533" }}>
                    {STARTUP_PROGRAMS.find(p => p.id === donatingTo)?.cta ?? "Donate"}
                  </h3>
                  <button onClick={() => setDonatingTo(null)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#888" }}>✕</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[["Full Name *","name","text","Your full name"],["Email *","email","email","you@example.com"],["Phone","phone","tel","+92 3XX XXXXXXX"]].map(([label,k,type,ph])=>(
                    <div className="input-group" key={k}>
                      <label className="input-label">{label}</label>
                      <input className="form-field" type={type} placeholder={ph}
                        value={(form as unknown as Record<string,string>)[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} />
                    </div>
                  ))}
                  <div className="input-group">
                    <label className="input-label">Donation Amount (PKR) *</label>
                    <input className="form-field" type="number" placeholder="Enter amount" value={form.amount} onChange={e => setForm(f => ({...f,amount:e.target.value}))} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Message (optional)</label>
                    <textarea className="form-field" rows={3} placeholder="Any message for us..."
                      value={form.message} onChange={e => setForm(f => ({...f,message:e.target.value}))}
                      style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Payment Screenshot</label>
                    <input type="file" accept="image/*" className="form-field"
                      onChange={e => setForm(f => ({...f,screenshot:e.target.files?.[0]??null}))} />
                    <span className="input-error" style={{ color: "#888" }}>Upload after bank transfer</span>
                  </div>
                  <button className="btn-primary" onClick={submit} disabled={status==="loading"}
                    style={{ padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 700 }}>
                    {status==="loading" ? "Submitting..." : "Submit Donation →"}
                  </button>
                  <p style={{ fontSize: 12, color: "#888", textAlign: "center" }}>Your support changes lives. JazakAllah Khair ❤️</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:700, color:"white", marginBottom:"1rem" }}>
            Every Rupee Creates a Business
          </h2>
          <p style={{ color:"rgba(255,255,255,.65)", fontSize:15, marginBottom:"2rem" }}>
            Small funding. Life-changing impact. Sustainable dignity.
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/donate"><button className="btn-primary" style={{ padding:"14px 32px", borderRadius:12, fontSize:15, fontWeight:700 }}>Donate Now ❤️</button></Link>
            <Link href="/impact"><button className="btn-ghost" style={{ padding:"14px 32px", borderRadius:12, fontSize:14 }}>See Impact Stories →</button></Link>
          </div>
        </FadeSection>
      </section>

      <Footer />
    </>
  );
}
