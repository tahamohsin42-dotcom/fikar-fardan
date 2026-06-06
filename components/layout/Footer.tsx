"use client";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/data/content";
import { InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

const LINKS = {
  Platform: [
    { label:"Home",           href:"/"           },
    { label:"About Us",       href:"/about"       },
    { label:"Programs",       href:"/programs"    },
    { label:"Courses",        href:"/enroll"      },
    { label:"Startup Fund",   href:"/startup"     },
    { label:"Impact Stories", href:"/impact"      },
  ],
  Support: [
    { label:"Donate",         href:"/donate"      },
    { label:"Volunteer",      href:"/volunteer"   },
    { label:"Contact Us",     href:"/contact"     },
    { label:"FAQ",            href:"/faq"         },
    { label:"LMS Dashboard",  href:"/lms"         },
  ],
  Legal: [
    { label:"Privacy Policy", href:"/privacy"     },
    { label:"Terms of Use",   href:"/terms"       },
    { label:"Refund Policy",  href:"/refund"      },
  ],
};

const SOCIALS = [
  { href:BRAND.social.instagram, Icon:InstagramIcon, label:"Instagram", bg:"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
  { href:BRAND.social.facebook,  Icon:FacebookIcon,  label:"Facebook",  bg:"#1877F2" },
  { href:BRAND.social.youtube,   Icon:YouTubeIcon,   label:"YouTube",   bg:"#FF0000" },
  { href:BRAND.social.linkedin,  Icon:LinkedInIcon,  label:"LinkedIn",  bg:"#0A66C2" },
  { href:BRAND.social.whatsapp,  Icon:WhatsAppIcon,  label:"WhatsApp",  bg:"#25D366" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#0D0520", color:"white", padding:"5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth:1320, margin:"0 auto" }}>
        <div className="footer-grid" style={{ marginBottom:"3.5rem" }}>

          {/* BRAND */}
          <div>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1rem", textDecoration:"none" }}
              aria-label="Fikr Fardan Foundation">
              <div style={{ width:46, height:46, position:"relative", borderRadius:10, overflow:"hidden", background:"white", padding:3, flexShrink:0 }}>
                <Image src="/logo-icon.jpg" alt="Fikr Fardan Foundation Logo" fill style={{ objectFit:"contain" }} />
              </div>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700 }}>Fikr Fardan</div>
                <div style={{ fontSize:9, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase" }}>Foundation</div>
              </div>
            </Link>
            <p style={{ color:"rgba(255,255,255,.42)", fontSize:13, lineHeight:1.88, maxWidth:270, marginBottom:"1.5rem" }}>
              {BRAND.tagline} — empowering Pakistani youth through skills, opportunity, and sustainable impact.
            </p>

            {/* Real SVG social icons */}
            <div style={{ display:"flex", gap:9, flexWrap:"wrap" }}>
              {SOCIALS.map(s => (
                <a key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Fikr Fardan Foundation on ${s.label}`}
                  title={s.label}
                  style={{ width:38, height:38, borderRadius:9, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", transition:"transform .2s, opacity .2s", boxShadow:"0 2px 10px rgba(0,0,0,.2)" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.12)";(e.currentTarget as HTMLAnchorElement).style.opacity="0.9"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)";(e.currentTarget as HTMLAnchorElement).style.opacity="1"}}>
                  <s.Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
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

          {/* CONTACT */}
          <div>
            <h4 style={{ color:"#D4A017", fontSize:11, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"1.25rem", fontWeight:800 }}>Contact</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <a href={`mailto:${BRAND.email}`} className="footer-link" style={{ color:"rgba(255,255,255,.42)", fontSize:13, textDecoration:"none" }}>
                📧 {BRAND.email}
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link"
                style={{ color:"rgba(255,255,255,.42)", fontSize:13, textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
                <WhatsAppIcon size={14} color="rgba(255,255,255,.42)" />
                {BRAND.phone}
              </a>
              <span style={{ color:"rgba(255,255,255,.42)", fontSize:13 }}>📍 {BRAND.address}</span>
            </div>

            {/* Follow us block */}
            <div style={{ marginTop:"1.5rem", background:"rgba(107,45,143,.12)", borderRadius:12, padding:"1rem 1.1rem" }}>
              <p style={{ fontSize:11, color:"#D4A017", fontWeight:800, letterSpacing:"1px", textTransform:"uppercase", marginBottom:".6rem" }}>Follow Us</p>
              <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} title={`Fikr Fardan on ${s.label}`}
                    style={{ width:32, height:32, borderRadius:7, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", transition:"transform .2s" }}
                    onMouseEnter={e=>((e.currentTarget as HTMLAnchorElement).style.transform="scale(1.12)")}
                    onMouseLeave={e=>((e.currentTarget as HTMLAnchorElement).style.transform="scale(1)")}>
                    <s.Icon size={15} color="white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bank */}
            <div style={{ marginTop:"1rem", background:"rgba(107,45,143,.08)", borderRadius:10, padding:"10px 12px", fontSize:12, color:"rgba(255,255,255,.5)", lineHeight:1.7 }}>
              <div style={{ fontWeight:700, color:"rgba(255,255,255,.7)" }}>{BRAND.bankTitle}</div>
              <div style={{ fontSize:11 }}>{BRAND.bankName}</div>
              <div style={{ fontSize:11 }}>Branch: {BRAND.bankBranch}</div>
              <div style={{ fontFamily:"monospace", fontSize:10, letterSpacing:".5px", color:"#D4A017" }}>{BRAND.bankAccount}</div>
              <div style={{ fontFamily:"monospace", fontSize:10, letterSpacing:".5px", color:"#D4A017", wordBreak:"break-all" }}>{BRAND.bankIBAN}</div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:"2rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ color:"rgba(255,255,255,.22)", fontSize:12 }}>© 2025 Fikr Fardan Foundation. All rights reserved.</p>
          <p style={{ color:"rgba(255,255,255,.15)", fontSize:12 }}>Give Opportunity, Not Dependency 🇵🇰</p>
        </div>
      </div>

      <style>{`
        .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1.5fr; gap:2.5rem; }
        .footer-link:hover { color:rgba(255,255,255,.88)!important; }
        @media(max-width:1100px){ .footer-grid{ grid-template-columns:1fr 1fr 1fr!important; } }
        @media(max-width:680px) { .footer-grid{ grid-template-columns:1fr 1fr!important; } }
        @media(max-width:480px) { .footer-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </footer>
  );
}
