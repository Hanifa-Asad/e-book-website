import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Amazon KDP Publishing | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"},{label:"Amazon KDP",href:"/book-publishing/amazon-kdp"}]}
      subtitle="Publish Your Books on Amazon with Our Publishing Services"
      title="Transform Your Manuscript into an Amazon Best-Seller"
      heroDescription="Completing your manuscript is just the first step. Without professional guidance, the self-publishing process can be overwhelming. Our publishing experts specialize in getting your book published on Amazon, ensuring a seamless and hassle-free experience. We're here to help your book gain the recognition it deserves on one of the largest publishing platforms."
      heroImages={[
        {src:"/abstract-book-cover.png", alt:"Amazon KDP dashboard with book cover preview", label:"Amazon KDP Launch"},
        {src:"/professional-woman-laptop.png", alt:"Author preparing manuscript for publishing", label:"Expert Publishing Support"},
        {src:"/creative-banner-hero.png", alt:"Book marketing campaign visual", label:"Launch Campaign"},
      ]}
      features={[
        {title:"Self-Publishing Made Easy on Amazon",description:"In the digital age, publishing on Amazon has never been more accessible. Our tech-savvy team of publishers excels at navigating Amazon's platform, selecting the optimal formats, and targeting the right niches for your book."},
        {title:"Effective Pre-Publishing Solutions on Amazon",description:"We provide thorough pre-publishing services tailored for Amazon, handling every detail to prepare your book for success. Our offerings include source identification and verification, manuscript citation, as well as expert typesetting, copyediting, and formatting services."},
        {title:"Affordable Publishing Services for Amazon",description:"Our affordable publishing services are designed to boost your book's visibility and sales on Amazon. We prioritize generating organic leads and increasing sales through strategic marketing efforts."},
        {title:"Expert Editing for Publishing on Amazon",description:"We transform your initial drafts into polished manuscripts by connecting you with our expert editors and formatters. Our team stays ahead of market trends and evaluates your book's potential for success on Amazon."},
      ]}
      portfolio={[
        {title:"KDP Fiction Launch", description:"Published a fantasy novel on Amazon KDP with optimized categories, cover, and launch copy to maximize discoverability.", badge:"KDP Launch"},
        {title:"Non-Fiction Authority Build", description:"Created a polished publishing package for a personal development book, driving strong early reviews and visibility.", badge:"Best Seller"},
        {title:"Series Release Workflow", description:"Delivered a seamless multi-book release strategy on Amazon for a YA series with consistent formatting and metadata.", badge:"Series"},
      ]}
    />
  );
}
