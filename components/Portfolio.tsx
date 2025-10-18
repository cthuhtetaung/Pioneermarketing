'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'design', name: 'Design' },
    { id: 'video', name: 'Video' },
    { id: 'web', name: 'Web Development' },
    { id: 'marketing', name: 'Marketing' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
      description: 'Complete brand identity and visual system for innovative startup',
      tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      description: 'Modern e-commerce website with seamless shopping experience',
      tags: ['React', 'E-commerce', 'Payment Integration']
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop&crop=center',
      description: 'Multi-platform social media campaign with viral reach',
      tags: ['Facebook', 'Instagram', 'Content Strategy']
    },
    {
      id: 4,
      title: 'Product Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center',
      description: 'Engaging product showcase video with motion graphics',
      tags: ['Video Production', 'Motion Graphics', 'Product Demo']
    },
    {
      id: 5,
      title: 'Corporate Branding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center',
      description: 'Professional corporate identity and brand guidelines',
      tags: ['Corporate Identity', 'Brand Strategy', 'Business Cards']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      description: 'Stunning portfolio website for creative professional',
      tags: ['Portfolio Design', 'Responsive', 'SEO Optimized']
    },
    {
      id: 7,
      title: 'Instagram Content',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
      description: 'Curated Instagram feed and story templates',
      tags: ['Instagram', 'Content Creation', 'Visual Design']
    },
    {
      id: 8,
      title: 'Animation Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop&crop=center',
      description: '2D animated explainer video for SaaS product',
      tags: ['2D Animation', 'Explainer Video', 'Motion Graphics']
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses achieve their digital marketing goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-accent to-accentBlue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Project
                  </motion.button>
                </div>
                
                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accentBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-accent/5 group-hover:to-accentBlue/5">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
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
            <h3 className="text-3xl font-bold mb-4">Like What You See?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Let's create something amazing together for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
