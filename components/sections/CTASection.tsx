"use client";
import FadeSection from "@/components/ui/FadeSection";

export default function CTASection() {
  return (
    <section style={{ background: "white", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <FadeSection>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, color: "#1a0533", lineHeight: 1.18, marginBottom: "1rem" }}>
            Be the Reason<br />
            <span style={{ color: "#6B2D8F" }}>Someone&apos;s Life Changes</span>
          </h2>
          <p style={{ color: "#777", fontSize: 16, marginBottom: "2.5rem", lineHeight: 1.75 }}>
            Join thousands building a self-reliant future.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#donate">
              <button className="btn-primary" style={{ padding: "15px 36px", borderRadius: 12, fontSize: 15, fontWeight: 700 }}>
                Donate Now ❤️
              </button>
            </a>
            <a href="#courses">
              <button style={{
                padding: "15px 36px", borderRadius: 12, fontSize: 15, fontWeight: 700,
                background: "transparent", border: "2px solid #6B2D8F", color: "#6B2D8F",
                cursor: "pointer", transition: "all 0.25s", fontFamily: "'Outfit',sans-serif",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#6B2D8F"; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#6B2D8F"; }}
              >
                Enroll Today →
              </button>
            </a>
            <a href="mailto:info@fikarfardan.org">
              <button style={{
                padding: "15px 36px", borderRadius: 12, fontSize: 15, fontWeight: 600,
                background: "#F8F6FB", border: "1px solid #e8e4f0", color: "#555",
                cursor: "pointer", fontFamily: "'Outfit',sans-serif",
              }}>
                Become a Volunteer 🤝
              </button>
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
