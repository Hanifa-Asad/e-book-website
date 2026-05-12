import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/contentful"

export default async function BlogPage() {
  let blogPosts = []
  let error = null

  try {
    blogPosts = await getAllBlogPosts()
  } catch (err) {
    console.error('Error fetching blog posts:', err)
    error = 'Failed to load blog posts. Please try again later.'
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
              <p className="text-flame-orange text-3xl font-semibold tracking-[0.2em] uppercase">OUR BLOG</p>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-warm-white leading-[0.9] tracking-tight">
              Latest{" "}
              <span className="relative">
                News
                <span className="text-flame-orange">.</span>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-flame-orange/60 rounded-full"></div>
              </span>
            </h1>

            <p className="text-warm-white text-lg mt-8 max-w-2xl leading-relaxed">
              Discover the latest trends, insights, and innovations in design and digital marketing. Stay ahead with our
              expert perspectives and industry updates.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-charcoal-gray">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="text-center py-20">
              <p className="text-warm-white text-lg">{error}</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-warm-white text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.sys.id} className="block">
                <article className="bg-charcoal-gray rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex h-64">
                    {/* Left side - Image */}
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={post.fields.image ? `https:${post.fields.image.fields.file.url}` : "/placeholder.svg"}
                        alt={post.fields.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-1/2 p-6 flex flex-col justify-between bg-flame-orange">
                      <div>
                        <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-4">
                          {new Date(post.sys.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }).toUpperCase()}
                        </p>
                        <h3 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-charcoal-gray transition-colors duration-300">
                          {post.fields.title}
                        </h3>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/blog/${post.fields.slug}`}
                          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:!bg-white hover:!text-flame-orange transition-all duration-300 flex items-center gap-2 inline-flex"
                        >
                          Visit
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal-gray mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to our newsletter and never miss out on design trends, tips, and industry news.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-flame-orange focus:border-transparent"
            />
            <button className="bg-flame-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-flame-orange/90 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
