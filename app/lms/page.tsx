"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { COURSES } from "@/data/content";
import Link from "next/link";

const MOCK_USER = { name:"Ahmed Khan", email:"ahmed@example.com", progress: [40, 100, 20, 0, 75, 10, 0, 60] };

const VIDEO_IDS: Record<string, string> = {
  "ai-design":        "dQw4w9WgXcQ",
  "linkedin":         "dQw4w9WgXcQ",
  "productivity":     "dQw4w9WgXcQ",
  "photography":      "dQw4w9WgXcQ",
  "mobile-video":     "dQw4w9WgXcQ",
  "marketing":        "dQw4w9WgXcQ",
  "youtube":          "dQw4w9WgXcQ",
  "entrepreneurship": "dQw4w9WgXcQ",
};

const TABS = ["All Courses","In Progress","Completed"];

export default function LMSPage() {
  const [loggedIn, setLoggedIn]       = useState(false);
  const [loginForm, setLoginForm]     = useState({ email:"", password:"" });
  const [loginErr, setLoginErr]       = useState("");
  const [activeTab, setActiveTab]     = useState("All Courses");
  const [playingId, setPlayingId]     = useState<string|null>(null);

  const handleLogin = () => {
    if (!loginForm.email || !loginForm.password) { setLoginErr("Please enter email and password."); return; }
    // Demo: accept any credentials
    setLoggedIn(true); setLoginErr("");
  };

  const filteredCourses = COURSES.filter((c, i) => {
    const p = MOCK_USER.progress[i] ?? 0;
    if (activeTab === "In Progress") return p > 0 && p < 100;
    if (activeTab === "Completed")   return p === 100;
    return true;
  });

  if (!loggedIn) return (
    <>
      <Navbar />
      <PageHero badge="LMS" title="Student" highlight="Dashboard"
        subtitle="Access your free courses, track progress, and continue learning."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&q=80" />
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem", minHeight:"60vh", display:"flex", alignItems:"center" }}>
        <div style={{ maxWidth:420, margin:"0 auto", width:"100%" }}>
          <div style={{ background:"white", borderRadius:24, padding:"2.5rem", border:"1px solid rgba(107,45,143,.1)", boxShadow:"0 12px 50px rgba(107,45,143,.1)" }}>
            <div style={{ textAlign:"center", marginBottom:"2rem" }}>
              <div style={{ fontSize:"3rem", marginBottom:".75rem" }}>🎓</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:700, color:"#1a0533" }}>Student Login</h2>
              <p style={{ color:"#888", fontSize:13, marginTop:".4rem" }}>Use demo login: any email + any password</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input className="form-field" type="email" placeholder="student@example.com"
                  value={loginForm.email} onChange={e=>setLoginForm(f=>({...f,email:e.target.value}))} />
              </div>
              <div className="input-group">
                <label className="input-label">Password</label>
                <input className="form-field" type="password" placeholder="••••••••"
                  value={loginForm.password} onChange={e=>setLoginForm(f=>({...f,password:e.target.value}))}
                  onKeyDown={e=>e.key==="Enter"&&handleLogin()} />
              </div>
              {loginErr && <p style={{ color:"#c0392b", fontSize:13 }}>⚠ {loginErr}</p>}
              <button className="btn-primary" onClick={handleLogin} style={{ padding:"13px", borderRadius:10, fontSize:14, fontWeight:700 }}>Sign In →</button>
              <div style={{ textAlign:"center", fontSize:13, color:"#888" }}>
                Not enrolled yet? <Link href="/enroll" style={{ color:"#6B2D8F", fontWeight:700 }}>Enroll Free</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <section style={{ background:"linear-gradient(135deg,#0D0520,#1a0533)", paddingTop:88, paddingBottom:"2.5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 1.5rem" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#6B2D8F,#D4A017)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, fontWeight:700, color:"white" }}>A</div>
              <div>
                <div style={{ color:"white", fontWeight:700, fontSize:18 }}>Asalaam o Alaikum, {MOCK_USER.name} 👋</div>
                <div style={{ color:"rgba(255,255,255,.45)", fontSize:13 }}>{MOCK_USER.email}</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:"1.5rem" }}>
              {[["📚","8","Enrolled"],["✅","1","Completed"],["🔄","5","In Progress"]].map(([icon,n,label])=>(
                <div key={label} style={{ textAlign:"center" }}>
                  <div style={{ fontSize:20 }}>{icon}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#D4A017" }}>{n}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,.4)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* overall progress */}
          <div style={{ marginTop:"1.5rem", background:"rgba(255,255,255,.05)", borderRadius:12, padding:"1rem 1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
              <span style={{ color:"rgba(255,255,255,.6)", fontSize:13 }}>Overall Course Progress</span>
              <span style={{ color:"#D4A017", fontSize:13, fontWeight:700 }}>38%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width:"38%" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background:"#F8F6FB", padding:"3rem 1.5rem 5rem" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          {/* TABS */}
          <div style={{ display:"flex", gap:0, borderBottom:"2px solid #e8e4f0", marginBottom:"2.5rem" }}>
            {TABS.map(t => (
              <button key={t} onClick={()=>setActiveTab(t)}
                style={{ padding:"12px 24px", background:"none", border:"none", fontSize:14, fontWeight:600, color:activeTab===t?"#6B2D8F":"#888", borderBottom:`3px solid ${activeTab===t?"#6B2D8F":"transparent"}`, marginBottom:-2, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .2s" }}>
                {t}
              </button>
            ))}
          </div>

          {/* VIDEO MODAL */}
          {playingId && (
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.88)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem" }} onClick={()=>setPlayingId(null)}>
              <div style={{ width:"100%", maxWidth:820, aspectRatio:"16/9", borderRadius:16, overflow:"hidden", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <iframe src={`https://www.youtube.com/embed/${VIDEO_IDS[playingId] ?? "dQw4w9WgXcQ"}?autoplay=1`}
                  style={{ width:"100%", height:"100%", border:"none" }} allow="autoplay; fullscreen" />
              </div>
              <button onClick={()=>setPlayingId(null)} style={{ position:"fixed", top:20, right:24, background:"none", border:"none", color:"white", fontSize:36, cursor:"pointer" }}>✕</button>
            </div>
          )}

          {/* COURSES GRID */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.5rem" }}>
            {filteredCourses.map((c, i) => {
              const origIndex = COURSES.findIndex(x => x.id === c.id);
              const progress = MOCK_USER.progress[origIndex] ?? 0;
              return (
                <FadeSection key={c.id} delay={i*.07}>
                  <div className="card-hover" style={{ background:"white", borderRadius:20, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", height:"100%", display:"flex", flexDirection:"column" }}>
                    {/* thumbnail */}
                    <div style={{ height:160, background:`linear-gradient(135deg,#6B2D8F,#3a0f52)`, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}
                      onClick={()=>setPlayingId(c.id)}>
                      <div style={{ fontSize:"3.5rem" }}>{c.icon}</div>
                      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0)", transition:"background .25s" }}
                        onMouseEnter={e=>(e.currentTarget.style.background="rgba(0,0,0,.3)")}
                        onMouseLeave={e=>(e.currentTarget.style.background="rgba(0,0,0,0)")}>
                        <div style={{ width:52, height:52, borderRadius:"50%", background:"rgba(255,255,255,.92)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}>▶</div>
                      </div>
                      {progress === 100 && (
                        <div style={{ position:"absolute", top:10, right:10, background:"#0d9e6a", color:"white", fontSize:10, padding:"3px 10px", borderRadius:50, fontWeight:800 }}>✓ DONE</div>
                      )}
                    </div>
                    <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                      <h3 style={{ fontSize:15, fontWeight:700, color:"#1a0533", marginBottom:".4rem", lineHeight:1.4 }}>{c.title}</h3>
                      <p style={{ color:"#888", fontSize:12, lineHeight:1.7, flex:1, marginBottom:"1rem" }}>{c.desc}</p>
                      {/* progress */}
                      <div style={{ marginBottom:".75rem" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:5 }}>
                          <span style={{ color:"#aaa" }}>Progress</span>
                          <span style={{ color:"#6B2D8F", fontWeight:700 }}>{progress}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width:`${progress}%` }} />
                        </div>
                      </div>
                      <button className="btn-primary" onClick={()=>setPlayingId(c.id)} style={{ width:"100%", padding:10, borderRadius:9, fontSize:13 }}>
                        {progress===0 ? "Start Course →" : progress===100 ? "Review Course →" : "Continue →"}
                      </button>
                    </div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
