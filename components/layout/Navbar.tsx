"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BRAND } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const bg = isHome
    ? scrolled ? "rgba(13,5,32,0.96)" : "transparent"
    : "rgba(13,5,32,0.97)";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: 68, padding: "0 1.5rem",
      display: "flex", alignItems: "center",
      background: bg,
      backdropFilter: "blur(20px)",
      borderBottom: scrolled || !isHome ? "1px solid rgba(107,45,143,0.3)" : "none",
      transition: "all .35s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>✦</div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "white", lineHeight: 1 }}>{BRAND.name}</div>
            <div style={{ fontSize: 8, color: "#D4A017", letterSpacing: "2px", textTransform: "uppercase" }}>Foundation</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.4rem" }} className="desk-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}
              style={{ color: "rgba(255,255,255,.75)", fontSize: 13, fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
          <Link href="/donate">
            <button className="btn-primary" style={{ padding: "8px 20px", borderRadius: 8, fontSize: 13 }}>Donate Now</button>
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="mob-btn"
          style={{ background: "none", border: "1px solid rgba(255,255,255,.25)", color: "white", width: 38, height: 38, borderRadius: 7, cursor: "pointer", fontSize: 16 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(13,5,32,.98)", padding: "1rem 1.5rem 1.5rem", borderBottom: "1px solid rgba(107,45,143,.3)" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,.75)", padding: "10px 0", fontSize: 15, borderBottom: "1px solid rgba(255,255,255,.05)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)}>
            <button className="btn-primary" style={{ marginTop: "1rem", width: "100%", padding: 11, borderRadius: 9, fontSize: 14 }}>Donate Now ❤️</button>
          </Link>
        </div>
      )}

      <style>{`
        .desk-nav { display: flex; }
        .mob-btn  { display: none; }
        @media (max-width:900px) { .desk-nav{display:none!important} .mob-btn{display:flex!important;align-items:center;justify-content:center} }
      `}</style>
    </nav>
  );
}
