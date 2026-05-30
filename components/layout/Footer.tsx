"use client";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/data/content";

const LINKS = {
  Platform: [
    { label:"Home",           href:"/"           },
    { label:"About Us",       href:"/about"      },
    { label:"Programs",       href:"/programs"   },
    { label:"Courses",        href:"/enroll"     },
    { label:"Startup Fund",   href:"/startup"    },
    { label:"Impact",         href:"/impact"     },
  ],
  Support: [
    { label:"Donate",         href:"/donate"     },
    { label:"Volunteer",      href:"/volunteer"  },
    { label:"Contact Us",     href:"/contact"    },
    { label:"FAQ",            href:"/faq"        },
    { label:"LMS Dashboard",  href:"/lms"        },
  ],
  Legal: [
    { label:"Privacy Policy", href:"/privacy"    },
    { label:"Terms of Use",   href:"/terms"      },
    { label:"Refund Policy",  href:"/refund"     },
  ],
};

const SOCIALS = [
  { href:BRAND.social.instagram, label:"Instagram", abbr:"IG", color:"#E1306C" },
  { href:BRAND.social.facebook,  label:"Facebook",  abbr:"FB", color:"#1877F2" },
  { href:BRAND.social.youtube,   label:"YouTube",   abbr:"YT", color:"#FF0000" },
  { href:BRAND.social.linkedin,  label:"LinkedIn",  abbr:"LI", color:"#0A66C2" },
  { href:BRAND.social.whatsapp,  label:"WhatsApp",  abbr:"WA", color:"#25D366" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#0D0520", color:"white", padding:"5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth:1320, margin:"0 auto" }}>
        <div className="footer-grid" style={{ marginBottom:"3.5rem" }}>
          <div>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1rem", textDecoration:"none" }}>
              <div style={{ width:46, height:46, position:"relative", borderRadius:10, overflow:"hidden", background:"white", padding:3, flexShrink:0 }}>
                <Image src="/logo-icon.jpg" alt="Fikr Fardan" fill style={{ objectFit:"contain" }} />
              </div>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700 }}>Fikr Fardan</div>
                <div style={{ fontSize:9, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase" }}>Foundation</div>
              </div>
            </Link>
            <p style={{ color:"rgba(255,255,255,.42)", fontSize:13, lineHeight:1.88, maxWidth:270, marginBottom:"1.5rem" }}>
              {BRAND.tagline} — empowering Pakistani youth through skills, opportunity, and sustainable impact.
            </p>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="social-icon-btn"
                  style={{ width:36, height:36, borderRadius:8, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:11, fontWeight:800, textDecoration:"none" }}>
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ color:"#D4A017", fontSize:11, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"1.25rem", fontWeight:800 }}>{section}</h4>
              {items.map(item => (
                <Link key={item.label} href={item.href} className="footer-link"
                  style={{ display:"block", color:"rgba(255,255,255,.42)", fontSize:13, marginBottom:10, textDecoration:"none" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <h4 style={{ color:"#D4A017", fontSize:11, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"1.25rem", fontWeight:800 }}>Contact</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <a href={`mailto:${BRAND.email}`} className="footer-link" style={{ color:"rgba(255,255,255,.42)", fontSize:13, textDecoration:"none" }}>📧 {BRAND.email}</a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="footer-link" style={{ color:"rgba(255,255,255,.42)", fontSize:13, textDecoration:"none" }}>📞 {BRAND.phone}</a>
              <span style={{ color:"rgba(255,255,255,.42)", fontSize:13 }}>📍 {BRAND.address}</span>
            </div>
            <div style={{ marginTop:"1.5rem" }}>
              <p style={{ fontSize:11, color:"#D4A017", fontWeight:800, letterSpacing:"1px", textTransform:"uppercase", marginBottom:".5rem" }}>Bank Transfer</p>
              <div style={{ background:"rgba(107,45,143,.15)", borderRadius:10, padding:"10px 12px", fontSize:12, color:"rgba(255,255,255,.6)", lineHeight:1.7 }}>
                <div style={{ fontWeight:700 }}>{BRAND.bankTitle}</div>
                <div>{BRAND.bankName}</div>
                <div style={{ fontFamily:"monospace", fontSize:11 }}>{BRAND.bankIBAN}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:"2rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ color:"rgba(255,255,255,.22)", fontSize:12 }}>© 2025 Fikr Fardan Foundation. All rights reserved.</p>
          <p style={{ color:"rgba(255,255,255,.15)", fontSize:12 }}>Give Opportunity, Not Dependency 🇵🇰</p>
        </div>
      </div>

      <style>{`
        .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1.5fr; gap:2.5rem; }
        .footer-link:hover { color:rgba(255,255,255,.88) !important; }
        .social-icon-btn { transition:opacity .2s, transform .2s; }
        .social-icon-btn:hover { opacity:.82; transform:scale(1.1); }
        @media(max-width:1100px){ .footer-grid{ grid-template-columns:1fr 1fr 1fr!important; } }
        @media(max-width:680px) { .footer-grid{ grid-template-columns:1fr 1fr!important; } }
        @media(max-width:480px) { .footer-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </footer>
  );
}
