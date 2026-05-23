"use client";

export default function Footer() {
  const programs = ["Skill Development","Startup Support","Community Projects","Innovation Hub"];
  const courses  = ["AI Design","LinkedIn Growth","Marketing","Entrepreneurship"];

  return (
    <footer id="contact" style={{ background: "#0D0520", color: "white", padding: "5rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#6B2D8F,#D4A017)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✦</div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700 }}>Fikar e Fardan</div>
                <div style={{ fontSize: 9, color: "#D4A017", letterSpacing: "2px", textTransform: "uppercase" }}>Foundation</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.85, maxWidth: 280, marginBottom: "1.5rem" }}>
              Empowering youth through skills, opportunity, and impact. Building a self-reliant Pakistan, one person at a time.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { l: "FB",  href: "#" },
                { l: "LI",  href: "#" },
                { l: "YT",  href: "#" },
                { l: "IG",  href: "#" },
              ].map(s => (
                <a key={s.l} href={s.href} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, cursor: "pointer", fontWeight: 700,
                  color: "rgba(255,255,255,0.45)", textDecoration: "none",
                  transition: "background 0.2s",
                }}>{s.l}</a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>Programs</h4>
            {programs.map(l => (
              <div key={l} style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.42)")}
              >{l}</div>
            ))}
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>Courses</h4>
            {courses.map(l => (
              <div key={l} style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.42)")}
              >{l}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#D4A017", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>Contact</h4>
            <div style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1 }}>
              <a href="mailto:info@fikarfardan.org" style={{ display: "block", color: "inherit", textDecoration: "none", marginBottom: 12 }}>📧 info@fikarfardan.org</a>
              <a href="https://wa.me/923028848500" style={{ display: "block", color: "inherit", textDecoration: "none", marginBottom: 12 }}>📞 +92 302 8848500</a>
              <div style={{ marginBottom: 12 }}>📍 Lahore, Pakistan</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>© 2025 Fikar e Fardan Foundation. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 12 }}>Empowering Youth · Building Pakistan 🇵🇰</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
