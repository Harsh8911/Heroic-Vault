import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFrame } from '@react-three/fiber'

export default function FloatingCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}