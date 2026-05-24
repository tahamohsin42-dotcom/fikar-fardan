import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { BRAND, STATS } from "@/data/content";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us", description: "Learn about Fikr Fardan Foundation's mission, vision, and the team behind Pakistan's youth empowerment movement." };

const VALUES = [
  { icon: "🌱", title: "Empowerment over Aid", desc: "We build capacity, not dependency. Every program is designed to give people the tools to stand on their own." },
  { icon: "🔍", title: "Radical Transparency", desc: "Every rupee is tracked and reported. Our donors deserve to know exactly how their money creates impact." },
  { icon: "🤝", title: "Community First", desc: "Local knowledge drives our programs. We listen before we act, and we act with the community, not for them." },
  { icon: "🚀", title: "Scalable Solutions", desc: "We don't just solve today's problems. We build systems that work at scale and create lasting generational change." },
];

const TEAM = [
  { name: "Tuaha Ibn Mohsin", role: "Chairman & Founder", initial: "T", color: "#6B2D8F" },
  { name: "Programs Lead",     role: "Head of Skill Development", initial: "P", color: "#0d9e6a" },
  { name: "Outreach Director", role: "Community & Volunteer Lead", initial: "O", color: "#D4A017" },
  { name: "Tech Lead",         role: "Digital Transformation", initial: "T", color: "#0e7fb0" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero badge="Our Story" title="Building a Nation of" highlight="Self-Reliant Youth" subtitle="We believe that real change doesn't come from charity — it comes from capability. Every program we run is built on this principle." />

      {/* MISSION */}
      <section style={{ background: "#F8F6FB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col">
          <FadeSection>
            <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 24, padding: "2.5rem", color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(212,160,23,.15)" }} />
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌟</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.7rem", fontWeight: 600, marginBottom: ".85rem" }}>Our Mission</h3>
              <p style={{ opacity: .85, lineHeight: 1.88, fontSize: 14 }}>
                To bridge the gap between potential and opportunity by equipping Pakistan&apos;s youth with skills, resources, and networks that create sustainable livelihoods and confident futures.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", marginTop: "1.75rem", paddingTop: "1.5rem" }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: ".75rem", color: "#D4A017" }}>Our Focus Areas</h4>
                {["Skill Development & Training","Clean Water & Sanitation","Youth Entrepreneurship","Community Welfare"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4A017", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, opacity: .88 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
          <FadeSection delay={0.2}>
            <span className="section-label">About Us</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)", fontWeight: 700, color: "#1a0533", lineHeight: 1.22, marginBottom: "1.25rem" }}>
              Why We Started<br /><span style={{ color: "#6B2D8F" }}>{BRAND.name}</span>
            </h2>
            <p style={{ color: "#555", lineHeight: 1.92, fontSize: 14, marginBottom: "1.25rem" }}>
              Founded by Tuaha Ibn Mohsin, {BRAND.name} was born from a simple but powerful observation: Pakistan has no shortage of talented, hardworking youth — only a shortage of structured opportunity.
            </p>
            <p style={{ color: "#666", lineHeight: 1.92, fontSize: 14, marginBottom: "1.5rem" }}>
              We watched as aid organizations provided temporary relief that created long-term dependency. We decided to build something different — a platform that turns help into capability.
            </p>
            <blockquote style={{ background: "rgba(107,45,143,.06)", border: "1px solid rgba(107,45,143,.14)", borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: "#444", fontSize: 14, fontStyle: "italic", lineHeight: 1.85, marginBottom: ".75rem" }}>
                &ldquo;Many of us try to help people, but sometimes we unintentionally create dependency instead of empowerment. True support gives people the ability to stand on their own feet.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>T</div>
                <div><div style={{ fontWeight: 700, color: "#333", fontSize: 13 }}>Tuaha Ibn Mohsin</div><div style={{ color: "#888", fontSize: 11 }}>Chairman, {BRAND.name}</div></div>
              </div>
            </blockquote>
          </FadeSection>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0D0520", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.25rem" }}>
            {STATS.map((s,i) => (
              <FadeSection key={s.label} delay={i*.1}>
                <div style={{ background: "rgba(107,45,143,.14)", border: "1px solid rgba(107,45,143,.22)", borderRadius: 16, padding: "1.75rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.4rem", fontWeight: 700, color: "#D4A017", lineHeight: 1 }}><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
                  <div style={{ color: "rgba(255,255,255,.5)", fontSize: 12, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeSection><div style={{ textAlign: "center", marginBottom: "3rem" }}><span className="section-label">Our Values</span><h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)", fontWeight: 700, color: "#1a0533" }}>What We Stand For</h2></div></FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem" }}>
            {VALUES.map((v,i) => (
              <FadeSection key={v.title} delay={i*.1}>
                <div className="card-hover" style={{ background: "#F8F6FB", borderRadius: 18, padding: "2rem", border: "1px solid rgba(107,45,143,.08)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a0533", marginBottom: ".6rem" }}>{v.title}</h3>
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#F8F6FB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeSection><div style={{ textAlign: "center", marginBottom: "3rem" }}><span className="section-label">The Team</span><h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)", fontWeight: 700, color: "#1a0533" }}>People Behind the Mission</h2></div></FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem" }}>
            {TEAM.map((m,i) => (
              <FadeSection key={m.name} delay={i*.1}>
                <div style={{ background: "white", borderRadius: 18, padding: "2rem 1.5rem", textAlign: "center", border: "1px solid rgba(107,45,143,.08)", boxShadow: "0 4px 20px rgba(0,0,0,.04)" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg,${m.color},${m.color}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, color: "white", margin: "0 auto 1rem" }}>{m.initial}</div>
                  <div style={{ fontWeight: 700, color: "#1a0533", fontSize: 15, marginBottom: 4 }}>{m.name}</div>
                  <div style={{ color: "#888", fontSize: 12 }}>{m.role}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", padding: "4.5rem 1.5rem", textAlign: "center" }}>
        <FadeSection>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Ready to Make a Difference?</h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, marginBottom: "2rem" }}>Join our mission as a donor, student, or volunteer.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/donate"><button className="btn-primary" style={{ background: "rgba(255,255,255,.15)", border: "1.5px solid rgba(255,255,255,.5)", padding: "12px 28px", borderRadius: 10, fontSize: 14 }}>Donate Now ❤️</button></Link>
            <Link href="/volunteer"><button className="btn-ghost" style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14 }}>Volunteer With Us →</button></Link>
          </div>
        </FadeSection>
      </section>
      <Footer />
    </>
  );
}
