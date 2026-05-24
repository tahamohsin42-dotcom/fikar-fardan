"use client";
import { useState } from "react";
import FadeSection from "@/components/ui/FadeSection";
import { COURSES, PROGRAMS } from "@/data/content";

type Stage = "browse" | "form" | "success";

export default function EnrollClient() {
  const [stage, setStage] = useState<Stage>("browse");
  const [selected, setSelected] = useState<string>("");
  const [form, setForm] = useState({ name:"", email:"", phone:"", experience:"", motivation:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);

  const allPrograms = [
    ...COURSES.map(c => ({ id: c.id, title: c.title, type: "course" as const, icon: c.icon, duration: c.duration, seats: null })),
    ...PROGRAMS.filter(p => p.tag === "Active").map(p => ({ id: p.id, title: p.title, type: "program" as const, icon: p.icon, duration: p.duration, seats: p.seats })),
  ];

  function validate() {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10) e.phone = "Valid phone required";
    if (!selected) e.program = "Please select a program";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, program: selected }),
      });
      const data = await res.json();
      if (data.success) setStage("success");
      else alert(data.error || "Please try again.");
    } catch { alert("Network error. Try again."); }
    setLoading(false);
  }

  if (stage === "success") return (
    <section style={{ background: "#F8F6FB", padding: "5rem 1.5rem", minHeight: "50vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <div className="receipt-pop" style={{ background: "white", borderRadius: 24, padding: "3rem", boxShadow: "0 20px 60px rgba(107,45,143,.12)" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎓</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>Enrollment Confirmed!</h2>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.8, marginBottom: "1.75rem" }}>
            Alhamdulillah! You&apos;re enrolled in <strong style={{ color: "#6B2D8F" }}>{selected}</strong>. Our team will WhatsApp you the access details within 24 hours.
          </p>
          <div style={{ background: "rgba(13,158,106,.07)", border: "1px solid rgba(13,158,106,.2)", borderRadius: 12, padding: "1rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: 13, color: "#0d9e6a" }}>📱 Check WhatsApp — we&apos;ll send course login details to <strong>{form.phone}</strong></p>
          </div>
          <button className="btn-primary" style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14 }} onClick={() => { setStage("browse"); setForm({ name:"",email:"",phone:"",experience:"",motivation:"" }); setSelected(""); }}>
            Browse More Courses
          </button>
        </div>
      </div>
    </section>
  );

  if (stage === "form") return (
    <section style={{ background: "#F8F6FB", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <FadeSection>
          <button onClick={() => setStage("browse")} style={{ background: "none", border: "none", color: "#6B2D8F", cursor: "pointer", fontSize: 14, marginBottom: "1.5rem", fontFamily: "'Outfit',sans-serif", display: "flex", alignItems: "center", gap: 6 }}>← Back to courses</button>
          <div style={{ background: "white", borderRadius: 20, padding: "2.5rem", boxShadow: "0 8px 40px rgba(107,45,143,.1)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a0533", marginBottom: ".25rem" }}>Enrollment Application</h2>
            <p style={{ color: "#888", fontSize: 13, marginBottom: "1.75rem" }}>Enrolling in: <strong style={{ color: "#6B2D8F" }}>{selected}</strong></p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {(["name","email","phone"] as const).map(f => (
                <div key={f} className="input-group">
                  <label className="input-label">{f==="name"?"Full Name":f==="email"?"Email":"Phone (WhatsApp)"}</label>
                  <input className={`form-field ${errors[f]?"error":""}`} value={form[f]} type={f==="email"?"email":f==="phone"?"tel":"text"}
                    placeholder={f==="name"?"Your full name":f==="email"?"your@email.com":"+92 3XX XXXXXXX"}
                    onChange={e=>setForm(p=>({...p,[f]:e.target.value}))} />
                  {errors[f] && <span className="input-error">{errors[f]}</span>}
                </div>
              ))}
              <div className="input-group">
                <label className="input-label">Current Experience Level</label>
                <select className="form-field" value={form.experience} onChange={e=>setForm(p=>({...p,experience:e.target.value}))}>
                  <option value="">Select experience level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-knowledge">Some Knowledge</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Why do you want to join? (Optional)</label>
                <textarea className="form-field" rows={3} value={form.motivation} placeholder="Tell us your goal and what you hope to achieve..."
                  onChange={e=>setForm(p=>({...p,motivation:e.target.value}))} />
              </div>
            </div>
            <button className="btn-primary" disabled={loading} onClick={submit} style={{ width: "100%", padding: "13px", borderRadius: 12, fontSize: 15, marginTop: "1.5rem" }}>
              {loading ? "Submitting..." : "Complete Enrollment →"}
            </button>
            <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: ".75rem" }}>📱 Course access sent via WhatsApp within 24 hours</p>
          </div>
        </FadeSection>
      </div>
    </section>
  );

  return (
    <section style={{ background: "#F8F6FB", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a0533" }}>All Free Courses & Programs</h2>
            <span className="badge badge-green">8 Courses Available</span>
          </div>
        </FadeSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.25rem" }}>
          {COURSES.map((c, i) => (
            <FadeSection key={c.id} delay={i*.07}>
              <div className="card-hover" style={{ background: "white", borderRadius: 18, padding: "1.75rem", border: "1px solid rgba(107,45,143,.08)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "2rem" }}>{c.icon}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <span className="badge badge-green">FREE</span>
                    <span className="badge badge-gray">⏱ {c.duration}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a0533", marginBottom: ".5rem", lineHeight: 1.45 }}>{c.title}</h3>
                <p style={{ color: "#777", fontSize: 12, lineHeight: 1.75, flex: 1, marginBottom: "1rem" }}>{c.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: 11, color: "#aaa" }}>👤 {c.students.toLocaleString()} enrolled</span>
                </div>
                <button className="btn-primary" style={{ width: "100%", padding: "10px", borderRadius: 9, fontSize: 13 }}
                  onClick={() => { setSelected(c.title); setStage("form"); }}>
                  Enroll Free →
                </button>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", borderRadius: 20, padding: "2.5rem", textAlign: "center", color: "white" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: ".75rem" }}>Want Full Program Enrollment?</h3>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: 14, marginBottom: "1.5rem" }}>Join our 3-month Skill Development or Startup Support programs for mentored, structured training.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {PROGRAMS.filter(p=>p.tag==="Active").map(p => (
                <button key={p.id} className="btn-ghost" style={{ padding: "10px 22px", borderRadius: 9, fontSize: 13 }}
                  onClick={() => { setSelected(p.title); setStage("form"); }}>
                  {p.icon} Apply for {p.title}
                </button>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
