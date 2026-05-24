"use client";
import { useState } from "react";
import FadeSection from "@/components/ui/FadeSection";
import { DONATION_CAUSES, BRAND } from "@/data/content";

interface FormData { name: string; email: string; phone: string; message: string; }
type Stage = "select" | "form" | "receipt";

export default function DonateClient() {
  const [activeCause, setActiveCause] = useState(0);
  const [selectedAmt, setSelectedAmt] = useState<number | null>(null);
  const [customAmt, setCustomAmt] = useState("");
  const [stage, setStage] = useState<Stage>("select");
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [receiptId, setReceiptId] = useState("");

  const cause = DONATION_CAUSES[activeCause];
  const amount = selectedAmt || Number(customAmt) || 0;

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10) e.phone = "Valid phone required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    if (!amount || amount < 1) { alert("Please select or enter a donation amount."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amount, cause: cause.title }),
      });
      const data = await res.json();
      if (data.success) { setReceiptId(data.id); setStage("receipt"); }
      else alert(data.error || "Something went wrong. Please try again.");
    } catch { alert("Network error. Please try again."); }
    setLoading(false);
  }

  if (stage === "receipt") return (
    <section style={{ background: "#F8F6FB", padding: "5rem 1.5rem", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", width: "100%" }}>
        <div className="receipt-pop" style={{ background: "white", borderRadius: 24, padding: "3rem", textAlign: "center", boxShadow: "0 20px 60px rgba(107,45,143,.15)", border: "1px solid rgba(107,45,143,.12)" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>JazakAllah Khair!</h2>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.8, marginBottom: "1.75rem" }}>Your donation of <strong style={{ color: "#6B2D8F" }}>PKR {amount.toLocaleString()}</strong> for <strong>{cause.title}</strong> has been received. Please complete the transfer to the bank account below.</p>

          <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 16, padding: "1.75rem", color: "white", marginBottom: "1.5rem", textAlign: "left" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.5)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>Bank Transfer Details</p>
            {[["Bank", BRAND.bankName],["Account Title", BRAND.bankTitle],["Account #", BRAND.bankAccount],["IBAN", BRAND.bankIBAN],["Amount", `PKR ${amount.toLocaleString()}`],["Reference", `FKR-${receiptId.toUpperCase()}`]].map(([k,v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                <span style={{ fontSize: 12, opacity: .65 }}>{k}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(13,158,106,.08)", border: "1px solid rgba(13,158,106,.25)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem", textAlign: "left" }}>
            <p style={{ fontSize: 13, color: "#0d9e6a", lineHeight: 1.75 }}>✅ After transfer, WhatsApp your receipt to <strong>+92 302 8848500</strong> for confirmation. Your donation ID is <strong>FKR-{receiptId.toUpperCase()}</strong>.</p>
          </div>
          <button className="btn-primary" style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14 }} onClick={() => { setStage("select"); setSelectedAmt(null); setCustomAmt(""); setForm({ name:"",email:"",phone:"",message:"" }); }}>
            Make Another Donation
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <section style={{ background: "#F8F6FB", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "2rem", alignItems: "start" }} className="donate-grid">

          {/* Causes */}
          <div>
            <FadeSection>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a0533", marginBottom: "1.25rem" }}>Choose a Cause</h2>
            </FadeSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {DONATION_CAUSES.map((c, ci) => (
                <FadeSection key={c.id} delay={ci*.06}>
                  <div onClick={() => { setActiveCause(ci); setSelectedAmt(null); setCustomAmt(""); }}
                    style={{ background: activeCause===ci?"white":"transparent", border: activeCause===ci?`2px solid ${c.color}`:"2px solid transparent", borderRadius: 16, padding: "1.25rem 1.5rem", cursor: "pointer", transition: "all .25s", boxShadow: activeCause===ci?"0 8px 30px rgba(107,45,143,.12)":"none" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ fontSize: "1.75rem", lineHeight: 1, flexShrink: 0 }}>{c.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a0533" }}>{c.title}</h3>
                          {activeCause===ci && <span className="badge badge-purple">Selected</span>}
                        </div>
                        <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: ".75rem" }}>{c.desc}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {c.amounts.map(a => (
                            <button key={a} onClick={e=>{e.stopPropagation();setActiveCause(ci);setSelectedAmt(a);setCustomAmt("");}}
                              className={`amount-btn ${selectedAmt===a&&activeCause===ci?"active":""}`}
                              style={{ padding: "5px 12px", borderRadius: 7, fontSize: 12, fontWeight: 600, border: "1.5px solid #ddd", background: "white", color: "#555" }}>
                              {a.toLocaleString()} PKR
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div style={{ position: "sticky", top: 90 }}>
            <div style={{ background: "white", borderRadius: 20, padding: "2rem", boxShadow: "0 8px 40px rgba(107,45,143,.12)", border: "1px solid rgba(107,45,143,.1)" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a0533", marginBottom: ".25rem" }}>Donation Details</h3>
              <p style={{ fontSize: 12, color: "#888", marginBottom: "1.5rem" }}>Cause: <strong style={{ color: "#6B2D8F" }}>{cause.title}</strong></p>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#444", display: "block", marginBottom: 5 }}>Custom Amount (PKR)</label>
                <input className={`form-field ${!amount&&customAmt===''?"":"" }`} type="number" value={customAmt} placeholder="Or enter custom amount"
                  onChange={e=>{setCustomAmt(e.target.value);setSelectedAmt(null);}} />
              </div>

              {amount > 0 && (
                <div style={{ background: "rgba(107,45,143,.07)", border: "1px solid rgba(107,45,143,.2)", borderRadius: 10, padding: "10px 14px", marginBottom: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#555" }}>Total Donation</span>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: "#6B2D8F" }}>PKR {amount.toLocaleString()}</span>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {(["name","email","phone"] as const).map(f => (
                  <div key={f} className="input-group">
                    <label className="input-label">{f==="name"?"Full Name":f==="email"?"Email Address":"Phone Number"}</label>
                    <input className={`form-field ${errors[f]?"error":""}`} value={form[f]} type={f==="email"?"email":f==="phone"?"tel":"text"}
                      placeholder={f==="name"?"Muhammad Ali":f==="email"?"email@example.com":"+92 3XX XXXXXXX"}
                      onChange={e=>setForm(prev=>({...prev,[f]:e.target.value}))} />
                    {errors[f] && <span className="input-error">{errors[f]}</span>}
                  </div>
                ))}
                <div className="input-group">
                  <label className="input-label">Message (Optional)</label>
                  <textarea className="form-field" rows={2} value={form.message} placeholder="Any specific instructions..." onChange={e=>setForm(prev=>({...prev,message:e.target.value}))} />
                </div>
              </div>

              <button className="btn-primary" disabled={loading} onClick={handleSubmit}
                style={{ width: "100%", padding: "13px", borderRadius: 12, fontSize: 15, marginTop: "1.25rem" }}>
                {loading ? "Processing..." : `Donate ${amount ? "PKR " + amount.toLocaleString() : "Now"} ❤️`}
              </button>
              <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: ".75rem" }}>🔒 Bank details shown after submission</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:800px){.donate-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
