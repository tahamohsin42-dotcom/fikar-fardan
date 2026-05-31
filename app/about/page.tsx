import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import { BRAND, STATS } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Fikr Fardan Foundation — our mission, vision, leadership, and the story of how we're empowering Pakistani youth through skills and opportunity.",
  openGraph: {
    title:       "About Fikr Fardan Foundation",
    description: "Our mission: empower Pakistani youth with skills, not just aid.",
    url:         "https://fikar-fardan.vercel.app/about",
    images: [{ url: "https://fikar-fardan.vercel.app/og/og-about.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://fikar-fardan.vercel.app/about" },
};

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Fikr Fardan Foundation",
  url: "https://fikar-fardan.vercel.app/about",
  description: "Fikr Fardan Foundation empowers Pakistani youth through free skill development, clean water, and community welfare.",
  mainEntity: { "@type": "NGO", name: "Fikr Fardan Foundation", url: "https://fikar-fardan.vercel.app" },
};

const VALUES = [
  { icon: "🎯", title: "Empowerment Over Aid",      desc: "We give people tools to fish — not just fish. Every program builds lasting capability." },
  { icon: "🌊", title: "Dignity in Every Action",   desc: "Assistance delivered with respect. We treat every person as a partner, not a recipient." },
  { icon: "🔍", title: "Full Transparency",          desc: "Every rupee is tracked and reported. You deserve to know exactly where your support goes." },
  { icon: "🤝", title: "Community-First Design",    desc: "Programs are built with communities, not for them. Local insight drives every decision." },
  { icon: "📈", title: "Measurable Impact",         desc: "We track outcomes, not just outputs. Real income, real water access, real opportunities." },
  { icon: "♾️", title: "Self-Sustaining Change",   desc: "When aid stops, impact should continue. We build systems that outlast our involvement." },
];

const TEAM = [
  { name: "Tuaha Ibn Mohsin", role: "Chairman & Founder",         avatar: "T", bio: "Visionary leader determined to replace dependency with capability across Pakistan." },
  { name: "Programs Team",    role: "Skill Development Division", avatar: "P", bio: "Expert trainers delivering AI, design, marketing and entrepreneurship courses." },
  { name: "Field Team",       role: "Community Operations",       avatar: "F", bio: "On-ground volunteers executing water projects and community welfare programs." },
  { name: "Digital Team",     role: "LMS & Technology",           avatar: "D", bio: "Building the platform that makes free education accessible to every student in Pakistan." },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }}
      />
      <Navbar />
      <PageHero
        badge="About Us"
        title="Building a Nation of"
        highlight="Self-Reliant Youth"
        subtitle="We are not just another NGO. We are a movement that believes capability is the greatest gift you can give another human being."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
      />

      {/* MISSION BLOCK */}
      <section style={{ background: "#F8F6FB", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="two-col" style={{ alignItems: "center" }}>
            <FadeSection>
              <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 24, padding: "3rem", color: "white", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(212,160,23,.15)" }} />
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌟</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Our Mission</h2>
                <p style={{ opacity: .85, lineHeight: 1.88, fontSize: 15 }}>
                  To bridge the gap between potential and opportunity by equipping Pakistani youth with the skills, 
                  resources, and networks they need to build independent, dignified lives — without dependency on charity.
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", marginTop: "2rem", paddingTop: "1.5rem" }}>
                  {["Free Skill Training", "Clean Water Access", "Youth Empowerment", "Startup Support", "Orphan Care"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4A017", flexShrink: 0 }} />
                      <span style={{ fontSize: 14, opacity: .88 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={.2}>
              <div>
                <span className="section-label">Who We Are</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "#1a0533", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                  Turning Potential<br />
                  <span style={{ color: "#6B2D8F" }}>Into Opportunity</span>
                </h2>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.92, marginBottom: "1.25rem" }}>
                  Founded in 2021, {BRAND.name} was born from a simple but powerful observation: most aid creates 
                  dependency. We set out to do the opposite — to build programs that leave people more capable, 
                  more confident, and more economically independent than they were before.
                </p>
                <p style={{ color: "#777", fontSize: 14, lineHeight: 1.92, marginBottom: "1.75rem" }}>
                  Today we run free skill-development courses, clean water installations, orphan support programs, 
                  and startup incubation — all designed around the principle that the best form of help is the kind 
                  that eventually makes itself unnecessary.
                </p>
                <blockquote style={{ background: "rgba(107,45,143,.06)", border: "1px solid rgba(107,45,143,.14)", borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                  <p style={{ color: "#444", fontSize: 14, fontStyle: "italic", lineHeight: 1.82, marginBottom: ".75rem" }}>
                    &ldquo;True support is not just giving aid — it is giving people the ability to stand on their own feet.&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700 }}>T</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#333", fontSize: 13 }}>Tuaha Ibn Mohsin</div>
                      <div style={{ color: "#888", fontSize: 12 }}>Chairman, {BRAND.name}</div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0D0520", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeSection><p style={{ textAlign: "center", fontSize: 11, color: "#D4A017", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2.5rem", fontWeight: 700 }}>Impact by the numbers</p></FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.25rem" }}>
            {STATS.map((s, i) => (
              <FadeSection key={s.label} delay={i * .1}>
                <div style={{ background: "linear-gradient(135deg,rgba(107,45,143,.14),rgba(26,5,51,.28))", border: "1px solid rgba(107,45,143,.22)", borderRadius: 16, padding: "1.75rem 1.25rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.6rem", fontWeight: 700, color: "#D4A017", lineHeight: 1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ color: "rgba(255,255,255,.5)", fontSize: 12, marginTop: 7, fontWeight: 500 }}>{s.label}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "white", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Our Values</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#1a0533" }}>What We Stand For</h2>
            </div>
          </FadeSection>
          <div className="three-col">
            {VALUES.map((v, i) => (
              <FadeSection key={v.title} delay={i * .1}>
                <div style={{ background: "#F8F6FB", borderRadius: 18, padding: "1.75rem", border: "1px solid rgba(107,45,143,.08)", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".85rem" }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>{v.title}</h3>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.82 }}>{v.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#F8F6FB", padding: "5.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Leadership</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#1a0533" }}>The People Behind the Mission</h2>
            </div>
          </FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.5rem" }}>
            {TEAM.map((m, i) => (
              <FadeSection key={m.name} delay={i * .1}>
                <div className="card-hover" style={{ background: "white", borderRadius: 20, padding: "2rem", textAlign: "center", border: "1px solid rgba(107,45,143,.08)" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#6B2D8F,#D4A017)", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 700, color: "white" }}>{m.avatar}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".25rem" }}>{m.name}</h3>
                  <p style={{ fontSize: 12, color: "#6B2D8F", fontWeight: 700, marginBottom: ".75rem", letterSpacing: ".5px" }}>{m.role}</p>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.75 }}>{m.bio}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <FadeSection>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Join the Movement</h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, marginBottom: "2rem" }}>Whether you donate, enroll, or volunteer — you&apos;re part of the change.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/donate"><button className="btn-primary" style={{ padding: "13px 30px", borderRadius: 10, fontSize: 14, fontWeight: 700 }}>Donate Now ❤️</button></Link>
            <Link href="/enroll"><button className="btn-ghost" style={{ padding: "13px 30px", borderRadius: 10, fontSize: 14 }}>Enroll Free →</button></Link>
            <Link href="/volunteer"><button className="btn-ghost" style={{ padding: "13px 30px", borderRadius: 10, fontSize: 14 }}>Volunteer 🤝</button></Link>
          </div>
        </FadeSection>
      </section>

      <Footer />
      <style>{`.two-col{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;}.three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}@media(max-width:900px){.two-col,.three-col{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
