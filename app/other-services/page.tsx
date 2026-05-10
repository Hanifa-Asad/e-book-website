import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Other Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"}]}
      subtitle="Complete Author Solutions"
      title="Other Publishing Services"
      heroDescription="Beyond publishing and marketing, we offer a full suite of author services designed to support every stage of your writing and publishing journey — from concept to completed, polished, published work."
      heroImages={[
        {src:"/corporate-website-design.png", alt:"Author service portfolio showcasing digital and publishing solutions", label:"Author Support"},
        {src:"/hands-tablet-video.png", alt:"Multimedia author services in action", label:"Multimedia Services"},
        {src:"/digital-marketing-campaign.png", alt:"Cross-platform author marketing and publishing campaign", label:"Complete Support"},
      ]}
      features={[
        {title:"Audio Books",description:"Professional audiobook production with skilled narrators and studio-quality recording and mastering."},
        {title:"Author Web Design",description:"Custom author websites that build your brand, grow your email list, and showcase your books beautifully."},
        {title:"Book Cover Design",description:"Genre-appropriate, scroll-stopping cover designs for print and digital formats that command attention."},
        {title:"Book Editing",description:"Developmental, line, and copy editing services to elevate your manuscript to professional publication standard."},
        {title:"Book Formatting",description:"Professional interior formatting for print and eBook to all major platform specifications."},
        {title:"Ghostwriting",description:"Expert ghostwriters who capture your voice and transform your ideas into compelling, polished manuscripts."},
      ]}
      portfolio={[
        {title:"Author Support Bundle", description:"Delivered a combined set of services from editing to cover design for a smooth book launch.", badge:"Bundle", image:"/portfolio-branding-3.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Creative Publishing Solutions", description:"Provided a tailored package of audiobook, formatting, and marketing support for a new author.", badge:"Creative", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Premium Author Services", description:"Built a comprehensive author support plan that included web presence, branding, and book launch assets.", badge:"Premium", image:"/portfolio-social-3.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
