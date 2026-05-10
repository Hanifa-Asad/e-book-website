import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kobo Book Publishing | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"},{label:"Kobo",href:"/book-publishing/kobo"}]}
      subtitle="Get Your Book Published Effortlessly on Kobo with Our Book Publishing Services"
      title="Publish Your Book and Reach Global Readers with Our Expert Services"
      heroDescription="It's disheartening to see great work fall short of its potential due to publishing obstacles, especially on a global platform like Kobo. Completing your manuscript is an achievement, but without professional assistance, the publishing process can be overwhelming. Our services are designed to help you overcome these challenges, making sure your book gets published on Kobo without errors. We take care of everything from start to finish, allowing your book to reach readers worldwide with ease. Trust us to help your book gain the recognition it deserves on Kobo."
      heroImages={[
        {src:"/mobile-app-interface.png", alt:"Ebook distribution preview for Kobo", label:"Kobo Global Reach"},
        {src:"/professional-woman-laptop.png", alt:"Publisher reviewing ebook formatting", label:"Polished Formatting"},
        {src:"/digital-marketing-campaign.png", alt:"Digital marketing for book promotion", label:"Audience Growth"},
      ]}
      features={[
        {title:"Self-Publishing Made Easy",description:"In the age of digital transformation, many leading platforms have simplified the self-publishing process. Our tech-savvy publishers are experts at selecting the best sites, formats, and niches for your books, ensuring they reach the right audience effortlessly."},
        {title:"Effective Pre-Publishing Solutions",description:"We offer comprehensive pre-publishing services, managing all aspects of the process to meet your needs. This includes identifying and verifying sources, citing your manuscripts, providing typesetting, copyediting, and formatting services, all to ensure your book is polished and professional."},
        {title:"Affordable Publishing Services",description:"Our publishers prioritize generating organic leads and sales. We focus on effective marketing strategies to boost engagement on your author's website and increase book sales. Our services also include promoting your books through various social media channels to maximize exposure and sales."},
        {title:"Expert Editing and Acquisition",description:"We help transform your initial drafts by connecting you with our experts to unlock your book's potential. Our experienced publishers stay ahead of market trends and assess your book's scope. We follow strict guidelines and standardize every procedure to support aspiring authors in achieving their publishing goals."},
      ]}
      portfolio={[
        {title:"Kobo Global Release", description:"Launched a translated fiction title across Kobo markets with localized metadata and pricing strategy.", badge:"Global", image:"/portfolio-branding-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"E-Reader Optimized Design", description:"Delivered a seamless eBook layout for Kobo devices with a polished reading experience.", badge:"Reader Ready", image:"/portfolio-web-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Author Brand Expansion", description:"Supported a debut author with Kobo distribution and marketing-ready product pages.", badge:"New Author", image:"/portfolio-social-2.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
