"use client";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923028848500?text=Assalam%20o%20Alaikum%21%20I%20want%20to%20know%20more%20about%20Fikar%20e%20Fardan%20Foundation."
      target="_blank" rel="noopener noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: "fixed", bottom: 90, left: 24,
        width: 52, height: 52, borderRadius: "50%",
        background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 6px 25px rgba(37,211,102,0.45)",
        zIndex: 1000, textDecoration: "none", fontSize: 24,
        transition: "transform 0.25s ease",
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)")}
      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
    >
      💬
    </a>
  );
}
