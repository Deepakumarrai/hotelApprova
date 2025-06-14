export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ad8b3a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ad8b3a] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#ad8b3a] rounded-full"></div>
            <span className="text-sm font-semibold text-[#ad8b3a] uppercase tracking-wider">Testimonials</span>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#ad8b3a] rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-[#c9a96e]">Guests Say</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover the experiences that make Apoorva Hotel a destination of choice for travelers seeking luxury and comfort.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ad8b3a] to-[#c9a96e] mx-auto mt-8 rounded-full"></div>
        </div>        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ad8b3a] to-[#c9a96e] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#ad8b3a]/10">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#ad8b3a] drop-shadow-sm hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-stone-700 mb-8 italic text-lg leading-relaxed font-medium">
                "Exceptional service and beautiful accommodations. The staff went above and beyond to make our stay memorable. The food at Cupid Restaurant was absolutely divine!"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">RS</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-stone-800 text-lg">Rajesh Sharma</div>
                  <div className="text-sm text-[#ad8b3a] font-medium">Business Traveler</div>
                  <div className="text-xs text-stone-500 mt-1">⭐ Verified Guest</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a96e] to-[#ad8b3a] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#ad8b3a]/10">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#c9a96e] to-[#ad8b3a] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#ad8b3a] drop-shadow-sm hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-stone-700 mb-8 italic text-lg leading-relaxed font-medium">
                "Perfect location in Balangir with modern amenities. The sky-deck experience was magical! Highly recommend for families and couples alike."
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c9a96e] to-[#ad8b3a] rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">PM</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-stone-800 text-lg">Priya Mishra</div>
                  <div className="text-sm text-[#ad8b3a] font-medium">Family Vacation</div>
                  <div className="text-xs text-stone-500 mt-1">⭐ Verified Guest</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ad8b3a] to-[#c9a96e] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#ad8b3a]/10">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#ad8b3a] drop-shadow-sm hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-stone-700 mb-8 italic text-lg leading-relaxed font-medium">
                "Outstanding hospitality and attention to detail. The rooms are luxurious and the local cuisine showcases the best of Odisha. Will definitely return!"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">AK</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-stone-800 text-lg">Amit Kumar</div>
                  <div className="text-sm text-[#ad8b3a] font-medium">Wedding Guest</div>
                  <div className="text-xs text-stone-500 mt-1">⭐ Verified Guest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">500+</span>
            </div>
            <p className="text-stone-600 font-medium">Happy Guests</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#c9a96e] to-[#ad8b3a] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-stone-600 font-medium">Average Rating</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#ad8b3a] to-[#c9a96e] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">98%</span>
            </div>
            <p className="text-stone-600 font-medium">Satisfaction Rate</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#c9a96e] to-[#ad8b3a] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">2+</span>
            </div>            <p className="text-stone-600 font-medium">Years of Excellence</p>
          </div>
        </div>
        
        {/* Social Media Review Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#ad8b3a]/5 via-white to-[#ad8b3a]/5 rounded-3xl p-8 md:p-12 border border-[#ad8b3a]/20">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">
              Share Your <span className="text-[#ad8b3a]">Experience</span>
            </h3>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Help others discover the magic of Apoorva Royale by sharing your experience on social media
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <a 
                href="https://instagram.com/apoorvaroyale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-xl border border-purple-200 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                </svg>
                <span className="font-medium text-purple-600 group-hover:text-white transition-colors duration-300">Follow on Instagram</span>
              </a>
              
              <a 
                href="https://facebook.com/apoorvaroyale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-blue-500/10 hover:bg-blue-600 px-6 py-3 rounded-xl border border-blue-200 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium text-blue-600 group-hover:text-white transition-colors duration-300">Like on Facebook</span>
              </a>
              
              <a 
                href="https://wa.me/919668821100?text=I%20had%20an%20amazing%20stay%20at%20Apoorva%20Royale!%20Thank%20you%20for%20the%20wonderful%20service." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-green-500/10 hover:bg-green-500 px-6 py-3 rounded-xl border border-green-200 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="font-medium text-green-600 group-hover:text-white transition-colors duration-300">Share Feedback</span>
              </a>
            </div>
            
            <div className="text-sm text-stone-500">
              Tag us @apoorvaroyale and use #ApoorvaRoyaleExperience for a chance to be featured!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}