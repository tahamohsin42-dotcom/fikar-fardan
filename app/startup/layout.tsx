import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Fund | Sponsor Livelihood Opportunities in Pakistan | Fikr Fardan Foundation",
  description: "Sponsor bikes, pushcarts, sewing machines, freelancing kits, e-commerce stores, and small businesses for deserving individuals in Pakistan through Fikr Fardan Foundation.",
  keywords: [
    "startup fund Pakistan", "sponsor bike Foodpanda rider Pakistan",
    "sewing machine donation Pakistan", "freelancing laptop donation NGO",
    "small business sponsorship Pakistan", "Fikr Fardan startup support",
    "livelihood support Pakistan", "entrepreneur sponsorship Pakistan",
  ],
  openGraph: {
    title: "Startup Fund | Fikr Fardan Foundation",
    description: "Sponsor a bike, shop, freelancing kit, or sewing machine for a deserving individual in Pakistan. Give opportunity, not dependency.",
    url: "https://fikar-fardan.vercel.app/startup",
    images: [{ url: "https://fikar-fardan.vercel.app/og/og-home.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://fikar-fardan.vercel.app/startup" },
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
