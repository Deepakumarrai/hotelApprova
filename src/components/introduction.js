import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#ad8b3a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-8 md:mb-10 leading-tight">
            Experience <span className="text-[#ad8b3a] relative">
              Authentic Hospitality
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ad8b3a] to-amber-400 rounded-full"></div>
            </span>
          </h2>
          <div className="w-20 md:w-32 h-1.5 bg-gradient-to-r from-[#ad8b3a] to-amber-400 mx-auto mb-8 md:mb-10 rounded-full"></div>
          <p className="text-lg md:text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed px-4">
            At Apoorva Royale, we believe hospitality is more than service—it's an experience. 
            Nestled in the vibrant heart of Balangir, our hotel blends modern luxury with authentic local charm. 
            Whether you're here for a business trip, a family getaway, or a special celebration, 
            discover the warmth, elegance, and flavors that set us apart.
          </p>        </div>
        
        {/* Featured Hotel Video Section */}
        <div className="mb-16 md:mb-20">
          <div className="group relative max-w-5xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ad8b3a] via-amber-400 to-[#ad8b3a] rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 bg-black border-4 border-white/30 backdrop-blur-sm">
              <video 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/assets/hotel-main.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ad8b3a]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              {/* Live Indicator */}
              <div className="absolute top-6 right-6 flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-xl"></div>
                <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg">
                  🔴 LIVE
                </div>
              </div>
              
              {/* Quality Badge */}
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg">
                  4K HD
                </div>
              </div>
  
              
              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-12 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-16 w-3 h-3 bg-[#ad8b3a]/70 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-amber-400/60 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Gallery Section */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Corridor Video */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ad8b3a] via-amber-400 to-[#ad8b3a] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-black border-2 border-white/20 backdrop-blur-sm">
                <video 
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/cooridor.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ad8b3a]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                    LIVE
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Elegant Corridors</h3>
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg">Spacious & luxurious walkways</p>
                  <div className="mt-3 w-12 h-0.5 bg-[#ad8b3a] rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>

            {/* Bedroom Video */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-[#ad8b3a] to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-black border-2 border-white/20 backdrop-blur-sm">
                <video 
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/bed-room1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                    LIVE
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Luxury Bedrooms</h3>
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg">Comfort meets elegance</p>
                  <div className="mt-3 w-12 h-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>

            {/* Room Video */}
            <div className="group relative sm:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ad8b3a] via-amber-300 to-[#ad8b3a] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-black border-2 border-white/20 backdrop-blur-sm">
                <video 
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/room1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ad8b3a]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                    LIVE
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Premium Suites</h3>
                  <p className="text-sm md:text-base text-white/90 drop-shadow-lg">Your home away from home</p>
                  <div className="mt-3 w-12 h-0.5 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#ad8b3a] mb-2">50+</div>
            <div className="text-stone-600 uppercase tracking-wide">Luxury Rooms</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#ad8b3a] mb-2">15+</div>
            <div className="text-stone-600 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#ad8b3a] mb-2">1000+</div>
            <div className="text-stone-600 uppercase tracking-wide">Happy Guests</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#ad8b3a] mb-2">24/7</div>
            <div className="text-stone-600 uppercase tracking-wide">Premium Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}