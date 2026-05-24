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
      <PageHero badge="Free Education" title="Learn Skills" highlight="That Pay" subtitle="8 professionally designed courses. 100% free. Enroll now and start building your future." />
      <EnrollClient />
      <Footer />
    </>
  );
}
