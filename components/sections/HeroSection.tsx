"use client";

export default function HeroSection() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    color: i % 2 === 0 ? "#D4A017" : "#8B4DB8",
    opacity: Math.random() * 0.5 + 0.1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    dur: 3 + Math.random() * 4,
  }));

  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #0D0520 0%, #1a0533 45%, #0D1533 100%)",
      display: "flex", alignItems: "center",
    }}>
      {/* Orbs */}
      <div style={{ position: "absolute", top: "12%",  left:  "4%",  width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,45,143,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "4%",  width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",  pointerEvents: "none" }} />

      {/* Particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute", pointerEvents: "none",
          width: p.size, height: p.size, borderRadius: "50%",
          background: p.color, opacity: p.opacity,
          top: `${p.top}%`, left: `${p.left}%`,
          animation: `float ${p.dur}s ease-in-out infinite`,
          animationDelay: `${p.delay}s`,
        }} />
      ))}

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", paddingTop: 100, width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 800 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,45,143,0.22)", border: "1px solid rgba(107,45,143,0.5)", borderRadius: 50, padding: "6px 18px", marginBottom: "2rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4A017", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#D4A017", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
              Social Impact · Skill Development · Youth Empowerment
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,7vw,5.8rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginBottom: "1.5rem" }}>
            Fikar e Fardan<br />
            <span style={{ background: "linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Foundation
            </span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,0.68)", lineHeight: 1.85, maxWidth: 600, marginBottom: "2.5rem", fontWeight: 300 }}>
            Empowering Youth Through Skills, Opportunity &amp; Impact —{" "}
            <em style={{ color: "rgba(255,255,255,0.42)" }}>because real change happens when help turns into capability.</em>
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#courses">
              <button className="btn-primary" style={{ padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
                Enroll in Courses →
              </button>
            </a>
            <a href="#donate">
              <button className="btn-ghost" style={{ padding: "14px 32px", borderRadius: 10, fontSize: 15 }}>
                Donate Now ♥
              </button>
            </a>
            <a href="#programs">
              <button style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.42)", cursor: "pointer", fontSize: 14, padding: "14px 16px", fontFamily: "'Outfit',sans-serif" }}>
                Explore Programs ↓
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
        <span style={{ fontSize: 10, color: "white", letterSpacing: "2.5px", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, white, transparent)" }} />
      </div>
    </section>
  );
}
