'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'မင်းခန့်',
      company: 'TechStart Inc.',
      role: 'CEO',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=MinKhant&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Pioneer Marketing က ကျွန်တော်တို့ရဲ့ digital presence ကို လုံးဝပြောင်းလဲပေးခဲ့တယ်။ သူတို့ရဲ့ creative approach နဲ့ strategic thinking ကြောင့် online engagement 300% တိုးလာခဲ့တယ်။'
    },
    {
      name: 'ဇော်မျိုး',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=ZawMyo&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Pioneer Marketing ရဲ့ team က exceptional ပါ။ သူတို့က ကျွန်တော်တို့ရဲ့ website redesign ကို အချိန်မီ ပေးပြီး မျှော်လင့်ထားတာတွေထက် ပိုကောင်းအောင် လုပ်ပေးခဲ့တယ်။ အကြံပြုပါတယ်!'
    },
    {
      name: 'ခိုင်စိုး',
      company: 'Creative Studio',
      role: 'Founder',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=KhaingSoe&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Pioneer Marketing နဲ့ လုပ်ကိုင်ရတာ ကျွန်တော်တို့ရဲ့ business အတွက် game-changer ဖြစ်ခဲ့တယ်။ သူတို့ရဲ့ video production နဲ့ social media strategies တွေက outstanding ပါ။'
    },
    {
      name: 'အေးမြတ်',
      company: 'Local Business Hub',
      role: 'Owner',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=AyeMyat&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Professional၊ creative နဲ့ results-driven ပါ။ Pioneer Marketing က ကျွန်တော်တို့ကို strong online presence တည်ဆောက်ပြီး customer base ကို သိသိသာသာ တိုးလာစေခဲ့တယ်။'
    },
    {
      name: 'သန်းဝင်း',
      company: 'Fashion Forward',
      role: 'Brand Manager',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=ThanWin&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Content creation နဲ့ social media management services တွေက top-notch ပါ။ သူတို့နဲ့ ပူးပေါင်းပြီးကတည်းက engagement rates တွေ dramatically တိုးလာခဲ့တယ်။'
    },
    {
      name: 'ကျော်မြင့်',
      company: 'Startup Ventures',
      role: 'Co-Founder',
      avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=KyawMyint&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
      rating: 5,
      text: 'Pioneer Marketing က ကျွန်တော်တို့ရဲ့ vision ကို နားလည်ပြီး အသက်သွင်းပေးခဲ့တယ်။ သူတို့ရဲ့ attention to detail နဲ့ creative solutions တွေက industry မှာ unmatched ပါ။'
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Premium Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Display */}
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-12 text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-8"
                >
                  <FaQuoteLeft className="text-6xl text-accent mx-auto opacity-30" />
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-semibold italic"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Rating Stars */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    >
                      <FaStar className="text-yellow-400 text-2xl mx-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Customer Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent shadow-xl ring-4 ring-white">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentTestimonial].name)}&background=2563eb&color=ffffff&size=96&bold=true`;
                      }}
                    />
                  </div>
                  <div className="ml-8 text-left">
                    <h4 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 text-lg font-medium">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent hover:text-white group"
            >
              <FaChevronLeft className="text-accent group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent hover:text-white group"
            >
              <FaChevronRight className="text-accent group-hover:text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-8 space-x-3"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Our Success in Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
