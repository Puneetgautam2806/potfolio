'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function HeroOrb() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let w = container.clientWidth
    let h = container.clientHeight

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(w, h)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.z = 4.4

    const group = new THREE.Group()
    scene.add(group)

    const geo = new THREE.IcosahedronGeometry(1.5, 1)
    const wireMat = new THREE.MeshBasicMaterial({ 
      color: 0x3fd0c0, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.6 
    })
    const mesh = new THREE.Mesh(geo, wireMat)
    group.add(mesh)

    const pointsGeo = new THREE.IcosahedronGeometry(1.5, 2)
    const pointsMat = new THREE.PointsMaterial({ 
      color: 0xe3a343, 
      size: 0.045, 
      transparent: true, 
      opacity: 0.9 
    })
    const points = new THREE.Points(pointsGeo, pointsMat)
    group.add(points)

    const colorA = new THREE.Color(0x3fd0c0)
    const colorB = new THREE.Color(0x8b7cf6)
    const colorC = new THREE.Color(0xe3a343)

    const handleResize = () => {
      w = container.clientWidth
      h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    const clock = new THREE.Clock()
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.25
      group.rotation.x = Math.sin(t * 0.2) * 0.2
      
      const mix = (Math.sin(t * 0.3) + 1) / 2
      wireMat.color = colorA.clone().lerp(colorB, mix)
      
      const mix2 = (Math.sin(t * 0.3 + 2) + 1) / 2
      pointsMat.color = colorB.clone().lerp(colorC, mix2)
      
      renderer.render(scene, camera)
    }
    
    // Check for reduced motion preference
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      mesh.rotation.set(0.4, 0.6, 0)
      renderer.render(scene, camera)
    } else {
      animate()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  )
}
