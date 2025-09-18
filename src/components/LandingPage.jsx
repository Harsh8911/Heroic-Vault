import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Scene3D from './3D/Scene3D'
import FloatingCard from './3D/FloatingCard'
import ParticleBackground from './3D/ParticleBackground'

const LandingPage = () => {
  const reasons = [
    {
      title: "Cultural Identity",
      description: "Heritage helps maintain our cultural identity, providing a link between our past, present, and future generations.",
      icon: "🏛️",
    },
    {
      title: "Historical Knowledge",
      description: "Understanding our heritage provides valuable insights into historical practices, wisdom, and societal evolution.",
      icon: "📚",
    },
    {
      title: "Economic Value",
      description: "Cultural heritage tourism contributes significantly to local economies and sustainable development.",
      icon: "💰",
    },
  ]

  const galleryItems = [
    {
      title: "Classical Dance",
      location: "Tamil Nadu",
      category: "Dance Forms",
      description: "Bharatanatyam - A classical dance form known for its grace and expressions",
      image: "/images/classical-dance.jpg",
    },
    {
      title: "Classical Music",
      location: "North India",
      category: "Music",
      description: "Hindustani Classical Music featuring ragas and traditional instruments",
      image: "/images/classical-music.jpg",
    },
    {
      title: "Traditional Attire",
      location: "Pan India",
      category: "Fashion",
      description: "Diverse traditional clothing styles representing different regions",
      image: "/images/traditional-attire.png",
    },
    {
      title: "Indian Cuisine",
      location: "Pan India",
      category: "Food",
      description: "Rich and diverse culinary traditions with unique regional specialties",
      image: "/images/indian-cuisine.jpg",
    },
    {
      title: "Folk Art",
      location: "Rajasthan",
      category: "Art",
      description: "Colorful folk paintings depicting stories of local culture",
      image: "/images/folk-art.png",
    },
    {
      title: "Festival Celebrations",
      location: "Pan India",
      category: "Festivals",
      description: "Vibrant festivals celebrating traditions and cultural unity",
      image: "/images/festivals.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen">
        <Suspense fallback={<div className="h-screen bg-indigo-900 flex items-center justify-center text-white">Loading...</div>}>
          <Scene3D 
            title="HEROIC VAULT" 
            subtitle="Discover India's Rich Cultural Heritage through immersive 3D experiences"
            theme="heritage"
          />
        </Suspense>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(67, 56, 202, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold backdrop-blur-lg border border-white/20"
          >
            Explore Heritage
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-lg border border-white/20"
          >
            Virtual Museum
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">About Heroic Vault</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A digital platform dedicated to preserving, celebrating, and sharing India's rich cultural heritage through cutting-edge 3D technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FloatingCard delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                <p className="text-white/80 text-lg">
                  To bridge the gap between generations by providing immersive, educational experiences 
                  that showcase the depth and diversity of Indian culture through innovative 3D visualization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Vision</h4>
                      <p className="text-white/70">Global platform for cultural heritage</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Community</h4>
                      <p className="text-white/70">Connecting culture enthusiasts worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src="/images/about-heroic-vault.png" 
                  alt="Heroic Vault" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Why Heritage Matters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Heritage Matters
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Understanding the importance of preserving our cultural legacy for future generations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                  <p className="text-white/80">{reason.description}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Cultural Gallery</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Immerse yourself in the rich tapestry of Indian cultural expressions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                      {item.category}
                    </span>
                    <span className="text-white/70 text-sm">{item.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Museum Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FloatingCard delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Virtual Museum Experience
                </h2>
                <p className="text-white/80 text-lg">
                  Explore India's cultural treasures through our immersive 3D virtual museum with cutting-edge technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎥</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">360° Virtual Tours</h4>
                      <p className="text-white/70">Immersive panoramic experiences</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Interactive 3D Models</h4>
                      <p className="text-white/70">Detailed artifact exploration</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎧</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Audio Guides</h4>
                      <p className="text-white/70">Expert narrated experiences</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(67, 56, 202, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/museum/index.html', '_blank')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold backdrop-blur-lg border border-white/20 inline-flex items-center space-x-2"
                >
                  <span>Enter Virtual Museum</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <div className="relative rounded-lg overflow-hidden">
                <video 
                  src="/images/museum.mp4" 
                  className="w-full h-80 object-cover rounded-lg" 
                  autoPlay 
                  muted 
                  loop 
                  controls
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Museum Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Museum Galleries</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, index) => (
              <FloatingCard key={num} delay={index * 0.2}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={`/images/museum${num}.png`}
                    alt={`Museum Gallery ${num}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Heroic Vault</h3>
              <p className="text-white/70">
                Preserving and celebrating India's rich cultural heritage through innovative 3D technology.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/heritage" className="text-white/70 hover:text-white transition-colors">Heritage</a></li>
                <li><a href="/culture" className="text-white/70 hover:text-white transition-colors">Culture</a></li>
                <li><a href="/museum/index.html" className="text-white/70 hover:text-white transition-colors">Virtual Museum</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>Phone: +91 8010545026</li>
                <li>Location: Nashik, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2024 Heroic Vault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage