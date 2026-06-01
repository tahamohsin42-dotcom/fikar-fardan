"use client";

interface Props {
  badge?:    string;
  title:     string;
  highlight?: string;
  subtitle?:  string;
  height?:    number;
  image?:     string;
  imageAlt?:  string;
}

export default function PageHero({ badge, title, highlight, subtitle, height = 420, image, imageAlt }: Props) {
  return (
    <section
      className="page-hero"
      style={{ minHeight: height, paddingTop: 68, position:"relative", overflow:"hidden", display:"flex", alignItems:"center",
        background:"linear-gradient(135deg,#0D0520 0%,#1a0533 55%,#0D1533 100%)" }}
    >
      {/* Background image */}
      {image && (
        <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
          <img
            src={image} alt={imageAlt ?? title}
            loading="eager" decoding="async"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", filter:"brightness(.2)", display:"block" }}
            width={1400} height={height}
          />
        </div>
      )}
      {/* Gradient overlay */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(13,5,32,.94) 0%,rgba(26,5,51,.82) 55%,rgba(13,21,51,.78) 100%)", pointerEvents:"none" }} />
      {/* Orbs */}
      <div style={{ position:"absolute", top:"15%", left:"5%", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,rgba(107,45,143,.32) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"5%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(212,160,23,.12) 0%,transparent 70%)", pointerEvents:"none" }} />

      {/* Content */}
      <div style={{ maxWidth:860, margin:"0 auto", padding:"3.5rem 1.5rem 2.5rem", position:"relative", zIndex:1, textAlign:"center", width:"100%" }}>
        {badge && (
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(107,45,143,.22)", border:"1px solid rgba(107,45,143,.5)", borderRadius:50, padding:"5px 18px", marginBottom:"1.25rem" }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#D4A017", display:"inline-block" }} />
            <span style={{ fontSize:11, color:"#D4A017", letterSpacing:"2px", textTransform:"uppercase", fontWeight:700 }}>{badge}</span>
          </div>
        )}
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.2rem,5.5vw,4.2rem)", fontWeight:700, color:"white", lineHeight:1.1, marginBottom:"1rem" }}>
          {title}{" "}
          {highlight && (
            <span style={{ background:"linear-gradient(90deg,#D4A017,#F0C040)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {highlight}
            </span>
          )}
        </h1>
        {subtitle && (
          <p style={{ fontSize:"clamp(.9rem,1.8vw,1.1rem)", color:"rgba(255,255,255,.62)", lineHeight:1.85, maxWidth:600, margin:"0 auto" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
