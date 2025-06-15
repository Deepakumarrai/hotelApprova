"use client"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Sky Deck Experience",
      description: "Discover the breathtaking views and luxurious amenities of our exclusive sky deck. A perfect blend of elegance and comfort with panoramic city views.",
      image: "/assets/sky-deck.jpg",
      link: "/sky-deck",
      category: "Amenities",
      readTime: "5 min read",
      highlights: ["Panoramic Views", "Luxury Seating", "Perfect Ambiance", "Premium Experience"]
    },
    {
      id: 2,
      title: "Luxury Room Collection",
      description: "Explore our exquisite range of rooms designed for the ultimate comfort. From deluxe to presidential suites, each room tells a story of luxury.",
      image: "/assets/bed-room.jpg",
      link: "/rooms",
      category: "Accommodation",
      readTime: "7 min read",
      highlights: ["Premium Bedding", "Modern Amenities", "Stunning Views", "Exceptional Service"]
    },
    {
      id: 3,
      title: "The Cupid Restaurant",
      description: "Indulge in culinary excellence at our signature restaurant. Experience fine dining with a perfect blend of local and international cuisines.",
      image: "/assets/the-cupid-restaurant.jpg",
      link: "/blog/restaurant",
      category: "Dining",
      readTime: "6 min read",
      highlights: ["Gourmet Cuisine", "Elegant Ambiance", "24/7 Service", "Signature Dishes"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-r from-[#ad8b3a]/90 to-amber-700/90 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium uppercase tracking-wider">Hotel Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Explore the luxury, comfort, and exceptional experiences that await you at Apoorva Royale
          </p>
        </div>
      </div>      {/* Blog Posts Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
              <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Featured Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-amber-600">Premium</span> Offerings
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our hotel's finest offerings through detailed insights and stunning visuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[#ad8b3a] px-3 py-1 rounded-full text-sm font-semibold border border-[#ad8b3a]/20">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-[#ad8b3a]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ad8b3a] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-[#ad8b3a]/5 text-[#ad8b3a] px-3 py-1 rounded-full text-sm border border-[#ad8b3a]/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={post.link}
                    className="inline-flex items-center bg-[#ad8b3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ad8b3a]/90 transition-all duration-300 hover:scale-105 shadow-lg group"
                  >
                    Explore More
                    <svg 
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Additional Features Section */}
      <section className="py-16 px-4 md:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#ad8b3a]/10 border border-[#ad8b3a]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ad8b3a] rounded-full mr-2"></div>
              <span className="text-[#ad8b3a] text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad8b3a] to-amber-600">Apoorva Royale</span>?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#ad8b3a] to-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience unparalleled luxury and service that sets us apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Accommodations</h3>
              <p className="text-gray-600 text-sm">
                Premium rooms and suites with world-class amenities and stunning views.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fine Dining</h3>
              <p className="text-gray-600 text-sm">
                Exceptional culinary experiences with local and international cuisines.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Services</h3>
              <p className="text-gray-600 text-sm">
                24/7 concierge service and personalized attention to every detail.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-8 h-8 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prime Location</h3>
              <p className="text-gray-600 text-sm">
                Strategically located with easy access to major attractions and business centers.
              </p>
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
            <span className="text-white text-sm font-medium uppercase tracking-wider">Ready to Book?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Luxury</span>?
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-white to-amber-200 mx-auto mb-6"></div>
          <p className="text-xl mb-8 opacity-90">
            Book your stay with us and discover what makes Apoorva Royale truly exceptional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/rooms"
              className="bg-white text-[#ad8b3a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Rooms
            </Link>
            <a 
              href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-green-500 hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
            Book via WhatsApp
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
          </div>
        </a>
      </div>
    </div>
  )
}