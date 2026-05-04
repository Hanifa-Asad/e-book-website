import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, ImageIcon, Layers, Gift } from "lucide-react"
import Progress from "@/components/progress"
import Number from "../number"
import ContactForm from "../contactform"

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/logoDesign/banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Web Design & Development
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Turn visitors into loyal customers with a website that works beautifully.
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
              <h2 className="text-4xl font-bold text-charcoal-gray mb-6">Your Vision, Our Code — Designing Digital Experiences That Convert</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At InkspireFolio, we design and develop websites that seamlessly blend creativity with functionality. Our expert team crafts responsive, user-friendly, and visually engaging sites tailored to your goals. From polished interfaces to smooth performance, we prioritize user experience to maximize engagement and growth.
              </p>
              <button className="bg-warm-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-warm-orange/90 transition-colors">
                Get Quote
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://globaldesignsagency.com/assets/images/services/first-section/logo.png"
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
            <h2 className="text-4xl font-bold text-charcoal-gray mb-4">Web Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project is developed with clean code, optimized performance, and scalable solutions — ensuring your digital presence makes a powerful impact.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Portfolio items with different background colors */}
            <div className="bg-gray-100 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 bg-charcoal-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <h3 className="font-bold text-charcoal-gray">MOUNTAINEERING</h3>
                <p className="text-sm text-gray-600">ADVENTURE COMPANY</p>
              </div>
            </div>

            <div className="bg-charcoal-gray p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-purple-400 text-4xl font-bold mb-2">★</div>
                <h3 className="font-bold text-white">SEED STAR</h3>
              </div>
            </div>

            <div className="bg-teal-800 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-white mx-auto mb-4"></div>
                <h3 className="font-bold text-white">THE EMERALD</h3>
                <p className="text-sm text-gray-300">CONSULTING GROUP</p>
              </div>
            </div>

            <div className="bg-gray-50 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-charcoal-gray mx-auto mb-4 flex items-center justify-center">
                  <span className="text-charcoal-gray">♀</span>
                </div>
                <h3 className="font-bold text-charcoal-gray">HEAD TO TAILS</h3>
              </div>
            </div>

            <div className="bg-charcoal-gray p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-purple-400 text-2xl font-bold mb-2">MINDS</div>
                <h3 className="font-bold text-white">FESTIVAL</h3>
              </div>
            </div>

            <div className="bg-gray-100 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-charcoal-gray mx-auto mb-4 flex items-center justify-center">
                  <span className="text-charcoal-gray">♀</span>
                </div>
                <h3 className="font-bold text-charcoal-gray text-2xl italic">Casa Mia</h3>
                <p className="text-sm text-gray-600">ITALIAN RESTAURANT</p>
              </div>
            </div>

            <div className="bg-gray-200 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal-gray rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white">🏃</span>
                </div>
                <h3 className="font-bold text-charcoal-gray">running and stuff</h3>
              </div>
            </div>

            <div className="bg-red-900 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <h3 className="font-bold text-white text-xl">APOCALYPSE</h3>
                <h3 className="font-bold text-white text-xl">DAWN</h3>
              </div>
            </div>

            <div className="bg-gray-100 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white">🎭</span>
                </div>
                <h3 className="font-bold text-charcoal-gray">Comedic</h3>
                <h3 className="font-bold text-gray-500">CHAMELEON</h3>
              </div>
            </div>

            <div className="bg-gray-100 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <h3 className="font-bold text-charcoal-gray">COMPANIONS</h3>
                <p className="text-sm text-gray-600">PET CARE & WALKS</p>
              </div>
            </div>

            <div className="bg-yellow-200 p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white">⚡</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-gray p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <h3 className="font-bold text-white">BLACK FORGE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <Progress/>

      {/* Transforming Visions Section */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url(https://globaldesignsagency.com/assets/images/call-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">Transforming Visions into Brands</h2>
          <p className="text-charcoal-gray mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            We do not tell you our story. We write it together. Partnering with us means a seat at the table where you
            will be heard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-flame-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-flame-orange/90 transition-colors text-lg">
              Contact us Now!
            </button>

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
