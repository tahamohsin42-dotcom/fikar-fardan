"use client";
import FadeSection from "@/components/ui/FadeSection";
import { COURSES } from "@/data/content";

export default function CoursesSection() {
  return (
    <section id="courses" style={{ background: "linear-gradient(135deg,#0D0520 0%,#1a0533 100%)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", background: "rgba(212,160,23,0.18)", color: "#D4A017", padding: "5px 14px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Free Courses
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
              Learn Skills That Pay
            </h2>
            <p style={{ color: "rgba(255,255,255,0.48)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
              100% free training in the skills employers and clients are paying for right now.
            </p>
          </div>
        </FadeSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(272px,1fr))", gap: "1.5rem" }}>
          {COURSES.map((c, i) => (
            <FadeSection key={c.title} delay={i * 0.07}>
              <div className="card-hover" style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(107,45,143,0.28)",
                borderRadius: 16, padding: "1.75rem", cursor: "pointer",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "white", marginBottom: "0.6rem", lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1.75, marginBottom: "0.75rem" }}>{c.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>👤 {c.students} enrolled</span>
                  <span style={{ fontSize: 11, background: "rgba(13,158,106,0.2)", color: "#4ade80", padding: "2px 8px", borderRadius: 50, fontWeight: 700 }}>FREE</span>
                </div>
                <button className="btn-primary" style={{ width: "100%", padding: "11px", borderRadius: 9, fontSize: 13, fontWeight: 700 }}>
                  Enroll Free →
                </button>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
