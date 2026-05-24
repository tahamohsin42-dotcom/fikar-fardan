"use client";
import Link from "next/link";
import FadeSection from "@/components/ui/FadeSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS, PROGRAMS, COURSES, DONATION_CAUSES, BRAND, IMPACT_STORIES } from "@/data/content";

const HERO_IMG = "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=80";

export default function HomeClient() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i, size: Math.random()*2.5+1,
    color: i%2===0?"#D4A017":"#8B4DB8",
    op: Math.random()*.45+.1,
    top: Math.random()*100, left: Math.random()*100,
    delay: Math.random()*4, dur: 3+Math.random()*4,
  }));

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", alignItems:"center" }}>
        {/* bg image */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${HERO_IMG})`, backgroundSize:"cover", backgroundPosition:"center top", filter:"brightness(.22)" }} />
        {/* overlay gradient */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(13,5,32,.96) 0%,rgba(26,5,51,.88) 55%,rgba(13,21,51,.82) 100%)" }} />
        {/* orbs */}
        <div style={{ position:"absolute", top:"10%", left:"3%", width:460, height:460, borderRadius:"50%", background:"radial-gradient(circle,rgba(107,45,143,.32) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"3%", width:540, height:540, borderRadius:"50%", background:"radial-gradient(circle,rgba(212,160,23,.14) 0%,transparent 70%)", pointerEvents:"none" }} />
        {/* particles */}
        {particles.map(p => (
          <div key={p.id} style={{ position:"absolute", pointerEvents:"none", width:p.size, height:p.size, borderRadius:"50%", background:p.color, opacity:p.op, top:`${p.top}%`, left:`${p.left}%`, animation:`float ${p.dur}s ease-in-out infinite`, animationDelay:`${p.delay}s` }} />
        ))}
        {/* content */}
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 1.5rem", paddingTop:110, width:"100%", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:820 }}>
            {/* pill badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(107,45,143,.22)", border:"1px solid rgba(107,45,143,.55)", borderRadius:50, padding:"6px 18px", marginBottom:"1.75rem" }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#D4A017", display:"inline-block" }} />
              <span style={{ fontSize:11, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase", fontWeight:700 }}>Social Impact · Skill Development · Youth Empowerment</span>
            </div>
            {/* headline */}
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.8rem,7.5vw,6rem)", fontWeight:700, color:"white", lineHeight:1.06, marginBottom:"1.5rem" }}>
              {BRAND.name}<br />
              <span style={{ background:"linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Foundation</span>
            </h1>
            {/* sub */}
            <p style={{ fontSize:"clamp(.95rem,2vw,1.2rem)", color:"rgba(255,255,255,.62)", lineHeight:1.88, maxWidth:600, marginBottom:"2.5rem", fontWeight:300 }}>
              {BRAND.tagline} —<br />
              <em style={{ color:"rgba(255,255,255,.38)" }}>because real change happens when help turns into capability.</em>
            </p>
            {/* CTAs */}
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <Link href="/enroll">
                <button className="btn-primary" style={{ padding:"14px 34px", borderRadius:11, fontSize:15, fontWeight:700 }}>Enroll Free →</button>
              </Link>
              <Link href="/donate">
                <button className="btn-ghost" style={{ padding:"14px 34px", borderRadius:11, fontSize:15 }}>Donate Now ♥</button>
              </Link>
              <Link href="/programs">
                <button style={{ background:"transparent", border:"none", color:"rgba(255,255,255,.38)", cursor:"pointer", fontSize:14, padding:"14px 16px", fontFamily:"'Outfit',sans-serif" }}>Explore Programs ↓</button>
              </Link>
            </div>
            {/* trust row */}
            <div style={{ display:"flex", gap:"2rem", marginTop:"3rem", flexWrap:"wrap" }}>
              {[["2,400+","Students trained"],["48","Water projects"],["100%","Free courses"]].map(([v,l]) => (
                <div key={l} style={{ display:"flex", flexDirection:"column", gap:3 }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>{v}</span>
                  <span style={{ fontSize:11, color:"rgba(255,255,255,.4)", fontWeight:500, letterSpacing:"0.5px" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* scroll cue */}
        <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:.35 }}>
          <span style={{ fontSize:9, color:"white", letterSpacing:"2.5px", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:38, background:"linear-gradient(to bottom,white,transparent)" }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:"#0D0520", padding:"4.5rem 1.5rem", borderBottom:"1px solid rgba(107,45,143,.2)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <p style={{ textAlign:"center", fontSize:11, color:"#D4A017", letterSpacing:"3px", textTransform:"uppercase", marginBottom:"2.5rem", fontWeight:700 }}>
              Real impact — verified numbers
            </p>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1.25rem" }}>
            {STATS.map((s, i) => (
              <FadeSection key={s.label} delay={i*.1}>
                <div style={{ background:"linear-gradient(135deg,rgba(107,45,143,.14),rgba(26,5,51,.28))", border:"1px solid rgba(107,45,143,.22)", borderRadius:16, padding:"1.75rem 1.25rem", textAlign:"center", transition:"transform .3s, box-shadow .3s", cursor:"default" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 16px 50px rgba(107,45,143,.25)"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";(e.currentTarget as HTMLDivElement).style.boxShadow="none"}}>
                  <div style={{ fontSize:"2rem", marginBottom:".6rem" }}>{s.icon}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.6rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ color:"rgba(255,255,255,.5)", fontSize:12, marginTop:7, fontWeight:500 }}>{s.label}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Core Programs</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>How We Create Impact</h2>
              <p style={{ color:"#888", fontSize:14, marginTop:".5rem", maxWidth:500, margin:".5rem auto 0" }}>Four pillars of change that transform lives across Pakistan.</p>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"1.5rem", marginBottom:"2.5rem" }}>
            {PROGRAMS.map((p, i) => (
              <FadeSection key={p.id} delay={i*.1}>
                <div className="card-hover" style={{ background:"white", borderRadius:20, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column" }}>
                  <div style={{ height:190, overflow:"hidden", position:"relative" }}>
                    <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s ease" }}
                      onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                      onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.5),transparent 60%)" }} />
                    <div style={{ position:"absolute", top:12, right:12 }}>
                      <span className={`badge ${p.tag==="Active"?"badge-green":"badge-gold"}`}>{p.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                    <div style={{ fontSize:"1.6rem", marginBottom:".75rem" }}>{p.icon}</div>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontWeight:700, color:"#1a0533", marginBottom:".5rem" }}>{p.title}</h3>
                    <p style={{ color:"#777", fontSize:13, lineHeight:1.78, flex:1, marginBottom:"1rem" }}>{p.shortDesc}</p>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:6, height:6, borderRadius:"50%", background:p.tag==="Active"?"#0d9e6a":"#D4A017" }} />
                      <span style={{ fontSize:12, color:p.tag==="Active"?"#0d9e6a":"#D4A017", fontWeight:700 }}>{p.tag}</span>
                      {p.duration && <span style={{ fontSize:11, color:"#aaa", marginLeft:"auto" }}>⏱ {p.duration}</span>}
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/programs">
              <button className="btn-outline" style={{ padding:"12px 30px", borderRadius:10, fontSize:14 }}>View All Programs →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREE COURSES ── */}
      <section style={{ background:"linear-gradient(135deg,#0D0520,#1a0533)", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <div style={{ display:"inline-block", background:"rgba(212,160,23,.18)", color:"#D4A017", padding:"5px 14px", borderRadius:50, fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:".75rem" }}>100% Free</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"white", display:"block", marginTop:".5rem" }}>Learn Skills That Pay</h2>
              <p style={{ color:"rgba(255,255,255,.45)", fontSize:14, marginTop:".5rem" }}>Industry-demanded skills. Zero cost. Lifetime access.</p>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.25rem", marginBottom:"2.5rem" }}>
            {COURSES.slice(0,4).map((c, i) => (
              <FadeSection key={c.id} delay={i*.08}>
                <div className="card-hover" style={{ background:"rgba(255,255,255,.045)", border:"1px solid rgba(107,45,143,.3)", borderRadius:18, padding:"1.75rem", height:"100%", display:"flex", flexDirection:"column" }}>
                  <div style={{ fontSize:"2rem", marginBottom:".85rem" }}>{c.icon}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:".6rem" }}>
                    <h3 style={{ fontSize:14, fontWeight:700, color:"white", lineHeight:1.4, flex:1, marginRight:8 }}>{c.title}</h3>
                    <span className="badge badge-green" style={{ flexShrink:0, fontSize:10 }}>FREE</span>
                  </div>
                  <p style={{ color:"rgba(255,255,255,.42)", fontSize:12, lineHeight:1.78, flex:1, marginBottom:"1rem" }}>{c.desc}</p>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem" }}>
                    <span style={{ fontSize:11, color:"rgba(255,255,255,.28)" }}>👤 {c.students.toLocaleString()} enrolled</span>
                    <span style={{ fontSize:11, color:"rgba(255,255,255,.28)" }}>⏱ {c.duration}</span>
                  </div>
                  <Link href="/enroll">
                    <button className="btn-primary" style={{ width:"100%", padding:10, borderRadius:9, fontSize:13 }}>Enroll Free →</button>
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/enroll">
              <button className="btn-ghost" style={{ padding:"12px 30px", borderRadius:10, fontSize:14 }}>See All 8 Free Courses →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORIES ── */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Impact Stories</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Real People, Real Change</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
            {IMPACT_STORIES.map((s, i) => (
              <FadeSection key={s.name} delay={i*.1}>
                <div style={{ background:"#F8F6FB", borderRadius:20, padding:"2rem", border:"1px solid rgba(107,45,143,.08)", height:"100%" }}>
                  <div style={{ fontSize:"1.8rem", marginBottom:"1rem" }}>{s.icon}</div>
                  <p style={{ color:"#444", fontSize:14, lineHeight:1.85, fontStyle:"italic", marginBottom:"1.5rem" }}>&ldquo;{s.story}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #eee", paddingTop:"1rem" }}>
                    <div style={{ fontWeight:700, color:"#1a0533", fontSize:14 }}>{s.name}</div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:".75rem" }}>{s.city}</div>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(192,57,43,.1)", color:"#c0392b" }}>Before: {s.before}</span>
                      <span style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(13,158,106,.1)", color:"#0d9e6a" }}>After: {s.after}</span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
            <Link href="/impact">
              <button className="btn-outline" style={{ padding:"12px 30px", borderRadius:10, fontSize:14 }}>View All Impact Stories →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DONATE PREVIEW ── */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Make a Difference</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Your Donation Changes Lives</h2>
              <p style={{ color:"#888", fontSize:14, marginTop:".5rem" }}>Every rupee goes directly to people who need it most.</p>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1.25rem", marginBottom:"2.5rem" }}>
            {DONATION_CAUSES.slice(0,4).map((c, i) => (
              <FadeSection key={c.id} delay={i*.08}>
                <div style={{ background:"white", borderRadius:18, padding:"1.5rem", border:"2px solid rgba(107,45,143,.06)", transition:"border-color .25s, transform .25s, box-shadow .25s", cursor:"pointer" }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.borderColor=c.color+"55";el.style.transform="translateY(-4px)";el.style.boxShadow="0 12px 40px rgba(107,45,143,.12)"}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.borderColor="rgba(107,45,143,.06)";el.style.transform="translateY(0)";el.style.boxShadow="none"}}>
                  <div style={{ fontSize:"2rem", marginBottom:".75rem" }}>{c.icon}</div>
                  <h3 style={{ fontSize:14, fontWeight:700, color:"#1a0533", marginBottom:".4rem" }}>{c.title}</h3>
                  <p style={{ color:"#888", fontSize:12, lineHeight:1.7, marginBottom:"1rem" }}>{c.desc}</p>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {c.amounts.slice(0,2).map(a => (
                      <span key={a} style={{ fontSize:11, padding:"4px 10px", borderRadius:6, background:"#F8F6FB", border:"1px solid #e0daea", color:"#555", fontWeight:600 }}>{a.toLocaleString()} PKR</span>
                    ))}
                    <span style={{ fontSize:11, padding:"4px 10px", borderRadius:6, background:"rgba(107,45,143,.08)", color:"#6B2D8F", fontWeight:700 }}>+ more</span>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/donate">
              <button className="btn-primary" style={{ padding:"14px 38px", borderRadius:12, fontSize:15, fontWeight:700 }}>Donate Now ❤️</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN QUOTE ── */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5.5rem 1.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280, borderRadius:"50%", background:"rgba(212,160,23,.1)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-60, left:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,.04)", pointerEvents:"none" }} />
        <div style={{ maxWidth:820, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <FadeSection>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", color:"rgba(212,160,23,.3)", lineHeight:.6, marginBottom:"1.25rem" }}>&ldquo;</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.1rem,2.5vw,1.7rem)", fontStyle:"italic", color:"rgba(255,255,255,.9)", lineHeight:1.88, marginBottom:"2rem" }}>
              Many of us try to help people, but sometimes we unintentionally create dependency instead of empowerment.
              True support gives people the ability to stand on their own feet.
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <div style={{ width:50, height:50, borderRadius:"50%", background:"linear-gradient(135deg,#D4A017,#F0C040)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:"#1a0533", flexShrink:0 }}>T</div>
              <div style={{ textAlign:"left" }}>
                <div style={{ color:"white", fontWeight:700, fontSize:15 }}>Tuaha Ibn Mohsin</div>
                <div style={{ color:"rgba(212,160,23,.8)", fontSize:12 }}>Chairman, {BRAND.name}</div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <div style={{ maxWidth:700, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.6rem)", fontWeight:700, color:"#1a0533", lineHeight:1.18, marginBottom:"1rem" }}>
              Be the Reason<br />
              <span style={{ color:"#6B2D8F" }}>Someone&apos;s Life Changes</span>
            </h2>
            <p style={{ color:"#888", fontSize:15, marginBottom:"2.25rem", lineHeight:1.75 }}>
              Join thousands of students, donors, and volunteers building a self-reliant Pakistan.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/donate">
                <button className="btn-primary" style={{ padding:"15px 36px", borderRadius:12, fontSize:15, fontWeight:700 }}>Donate Now ❤️</button>
              </Link>
              <Link href="/enroll">
                <button className="btn-outline" style={{ padding:"15px 36px", borderRadius:12, fontSize:15 }}>Enroll Free →</button>
              </Link>
              <Link href="/volunteer">
                <button style={{ padding:"15px 36px", borderRadius:12, fontSize:14, background:"white", border:"1px solid #e0daea", color:"#555", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600, transition:"all .25s" }}
                  onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="#6B2D8F";b.style.color="#6B2D8F"}}
                  onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="#e0daea";b.style.color="#555"}}>
                  Volunteer 🤝
                </button>
              </Link>
            </div>
          </div>
        </FadeSection>
      </section>
    </main>
  );
}
