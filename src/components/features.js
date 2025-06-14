import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ad8b3a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ad8b3a] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
              Exceptional <span className="text-[#ad8b3a] relative">
                Experiences
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ad8b3a]/0 via-[#ad8b3a] to-[#ad8b3a]/0 rounded-full"></div>
              </span>
            </h2>
          </div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Indulge in unparalleled luxury and sophistication at Apoorva Hotel
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#ad8b3a] to-transparent"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Luxury Accommodations */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#ad8b3a]/20 hover:border-[#ad8b3a]/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/bed-room.jpg" 
                alt="Luxury Bedroom"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                priority
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <video 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src="/assets/bed-room.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
              
              {/* Royal Crown Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#ad8b3a]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 7l5.5 1L12 3l3.5 5L21 7l-2 9H5z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a]/10 to-[#ad8b3a]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#ad8b3a]/20">
                <svg className="w-10 h-10 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-[#ad8b3a] transition-colors duration-300">
                Royal Accommodations
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Majestic suites with handcrafted furnishings, silk drapes, and panoramic views. Experience the grandeur of royalty with modern luxury.
              </p>
              <div className="mt-6 flex items-center text-[#ad8b3a] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Discover More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Fine Dining */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#ad8b3a]/20 hover:border-[#ad8b3a]/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/office-desk.jpg" 
                alt="The Cupid Restaurant"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <video 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src="/assets/office-desk.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
              
              {/* Royal Crown Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#ad8b3a]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 15l-5.5 5 2-7L3 9h7l2-7z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a]/10 to-[#ad8b3a]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#ad8b3a]/20">
                <svg className="w-10 h-10 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-[#ad8b3a] transition-colors duration-300">
                The Cupid Restaurant
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Culinary artistry meets royal dining. Savor exquisite dishes prepared by master chefs in an atmosphere of refined elegance.
              </p>
              <div className="mt-6 flex items-center text-[#ad8b3a] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Explore Menu
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Bathroom Luxury */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#ad8b3a]/20 hover:border-[#ad8b3a]/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/bathroom.jpg" 
                alt="Luxury Bathroom"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <video 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src="/assets/bath-room.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
              
              {/* Royal Crown Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#ad8b3a]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a]/10 to-[#ad8b3a]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#ad8b3a]/20">
                <svg className="w-10 h-10 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-[#ad8b3a] transition-colors duration-300">
                Imperial Spa Suites
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Marble-clad sanctuaries with gold accents, rainfall showers, and premium amenities. Transform your daily rituals into royal ceremonies.
              </p>
              <div className="mt-6 flex items-center text-[#ad8b3a] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                View Amenities
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>            </div>
          </div>
        </div>
        
        {/* Call-to-Action Section with Social Media */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#ad8b3a]/5 via-[#ad8b3a]/10 to-[#ad8b3a]/5 rounded-3xl p-8 md:p-12 border border-[#ad8b3a]/20">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Ready to Experience <span className="text-[#ad8b3a]">Royal Luxury?</span>
            </h3>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Book directly with us for the best rates and exclusive perks. Experience the finest hospitality in Balangir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#ad8b3a] hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Booking
                </span>
              </a>
              <a 
                href="tel:+919668821100" 
                className="group border-2 border-[#ad8b3a] text-[#ad8b3a] hover:bg-[#ad8b3a] hover:text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Direct
                </span>
              </a>
            </div>
            
            {/* Social Media Follow Section */}
            <div className="border-t border-[#ad8b3a]/20 pt-6">
              <p className="text-stone-600 mb-4 text-sm">Follow us for exclusive offers and behind-the-scenes content</p>
              <div className="flex justify-center items-center space-x-4">
                <a 
                  href="https://instagram.com/apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-purple-200"
                >
                  <svg className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-blue-500/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-200"
                >
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-red-500/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-red-200"
                >
                  <svg className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
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