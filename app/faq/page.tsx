"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { BRAND } from "@/data/content";

const FAQS = [
  { cat:"Donations", q:"Where does my donation go?", a:"100% of your donation goes to the specified cause. We maintain full transparency with detailed records and publish regular impact reports. Your funds are never used for administrative overhead without disclosure." },
  { cat:"Donations", q:"How do I donate?", a:"Visit our Donate page, select a cause, fill the form, and transfer via Meezan Bank IBAN PK36MEZN0003180106685083 (Fikr Fardan Foundation). Upload your payment screenshot in the form and our team will confirm within 24 hours." },
  { cat:"Donations", q:"Do I get a receipt?", a:"Yes! Every donor receives a confirmation email with a unique receipt ID within 24 hours of verified payment. Download-ready PDF receipts are available on request." },
  { cat:"Donations", q:"Can I donate from outside Pakistan?", a:"Yes. International donors can use bank wire transfer. Contact us at fikrfardan@gmail.com for international transfer details." },
  { cat:"Courses",   q:"Are the courses really free?", a:"Absolutely 100% free for deserving youth. No hidden fees, no premium tiers. We believe skill education is a right, not a privilege." },
  { cat:"Courses",   q:"How do I enroll in a course?", a:"Visit the Courses page, choose your program, and fill the enrollment form. Our team reviews applications within 48 hours and sends login credentials to approved students." },
  { cat:"Courses",   q:"What happens after I enroll?", a:"You receive an email with your LMS login credentials. You can then access recorded lectures, live sessions, assignments, and progress tracking from your student dashboard." },
  { cat:"Courses",   q:"Do I get a certificate?", a:"Yes. Students who complete a course receive a free e-certificate with a unique ID and QR verification code. Hard-copy certificates are available for PKR 500 with courier delivery." },
  { cat:"Startup Fund", q:"What is the Startup Fund?", a:"The Startup Fund provides seed capital and tools to deserving individuals to start their own small business — from bikes for riders to laptops for freelancers. We fund businesses that create sustainable daily income." },
  { cat:"Startup Fund", q:"How can I apply for the Startup Fund?", a:"Contact us via our Contact page or WhatsApp. Our team reviews applicants based on need, commitment, and potential for self-reliance. Selected candidates receive full funding and mentorship." },
  { cat:"Volunteer",  q:"How do I volunteer?", a:"Visit our Volunteer page, select your area of expertise (teaching, digital, field, mentorship, or fundraising), and submit an application. We respond within 48 hours." },
  { cat:"Volunteer",  q:"Do volunteers get compensated?", a:"Volunteering is currently on an honorary basis. However, exceptional volunteers are considered for paid positions as the foundation grows. We provide certificates and references." },
  { cat:"General",   q:"Is Fikr Fardan a registered NGO?", a:"Fikr Fardan Foundation is a social impact organization dedicated to youth empowerment in Pakistan. Contact us for our official documentation and registration details." },
  { cat:"General",   q:"How can I contact the foundation?", a:`Email: ${BRAND.email} | WhatsApp: ${BRAND.phone} | Location: ${BRAND.address}. We respond within 24 hours on business days.` },
];

const CATS = ["All", ...Array.from(new Set(FAQS.map(f => f.cat)))];

export default function FAQPage() {
  const [open, setOpen]   = useState<number|null>(null);
  const [cat, setCat]     = useState("All");
  const filtered = cat === "All" ? FAQS : FAQS.filter(f => f.cat === cat);

  return (
    <>
      <Navbar />
      <PageHero badge="FAQ" title="Frequently Asked" highlight="Questions"
        subtitle="Everything you need to know about donating, enrolling, volunteering, and more." />

      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:"2.5rem", justifyContent:"center" }}>
            {CATS.map(c => (
              <button key={c} onClick={()=>setCat(c)}
                style={{ padding:"8px 18px", borderRadius:50, border:`1.5px solid ${cat===c?"#6B2D8F":"#ddd"}`, background:cat===c?"#6B2D8F":"white", color:cat===c?"white":"#666", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit',sans-serif" }}>
                {c}
              </button>
            ))}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {filtered.map((faq, i) => (
              <FadeSection key={i} delay={i*.04}>
                <div style={{ background:"white", borderRadius:16, overflow:"hidden", border:"1px solid rgba(107,45,143,.08)", boxShadow:"0 2px 12px rgba(107,45,143,.04)" }}>
                  <button onClick={()=>setOpen(open===i?null:i)}
                    style={{ width:"100%", padding:"1.25rem 1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", background:"none", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"'Outfit',sans-serif" }}>
                    <div>
                      <span style={{ fontSize:10, color:"#6B2D8F", fontWeight:800, letterSpacing:"1px", textTransform:"uppercase", display:"block", marginBottom:4 }}>{faq.cat}</span>
                      <span style={{ fontSize:15, fontWeight:700, color:"#1a0533" }}>{faq.q}</span>
                    </div>
                    <span style={{ fontSize:20, color:"#6B2D8F", flexShrink:0, marginLeft:12, transition:"transform .25s", transform:open===i?"rotate(45deg)":"rotate(0)" }}>+</span>
                  </button>
                  {open===i && (
                    <div style={{ padding:"0 1.5rem 1.25rem", borderTop:"1px solid #f0eef8" }}>
                      <p style={{ color:"#555", fontSize:14, lineHeight:1.85, paddingTop:"1rem" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection delay={.2}>
            <div style={{ textAlign:"center", marginTop:"3rem", background:"white", borderRadius:20, padding:"2.5rem", border:"1px solid rgba(107,45,143,.08)" }}>
              <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>💬</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:700, color:"#1a0533", marginBottom:".75rem" }}>Still have questions?</h3>
              <p style={{ color:"#777", fontSize:14, marginBottom:"1.5rem" }}>Our team responds within 24 hours on WhatsApp or email.</p>
              <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
                <a href={`mailto:${BRAND.email}`}><button className="btn-primary" style={{ padding:"12px 28px", borderRadius:10, fontSize:14 }}>Email Us →</button></a>
                <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer"><button style={{ padding:"12px 28px", borderRadius:10, fontSize:14, background:"#25D366", color:"white", border:"none", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600 }}>WhatsApp 💬</button></a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
      <Footer />
    </>
  );
}
