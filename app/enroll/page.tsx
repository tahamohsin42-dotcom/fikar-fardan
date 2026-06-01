import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import EnrollClient from "./EnrollClient";

export const metadata: Metadata = { title: "Enroll in Courses", description: "Enroll in free skill development courses at Fikr Fardan Foundation. AI Design, Marketing, Video, Entrepreneurship and more." };

export default function EnrollPage() {
  return (
    <>
      <Navbar />
      <PageHero badge="23 Free Courses" title="Learn Skills" highlight="That Pay" subtitle="Industry-demanded skills. 100% free. Enroll now and start building your future today." image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=85&auto=format&fit=crop" imageAlt="Student focused on online learning course enrolled in free skill development program" />
      <EnrollClient />
      <Footer />
    </>
  );
}
