import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { BRAND } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title:"Terms of Use", description:"Terms and conditions of Fikr Fardan" };

export default function TermsPage() {
  const Section = ({ title, children }: { title:string; children:React.ReactNode }) => (
    <div style={{ marginBottom:"2.5rem" }}>
      <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#1a0533", marginBottom:"1rem", borderLeft:"4px solid #6B2D8F", paddingLeft:"1rem" }}>{title}</h2>
      <div style={{ color:"#555", fontSize:14, lineHeight:1.92 }}>{children}</div>
    </div>
  );
  return (
    <>
      <Navbar />
      <PageHero badge="Legal" title="Terms of" highlight="Use" subtitle={`Effective January 2025 | ${BRAND.fullName}`} />
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:860, margin:"0 auto", background:"white", borderRadius:24, padding:"3rem", border:"1px solid rgba(107,45,143,.08)" }}>
          <Section title="1. Acceptance">
            <p>By using the Fikr Fardan website, you agree to these Terms of Use. If you disagree, please do not use our services.</p>
          </Section>
          <Section title="2. Services">
            <p>We provide free skill development courses, donation processing for social causes, volunteer coordination, and startup funding programs. All services are subject to availability and eligibility criteria.</p>
          </Section>
          <Section title="3. Donations">
            <p>All donations are voluntary contributions. Fikr Fardan commits to using donations for stated purposes. Donations are non-refundable except under our Refund Policy. We reserve the right to redirect unused funds to similar causes.</p>
          </Section>
          <Section title="4. Course Enrollment">
            <p>Course enrollment is subject to application approval. Students must comply with our code of conduct. Misuse of the LMS or sharing credentials may result in immediate suspension.</p>
          </Section>
          <Section title="5. Intellectual Property">
            <p>All content on this website — including logos, course materials, videos, and text — belongs to Fikr Fardan. Unauthorized reproduction is prohibited.</p>
          </Section>
          <Section title="6. Limitation of Liability">
            <p>Fikr Fardan is not liable for any indirect or consequential damages arising from use of our services. Our total liability shall not exceed the amount donated in the past 30 days.</p>
          </Section>
          <Section title="7. Contact">
            <p>{BRAND.email} | {BRAND.phone}</p>
          </Section>
        </div>
      </section>
      <Footer />
    </>
  );
}
