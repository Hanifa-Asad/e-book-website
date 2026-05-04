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
  },
};

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
