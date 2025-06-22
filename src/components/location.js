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
    <section id="location-section" className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
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
              </div>            </div>
          </div>
        </div>
      </div>

      {/* Map and Social Media Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">Find Us on Map</h3>
              <p className="text-stone-600">Located in the heart of Balangir, easily accessible from all major areas</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#ad8b3a]/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.123456789!2d83.4976543!3d20.7108979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a59b123456789%3A0x1234567890abcdef!2sBalangir%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 rounded-xl"
              ></iframe>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.app.goo.gl/qgNHTXHxJBFmSTvu5?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ad8b3a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ad8b3a]/80 transition-all duration-300 inline-flex items-center justify-center group"
              >
                <svg className="mr-2 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Get Directions
              </a>
              <a 
                href="https://wa.me/919668821100?text=Hi! I need help finding Apoorva Royale Hotel. Can you guide me?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-green-500 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center group"
              >
                <svg className="mr-2 w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Help
              </a>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">Connect With Us</h3>
              <p className="text-stone-600">Follow us on social media for updates and exclusive offers</p>
            </div>

            {/* Royal Social Media Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#ad8b3a]/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/apoorvaroyale?igsh=b3gyY3U0OTUwYzFr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-semibold">Instagram</span>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/199SS2siJk/?mibextid=qi2Omg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-blue-600 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-semibold">Facebook</span>
                  </div>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@hotelapoorvaroyalebgr?si=6pzzY2icywUo_QWp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-red-600 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm font-semibold">YouTube</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919668821100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-green-500 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </div>
                </a>
              </div>

              {/* Quick Contact */}
              <div className="border-t border-stone-200 pt-4">
                <p className="text-center text-stone-600 mb-3">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="tel:+919668821100" 
                    className="bg-[#ad8b3a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#ad8b3a]/80 transition-all duration-300 inline-flex items-center justify-center group text-sm"
                  >
                    <svg className="mr-2 w-4 h-4 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91 96688 21100
                  </a>                  <a 
                    href="mailto:Contact@apoorvaroyale.com" 
                    className="border border-[#ad8b3a] text-[#ad8b3a] px-4 py-2 rounded-lg font-semibold hover:bg-[#ad8b3a] hover:text-white transition-all duration-300 inline-flex items-center justify-center group text-sm"
                  >
                    <svg className="mr-2 w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}