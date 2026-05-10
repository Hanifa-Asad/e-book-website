import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Book Cover Design | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Book Cover Design",href:"/other-services/book-cover-design"}]}
      subtitle="The World Is Your Oyster, Market Your Books Globally!"
      title="Crafted for impact, tailored for your narrative journey."
      heroDescription="At Global Publishing Agency, we understand that the journey of a book begins with its cover – the visual gateway to your narrative world. Our Book Cover Design Services are a symphony of creativity, craftsmanship, and a deep understanding of your story."
      heroImages={[
        {src:"/abstract-book-cover.png", alt:"Premium book cover design and mockup", label:"Cover Design"},
        {src:"/creative-banner-hero.png", alt:"Creative cover design process in action", label:"Visual Storytelling"},
        {src:"/brand-guidelines-design.png", alt:"Brand palette exploration for book cover", label:"Brand-led Design"},
      ]}
      features={[
        {title:"Understanding Your Vision and Trends",description:"We begin by deeply understanding your story, target audience, and current market trends to create a cover that resonates."},
        {title:"Crafting Bespoke Cover Concepts",description:"Our designers develop unique, custom concepts that capture the essence of your book and stand out in the marketplace."},
        {title:"Presenting and Refining Designs",description:"We present initial designs and work collaboratively with you to refine them based on your feedback and vision."},
        {title:"Unlimited Revisions for Perfection",description:"We offer unlimited revisions to ensure your cover is perfect and meets all your expectations."},
        {title:"Finalizing for All Formats",description:"We prepare your final cover in all necessary formats for eBooks, print books, and various publishing platforms."},
      ]}
      portfolio={[
        {title:"Bestselling Cover Refresh", description:"Created a high-impact redesign for a thriller cover that improved conversion and retailer visibility.", badge:"Refresh", image:"/abstract-book-cover.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Series Branding Package", description:"Delivered a cohesive cover system for a fantasy trilogy with consistent imagery and genre appeal.", badge:"Series", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Hybrid Print + eBook Design", description:"Developed cover art that performs beautifully in both print and digital marketplaces.", badge:"Hybrid", image:"/portfolio-branding-2.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
      processSteps={[
        {title:"Understanding Your Vision and Trends",description:"We analyze your book's genre, target audience, and current market trends to create a compelling visual concept."},
        {title:"Crafting Bespoke Cover Concepts",description:"Our expert designers create multiple unique cover concepts tailored to your story and brand."},
        {title:"Presenting and Refining Designs",description:"We present the concepts and collaborate with you to refine and perfect the design through feedback."},
        {title:"Unlimited Revisions for Perfection",description:"We provide unlimited revisions until you are completely satisfied with the final result."},
        {title:"Finalizing for All Formats",description:"We prepare your cover in all required formats for print, eBook, and various publishing platforms."},
      ]}
      whyChooseItems={[
        {title:"Expert Design Team", description:"Our professional designers have years of experience creating bestselling book covers across all genres.", icon:"award"},
        {title:"Unlimited Revisions", description:"We work with you until you're 100% satisfied with the final design, no extra charges.", icon:"check"},
        {title:"Genre Expertise", description:"Deep knowledge of design conventions and trends in romance, thriller, fantasy, and all major genres.", icon:"star"},
        {title:"Fast Turnaround", description:"Quick delivery without compromising quality, getting your book ready for market faster.", icon:"zap"},
        {title:"All Formats Included", description:"Complete cover packages for print, eBook, and all major publishing platforms.", icon:"shield"},
      ]}
    />
  );
}
