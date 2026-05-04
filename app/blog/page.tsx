"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link" // Added Link import for navigation

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Free advertising for your online business.",
      date: "AUGUST 6, 2022",
      categories: ["Marketing", "Design"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
    {
      id: 2,
      title: "Building a Strong Brand Identity: A Complete Guide",
      date: "MARCH 12, 2024",
      categories: ["Branding", "Strategy"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
    {
      id: 3,
      title: "Color Psychology in Web Design: What You Need to Know",
      date: "MARCH 10, 2024",
      categories: ["Web Design", "Psychology"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
    {
      id: 4,
      title: "The Rise of Minimalist Design: Less is More",
      date: "MARCH 8, 2024",
      categories: ["Design Philosophy", "Trends"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
    {
      id: 5,
      title: "Social Media Design Best Practices for 2024",
      date: "MARCH 5, 2024",
      categories: ["Social Media", "Design"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
    {
      id: 6,
      title: "Typography Trends That Will Define This Year",
      date: "MARCH 3, 2024",
      categories: ["Typography", "Trends"],
      image: "/placeholder.svg?height=300&width=400",
      slug: "network-wormholes-colonies", // Added slug for routing
    },
  ]

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                <article className="bg-charcoal-gray rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex h-64">
                    {/* Left side - Image */}
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-1/2 p-6 flex flex-col justify-between bg-flame-orange">
                      <div>
                        <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-4">{post.date}</p>
                        <h3 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-charcoal-gray transition-colors duration-300">
                          {post.title}
                        </h3>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
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
              </Link>
            ))}
          </div>
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
