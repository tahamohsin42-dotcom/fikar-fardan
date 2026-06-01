"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";

const ROLES = [
  { id:"teacher",    icon:"🏫", title:"Online Trainer",     desc:"Deliver skill sessions on Zoom or in-person. Share expertise in AI, design, marketing, video." },
  { id:"field",      icon:"🌍", title:"Field Volunteer",     desc:"Join on-ground projects: water installations, community welfare, school support." },
  { id:"digital",    icon:"💻", title:"Digital Volunteer",   desc:"Support social media, content creation, email campaigns, and LMS management." },
  { id:"mentor",     icon:"🧭", title:"Startup Mentor",      desc:"Guide young entrepreneurs through ideation, validation, and early-stage growth." },
  { id:"fundraiser", icon:"💰", title:"Fundraiser",          desc:"Help us raise funds by organizing events, pitching to donors, or personal campaigns." },
];

const SKILLS_LIST = ["Teaching","Graphic Design","Video Editing","Marketing","Programming","Social Media","Community Work","Fundraising","Mentorship","Translation"];

export default function VolunteerPage() {
  const [role, setRole]         = useState("");
  const [skills, setSkills]     = useState<string[]>([]);
  const [form, setForm]         = useState({ name:"", email:"", phone:"", city:"", availability:"", motivation:"" });
  const [errors, setErrors]     = useState<Record<string,string>>({});
  const [status, setStatus]     = useState<"idle"|"loading"|"success"|"error">("idle");

  const toggleSkill = (s: string) => setSkills(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev,s]);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())    e.name  = "Name required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!role)                e.role  = "Please select a volunteer role";
    setErrors(e); return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/volunteer", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ ...form, role, skills }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <>
      <Navbar />
      <div style={{ minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#F8F6FB", padding:"2rem" }}>
        <div style={{ maxWidth:520, textAlign:"center", background:"white", borderRadius:24, padding:"3rem 2.5rem", boxShadow:"0 12px 50px rgba(107,45,143,.12)", border:"2px solid rgba(13,158,106,.2)" }}>
          <div style={{ fontSize:"4rem", marginBottom:"1rem" }}>🤝</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.2rem", fontWeight:700, color:"#0d9e6a", marginBottom:".75rem" }}>Welcome Aboard!</h2>
          <p style={{ color:"#555", fontSize:15, lineHeight:1.82, marginBottom:"1.5rem" }}>
            JazakAllah Khair, <strong>{form.name}</strong>! Your volunteer application has been received.<br />
            Our team will reach out within <strong>48 hours</strong> on <strong>{form.email}</strong>.
          </p>
          <div style={{ background:"#F8F6FB", borderRadius:12, padding:"1rem", marginBottom:"1.5rem", fontSize:13, color:"#555" }}>
            Role: <strong>{ROLES.find(r=>r.id===role)?.title}</strong><br />
            Skills: <strong>{skills.join(", ") || "General"}</strong>
          </div>
          <a href="/" style={{ display:"inline-block" }}>
            <button className="btn-primary" style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>Back to Home →</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <PageHero badge="Volunteer" title="Give Your Time," highlight="Change a Life"
        subtitle="You don't need money to make a difference. Your skills, time, and energy are equally powerful."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Fikr Fardan Foundation volunteers collaborating on community development project in Pakistan" />

      {/* WHY VOLUNTEER */}
      <section style={{ background:"#F8F6FB", padding:"5rem 1.5rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">Why Volunteer</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:700, color:"#1a0533" }}>Your Hour = Someone&apos;s Future</h2>
            </div>
          </FadeSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"1.5rem", marginBottom:"3.5rem" }}>
            {ROLES.map((r, i) => (
              <FadeSection key={r.id} delay={i*.1}>
                <div onClick={()=>{setRole(r.id);setErrors(e=>({...e,role:""}));}}
                  style={{ background:"white", borderRadius:18, padding:"1.75rem", border:`2px solid ${role===r.id?"#6B2D8F":"rgba(107,45,143,.08)"}`, cursor:"pointer", transition:"all .25s", boxShadow:role===r.id?"0 8px 30px rgba(107,45,143,.18)":"none" }}>
                  <div style={{ fontSize:"2.2rem", marginBottom:"1rem" }}>{r.icon}</div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", fontWeight:700, color:"#1a0533", marginBottom:".5rem" }}>{r.title}</h3>
                  <p style={{ color:"#777", fontSize:13, lineHeight:1.78 }}>{r.desc}</p>
                  {role===r.id && <div style={{ marginTop:".75rem", fontSize:12, color:"#6B2D8F", fontWeight:700 }}>✓ Selected</div>}
                </div>
              </FadeSection>
            ))}
          </div>
          {errors.role && <p style={{ color:"#c0392b", textAlign:"center", fontSize:13, marginBottom:"1.5rem" }}>⚠ {errors.role}</p>}

          {/* APPLICATION FORM */}
          <FadeSection delay={.2}>
            <div style={{ maxWidth:780, margin:"0 auto", background:"white", borderRadius:24, padding:"2.5rem", border:"1px solid rgba(107,45,143,.1)", boxShadow:"0 8px 40px rgba(107,45,143,.06)" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:700, color:"#1a0533", marginBottom:"1.75rem" }}>Volunteer Application</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  {(["name","email"] as const).map(k => (
                    <div className="input-group" key={k}>
                      <label className="input-label">{k==="name"?"Full Name *":"Email *"}</label>
                      <input className={`form-field ${errors[k]?"error":""}`} placeholder={k==="name"?"Your full name":"you@email.com"}
                        value={form[k]} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} />
                      {errors[k] && <span className="input-error">⚠ {errors[k]}</span>}
                    </div>
                  ))}
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  <div className="input-group">
                    <label className="input-label">Phone</label>
                    <input className="form-field" placeholder="+92 3XX XXXXXXX" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} />
                  </div>
                  <div className="input-group">
                    <label className="input-label">City</label>
                    <input className="form-field" placeholder="e.g. Lahore" value={form.city} onChange={e=>setForm(f=>({...f,city:e.target.value}))} />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Your Skills (select all that apply)</label>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {SKILLS_LIST.map(s=>(
                      <button key={s} type="button" onClick={()=>toggleSkill(s)}
                        style={{ padding:"6px 14px", borderRadius:50, border:`1.5px solid ${skills.includes(s)?"#6B2D8F":"#ddd"}`, background:skills.includes(s)?"#6B2D8F":"white", color:skills.includes(s)?"white":"#555", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit',sans-serif", transition:"all .2s" }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Availability</label>
                  <select className="form-field" value={form.availability} onChange={e=>setForm(f=>({...f,availability:e.target.value}))} style={{ cursor:"pointer" }}>
                    <option value="">Select availability</option>
                    {["Weekends only","Weekdays (part-time)","Full-time available","Flexible / As needed"].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">Why do you want to volunteer?</label>
                  <textarea className="form-field" rows={4} placeholder="Tell us your motivation..."
                    value={form.motivation} onChange={e=>setForm(f=>({...f,motivation:e.target.value}))}
                    style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
                </div>
                {status === "error" && <div style={{ background:"rgba(192,57,43,.08)", border:"1px solid rgba(192,57,43,.2)", borderRadius:10, padding:"10px 14px", color:"#c0392b", fontSize:13 }}>⚠ Something went wrong. Please try again.</div>}
                <button className="btn-primary" onClick={submit} disabled={status==="loading"} style={{ padding:"13px", borderRadius:10, fontSize:14, fontWeight:700 }}>
                  {status==="loading" ? "Submitting..." : "Submit Application 🤝"}
                </button>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
      <Footer />
    </>
  );
}
