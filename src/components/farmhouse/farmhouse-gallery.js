"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function FarmhouseGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const galleryItems = [
    {
      src: "/assets/farmhouse-cottages.jpg",
      title: "Luxury Cottages",
      category: "accommodation",
      description: "Beautifully designed cottages with modern amenities"
    },
    {
      src: "/assets/farmhouse-lake.jpg",
      title: "Serene Lake",
      category: "nature",
      description: "Crystal clear lake surrounded by lush greenery"
    },
    {
      src: "/assets/farmhouse-events-pics.jpg",
      title: "Event Spaces",
      category: "events",
      description: "Perfect venues for celebrations and gatherings"
    },
    {
      src: "/assets/farmhouse-fauna.jpg",
      title: "Natural Wildlife",
      category: "nature",
      description: "Diverse flora and fauna in their natural habitat"
    },    {
      src: "/assets/Farhouse-waterfountain.jpg",
      title: "Water Fountain",
      category: "amenities",
      description: "Elegant water features throughout the property"
    },
    {
      src: "/assets/pool.jpg",
      title: "Swimming Pool",
      category: "amenities",
      description: "Private pool for refreshing swims"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },
    { id: 'accommodation', name: 'Cottages', icon: '🏡' },
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'amenities', name: 'Amenities', icon: '🏊' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-stone-100 via-white to-green-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#ad8b3a] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#ad8b3a]/10 text-[#ad8b3a] px-6 py-3 rounded-full text-sm font-medium mb-6">
            📸 Photo Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
            Farmhouse <span className="text-[#ad8b3a] relative">
              Gallery
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ad8b3a]/0 via-[#ad8b3a] to-[#ad8b3a]/0 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Explore the beauty and luxury of our farmhouse through these stunning visuals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-[#ad8b3a] text-white shadow-lg shadow-[#ad8b3a]/30'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Video Section */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">Experience Our Farmhouse</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Watch this exclusive video tour to see the beauty and tranquility of our farmhouse
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/farmhouse-cottages.jpg"
                preload="auto"
              >
                <source src="/assets/farmhouse-decoration.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay with play icon for mobile */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 md:hidden">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#ad8b3a] transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
