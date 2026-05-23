"use client";
import FadeSection from "@/components/ui/FadeSection";

const focuses = ["Skill Development", "Clean Water Access", "Youth Empowerment", "Community Support"];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: "#F8F6FB", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
        {/* Visual Card */}
        <FadeSection>
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 24, padding: "3rem", color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, borderRadius: "50%", background: "rgba(212,160,23,0.15)" }} />
              <div style={{ position: "absolute", bottom: -30, left: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌟</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>Our Mission</h3>
              <p style={{ opacity: 0.84, lineHeight: 1.85, fontSize: 15 }}>
                We are a social impact organization determined to bridge the gap between potential and opportunity.
                True support is not just giving aid — it is giving people the ability to stand on their own feet.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)", marginTop: "2rem", paddingTop: "1.5rem" }}>
                {focuses.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4A017", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, opacity: 0.88 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: -20, right: -20, background: "white", borderRadius: 16, padding: "1.2rem 1.5rem", boxShadow: "0 10px 40px rgba(107,45,143,0.14)", border: "1px solid rgba(107,45,143,0.1)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#6B2D8F", fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>3,920+</div>
              <div style={{ fontSize: 12, color: "#888", fontWeight: 500, marginTop: 3 }}>Lives Impacted</div>
            </div>
          </div>
        </FadeSection>

        {/* Text */}
        <FadeSection delay={0.2}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(107,45,143,0.1)", color: "#6B2D8F", padding: "5px 14px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>
              About Us
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#1a0533", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Building a Nation of<br />
              <span style={{ color: "#6B2D8F" }}>Self-Reliant Youth</span>
            </h2>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: 15, marginBottom: "1.5rem" }}>
              We are a social impact organization determined to bridge the gap between potential and opportunity.
              Our programs focus on equipping young people with the tools they need to earn with dignity and build their own futures.
            </p>
            <p style={{ color: "#777", lineHeight: 1.9, fontSize: 14, fontStyle: "italic", borderLeft: "3px solid #D4A017", paddingLeft: "1rem", marginBottom: "2rem" }}>
              True support is not just giving aid — it is giving people the ability to stand on their own feet.
            </p>
            <blockquote style={{ background: "rgba(107,45,143,0.06)", border: "1px solid rgba(107,45,143,0.14)", borderRadius: 16, padding: "1.5rem 2rem" }}>
              <p style={{ color: "#444", lineHeight: 1.85, fontSize: 14, fontStyle: "italic", marginBottom: "1rem" }}>
                &ldquo;Many of us try to help people, but sometimes we unintentionally create dependency instead of empowerment.
                True support gives people the ability to stand on their own feet.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>T</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#333", fontSize: 14 }}>Tuaha Ibn Mohsin</div>
                  <div style={{ color: "#888", fontSize: 12 }}>Chairman, Fikar e Fardan Foundation</div>
                </div>
              </div>
            </blockquote>
          </div>
        </FadeSection>
      </div>
      <style>{`@media (max-width:900px){ .about-grid{ grid-template-columns:1fr !important; gap:2.5rem !important; } }`}</style>
    </section>
  );
}
