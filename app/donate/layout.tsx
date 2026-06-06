import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to Fikr Fardan | Empower Lives Through Opportunity",
  description: "Support Fikr Fardan's mission of education, skill development, entrepreneurship support, clean water projects, and community welfare initiatives across Pakistan.",
  keywords: ["donate Pakistan NGO","Faysal Bank donation Pakistan","Fikr Fardan donate","skill development donation","water project donation Pakistan"],
  openGraph: {
    title: "Donate to Fikr Fardan Foundation",
    description: "Every rupee creates opportunity, restores dignity, and helps deserving individuals build sustainable income.",
    url: "https://fikar-fardan.vercel.app/donate",
    images: [{ url:"https://fikar-fardan.vercel.app/og/og-home.jpg", width:1200, height:630 }],
  },
  alternates: { canonical:"https://fikar-fardan.vercel.app/donate" },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
