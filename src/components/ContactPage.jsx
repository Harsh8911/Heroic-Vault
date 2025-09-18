import React, { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import Scene3D from './3D/Scene3D'
import FloatingCard from './3D/FloatingCard'
import ParticleBackground from './3D/ParticleBackground'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name'
    }
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      title: "Phone",
      value: "+91 8010545026",
      icon: "📞",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Location",
      value: "Nashik, India",
      icon: "📍",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Email",
      value: "info@heroicvault.com",
      icon: "✉️",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen">
        <Suspense fallback={<div className="h-screen bg-rose-900 flex items-center justify-center text-white">Loading...</div>}>
          <Scene3D 
            title="CONTACT" 
            subtitle="Connect with us to explore India's cultural heritage together"
            theme="contact"
          />
        </Suspense>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions about our cultural heritage platform? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FloatingCard delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number (Optional)
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Your Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Write your message here..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-pink-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </motion.button>
              </form>
            </FloatingCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <FloatingCard delay={0.4}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 border border-white/20`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{info.icon}</div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                            <p className="text-white/80">{info.value}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.6}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Learn about our virtual museum experiences",
                      "Collaborate on cultural heritage projects",
                      "Get support for educational initiatives",
                      "Share your cultural stories with us"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        className="flex items-center text-white/80"
                      >
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
              <p className="text-white/80 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}