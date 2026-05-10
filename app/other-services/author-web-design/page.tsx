import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Author Web Design | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Author Web Design",href:"/other-services/author-web-design"}]}
      subtitle="Unleash the Power of Your Online Presence with Custom Author Website Design"
      title="Launch Tailor-Made Author Websites For Your Professional Career"
      heroDescription="Attract and engage more readers with a professional author website designed by the experts. A well-designed author website is a powerful tool for establishing your online presence and connecting with your readers. At Global Publishing Agency, our team of experienced website designers specializes in creating custom author websites that are tailored to your specific needs."
      heroImages={[
        {src:"/corporate-website-design.png", alt:"Author website design for book promotion", label:"Author Website"},
        {src:"/web-application-interface.png", alt:"Responsive author web layout on multiple devices", label:"Responsive Design"},
        {src:"/mobile-app-interface.png", alt:"Homepage layout for author brand", label:"Brand Showcase"},
      ]}
      features={[
        {title:"Search Engine Optimization",description:"Our websites are optimized for search engines, so your author website can rank higher in search results and reach a wider audience."},
        {title:"Custom Design Options",description:"We offer a range of custom design options to ensure that your author website is unique and tailored to your specific needs."},
        {title:"User-Friendly and Easy to Navigate",description:"Our websites are designed to be user-friendly and easy to navigate, so your readers can find what they're looking for with ease."},
        {title:"Expertise in Author Website Design",description:"Our team has extensive experience in designing professional author websites that reflect your style and showcase your work."},
      ]}
      portfolio={[
        {title:"Author Portfolio Launch", description:"Built a sleek author website with book listings, blog, and newsletter signup for strong audience engagement.", badge:"Web Design", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"SEO Optimized Author Home", description:"Designed an author homepage with fast load times, clear calls to action, and search-friendly content.", badge:"SEO", image:"/portfolio-web-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Responsive Book Showcase", description:"Delivered a responsive website featuring book galleries, reviews, and retailer links for discoverability.", badge:"Showcase", image:"/portfolio-branding-3.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
