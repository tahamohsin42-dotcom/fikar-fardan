"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { BRAND } from "@/data/content";

const SUBJECTS = [
  "General Inquiry","Donation Question","Enrollment Help",
  "Volunteer Opportunity","Partnership / Collaboration","Media Request","Other",
];

const INFO = [
  { icon:"📧", label:"Email",     value:BRAND.email,  href:`mailto:${BRAND.email}` },
  { icon:"📞", label:"WhatsApp",  value:BRAND.phone,  href:`https://wa.me/923028848500` },
  { icon:"📍", label:"Location",  value:"Lahore, Punjab, Pakistan", href:null },
  { icon:"🕐", label:"Hours",     value:"Mon–Sat, 9 AM – 6 PM PKT", href:null },
];

export default function ContactPage() {
  const [form, setForm]       = useState({ name:"", email:"", phone:"", subject:"General Inquiry", message:"" });
  const [errors, setErrors]   = useState<Record<string,string>>({});
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())                        e.name    = "Name is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.message.trim())                     e.message = "Message is required";
    setErrors(e); return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const field = (k: keyof typeof form, label: string, type="text", ph="") => (
    <div className="input-group">
      <label className="input-label">{label}</label>
      {type === "textarea"
        ? <textarea className={`form-field ${errors[k]?"error":""}`} rows={5} placeholder={ph}
            value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))}
            style={{ resize:"vertical", fontFamily:"'Outfit',sans-serif" }} />
        : <input className={`form-field ${errors[k]?"error":""}`} type={type} placeholder={ph}
            value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} />
      }
      {errors[k] && <span className="input-error">⚠ {errors[k]}</span>}
    </div>
  );

  return (
    <>
      <Navbar />
      <PageHero badge="Contact Us" title="Get in" highlight="Touch"
        subtitle="Questions, partnerships, or just want to say Asalaam o Alaikum — we're here."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Fikr Fardan Foundation team and operations center in Lahore Pakistan" />

      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"4rem", alignItems:"start" }} className="contact-grid">

          {/* INFO COLUMN */}
          <FadeSection>
            <div>
              <span className="section-label">Contact Info</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:700, color:"#1a0533", marginBottom:"1.5rem" }}>Let&apos;s Talk</h2>
              <p style={{ color:"#777", fontSize:14, lineHeight:1.88, marginBottom:"2rem" }}>
                Our team typically responds within 24 hours. For urgent donation or enrollment queries, WhatsApp is fastest.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem", marginBottom:"2.5rem" }}>
                {INFO.map(i => (
                  <div key={i.label} style={{ display:"flex", alignItems:"center", gap:14 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:"rgba(107,45,143,.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{i.icon}</div>
                    <div>
                      <div style={{ fontSize:11, color:"#aaa", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" }}>{i.label}</div>
                      {i.href
                        ? <a href={i.href} target="_blank" rel="noopener noreferrer" style={{ color:"#6B2D8F", fontSize:14, fontWeight:600 }}>{i.value}</a>
                        : <span style={{ color:"#333", fontSize:14, fontWeight:600 }}>{i.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div>
                <p style={{ fontSize:12, fontWeight:700, color:"#888", letterSpacing:"1px", textTransform:"uppercase", marginBottom:".75rem" }}>Follow Us</p>
                <div style={{ display:"flex", gap:10 }}>
                  {[["FB","Facebook","https://facebook.com"],["YT","YouTube","https://youtube.com"],["IG","Instagram","https://instagram.com"],["LI","LinkedIn","https://linkedin.com"]].map(([abbr,name,href])=>(
                    <a key={abbr} href={href} target="_blank" rel="noopener noreferrer" title={name}
                      style={{ width:40, height:40, borderRadius:10, background:"rgba(107,45,143,.1)", border:"1px solid rgba(107,45,143,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#6B2D8F", textDecoration:"none", transition:"all .2s" }}>
                      {abbr}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>

          {/* FORM COLUMN */}
          <FadeSection delay={.15}>
            {status === "success" ? (
              <div style={{ background:"white", borderRadius:24, padding:"3rem", textAlign:"center", border:"2px solid rgba(13,158,106,.2)", boxShadow:"0 12px 40px rgba(13,158,106,.08)" }}>
                <div style={{ fontSize:"4rem", marginBottom:"1rem" }}>✅</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:700, color:"#0d9e6a", marginBottom:".75rem" }}>Message Sent!</h3>
                <p style={{ color:"#555", fontSize:15, lineHeight:1.8, marginBottom:"1.5rem" }}>JazakAllah Khair! We&apos;ve received your message and will respond within 24 hours.</p>
                <button className="btn-primary" onClick={()=>{setStatus("idle");setForm({name:"",email:"",phone:"",subject:"General Inquiry",message:""});}} style={{ padding:"11px 28px", borderRadius:10, fontSize:14 }}>
                  Send Another →
                </button>
              </div>
            ) : (
              <div style={{ background:"white", borderRadius:24, padding:"2.5rem", border:"1px solid rgba(107,45,143,.08)", boxShadow:"0 8px 40px rgba(107,45,143,.07)" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:700, color:"#1a0533", marginBottom:"1.75rem" }}>Send a Message</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    {field("name", "Full Name *", "text", "Your full name")}
                    {field("email", "Email Address *", "email", "you@example.com")}
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                    {field("phone", "Phone (optional)", "tel", "+92 3XX XXXXXXX")}
                    <div className="input-group">
                      <label className="input-label">Subject</label>
                      <select className="form-field" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} style={{ cursor:"pointer" }}>
                        {SUBJECTS.map(s=><option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  {field("message", "Message *", "textarea", "Tell us how we can help...")}
                  {status === "error" && <div style={{ background:"rgba(192,57,43,.08)", border:"1px solid rgba(192,57,43,.25)", borderRadius:10, padding:"10px 14px", color:"#c0392b", fontSize:13 }}>⚠ Something went wrong. Please try again or email us directly.</div>}
                  <button className="btn-primary" onClick={submit} disabled={status==="loading"} style={{ padding:"13px", borderRadius:10, fontSize:14, fontWeight:700, marginTop:".5rem" }}>
                    {status === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              </div>
            )}
          </FadeSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:"white", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <FadeSection>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <span className="section-label">FAQ</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:700, color:"#1a0533" }}>Common Questions</h2>
            </div>
          </FadeSection>
          {[
            ["How do I enroll in a free course?","Visit our Enroll page, choose your program, fill the form and submit. Our team will contact you within 48 hours with next steps."],
            ["Where does my donation go?","100% of donations go to the stated cause. We maintain detailed records and publish regular impact reports for full transparency."],
            ["How can I become a volunteer?","Visit our Volunteer page, select your area of interest, and submit an application. We welcome teachers, marketers, developers, and field workers."],
            ["Do you issue donation receipts?","Yes — every donor receives a confirmation message with a unique receipt ID immediately after submitting a donation."],
          ].map(([q,a],i)=>(
            <FadeSection key={q} delay={i*.1}>
              <div style={{ background:"#F8F6FB", borderRadius:16, padding:"1.5rem", marginBottom:"1rem", border:"1px solid rgba(107,45,143,.08)" }}>
                <h3 style={{ fontSize:15, fontWeight:700, color:"#1a0533", marginBottom:".6rem" }}>Q: {q}</h3>
                <p style={{ color:"#666", fontSize:13, lineHeight:1.82 }}>A: {a}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
