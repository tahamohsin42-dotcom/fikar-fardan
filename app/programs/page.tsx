"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { PROGRAMS } from "@/data/content";
import Link from "next/link";

const PROCESS = [
  { step:"01", title:"Apply Online",      desc:"Fill a simple form. No complex requirements — just your commitment to learn and grow." },
  { step:"02", title:"Get Selected",      desc:"Our team reviews applications and selects deserving candidates based on need and motivation." },
  { step:"03", title:"Join the Program",  desc:"Attend training sessions, connect with mentors, and access all resources — completely free." },
  { step:"04", title:"Graduate & Earn",   desc:"Complete the program with a portfolio, certificate, and real earning potential." },
];

// CTA label per program
const CTA_LABELS: Record<string, string> = {
  "skill-dev":  "Enroll in Skill Development →",
  "startup":    "Explore Startup Fund →",
  "water":      "Donate for Community →",
  "innovation": "Join Waitlist →",
};

// Badge color/label per tag
function TagBadge({ tag }: { tag: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    "Active":         { bg:"#0d9e6a", color:"white" },
    "Under Progress": { bg:"#D4A017", color:"white" },
    "Coming Soon":    { bg:"#D4A017", color:"white" },
  };
  const s = styles[tag] ?? { bg:"#888", color:"white" };
  return (
    <span style={{ fontSize:11, padding:"4px 12px", borderRadius:50, background:s.bg, color:s.color, fontWeight:800, letterSpacing:".5px" }}>
      {tag}
    </span>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Our Programs"
        title="Four Pillars of"
        highlight="Lasting Change"
        subtitle="Every program is designed around one principle: give people skills and opportunity, not just aid."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
      />

      {/* ALL PROGRAMS */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", flexDirection:"column", gap:"4rem" }}>
          {PROGRAMS.map((p, i) => (
            <FadeSection key={p.id}>
              <div style={{ display:"grid", gap:"3.5rem", alignItems:"center" }} className={`two-col ${i%2!==0?"reverse":""}`}>

                {/* Image side */}
                <div style={{ order: i%2===0 ? 0 : 1 }} className="img-side">
                  <div style={{ borderRadius:24, overflow:"hidden", height:340, position:"relative" }}>
                    <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.55),transparent 60%)" }} />
                    <div style={{ position:"absolute", bottom:16, left:16, display:"flex", gap:8, flexWrap:"wrap" }}>
                      <TagBadge tag={p.tag} />
                      {p.duration !== "Ongoing" && p.duration !== "TBD" && (
                        <span style={{ fontSize:11, padding:"4px 12px", borderRadius:50, background:"rgba(255,255,255,.18)", color:"white", fontWeight:600, backdropFilter:"blur(6px)" }}>⏱ {p.duration}</span>
                      )}
                      {p.seats > 0 && (
                        <span style={{ fontSize:11, padding:"4px 12px", borderRadius:50, background:"rgba(107,45,143,.5)", color:"white", fontWeight:600 }}>🪑 {p.seats} seats</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div style={{ order: i%2===0 ? 1 : 0 }} className="txt-side">
                  <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{p.icon}</div>
                  <TagBadge tag={p.tag} />
                  <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, color:"#1a0533", lineHeight:1.2, margin:".75rem 0 1rem" }}>{p.title}</h2>
                  <p style={{ color:"#555", fontSize:14, lineHeight:1.92, marginBottom:"1.5rem" }}>{p.fullDesc}</p>

                  {p.tag === "Under Progress" && (
                    <div style={{ background:"rgba(212,160,23,.1)", border:"1px solid rgba(212,160,23,.3)", borderRadius:12, padding:"1rem 1.25rem", marginBottom:"1.5rem", fontSize:13, color:"#9a720d" }}>
                      🔧 <strong>This program is currently under development.</strong> Join the waitlist to be notified when it launches — spots are limited.
                    </div>
                  )}

                  {p.courses.length > 0 && p.tag !== "Under Progress" && (
                    <div style={{ marginBottom:"1.5rem" }}>
                      <p style={{ fontSize:12, fontWeight:700, color:"#888", letterSpacing:"1px", textTransform:"uppercase", marginBottom:".6rem" }}>
                        {p.id === "water" ? "Covers" : p.id === "startup" ? "Startup Types" : "Skills Covered"}
                      </p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                        {p.courses.map((c: string) => (
                          <span key={c} style={{ fontSize:12, padding:"5px 12px", borderRadius:50, background:"rgba(107,45,143,.08)", color:"#6B2D8F", fontWeight:600, border:"1px solid rgba(107,45,143,.15)" }}>{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={p.link}>
                    <button className={p.tag === "Under Progress" ? "btn-outline" : "btn-primary"} style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>
                      {CTA_LABELS[p.id] ?? "Learn More →"}
                    </button>
                  </Link>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <span className="section-label">The Process</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>From Application to Earning</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.5rem" }}>
            {PROCESS.map((step, i) => (
              <FadeSection key={step.step} delay={i*.1}>
                <div style={{ background:"#F8F6FB", borderRadius:20, padding:"2rem", border:"1px solid rgba(107,45,143,.08)", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:-10, right:-10, fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", fontWeight:700, color:"rgba(107,45,143,.05)", lineHeight:1 }}>{step.step}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.4rem", fontWeight:700, color:"#6B2D8F", marginBottom:".75rem", lineHeight:1 }}>{step.step}</div>
                  <h3 style={{ fontSize:15, fontWeight:700, color:"#1a0533", marginBottom:".6rem" }}>{step.title}</h3>
                  <p style={{ color:"#777", fontSize:13, lineHeight:1.8 }}>{step.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"4.5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:700, color:"white", marginBottom:"1rem" }}>Ready to Start Your Journey?</h2>
          <p style={{ color:"rgba(255,255,255,.6)", fontSize:15, marginBottom:"2rem" }}>Free training, real skills, real income. Applications are open.</p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/enroll"><button className="btn-primary" style={{ padding:"13px 28px", borderRadius:10, fontSize:14, fontWeight:700 }}>Enroll in Courses →</button></Link>
            <Link href="/startup"><button className="btn-ghost" style={{ padding:"13px 28px", borderRadius:10, fontSize:14 }}>Startup Fund 🚀</button></Link>
            <Link href="/donate"><button className="btn-ghost" style={{ padding:"13px 28px", borderRadius:10, fontSize:14 }}>Support Community ❤️</button></Link>
          </div>
        </FadeSection>
      </section>

      <Footer />
      <style>{`
        .two-col { display:grid; grid-template-columns:1fr 1fr; gap:3.5rem; align-items:center; }
        @media(max-width:900px){
          .two-col{ grid-template-columns:1fr!important; }
          .img-side,.txt-side{ order:0!important; }
        }
      `}</style>
    </>
  );
}
