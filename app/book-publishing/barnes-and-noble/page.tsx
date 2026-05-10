import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Barnes & Noble Publishing | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Publishing",href:"/book-publishing"},{label:"Barnes & Noble",href:"/book-publishing/barnes-and-noble"}]}
      subtitle="Get Your Book Published Smoothly on Barnes & Noble with Our Book Publishing Services"
      title="Elevate Your Book to Best-Seller Status with Our Publishing Services"
      heroDescription="Pouring your heart into a manuscript is just the beginning. Navigating the publishing process on a prestigious platform like Barnes & Noble can be daunting, with many talented authors facing obstacles that prevent their work from reaching this top-tier site. Our expert book marketers specialize in eliminating these hurdles. We ensure that your book not only gets published on Barnes & Noble but also gains the recognition it deserves. Trust us to help your publishing experience smooth and convenient, so your story can reach readers through this iconic retailer."
      heroImages={[
        {src:"/professional-headshot.png", alt:"Author collaborating with a publishing specialist", label:"Barnes & Noble Ready"},
        {src:"/creative-banner-hero.png", alt:"Book marketing strategy meeting", label:"Retail Visibility"},
        {src:"/abstract-book-cover.png", alt:"Finished book cover ready for launch", label:"Cover & Distribution"},
      ]}
      features={[
        {title:"Self-Publishing Made Easy",description:"In the age of digital transformation, many leading platforms have simplified the self-publishing process. Our tech-savvy publishers are experts at selecting the best sites, formats, and niches for your books, ensuring they reach the right audience effortlessly."},
        {title:"Effective Pre-Publishing Solutions",description:"We offer comprehensive pre-publishing services, managing all aspects of the process to meet your needs. This includes identifying and verifying sources, citing your manuscripts, providing typesetting, copyediting, and formatting services, all to ensure your book is polished and professional."},
        {title:"Affordable Publishing Services",description:"Our publishers prioritize generating organic leads and sales. We focus on effective marketing strategies to boost engagement on your author's website and increase book sales. Our services also include promoting your books through various social media channels to maximize exposure and sales."},
        {title:"Expert Editing and Acquisition",description:"We help transform your initial drafts by connecting you with our experts to unlock your book's potential. Our experienced publishers stay ahead of market trends and assess your book's scope. We follow strict guidelines and standardize every procedure to support aspiring authors in achieving their publishing goals."},
      ]}
      portfolio={[
        {title:"Retail Distribution Preparation", description:"Prepared a memoir for B&N Press with professional layout and metadata optimized for print distribution.", badge:"B&N Ready", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Category Spotlight Campaign", description:"Designed a targeted launch package for a lifestyle title that improved placement in retail categories.", badge:"Visibility", image:"/portfolio-social-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Print & Digital Sync", description:"Delivered print-ready and eBook-ready assets for a novel launch with consistent brand presentation.", badge:"Multi-Format", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
