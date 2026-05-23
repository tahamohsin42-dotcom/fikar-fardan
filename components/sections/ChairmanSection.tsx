"use client";
import FadeSection from "@/components/ui/FadeSection";

export default function ChairmanSection() {
  return (
    <section style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", padding: "7rem 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(212,160,23,0.1)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <FadeSection>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "6rem", color: "rgba(212,160,23,0.35)", lineHeight: 0.6, marginBottom: "1.5rem" }}>&ldquo;</div>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1.15rem,2.5vw,1.75rem)",
            fontStyle: "italic", color: "rgba(255,255,255,0.88)",
            lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 400,
          }}>
            Many of us, as a nation, often try to help people, but sometimes we unintentionally create dependency
            instead of empowerment. True support is not just giving aid — it is giving people the ability to stand
            on their own feet.
            <br /><br />
            At Fikar e Fardan Foundation, our mission is to bridge this gap by equipping youth with skills,
            opportunities, and resources so they can earn with dignity and build their own future.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#D4A017,#F0C040)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#1a0533", flexShrink: 0 }}>T</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "white", fontWeight: 700, fontSize: 16 }}>Tuaha Ibn Mohsin</div>
              <div style={{ color: "rgba(212,160,23,0.8)", fontSize: 13 }}>Chairman, Fikar e Fardan Foundation</div>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
