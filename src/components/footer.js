// components/footer.js
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Apoorva Royale" 
                  fill
                  className="object-contain filter brightness-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#ad8b3a]">APOORVA ROYALE</h3>
            </div>
            <p className="text-stone-300 leading-relaxed mb-6">
              Where comfort meets class. Experience luxury, authentic dining, and memorable moments in the heart of Balangir.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#ad8b3a]/20 rounded-full flex items-center justify-center hover:bg-[#ad8b3a] transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#ad8b3a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#ad8b3a]/20 rounded-full flex items-center justify-center hover:bg-[#ad8b3a] transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#ad8b3a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.391 14.42c.687.687 1.63 1.111 2.674 1.111 2.096 0 3.793-1.697 3.793-3.793S11.161 7.945 9.065 7.945 5.272 9.642 5.272 11.738c0 1.044.424 1.987 1.111 2.674l-1.271 1.27c-.807-.88-1.297-2.031-1.297-3.328 0-2.674 2.168-4.842 4.842-4.842s4.842 2.168 4.842 4.842-2.168 4.842-4.842 4.842zm7.259-3.328c0 .424-.345.769-.769.769s-.769-.345-.769-.769.345-.769.769-.769.769.345.769.769z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#ad8b3a]/20 rounded-full flex items-center justify-center hover:bg-[#ad8b3a] transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#ad8b3a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#ad8b3a]/20 rounded-full flex items-center justify-center hover:bg-[#ad8b3a] transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#ad8b3a] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#ad8b3a] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/rooms" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Rooms & Accommodation</Link></li>
              <li><Link href="/sky-deck" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Sky-Deck</Link></li>
              <li><Link href="/restaurant" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">The Cupid Restaurant</Link></li>
              <li><Link href="/offers" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Special Offers</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-[#ad8b3a] mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/membership" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Memberships</Link></li>
              <li><Link href="/events" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Event Hosting</Link></li>
              <li><Link href="/business" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Business Center</Link></li>
              <li><Link href="/spa" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Spa & Wellness</Link></li>
              <li><Link href="/blog" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">Blog</Link></li>
              <li><Link href="/news" className="text-stone-300 hover:text-[#ad8b3a] transition-colors duration-300">News</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#ad8b3a] mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#ad8b3a] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-stone-300">Hotel Apoorva Royale</p>
                  <p className="text-stone-300">Heart of Balangir</p>
                  <p className="text-stone-300">Odisha, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#ad8b3a] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <p className="text-stone-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#ad8b3a] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <p className="text-stone-300">info@apoorvaroyale.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              &copy; 2025 Apoorva Royale. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-stone-400 hover:text-[#ad8b3a] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-stone-400 hover:text-[#ad8b3a] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-stone-400 hover:text-[#ad8b3a] transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}