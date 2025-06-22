import Image from 'next/image'

export default function FarmhouseFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ad8b3a] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
              Farmhouse <span className="text-[#ad8b3a] relative">
                Features
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ad8b3a]/0 via-[#ad8b3a] to-[#ad8b3a]/0 rounded-full"></div>
              </span>
            </h2>
          </div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Discover the perfect blend of luxury and nature in our 5-acre paradise
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#ad8b3a] to-transparent"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lush Plantations */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-green-200/50 hover:border-green-400/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/farmhouse-fauna.jpg" 
                alt="Lush Mango Plantations"
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
                  <source src="/assets/farmhouse-decoration.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
              
              {/* Nature Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-green-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.54c.56-.07 1.14-.1 1.67-.1C19.14 19.36 22 16.5 22 13V9c0-4-4-4-5-4z M12 5.5c0 .83-.67 1.5-1.5 1.5S9 6.33 9 5.5 9.67 4 10.5 4s1.5.67 1.5 1.5z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-green-300/30">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                Mango Plantations
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Walk through our lush 5-acre property filled with mature mango trees and diverse flora. 
                Experience the serenity of nature while enjoying fresh, organic fruits straight from the trees.
              </p>
              <div className="mt-6 flex items-center text-green-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Explore Gardens 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Pool & Cottages */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-blue-200/50 hover:border-blue-400/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/farmhouse-cottages.jpg" 
                alt="Pool and Luxury Cottages"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Pool Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 15c1.67-.75 3.33-.75 5 0 1.67.75 3.33.75 5 0 1.67-.75 3.33-.75 5 0 1.67.75 3.33.75 5 0v2c-1.67.75-3.33.75-5 0-1.67-.75-3.33-.75-5 0-1.67.75-3.33.75-5 0-1.67-.75-3.33-.75-5 0v-2zm0-4c1.67-.75 3.33-.75 5 0 1.67.75 3.33.75 5 0 1.67-.75 3.33-.75 5 0 1.67.75 3.33.75 5 0v2c-1.67.75-3.33.75-5 0-1.67-.75-3.33-.75-5 0-1.67.75-3.33.75-5 0-1.67-.75-3.33-.75-5 0v-2z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-blue-300/30">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Pool & Cottages
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Dive into our pristine private pool surrounded by beautiful cottages. 
                Each cottage offers luxury amenities with traditional charm, perfect for families and groups.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                View Accommodations 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Event Spaces */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#ad8b3a]/20 hover:border-[#ad8b3a]/40 transform hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <Image 
                src="/assets/farmhouse-events-pics.jpg" 
                alt="Event Spaces"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Event Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#ad8b3a]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zM19 19H5V8h14v11z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a]/10 to-[#ad8b3a]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#ad8b3a]/20">
                <svg className="w-10 h-10 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-[#ad8b3a] transition-colors duration-300">
                Event Spaces
              </h3>
              <p className="text-stone-600 leading-relaxed text-base">
                Host unforgettable events in our spacious venues. Perfect for family picnics, corporate outings, 
                weddings, and private celebrations amidst nature's beauty.
              </p>
              <div className="mt-6 flex items-center text-[#ad8b3a] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Plan Your Event 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Lake Feature */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-full overflow-hidden">
              <Image 
                src="/assets/farmhouse-lake.jpg" 
                alt="Serene Lake"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20"></div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                🏞️ Natural Beauty
              </div>
              <h3 className="text-4xl font-bold text-stone-800 mb-6">
                Tranquil Lake Views
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Wake up to breathtaking lake views that change with the seasons. 
                Our farmhouse is strategically positioned to offer panoramic vistas of the serene waters, 
                creating the perfect backdrop for meditation, photography, or simply unwinding.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-stone-600 text-sm">Acres of Land</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-stone-600 text-sm">Mango Trees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
