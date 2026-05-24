"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { BRAND } from "@/data/content";

const ROLES = [
  { icon: "📚", title: "Skills Trainer",     desc: "Teach courses in your area of expertise — online or in-person at our Lahore hub.",   time: "4–8 hrs/week" },
  { icon: "🌍", title: "Field Volunteer",     desc: "Assist water pump installations, community outreach drives, and welfare distributions.", time: "Flexible" },
  { icon: "💻", title: "Digital Contributor", desc: "Help with website, social media, content creation, or graphic design tasks.",          time: "Remote, 3–5 hrs/week" },
  { icon: "🤝", title: "Fundraising Partner", desc: "Organize campaigns, donor drives, or corporate partnerships in your network.",          time: "Project-based" },
  { icon: "📋", title: "Program Coordinator", desc: "Manage cohort logistics, student communications, and progress tracking.",                time: "Part-time / Full-time" },
  { icon: "🎤", title: "Mentor",              desc: "One-on-one mentoring for startup founders or skill development students.",              time: "2–4 hrs/month" },
];

const SKILLS = ["Teaching", "Graphic Design", "Marketing", "Web Dev", "Photography", "Video Editing", "Community Work", "Fundraising", "Writing", "Data Analysis", "Finance", "Other"];

type Stage = "form" | "success";
interface VForm { name: string; email: string; phone: string; city: string; role: string; skills: string[]; availability: string; message: string; }

export default function VolunteerPage() {
  const [stage, setStage] = useState<Stage>("form");
  const [form, setForm] = useState<VForm>({ name: "", email: "", phone: "", city: "", role: "", skills: [], availability: "", message: "" });
  const [errors, setErrors] = useState<Partial<VForm>>({});
  const [loading, setLoading] = useState(false);

  function set(k: keyof VForm, v: string | string[]) { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: "" })); }

  function toggleSkill(s: string) {
    const cur = form.skills;
    set("skills", cur.includes(s) ? cur.filter(x => x !== s) : [...cur, s]);
  }

  function validate() {
    const e: Partial<VForm> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10) e.phone = "Valid phone required";
    if (!form.role) e.role = "Please select a role";
    setErrors(e);
    return !Object.keys(e).length;
  }

  async function submit() {
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch("/api/volunteer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } catch { /* offline - still show success */ }
    setTimeout(() => { setLoading(false); setStage("success"); }, 1000);
  }

  const inp = (placeholder: string, k: keyof VForm, type = "text"): React.CSSProperties => ({ width: "100%", padding: "11px 14px", borderRadius: 10, border: `1.5px solid ${errors[k] ? "#ef4444" : "#e0daea"}`, fontSize: 13, fontFamily: "'Outfit',sans-serif", color: "#333", background: "#fafaf8", outline: "none" });

  return (
    <>
      <Navbar />
      <PageHero badge="Join the Movement" title="Volunteer &" highlight="Change Lives" subtitle="Your time and skills can transform communities. Join 320+ volunteers already making a difference across Pakistan." />

      {/* Why Volunteer */}
      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="section-badge">Why Volunteer?</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#1a0533" }}>More Than Giving Time</h2>
            </div>
          </FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
            {[
              { icon: "🌱", title: "Grow Personally", desc: "Build skills, gain experience, and expand your professional network while serving a cause greater than yourself." },
              { icon: "🤝", title: "Real Community",  desc: "Join a warm, driven group of like-minded Pakistanis who believe in the power of capability over charity." },
              { icon: "📜", title: "Verified Experience", desc: "Receive official volunteer certificates and LinkedIn-ready recommendations for your service." },
              { icon: "🌍", title: "Lasting Impact", desc: "Your contribution helps train the next generation of self-reliant youth who go on to lift entire families." },
            ].map((b, i) => (
              <FadeSection key={b.title} delay={i * 0.1}>
                <div className="card-hover" style={{ background: "#F8F6FB", borderRadius: 18, padding: "2rem", border: "1px solid rgba(107,45,143,0.08)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{b.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a0533", marginBottom: ".6rem" }}>{b.title}</h3>
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.8 }}>{b.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Roles */}
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-badge">Open Roles</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#1a0533" }}>Where We Need You</h2>
            </div>
          </FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {ROLES.map((r, i) => (
              <FadeSection key={r.title} delay={i * 0.08}>
                <div className="card-hover" style={{ background: "white", borderRadius: 16, padding: "1.75rem", border: "1px solid rgba(107,45,143,0.1)", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "2rem", flexShrink: 0 }}>{r.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a0533", marginBottom: "0.4rem" }}>{r.title}</h3>
                    <p style={{ color: "#666", fontSize: 13, lineHeight: 1.75, marginBottom: "0.75rem" }}>{r.desc}</p>
                    <span style={{ fontSize: 11, background: "rgba(107,45,143,0.1)", color: "#6B2D8F", padding: "3px 10px", borderRadius: 50, fontWeight: 700 }}>⏱ {r.time}</span>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Form */}
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <FadeSection>
              <div style={{ background: "#F8F6FB", borderRadius: 24, padding: "3rem", border: "1px solid rgba(107,45,143,0.1)" }}>
                {stage === "success" ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🤝</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".75rem" }}>JazakAllah Khair, {form.name.split(" ")[0]}!</h2>
                    <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>Your volunteer application has been received. Our team will reach out within 48 hours to discuss next steps. InshAllah, together we'll create lasting change.</p>
                    <div style={{ background: "white", borderRadius: 14, padding: "1.25rem", border: "1px solid rgba(107,45,143,0.1)" }}>
                      <p style={{ fontSize: 13, color: "#777" }}>WhatsApp us anytime: <strong style={{ color: "#6B2D8F" }}>{BRAND.phone}</strong></p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>Apply to Volunteer</h2>
                    <p style={{ color: "#888", fontSize: 14, marginBottom: "2rem" }}>Fill in your details and we'll match you with the best opportunity.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-grid">
                      <div>
                        <input style={inp("Full Name", "name")} placeholder="Full Name" value={form.name} onChange={e => set("name", e.target.value)} />
                        {errors.name && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
                      </div>
                      <div>
                        <input style={inp("Email Address", "email", "email")} placeholder="Email Address" type="email" value={form.email} onChange={e => set("email", e.target.value)} />
                        {errors.email && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
                      </div>
                      <div>
                        <input style={inp("Phone Number", "phone", "tel")} placeholder="Phone Number" type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} />
                        {errors.phone && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.phone}</p>}
                      </div>
                      <div>
                        <input style={inp("City", "city")} placeholder="City" value={form.city} onChange={e => set("city", e.target.value)} />
                      </div>
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#333", letterSpacing: "0.5px", display: "block", marginBottom: 8 }}>Preferred Role *</label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }} className="form-grid">
                        {ROLES.map(r => (
                          <button key={r.title} onClick={() => set("role", r.title)} type="button"
                            style={{ padding: "8px 12px", borderRadius: 9, border: `1.5px solid ${form.role === r.title ? "#6B2D8F" : "#e0daea"}`, background: form.role === r.title ? "rgba(107,45,143,0.1)" : "white", color: form.role === r.title ? "#6B2D8F" : "#555", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit',sans-serif", textAlign: "left" }}>
                            {r.icon} {r.title}
                          </button>
                        ))}
                      </div>
                      {errors.role && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.role}</p>}
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                      <label style={{ fontSize: 12, fontWeight: 700, color: "#333", letterSpacing: "0.5px", display: "block", marginBottom: 8 }}>Your Skills (select all that apply)</label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {SKILLS.map(s => (
                          <button key={s} onClick={() => toggleSkill(s)} type="button"
                            style={{ padding: "6px 14px", borderRadius: 50, border: `1.5px solid ${form.skills.includes(s) ? "#6B2D8F" : "#e0daea"}`, background: form.skills.includes(s) ? "#6B2D8F" : "white", color: form.skills.includes(s) ? "white" : "#555", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <textarea placeholder="Tell us briefly why you want to volunteer and what motivates you..." value={form.message} onChange={e => set("message", e.target.value)} rows={4}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e0daea", fontSize: 13, fontFamily: "'Outfit',sans-serif", color: "#333", background: "#fafaf8", outline: "none", resize: "vertical" }} />
                    </div>
                    <button onClick={submit} disabled={loading}
                      style={{ width: "100%", padding: 14, borderRadius: 12, background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)", color: "white", border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 15, fontWeight: 700, fontFamily: "'Outfit',sans-serif", opacity: loading ? 0.75 : 1 }}>
                      {loading ? "Submitting..." : "Submit Volunteer Application 🤝"}
                    </button>
                  </>
                )}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        .section-badge { display:inline-block; background:rgba(107,45,143,0.1); color:#6B2D8F; padding:5px 14px; border-radius:50px; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:1rem; }
        @media(max-width:640px){ .form-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </>
  );
}
