'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      info: 'pioneermarketing.info@gmail.com',
      link: 'mailto:pioneermarketing.info@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      info: '🇲🇲 +959696393237\n🇹🇭 +66619028320',
      link: 'tel:+959696393237',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      info: '🇲🇲 No.4 Quarter, Boe Yarzar Road, Near Ba Yint Noung Market, Myawadi\n🇹🇭 186/15, Ground Floor, Marlway Housing, Mae Pa, Mae Sot, 63110',
      link: '#',
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, link: 'https://m.me.pioneermarketing.info', color: 'hover:text-blue-600' },
    { icon: FaInstagram, link: 'https://www.instagram.com/pioneer_marketing_info', color: 'hover:text-pink-600' },
    { icon: FaTelegram, link: 'https://t.me/pioneermarketingagency', color: 'hover:text-blue-500' },
    { icon: FaTiktok, link: 'https://www.tiktok.com/@pioneer.marketing', color: 'hover:text-pink-500' },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Build Your Brand <span className="text-accent">Today!</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch with us and let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="content">Content Writing</option>
                    <option value="motion">Motion Animation</option>
                    <option value="script">Script Writing</option>
                    <option value="media-buying">Media Buying</option>
                    <option value="page-settings">Page Settings & Fixing</option>
                    <option value="boosting">Boosting Services</option>
                    <option value="web-dev">Website Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accentBlue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center font-semibold"
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accentBlue rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Mae%20Sot%2C%20Tak%2C%20Thailand&z=13&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pioneer Marketing Location"
                ></iframe>
              </div>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all ${social.color}`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
              <a
                href="https://wa.me/66619028320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

