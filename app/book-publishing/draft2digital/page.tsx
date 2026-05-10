import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Draft2Digital Publishing | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"},{label:"Draft2Digital",href:"/book-publishing/draft2digital"}]}
      subtitle="Get Your Book Published Smoothly on Draft2Digital Publishing Services"
      title="Turn Your Manuscript into a Published Book and Best-Seller"
      heroDescription="The path to successfully publishing across multiple platforms through Draft2Digital can be fraught with challenges. Many authors, despite their talent and hard work, encounter obstacles that prevent their books from gaining the recognition they deserve. Our services are here to smooth out the process, ensuring your manuscript is published without a hitch. From formatting to distribution, we manage all the details, making sure your book reaches its full potential on Draft2Digital. Let us help you turn your completed manuscript into a published success story."
      heroImages={[
        {src:"/professional-woman-laptop.png", alt:"Draft2Digital publishing workflow", label:"Draft2Digital Distribution"},
        {src:"/modern-ecommerce-website.png", alt:"Author dashboard for global book publishing", label:"Global Platform"},
        {src:"/digital-marketing-campaign.png", alt:"Book promotion campaign for global reach", label:"Marketing Support"},
      ]}
      features={[
        {title:"Self-Publishing Made Easy",description:"In the age of digital transformation, many leading platforms have simplified the self-publishing process. Our tech-savvy publishers are experts at selecting the best sites, formats, and niches for your books, ensuring they reach the right audience effortlessly."},
        {title:"Effective Pre-Publishing Solutions",description:"We offer comprehensive pre-publishing services, managing all aspects of the process to meet your needs. This includes identifying and verifying sources, citing your manuscripts, providing typesetting, copyediting, and formatting services, all to ensure your book is polished and professional."},
        {title:"Affordable Publishing Services",description:"Our publishers prioritize generating organic leads and sales. We focus on effective marketing strategies to boost engagement on your author's website and increase book sales. Our services also include promoting your books through various social media channels to maximize exposure and sales."},
        {title:"Expert Editing and Acquisition",description:"We help transform your initial drafts by connecting you with our experts to unlock your book's potential. Our experienced publishers stay ahead of market trends and assess your book's scope. We follow strict guidelines and standardize every procedure to support aspiring authors in achieving their publishing goals."},
      ]}
      portfolio={[
        {title:"Multi-Platform Distribution", description:"Published a title across Draft2Digital's network with optimized metadata and retail-facing assets.", badge:"Wide Reach", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Author Services Bundle", description:"Delivered a complete package of formatting, cover design, and retail distribution for a debut author.", badge:"Bundle", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Publication Accelerator", description:"Launched a quick-turnaround distribution project for an author needing rapid global availability.", badge:"Fast Track", image:"/portfolio-social-1.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
