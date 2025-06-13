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
            </div>
              {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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
              </div>

              <button 
                onClick={() => {
                  const element = document.getElementById('about-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/90 hover:text-[#ad8b3a] text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ad8b3a]"
              >
                ABOUT US
              </button>

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
            
            <button 
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById('about-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block text-white/90 hover:text-[#ad8b3a] text-lg font-medium uppercase tracking-wider transition-all duration-300 pb-2 border-b border-white/10 w-full text-left"
            >
              ABOUT US
            </button>
            
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
              <div className="text-center text-[#ad8b3a] text-sm font-bold uppercase tracking-widest">
                Contact us for reservations
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}