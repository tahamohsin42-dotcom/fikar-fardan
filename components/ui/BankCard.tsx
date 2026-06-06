"use client";
import { useState } from "react";
import { BRAND } from "@/data/content";

interface CopyState { accountNo: boolean; iban: boolean; }

export default function BankCard({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState<CopyState>({ accountNo:false, iban:false });

  const copy = async (text: string, field: keyof CopyState) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(p => ({ ...p, [field]: true }));
      setTimeout(() => setCopied(p => ({ ...p, [field]: false })), 2500);
    } catch { /* fallback */ }
  };

  const share = async () => {
    const text = `🏦 Faysal Bank Limited\n👤 ${BRAND.bankTitle}\n🏢 Branch: ${BRAND.bankBranch}\n💳 Account: ${BRAND.bankAccount}\n🌐 IBAN: ${BRAND.bankIBAN}\n\nJoin us: ${BRAND.website}`;
    if (navigator.share) {
      await navigator.share({ title:"Fikr Fardan — Bank Details", text });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Bank details copied to clipboard!");
    }
  };

  return (
    <div style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius:20, padding: compact ? "1.5rem" : "2rem", position:"relative", overflow:"hidden", boxShadow:"0 12px 50px rgba(107,45,143,.35)" }}>
      {/* Decorative orbs */}
      <div style={{ position:"absolute", top:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"rgba(212,160,23,.15)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-20, left:-20, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,.05)", pointerEvents:"none" }} />

      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.5rem" }}>
        <div>
          <p style={{ fontSize:11, color:"rgba(212,160,23,.85)", fontWeight:800, letterSpacing:"2px", textTransform:"uppercase" }}>Official Donation Account</p>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"white", marginTop:3 }}>Fikr Fardan Foundation</h3>
        </div>
        <div style={{ background:"rgba(255,255,255,.12)", borderRadius:12, padding:"8px 14px", textAlign:"center" }}>
          <div style={{ fontSize:11, color:"rgba(255,255,255,.6)", fontWeight:600 }}>Verified</div>
          <div style={{ fontSize:16 }}>🏦</div>
        </div>
      </div>

      {/* Bank details grid */}
      <div style={{ display:"grid", gap:"10px", marginBottom:"1.5rem" }}>
        {[
          ["Bank Name",      BRAND.bankName],
          ["Account Title",  BRAND.bankTitle],
          ["Branch Code",    BRAND.bankBranch],
        ].map(([label, val]) => (
          <div key={label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(255,255,255,.07)", borderRadius:10, padding:"10px 14px" }}>
            <span style={{ fontSize:12, color:"rgba(255,255,255,.5)", fontWeight:600 }}>{label}</span>
            <span style={{ fontSize:13, color:"white", fontWeight:700 }}>{val}</span>
          </div>
        ))}

        {/* Account Number with copy */}
        <div style={{ background:"rgba(212,160,23,.12)", border:"1px solid rgba(212,160,23,.3)", borderRadius:10, padding:"10px 14px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <p style={{ fontSize:11, color:"rgba(212,160,23,.75)", fontWeight:700, marginBottom:2 }}>Account Number</p>
              <p style={{ fontSize:15, color:"white", fontWeight:800, fontFamily:"monospace", letterSpacing:".5px" }}>{BRAND.bankAccount}</p>
            </div>
            <button
              onClick={() => copy(BRAND.bankAccount, "accountNo")}
              style={{ background: copied.accountNo ? "#0d9e6a" : "rgba(255,255,255,.15)", border:"none", borderRadius:8, padding:"7px 13px", color:"white", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .25s", whiteSpace:"nowrap" }}>
              {copied.accountNo ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* IBAN with copy */}
        <div style={{ background:"rgba(212,160,23,.12)", border:"1px solid rgba(212,160,23,.3)", borderRadius:10, padding:"10px 14px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:10 }}>
            <div style={{ minWidth:0 }}>
              <p style={{ fontSize:11, color:"rgba(212,160,23,.75)", fontWeight:700, marginBottom:2 }}>IBAN</p>
              <p style={{ fontSize:14, color:"white", fontWeight:800, fontFamily:"monospace", letterSpacing:".5px", wordBreak:"break-all" }}>{BRAND.bankIBAN}</p>
            </div>
            <button
              onClick={() => copy(BRAND.bankIBAN, "iban")}
              style={{ background: copied.iban ? "#0d9e6a" : "rgba(255,255,255,.15)", border:"none", borderRadius:8, padding:"7px 13px", color:"white", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .25s", flexShrink:0, whiteSpace:"nowrap" }}>
              {copied.iban ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"1.25rem" }}>
        <button onClick={share}
          style={{ background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.2)", borderRadius:10, padding:"11px", color:"white", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .25s" }}
          onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.background="rgba(255,255,255,.2)")}
          onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.background="rgba(255,255,255,.12)")}>
          🔗 Share Details
        </button>
        <a href={`https://wa.me/${BRAND.whatsapp}?text=Assalam%20o%20Alaikum!%20I%20want%20to%20donate%20to%20Fikr%20Fardan%20Foundation.`}
          target="_blank" rel="noopener noreferrer"
          style={{ background:"#25D366", borderRadius:10, padding:"11px", color:"white", fontSize:13, fontWeight:600, cursor:"pointer", textDecoration:"none", display:"flex", alignItems:"center", justifyContent:"center", gap:6, transition:"opacity .2s" }}
          onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.opacity="0.88")}
          onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.opacity="1")}>
          💬 WhatsApp
        </a>
      </div>

      {/* Verification note */}
      <div style={{ background:"rgba(255,255,255,.07)", borderRadius:10, padding:"12px 14px" }}>
        <p style={{ fontSize:12, color:"rgba(255,255,255,.65)", lineHeight:1.72, textAlign:"center" }}>
          After transfer, share your receipt on WhatsApp <strong style={{ color:"#D4A017" }}>+92 302 8848500</strong> or email <strong style={{ color:"#D4A017" }}>{BRAND.email}</strong> to receive your official donation acknowledgment.
        </p>
      </div>
    </div>
  );
}
