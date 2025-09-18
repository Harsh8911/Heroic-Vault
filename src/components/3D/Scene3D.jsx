import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Center, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, color, geometry }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <primitive object={geometry} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  )
}

function AnimatedSphere({ position, color }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  )
}

export default function Scene3D({ title, subtitle, theme = "heritage" }) {
  const geometries = useMemo(() => [
    new THREE.OctahedronGeometry(0.8),
    new THREE.TetrahedronGeometry(0.9),
    new THREE.IcosahedronGeometry(0.7),
    new THREE.DodecahedronGeometry(0.6),
  ], [])

  const colors = {
    heritage: ['#4338ca', '#6366f1', '#8b5cf6', '#a855f7'],
    culture: ['#059669', '#10b981', '#34d399', '#6ee7b7'],
    contact: ['#dc2626', '#ef4444', '#f87171', '#fca5a5']
  }

  const themeColors = colors[theme] || colors.heritage

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />
        
        <Sparkles count={100} scale={20} size={2} speed={0.4} />
        
        {geometries.map((geometry, index) => (
          <FloatingGeometry
            key={index}
            position={[
              (index - 1.5) * 3,
              Math.sin(index) * 2,
              -2 - index
            ]}
            color={themeColors[index]}
            geometry={geometry}
          />
        ))}
        
        <AnimatedSphere position={[-4, 2, -1]} color={themeColors[0]} />
        <AnimatedSphere position={[4, -2, -1]} color={themeColors[1]} />
        
        <Center>
          <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.8}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {title}
              <meshStandardMaterial color={themeColors[0]} metalness={0.5} roughness={0.3} />
            </Text3D>
          </Float>
        </Center>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}