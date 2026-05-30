import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { BRAND } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title:"Privacy Policy", description:"Privacy Policy of Fikr Fardan Foundation" };

export default function PrivacyPage() {
  const Section = ({ title, children }: { title:string; children:React.ReactNode }) => (
    <div style={{ marginBottom:"2.5rem" }}>
      <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#1a0533", marginBottom:"1rem", borderLeft:"4px solid #6B2D8F", paddingLeft:"1rem" }}>{title}</h2>
      <div style={{ color:"#555", fontSize:14, lineHeight:1.92 }}>{children}</div>
    </div>
  );
  return (
    <>
      <Navbar />
      <PageHero badge="Legal" title="Privacy" highlight="Policy" subtitle={`Last updated: January 2025 | ${BRAND.fullName}`} />
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:860, margin:"0 auto", background:"white", borderRadius:24, padding:"3rem", border:"1px solid rgba(107,45,143,.08)" }}>
          <Section title="1. Information We Collect">
            <p>We collect information you voluntarily provide including name, email, phone number, city, and payment details when you donate, enroll in a course, or volunteer. We also collect usage data via analytics tools to improve our platform.</p>
          </Section>
          <Section title="2. How We Use Your Information">
            <p>Your information is used to: process donations and send receipts, manage course enrollments and credentials, send program updates and impact reports, improve our website and services, and comply with legal obligations.</p>
          </Section>
          <Section title="3. Data Sharing">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (email, analytics) who operate under strict data protection agreements.</p>
          </Section>
          <Section title="4. Payment Security">
            <p>We do not store payment card details. Bank transfer information is verified manually. Payment screenshots are stored securely and used only for donation verification purposes.</p>
          </Section>
          <Section title="5. Cookies">
            <p>We use essential cookies to ensure website functionality and analytics cookies to understand usage patterns. You can disable non-essential cookies in your browser settings.</p>
          </Section>
          <Section title="6. Your Rights">
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, email us at {BRAND.email}. We will respond within 7 business days.</p>
          </Section>
          <Section title="7. Contact">
            <p>For privacy concerns: {BRAND.email} | {BRAND.phone} | {BRAND.address}</p>
          </Section>
        </div>
      </section>
      <Footer />
    </>
  );
}
