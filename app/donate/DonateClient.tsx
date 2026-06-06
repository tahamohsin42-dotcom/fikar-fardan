"use client";
import { useState } from "react";
import { DONATION_CAUSES, BRAND } from "@/data/content";
import BankCard from "@/components/ui/BankCard";
import FadeSection from "@/components/ui/FadeSection";
import Link from "next/link";

const genReceipt = () => `FKR-${Date.now().toString(36).toUpperCase()}`;

type FormState = {
  name: string; email: string; phone: string; city: string;
  country: string; cause: string; amount: string; customAmount: string;
  donationType: string; duaName: string; message: string; consent: boolean;
};

const EMPTY: FormState = {
  name:"", email:"", phone:"", city:"", country:"Pakistan",
  cause:"General Donation", amount:"", customAmount:"",
  donationType:"Full Donation", duaName:"", message:"", consent:false,
};

export default function DonateClient() {
  const [form, setForm]         = useState<FormState>(EMPTY);
  const [errors, setErrors]     = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus]     = useState<"idle"|"loading"|"success">("idle");
  const [receiptId, setReceiptId] = useState("");
  const [selectedAmt, setSelectedAmt] = useState<number|null>(null);
  const [activeCause, setActiveCause] = useState(0);

  const set = (k: keyof FormState, v: string | boolean) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState,string>> = {};
    if (!form.name.trim())   e.name  = "Full name is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim())  e.phone = "Phone number is required";
    const amt = form.customAmount || String(selectedAmt || "");
    if (!amt || isNaN(Number(amt)) || Number(amt) <= 0) e.amount = "Enter a valid donation amount";
    if (!form.consent)       e.consent = "Please agree to the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("loading");
    const rid = genReceipt();
    setReceiptId(rid);
    const amount = Number(form.customAmount || selectedAmt || 0);
    try {
      await fetch("/api/donate", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ ...form, amount, cause: form.cause, receiptId: rid, timestamp: new Date().toISOString() }),
      });
    } catch { /* show success regardless */ }
    setStatus("success");
  };

  const amount = Number(form.customAmount || selectedAmt || 0);
  const cause  = DONATION_CAUSES[activeCause];

  // ── SUCCESS STATE ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div style={{ background:"#F8F6FB", minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
        <div style={{ maxWidth:620, width:"100%" }}>
          <FadeSection>
            <div style={{ background:"white", borderRadius:24, padding:"3rem 2.5rem", textAlign:"center", boxShadow:"0 12px 50px rgba(107,45,143,.1)", border:"1px solid rgba(107,45,143,.1)", marginBottom:"1.5rem" }}>
              <div style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg,#6B2D8F,#D4A017)", margin:"0 auto 1.5rem", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2.2rem" }}>✓</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.2rem", fontWeight:700, color:"#0d9e6a", marginBottom:".75rem" }}>
                JazakAllah Khair!
              </h2>
              <p style={{ color:"#555", fontSize:15, lineHeight:1.85, marginBottom:".5rem" }}>
                Thank you, <strong>{form.name}</strong>. Your submission has been received.
                Our team will contact you on <strong>{form.phone}</strong> within 24 hours.
              </p>
              <div style={{ display:"inline-block", background:"rgba(107,45,143,.08)", borderRadius:10, padding:"8px 18px", marginBottom:"2rem" }}>
                <span style={{ fontSize:13, color:"#6B2D8F", fontWeight:700 }}>Receipt ID: {receiptId}</span>
              </div>
              <div style={{ marginBottom:"2rem", textAlign:"left" }}>
                <BankCard />
              </div>
              <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
                <button className="btn-primary" onClick={()=>{setStatus("idle");setForm(EMPTY);setSelectedAmt(null);}}
                  style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>
                  Make Another Donation
                </button>
                <Link href="/impact">
                  <button style={{ padding:"12px 28px", borderRadius:10, fontSize:14, background:"white", border:"2px solid #6B2D8F", color:"#6B2D8F", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600 }}>
                    View Our Impact →
                  </button>
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    );
  }

  // ── FORM STATE ────────────────────────────────────────────────────────────
  return (
    <section style={{ background:"#F8F6FB", padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <FadeSection>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <span className="section-label">Make a Difference</span>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"#1a0533", marginBottom:".75rem" }}>
              Your Donation Changes Lives
            </h2>
            <p style={{ color:"#777", fontSize:15, maxWidth:520, margin:"0 auto" }}>
              Every rupee goes directly to people who need it most. Full transparency. Zero overhead.
            </p>
          </div>
        </FadeSection>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:"2.5rem", alignItems:"start" }} className="donate-grid">

          {/* LEFT — Cause selector + form */}
          <FadeSection>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>

              {/* Cause cards */}
              <div>
                <p style={{ fontSize:12, fontWeight:700, color:"#888", letterSpacing:"1px", textTransform:"uppercase", marginBottom:"1rem" }}>Select a Cause</p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:"10px" }}>
                  {DONATION_CAUSES.map((c, i) => (
                    <button key={c.id} onClick={()=>{setActiveCause(i);set("cause",c.title);setSelectedAmt(null);}}
                      style={{ background: activeCause===i ? c.color : "white", border:`2px solid ${activeCause===i ? c.color : "rgba(107,45,143,.1)"}`, borderRadius:14, padding:"12px 10px", cursor:"pointer", textAlign:"left", transition:"all .22s", fontFamily:"'Outfit',sans-serif" }}>
                      <div style={{ fontSize:"1.5rem", marginBottom:4 }}>{c.icon}</div>
                      <div style={{ fontSize:12, fontWeight:700, color: activeCause===i ? "white" : "#1a0533", lineHeight:1.3 }}>{c.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount buttons */}
              <div>
                <p style={{ fontSize:12, fontWeight:700, color:"#888", letterSpacing:"1px", textTransform:"uppercase", marginBottom:"1rem" }}>Choose Amount (PKR)</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 }}>
                  {cause.amounts.map(a => (
                    <button key={a} onClick={()=>{setSelectedAmt(a);set("customAmount","");set("amount",String(a));}}
                      className={`amount-btn ${selectedAmt===a?"active":""}`}
                      style={{ padding:"10px 18px", borderRadius:10, border:"1.5px solid #ddd", background:"white", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"'Outfit',sans-serif", color:"#444" }}>
                      {a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input className={`form-field ${errors.amount?"error":""}`} type="number" placeholder="Or enter custom amount"
                  value={form.customAmount}
                  onChange={e=>{set("customAmount",e.target.value);setSelectedAmt(null);}} />
                {errors.amount && <span className="input-error">⚠ {errors.amount}</span>}
              </div>

              {/* Donor form */}
              <div style={{ background:"white", borderRadius:20, padding:"1.75rem", border:"1px solid rgba(107,45,143,.08)", boxShadow:"0 4px 24px rgba(107,45,143,.06)" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"#1a0533", marginBottom:"1.25rem" }}>Donor Details</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:".9rem" }}>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    <div className="input-group">
                      <label className="input-label">Full Name *</label>
                      <input className={`form-field ${errors.name?"error":""}`} placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)} />
                      {errors.name && <span className="input-error">⚠ {errors.name}</span>}
                    </div>
                    <div className="input-group">
                      <label className="input-label">Email *</label>
                      <input className={`form-field ${errors.email?"error":""}`} type="email" placeholder="you@email.com" value={form.email} onChange={e=>set("email",e.target.value)} />
                      {errors.email && <span className="input-error">⚠ {errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    <div className="input-group">
                      <label className="input-label">Phone / WhatsApp *</label>
                      <input className={`form-field ${errors.phone?"error":""}`} type="tel" placeholder="+92 3XX XXXXXXX" value={form.phone} onChange={e=>set("phone",e.target.value)} />
                      {errors.phone && <span className="input-error">⚠ {errors.phone}</span>}
                    </div>
                    <div className="input-group">
                      <label className="input-label">City</label>
                      <input className="form-field" placeholder="Your city" value={form.city} onChange={e=>set("city",e.target.value)} />
                    </div>
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    <div className="input-group">
                      <label className="input-label">Donation Type</label>
                      <select className="form-field" value={form.donationType} onChange={e=>set("donationType",e.target.value)} style={{ cursor:"pointer" }}>
                        <option>Full Donation</option>
                        <option>Partial Donation</option>
                        <option>Monthly Recurring</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label className="input-label">Country</label>
                      <input className="form-field" value={form.country} onChange={e=>set("country",e.target.value)} />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Dua / Name for Prayers (optional)</label>
                    <input className="form-field" placeholder="e.g. For the health of my parents" value={form.duaName} onChange={e=>set("duaName",e.target.value)} />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Message (optional)</label>
                    <textarea className="form-field" rows={2} placeholder="Any message or special request..."
                      value={form.message} onChange={e=>set("message",e.target.value)}
                      style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
                  </div>

                  <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                    <input type="checkbox" id="consent" checked={form.consent} onChange={e=>set("consent",e.target.checked)}
                      style={{ marginTop:3, cursor:"pointer", width:16, height:16, accentColor:"#6B2D8F" }} />
                    <label htmlFor="consent" style={{ fontSize:13, color:"#555", lineHeight:1.65, cursor:"pointer" }}>
                      I confirm this donation is voluntary and I agree to Fikr Fardan Foundation&apos;s terms of use.
                    </label>
                  </div>
                  {errors.consent && <span className="input-error">⚠ {errors.consent}</span>}

                  <button className="btn-primary" onClick={submit} disabled={status==="loading"}
                    style={{ padding:"14px", borderRadius:11, fontSize:15, fontWeight:700, marginTop:".25rem" }}>
                    {status==="loading" ? "Submitting..." : `Donate${amount>0 ? ` PKR ${amount.toLocaleString()}`:""}  ❤️`}
                  </button>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* RIGHT — Bank Card + info */}
          <FadeSection delay={.15}>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem", position:"sticky", top:90 }}>
              <BankCard />

              {/* Donation summary */}
              {(amount > 0 || activeCause !== null) && (
                <div style={{ background:"white", borderRadius:18, padding:"1.5rem", border:"1px solid rgba(107,45,143,.1)", boxShadow:"0 4px 20px rgba(107,45,143,.06)" }}>
                  <p style={{ fontSize:12, fontWeight:700, color:"#888", letterSpacing:"1px", textTransform:"uppercase", marginBottom:"1rem" }}>Donation Summary</p>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:14, color:"#555" }}>Cause</span>
                    <span style={{ fontSize:14, fontWeight:700, color:"#1a0533" }}>{cause.title}</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:14, color:"#555" }}>Amount</span>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"#6B2D8F" }}>
                      {amount > 0 ? `PKR ${amount.toLocaleString()}` : "—"}
                    </span>
                  </div>
                  <div style={{ borderTop:"1px dashed #eee", paddingTop:"1rem", marginTop:".5rem" }}>
                    <p style={{ fontSize:12, color:"#888", lineHeight:1.7, fontStyle:"italic" }}>
                      100% of your donation goes directly to {cause.title.toLowerCase()}. Zero overhead.
                    </p>
                  </div>
                </div>
              )}

              {/* Trust badges */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {[
                  ["🔒","100% Secure","Faysal Bank verified"],
                  ["📋","Transparent","Full impact reports"],
                  ["✅","Official Receipt","Sent within 24 hrs"],
                  ["🤝","Trust Driven","560+ donors served"],
                ].map(([icon,title,sub]) => (
                  <div key={title} style={{ background:"white", borderRadius:14, padding:"1rem", border:"1px solid rgba(107,45,143,.08)", textAlign:"center" }}>
                    <div style={{ fontSize:"1.5rem", marginBottom:4 }}>{icon}</div>
                    <div style={{ fontSize:12, fontWeight:700, color:"#1a0533" }}>{title}</div>
                    <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .donate-grid{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}
