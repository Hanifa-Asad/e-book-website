import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Children Book Illustration | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Children Book Illustration",href:"/children-book-illustration"}]}
      subtitle="Explore Our Portfolio"
      title="Create a Stunning Children's Book with Our Professional Writing Services"
      heroDescription="Publishing a children's book might seem straightforward, but it's a process filled with intricate details. At Global Publishing Agency, our seasoned team knows these complexities inside and out, thanks to years of experience. From the smallest detail to the final product, we handle it all so you don't have to. Simply submit your manuscript, and let our experts do the heavy lifting. We're here to ensure your publishing journey is smooth, efficient, and stress-free. Start your publishing journey with Global Publishing Agency today."
      heroImages={[
        {src:"/abstract-book-cover.png", alt:"Children's book cover illustration and concept art", label:"Illustration Studio"},
        {src:"/creative-banner-hero.png", alt:"Art direction for a storybook publishing project", label:"Storybook Design"},
        {src:"/brand-guidelines-design.png", alt:"Illustration style guide for children's characters", label:"Visual Direction"},
      ]}
      features={[
        {title:"Illustration Made Easy",description:"In today's digital world, getting your children's book illustrated is more accessible than ever. At Global Publishing Agency, we simplify the process of bringing your story to life with vibrant illustrations. Our team of illustrators guides you through selecting the right style, formats, and concepts to ensure your book captivates young readers."},
        {title:"Effective Pre-Illustration Solutions",description:"Before we start illustrating, our pre-illustration services lay a solid foundation for your children's book. We assist with brainstorming visual concepts and developing engaging imagery that resonates with young audiences. Our goal is to help you create illustrations that are both captivating and educational, setting the stage for a visually stunning book."},
        {title:"Affordable Illustration Services",description:"We provide high-quality illustration services. Our experienced illustrators create visuals that enchant and engage children, ensuring your book stands out. We offer customized illustration that match your vision and budget, making professional artwork accessible and affordable."},
        {title:"Expert Illustration and Design",description:"Our team connects you with expert illustrators and designers who specialize in children's literature. We refine your visuals, ensuring they meet industry standards and captivate your target audience. From character design to scene creation, we offer comprehensive support throughout the illustration process."},
        {title:"Character Design",description:"Unique, memorable characters designed from scratch based on your descriptions, appealing perfectly to your target age group."},
        {title:"Scene Illustration",description:"Stunning full-page and double-spread illustrations that create visual drama and keep young readers engaged and turning pages."},
        {title:"Cover Art",description:"A show-stopping cover illustration that captures your book's essence and stands out in crowded marketplaces and library shelves."},
        {title:"Visual Development",description:"Meticulous attention to visual consistency across all illustrations — same characters, colour palettes, and style throughout."},
      ]}
      portfolio={[
        {title:"Storybook Series Artwork", description:"Created a complete visual identity for a children's series with bright characters and memorable scenes.", badge:"Series Art", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Cover Illustration", description:"Designed a playful, market-ready cover for a preschool book series that boosted catalog visibility.", badge:"Cover Art", image:"/abstract-book-cover.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Character Characterization", description:"Developed a lovable character set with consistent expressions and story-driven pose variations.", badge:"Character Design", image:"/brand-guidelines-design.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
