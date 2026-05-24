"use client";
import FadeSection from "@/components/ui/FadeSection";
import { PROGRAMS } from "@/data/content";

export default function ProgramsSection() {
  return (
    <section id="programs" style={{ background: "white", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", background: "rgba(107,45,143,0.1)", color: "#6B2D8F", padding: "5px 14px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Core Programs
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#1a0533" }}>
              How We Create Impact
            </h2>
          </div>
        </FadeSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))", gap: "1.5rem" }}>
          {PROGRAMS.map((p, i) => (
            <FadeSection key={p.title} delay={i * 0.1}>
              <div style={{
                background: "#F8F6FB", borderRadius: 20, padding: "2rem",
                border: "1px solid rgba(107,45,143,0.1)", position: "relative", overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {p.tag === "Coming Soon" && (
                  <div style={{ position: "absolute", top: 14, right: 14, background: "#D4A017", color: "white", fontSize: 10, padding: "3px 10px", borderRadius: 50, fontWeight: 800, letterSpacing: "1px" }}>SOON</div>
                )}
                <div style={{ fontSize: "2.4rem", marginBottom: "1.25rem", display: "inline-block", transition: "transform 0.3s ease" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a0533", marginBottom: "0.7rem" }}>{p.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.82 }}><span>{p.shortDesc}</span></p>
                <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.tag === "Active" ? "#0d9e6a" : "#D4A017" }} />
                  <span style={{ fontSize: 12, color: p.tag === "Active" ? "#0d9e6a" : "#D4A017", fontWeight: 700 }}>{p.tag}</span>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
