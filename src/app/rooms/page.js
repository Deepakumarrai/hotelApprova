"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function RoomPage() {
  const [activeTab, setActiveTab] = useState('deluxe')
  const [selectedImage, setSelectedImage] = useState(null)

  const roomData = {
    deluxe: {
      title: "Deluxe Room",
      description: "Experience comfort and luxury in our elegantly designed Deluxe Rooms, featuring modern amenities and stunning views.",
      features: [
        "Premium bedding and linens",
        "Air conditioning",
        "Private bathroom with premium toiletries",
        "Flat-screen TV with cable channels",
        "Mini-bar and coffee making facilities",
        "Free Wi-Fi",
        "Room service available",
        "City/Garden view"
      ],
      pricing: {
        single: {
          ep: "₹1,903/-",
          cp: "₹2,239/-"
        },
        double: {
          ep: "₹2,127/-",
          cp: "₹2,575/-"
        }
      },
      images: [
        "/assets/bed-room.jpg",
        "/assets/bed-room1.jpg",
        "/assets/bed.jpg",
        "/assets/tv-section.jpg",
        "/assets/bathroom.jpg"
      ],
      videos: [
        "/assets/bed-room.mp4",
        "/assets/bed.mp4"
      ]
    },
    premium: {
      title: "Premium Room",
      description: "Indulge in ultimate luxury with our Premium Rooms, offering spacious interiors and exclusive amenities for a memorable stay.",
      features: [
        "Luxury bedding and premium linens",
        "Climate control",
        "Marble bathroom with jacuzzi",
        "Smart TV with streaming services",
        "Premium mini-bar and espresso machine",
        "Complimentary Wi-Fi",
        "24/7 room service",
        "Panoramic city/mountain view",
        "Work desk with ergonomic chair",
        "In-room safe"
      ],
      pricing: {
        single: {
          ep: "₹2,127/-",
          cp: "₹2,575/-"
        },
        double: {
          ep: "₹2,351/-",
          cp: "₹2,799/-"
        }
      },
      images: [
        "/assets/bed-room1.jpg",
        "/assets/bed-room3.jpg",
        "/assets/bed1.jpg",
        "/assets/office-desk.jpg",
        "/assets/bathroom1.jpg"
      ],
      videos: [
        "/assets/bed-room1.mp4",
        "/assets/bed1.mp4",
        "/assets/office-desk.mp4"
      ]
    }
  }

  const hotelFeatures = [
    "/assets/sky-deck.jpg",
    "/assets/sky-deck1.jpg",
    "/assets/sky-deck-main-entrance.jpg",
    "/assets/pool.jpg",
    "/assets/cupboard.jpg"
  ]

  const currentRoom = roomData[activeTab]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />      {/* Enhanced Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/room.mp4" type="video/mp4" />
            <source src="/assets/bed-room.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#ad8b3a]/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 py-2 md:px-6 bg-[#ad8b3a]/20 text-[#ad8b3a] rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-[#ad8b3a]/30">
                ✨ Premium Accommodations
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Luxury 
              <span className="block text-transparent bg-gradient-to-r from-[#ad8b3a] to-yellow-400 bg-clip-text">
                Redefined
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
              Immerse yourself in unparalleled comfort with our meticulously crafted rooms, 
              where every detail speaks of luxury and sophistication.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ad8b3a] mb-1 md:mb-2">2</div>
                <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Room Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ad8b3a] mb-1 md:mb-2">5★</div>
                <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Luxury Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ad8b3a] mb-1 md:mb-2">24/7</div>
                <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Room Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ad8b3a] mb-1 md:mb-2">Free</div>
                <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider">Wi-Fi</div>
              </div>
            </div>
          </div>

          {/* Enhanced Room Type Tabs - Mobile Responsive */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="bg-black/30 backdrop-blur-lg rounded-xl md:rounded-2xl p-2 md:p-3 border border-white/20 w-full max-w-md md:max-w-none md:w-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  onClick={() => setActiveTab('deluxe')}
                  className={`px-4 py-3 md:px-10 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-500 text-sm md:text-base ${
                    activeTab === 'deluxe'
                      ? 'bg-gradient-to-r from-[#ad8b3a] to-yellow-500 text-white shadow-2xl transform scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>💎</span>
                    <span>Deluxe Room</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('premium')}
                  className={`px-4 py-3 md:px-10 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-500 text-sm md:text-base ${
                    activeTab === 'premium'
                      ? 'bg-gradient-to-r from-[#ad8b3a] to-yellow-500 text-white shadow-2xl transform scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>👑</span>
                    <span>Premium Room</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>      {/* Room Details Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            {/* Room Info */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                {currentRoom.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                {currentRoom.description}
              </p>

              {/* Features */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Room Features</h3>
                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                  {currentRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ad8b3a] rounded-full flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <a
                href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#ad8b3a] text-white font-semibold rounded-lg hover:bg-[#8a6e2f] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Book Now via WhatsApp
              </a>
            </div>

            {/* Main Room Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={currentRoom.images[0]}
                  alt={currentRoom.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>          {/* Image Gallery */}
          <div className="mb-12 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Room Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {currentRoom.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${currentRoom.title} ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Video Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {currentRoom.videos.map((video, index) => (
                <div key={index} className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <video
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={currentRoom.images[0]}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm font-medium">Live Preview</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>          {/* Enhanced Pricing Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6 md:mb-8 space-y-4 lg:space-y-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Room Rates</h3>
              
              {/* Room Type Selector in Pricing */}
              <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200 w-full max-w-sm lg:w-auto">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('deluxe')}
                    className={`flex-1 lg:flex-none px-4 py-2 md:px-6 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm ${
                      activeTab === 'deluxe'
                        ? 'bg-[#ad8b3a] text-white shadow-md'
                        : 'text-gray-600 hover:text-[#ad8b3a]'
                    }`}
                  >
                    💎 Deluxe
                  </button>
                  <button
                    onClick={() => setActiveTab('premium')}
                    className={`flex-1 lg:flex-none px-4 py-2 md:px-6 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm ${
                      activeTab === 'premium'
                        ? 'bg-[#ad8b3a] text-white shadow-md'
                        : 'text-gray-600 hover:text-[#ad8b3a]'
                    }`}
                  >
                    👑 Premium
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Enhanced Single Occupancy */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border-2 border-gray-100 hover:border-[#ad8b3a]/30 transition-all duration-300">
                <div className="text-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ad8b3a] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">👤</span>
                  </div>
                  <h4 className="text-lg md:text-2xl font-semibold text-gray-900">Single Occupancy</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Perfect for solo travelers</p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center text-sm md:text-base">
                          🍽️ EP Plan
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">European Plan (Room Only)</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ad8b3a] to-yellow-600 bg-clip-text text-transparent">
                          {currentRoom.pricing.single.ep}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Including GST</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-r from-[#ad8b3a]/5 to-yellow-500/5 p-4 md:p-6 border-2 border-[#ad8b3a]/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center text-sm md:text-base">
                          ☕ CP Plan
                          <span className="ml-2 px-2 py-1 bg-[#ad8b3a] text-white text-xs rounded-full">Popular</span>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Continental Plan (with Breakfast)</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ad8b3a] to-yellow-600 bg-clip-text text-transparent">
                          {currentRoom.pricing.single.cp}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Including GST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Double Occupancy */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border-2 border-gray-100 hover:border-[#ad8b3a]/30 transition-all duration-300">
                <div className="text-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ad8b3a] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">👥</span>
                  </div>
                  <h4 className="text-lg md:text-2xl font-semibold text-gray-900">Double Occupancy</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Ideal for couples & friends</p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center text-sm md:text-base">
                          🍽️ EP Plan
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">European Plan (Room Only)</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ad8b3a] to-yellow-600 bg-clip-text text-transparent">
                          {currentRoom.pricing.double.ep}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Including GST</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-r from-[#ad8b3a]/5 to-yellow-500/5 p-4 md:p-6 border-2 border-[#ad8b3a]/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center text-sm md:text-base">
                          ☕ CP Plan
                          <span className="ml-2 px-2 py-1 bg-[#ad8b3a] text-white text-xs rounded-full">Popular</span>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Continental Plan (with Breakfast)</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ad8b3a] to-yellow-600 bg-clip-text text-transparent">
                          {currentRoom.pricing.double.cp}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">Including GST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Extra Person Rate */}
            <div className="mt-8 md:mt-12 text-center">
              <div className="inline-flex items-center px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#ad8b3a] to-yellow-500 text-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="text-base md:text-lg mr-2 md:mr-3">👨‍👩‍👧‍👦</span>
                <span className="font-semibold text-sm md:text-lg">Extra Person: ₹560/- (Including GST)</span>
              </div>
            </div>

            {/* Quick Booking Action */}
            <div className="mt-6 md:mt-8 text-center">
              <a
                href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl md:rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                💬 Book Instantly via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Hotel Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Hotel Amenities</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy world-class facilities and amenities designed to make your stay exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {hotelFeatures.map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src={image}
                  alt={`Hotel Feature ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Video */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <video
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/sky-deck.jpg"
              >
                <source src="/assets/the-cupid-restaurant.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-white">
                <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2">The Cupid Restaurant</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium">Live Dining Experience</span>
                </div>
              </div>
            </div>
            <div className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <video
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/sky-deck1.jpg"
              >
                <source src="/assets/cooridor.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-white">
                <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2">Hotel Corridors</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium">Elegant Walkways</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#ad8b3a] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Book your stay with us today and indulge in unparalleled comfort and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <a
              href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-[#ad8b3a] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base justify-center"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Book via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#ad8b3a] transition-all duration-300 transform hover:scale-105 text-sm md:text-base justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 z-10 p-2"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-80 sm:h-96 md:h-[600px]">
              <Image
                src={selectedImage}
                alt="Room Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <a 
          href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale.%20Could%20you%20please%20help%20me%20with%20availability%20and%20rates%3F" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm hidden md:block">
            Book via WhatsApp
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
          </div>
        </a>
      </div>
    </div>
  )
}