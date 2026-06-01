"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND } from "@/data/content";
import { InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const NAV = [
  { label:"Home",         href:"/"          },
  { label:"About",        href:"/about"      },
  { label:"Programs",     href:"/programs"   },
  { label:"Courses",      href:"/enroll"     },
  { label:"Startup Fund", href:"/startup"    },
  { label:"Volunteer",    href:"/volunteer"  },
  { label:"Impact",       href:"/impact"     },
  { label:"Contact",      href:"/contact"    },
];

const SIDEBAR_SOCIALS = [
  { href:BRAND.social.instagram, Icon:InstagramIcon, label:"Instagram", bg:"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
  { href:BRAND.social.facebook,  Icon:FacebookIcon,  label:"Facebook",  bg:"#1877F2" },
  { href:BRAND.social.youtube,   Icon:YouTubeIcon,   label:"YouTube",   bg:"#FF0000" },
  { href:BRAND.social.linkedin,  Icon:LinkedInIcon,  label:"LinkedIn",  bg:"#0A66C2" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive:true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        padding:"0 1.5rem", height:68,
        display:"flex", alignItems:"center",
        background: scrolled ? "rgba(13,5,32,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(107,45,143,0.3)" : "none",
        transition:"all 0.35s ease",
      }}>
        <div style={{ maxWidth:1320, margin:"0 auto", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* LOGO */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}
            aria-label="Fikr Fardan Foundation — Home">
            <div style={{ width:42, height:42, position:"relative", borderRadius:10, overflow:"hidden", background:"white", padding:2, flexShrink:0 }}>
              <Image
                src="/logo-icon.jpg"
                alt="Fikr Fardan Foundation Logo"
                fill
                style={{ objectFit:"contain" }}
                priority
              />
            </div>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:700, color:"white", lineHeight:1.1 }}>Fikr Fardan</div>
              <div style={{ fontSize:9, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase" }}>Foundation</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div style={{ display:"flex", alignItems:"center", gap:"1rem" }} className="desk-nav">
            {NAV.map(item => (
              <Link key={item.label} href={item.href}
                style={{ color:pathname===item.href?"#D4A017":"rgba(255,255,255,0.8)", textDecoration:"none", fontSize:13, fontWeight:500, whiteSpace:"nowrap", transition:"color .2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#D4A017")}
                onMouseLeave={e=>(e.currentTarget.style.color=pathname===item.href?"#D4A017":"rgba(255,255,255,0.8)")}>
                {item.label}
              </Link>
            ))}
            <Link href="/donate" aria-label="Donate to Fikr Fardan Foundation">
              <button className="btn-primary" style={{ padding:"9px 20px", borderRadius:8, fontSize:13, fontWeight:700 }}>
                Donate ❤️
              </button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button onClick={()=>setMenuOpen(!menuOpen)} className="mob-btn"
            aria-label={menuOpen?"Close menu":"Open menu"}
            style={{ background:"none", border:"1px solid rgba(255,255,255,.25)", color:"white", width:40, height:40, borderRadius:8, cursor:"pointer", fontSize:18 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={{ position:"absolute", top:"100%", left:0, right:0, background:"rgba(13,5,32,.98)", borderBottom:"1px solid rgba(107,45,143,.3)", padding:"1rem 1.5rem 1.5rem" }}>
            {NAV.map(item => (
              <Link key={item.label} href={item.href} onClick={()=>setMenuOpen(false)}
                style={{ display:"block", color:pathname===item.href?"#D4A017":"rgba(255,255,255,.78)", textDecoration:"none", padding:"11px 0", fontSize:15, borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                {item.label}
              </Link>
            ))}
            <Link href="/donate" onClick={()=>setMenuOpen(false)}>
              <button className="btn-primary" style={{ marginTop:"1rem", width:"100%", padding:"12px", borderRadius:8, fontSize:14, fontWeight:700 }}>
                Donate Now ❤️
              </button>
            </Link>
            {/* Mobile social row */}
            <div style={{ display:"flex", gap:10, marginTop:"1.25rem", paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,.06)" }}>
              {SIDEBAR_SOCIALS.map(s=>(
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`Follow Fikr Fardan on ${s.label}`}
                  style={{ width:36, height:36, borderRadius:8, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
                  <s.Icon size={16} color="white" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* FLOATING SOCIAL SIDEBAR — desktop only */}
      <aside aria-label="Social media links" style={{ position:"fixed", left:14, top:"50%", transform:"translateY(-50%)", zIndex:900, display:"flex", flexDirection:"column", gap:8 }} className="social-sidebar">
        {SIDEBAR_SOCIALS.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            aria-label={`Follow Fikr Fardan Foundation on ${s.label}`}
            title={s.label}
            style={{ width:36, height:36, borderRadius:9, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", boxShadow:"0 2px 12px rgba(0,0,0,.3)", transition:"transform .2s, box-shadow .2s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.15)";(e.currentTarget as HTMLAnchorElement).style.boxShadow="0 4px 18px rgba(0,0,0,.4)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)";(e.currentTarget as HTMLAnchorElement).style.boxShadow="0 2px 12px rgba(0,0,0,.3)"}}>
            <s.Icon size={17} color="white" />
          </a>
        ))}
      </aside>

      <style>{`
        .desk-nav  { display: flex; }
        .mob-btn   { display: none; }
        .social-sidebar { display: flex; }
        @media(max-width:1080px){ .desk-nav{ display:none!important; } .mob-btn{ display:flex!important; align-items:center; justify-content:center; } }
        @media(max-width:768px) { .social-sidebar{ display:none!important; } }
      `}</style>
    </>
  );
}
