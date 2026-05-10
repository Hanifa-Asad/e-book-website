import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | Inkspire Folio" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px]" style={{ background:"#1a1a1a", minHeight:"100vh" }}>
        <div style={{ background:"var(--charcoal-gray)", padding:"4rem 1.5rem 3rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--flame-orange)", marginBottom:"0.75rem" }}>Legal</p>
          <h1 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"var(--warm-white)", marginBottom:"0.5rem" }}>Privacy Policy</h1>
          <p style={{ color:"rgba(249,247,242,0.45)", fontSize:"0.82rem" }}>Last updated: {new Date().getFullYear()}</p>
        </div>
        <div style={{ maxWidth:800, margin:"0 auto", padding:"3rem 1.5rem 5rem", color:"rgba(249,247,242,0.8)", lineHeight:1.8 }}>
          {[
            ["1. Introduction","Inkspire Folio is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."],
            ["2. Information We Collect","We may collect: personal information (name, email, phone) you provide when contacting us; usage data including IP address, browser type, and pages visited; records of correspondence you send us; and billing details processed securely through our payment providers."],
            ["3. How We Use Your Information","We use collected information to: provide and maintain our services; process transactions and send confirmations; send promotional communications (with your consent); respond to your questions and requests; improve our website and services; and comply with legal obligations."],
            ["4. Sharing of Your Information","We do not sell your personal information. We may share information with service providers who assist in operating our website, when required by law, or in connection with a business transfer such as a merger or acquisition."],
            ["5. Cookies","We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Some site features may not function properly if cookies are disabled."],
            ["6. Your Rights","Depending on your location, you may have the right to access, correct, or delete your personal information; object to or restrict processing; data portability; and withdraw consent at any time. Contact us at info@inkspirefolio.com to exercise these rights."],
            ["7. Security","We implement appropriate technical and organizational measures to protect your personal information. However, no internet transmission is 100% secure."],
            ["8. Contact Us","Email: info@inkspirefolio.com | Phone: +1 3136127389 | Address: 785 15th Street, Office 478, Berlin, Germany 81566"],
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
