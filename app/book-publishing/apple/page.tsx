import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Apple Book Publishing | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"},{label:"Apple Books",href:"/book-publishing/apple"}]}
      subtitle="Get Your Book Published Smoothly on Apple Books with Our Book Publishing Services"
      title="Unlock Your Book's Potential with Our Book Publishing Expertise"
      heroDescription="Many authors find the journey to publishing on Apple Books filled with obstacles, despite having exceptional manuscripts. Without expert guidance, the process can be overwhelming, leading to missed opportunities on this leading platform. Our professional publishing services ensure that your book not only makes it to Apple Books but also shines among its vast offerings. We handle all the complexities, from formatting to marketing, so your book receives the attention it deserves. Let us help you bring your work to the forefront of Apple Books, reaching readers across the globe."
      heroImages={[
        {src:"/smiling-professional-woman-laptop.png", alt:"Author preparing an Apple Books publication", label:"Apple Books Ready"},
        {src:"/creative-banner-hero.png", alt:"Premium book launch visuals for Apple Books", label:"Premium Launch"},
        {src:"/professional-headshot.png", alt:"Publishing specialist working on Apple distribution", label:"Distribution Expertise"},
      ]}
      features={[
        {title:"Self-Publishing Made Easy",description:"In the age of digital transformation, many leading platforms have simplified the self-publishing process. Our tech-savvy publishers are experts at selecting the best sites, formats, and niches for your books, ensuring they reach the right audience effortlessly."},
        {title:"Effective Pre-Publishing Solutions",description:"We offer comprehensive pre-publishing services, managing all aspects of the process to meet your needs. This includes identifying and verifying sources, citing your manuscripts, providing typesetting, copyediting, and formatting services, all to ensure your book is polished and professional."},
        {title:"Affordable Publishing Services",description:"Our publishers prioritize generating organic leads and sales. We focus on effective marketing strategies to boost engagement on your author's website and increase book sales. Our services also include promoting your books through various social media channels to maximize exposure and sales."},
        {title:"Expert Editing and Acquisition",description:"We help transform your initial drafts by connecting you with our experts to unlock your book's potential. Our experienced publishers stay ahead of market trends and assess your book's scope. We follow strict guidelines and standardize every procedure to support aspiring authors in achieving their publishing goals."},
      ]}
      portfolio={[
        {title:"Apple Books Launch Plan", description:"Delivered a polished Apple Books edition with optimized cover imagery and typography for Retina displays.", badge:"iBooks", image:"/portfolio-branding-3.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Design-Forward Formatting", description:"Created an elegant eBook interior for a memoir that reads cleanly across Apple devices.", badge:"Design", image:"/portfolio-web-3.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Global eBook Distribution", description:"Managed ISBN and distribution setup for an international release on Apple Books.", badge:"International", image:"/portfolio-social-3.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
