"use client";
import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ background: "#0D0520", color: "white", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✦</div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700 }}>{BRAND.name}</div>
                <div style={{ fontSize: 8, color: "#D4A017", letterSpacing: "2px", textTransform: "uppercase" }}>Foundation</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13, lineHeight: 1.85, maxWidth: 260, marginBottom: "1.25rem" }}>
              Empowering youth through skills, opportunity, and impact. Building a self-reliant Pakistan, one person at a time.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["FB","IG","YT","LI"].map(s => (
                <div key={s} style={{ width: 34, height: 34, borderRadius: 7, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "rgba(255,255,255,.4)", cursor: "pointer", fontWeight: 700 }}>{s}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 800 }}>Pages</h4>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 9, transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.4)")}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 800 }}>Programs</h4>
            {["Skill Development","Startup Support","Clean Water","Innovation Hub"].map(p => (
              <Link key={p} href="/programs" style={{ display: "block", color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 9, transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.4)")}>{p}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 800 }}>Contact</h4>
            <a href={`mailto:${BRAND.email}`} style={{ display: "block", color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 10, lineHeight: 1.6 }}>📧 {BRAND.email}</a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} style={{ display: "block", color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 10 }}>📞 {BRAND.phone}</a>
            <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13 }}>📍 {BRAND.address}</p>
            <Link href="/donate">
              <button className="btn-primary" style={{ marginTop: "1rem", padding: "9px 18px", borderRadius: 8, fontSize: 13 }}>Donate Now ❤️</button>
            </Link>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,.22)", fontSize: 12 }}>© 2025 {BRAND.name}. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,.16)", fontSize: 12 }}>Empowering Youth · Building Pakistan 🇵🇰</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:560px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
