import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Ghostwriting Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Ghostwriting",href:"/other-services/ghostwriting"}]}
      subtitle="Get Written Content in all Forms with Our Professional Ghostwriting!"
      title="Professional Ghostwriting Services"
      heroDescription="Ghostwriting services are a new wave of writing, with multiple people getting more and more interested in putting their ideas in front of the world; many want to share stories that have deeply affected them and want to aware more people. Writing a book is not an easy process; you can have multiple hurdles where you have writer's block, or maybe you don't know how to properly formulate a chapter."
      heroImages={[
        {src:"/professional-headshot.png", alt:"Ghostwriter collaborating with an author", label:"Ghostwriting Expertise"},
        {src:"/smiling-professional-woman-laptop.png", alt:"Writing and editing a professional manuscript", label:"Complete Manuscripts"},
        {src:"/placeholder-user.jpg", alt:"Authentic author storytelling support", label:"Voice Capture"},
      ]}
      features={[
        {title:"Author Website Creation",description:"Get an SEO-optimized author website to promote your book on multiple platforms. Find effective marketing strategies that are suited for your readers."},
        {title:"Complete Manuscript Formatting",description:"Formatting is no easy task; Global Publishing Agency use standardized processes to format each book with precision and follow guidelines of top sites like Amazon KDP, Barnes & Nobles, and more."},
        {title:"Editing and Proofreading",description:"No reader wants to read a book filled with grammatical errors and spelling mistakes; it immediately puts them off."},
        {title:"Promotions & Marketing",description:"We have a few marketing tricks up our sleeves to ensure your books are evenly marketed through omnichannel platforms."},
      ]}
      portfolio={[
        {title:"Executive Memoir Project", description:"Delivered a polished ghostwritten memoir with strong voice fidelity and professional structuring.", badge:"Memoir", image:"/professional-headshot.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Business Book Draft", description:"Created a compelling business guide from concept to first draft for a busy entrepreneur.", badge:"Business", image:"/portfolio-web-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Fiction Manuscript Development", description:"Crafted a complete fiction manuscript with rich characters, pacing, and market-ready storytelling.", badge:"Fiction", image:"/portfolio-branding-3.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
