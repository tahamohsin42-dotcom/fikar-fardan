"use client";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 2rem", height: "72px",
        display: "flex", alignItems: "center",
        background: scrolled ? "rgba(13,5,32,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(107,45,143,0.3)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✦</div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: "white", lineHeight: 1.1 }}>Fikar e Fardan</div>
            <div style={{ fontSize: 9, color: "#D4A017", letterSpacing: "2px", textTransform: "uppercase" }}>Foundation</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav-items">
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} className="nav-link"
              style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              {item.label}
            </a>
          ))}
          <a href="#donate">
            <button className="btn-primary" style={{ padding: "9px 22px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
              Donate Now
            </button>
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-hamburger"
          style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", color: "white", width: 40, height: 40, borderRadius: 8, cursor: "pointer", fontSize: 18 }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(13,5,32,0.98)", padding: "1rem 2rem 1.5rem", borderBottom: "1px solid rgba(107,45,143,0.3)" }}>
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.78)", textDecoration: "none", padding: "11px 0", fontSize: 15, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {item.label}
            </a>
          ))}
          <a href="#donate" onClick={() => setMenuOpen(false)}>
            <button className="btn-primary" style={{ marginTop: "1rem", width: "100%", padding: "11px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Donate Now ❤️
            </button>
          </a>
        </div>
      )}

      <style>{`
        .desktop-nav-items { display: flex; }
        .mobile-hamburger   { display: none; }
        @media (max-width: 768px) {
          .desktop-nav-items { display: none !important; }
          .mobile-hamburger  { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </nav>
  );
}
