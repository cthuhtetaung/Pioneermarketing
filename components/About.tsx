'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
  ]

  const journey = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Pioneer Marketing was born with a vision to revolutionize digital marketing'
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Grew our team and service offerings to meet increasing client demands'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched advanced motion animation and media buying services'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Achieved 100+ successful projects and 50+ satisfied clients'
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Pioneer Marketing</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of creative professionals dedicated to transforming brands through innovative digital marketing strategies. 
            Our mission is to empower businesses with cutting-edge solutions that drive growth, engagement, and lasting impact in the digital landscape.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-primary rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Journey
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>
          
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-primary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accentBlue rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About