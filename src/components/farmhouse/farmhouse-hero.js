"use client"
import { useState, useEffect } from 'react'

export default function FarmhouseHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    {
      src: "/assets/farmhouse-cottages.jpg", 
      title: "Luxury Farmhouse Cottages",
      gradient: "from-green-900/40 via-black/30 to-emerald-900/40"
    },
    {
      src: "/assets/farmhouse-lake.jpg",
      title: "Serene Lake Views",
      gradient: "from-blue-900/40 via-black/30 to-teal-900/40"
    },
    {
      src: "/assets/farmhouse-events-pics.jpg",
      title: "Perfect for Events",
      gradient: "from-amber-900/40 via-black/30 to-orange-900/40"
    },
    {
      src: "/assets/farmhouse-fauna.jpg",
      title: "Natural Wildlife",
      gradient: "from-emerald-900/40 via-black/30 to-green-900/40"
    }
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
    return (
    <section className="relative h-screen overflow-hidden pt-20">
      {/* Single Background Image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/farmhouse-cottages.jpg"
          alt="Luxury Farmhouse"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black/40 to-emerald-900/60"></div>
      </div>

      {/* Video Background overlay */}
      <div className="absolute inset-0 opacity-30">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover mix-blend-overlay"
        >
          <source src="/assets/farmhouse-decoration.mp4" type="video/mp4" />
        </video>
      </div>      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          {/* Decorative Top Element */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 md:w-16 h-0.5 bg-[#ad8b3a]"></div>
              <div className="w-3 h-3 border-2 border-[#ad8b3a] rotate-45"></div>
              <div className="w-12 md:w-16 h-0.5 bg-[#ad8b3a]"></div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-block bg-[#ad8b3a]/20 backdrop-blur-sm border border-[#ad8b3a]/30 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <span className="text-[#ad8b3a] font-medium text-xs md:text-sm uppercase tracking-wider">
              🌿 5-Acre Premium Farmhouse
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
            Book Our
            <span className="block text-[#ad8b3a] bg-clip-text mt-2">
              FARMHOUSE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-stone-200 max-w-4xl mx-auto leading-relaxed px-4">
            Experience nature's tranquility in our luxurious 5-acre farmhouse with mango plantations, 
            private pool, cottages, and exclusive event spaces
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 text-xs md:text-sm lg:text-base px-4">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="text-[#ad8b3a]">🌳</span>
              <span>Mango Plantations</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="text-[#ad8b3a]">🏊</span>
              <span>Private Pool</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="text-[#ad8b3a]">🏡</span>
              <span>Luxury Cottages</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <span className="text-[#ad8b3a]">🎉</span>
              <span>Event Spaces</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a 
              href="mailto:Contact@apoorvaroyale.com?subject=Farmhouse Booking Inquiry&body=Hi,%20I'm%20interested%20in%20booking%20your%20farmhouse.%20Please%20send%20me%20more%20details%20about%20availability%20and%20pricing."
              className="group relative overflow-hidden bg-[#ad8b3a] hover:bg-[#8a6d2f] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ad8b3a]/50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 text-sm md:text-base">
                <span>Book Now via Email</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ad8b3a] to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a 
              href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20your%20farmhouse.%20Could%20you%20please%20share%20the%20availability%20and%20rates%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/30 backdrop-blur-sm border-2 border-white/30 hover:border-[#ad8b3a] text-white hover:text-[#ad8b3a] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Booking</span>
              </span>
            </a>
          </div>
        </div>
      </div>      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-xs md:text-sm font-medium tracking-wider">Explore More</span>
          <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
