// app/page.js
"use client"
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Introduction from '../components/introduction'
import Features from '../components/features'
import CallToAction from '../components/call-to-action'
import Testimonials from '../components/testimonials'
import Location from '../components/location'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <CallToAction />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  )
}