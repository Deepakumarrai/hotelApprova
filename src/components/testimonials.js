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
            </div>
            <p className="text-stone-600 font-medium">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}