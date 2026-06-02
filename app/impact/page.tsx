"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import { BRAND, IMPACT_STORIES, STATS } from "@/data/content";

const GALLERY = [
  // Skill Development
  {
    src:"https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=85&auto=format&fit=crop",
    alt:"Pakistani students engaged in computer skills and digital training workshop at Fikr Fardan Foundation",
    caption:"Digital skills training — Lahore 2024", cat:"Skill Development",
  },
  {
    src:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=85&auto=format&fit=crop",
    alt:"South Asian youth learning graphic design and creative skills in Fikr Fardan training program",
    caption:"Graphic design & AI tools workshop", cat:"Skill Development",
  },
  {
    src:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=85&auto=format&fit=crop",
    alt:"Photography training session — student learning camera skills through Fikr Fardan Foundation",
    caption:"Photography skills training session", cat:"Skill Development",
  },
  // Clean Water
  {
    src:"https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&q=85&auto=format&fit=crop",
    alt:"Clean water hand pump installed in rural Pakistani village by Fikr Fardan Foundation community project",
    caption:"Hand pump installed — Punjab village", cat:"Clean Water",
  },
  {
    src:"https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=85&auto=format&fit=crop",
    alt:"Rural community accessing clean drinking water through Fikr Fardan Foundation water project",
    caption:"Clean water access for 100+ families", cat:"Clean Water",
  },
  // Community
  {
    src:"https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=85&auto=format&fit=crop",
    alt:"Fikr Fardan Foundation community welfare distribution program reaching deserving families in Pakistan",
    caption:"Community welfare distribution program", cat:"Community",
  },
  {
    src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=85&auto=format&fit=crop",
    alt:"Children receiving orphan care education and daily support through Fikr Fardan Foundation program",
    caption:"Orphan care & education support", cat:"Community",
  },
  // Startup Support
  {
    src:"https://images.unsplash.com/photo-1558618047-f4e730aaac04?w=600&q=85&auto=format&fit=crop",
    alt:"Delivery rider on motorcycle earning daily income through Fikr Fardan Foundation Startup Fund program",
    caption:"Startup Fund — bike for delivery rider", cat:"Startup Support",
  },
  {
    src:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=85&auto=format&fit=crop",
    alt:"Young South Asian freelancer working on laptop with Fikr Fardan startup support earning globally",
    caption:"Freelancing setup — earning from home", cat:"Startup Support",
  },
  {
    src:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=85&auto=format&fit=crop",
    alt:"Woman empowered by sewing machine running home-based tailoring business with Fikr Fardan support",
    caption:"Women empowerment — sewing machine support", cat:"Startup Support",
  },
  // Volunteer
  {
    src:"https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=85&auto=format&fit=crop",
    alt:"Fikr Fardan Foundation volunteers collaborating on community development project in rural Pakistan",
    caption:"Volunteer team — community project", cat:"Volunteer",
  },
  {
    src:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=85&auto=format&fit=crop",
    alt:"Fikr Fardan Foundation volunteer trainers conducting skill development workshop for deserving youth",
    caption:"Volunteer trainers conducting workshop", cat:"Volunteer",
  },
];

const CATS = ["All", "Skill Development", "Clean Water", "Community", "Startup Support", "Volunteer"];

const TIMELINE = [
  { year:"2021", title:"Foundation Established", desc:"Tuaha Ibn Mohsin launches Fikr Fardan with a small team and a big vision." },
  { year:"2022", title:"First 200 Students",     desc:"Skill development program launches — 200 students trained in digital skills." },
  { year:"2023", title:"Water Projects Begin",   desc:"12 clean water hand pumps installed across rural Punjab and Sindh." },
  { year:"2024", title:"LMS Platform Launch",    desc:"Online learning platform goes live — 1,200+ students access free courses." },
  { year:"2025", title:"2,400+ Lives Changed",   desc:"Expanding to startup support, orphan care, and international fellowship programs." },
];

export default function ImpactPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? GALLERY : GALLERY.filter(g => g.cat === cat);

  return (
    <>
      <Navbar />
      <PageHero
        badge="Our Impact"
        title="Every Number Is a"
        highlight="Human Story"
        subtitle="Behind every statistic is a real person whose life changed because someone believed in capability over charity."
        image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Community members gathered for Fikr Fardan Foundation social impact program in Pakistan"
      />

      {/* STATS */}
      <section style={{ background:"#0D0520", padding:"4.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1.25rem" }}>
            {STATS.map((s, i) => (
              <FadeSection key={s.label} delay={i*.1}>
                <div style={{ background:"linear-gradient(135deg,rgba(107,45,143,.14),rgba(26,5,51,.28))", border:"1px solid rgba(107,45,143,.22)", borderRadius:16, padding:"1.75rem 1.25rem", textAlign:"center" }}>
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

      {/* IMPACT STORIES */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Success Stories</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Lives Transformed</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
            {IMPACT_STORIES.map((story, i) => (
              <FadeSection key={story.name} delay={i*.1}>
                <div className="card-hover" style={{ background:"white", borderRadius:20, padding:"2rem", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column" }}>
                  <div style={{ fontSize:"2.2rem", marginBottom:"1.1rem" }}>{story.icon}</div>
                  <p style={{ color:"#444", fontSize:14, lineHeight:1.88, fontStyle:"italic", flex:1, marginBottom:"1.5rem" }}>&ldquo;{story.story}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #eee", paddingTop:"1.25rem" }}>
                    <div style={{ fontWeight:700, color:"#1a0533", fontSize:15 }}>{story.name}</div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:"1rem" }}>📍 {story.city}</div>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, padding:"4px 12px", borderRadius:50, background:"rgba(192,57,43,.08)", color:"#c0392b", border:"1px solid rgba(192,57,43,.15)" }}>Before: {story.before}</span>
                      <span style={{ fontSize:11, padding:"4px 12px", borderRadius:50, background:"rgba(13,158,106,.08)", color:"#0d9e6a", border:"1px solid rgba(13,158,106,.15)" }}>After: {story.after}</span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <span className="section-label">Our Journey</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>From Vision to Reality</h2>
            </div>
          </FadeSection>
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:2, background:"linear-gradient(to bottom,#6B2D8F,#D4A017)", transform:"translateX(-50%)" }} className="timeline-line" />
            {TIMELINE.map((t, i) => (
              <FadeSection key={t.year} delay={i*.12}>
                <div style={{ display:"flex", alignItems:"center", gap:"2rem", marginBottom:"2.5rem" }} className="timeline-row">
                  <div style={{ flex:1, textAlign: i%2===0?"right":"left", order:i%2===0?0:2 }} className="timeline-content">
                    <div style={{ background:"#F8F6FB", borderRadius:16, padding:"1.5rem", border:"1px solid rgba(107,45,143,.08)", display:"inline-block", maxWidth:340, textAlign:"left" }}>
                      <div style={{ fontSize:12, fontWeight:700, color:"#D4A017", letterSpacing:"1px", marginBottom:".4rem" }}>{t.year}</div>
                      <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:700, color:"#1a0533", marginBottom:".4rem" }}>{t.title}</h3>
                      <p style={{ color:"#777", fontSize:13, lineHeight:1.75 }}>{t.desc}</p>
                    </div>
                  </div>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#6B2D8F,#D4A017)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:700, fontSize:13, flexShrink:0, zIndex:1, boxShadow:"0 0 0 6px white" }} className="timeline-dot">{i+1}</div>
                  <div style={{ flex:1, order:i%2===0?2:0 }} className="timeline-spacer" />
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"2rem" }}>
              <span className="section-label">Gallery</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:"#1a0533" }}>Impact in Pictures</h2>
            </div>
            <div style={{ display:"flex", gap:"0.6rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"2.5rem" }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  style={{ padding:"7px 16px", borderRadius:50, border:`1.5px solid ${cat===c?"#6B2D8F":"#ddd"}`, background:cat===c?"#6B2D8F":"white", color:cat===c?"white":"#666", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .2s" }}>
                  {c}
                </button>
              ))}
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem" }}>
            {filtered.map((g, i) => (
              <FadeSection key={g.src+i} delay={i*.06}>
                <div className="card-hover" style={{ borderRadius:18, overflow:"hidden", position:"relative", height:240, cursor:"pointer" }}>
                  <img src={g.src} alt={g.alt} loading="lazy" decoding="async" width={600} height={240} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .4s" }} onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.05)")} onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,5,32,.88) 0%,transparent 52%)" }} />
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.25rem 1rem" }}>
                    <div style={{ fontSize:10, color:"#D4A017", fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:4 }}>{g.cat}</div>
                    <div style={{ color:"white", fontSize:13, fontWeight:600, lineHeight:1.4 }}>{g.caption}</div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:"5rem 1.5rem", textAlign:"center" }}>
        <FadeSection>
          <div style={{ maxWidth:680, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:700, color:"white", marginBottom:"1rem", lineHeight:1.2 }}>
              Be Part of the Next Story
            </h2>
            <p style={{ color:"rgba(255,255,255,.65)", fontSize:15, marginBottom:"2.5rem", lineHeight:1.8 }}>
              Every donation, enrollment, and volunteer hour creates the next success story. Join us.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/donate"><button className="btn-primary" style={{ padding:"14px 32px", borderRadius:12, fontSize:15, fontWeight:700, background:"#D4A017", color:"#1a0533", border:"none", cursor:"pointer", fontFamily:"'Outfit',sans-serif" }}>Donate Now ❤️</button></Link>
              <Link href="/enroll"><button className="btn-ghost" style={{ padding:"14px 32px", borderRadius:12, fontSize:14 }}>Enroll Free →</button></Link>
            </div>
          </div>
        </FadeSection>
      </section>

      <Footer />
      <style>{`
        @media(max-width:700px){
          .timeline-line{display:none!important;}
          .timeline-row{flex-direction:column!important;}
          .timeline-spacer{display:none!important;}
          .timeline-dot{display:none!important;}
          .timeline-content{text-align:left!important;order:0!important;}
        }
      `}</style>
    </>
  );
}
