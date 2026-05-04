"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isServicesOpen])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "#services", hasDropdown: true },
    { name: "REVIEWS", href: "/reviews" },
    { name: "BLOGS", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ]

  const services = [
    {
      name: "Logo design",
      description: "Make your company's identity stand out with a logo",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/rljrflzd.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/logo-design",
    },
    { name: "Branding",
      description: "An effective and strategized branding strategy",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/pkvlegzp.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/branding",
     },
    {
      name: "Web design & development",
      description: "Convert visitors to customers with a website that works",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/ailnzwyn.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/web",              
    },
    { name: "Video animation",
      description: "Bringing your message to life with animation",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/ugllxeyl.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/animation",
     },
    // {
    //   name: "Business marketing",
    //   description: "Let us unlock your brand's potential using our unique approach",
    //   icon: <lord-icon
    //                     src="https://cdn.lordicon.com/lbcxnxti.json"
    //                     trigger="loop"
    //                     delay="2000"
    //                     colors="primary:#2C2C2C,secondary:#2C2C2C"
    //                     style={{ width: "60px", height: "60px" }}
    //                 ></lord-icon>,
    //   href: "/services/business",
    // },
    { name: "Social Media",
      description: "Promote your brand across a variety of platforms",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/hmabmtlg.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/social",
    },
    {
      name: "Video Editing",
      description: "A cover design that transforms stories into stunning books",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/rrbmabsx.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/video_editing",
    },
    { name: "Book Writing",
      description: "Professional Book Writing Turns Your Vision into Words",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/fikcyfpp.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/content_writing",
    },
    { name: "Book Cover Design",
      description: "Professional Book Writing Turns Your Vision into Words",
      icon: <lord-icon
                        src="https://cdn.lordicon.com/fikcyfpp.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#2C2C2C,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>,
      href: "/services/book_cover",
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-18 py-3">
      <div className="container mx-auto">
        <div className="bg-[var(--warm-white)] rounded-2xl px-6 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logos/logo-01.png" alt="Inkspire Folio" width={180} height={60} className="h-14 w-auto" />
              <Image src="/logos/logo-03.png" alt="Inkspire Folio" width={180} height={60} className="h-14 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-sm font-medium text-[var(--charcoal-gray)] hover:text-flame-orange transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>

                      {isServicesOpen && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-[var(--warm-white)] rounded-2xl shadow-xl borde p-6 z-50">
                          <div className="grid grid-cols-3 gap-4">
                            {services.map((service, index) => (
                              <a
                                key={service.name}
                                href={service.href || "#"}
                                className="p-4 rounded-xl border border-flame-orange hover:border-[#2c2c2c] transition-colors cursor-pointer group blockk bg-[var(--warm-white)] hover:bg-[var(--flame-orange)]"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="text-flame-orange text-2xl mb-2">{service.icon}</div>
                                <h3 className="font-semibold text-charcoal-gray mb-2 group-hover:text-flame-orange transition-colors">
                                  {service.name}
                                </h3>
                                <p className="text-sm text-charcoal-gray leading-relaxed">{service.description}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href} className="text-sm font-medium text-[var(--charcoal-gray)] hover:text-flame-orange">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--charcoal-gray)] hover:text-flame-orange">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[var(--charcoal-gray)] hover:text-flame-orange rounded-lg hover:bg-flame-orange/5"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Mobile Services Dropdown */}
                        {isMobileServicesOpen && (
                          <div className="mt-2 ml-4 space-y-2 overflow-y-auto max-h-60">
                            {services.map((service) => (
                              <a
                                key={service.name}
                                href={service.href || "#"}
                                className="flex items-start gap-3 px-3 py-2 text-sm text-[var(--warm-white)] bg-flame-orange rounded-lg hover:bg-flame-orange/5"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setIsMobileServicesOpen(false)
                                }}
                              >
                                <span className="text-flame-orange text-lg">{service.icon}</span>
                                <div>
                                  <div className="font-medium">{service.name}</div>
                                  <div className="text-xs text-charcoal-gray mt-1">{service.description}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 text-sm font-medium text-[var(--charcoal-grayheadr)] hover:text-flame-orange rounded-lg hover:bg-flame-orange/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
