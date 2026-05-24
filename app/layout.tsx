import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Fikr Fardan | Youth Empowerment NGO Pakistan", template: "%s | Fikr Fardan" },
  description: "Fikr Fardan empowers Pakistani youth through free skill development courses, clean water projects, and community support. Donate or enroll today.",
  keywords: ["NGO Pakistan education", "donation platform Pakistan", "Fikr Fardan Foundation", "youth empowerment Pakistan", "free skill development courses"],
  openGraph: {
    title: "Fikr Fardan — Empowering Youth Through Skills & Impact",
    description: "Free skill development, clean water projects, and community welfare for Pakistani youth.",
    url: "https://fikr-fardan.vercel.app",
    siteName: "Fikr Fardan",
    locale: "en_PK",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Fikr Fardan", description: "Empowering Youth Through Skills, Opportunity & Impact." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "NGO",
          name: "Fikr Fardan", url: "https://fikr-fardan.vercel.app",
          email: "info@fikrfardan.org", telephone: "+92-302-8848500",
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
          founder: { "@type": "Person", name: "Tuaha Ibn Mohsin" },
          areaServed: "PK", knowsAbout: ["Youth Empowerment", "Skill Development", "Clean Water"],
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
