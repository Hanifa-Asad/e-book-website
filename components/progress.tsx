"use client";
import React from 'react'

function progress() {
  return (
    <>
        {/* Process Section */}
      <section className="py-20 bg-charcoal-gray text-warm-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url(https://globaldesignsagency.com/assets/images/work-background.webp)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">From Concept to Completion</h2>
            <p className="text-lg text-warm-white/80 max-w-3xl mx-auto">
              We manage every phase with professionalism and precision, making sure each project not only meets but surpasses client expectations.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-flame-orange transform -translate-y-1/2 mt-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="text-center space-y-4">
                <div className="bg-flame-orange rounded-full w-25 h-25 flex items-center justify-center mx-auto relative">
                  <lord-icon
                        src="https://cdn.lordicon.com/hmpomorl.json"
                        trigger="hover"
                        colors="primary:#F9F7F2,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-warm-white rounded-full flex items-center justify-center text-xs font-bold text-flame-orange">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Design Brief</h3>
                <p className="text-sm text-warm-white/80 leading-relaxed">
                   We start by gathering insights into your goals, vision, and brand requirements. This step ensures clarity, alignment, and a strong foundation for the project.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-flame-orange rounded-full w-25 h-25 flex items-center justify-center mx-auto relative">
                  <lord-icon
                        src="https://cdn.lordicon.com/ijsqrapz.json"
                        trigger="hover"
                        colors="primary:#F9F7F2,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-warm-white rounded-full flex items-center justify-center text-xs font-bold text-flame-orange">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Concept Development</h3>
                <p className="text-sm text-warm-white/80 leading-relaxed">
                  Our team translates your vision into well-structured design concepts, providing creative directions that reflect both innovation and strategy.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-flame-orange rounded-full w-25 h-25 flex items-center justify-center mx-auto relative">
                  <lord-icon
                        src="https://cdn.lordicon.com/jectmwqf.json"
                        trigger="hover"
                        colors="primary:#F9F7F2,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-warm-white rounded-full flex items-center justify-center text-xs font-bold text-flame-orange">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Refinement</h3>
                <p className="text-sm text-warm-white/80 leading-relaxed">
                 With your feedback, we fine-tune the designs, perfecting details and ensuring the final outcome aligns seamlessly with your brand identity.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-flame-orange rounded-full w-25 h-25 flex items-center justify-center mx-auto relative">
                  <lord-icon
                        src="https://cdn.lordicon.com/kezeezyg.json"
                        trigger="hover"
                        colors="primary:#F9F7F2,secondary:#2C2C2C"
                        style={{ width: "60px", height: "60px" }}
                    ></lord-icon>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-warm-white rounded-full flex items-center justify-center text-xs font-bold text-flame-orange">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Final Delivery</h3>
                <p className="text-sm text-warm-white/80 leading-relaxed">
                  After thorough review and quality checks, we deliver professionally polished designs — ready for implementation across your desired platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default progress