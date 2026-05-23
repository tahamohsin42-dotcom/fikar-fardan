"use client";
import { useState } from "react";
import FadeSection from "@/components/ui/FadeSection";
import { DONATION_CAUSES } from "@/data/content";

export default function DonationSection() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [custom, setCustom]   = useState<Record<number, string>>({});

  return (
    <section id="donate" style={{ background: "#F8F6FB", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", background: "rgba(107,45,143,0.1)", color: "#6B2D8F", padding: "5px 14px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Donate
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#1a0533", marginBottom: "0.75rem" }}>
              Your Donation Changes Lives
            </h2>
            <p style={{ color: "#777", fontSize: 15 }}>Every rupee goes directly to people who need it most.</p>
          </div>
        </FadeSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
          {DONATION_CAUSES.map((cause, ci) => {
            const activeAmt = selected[ci];
            const customVal = custom[ci] || "";
            const displayAmt = activeAmt || customVal;
            return (
              <FadeSection key={cause.title} delay={ci * 0.07}>
                <div className="donate-card" style={{
                  background: "white", borderRadius: 20, padding: "1.75rem",
                  border: "2px solid rgba(107,45,143,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                  transition: "border-color 0.25s ease",
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = cause.color + "44")}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(107,45,143,0.08)")}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: "1rem" }}>
                    <div style={{ fontSize: "2rem", lineHeight: 1 }}>{cause.icon}</div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a0533", marginBottom: 4 }}>{cause.title}</h3>
                      <p style={{ fontSize: 12, color: "#888", lineHeight: 1.65 }}>{cause.desc}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginBottom: "1rem", flexWrap: "wrap" }}>
                    {cause.amounts.map(amt => (
                      <button key={amt}
                        className={`amount-btn ${activeAmt === amt ? "active" : ""}`}
                        onClick={() => setSelected(s => ({ ...s, [ci]: amt }))}
                        style={{
                          padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                          border: "1.5px solid #ddd", background: "white", cursor: "pointer",
                          color: "#444", fontFamily: "'Outfit',sans-serif",
                        }}>
                        {amt.toLocaleString()} PKR
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount (PKR)"
                    value={customVal}
                    onChange={e => {
                      setCustom(c => ({ ...c, [ci]: e.target.value }));
                      setSelected(s => ({ ...s, [ci]: 0 }));
                    }}
                    style={{
                      width: "100%", padding: "9px 14px", borderRadius: 8,
                      border: "1.5px solid #eee", fontSize: 13, marginBottom: "1rem",
                      fontFamily: "'Outfit',sans-serif", color: "#333", background: "#fafaf8",
                      outline: "none",
                    }}
                  />
                  <button className="btn-primary" style={{ width: "100%", padding: 12, borderRadius: 10, fontSize: 14, fontWeight: 700 }}>
                    Donate {displayAmt ? `${Number(displayAmt).toLocaleString()} PKR` : "Now"} ❤️
                  </button>
                </div>
              </FadeSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
