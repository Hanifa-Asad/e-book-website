import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Audio Books | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Audio Books",href:"/other-services/audio-books"}]}
      subtitle="Top-Notch Audiobook Narratorsfor Hire"
      title="Get Exclusive Audiobook Services and Advance your Career as a Best-Selling Author"
      heroDescription="We at Global Publishing Agency, have premium quality narrators for your audiobooks who are unsurpassed in their game. Our team produces high-quality audiobooks that are easy to download and provide a platform for your books to rank on streaming platforms available all across the global market! Our professional audiobook narrators practice hands-on involvement with writers and editors to get complete insight and understanding of your audiobooks for the best possible narration."
      heroImages={[
        {src:"/hands-tablet-video.png", alt:"Audiobook production and narration studio", label:"Studio Production"},
        {src:"/professional-headshot.png", alt:"Narrator recording audiobook in studio", label:"Narration Excellence"},
        {src:"/mobile-app-interface.png", alt:"Audiobook player interface for listeners", label:"Listener Experience"},
      ]}
      features={[
        {title:"Industry-Leading Audiobook Experts",description:"Global Publishing Agency, is a well-crafted hub of professional writers that provide multi-faceted audiobook services to all our clients. We have a pool of the most professional audiobook writers that follow the standards of all cross-platform apps and audiobook sites to ensure your books top the charts!"},
        {title:"Premium Quality, Affordable Audiobook",description:"Our team of experts works with high-resolution sound equipment to provide the finest quality audiobooks in the US. We collaborate with top-of-the-line studio masters to keep your narration crisp and high quality at affordable prices."},
        {title:"Tech-Savvy Downloadable Digital Formats",description:"Our audiobook services are perfectly curated to be effortlessly available and downloadable for all major digital channels and platforms so your audience can easily convert them and listen to them anywhere, anytime."},
        {title:"Professional Narration and Story-Telling Company",description:"Our professional audiobook services mainly focus on and take pride in not only writing but also crafting beautiful narrations for your stories. We at Global Publishing Agency, would always place our bets on our team of experts to provide the top-most audio narrations for your novels."},
      ]}
      portfolio={[
        {title:"Narrated Novel Release", description:"Produced a polished audiobook for a mystery novel with professional narrator casting and studio-grade sound design.", badge:"Mystery Audiobook", image:"/portfolio-video-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Children's Audio Story", description:"Created a lively audiobook version of a picture book with expressive narration and custom music cues.", badge:"Kids Audiobook", image:"/portfolio-branding-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Non-Fiction Audio Guide", description:"Delivered a crisp, engaging audiobook for a business guide designed for busy listeners.", badge:"Professional", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
      processSteps={[
        {title:"Narrator Selection",description:"We carefully select professional narrators who match your book's tone, genre, and character voices."},
        {title:"Creating a Kindle-Compatible KPF File",description:"We prepare your manuscript in the proper format for Kindle Direct Publishing audiobook standards."},
        {title:"Adhering to Platform Guidelines",description:"Our team ensures all technical specifications and quality standards are met for each platform."},
        {title:"Ensuring Meticulous Quality",description:"Rigorous quality control and editing to deliver flawless audio production."},
        {title:"Incorporating Additional Features",description:"Adding chapter markers, sound effects, and other enhancements for an immersive experience."},
      ]}
      whyChooseItems={[
        {title:"Professional Narrators", description:"Access to a curated roster of professional voice actors specializing in various genres and accents.", icon:"users"},
        {title:"Studio-Quality Production", description:"State-of-the-art recording studios and equipment for crystal-clear, professional audio.", icon:"award"},
        {title:"Multi-Platform Distribution", description:"Complete distribution setup for Audible, Apple Books, Spotify, and all major audiobook platforms.", icon:"zap"},
        {title:"Quality Assurance", description:"Rigorous editing, mastering, and quality control to meet ACX and platform standards.", icon:"shield"},
        {title:"Competitive Pricing", description:"Premium services at affordable rates, making professional audiobooks accessible to all authors.", icon:"star"},
      ]}
    />
  );
}
