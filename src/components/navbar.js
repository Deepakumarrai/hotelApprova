// components/navbar.js
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown)
  }

  return (
    <>
      {/* Backdrop blur when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md shadow-2xl z-50 border-b border-[#ad8b3a]/20">
        <div className="w-full px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Apoorva Royale" 
                  fill
                  className="object-contain filter brightness-110"
                  priority
                />
              </div>
              <Link href="/" className="text-[#ad8b3a] text-2xl font-bold tracking-wider hover:text-yellow-400 transition-all duration-300">
                APOORVA ROYALE
              </Link>
            </div>            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://wa.me/919668821100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 bg-green-500/20 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 text-green-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 bg-pink-500/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 bg-blue-500/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@apoorvaroyale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 bg-red-500/20 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 text-red-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              {/* Rooms Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('rooms')}
                  className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a] flex items-center"
                >
                  ROOMS
                  <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div 
                  onMouseEnter={() => setActiveDropdown('rooms')}
                  onMouseLeave={() => setActiveDropdown('')}
                  className={`absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-lg shadow-2xl border border-[#ad8b3a]/30 transition-all duration-300 ${
                    activeDropdown === 'rooms' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2">
                    <Link href="/rooms" className="block px-4 py-3 text-white/80 hover:text-[#ad8b3a] hover:bg-[#ad8b3a]/10 rounded-lg transition-all duration-300 text-sm">
                      Rooms & Accommodation
                    </Link>
                    <Link href="/sky-deck" className="block px-4 py-3 text-white/80 hover:text-[#ad8b3a] hover:bg-[#ad8b3a]/10 rounded-lg transition-all duration-300 text-sm">
                      Sky-Deck Experience
                    </Link>
                  </div>
                </div>
              </div>              <Link href="/about-us" className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a]">
                ABOUT US
              </Link>

              <button 
                onClick={() => {
                  const element = document.getElementById('location-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a]"
              >
                LOCATION
              </button>
              
              <Link href="/blog" className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a]">
                BLOG
              </Link>
              
              <Link href="/contact" className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a]">
                CONTACT US
              </Link>
            </div>
            
            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            >
              <span className={`w-6 h-0.5 bg-[#ad8b3a] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#ad8b3a] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#ad8b3a] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
          {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-[#ad8b3a]/20 transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-6 space-y-6">
            <div className="space-y-3">
              <div className="text-[#ad8b3a] text-sm font-bold uppercase tracking-widest">ACCOMMODATION</div>
              <Link 
                href="/rooms" 
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-[#ad8b3a] pl-4 transition-all duration-300"
              >
                Rooms & Accommodation
              </Link>
              <Link 
                href="/sky-deck" 
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-[#ad8b3a] pl-4 transition-all duration-300"
              >
                Sky-Deck Experience
              </Link>
            </div>
              <Link 
              href="/about-us" 
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-[#ad8b3a] text-lg font-medium uppercase tracking-wider transition-all duration-300 pb-2 border-b border-white/10"
            >
              ABOUT US
            </Link>
            
            <button 
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById('location-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-white/90 hover:text-[#ad8b3a] text-lg font-medium uppercase tracking-wider transition-all duration-300 pb-2 border-b border-white/10 w-full text-left"
            >
              LOCATION
            </button>
            
            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-[#ad8b3a] text-lg font-medium uppercase tracking-wider transition-all duration-300 pb-2 border-b border-white/10"
            >
              BLOG
            </Link>
            
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-[#ad8b3a] text-lg font-medium uppercase tracking-wider transition-all duration-300 pb-2 border-b border-white/10"
            >
              CONTACT US
            </Link>
              <div className="pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <div className="text-center text-[#ad8b3a] text-sm font-bold uppercase tracking-widest mb-2">
                  Connect With Us
                </div>
                
                {/* Mobile Social Media Grid */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://wa.me/919668821100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-green-500/20 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-green-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/apoorvaroyale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-pink-500/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/apoorvaroyale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-blue-500/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@apoorvaroyale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-red-500/20 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Quick Contact */}
                <div className="text-center space-y-2">
                  <a 
                    href="tel:+919668821100" 
                    className="block text-white/90 hover:text-[#ad8b3a] text-sm transition-colors duration-300"
                  >
                    📞 +91 96688 21100
                  </a>
                  <a 
                    href="https://wa.me/919668821100?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Apoorva%20Royale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 text-sm transition-colors duration-300"
                  >
                    💬 WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}