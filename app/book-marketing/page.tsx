import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Book Marketing Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Book Marketing",href:"/book-marketing"}]}
      subtitle="The World Is Your Oyster, Market Your Books Globally!"
      title="Elevate Your Book's Success with Us!"
      heroDescription="With Global Publishing Agency, you are never constrained; when it comes to our book marketing services, we enable every individual to expand their audience. Our marketing experts perform research-based analysis to find the right platform and market to publish your books. Marketing is a complex skill; your books do not sell themselves. If you need to get your word out, you need a lot of market insight."
      heroImages={[
        {src:"/digital-marketing-campaign.png", alt:"Book marketing campaign and analytics dashboard", label:"Marketing Strategy"},
        {src:"/social-icons-vertical.png", alt:"Social media strategy for authors", label:"Social Growth"},
        {src:"/corporate-website-design.png", alt:"Author website and landing page design", label:"Brand Presence"},
      ]}
      features={[
        {title:"Author Website Creation",description:"Get an SEO-optimized author website to promote your book on multiple platforms. Find effective marketing strategies that are suited for your readers."},
        {title:"E-Book SEO Marketing",description:"Our exceptional SEO technicians offer you assistance with optimizing your online and web content so you can improve your ranking on SERPs."},
        {title:"Book Distribution and Publication",description:"When you hire Global Publishing Agency, you trust us to market and publish your books that can be converted into leads."},
        {title:"Lead-Generating Strategies",description:"With our best book marketing connoisseurs, you do not need to worry about selling your book."},
        {title:"Best Seller Rank",description:"Achieve top rankings and visibility in your genre with our proven bestseller campaign strategies."},
        {title:"Press Release",description:"Professional press release services to get media coverage and build credibility for your book."},
        {title:"Audiobook Marketing",description:"Specialized marketing strategies for your audiobook to reach listeners across multiple platforms."},
        {title:"Social Media Marketing",description:"Comprehensive social media campaigns to build your author brand and drive book sales."},
      ]}
      portfolio={[
        {title:"Young Adult Launch Campaign", description:"Built a targeted marketing funnel for a YA novel that generated pre-orders and email sign-ups.", badge:"Campaign", image:"/portfolio-social-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Bestseller Visibility Boost", description:"Implemented SEO and organic socials for a thriller release that climbed category charts within weeks.", badge:"SEO Success", image:"/portfolio-web-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Audiobook Audience Growth", description:"Launched a cross-platform audiobook campaign to increase downloads and platform reviews.", badge:"Audio Marketing", image:"/portfolio-video-1.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
