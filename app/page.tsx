import Navbar          from "@/components/ui/Navbar";
import HeroSection     from "@/components/sections/HeroSection";
import StatsSection    from "@/components/sections/StatsSection";
import AboutSection    from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CoursesSection  from "@/components/sections/CoursesSection";
import DonationSection from "@/components/sections/DonationSection";
import ChairmanSection from "@/components/sections/ChairmanSection";
import CTASection      from "@/components/sections/CTASection";
import Footer          from "@/components/sections/Footer";
import AIChatWidget    from "@/components/ui/AIChatWidget";
import WhatsAppButton  from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <CoursesSection />
      <DonationSection />
      <ChairmanSection />
      <CTASection />
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </main>
  );
}
