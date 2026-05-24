import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChatWidget from "@/components/ui/AIChatWidget";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Fikr Fardan | Youth Empowerment NGO Pakistan",
  description: "Fikr Fardan empowers Pakistani youth through free skill training, clean water, and community support.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeClient />
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </>
  );
}
