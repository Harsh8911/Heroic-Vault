import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Scene3D from './3D/Scene3D'
import FloatingCard from './3D/FloatingCard'
import ParticleBackground from './3D/ParticleBackground'

export default function CulturePage() {
  const culturalDiversity = [
    {
      title: "Linguistic Richness",
      description: "22 official languages and over 1,600 mother tongues, showcasing India's incredible linguistic diversity",
      icon: "🗣️",
      stats: "1,600+ Languages"
    },
    {
      title: "Religious Harmony",
      description: "Birthplace of multiple religions including Hinduism, Buddhism, Sikhism, and Jainism",
      icon: "🕉️",
      stats: "Multiple Faiths"
    },
    {
      title: "Culinary Traditions",
      description: "A rich tapestry of flavors spanning regions, with unique cuisines that tell stories of local cultures",
      icon: "🍛",
      stats: "28+ Regional Cuisines"
    }
  ]

  const culturalDomains = [
    {
      title: "Traditional Art Forms",
      items: ["Madhubani Painting", "Warli Art", "Phad Painting", "Miniature Painting"],
      image: "/images/art-forms.png",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Classical Dance",
      items: ["Bharatanatyam", "Kathak", "Odissi", "Manipuri"],
      image: "/images/dance-forms.png",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Music Traditions",
      items: ["Hindustani Classical", "Carnatic Music", "Folk Music", "Devotional Music"],
      image: "/images/music-forms.png",
      color: "from-green-500 to-teal-600"
    }
  ]

  const festivals = [
    {
      title: "Diwali",
      description: "Festival of Lights, symbolizing the victory of good over evil",
      image: "/images/diwali.png",
      season: "Autumn",
      significance: "Light over Darkness"
    },
    {
      title: "Holi",
      description: "Colorful celebration of spring and the triumph of good",
      image: "/images/holi.png",
      season: "Spring",
      significance: "Unity in Diversity"
    },
    {
      title: "Pongal",
      description: "Harvest festival celebrating agricultural prosperity",
      image: "/images/pongal.png",
      season: "Winter",
      significance: "Gratitude to Nature"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen">
        <Suspense fallback={<div className="h-screen bg-emerald-900 flex items-center justify-center text-white">Loading...</div>}>
          <Scene3D 
            title="CULTURE" 
            subtitle="Discover India's vibrant cultural mosaic through immersive experiences"
            theme="culture"
          />
        </Suspense>
      </section>

      {/* Cultural Diversity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Unity in Diversity</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              India is a kaleidoscope of cultures, where diverse traditions, languages, and customs coexist harmoniously
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalDiversity.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{item.description}</p>
                  <div className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                    {item.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Domains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Domains of Cultural Expression</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the diverse forms of artistic and cultural expression that define India's creative heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${domain.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{domain.title}</h3>
                  <ul className="space-y-2">
                    {domain.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                        className="flex items-center text-white/80"
                      >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Festivals Across India</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Celebrations that reflect the spirit of unity, joy, and cultural significance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={festival.image}
                      alt={festival.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                        {festival.season}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{festival.title}</h3>
                    <p className="text-white/80 mb-4">{festival.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-300 font-medium">
                        {festival.significance}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-300 border border-emerald-500/30"
                      >
                        →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Culture Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Cultural Regions</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the unique cultural characteristics of different regions across India
            </p>
          </motion.div>

          <FloatingCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['North', 'South', 'East', 'West'].map((region, index) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 cursor-pointer"
                >
                  <div className="text-4xl mb-3">🗺️</div>
                  <h3 className="text-xl font-bold text-white">{region} India</h3>
                  <p className="text-white/70 text-sm mt-2">Unique traditions</p>
                </motion.div>
              ))}
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FloatingCard>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Experience Living Culture
              </h2>
              <p className="text-xl text-white/80">
                Immerse yourself in India's vibrant cultural traditions through our interactive experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/museum/index.html', '_blank')}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold"
                >
                  Virtual Cultural Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-lg border border-white/20"
                >
                  Explore Heritage
                </motion.button>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  )
}