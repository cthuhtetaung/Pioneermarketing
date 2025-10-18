'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlay, FaArrowRight, FaFacebook, FaInstagram, FaPaintBrush, FaVideo, FaRocket, FaChartLine } from 'react-icons/fa'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Background with decorative elements */}
      <div className="absolute inset-0">
        {/* Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              delay: 1, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-20 left-20 text-white"
          >
            <FaFacebook size={30} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              delay: 1.2, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-32 right-32 text-white"
          >
            <FaInstagram size={25} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              delay: 1.4, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-1/2 left-16 text-white"
          >
            <FaPaintBrush size={28} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ 
              delay: 1.6, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-1/2 right-20 text-white"
          >
            <FaVideo size={26} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              y: [0, -10, 10, 0]
            }}
            transition={{ 
              delay: 1.8, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-32 left-24 text-white"
          >
            <FaRocket size={24} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0.3],
              scale: [0, 1.1, 1, 1.1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              delay: 2, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-20 right-16 text-white"
          >
            <FaChartLine size={22} />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Empowering Your Brand Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentBlue">
              Creative Digital Marketing
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            From ideas to impact — we build, boost, and brand your digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-accent to-accentBlue text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-2xl hover:shadow-accent/25 transition-all cursor-pointer"
                >
                  Get a Free Consultation
                  <FaArrowRight className="text-sm" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-accent hover:text-white transition-all cursor-pointer"
                >
                  <FaPlay className="text-sm" />
                  See Our Work
                </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero