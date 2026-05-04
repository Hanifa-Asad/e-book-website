import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, ImageIcon, Layers, Gift } from "lucide-react"
import Progress from "@/components/progress"
import Number from "../number"
import ContactForm from "../contactform"
import ContactButton from '../contact_button'

type PortfolioType = "image" | "video" | "text"

type PortfolioItemT = {
  type: PortfolioType
  // for image/video
  src?: string
  alt?: string
  poster?: string
  // for text
  title?: string
  subtitle?: string
  bg?: string // Tailwind color classes e.g., "bg-gray-100"
  textColor?: string // Tailwind text color e.g., "text-charcoal-gray"
}

export default function branding() {

  // Branding page
  const heading = "Branding"
  const banner_text = "Shape your story with a brand identity that resonates and inspires."
  const service_type = "Stand Out with Strategic Branding Solutions"
  const service_para = "At InkspireFolio, branding goes beyond visuals — it’s about creating a cohesive identity that communicates your values and captivates your audience. From defining brand guidelines and messaging to crafting striking visual assets, we ensure your brand is consistent, recognizable, and memorable. Whether you’re starting fresh or refreshing your identity, we tailor our approach to reflect your unique vision and goals."
  const Portfolio_heading = "Brand Portfolio"
  const Portfolio_para = "With a holistic approach to branding, we build strategies that not only capture attention but also foster long-term trust and loyalty."
  const banner_img = "url(/logoDesign/banner.jpg)"
  const section_right_logo =
    "https://globaldesignsagency.com/assets/images/services/first-section/logo.png"

  const transforming_heading = "Transforming Visions into Brands";
  const transforming_text = "We do not tell you our story. We write it together. Partnering with us means a seat at the table where you will be heard.";

  // --- SMART PORTFOLIO DATA (JSON-like array) ---
  const portfolioData: PortfolioItemT[] = [
    // VIDEO
    // {
    //   type: "video",
    //   src: "/portfolio/reel-01.mp4",
    //   poster: "/portfolio/reel-01.jpg",
    //   alt: "Brand reel 01",
    // },
    // IMAGE EXAMPLES
    // {
    //   type: "image",
    //   src: "/portfolio/logo-mountaineering.png",
    //   alt: "Mountaineering Logo",
    // },
    // TEXT EXAMPLES
    {
      type: "text",
      title: "HEAD TO TAILS",
      subtitle: "GROOMING • CARE • LOVE",
      bg: "bg-gray-50",
      textColor: "text-charcoal-gray",
    },
    {
      type: "text",
      title: "MINDS",
      subtitle: "FESTIVAL",
      bg: "bg-charcoal-gray",
      textColor: "text-white",
    },
    {
      type: "text",
      title: "Casa Mia",
      subtitle: "ITALIAN RESTAURANT",
      bg: "bg-gray-100",
      textColor: "text-charcoal-gray",
    },
    {
      type: "text",
      title: "HEAD TO TAILS",
      subtitle: "GROOMING • CARE • LOVE",
      bg: "bg-gray-50",
      textColor: "text-charcoal-gray",
    },
    {
      type: "text",
      title: "MINDS",
      subtitle: "FESTIVAL",
      bg: "bg-charcoal-gray",
      textColor: "text-white",
    },
    {
      type: "text",
      title: "Casa Mia",
      subtitle: "ITALIAN RESTAURANT",
      bg: "bg-gray-100",
      textColor: "text-charcoal-gray",
    },
    {
      type: "text",
      title: "HEAD TO TAILS",
      subtitle: "GROOMING • CARE • LOVE",
      bg: "bg-gray-50",
      textColor: "text-charcoal-gray",
    },
    {
      type: "text",
      title: "MINDS",
      subtitle: "FESTIVAL",
      bg: "bg-charcoal-gray",
      textColor: "text-white",
    },
    {
      type: "text",
      title: "Casa Mia",
      subtitle: "ITALIAN RESTAURANT",
      bg: "bg-gray-100",
      textColor: "text-charcoal-gray",
    },
    // Mix more as needed…
  ]

  // --- RENDER HELPERS ---
  const PortfolioItem = ({ item }: { item: PortfolioItemT }) => {
    const baseBox =
      "relative flex items-center justify-center min-h-[300px] overflow-hidden"

    if (item.type === "video" && item.src) {
      return (
        <div className={`${baseBox} bg-black`}>
          <video
            className="w-full h-full object-cover"
            src={item.src}
            poster={item.poster}
            playsInline
            muted
            loop
            autoPlay
            preload="none"
          />
          {item.alt ? (
            <span className="sr-only">{item.alt}</span>
          ) : null}
        </div>
      )
    }

    if (item.type === "image" && item.src) {
      return (
        <div className={`${baseBox} bg-gray-100`}>
          {/* If you prefer next/image, swap this for <Image /> */}
          <img
            src={item.src}
            alt={item.alt || "Portfolio image"}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      )
    }

    // TEXT
    return (
      <div
        className={`${baseBox} ${
          item.bg || "bg-gray-200"
        } text-center p-12`}
      >
        <div className="space-y-2">
          {item.title ? (
            <h3
              className={`font-bold text-2xl ${
                item.textColor || "text-charcoal-gray"
              }`}
            >
              {item.title}
            </h3>
          ) : null}
          {item.subtitle ? (
            <p
              className={`text-sm opacity-80 ${
                item.textColor || "text-charcoal-gray"
              }`}
            >
              {item.subtitle}
            </p>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: banner_img }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {heading}
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {banner_text}
              </p>
            </div>

            {/* Right Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal-gray mb-6">
                {service_type}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service_para}
              </p>
              <button className="bg-warm-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-warm-orange/90 transition-colors">
                Get Quote
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={section_right_logo}
                alt="Logo Design Process"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-gray mb-4">
              {Portfolio_heading}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {Portfolio_para}
            </p>
          </div>

          {/* SMART Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {portfolioData.map((item, idx) => (
              <PortfolioItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <Progress />

      {/* Transforming Visions Section */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://globaldesignsagency.com/assets/images/call-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            {transforming_heading}
          </h2>
        <p className="text-charcoal-gray mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            {transforming_text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactButton/>
            <div className="flex items-center gap-3 text-charcoal-gray">
              <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-charcoal-gray/70">Call Us 24/7</p>
                <p className="font-bold text-lg text-charcoal-gray"><Number/></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
