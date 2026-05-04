import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, User } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Jason Turner",
      review:
        "I was blown away by the exceptional quality and attention to detail in every design delivered by Global Design Agency. Their team surpassed my expectations with their creativity and professionalism, and I couldn't be happier with the outcome!",
    },
    {
      name: "Sandra Bennett",
      review:
        "From start to finish, Global Design Agency impressed me with their professionalism and creativity. Each design they delivered was a true masterpiece, showcasing their expertise and dedication to their craft. Highly recommend their services!",
    },
    {
      name: "Kyle Anderson",
      review:
        "I can't thank Global Design Agency enough for the outstanding results they delivered. Their attention to detail and commitment to excellence were evident in every aspect of the project. Working with them was a pleasure, and I'm thrilled with the outcome!",
    },
    {
      name: "Rachel Mitchell",
      review:
        "Working with Global Design Agency was an absolute delight. They took the time to understand my vision and delivered designs that exceeded my expectations. Their attention to detail and commitment to quality truly set them apart.",
    },
    {
      name: "Eric Foster",
      review:
        "I was highly impressed with the outcome of my project with Global Design Agency. Their team went above and beyond to deliver exceptional results that perfectly captured my vision. I wouldn't hesitate to recommend their services to anyone looking for top-notch design solutions!",
    },
    {
      name: "Lindsay Carter",
      review:
        "I had an incredible experience working with Global Design Agency. From the initial consultation to the final delivery, their team showcased their expertise and efficiency every step of the way. I'm thrilled with the outcome and look forward to working with them again in the future!",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://globaldesignsagency.com/assets/images/services/Reviews.png)" }}
      >
        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-flame-orange/80 to-flame-orange/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Voices Of <span className="bg-white text-flame-orange px-4 py-2 rounded-lg">Satisfaction</span>, Real
            Stories
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">& Real Results</h2>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              {/* User Icon and Stars */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.review}</p>

              {/* Customer Name */}
              <h3 className="text-flame-orange font-semibold text-lg">{review.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
