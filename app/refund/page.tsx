import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { BRAND } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title:"Refund Policy", description:"Refund Policy of Fikr Fardan" };

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <PageHero badge="Legal" title="Refund" highlight="Policy" subtitle={`Fikr Fardan — ${BRAND.address}`} />
      <section style={{ background:"#F8F6FB", padding:"5.5rem 1.5rem" }}>
        <div style={{ maxWidth:860, margin:"0 auto", background:"white", borderRadius:24, padding:"3rem", border:"1px solid rgba(107,45,143,.08)" }}>
          {[
            ["General Policy", "Donations made to Fikr Fardan are generally non-refundable, as funds are immediately allocated to active projects and beneficiaries."],
            ["Eligible Refunds", "We consider refund requests in these situations: (1) Duplicate payment made by error, (2) Payment made to wrong account and verified, (3) Technical error in transaction. Refund requests must be submitted within 7 days of the transaction."],
            ["Certificate Refunds", "Hard-copy certificate fees (PKR 500) are non-refundable after the certificate has been printed and dispatched. If the certificate was not dispatched, a full refund is available within 48 hours."],
            ["How to Request", `Email ${BRAND.email} with subject "Refund Request", include: your full name, email used, transaction date, amount, bank details, and reason. We review within 5 business days.`],
            ["Processing Time", "Approved refunds are processed within 10-14 business days via bank transfer to the original account."],
          ].map(([title, text]) => (
            <div key={title} style={{ marginBottom:"2rem" }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"#1a0533", marginBottom:".75rem", borderLeft:"4px solid #6B2D8F", paddingLeft:"1rem" }}>{title}</h2>
              <p style={{ color:"#555", fontSize:14, lineHeight:1.92 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
