'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, ArrowUpRight } from 'lucide-react'
import LinkedInIcon from '@/components/ui/LinkedInIcon'
import GitHubIcon from '@/components/ui/GitHubIcon'

export default function CinematicNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Moniker */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-[#12141a] border border-white/10 flex items-center justify-center text-red-500 group-hover:border-red-500/50 group-hover:bg-red-950/20 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">Puneet Gautam</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#dc2626]" />
            </div>
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Backend Architect</span>
          </div>
        </a>

        {/* Minimal Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
          <a href="#architecture" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span className="text-red-500/70 font-semibold">01</span> System
          </a>
          <a href="#work" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span className="text-red-500/70 font-semibold">02</span> Production Work
          </a>
          <a href="#roadmap" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span className="text-red-500/70 font-semibold">03</span> Timeline
          </a>
          <a href="#specs" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span className="text-red-500/70 font-semibold">04</span> Specs
          </a>
          <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span className="text-red-500/70 font-semibold">05</span> Contact
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Puneetgautam2806"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-sm bg-[#0e1117] hover:bg-[#151c2e] border border-white/[0.08] hover:border-white/40 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="GitHub: Puneetgautam2806"
          >
            <GitHubIcon className="w-3.5 h-3.5 text-zinc-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/puneet-gautam-ab41b11b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-sm bg-[#0e1117] hover:bg-[#151c2e] border border-white/[0.08] hover:border-[#0a66c2]/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Connect on LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-[#0a66c2]" />
          </a>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0e1117] border border-white/[0.08] font-mono text-[10px] text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>AVAILABLE FOR HIRE</span>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:shadow-[0_0_25px_rgba(220,38,38,0.55)] cursor-pointer"
          >
            <span>Initiate Comms</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
