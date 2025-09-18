import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Scene3D from './3D/Scene3D'
import FloatingCard from './3D/FloatingCard'
import ParticleBackground from './3D/ParticleBackground'

export default function HeritagePage() {
  const historicalEras = [
    {
      title: "Indus Valley Civilization",
      period: "3300-1300 BCE",
      description: "One of the world's earliest urban civilizations, known for advanced city planning and sophisticated infrastructure",
      image: "/images/indus-valley.jpg",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Mauryan Empire",
      period: "322-185 BCE",
      description: "First major empire to unify most of the Indian subcontinent, renowned for Emperor Ashoka's philosophical governance",
      image: "/images/mauryan-empire.jpg",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Mughal Era",
      period: "1526-1857 CE",
      description: "Period of artistic and architectural brilliance, famous for magnificent monuments like the Taj Mahal",
      image: "/images/mughal-era.jpg",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  const archaeologicalSites = [
    {
      title: "Ajanta Caves",
      description: "Buddhist rock-cut cave monuments featuring exquisite paintings and sculptures",
      image: "/images/ajanta-caves.jpg",
      status: "UNESCO World Heritage Site"
    },
    {
      title: "Hampi",
      description: "Magnificent ruins of the Vijayanagara Empire, showcasing architectural grandeur",
      image: "/images/hampi.jpg",
      status: "UNESCO World Heritage Site"
    },
    {
      title: "Khajuraho Temples",
      description: "Stunning temple complex known for intricate sculptures and architectural brilliance",
      image: "/images/khajuraho.jpg",
      status: "UNESCO World Heritage Site"
    }
  ]

  const intangibleHeritage = [
    {
      title: "Oral Traditions",
      description: "Storytelling, folk tales, and epic narratives passed through generations",
      icon: "📚",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Performing Arts",
      description: "Traditional dance, music, and theatrical forms preserving cultural memories",
      icon: "🎭",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Craftsmanship",
      description: "Traditional crafts, textile arts, and artisanal skills passed through generations",
      icon: "🎨",
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen">
        <Suspense fallback={<div className="h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
          <Scene3D 
            title="HERITAGE" 
            subtitle="Journey through the magnificent layers of India's historical legacy"
            theme="heritage"
          />
        </Suspense>
      </section>

      {/* Historical Eras Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Historical Epochs</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Journey through the magnificent civilizations and dynasties that have shaped India's historical landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {historicalEras.map((era, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${era.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-4 py-2 bg-white/20 text-white text-sm rounded-full font-medium">
                      {era.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{era.title}</h3>
                  <p className="text-white/80 leading-relaxed">{era.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Archaeological Wonders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Archaeological Treasures</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore remarkable sites that showcase India's architectural and historical significance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archaeologicalSites.map((site, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{site.title}</h3>
                    <p className="text-white/80 mb-4">{site.description}</p>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-sm rounded-full border border-amber-500/30">
                      {site.status}
                    </span>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Intangible Heritage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Intangible Cultural Heritage</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Living traditions that transcend physical artifacts and continue to shape cultural identity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intangibleHeritage.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className={`relative p-8 rounded-2xl ${item.color} text-white text-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FloatingCard>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Explore More Heritage
              </h2>
              <p className="text-xl text-white/80">
                Dive deeper into India's rich historical tapestry through our interactive experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(67, 56, 202, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/museum/index.html', '_blank')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold"
                >
                  Virtual Museum Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-lg border border-white/20"
                >
                  Explore Culture
                </motion.button>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  )
}