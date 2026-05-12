import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from "@/components/header";
import Footer from "@/components/footer";

// ✅ Required for static export
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound(); // If slug not found
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="bg-charcoal-gray py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-flame-orange rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-flame-orange/10 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-flame-orange/30 rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-flame-orange rounded-full"></div>
              <p className="text-flame-orange text-3xl font-semibold tracking-[0.2em] uppercase">BLOG POST</p>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-warm-white leading-[0.9] tracking-tight">
              {post.fields.title}
              <span className="text-flame-orange">.</span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-flame-orange/60 rounded-full"></div>
            </h1>

            <p className="text-warm-white text-lg mt-8 max-w-2xl leading-relaxed">
              {post.fields.description}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="text-warm-white/80 text-sm">
                Published on {new Date(post.sys.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {post.fields.image && (
            <div className="mb-12">
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.image.fields.title || post.fields.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-charcoal-gray">
            {documentToReactComponents(post.fields.content)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
