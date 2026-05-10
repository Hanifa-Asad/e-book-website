import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Book Editing Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Book Editing",href:"/other-services/book-editing"}]}
      subtitle="Transforming Your Books Into Professional Manuscripts"
      title="Get Error-Free Book Editing Services to Launch Your Professional Career"
      heroDescription="Turning your rough draft into a polished, ready-to-publish book can be a daunting task, but that's where we come in. At Global Publishing Agency, we understand the passion and effort you've poured into your writing, and we're here to make sure that hard work pays off."
      heroImages={[
        {src:"/professional-headshot.png", alt:"Editor reviewing manuscript edits", label:"Precision Editing"},
        {src:"/smiling-professional-woman-laptop.png", alt:"Book editor working on copy and formatting", label:"Polished Manuscript"},
        {src:"/digital-marketing-campaign.png", alt:"Editorial workflow and quality checks", label:"Quality Control"},
      ]}
      features={[
        {title:"Developmental Editing or Manuscript Appraisal",description:"Our professional book editors are experts in every field of editing, from copyediting, line-by-line editing, developmental editing, proofreading, and content editing."},
        {title:"Proofreading and Editing Services",description:"Editing is one essential factor of books that needs to be outsourced for various reasons."},
        {title:"Copy Editing",description:"Our book editor for hire reviews your manuscripts meticulously and finds any spelling, punctuation, or grammar mistakes."},
        {title:"Line-by-Line Editing",description:"Get our line-by-line editing services and create a world-class masterpiece for your readers."},
      ]}
      portfolio={[
        {title:"Genre-Perfect Manuscript", description:"Delivered award-ready editing for a historical fiction novel with deep structural and line-level polish.", badge:"Fiction", image:"/portfolio-branding-2.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Proofread Business Guide", description:"Refined a business author’s draft into a publication-ready manuscript with clarity and consistency.", badge:"Non-Fiction", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Academic Publishing Prep", description:"Prepared a research-based manuscript for professional publication with rigorous proofreading and formatting.", badge:"Academic", image:"/portfolio-social-2.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
      processSteps={[
        {title:"Understanding Your Manuscript and Goals",description:"We thoroughly review your manuscript and discuss your vision and objectives for the editing process."},
        {title:"Comprehensive Editing and Proofreading",description:"Our editors perform detailed editing covering grammar, style, consistency, and content flow."},
        {title:"Ensuring Style Guide Compliance",description:"We ensure your manuscript follows the appropriate style guide and publishing standards."},
        {title:"Providing Detailed Feedback and Revisions",description:"We provide comprehensive feedback and work through multiple revision rounds."},
        {title:"Finalizing a Market-Ready Manuscript",description:"We deliver a polished, publication-ready manuscript that meets professional standards."},
      ]}
      whyChooseItems={[
        {title:"Choose Your Editor", description:"Select from our pool of experienced editors who specialize in your genre and style.", icon:"users"},
        {title:"Multiple Revisions", description:"Unlimited revision rounds to ensure your manuscript meets your exact vision.", icon:"check"},
        {title:"Proofreading Excellence", description:"Professional proofreading that catches every error and enhances readability.", icon:"shield"},
        {title:"Affordable Editing", description:"High-quality editing services at competitive prices for authors at every level.", icon:"star"},
        {title:"Genre Specialists", description:"Editors with deep expertise in fiction, non-fiction, memoir, and technical writing.", icon:"award"},
      ]}
    />
  );
}
