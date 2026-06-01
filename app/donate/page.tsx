import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import DonateClient from "./DonateClient";

export const metadata: Metadata = { title: "Donate", description: "Support Fikr Fardan Foundation. Every rupee goes to students, clean water, orphan care, and community welfare." };

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <PageHero badge="Make an Impact" title="Your Donation" highlight="Changes Lives" subtitle="Every rupee you give goes directly to people who need it most. No overhead. Full transparency." image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=85&auto=format&fit=crop" imageAlt="Children receiving education and community support through Fikr Fardan Foundation donations" />
      <DonateClient />
      <Footer />
    </>
  );
}
