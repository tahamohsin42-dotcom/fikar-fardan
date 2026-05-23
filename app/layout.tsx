import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fikar e Fardan Foundation | Empowering Youth Through Skills & Impact",
  description:
    "Pakistan's premier youth empowerment NGO offering free skill development courses, clean water projects, and community support. Donate or enroll today.",
  keywords: [
    "youth empowerment Pakistan",
    "free skill development courses",
    "donation Pakistan NGO",
    "clean water projects Pakistan",
    "Fikar e Fardan Foundation",
    "Tuaha Ibn Mohsin",
  ],
  openGraph: {
    title: "Fikar e Fardan Foundation",
    description: "Empowering Youth Through Skills, Opportunity & Impact.",
    url: "https://fikarfardan.org",
    siteName: "Fikar e Fardan Foundation",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikar e Fardan Foundation",
    description: "Empowering Youth Through Skills, Opportunity & Impact.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Fikar e Fardan Foundation",
              description: "Youth empowerment NGO offering free skills training, clean water projects, and community welfare in Pakistan.",
              url: "https://fikarfardan.org",
              email: "info@fikarfardan.org",
              telephone: "+92-302-8848500",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              founder: { "@type": "Person", name: "Tuaha Ibn Mohsin" },
              areaServed: "PK",
              knowsAbout: ["Youth Empowerment", "Skill Development", "Clean Water", "Community Welfare"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
