"use client";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FadeSection from "@/components/ui/FadeSection";
import { STATS } from "@/data/content";

export default function StatsSection() {
  return (
    <section style={{ background: "#0D0520", padding: "5rem 2rem", borderBottom: "1px solid rgba(107,45,143,0.2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeSection>
          <p style={{ textAlign: "center", fontSize: 11, color: "#D4A017", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "3rem", fontWeight: 700 }}>
            Real impact created by real people.
          </p>
        </FadeSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.5rem" }}>
          {STATS.map((s, i) => (
            <FadeSection key={s.label} delay={i * 0.1}>
              <div style={{
                background: "linear-gradient(135deg,rgba(107,45,143,0.14),rgba(26,5,51,0.28))",
                border: "1px solid rgba(107,45,143,0.22)",
                borderRadius: 16, padding: "2rem 1.5rem", textAlign: "center",
                transition: "transform 0.3s ease", cursor: "default",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.8rem", fontWeight: 700, color: "#D4A017", lineHeight: 1 }}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 8, fontWeight: 500, letterSpacing: "0.4px" }}>{s.label}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
