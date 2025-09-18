import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 1000 }) {
  const mesh = useRef()
  const light = useRef()
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp.set([
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      ], i * 3)
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.05
      mesh.current.rotation.y = time * 0.075
    }
    if (light.current) {
      light.current.position.x = Math.sin(time) * 20
      light.current.position.z = Math.cos(time) * 20
    }
  })

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.5}
          color="#4338ca"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.6}
        />
      </points>
      <pointLight ref={light} intensity={1} color="#6366f1" />
    </group>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30] }}>
        <ambientLight intensity={0.2} />
        <Particles />
      </Canvas>
    </div>
  )
}