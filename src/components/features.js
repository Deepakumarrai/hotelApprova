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
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}