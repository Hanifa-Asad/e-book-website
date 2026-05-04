import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-charcoal-gray text-warm-white" style={{"backgroundImage": "url('/footer.jpg')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-warm-white mb-6">Address</h3>
            <div className="space-y-2">
              <p className="text-warm-white/80 leading-relaxed">Germany — 785 15th Street, Office</p>
              <p className="text-warm-white/80 leading-relaxed">478 Berlin, De 81566</p>
            </div>
          </div>

          {/* Say Hello Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-warm-white mb-6">Say Hello</h3>
            <div className="space-y-4">
              <p className="text-warm-white/80">info@inkspirefolio.com</p>
              <p className="text-2xl font-bold text-warm-white">+1 3136127389</p>
            </div>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-warm-white mb-6">Social</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-warm-white/80 hover:text-flame-orange transition-colors font-medium tracking-wider"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                className="block text-warm-white/80 hover:text-flame-orange transition-colors font-medium tracking-wider"
              >
                TWITTER
              </a>
              <a
                href="#"
                className="block text-warm-white/80 hover:text-flame-orange transition-colors font-medium tracking-wider"
              >
                LINKEDIN
              </a>
              <a
                href="#"
                className="block text-warm-white/80 hover:text-flame-orange transition-colors font-medium tracking-wider"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-warm-white mb-6">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Type Your Email"
                className="flex-1 bg-transparent border-b border-warm-white/30 pb-2 text-warm-white placeholder-warm-white/60 focus:outline-none focus:border-flame-orange transition-colors"
              />
              <button className="ml-4 text-flame-orange hover:text-flame-orange/80 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-warm-white/20">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="rounded-lg p-2 mr-3">
              <Image src="/logos/logo-08.png" alt="Inkspire Folio" width={120} height={40} className="h-15 w-auto" />
            </div>
          </div>
          <div className="text-sm text-warm-white/60">
            © 2023 Inkspire Folio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
