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
            <button className="w-full sm:w-auto group relative overflow-hidden bg-[#ad8b3a] text-white px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-2xl hover:shadow-[#ad8b3a]/50 border border-[#ad8b3a]/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Your Stay
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <button className="w-full sm:w-auto border-2 border-white/70 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl text-sm md:text-lg font-bold uppercase tracking-wide hover:bg-white hover:text-[#ad8b3a] transition-all duration-300 backdrop-blur-md bg-white/10">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Explore Rooms
              </span>
            </button>
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