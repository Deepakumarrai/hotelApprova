"use client"
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(100)
    const heroImages = [
    {
      src: "/assets/bed-room.jpg", 
      title: "Luxury Bedroom",
      gradient: "from-stone-900/40 via-black/30 to-amber-900/40"
    },
    {
      src: "/assets/bed.jpg",
      title: "Comfort Bed",
      gradient: "from-amber-900/40 via-black/30 to-yellow-900/40"
    },
    {
      src: "/assets/bed-room1.jpg",
      title: "Premium Suite",
      gradient: "from-yellow-900/40 via-black/30 to-amber-900/40"
    },
    {
      src: "/assets/bed-room3.jpg",
      title: "Executive Room",
      gradient: "from-amber-800/40 via-black/30 to-stone-900/40"
    }
  ]
    useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
      setBatteryLevel((prev) => prev <= 25 ? 100 : prev - 25)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover filter brightness-90"
            />
            {/* Improved overlay with better transparency */}
            <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>      
      {/* Battery UI Indicator - Mobile Responsive */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <div className="bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-2 md:p-4 border border-white/30">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-white text-xs md:text-sm font-medium hidden sm:block">Experience</div>
            <div className="relative">
              {/* Battery Shell */}
              <div className="w-8 h-4 md:w-12 md:h-6 border-2 border-white/70 rounded-sm relative">
                {/* Battery Tip */}
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-2 md:h-3 bg-white/70 rounded-r-sm"></div>
                {/* Battery Fill */}
                <div 
                  className={`h-full rounded-sm transition-all duration-1000 ${
                    batteryLevel > 75 ? 'bg-green-400' :
                    batteryLevel > 50 ? 'bg-yellow-400' :
                    batteryLevel > 25 ? 'bg-orange-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${batteryLevel}%` }}
                ></div>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm font-medium">{batteryLevel}%</div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Mobile Responsive */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <div className="bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-2 md:p-4 border border-white/30">
          <div className="flex gap-1.5 md:gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#ad8b3a] scale-110 shadow-lg shadow-[#ad8b3a]/50' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-[#ad8b3a]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-24 h-24 md:w-48 md:h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 md:left-20 w-10 h-10 md:w-20 md:h-20 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-6">
        <div className="text-center text-white max-w-4xl md:max-w-6xl">
          {/* Glass morphism welcome badge */}
          <div className="mb-6 md:mb-8 animate-fade-in-up">
            <span className="inline-block px-4 py-2 md:px-8 md:py-3 bg-white/15 backdrop-blur-md rounded-full text-xs md:text-sm uppercase tracking-widest border border-white/30 mb-4 md:mb-6 shadow-lg">
              <span className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ad8b3a] rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">Welcome to Balangir's Finest</span>
                <span className="sm:hidden">Balangir's Finest</span>
              </span>
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
            <span className="block text-white drop-shadow-2xl">Where Comfort</span>
            <span className="block text-[#ad8b3a] text-2xl md:text-4xl lg:text-6xl xl:text-7xl drop-shadow-2xl">Meets Class</span>
          </h1>
          
          <div className="mb-6 md:mb-8">
            <p className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-light tracking-wide max-w-3xl mx-auto">
              Welcome to <span className="text-[#ad8b3a] font-semibold">Apoorva Royale</span>
            </p>
            
            {/* Current room indicator */}
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-black/30 backdrop-blur-md rounded-lg border border-white/30 text-xs md:text-sm">
              <span className="hidden sm:inline">Now viewing: </span>
              <span className="text-[#ad8b3a] font-medium">{heroImages[currentSlide].title}</span>
            </div>
          </div>
          
          <p className="text-sm md:text-lg lg:text-xl mb-8 md:mb-12 font-light tracking-wide max-w-4xl mx-auto opacity-90 px-4">
            Luxury Stays • Authentic Dining • Memorable Moments – All in the Heart of Balangir
          </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <a 
              href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative overflow-hidden bg-[#ad8b3a] text-white px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#ad8b3a]/50 border border-[#ad8b3a]/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Booking
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="/rooms"
              className="w-full sm:w-auto border-2 border-white/70 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-lg font-bold uppercase tracking-wide hover:bg-white hover:text-[#ad8b3a] transition-all duration-300 backdrop-blur-md bg-white/10"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Explore Rooms
              </span>
            </a>
          </div>
          
          {/* Social Media Quick Access */}
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
            <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider hidden sm:block">Follow Us</div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://instagram.com/apoorvaroyale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/apoorvaroyale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@apoorvaroyale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="tel:+919668821100" 
                className="group w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>      
      {/* Enhanced scroll indicator with battery design - Mobile Responsive */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <div className="text-white text-xs uppercase tracking-wider opacity-75 hidden md:block">Scroll to explore</div>
          <div className="bg-white/15 backdrop-blur-md rounded-full p-2 md:p-3 border border-white/30 animate-bounce">
            <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Room navigation arrows - Mobile Responsive */}
      <button 
        onClick={() => setCurrentSlide((prev) => prev === 0 ? heroImages.length - 1 : prev - 1)}
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-md rounded-full p-2 md:p-3 border border-white/30 text-white hover:bg-black/60 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-md rounded-full p-2 md:p-3 border border-white/30 text-white hover:bg-black/60 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}