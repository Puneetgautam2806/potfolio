'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      const clickable = target.closest('button, a, input, [role="button"], .cursor-pointer')
      setIsPointer(!!clickable)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Precision Red Ambient Glow */}
      <motion.div
        animate={{
          x: pos.x - 120,
          y: pos.y - 120,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.1 }}
        className="w-[240px] h-[240px] rounded-full bg-red-600/10 blur-[80px]"
      />

      {/* Center Micro Red Dot */}
      <motion.div
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.05 }}
        className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#dc2626]"
      />

      {/* Surrounding Crosshair Ring */}
      <motion.div
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? 'rgba(239, 68, 68, 0.8)' : 'rgba(255, 255, 255, 0.15)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.08 }}
        className="w-8 h-8 rounded-full border border-white/20 transition-colors"
      />
    </div>
  )
}
