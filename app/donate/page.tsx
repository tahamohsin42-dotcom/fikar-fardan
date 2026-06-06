import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import DonateClient from "./DonateClient";

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Make an Impact"
        title="Your Donation"
        highlight="Changes Lives"
        subtitle="Every rupee creates opportunity, restores dignity, and helps a deserving individual build a sustainable income. No overhead. Full transparency."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=85&auto=format&fit=crop"
        imageAlt="Children receiving education and community support through Fikr Fardan Foundation donations"
      />
      <DonateClient />
      <Footer />
    </>
  );
}
