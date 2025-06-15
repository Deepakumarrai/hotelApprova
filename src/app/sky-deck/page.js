// app/sky-deck/page.js
'use client'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function SkyDeckPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
        {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ad8b3a]/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#ad8b3a]/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#ad8b3a]/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-40 w-28 h-28 bg-[#ad8b3a]/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 h-full gap-4 p-4">
              {Array.from({length: 60}).map((_, i) => (
                <div key={i} className="border border-[#ad8b3a]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo and Title */}
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 opacity-0 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <div className="relative w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                  <Image 
                    src="/logo.png" 
                    alt="Apoorva Royale" 
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm text-stone-600 uppercase tracking-wider">Apoorva Royale</p>
                  <h1 className="text-4xl md:text-6xl font-bold text-[#ad8b3a] tracking-wider">
                    SKY DECK
                  </h1>
                </div>
              </div>
              
              <div className="opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed">
                  Elevate Your Experience
                </p>
                <p className="text-xl text-stone-600 mt-2">
                  Above the Clouds
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Premium Dining</h3>
                  <p className="text-sm text-stone-600">Exquisite cuisine</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Panoramic Views</h3>
                  <p className="text-sm text-stone-600">360° city views</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 2v20H2V2h20zm-2 18V4H4v16h16zm-4.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-5-6c0 .83-.67 1.5-1.5 1.5S7.5 13.33 7.5 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Luxury Pool</h3>
                  <p className="text-sm text-stone-600">Rooftop swimming</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Events</h3>
                  <p className="text-sm text-stone-600">Private celebrations</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <a 
                href="tel:+919668821100"
                className="bg-[#ad8b3a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8d7230] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Reserve Now</span>
              </a>
              <a 
                href="#gallery"
                className="bg-transparent border-2 border-[#ad8b3a] text-[#ad8b3a] px-8 py-4 rounded-full font-bold hover:bg-[#ad8b3a] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Gallery</span>
              </a>
            </div>
          </div>

          {/* Right Content - Image Showcase */}
          <div className="relative opacity-0 animate-fadeInRight" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <Image
                  src="/assets/sky-deck1.jpg"
                  alt="Sky Deck Main View"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Image Cards */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:rotate-0 transition-all duration-300 hover:scale-110">
                <Image
                  src="/assets/sky-deck.jpg"
                  alt="Sky Deck Dining"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 w-40 h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-0 transition-all duration-300 hover:scale-110">
                <Image
                  src="/assets/pool.jpg"
                  alt="Sky Deck Pool"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute top-1/2 -left-12 w-24 h-24 rounded-2xl overflow-hidden shadow-xl transform -rotate-45 hover:rotate-0 transition-all duration-300 hover:scale-110">
                <Image
                  src="/assets/sky-deck-main-entrance.jpg"
                  alt="Sky Deck Entrance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ad8b3a] rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-[#ad8b3a] rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-fadeIn" style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center space-y-2 text-stone-600">
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Experience Luxury at New Heights
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our exclusive Sky Deck offers an unparalleled experience with breathtaking panoramic views, 
              world-class dining, and luxury amenities that redefine sophistication.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">360° Panoramic Views</h3>
                  <p className="text-stone-600">Enjoy stunning views of Balangir from our elevated sky deck platform.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Premium Dining Experience</h3>
                  <p className="text-stone-600">Savor exquisite cuisine while enjoying the open sky ambiance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Luxury Pool Access</h3>
                  <p className="text-stone-600">Relax in our stunning sky-high swimming pool with city views.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Exclusive Events</h3>
                  <p className="text-stone-600">Perfect venue for private parties, corporate events, and celebrations.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/sky-deck.jpg"
                  alt="Sky Deck Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Image Gallery Section */}
      <section id="gallery" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Gallery
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Discover the beauty and elegance of our Sky Deck through these stunning visuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Sky Deck Image */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/assets/sky-deck1.jpg"
                  alt="Sky Deck Premium Area"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold">Premium Dining Area</h3>
                  <p className="text-sm">Elegant atmosphere with panoramic views</p>
                </div>
              </div>
            </div>

            {/* Pool Image */}
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/assets/pool.jpg"
                alt="Sky Deck Pool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">Luxury Pool</h3>
                <p className="text-sm">Rooftop swimming experience</p>
              </div>
            </div>

            {/* Additional Images */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/assets/sky-deck-main-entrance.jpg"
                alt="Sky Deck Entrance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Grand Entrance</h3>
              </div>
            </div>

            <div className="md:col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/assets/sky-deck.jpg"
                alt="Sky Deck Overview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">Complete Sky Deck Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Sky Deck Amenities
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Every detail crafted for your ultimate comfort and enjoyment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ad8b3a]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Open Air Dining</h3>
              <p className="text-stone-600">Experience dining under the stars with fresh air and city lights</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ad8b3a]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7l1.5-5H7V4h4v2l-1.5 5zm8 0h-2l1.5-5H15V4h4v2l-1.5 5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Premium Bar</h3>
              <p className="text-stone-600">Crafted cocktails and premium beverages with panoramic views</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ad8b3a]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 2v20H2V2h20zm-2 18V4H4v16h16zm-4.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-5-6c0 .83-.67 1.5-1.5 1.5S7.5 13.33 7.5 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Swimming Pool</h3>
              <p className="text-stone-600">Rooftop pool with stunning city views and luxury amenities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ad8b3a]/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Event Space</h3>
              <p className="text-stone-600">Perfect venue for celebrations, parties, and corporate events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#ad8b3a] to-[#8d7230] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Sky Deck?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table now and elevate your dining experience to new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919668821100"
              className="bg-white text-[#ad8b3a] px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call to Reserve</span>
            </a>
            <a 
              href="https://wa.me/919668821100?text=Hello%2C%20I%20would%20like%20to%20make%20a%20reservation%20at%20the%20Sky%20Deck."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#ad8b3a] transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}