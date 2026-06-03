"use client";
import Link from "next/link";
import Image from "next/image";
import FadeSection from "@/components/ui/FadeSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { STATS, PROGRAMS, COURSES, DONATION_CAUSES, BRAND, IMPACT_STORIES, STARTUP_PROGRAMS } from "@/data/content";

export default function HomeClient() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i, size: Math.random()*2.5+1,
    color: i%2===0?"#D4A017":"#8B4DB8",
    op: Math.random()*.4+.1,
    top: Math.random()*100, left: Math.random()*100,
    delay: Math.random()*4, dur: 3+Math.random()*4,
  }));

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", alignItems:"center" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url(https://images.unsplash.com/photo-1545987796-200677ee1011?w=1400&q=85&auto=format&fit=crop)", backgroundSize:"cover", backgroundPosition:"center top", filter:"brightness(.2)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(13,5,32,.97) 0%,rgba(26,5,51,.9) 55%,rgba(13,21,51,.85) 100%)" }} />
        <div style={{ position:"absolute", top:"8%", left:"2%", width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(107,45,143,.32) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"3%", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(212,160,23,.12) 0%,transparent 70%)", pointerEvents:"none" }} />
        {particles.map(p => (
          <div key={p.id} style={{ position:"absolute", pointerEvents:"none", width:p.size, height:p.size, borderRadius:"50%", background:p.color, opacity:p.op, top:`${p.top}%`, left:`${p.left}%`, animation:`float ${p.dur}s ease-in-out infinite`, animationDelay:`${p.delay}s` }} />
        ))}

        <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 1.5rem", paddingTop:110, width:"100%", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:820 }}>
            {/* Logo + badge */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"2rem" }}>
              <div style={{ width:52, height:52, position:"relative", borderRadius:12, overflow:"hidden", background:"white", padding:3, flexShrink:0 }}>
                <Image src="/logo-icon.jpg" alt="Fikr Fardan" fill style={{ objectFit:"contain" }} />
              </div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(107,45,143,.22)", border:"1px solid rgba(107,45,143,.55)", borderRadius:50, padding:"7px 18px" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:"#D4A017", display:"inline-block" }} />
                <span style={{ fontSize:11, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase", fontWeight:700 }}>Skills · Opportunity · Impact</span>
              </div>
            </div>

            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.8rem,7.5vw,6rem)", fontWeight:700, color:"white", lineHeight:1.06, marginBottom:"1.25rem" }}>
              Fikr Fardan<br />
              <span style={{ background:"linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Foundation</span>
            </h1>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.1rem,2.2vw,1.5rem)", color:"rgba(255,255,255,.75)", fontStyle:"italic", marginBottom:".75rem" }}>
              &ldquo;{BRAND.tagline}&rdquo;
            </p>
            <p style={{ fontSize:"clamp(.9rem,1.8vw,1.1rem)", color:"rgba(255,255,255,.5)", lineHeight:1.88, maxWidth:580, marginBottom:"2.5rem", fontWeight:300 }}>
              {BRAND.mission} — because real change happens when help turns into capability.
            </p>

            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
              <Link href="/enroll"><button className="btn-primary" style={{ padding:"14px 34px", borderRadius:11, fontSize:15, fontWeight:700 }}>Enroll Free →</button></Link>
              <Link href="/donate"><button className="btn-ghost" style={{ padding:"14px 34px", borderRadius:11, fontSize:15 }}>Donate Now ❤️</button></Link>
              <Link href="/startup"><button style={{ background:"rgba(212,160,23,.15)", border:"1px solid rgba(212,160,23,.4)", color:"#D4A017", cursor:"pointer", fontSize:14, padding:"14px 24px", fontFamily:"'Outfit',sans-serif", fontWeight:600, borderRadius:11 }}>Startup Fund 🚀</button></Link>
            </div>

            {/* Quick stats row */}
            <div style={{ display:"flex", gap:"2.5rem", flexWrap:"wrap" }}>
              {[["2,400+","Students"],["48","Water Projects"],["85+","Startups Funded"],["100%","Free Courses"]].map(([v,l])=>(
                <div key={l}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>{v}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,.38)", fontWeight:500, marginTop:3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Social links row on hero */}
        <div style={{ position:"absolute", bottom:"2.5rem", right:"1.5rem", display:"flex", gap:8 }}>
          {[
            { href:BRAND.social.instagram, Icon:InstagramIcon, label:"Instagram", bg:"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
            { href:BRAND.social.facebook,  Icon:FacebookIcon,  label:"Facebook",  bg:"#1877F2" },
            { href:BRAND.social.youtube,   Icon:YouTubeIcon,   label:"YouTube",   bg:"#FF0000" },
            { href:BRAND.social.linkedin,  Icon:LinkedInIcon,  label:"LinkedIn",  bg:"#0A66C2" },
          ].map(s=>(
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={`Follow Fikr Fardan on ${s.label}`}
              style={{ width:36, height:36, borderRadius:9, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", opacity:.8, boxShadow:"0 2px 10px rgba(0,0,0,.3)" }}>
              <s.Icon size={17} color="white" />
            </a>
          ))}
        </div>
        <div style={{ position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:.3 }}>
          <span style={{ fontSize:9, color:"white", letterSpacing:"2.5px", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:38, background:"linear-gradient(to bottom,white,transparent)" }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:"#0D0520", padding:"4.5rem 1.5rem", borderBottom:"1px solid rgba(107,45,143,.2)" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection><p style={{ textAlign:"center", fontSize:11, color:"#D4A017", letterSpacing:"3px", textTransform:"uppercase", marginBottom:"2.5rem", fontWeight:700 }}>Verified impact — real numbers</p></FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"1.25rem" }}>
            {STATS.map((s, i)=>(
              <FadeSection key={s.label} delay={i*.08}>
                <div style={{ background:"linear-gradient(135deg,rgba(107,45,143,.14),rgba(26,5,51,.28))", border:"1px solid rgba(107,45,143,.22)", borderRadius:16, padding:"1.75rem 1.25rem", textAlign:"center", transition:"transform .3s,box-shadow .3s", cursor:"default" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLDivElement).style.boxShadow="0 16px 50px rgba(107,45,143,.25)"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";(e.currentTarget as HTMLDivElement).style.boxShadow="none"}}>
                  <div style={{ fontSize:"1.9rem", marginBottom:".6rem" }}>{s.icon}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.4rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ color:"rgba(255,255,255,.5)", fontSize:11, marginTop:6, fontWeight:500 }}>{s.label}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATION TAGLINE SECTION ── */}
      <section style={{ background:"#F8F6FB", padding:"5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <span className="section-label">Make a Difference</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:700, color:"#1a0533", lineHeight:1.18, marginBottom:".75rem" }}>
                Your Donation Changes Lives
              </h2>
              <p style={{ color:"#777", fontSize:15, maxWidth:600, margin:"0 auto", lineHeight:1.82 }}>
                Every contribution creates opportunity, restores dignity, and helps deserving individuals build <strong>sustainable sources of income</strong>.
              </p>
            </div>
          </FadeSection>

          {/* Philosophy pills */}
          <FadeSection delay={.1}>
            <div style={{ display:"flex", gap:"1.25rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"3rem" }}>
              {[["💡","Give Opportunity, Not Dependency"],["🔄","Transform Support Into Livelihood"],["🏆","Create Dignity & Independence"]].map(([icon,text])=>(
                <div key={text} style={{ display:"flex", alignItems:"center", gap:10, background:"white", borderRadius:50, padding:"10px 20px", border:"1px solid rgba(107,45,143,.12)", boxShadow:"0 4px 20px rgba(107,45,143,.06)" }}>
                  <span style={{ fontSize:"1.2rem" }}>{icon}</span>
                  <span style={{ fontSize:13, fontWeight:600, color:"#333" }}>{text}</span>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Donate for Community Projects heading */}
          <FadeSection delay={.15}>
            <div style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius:20, padding:"2rem 2.5rem", marginBottom:"2.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1.5rem" }}>
              <div>
                <div style={{ fontSize:12, color:"rgba(212,160,23,.8)", letterSpacing:"2px", textTransform:"uppercase", fontWeight:700, marginBottom:".5rem" }}>Community Projects</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.3rem,3vw,2rem)", fontWeight:700, color:"white" }}>
                  DONATE FOR COMMUNITY PROJECTS IN RURAL AREAS
                </h3>
                <p style={{ color:"rgba(255,255,255,.6)", fontSize:14, marginTop:".5rem" }}>Water pumps, sanitation, welfare drives — directly impacting villages across Pakistan.</p>
              </div>
              <Link href="/donate"><button style={{ background:"#D4A017", color:"#1a0533", border:"none", padding:"13px 28px", borderRadius:10, fontSize:14, fontWeight:800, cursor:"pointer", fontFamily:"'Outfit',sans-serif", whiteSpace:"nowrap" }}>Donate Now →</button></Link>
            </div>
          </FadeSection>

          {/* Cause cards */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1.25rem", marginBottom:"2.5rem" }}>
            {DONATION_CAUSES.slice(0,6).map((c, i)=>(
              <FadeSection key={c.id} delay={i*.07}>
                <div className="card-hover" style={{ background:"white", borderRadius:18, padding:"1.5rem", border:`2px solid rgba(107,45,143,.06)`, transition:"border-color .25s", cursor:"pointer" }}
                  onMouseEnter={e=>((e.currentTarget as HTMLDivElement).style.borderColor=c.color+"55")}
                  onMouseLeave={e=>((e.currentTarget as HTMLDivElement).style.borderColor="rgba(107,45,143,.06)")}>
                  <div style={{ fontSize:"2rem", marginBottom:".75rem" }}>{c.icon}</div>
                  <h3 style={{ fontSize:14, fontWeight:700, color:"#1a0533", marginBottom:".4rem" }}>{c.title}</h3>
                  <p style={{ color:"#888", fontSize:12, lineHeight:1.7, marginBottom:".75rem" }}>{c.desc}</p>
                  <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                    {c.amounts.slice(0,2).map(a=>(
                      <span key={a} style={{ fontSize:11, padding:"3px 9px", borderRadius:6, background:"#F8F6FB", border:"1px solid #e0daea", color:"#555", fontWeight:600 }}>{a.toLocaleString()} PKR</span>
                    ))}
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/donate"><button className="btn-primary" style={{ padding:"13px 35px", borderRadius:12, fontSize:15, fontWeight:700 }}>View All Causes & Donate ❤️</button></Link>
          </div>
        </div>
      </section>

      {/* ── STARTUP FUND PREVIEW ── */}
      <section style={{ background:"linear-gradient(135deg,#0D0520,#1a0533)", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <div style={{ display:"inline-block", background:"rgba(212,160,23,.18)", color:"#D4A017", padding:"5px 14px", borderRadius:50, fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:".75rem" }}>Startup Fund Program</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"white", marginBottom:".75rem" }}>
                Help Deserving Individuals<br />Become <span style={{ background:"linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Self-Reliant</span>
              </h2>
              <p style={{ color:"rgba(255,255,255,.45)", fontSize:14, maxWidth:540, margin:"0 auto" }}>
                We don't give aid — we give businesses. Every donation funds a sustainable livelihood.
              </p>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem", marginBottom:"2.5rem" }}>
            {STARTUP_PROGRAMS.slice(0,4).map((p, i)=>{
              
              return (
                <FadeSection key={p.id} delay={i*.08}>
                  <div className="card-hover" style={{ background:"rgba(255,255,255,.045)", border:"1px solid rgba(107,45,143,.3)", borderRadius:18, overflow:"hidden", display:"flex", flexDirection:"column" }}>
                    <div style={{ height:160, position:"relative", overflow:"hidden" }}>
                      <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .4s" }}
                        onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                        onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.75),transparent 55%)" }} />
                      <div style={{ position:"absolute", bottom:12, left:12, fontSize:"1.5rem" }}>{p.icon}</div>
                    </div>
                    <div style={{ padding:"1.25rem", flex:1, display:"flex", flexDirection:"column" }}>
                      <h3 style={{ fontSize:14, fontWeight:700, color:"white", marginBottom:".4rem" }}>{p.title}</h3>
                      <p style={{ color:"rgba(255,255,255,.42)", fontSize:12, lineHeight:1.72, flex:1, marginBottom:".75rem" }}>{p.desc.slice(0,80)}...</p>
                      <div style={{ marginBottom:".75rem" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.9rem", fontWeight:700, color:"#D4A017", lineHeight:1 }}>{p.delivered}</div>
                          <div style={{ fontSize:11, color:"rgba(255,255,255,.5)", lineHeight:1.35 }}>{p.unit}<br />delivered so far</div>
                        </div>
                        <div style={{ fontSize:12, color:"rgba(212,160,23,.75)", fontWeight:700 }}>
                          Sponsor: {(p as typeof p & {donationLabel:string}).donationLabel}
                        </div>
                      </div>
                      <Link href="/startup"><button className="btn-primary" style={{ width:"100%", padding:9, borderRadius:8, fontSize:12, fontWeight:700 }}>{p.cta} →</button></Link>
                    </div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/startup"><button className="btn-ghost" style={{ padding:"13px 32px", borderRadius:12, fontSize:14 }}>View All 11 Startup Programs →</button></Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Core Programs</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Four Pillars of Lasting Change</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem", marginBottom:"2.5rem" }}>
            {PROGRAMS.map((p, i)=>(
              <FadeSection key={p.id} delay={i*.1}>
                <div className="card-hover" style={{ background:"#F8F6FB", borderRadius:20, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column" }}>
                  <div style={{ height:180, overflow:"hidden", position:"relative" }}>
                    <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s" }}
                      onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.07)")}
                      onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.5),transparent 60%)" }} />
                    <div style={{ position:"absolute", top:12, right:12 }}>
                      <span style={{ fontSize:10, padding:"3px 10px", borderRadius:50, background:p.tag==="Active"?"#0d9e6a":"#D4A017", color:"white", fontWeight:800 }}>{p.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                    <div style={{ fontSize:"1.5rem", marginBottom:".7rem" }}>{p.icon}</div>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", fontWeight:700, color:"#1a0533", marginBottom:".5rem" }}>{p.title}</h3>
                    <p style={{ color:"#777", fontSize:13, lineHeight:1.78, flex:1, marginBottom:"1rem" }}>{p.shortDesc}</p>
                    <Link href={p.link}><button className={p.tag==="Under Progress"?"btn-outline":"btn-primary"} style={{ width:"100%", padding:"10px", borderRadius:9, fontSize:13 }}>{p.tag==="Under Progress"?"Under Progress 🔧":"Apply Now →"}</button></Link>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/programs"><button className="btn-outline" style={{ padding:"12px 30px", borderRadius:10, fontSize:14 }}>Explore All Programs →</button></Link>
          </div>
        </div>
      </section>

      {/* ── FREE COURSES ── */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <div style={{ display:"inline-block", background:"rgba(107,45,143,.1)", color:"#6B2D8F", padding:"5px 14px", borderRadius:50, fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:".75rem" }}>23 Free Courses</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Learn Skills That Pay</h2>
              <p style={{ color:"#888", fontSize:14, marginTop:".5rem" }}>From SEO to Amazon FBA — industry skills with zero fees.</p>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"1rem", marginBottom:"2.5rem" }}>
            {COURSES.slice(0,8).map((c, i)=>(
              <FadeSection key={c.id} delay={i*.06}>
                <div className="card-hover" style={{ background:"white", borderRadius:16, padding:"1.4rem", border:"1px solid rgba(107,45,143,.08)", textAlign:"center" }}>
                  <div style={{ fontSize:"1.8rem", marginBottom:".6rem" }}>{c.icon}</div>
                  <h3 style={{ fontSize:13, fontWeight:700, color:"#1a0533", marginBottom:".3rem", lineHeight:1.35 }}>{c.title}</h3>
                  <div style={{ fontSize:11, color:"#aaa", marginBottom:".75rem" }}>⏱ {c.duration}</div>
                  <Link href="/enroll"><button className="btn-primary" style={{ width:"100%", padding:"8px", borderRadius:8, fontSize:12, fontWeight:700 }}>Enroll Free</button></Link>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/enroll"><button className="btn-primary" style={{ padding:"13px 35px", borderRadius:12, fontSize:15, fontWeight:700 }}>View All 23 Courses →</button></Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORIES ── */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Success Stories</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Real People, Real Change</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem", marginBottom:"2.5rem" }}>
            {IMPACT_STORIES.slice(0,3).map((s, i)=>(
              <FadeSection key={s.name} delay={i*.1}>
                <div style={{ background:"#F8F6FB", borderRadius:20, padding:"2rem", border:"1px solid rgba(107,45,143,.08)", height:"100%" }}>
                  <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{s.icon}</div>
                  <p style={{ color:"#444", fontSize:14, lineHeight:1.88, fontStyle:"italic", marginBottom:"1.5rem" }}>&ldquo;{s.story}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #eee", paddingTop:"1rem" }}>
                    <div style={{ fontWeight:700, color:"#1a0533", fontSize:14 }}>{s.name}</div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:".6rem" }}>📍 {s.city}</div>
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(192,57,43,.08)", color:"#c0392b" }}>Before: {s.before}</span>
                      <span style={{ fontSize:11, padding:"3px 10px", borderRadius:50, background:"rgba(13,158,106,.08)", color:"#0d9e6a" }}>After: {s.after}</span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/impact"><button className="btn-outline" style={{ padding:"12px 30px", borderRadius:10, fontSize:14 }}>View All Stories →</button></Link>
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN QUOTE ── */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5.5rem 1.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280, borderRadius:"50%", background:"rgba(212,160,23,.1)", pointerEvents:"none" }} />
        <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <FadeSection>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", color:"rgba(212,160,23,.3)", lineHeight:.6, marginBottom:"1.25rem" }}>&ldquo;</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.1rem,2.5vw,1.75rem)", fontStyle:"italic", color:"rgba(255,255,255,.9)", lineHeight:1.88, marginBottom:"2rem" }}>
              Many of us try to help people, but sometimes we unintentionally create dependency instead of empowerment.
              True support gives people the ability to stand on their own feet. At Fikr Fardan Foundation, we give
              opportunity — not dependency.
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14 }}>
              <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,#D4A017,#F0C040)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:"#1a0533", flexShrink:0 }}>T</div>
              <div style={{ textAlign:"left" }}>
                <div style={{ color:"white", fontWeight:700, fontSize:16 }}>Tuaha Ibn Mohsin</div>
                <div style={{ color:"rgba(212,160,23,.8)", fontSize:13 }}>Chairman, Fikr Fardan Foundation</div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <div style={{ maxWidth:720, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.8rem)", fontWeight:700, color:"#1a0533", lineHeight:1.18, marginBottom:"1rem" }}>
              Be the Reason<br /><span style={{ color:"#6B2D8F" }}>Someone&apos;s Life Changes</span>
            </h2>
            <p style={{ color:"#888", fontSize:15, marginBottom:"2.25rem", lineHeight:1.75 }}>Join thousands of students, donors, and volunteers building a self-reliant Pakistan.</p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/donate"><button className="btn-primary" style={{ padding:"15px 36px", borderRadius:12, fontSize:15, fontWeight:700 }}>Donate Now ❤️</button></Link>
              <Link href="/enroll"><button className="btn-outline" style={{ padding:"15px 36px", borderRadius:12, fontSize:15 }}>Enroll Free →</button></Link>
              <Link href="/volunteer"><button style={{ padding:"15px 36px", borderRadius:12, fontSize:14, background:"white", border:"1px solid #e0daea", color:"#555", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600 }}>Volunteer 🤝</button></Link>
            </div>
            {/* Social follow row */}
            <div style={{ marginTop:"2.5rem", display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center", flexWrap:"wrap" }}>
              <span style={{ fontSize:13, color:"#aaa" }}>Follow us:</span>
              {[
                { href:BRAND.social.instagram, Icon:InstagramIcon, label:"Instagram", bg:"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
                { href:BRAND.social.facebook,  Icon:FacebookIcon,  label:"Facebook",  bg:"#1877F2" },
                { href:BRAND.social.youtube,   Icon:YouTubeIcon,   label:"YouTube",   bg:"#FF0000" },
                { href:BRAND.social.linkedin,  Icon:LinkedInIcon,  label:"LinkedIn",  bg:"#0A66C2" },
              ].map(s=>(
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`Follow Fikr Fardan on ${s.label}`}
                  style={{ display:"flex", alignItems:"center", gap:7, padding:"9px 18px", borderRadius:50, background:s.bg, color:"white", fontSize:12, fontWeight:700, textDecoration:"none" }}>
                  <s.Icon size={15} color="white" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>
    </main>
  );
}
