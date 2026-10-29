'use client'

import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Terminal, Database, Shield, ArrowRight, Server, Check, Play, Sparkles } from 'lucide-react'
import LinkedInIcon from '@/components/ui/LinkedInIcon'
import GitHubIcon from '@/components/ui/GitHubIcon'

export default function CinematicHero() {
  // 3D Tilt for portrait
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Interactive Live Terminal Commands
  const commands = [
    {
      cmd: "php artisan route:list --path=api/v2",
      output: "+--------+--------------------------+------------------------------+\n| Method | URI                      | Action                       |\n+--------+--------------------------+------------------------------+\n| GET    | api/v2/vehicles/search   | VehicleController@search     |\n| POST   | api/v2/auth/sanctum      | AuthController@generateToken |\n| POST   | api/v2/orders/checkout   | OrderController@processOrder |\n+--------+--------------------------+------------------------------+"
    },
    {
      cmd: "php artisan queue:work --queue=high,default",
      output: "[2026-10-30 00:32:04] Processing: App\\Jobs\\IngestVehicleListing\n[2026-10-30 00:32:04] Processed:  App\\Jobs\\IngestVehicleListing (34ms)\n[2026-10-30 00:32:05] Processing: App\\Jobs\\ProcessImageThumbnails\n[2026-10-30 00:32:05] Processed:  App\\Jobs\\ProcessImageThumbnails (48ms)"
    },
    {
      cmd: "SELECT count(*) FROM vehicle_listings WHERE status='live';",
      output: "+----------+\n| count(*) |\n+----------+\n| 14,892   |  [500+ ingested today via automated cron worker]\n+----------+"
    }
  ]
  const [activeCmdIdx, setActiveCmdIdx] = useState(0)

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#08080a]">
      {/* Background Cinematic Atmospherics */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] crimson-glow opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/15 blur-[120px] pointer-events-none" />

      {/* Subtle sweeping horizontal laser line */}
      <motion.div 
        animate={{ y: [0, 800, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/25 to-transparent pointer-events-none"
      />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-[#0e1117] border border-white/[0.08] mb-8 font-mono text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#dc2626] animate-pulse" />
          <span className="text-zinc-300 tracking-wider uppercase font-semibold">PRODUCTION BACKEND ARCHITECTURE</span>
          <span className="text-zinc-600">//</span>
          <span className="text-red-400 font-mono">LARAVEL &bull; REST APIs &bull; MYSQL</span>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Terminal (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-white leading-[0.95]"
            >
              Puneet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Gautam
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex items-center gap-3 font-mono text-xs md:text-sm text-red-500 font-semibold uppercase tracking-widest"
            >
              <span className="h-[1px] w-8 bg-red-500" />
              <span>Senior Backend Developer &amp; System Architect</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl"
            >
              Architecting resilient, production-grade backends in <strong className="text-white font-semibold">PHP &amp; Laravel</strong>. 
              Specializing in low-latency RESTful APIs, high-throughput automotive marketplaces processing 
              <span className="text-white"> 500+ daily vehicle listings</span>, secure Sanctum authentication, and finely tuned MySQL schemas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#architecture"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">Deconstruct Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-[#12151f] hover:bg-[#181d2a] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
              >
                <Server className="w-4 h-4 text-zinc-400" />
                <span>Production Systems</span>
              </a>

              <a
                href="https://github.com/Puneetgautam2806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm bg-[#12141a] hover:bg-[#1a1d26] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-zinc-200" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/puneet-gautam-ab41b11b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm bg-[#0e1320] hover:bg-[#151c30] border border-[#0a66c2]/30 hover:border-[#0a66c2] text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-white font-mono text-xs tracking-wider transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span>pgpuneet2001@gmail.com</span>
              </a>
            </motion.div>

            {/* Interactive Live Artisan Console Simulator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 rounded-sm bg-[#07090e] border border-white/[0.09] overflow-hidden max-w-2xl shadow-xl"
            >
              {/* Tab Header */}
              <div className="px-3.5 py-2 bg-[#0c0f16] border-b border-white/[0.06] flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-500 ml-1">backend-terminal // live commands</span>
                </div>
                <div className="flex items-center gap-1.5 text-red-400">
                  <Play className="w-2.5 h-2.5 fill-red-400" />
                  <span>CLICK TAB TO RUN</span>
                </div>
              </div>

              {/* Command Tabs */}
              <div className="flex border-b border-white/[0.06] bg-[#090b10] overflow-x-auto text-[10px] font-mono">
                {commands.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCmdIdx(i)}
                    className={`px-3 py-1.5 border-r border-white/[0.06] whitespace-nowrap transition-colors cursor-pointer ${
                      activeCmdIdx === i
                        ? 'bg-[#141824] text-red-400 border-b-2 border-b-red-500 font-bold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    $ {c.cmd.split(' ')[1] || c.cmd.slice(0, 14)}
                  </button>
                ))}
              </div>

              {/* Console Body */}
              <div className="p-3.5 font-mono text-[11px] leading-relaxed text-zinc-300">
                <div className="text-red-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span className="text-zinc-500">puneet@core-server:~$</span> {commands[activeCmdIdx].cmd}
                </div>
                <pre className="text-zinc-400 text-[10px] leading-relaxed whitespace-pre font-mono overflow-x-auto">
                  {commands[activeCmdIdx].output}
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Studio Cutout & 3D Interactive Tilt Card (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] transition-transform duration-100 ease-out cursor-grab active:cursor-grabbing"
            >
              {/* Cinematic Red Studio Glow Behind Cutout */}
              <div className="absolute inset-0 crimson-glow opacity-80 blur-2xl pointer-events-none" />

              {/* Main Executive Frame */}
              <div className="relative z-10 rounded-sm bg-gradient-to-b from-[#161a26] via-[#0d1017] to-[#07090e] border border-white/[0.14] p-3 shadow-2xl overflow-hidden group">
                {/* Tech Grid & Studio Backdrop */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs bg-[#0b0d13] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/puneet-pro.png"
                    alt="Puneet Gautam — Senior Backend Developer & System Architect"
                    className="relative z-10 w-full h-full object-cover object-top select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Top HUD Camera Overlay */}
                  <div className="absolute top-2.5 left-3 right-3 z-20 flex items-center justify-between font-mono text-[8px] text-zinc-400/80 pointer-events-none">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span>REC // 4K 60FPS</span>
                    </span>
                    <span>STUDIO MASTER &bull; 85MM</span>
                  </div>

                  {/* Cinematic Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
                </div>

                {/* Floating Telemetry Callout Badge 1 (Top Left) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-6 -left-3 md:-left-6 z-30 px-3 py-2 rounded-sm bg-[#0c0f16]/95 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-2.5 font-mono cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-xs bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white uppercase">500+ LISTINGS / DAY</span>
                    <span className="block text-[9px] text-zinc-500 uppercase tracking-widest">JapaneseCarTrade.com</span>
                  </div>
                </motion.div>

                {/* Floating Telemetry Callout Badge 2 (Bottom Right) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-10 -right-2 md:-right-6 z-30 px-3 py-2 rounded-sm bg-[#0c0f16]/95 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-2.5 font-mono cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-xs bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white uppercase">20+ REST APIs</span>
                    <span className="block text-[9px] text-zinc-500 uppercase tracking-widest">Sanctum Token Guards</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Telemetry Ticker Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono"
        >
          <div className="flex flex-col group p-2 rounded-xs hover:bg-white/[0.02] transition-colors">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">// SYSTEM METRIC</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white font-mono">99.98%</span>
              <span className="text-[10px] text-emerald-400 uppercase font-semibold">Uptime</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">High-Availability Platforms</span>
          </div>

          <div className="flex flex-col group p-2 rounded-xs hover:bg-white/[0.02] transition-colors">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">// QUERY LATENCY</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white font-mono">&lt; 42ms</span>
              <span className="text-[10px] text-red-400 uppercase font-semibold">Indexed</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">Optimized Eloquent Queries</span>
          </div>

          <div className="flex flex-col group p-2 rounded-xs hover:bg-white/[0.02] transition-colors">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">// ACTIVE USERS</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white font-mono">10,000+</span>
              <span className="text-[10px] text-zinc-400 uppercase font-semibold">Monthly</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">International Auto Marketplace</span>
          </div>

          <div className="flex flex-col group p-2 rounded-xs hover:bg-white/[0.02] transition-colors">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">// CODE INTEGRITY</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white font-mono">PSR-12</span>
              <span className="text-[10px] text-red-500 uppercase font-semibold">Strict</span>
            </div>
            <span className="text-[11px] text-zinc-400 mt-0.5">Clean Architecture &amp; Jobs</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
