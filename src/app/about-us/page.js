"use client"
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Image from 'next/image'

export default function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    "/assets/hotel-front.jpg",
    "/assets/bed-room.jpg",
    "/assets/office-desk.jpg",
    "/assets/bathroom.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Image Carousel */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img 
                src={image}
                alt={`Hotel Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-[#ad8b3a]">Apoorva Royale</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where tradition meets luxury in the heart of Balangir. Experience the perfect blend of comfort, elegance, and authentic hospitality.
          </p>        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Established with a vision to redefine hospitality in Balangir, Apoorva Royale stands as a testament to luxury and comfort. Our hotel combines modern amenities with traditional warmth, creating an unforgettable experience for every guest.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From our meticulously designed rooms to our world-class dining experiences, every detail at Apoorva Royale is crafted to exceed your expectations. We believe in creating memories that last a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ad8b3a] mb-2">50+</div>
                  <div className="text-gray-600 uppercase tracking-wide font-medium">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ad8b3a] mb-2">24/7</div>
                  <div className="text-gray-600 uppercase tracking-wide font-medium">Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/hotel-front.jpg" 
                  alt="Apoorva Royale Hotel" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Showcase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the luxury and comfort that awaits you at Apoorva Royale</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/bed-room.jpg"
                  alt="Luxury Bedroom"
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold">Luxury Bedrooms</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Accommodations</h3>
                <p className="text-gray-600">Spacious rooms designed for comfort with modern amenities and elegant furnishings.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/office-desk.jpg"
                  alt="Office Space"
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold">Business Center</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Work Space</h3>
                <p className="text-gray-600">Dedicated workspace in rooms perfect for business travelers and remote work.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="/assets/bathroom.jpg"
                  alt="Premium Bathroom"
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold">Luxury Bathrooms</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Bathrooms</h3>
                <p className="text-gray-600">Modern bathroom facilities with premium fixtures and amenities for your comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier destination for luxury hospitality in Balangir, setting new standards of excellence in service, comfort, and guest satisfaction while preserving the rich cultural heritage of our region.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ad8b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional hospitality experiences through personalized service, luxurious accommodations, and authentic local cuisine, ensuring every guest feels valued, comfortable, and inspired during their stay.
              </p>
            </div>
          </div>        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Apoorva Royale
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-10 h-10 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every detail, from service to amenities, ensuring the highest standards of quality.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-10 h-10 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospitality</h3>
              <p className="text-gray-600">Genuine warmth and personalized attention create meaningful connections with every guest who walks through our doors.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#ad8b3a]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-10 h-10 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage</h3>
              <p className="text-gray-600">We celebrate and preserve the rich cultural traditions of Balangir while embracing modern luxury and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Map Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
                <p className="text-lg text-gray-600">Located in the heart of Balangir, easily accessible and well-connected.</p>
              </div>
              
              <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.123456789!2d83.4976543!3d20.7108979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a59b123456789%3A0x1234567890abcdef!2sBalangir%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-72 lg:h-80 rounded-xl"
                ></iframe>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://maps.app.goo.gl/qgNHTXHxJBFmSTvu5?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ad8b3a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ad8b3a]/80 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  <svg className="mr-2 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Get Directions
                </a>
                <a 
                  href="tel:+919668821100" 
                  className="border border-[#ad8b3a] text-[#ad8b3a] px-6 py-3 rounded-lg font-semibold hover:bg-[#ad8b3a] hover:text-white transition-all duration-300 inline-flex items-center justify-center group"
                >
                  <svg className="mr-2 w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div className="space-y-8">
              
              {/* Social Media Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/apoorvaroyale?igsh=b3gyY3U0OTUwYzFr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 group text-center"
                  >
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-semibold">Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/share/199SS2siJk/?mibextid=qi2Omg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 group text-center"
                  >
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-semibold">Facebook</span>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://youtube.com/@hotelapoorvaroyalebgr?si=6pzzY2icywUo_QWp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 group text-center"
                  >
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm font-semibold">YouTube</span>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/919668821100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 p-4 rounded-xl text-white hover:scale-105 transition-all duration-300 group text-center"
                  >
                    <svg className="w-8 h-8 mx-auto mb-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Follow us for updates and exclusive offers</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="tel:+919668821100" 
                      className="bg-[#ad8b3a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#ad8b3a]/80 transition-all duration-300 inline-flex items-center justify-center group text-sm"
                    >
                      <svg className="mr-2 w-4 h-4 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      +91 96688 21100
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals dedicated to making your stay exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-[#ad8b3a]/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-12 h-12 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">General Manager</h3>
              <p className="text-[#ad8b3a] mb-4 font-semibold">Hospitality Excellence</p>
              <p className="text-gray-600">Leading with 15+ years of experience in luxury hospitality, ensuring every guest receives world-class service.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-[#ad8b3a]/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-12 h-12 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Executive Chef</h3>
              <p className="text-[#ad8b3a] mb-4 font-semibold">Culinary Innovation</p>
              <p className="text-gray-600">Bringing authentic flavors and international cuisine together to create unforgettable dining experiences.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-[#ad8b3a]/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#ad8b3a] transition-all duration-300">
                <svg className="w-12 h-12 text-[#ad8b3a] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Guest Relations Manager</h3>
              <p className="text-[#ad8b3a] mb-4 font-semibold">Guest Experience</p>
              <p className="text-gray-600">Dedicated to ensuring every guest feels valued and their needs are anticipated and exceeded.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#ad8b3a] to-[#c19b47]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Experience the Difference</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Discover why Apoorva Royale is more than just a hotel – it's your home away from home in Balangir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[#ad8b3a] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a 
              href="tel:+919668821100" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#ad8b3a] transition-all duration-300 inline-flex items-center justify-center group"
            >
              Call Now
              <svg className="ml-2 w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}