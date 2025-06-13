'use client'
import { useState, useEffect } from 'react'

export default function CallToAction() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "/assets/bed-room.jpg",
      title: "Luxurious Bedroom",
      description: "Experience comfort redefined"
    },
    {
      image: "/assets/bed-room1.jpg",
      title: "Premium Suites",
      description: "Where elegance meets comfort"
    },
    {
      image: "/assets/bed1.jpg",
      title: "Royal Accommodation",
      description: "Your home away from home"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ad8b3a]/10 to-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/8 to-[#ad8b3a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ad8b3a]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#ad8b3a] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#ad8b3a] to-transparent"></div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image Slideshow */}
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Slideshow Container */}
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>                {/* Slide Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">{slides[currentSlide].title}</h3>
                  <p className="text-stone-200 text-sm">{slides[currentSlide].description}</p>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-[#ad8b3a] scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                {/* Royal Border Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ad8b3a] via-yellow-500 to-[#ad8b3a] rounded-3xl opacity-20 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ad8b3a]/30 to-yellow-500/30 rounded-3xl"></div>
              </div>              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#ad8b3a]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-yellow-500/15 rounded-full animate-spin-slow-reverse"></div>
            </div>            {/* Right Side - CTA Content */}
            <div className="lg:pl-12">              {/* Professional Badge */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full">
                  <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
                  <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Premium Hotel Experience</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-800 mb-4 leading-tight">
                  Experience Luxury at 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-yellow-600">
                    Apoorva Hotel
                  </span>
                </h2>
                
                {/* Decorative Line */}
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-yellow-500"></div>
              </div>

              {/* Description */}
              <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
                Discover exceptional hospitality and world-class amenities in the heart of Balangir. 
                Your comfort is our commitment.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "✓", text: "Luxury Rooms" },
                  { icon: "✓", text: "Fine Dining" },
                  { icon: "✓", text: "24/7 Service" },
                  { icon: "✓", text: "Modern Amenities" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-stone-700">
                    <div className="w-5 h-5 bg-[#ad8b3a] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{feature.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>{/* CTA Buttons */}
              <div className="space-y-4">
                <button className="group relative w-full lg:w-auto overflow-hidden bg-gradient-to-r from-[#ad8b3a] to-yellow-600 text-white px-8 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 shadow-xl hover:shadow-[#ad8b3a]/30 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Reserve Your Stay</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>

                <div className="flex flex-col lg:flex-row gap-3">                  <button className="group border-2 border-[#ad8b3a] text-[#ad8b3a] px-6 py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-[#ad8b3a] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.19 11.19 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.19 11.19 0 00.56 3.48 1 1 0 01-.21 1.11l-2.2 2.2z"/>
                    </svg>
                    <span>+91 98765 43210</span>
                  </button>

                  <button className="group border-2 border-yellow-600 text-yellow-700 px-6 py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-yellow-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Special Rates</span>
                  </button>
                </div>
              </div>              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-[#ad8b3a]/20">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-stone-500">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-1">4.8/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-sm font-medium">Verified Reviews</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span className="text-sm font-medium">Secure Booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  )
}