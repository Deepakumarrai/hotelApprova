'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Location() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const bedImages = [
    {
      src: "/assets/bed-room.jpg",
      title: "Deluxe Bedroom",
      description: "Spacious comfort"
    },
    {
      src: "/assets/bed-room1.jpg", 
      title: "Premium Suite",
      description: "Luxury redefined"
    },
    {
      src: "/assets/bed1.jpg",
      title: "Royal Accommodation", 
      description: "Ultimate comfort"
    },
    {
      src: "/assets/bed-room3.jpg",
      title: "Executive Room",
      description: "Business class comfort"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bedImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ad8b3a]/8 to-yellow-500/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/6 to-[#ad8b3a]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#ad8b3a] rounded-full"></div>
            <span className="text-sm font-semibold text-[#ad8b3a] uppercase tracking-wider">Prime Location</span>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#ad8b3a] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6">
            Heart of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-yellow-600">Balangir</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned in Balangir's prestigious district, offering unparalleled access to business centers, cultural landmarks, and premium amenities.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ad8b3a] to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Royal Logo Integration */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Apoorva Royal Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ad8b3a]/20 to-yellow-500/20 rounded-full blur-md"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-800">Apoorva Royale</h3>
                <p className="text-[#ad8b3a] font-semibold">Premium Location Advantage</p>
              </div>
            </div>
            
            {/* Location Features */}
            <div className="grid gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "City Center Hub",
                  description: "3 minutes to main commercial district",
                  highlight: "Prime Business Zone"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  ),
                  title: "Transport Connectivity",
                  description: "12 minutes to railway station",
                  highlight: "Easy Access"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3a2 2 0 002 2h4a2 2 0 002-2v-3M3 9h18l-2 9H5L3 9z" />
                    </svg>
                  ),
                  title: "Shopping & Dining",
                  description: "Walking distance to premium outlets",
                  highlight: "Lifestyle Convenience"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "Cultural Attractions",
                  description: "Close to historic temples & monuments",
                  highlight: "Heritage Access"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ad8b3a]/20 to-yellow-500/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#ad8b3a]/10">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#ad8b3a] to-yellow-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-stone-800">{feature.title}</h4>
                        <span className="text-xs font-semibold text-[#ad8b3a] bg-[#ad8b3a]/10 px-2 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-stone-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#ad8b3a]/10 to-yellow-500/10 rounded-2xl p-8 border border-[#ad8b3a]/20">
              <h4 className="text-xl font-bold text-stone-800 mb-3">Experience Prime Location Benefits</h4>
              <p className="text-stone-600 mb-6">Discover why our location makes all the difference for business and leisure travelers.</p>
              <button className="group bg-gradient-to-r from-[#ad8b3a] to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ad8b3a]/30">
                <span className="flex items-center space-x-2">
                  <span>View Detailed Map</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
            {/* Right Side - Google Map & Bedroom Slideshow */}
          <div className="space-y-8">
            {/* Google Maps Integration */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#ad8b3a]/20 to-yellow-500/20 p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <div className="flex items-center space-x-3">
                      <Image 
                        src="/logo.png" 
                        alt="Apoorva Royal Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <h3 className="text-lg md:text-xl font-bold text-stone-800">Find Us in Balangir</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-[#ad8b3a]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">Live Location</span>
                    </div>
                  </div>
                  
                  {/* Google Maps Iframe */}
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[#ad8b3a]/20 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890!2d83.4987654321!3d20.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzQ0LjQiTiA4M8KwMjknNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Apoorva Royale Hotel Location"
                    ></iframe>
                  </div>
                  
                  {/* Quick Directions */}
                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <button className="flex items-center space-x-2 bg-[#ad8b3a]/10 text-[#ad8b3a] px-3 py-2 rounded-lg hover:bg-[#ad8b3a]/20 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Get Directions</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="font-medium">Call Hotel</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bedroom Slideshow */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#ad8b3a]/10 to-yellow-500/10 p-4">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  {/* Slideshow Container */}
                  <div className="relative w-full h-full">
                    {bedImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                          index === currentSlide 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    ))}
                  </div>

                  {/* Slide Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg md:text-xl font-bold mb-1">{bedImages[currentSlide].title}</h4>
                    <p className="text-sm md:text-base text-stone-200">{bedImages[currentSlide].description}</p>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + bedImages.length) % bedImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % bedImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {bedImages.map((_, index) => (
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
                </div>

                {/* Room Gallery Header */}
                <div className="absolute -top-3 left-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-[#ad8b3a]/20">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-stone-800">Room Gallery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Location Stats */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-[#ad8b3a]/10">
              <h4 className="text-lg font-bold text-stone-800 mb-4 text-center">Nearby Attractions</h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                <div className="p-3 bg-[#ad8b3a]/5 rounded-xl hover:bg-[#ad8b3a]/10 transition-colors">
                  <div className="text-xl md:text-2xl font-bold text-[#ad8b3a]">3 min</div>
                  <div className="text-xs md:text-sm text-stone-600">City Center</div>
                </div>
                <div className="p-3 bg-[#ad8b3a]/5 rounded-xl hover:bg-[#ad8b3a]/10 transition-colors">
                  <div className="text-xl md:text-2xl font-bold text-[#ad8b3a]">12 min</div>
                  <div className="text-xs md:text-sm text-stone-600">Railway</div>
                </div>
                <div className="p-3 bg-[#ad8b3a]/5 rounded-xl hover:bg-[#ad8b3a]/10 transition-colors">
                  <div className="text-xl md:text-2xl font-bold text-[#ad8b3a]">5 min</div>
                  <div className="text-xs md:text-sm text-stone-600">Shopping</div>
                </div>
                <div className="p-3 bg-[#ad8b3a]/5 rounded-xl hover:bg-[#ad8b3a]/10 transition-colors">
                  <div className="text-xl md:text-2xl font-bold text-[#ad8b3a]">8 min</div>
                  <div className="text-xs md:text-sm text-stone-600">Hospital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}