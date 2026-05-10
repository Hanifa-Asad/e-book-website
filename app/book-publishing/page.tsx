import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Book Publishing Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"}]}
      subtitle="Professional Publishing Solutions"
      title="Book Publishing Services"
      heroDescription="From your manuscript to readers worldwide — we provide end-to-end book publishing services across all major platforms. Our team ensures your book is professionally formatted, designed, and distributed for maximum reach."
      heroImages={[
        {src:"/abstract-book-cover.png", alt:"Publishing dashboard with book cover and data analytics", label:"Publishing Excellence"},
        {src:"/professional-woman-laptop.png", alt:"Author collaborating on publishing choices", label:"Author Partnership"},
        {src:"/digital-marketing-campaign.png", alt:"Omnichannel launch strategy for book distribution", label:"Global Distribution"},
      ]}
      features={[
        {title:"Manuscript Review & Editing",description:"Thorough manuscript review ensuring your content is polished and publication-ready before submission to any platform."},
        {title:"ISBN & Copyright Registration",description:"We handle all legal and administrative aspects including ISBN registration and copyright protection for your work."},
        {title:"Professional Formatting",description:"Your book formatted to precise platform specifications, displaying beautifully across all devices and print formats."},
        {title:"Cover Design",description:"Eye-catching, genre-appropriate cover designs that capture the essence of your work and attract your target readers."},
        {title:"Multi-Platform Distribution",description:"Distribute to Amazon KDP, Barnes & Noble, Apple Books, Kobo, Draft2Digital and more from a single submission."},
        {title:"Royalty Optimization",description:"Expert pricing strategy and royalty structure advice to maximize your earnings across all publishing platforms."},
      ]}
      portfolio={[
        {title:"Global Publishing Package", description:"Delivered an end-to-end publishing package for a debut author across multiple retailers.", badge:"Complete", image:"/portfolio-web-3.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Premium Launch Support", description:"Coordinated cover, formatting, and metadata for a successful multi-platform release.", badge:"Launch", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Editorial & Design Combo", description:"Combined editing and cover design for a bestselling memoir with professional polish.", badge:"Combo", image:"/portfolio-branding-2.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
