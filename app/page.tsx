'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    // Fallback to ensure content loads
    const fallbackTimer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
