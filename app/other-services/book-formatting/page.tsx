import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Book Formatting Services | Inkspire Folio" };
export default function Page() {
  return (
    <ServicePageTemplate
      breadcrumb={[{label:"Home",href:"/"},{label:"Other Services",href:"/other-services"},{label:"Book Formatting",href:"/other-services/book-formatting"}]}
      subtitle="Comprehensive Book Formatting is Crucial for Authors"
      title="Explore Our Professional Book Formatting Services"
      heroDescription="Formatting a book can be one of the most challenging parts of the publishing process, especially if you're not familiar with all the detailed guidelines that need to be followed. It's more than just arranging text on a page, it's about ensuring that every element, from margins to fonts to chapter headings, meets international standards."
      heroImages={[
        {src:"/portfolio-web-1.png", alt:"Professional ebook layout displayed on a tablet", label:"Print & Digital"},
        {src:"/portfolio-web-2.png", alt:"Clean editorial formatting for a book interior", label:"Interior Design"},
        {src:"/portfolio-web-3.png", alt:"Formatted manuscript ready for submission", label:"Ready for Print"},
      ]}
      features={[
        {title:"Publishing Manuscripts",description:"Global Publishing Agency provide an affordable means of book formatting; our team of experts not only helps you identify incompetent formatting errors but also helps you edit and proofread with self-publishing book formatting standards."},
        {title:"Compatible Files",description:"Print-ready PDF files, Epub, and Mobi-compatible formats to provide compatibility for users on multiple platforms and devices."},
        {title:"Layouts and Structures",description:"Unique interior book layouts for an enjoyable read. Appropriate Table of Content that conveniently aligns with all the chapters for the readers."},
        {title:"Accurate Front Matter",description:"The matter is laid-out to perfection from Title Page, Back Matter, and Copyright Pages. Citations and references are crafted with footnotes, endnotes, and proper citations."},
      ]}
      portfolio={[
        {title:"eBook Formatting Excellence", description:"Formatted a fiction book for Kindle and ePub with clean typography, clickable navigation, and no layout errors.", badge:"Digital", image:"/portfolio-web-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Print-Ready Interior", description:"Produced a print-ready manuscript for a paperback release with precise margins, chapters, and front matter.", badge:"Print", image:"/portfolio-branding-1.png", actionText:"View Case Study", actionHref:"/contact"},
        {title:"Complex Layout Support", description:"Handled illustrations, tables, and footnotes for a nonfiction title to ensure professional readability.", badge:"Complex", image:"/portfolio-branding-3.png", actionText:"View Case Study", actionHref:"/contact"},
      ]}
    />
  );
}
