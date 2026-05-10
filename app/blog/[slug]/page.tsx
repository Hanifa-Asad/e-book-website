import { notFound } from "next/navigation";

// Sample blog data
const blogPosts: Record<
  string,
  {
    title: string;
    categories: string[];
    author: string;
    publishedDate: string;
    comments: number;
    content: string;
  }
> = {
  "network-wormholes-colonies": {
    title: "Network of wormholes colonies extraordinary claims require.",
    categories: ["MARKETING", "DESIGN"],
    author: "Ui-ThemeZ",
    publishedDate: "August 6, 2021",
    comments: 2,
    content: `
      <p>Extraordinary claims require extraordinary evidence. The cosmos is within us; we are made of star-stuff. We are a way for the cosmos to know itself.</p>
      <p>Network of wormholes colonies extraordinary claims require extraordinary evidence. The cosmos is within us; we are made of star-stuff.</p>
      <p>Descended from astronomers something incredible is waiting to be known network of wormholes colonies extraordinary claims require extraordinary evidence.</p>
    `,
  },  "self-publish-book-guide": {
    title: "How to Self-Publish Your Book Successfully",
    categories: ["PUBLISHING", "SELF-PUBLISHING"],
    author: "InkspireFolio Team",
    publishedDate: "August 6, 2024",
    comments: 5,
    content: `
      <p>Self-publishing has become an accessible and viable option for authors worldwide. With the right strategy, you can successfully publish your book and reach readers globally.</p>
      <p>Start by preparing your manuscript thoroughly. Professional editing and formatting are crucial for a polished final product. Choose the right publishing platform that fits your goals, whether it's Amazon KDP, IngramSpark, or others.</p>
      <p>Marketing plays a vital role in your book's success. Build an author platform, engage with readers on social media, and consider professional book marketing services to maximize your reach.</p>
    `,
  },
  "amazon-kdp-guide": {
    title: "The Ultimate Guide to Amazon KDP Publishing",
    categories: ["AMAZON KDP", "PUBLISHING"],
    author: "InkspireFolio Team",
    publishedDate: "July 15, 2024",
    comments: 8,
    content: `
      <p>Amazon Kindle Direct Publishing (KDP) is the world's largest self-publishing platform. Learn how to navigate KDP successfully and maximize your book's potential.</p>
      <p>From formatting your manuscript to optimizing keywords and categories, discover the strategies that top-selling authors use to achieve success on Amazon.</p>
      <p>Understand KDP Select, royalty options, and marketing tools available to help your book stand out in a crowded marketplace.</p>
    `,
  },
  "book-marketing-2024": {
    title: "Book Marketing Strategies That Work in 2024",
    categories: ["MARKETING", "BOOK PROMOTION"],
    author: "InkspireFolio Team",
    publishedDate: "June 20, 2024",
    comments: 12,
    content: `
      <p>Effective book marketing is essential for authors in today's competitive landscape. Discover proven strategies that can help your book reach its target audience.</p>
      <p>From social media marketing and email campaigns to book launch events and partnerships, explore comprehensive marketing approaches that drive sales and build your author brand.</p>
      <p>Learn about the latest trends in book marketing, including TikTok book communities, influencer partnerships, and data-driven promotional strategies.</p>
    `,
  },
  "professional-book-editing": {
    title: "Why Professional Book Editing Matters",
    categories: ["EDITING", "WRITING"],
    author: "InkspireFolio Team",
    publishedDate: "May 10, 2024",
    comments: 6,
    content: `
      <p>Professional editing can transform your manuscript from good to exceptional. Understanding the different types of editing and when to use them is crucial for authors.</p>
      <p>Developmental editing, copy editing, and proofreading each serve different purposes in the publishing process. Learn how to choose the right editor for your needs.</p>
      <p>Discover why investing in professional editing services can significantly improve your book's marketability and reader satisfaction.</p>
    `,
  },
  "book-cover-design-tips": {
    title: "Creating Stunning Book Covers That Sell",
    categories: ["DESIGN", "BOOK COVERS"],
    author: "InkspireFolio Team",
    publishedDate: "April 5, 2024",
    comments: 9,
    content: `
      <p>Your book cover is often the first thing readers see. A professionally designed cover can make the difference between a sale and a pass.</p>
      <p>Learn about color psychology, typography choices, and design elements that attract readers in your genre. Understand the technical requirements for different publishing platforms.</p>
      <p>Explore the process of working with professional designers and how to communicate your vision effectively to create a cover that represents your book perfectly.</p>
    `,
  },
  "audiobooks-guide": {
    title: "The Rise of Audiobooks: A Complete Guide",
    categories: ["AUDIOBOOKS", "PUBLISHING"],
    author: "InkspireFolio Team",
    publishedDate: "March 12, 2024",
    comments: 7,
    content: `
      <p>The audiobook market continues to grow rapidly. Discover how to successfully publish and market audiobooks alongside your print and eBook editions.</p>
      <p>From selecting the right narrator to choosing distribution platforms like Audible and Findaway Voices, learn the complete process of audiobook production.</p>
      <p>Understand the benefits of audiobooks for authors and how they can expand your readership and increase your revenue streams.</p>
    `,
  },};

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound(); // If slug not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-600 mb-6">
          <span>By {post.author}</span> |{" "}
          <span>{post.publishedDate}</span> |{" "}
          <span>{post.comments} Comments</span>
        </div>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-6">
          <strong>Categories:</strong>{" "}
          {post.categories.map((c) => (
            <span key={c} className="mr-2 px-2 py-1 bg-gray-200 rounded">
              {c}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
