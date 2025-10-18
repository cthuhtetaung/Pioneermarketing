'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPalette, 
  FaPen, 
  FaVideo, 
  FaFileAlt, 
  FaBullhorn, 
  FaCog, 
  FaRocket,
  FaGlobe 
} from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaPalette,
      title: 'Graphics Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience.',
      features: ['Logo Design', 'Brand Identity', 'Print Materials', 'Digital Graphics'],
      gradient: 'from-pink-500 to-purple-600',
      hoverGradient: 'from-pink-400 to-purple-500'
    },
    {
      icon: FaPen,
      title: 'Content Writing',
      description: 'Compelling content that tells your story and drives meaningful engagement.',
      features: ['Blog Posts', 'Social Media', 'Website Copy', 'Marketing Materials'],
      gradient: 'from-blue-500 to-cyan-600',
      hoverGradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: FaVideo,
      title: 'Motion Animation',
      description: 'Dynamic animations and videos that bring your brand to life.',
      features: ['2D Animation', 'Video Editing', 'Motion Graphics', 'Social Media Videos'],
      gradient: 'from-orange-500 to-red-600',
      hoverGradient: 'from-orange-400 to-red-500'
    },
    {
      icon: FaFileAlt,
      title: 'Script Writing',
      description: 'Engaging scripts for videos, presentations, and marketing campaigns.',
      features: ['Video Scripts', 'Presentation Scripts', 'Ad Copy', 'Storytelling'],
      gradient: 'from-green-500 to-teal-600',
      hoverGradient: 'from-green-400 to-teal-500'
    },
    {
      icon: FaBullhorn,
      title: 'Media Buying',
      description: 'Strategic ad placements across platforms to maximize your reach and ROI.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Ads', 'YouTube Ads'],
      gradient: 'from-yellow-500 to-orange-600',
      hoverGradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FaCog,
      title: 'Page Settings',
      description: 'Optimized social media pages and profiles for maximum engagement.',
      features: ['Facebook Setup', 'Instagram Optimization', 'LinkedIn Setup', 'Profile Design'],
      gradient: 'from-indigo-500 to-blue-600',
      hoverGradient: 'from-indigo-400 to-blue-500'
    },
    {
      icon: FaRocket,
      title: 'Boosting Services',
      description: 'Amplify your content reach with targeted boosting strategies.',
      features: ['Post Boosting', 'Ad Campaigns', 'Audience Targeting', 'Performance Tracking'],
      gradient: 'from-purple-500 to-pink-600',
      hoverGradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: FaGlobe,
      title: 'Website Development',
      description: 'Custom websites that convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce', 'Maintenance'],
      gradient: 'from-teal-500 to-green-600',
      hoverGradient: 'from-teal-400 to-green-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon with animated gradient */}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 relative z-10`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <service.icon className="text-white text-2xl" />
              </motion.div>
              
              {/* Title with color change on hover */}
              <motion.h3 
                className="text-xl font-bold text-primary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300"
              >
                {service.title}
              </motion.h3>
              
              {/* Description with slide animation */}
              <motion.p 
                className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {service.description}
              </motion.p>
              
              {/* Features list with staggered animation */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}
                      whileHover={{ 
                        scale: 1.5,
                        transition: { duration: 0.2 }
                      }}
                    ></motion.div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Let's discuss how we can help your business grow with our digital marketing services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
