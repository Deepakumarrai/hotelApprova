"use client"
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
        {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-[#ad8b3a]/90 to-amber-700/90 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium uppercase tracking-wider">Fine Dining</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
            The Cupid <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Restaurant</span>
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-white to-amber-200 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Indulge in culinary excellence with our exquisite dining experience
          </p>
        </div>
      </div>      {/* Restaurant Video Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
            <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-amber-600">Fine Dining</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step into The Cupid Restaurant and discover a world of culinary artistry where every dish tells a story of passion and perfection.
          </p>
        </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto group">
          <video 
            className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105" 
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/the-cupid-restaurant.jpg"
          >
            <source src="/assets/the-cupid-restaurant.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Restaurant Experience</span>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
              <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Restaurant Highlights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-amber-600">Special</span> Features
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-amber-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gourmet Cuisine</h3>
              <p className="text-gray-600">
                Expertly crafted dishes using the finest ingredients and traditional cooking techniques.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Elegant Ambiance</h3>
              <p className="text-gray-600">
                Sophisticated dining atmosphere perfect for romantic dinners and special occasions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Service</h3>
              <p className="text-gray-600">
                Round-the-clock dining service to satisfy your cravings at any time of the day.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Menu Highlights */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
              <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Our Menu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-amber-600">Dishes</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our chef's specially curated menu featuring local delicacies and international favorites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-[#ad8b3a] to-amber-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Indian Specialties</h3>
                <p className="text-gray-600 text-sm">Authentic regional cuisines prepared with traditional spices and techniques.</p>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continental Dishes</h3>
                <p className="text-gray-600 text-sm">International flavors crafted with precision and served with elegance.</p>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-yellow-600 to-amber-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-3 9h16l-3-9M8 8h8M9 12h6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desserts & Sweets</h3>
                <p className="text-gray-600 text-sm">Delectable desserts and traditional sweets to end your meal perfectly.</p>
              </div>
            </div>

            {/* Menu Item 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-[#ad8b3a] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beverages</h3>
                <p className="text-gray-600 text-sm">Premium selection of hot and cold beverages, cocktails, and mocktails.</p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-[#ad8b3a] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-white/5 to-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/8 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium uppercase tracking-wider">Make Reservation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Dine</span> with Us?
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-white to-amber-200 mx-auto mb-6"></div>
          <p className="text-xl mb-8 opacity-90">
            Reserve your table now and experience the finest dining at The Cupid Restaurant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919668821100"
              className="bg-white text-[#ad8b3a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Call to Reserve
            </a>
            <a 
              href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation%20at%20The%20Cupid%20Restaurant."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
