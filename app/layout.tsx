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
  authors:   [{ name: "Fikr Fardan Foundation", url: BASE }],
  creator:   "Fikr Fardan Foundation",
  publisher: "Fikr Fardan Foundation",
  openGraph: {
    title:       "Fikr Fardan — Empowering Youth Through Skills & Impact",
    description: "Free skill development, clean water projects & community welfare for Pakistani youth.",
    url:         BASE,
    siteName:    "Fikr Fardan",
    locale:      "en_PK",
    type:        "website",
    images: [{ url: `${BASE}/og/og-home.jpg`, width: 1200, height: 630, alt: "Fikr Fardan Foundation" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Fikr Fardan — Empowering Youth Through Skills",
    description: "Free courses, clean water projects & youth empowerment in Pakistan.",
    images:      [`${BASE}/og/og-home.jpg`],
    creator:     "@FikrFardan",
    site:        "@FikrFardan",
  },
  /* ─── VERIFICATION CODES ─── */
  verification: {
    google: "PASTE_GOOGLE_VERIFICATION_CODE_HERE",          // → search.google.com/search-console
    other: { "msvalidate.01": ["PASTE_BING_CODE_HERE"] },  // → bing.com/webmasters
  },
  alternates: { canonical: BASE },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
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
      alternateName: ["Fikr Fardan", "Fikr Fardan NGO"],
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/og/og-home.jpg`, width: 1200, height: 630 },
      description: "Youth empowerment NGO offering free skill development, clean water projects, and community welfare in Pakistan.",
      email: "info@fikrfardan.org",
      telephone: "+92-302-8848500",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lahore",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      founder: { "@type": "Person", name: "Tuaha Ibn Mohsin" },
      foundingDate: "2021",
      areaServed: { "@type": "Country", name: "Pakistan" },
      knowsAbout: ["Youth Empowerment","Skill Development","Free Online Courses","Clean Water Projects","Community Welfare","Orphan Support"],
      sameAs: [
        "https://www.facebook.com/FikrFardan",
        "https://www.instagram.com/FikrFardan",
        "https://www.youtube.com/@FikrFardan",
        "https://www.linkedin.com/company/fikr-fardan",
        "https://twitter.com/FikrFardan",
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
      award: "2,400+ youth trained | 48 water projects | 1,200+ families supported",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Fikr Fardan",
      description: "Youth empowerment NGO — free skills, clean water & community impact.",
      publisher: { "@id": `${BASE}/#ngo` },
      inLanguage: "en-PK",
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
      description: "Free online courses: AI Design, Marketing, Video Creation, Entrepreneurship, LinkedIn Growth.",
      parentOrganization: { "@id": `${BASE}/#ngo` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Free Skill Development Courses",
        itemListElement: [
          { "@type": "Course", name: "AI-Powered Graphic Design Mastery", provider: { "@id": `${BASE}/#ngo` } },
          { "@type": "Course", name: "LinkedIn Growth & Personal Branding", provider: { "@id": `${BASE}/#ngo` } },
          { "@type": "Course", name: "Performance Marketing Mastery", provider: { "@id": `${BASE}/#ngo` } },
          { "@type": "Course", name: "Entrepreneurship Blueprint", provider: { "@id": `${BASE}/#ngo` } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",     item: BASE },
        { "@type": "ListItem", position: 2, name: "Programs", item: `${BASE}/programs` },
        { "@type": "ListItem", position: 3, name: "Enroll",   item: `${BASE}/enroll` },
        { "@type": "ListItem", position: 4, name: "Donate",   item: `${BASE}/donate` },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color"     content="#6B2D8F" />
        {/* IndexNow */}
        <meta name="indexnow-key" content="4e52424cdd9847b7a934f942fa895984" />
        {/* Rich schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(NGO_SCHEMA) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
