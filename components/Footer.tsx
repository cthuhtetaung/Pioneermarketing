'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Graphics Design',
    'Content Writing',
    'Motion Animation',
    'Script Writing',
    'Media Buying',
    'Page Settings',
    'Boosting Services',
    'Website Development',
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaFacebook, link: 'https://m.me.pioneermarketing.info', color: 'hover:text-blue-600' },
    { icon: FaInstagram, link: 'https://www.instagram.com/pioneer_marketing_info', color: 'hover:text-pink-600' },
    { icon: FaTelegram, link: 'https://t.me/pioneermarketingagency', color: 'hover:text-blue-500' },
    { icon: FaTiktok, link: 'https://www.tiktok.com/@pioneer.marketing', color: 'hover:text-pink-500' },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Pioneer <span className="text-accent">Marketing</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering brands through creative digital marketing solutions. 
              From ideas to impact — we build, boost, and brand your digital presence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors inline-block hover:translate-x-2 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-accent transition-colors inline-block hover:translate-x-2 transform duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent text-lg mt-1 flex-shrink-0" />
                <div className="text-gray-300 whitespace-pre-line">
                  🇲🇲 No.4 Quarter, Boe Yarzar Road, Near Ba Yint Noung Market, Myawadi
                  <br />
                  🇹🇭 186/15, Ground Floor, Marlway Housing, Mae Pa, Mae Sot, 63110
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-lg flex-shrink-0" />
                <a
                  href="mailto:pioneermarketing.info@gmail.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  pioneermarketing.info@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent text-lg flex-shrink-0" />
                <div className="text-gray-300">
                  <a
                    href="tel:+959696393237"
                    className="hover:text-accent transition-colors block"
                  >
                    🇲🇲 +959696393237
                  </a>
                  <a
                    href="tel:+66619028320"
                    className="hover:text-accent transition-colors block"
                  >
                    🇹🇭 +66619028320
                  </a>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <button className="px-4 py-2 bg-accent hover:bg-accent/90 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Pioneer Marketing. All rights reserved.
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              Made with Love ❤️ by <a href="https://www.odex-mm.info" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-accentBlue transition-colors">OdeX</a> Dev
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

