"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Layers, FileText, ImageIcon, Gift } from "lucide-react"
import Progress from "@/components/progress"
import BigSplitHeadingMarquee from "@/components/BigSplitHeadingMarquee";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/about/banner.jpg)" }}
        />
        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-flame-orange/80 to-flame-orange/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-warm-white mb-6">
              Driven by Creative Excellence
            </h1>
            <p className="text-lg lg:text-xl text-warm-white/90 leading-relaxed text-white">
              At InkspireFolio, design is more than a service — it’s our passion. With a commitment to creativity, innovation, and precision, we craft solutions tailored to every client’s unique needs. From concept to execution, we dedicate ourselves fully to each project, ensuring work that inspires, connects, and delivers real impact.
            </p>
          </div>
        </div>
      </section>

      <BigSplitHeadingMarquee text="ABOUT US" solidRatio={0.58} speed={20} />

      {/* Designing Beyond Boundaries Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Designing Without Limits</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                Welcome to InkspireFolio, where imagination meets strategy. We are a team of creative thinkers, designers, and storytellers dedicated to shaping ideas into powerful visual experiences. With a focus on originality and excellence, we go beyond expectations to deliver solutions that resonate with audiences and elevate brands. Whether you’re a startup building your identity or an established business refreshing your presence, we’re here to help you create work that truly stands out.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://globaldesignsagency.com/assets/images/about-first.webp"
                alt="Professional designer working"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Design Potential Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="https://globaldesignsagency.com/assets/images/about-second.webp"
                alt="Creative designer at work"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Unleashing Creative Potential</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                At InkspireFolio, our mission is to transform ideas into experiences that inspire and engage. We empower clients through innovative design, authentic storytelling, and a vision-driven approach that helps them thrive in a competitive market. Our goal is to set new standards in creative excellence, driving transformation and leaving a lasting impression through every project we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <Progress/>

      {/* Meet Our Dynamic Design Crew Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink-black">Meet the InkspireFolios Team</h2>
              <p className="text-lg text-charcoal-gray leading-relaxed">
                Behind InkspireFolio is a passionate team of designers, editors, and creative minds who believe in the power of storytelling through design. Together, we bring diverse skills and perspectives to craft unique, impactful solutions for every project. With collaboration at our core, we translate visions into designs that captivate and inspire. Meet the people who bring ideas to life — the driving force behind our creativity, innovation, and success.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://globaldesignsagency.com/assets/images/about-third.webp"
                alt="Professional team member"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
