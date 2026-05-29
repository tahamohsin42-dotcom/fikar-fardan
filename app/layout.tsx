import type { Metadata } from "next";
import "./globals.css";

const BASE = "https://fikr-fardan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default:  "Fikr Fardan | Free Skills & Youth Empowerment NGO Pakistan",
    template: "%s | Fikr Fardan",
  },
  description:
    "Fikr Fardan empowers Pakistani youth with free skill-development courses, clean water projects, orphan sponsorship & community welfare. Donate or enroll today.",
  keywords: [
    "Fikr Fardan Foundation", "NGO Pakistan education", "free courses Pakistan",
    "donation platform Pakistan", "youth empowerment Pakistan",
    "skill development Lahore", "free online courses Pakistan",
    "clean water NGO Pakistan", "Tuaha Ibn Mohsin",
  ],
  authors: [{ name: "Fikr Fardan Foundation", url: BASE }],
  creator: "Fikr Fardan Foundation",
  publisher: "Fikr Fardan Foundation",
  openGraph: {
    title:       "Fikr Fardan — Empowering Youth Through Skills & Impact",
    description: "Free skill development, clean water projects & community welfare for Pakistani youth.",
    url:         BASE,
    siteName:    "Fikr Fardan",
    locale:      "en_PK",
    type:        "website",
    images: [{
      url:    `${BASE}/og/og-home.jpg`,
      width:  1200,
      height: 630,
      alt:    "Fikr Fardan Foundation — Empowering Youth",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Fikr Fardan — Empowering Youth Through Skills",
    description: "Free courses, clean water projects & youth empowerment in Pakistan.",
    images:      [`${BASE}/og/og-home.jpg`],
    creator:     "@FikrFardan",
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    other:  { "msvalidate.01": ["REPLACE_WITH_BING_VERIFICATION_CODE"] },
  },
  alternates: { canonical: BASE },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
};

const NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${BASE}/#ngo`,
      name: "Fikr Fardan Foundation",
      alternateName: "Fikr Fardan",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/og/og-home.jpg` },
      description: "Youth empowerment NGO offering free skill development, clean water projects, and community welfare in Pakistan.",
      email: "info@fikrfardan.org",
      telephone: "+92-302-8848500",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      founder: { "@type": "Person", name: "Tuaha Ibn Mohsin" },
      foundingDate: "2021",
      areaServed: "PK",
      knowsAbout: [
        "Youth Empowerment", "Skill Development", "Free Online Courses",
        "Clean Water Projects", "Community Welfare", "Orphan Support",
      ],
      sameAs: [
        "https://www.facebook.com/FikrFardan",
        "https://www.instagram.com/FikrFardan",
        "https://www.youtube.com/@FikrFardan",
        "https://www.linkedin.com/company/fikr-fardan",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Fikr Fardan",
      description: "Youth empowerment, free skills & community impact.",
      publisher: { "@id": `${BASE}/#ngo` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/enroll?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE}/#edu`,
      name: "Fikr Fardan Learning Platform",
      url: `${BASE}/lms`,
      description: "Free online courses in AI Design, Marketing, Video Creation, Entrepreneurship and more.",
      parentOrganization: { "@id": `${BASE}/#ngo` },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Programs", item: `${BASE}/programs` },
    { "@type": "ListItem", position: 3, name: "Enroll", item: `${BASE}/enroll` },
    { "@type": "ListItem", position: 4, name: "Donate", item: `${BASE}/donate` },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B2D8F" />
        {/* IndexNow key file reference */}
        <meta name="indexnow-key" content="REPLACE_WITH_INDEXNOW_KEY" />
        {/* Bing Webmaster */}
        <meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE" />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE" />
        {/* Schema.org NGO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(NGO_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
