import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions | Inkspire Folio" };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px]" style={{ background:"#1a1a1a", minHeight:"100vh" }}>
        <div style={{ background:"var(--charcoal-gray)", padding:"4rem 1.5rem 3rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--flame-orange)", marginBottom:"0.75rem" }}>Legal</p>
          <h1 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"var(--warm-white)", marginBottom:"0.5rem" }}>Terms &amp; Conditions</h1>
          <p style={{ color:"rgba(249,247,242,0.45)", fontSize:"0.82rem" }}>Last updated: {new Date().getFullYear()}</p>
        </div>
        <div style={{ maxWidth:800, margin:"0 auto", padding:"3rem 1.5rem 5rem", color:"rgba(249,247,242,0.8)", lineHeight:1.8 }}>
          {[
            ["1. Acceptance of Terms","By accessing or using Inkspire Folio services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services."],
            ["2. Services","Inkspire Folio provides book publishing, marketing, illustration, editing, formatting, cover design, ghostwriting, audiobook production, and related services. The specific scope is defined in individual service agreements."],
            ["3. Payment Terms","Fees are outlined in individual proposals. Payment is typically 50% upfront and 50% upon delivery. All prices are in USD unless otherwise stated. Invoices are due within 14 days of issue. Late payments may incur interest at 1.5% per month."],
            ["4. Intellectual Property","You retain all rights to your original content and manuscripts. Upon full payment, all deliverables created for your project transfer to you. Our processes and methodologies remain our intellectual property."],
            ["5. Client Responsibilities","You agree to: provide accurate and complete information; ensure you have all necessary rights to materials submitted; provide timely feedback; and ensure your content does not infringe any third-party intellectual property."],
            ["6. Revisions & Approval","Each package includes a specified number of revision rounds. Additional revisions may be charged at our hourly rate. Once a deliverable is approved, it is considered final."],
            ["7. Cancellation & Refunds","Cancellations before work commences receive a full refund. Cancellations after work has started are charged for work completed. Digital deliverables are non-refundable once accessed or downloaded."],
            ["8. Limitation of Liability","To the fullest extent permitted by law, our total liability shall not exceed the total fees paid for the specific service giving rise to the claim."],
            ["9. Confidentiality","We treat all client materials with strict confidentiality and will not disclose your work to third parties without your written consent, except as required by law or to deliver contracted services."],
            ["10. Contact Us","Email: info@inkspirefolio.com | Phone: +1 3136127389 | Address: 785 15th Street, Office 478, Berlin, Germany 81566"],
          ].map(([h, p]) => (
            <section key={h} style={{ marginBottom:"2rem" }}>
              <h2 style={{ fontSize:"1.1rem", fontWeight:700, color:"var(--warm-white)", marginBottom:"0.6rem", paddingBottom:"0.3rem", borderBottom:"2px solid var(--flame-orange)", display:"inline-block" }}>{h}</h2>
              <p style={{ fontSize:"0.9rem" }}>{p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
