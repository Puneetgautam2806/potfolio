'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Cpu, Database, Network, Server, Layers, Sliders, CheckCircle2 } from 'lucide-react'

interface LayerData {
  id: string
  num: string
  name: string
  subtitle: string
  spec: string
  details: string
  badge: string
  icon: typeof ShieldCheck
  offsetY: number
  offsetZ: number
  side: 'left' | 'right'
}

const ARCHITECTURE_LAYERS: LayerData[] = [
  {
    id: 'layer-auth',
    num: '01',
    name: 'Sanctum Security Shield',
    subtitle: 'Cryptographic Auth & Edge Gateways',
    spec: 'SHA-256 Bearer Tokens // Zero-Leak Token Expiry',
    details: 'Hardened middleware enforcing strict CORS, IP rate-limiting, and Sanctum cryptographic session guards.',
    badge: 'AES-256 SECURED',
    icon: ShieldCheck,
    offsetY: -130,
    offsetZ: 140,
    side: 'left'
  },
  {
    id: 'layer-api',
    num: '02',
    name: 'RESTful API Orchestration',
    subtitle: 'High-Throughput Controller Pipeline',
    spec: '20+ Production Endpoints // Sub-40ms Response Time',
    details: 'JSON:API formatted serialization, automated request validation, and strict error handling schemas.',
    badge: '< 40ms LATENCY',
    icon: Network,
    offsetY: -65,
    offsetZ: 70,
    side: 'right'
  },
  {
    id: 'layer-engine',
    num: '03',
    name: 'Laravel Compute & Queues',
    subtitle: 'Async Background Daemon Cluster',
    spec: 'PHP 8.2+ JIT // Redis Horizon Workers',
    details: 'Decoupled asynchronous jobs processing vehicle imports, email dispatches, and heavy image transformations.',
    badge: 'ZERO BLOCKING',
    icon: Cpu,
    offsetY: 0,
    offsetZ: 0,
    side: 'left'
  },
  {
    id: 'layer-orm',
    num: '04',
    name: 'Query Optimizer & Cache',
    subtitle: 'Eloquent ORM Performance Layer',
    spec: 'N+1 Elimination // Eager Loading & In-Memory Redis',
    details: 'Heavily indexed query pipelines, custom Eloquent scopes, and smart Redis key invalidation protocols.',
    badge: '100% EAGER LOAD',
    icon: Server,
    offsetY: 65,
    offsetZ: -70,
    side: 'right'
  },
  {
    id: 'layer-db',
    num: '05',
    name: 'MySQL Sharded Storage',
    subtitle: 'High-Concurrency Database Matrix',
    spec: 'InnoDB Engine // 500+ Daily Ingestions',
    details: 'Normalized relational schemas, ACID-compliant transactions, and high-volume automotive listing queries.',
    badge: '500+ INGEST/DAY',
    icon: Database,
    offsetY: 130,
    offsetZ: -140,
    side: 'left'
  }
]

export default function ExplodedArchitectureCore() {
  const [isHovered, setIsHovered] = useState(false)
  const [scrubValue, setScrubValue] = useState<number | null>(null)
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  // Progress is either driven by hover (0 to 1) or by manual scrub slider
  const progress = scrubValue !== null ? scrubValue : (isHovered ? 1 : 0)
  const isExploded = progress > 0.05

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Top Telemetry & Exploded State Indicator */}
      <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08] font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-zinc-400">
            <span className={`w-2 h-2 rounded-full ${isExploded ? 'bg-red-500 shadow-[0_0_8px_#dc2626]' : 'bg-emerald-500'} transition-colors`} />
            <span className="uppercase text-white font-semibold">
              {isExploded ? 'ARCHITECTURE: EXPLODED VIEW' : 'ARCHITECTURE: MONOLITHIC CORE'}
            </span>
          </span>
          <span className="hidden sm:inline text-zinc-600">//</span>
          <span className="hidden sm:inline text-zinc-500">HOVER OR DRAG SLIDER TO DECONSTRUCT</span>
        </div>

        {/* Manual Scrub Control */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-zinc-500 uppercase flex items-center gap-1.5">
            <Sliders className="w-3 h-3 text-red-500" />
            <span>Separation:</span>
          </span>
          <div className="flex items-center gap-2">
            <input 
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={progress}
              onChange={(e) => setScrubValue(parseFloat(e.target.value))}
              className="w-24 md:w-32 accent-red-600 cursor-pointer"
            />
            <span className="text-zinc-300 w-8 text-right font-mono text-[10px]">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* The 3D Stage Container */}
      <div 
        onMouseEnter={() => {
          if (scrubValue === null) setIsHovered(true)
        }}
        onMouseLeave={() => {
          if (scrubValue === null) setIsHovered(false)
        }}
        className="w-full min-h-[520px] md:min-h-[580px] relative rounded-sm bg-[#090b10] border border-white/[0.08] p-6 md:p-10 flex items-center justify-center overflow-hidden group cursor-crosshair"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 crimson-glow opacity-40 pointer-events-none" />

        {/* Corner HUD Markers */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-600 tracking-wider">
          ENGINE: LARAVEL_11.X // PHP_8.2
        </div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-red-500/80 tracking-wider flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
          <span>ISOMETRIC 3D CAD DECONSTRUCTION</span>
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-[9px] text-zinc-600">
          CHASSIS: TITANIUM_CHARCOAL
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-600">
          COORD: [Z-INDEX EXPLODED STACK]
        </div>

        {/* Central 3D Perspective Stage */}
        <div 
          className="relative w-full max-w-[580px] h-[360px] flex items-center justify-center"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main 3D Rotatable Stack */}
          <motion.div
            animate={{
              rotateX: isExploded ? 24 : 12,
              rotateY: isExploded ? -20 : -10,
              rotateZ: isExploded ? 6 : 2,
            }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="relative w-[280px] md:w-[340px] h-[170px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* The 5 Stacked Layers */}
            {ARCHITECTURE_LAYERS.map((layer, idx) => {
              const currentY = layer.offsetY * progress
              const currentZ = layer.offsetZ * progress
              const Icon = layer.icon
              const isSelected = activeLayer === layer.id

              return (
                <motion.div
                  key={layer.id}
                  onClick={() => setActiveLayer(isSelected ? null : layer.id)}
                  animate={{
                    y: currentY,
                    z: currentZ,
                    opacity: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className={`absolute inset-0 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'border-red-500 bg-[#161a24] shadow-[0_0_30px_rgba(220,38,38,0.45)]' 
                      : 'border-white/[0.12] bg-[#0d1017]/95 hover:border-red-500/60 hover:bg-[#12151f]'
                  } shadow-2xl backdrop-blur-sm`}
                  style={{
                    transformStyle: 'preserve-3d',
                    zIndex: 10 - idx,
                  }}
                >
                  {/* Layer Surface Details */}
                  <div className="w-full h-full p-4 flex flex-col justify-between relative overflow-hidden">
                    {/* Glowing crimson accent bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-red-950" />
                    
                    {/* Top Row: Index & Spec Tag */}
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <div className="flex items-center gap-2 pl-2">
                        <Icon className="w-3.5 h-3.5 text-red-500" />
                        <span className="font-bold text-white uppercase tracking-wider">{layer.name}</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-xs bg-red-950/40 text-red-400 border border-red-500/30 text-[9px]">
                        {layer.badge}
                      </span>
                    </div>

                    {/* Middle Graphic Architecture Tracks */}
                    <div className="pl-2 flex items-center justify-between my-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-xs bg-white/20" />
                        <div className="w-12 h-1 bg-white/10 rounded-xs" />
                        <div className="w-6 h-1 bg-red-500/40 rounded-xs" />
                      </div>
                      <span className="font-mono text-[9px] text-zinc-500">{layer.spec.split('//')[0]}</span>
                    </div>

                    {/* Bottom Status Row */}
                    <div className="pl-2 flex items-center justify-between font-mono text-[9px] text-zinc-400 border-t border-white/[0.06] pt-1.5">
                      <span>LAYER {layer.num}</span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        SYNCED
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Floating Technical HUD Callouts (Appear when exploded) */}
          <AnimatePresence>
            {isExploded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none hidden md:block"
              >
                {/* Left Side Callouts */}
                <div className="absolute left-0 top-6 max-w-[210px] text-left">
                  <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>01 // Sanctum Security</span>
                  </div>
                  <p className="font-mono text-[10px] text-zinc-400 mt-1 leading-tight">
                    Cryptographic token validation & sub-millisecond edge guards.
                  </p>
                  <div className="w-16 h-[1px] bg-red-500/40 mt-2" />
                </div>

                <div className="absolute left-0 bottom-8 max-w-[210px] text-left">
                  <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>05 // MySQL Sharded</span>
                  </div>
                  <p className="font-mono text-[10px] text-zinc-400 mt-1 leading-tight">
                    Optimized query indices handling 500+ daily vehicle imports.
                  </p>
                  <div className="w-16 h-[1px] bg-red-500/40 mt-2" />
                </div>

                {/* Right Side Callouts */}
                <div className="absolute right-0 top-16 max-w-[210px] text-right">
                  <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold flex items-center justify-end gap-1.5">
                    <span>02 // RESTful Pipeline</span>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>
                  <p className="font-mono text-[10px] text-zinc-400 mt-1 leading-tight">
                    20+ endpoints with standard DTO serialization schemas.
                  </p>
                  <div className="w-16 h-[1px] bg-red-500/40 mt-2 ml-auto" />
                </div>

                <div className="absolute right-0 bottom-16 max-w-[210px] text-right">
                  <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold flex items-center justify-end gap-1.5">
                    <span>03 // Redis Horizon</span>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>
                  <p className="font-mono text-[10px] text-zinc-400 mt-1 leading-tight">
                    Decoupled worker queues for zero-lag background processing.
                  </p>
                  <div className="w-16 h-[1px] bg-red-500/40 mt-2 ml-auto" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ambient Bottom Monolith Reflection */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 bg-red-600/10 blur-xl rounded-full pointer-events-none" />
      </div>

      {/* Selected Layer Micro-Inspection Panel */}
      <div className="w-full mt-4 p-4 rounded-sm bg-[#0c0e14] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-red-500" />
          <div>
            <span className="text-zinc-500 text-[10px] uppercase">Inspection Target: </span>
            <span className="text-white font-semibold">
              {activeLayer 
                ? ARCHITECTURE_LAYERS.find(l => l.id === activeLayer)?.name 
                : 'All 5 Structural Layers Active'}
            </span>
          </div>
        </div>

        <div className="text-zinc-400 text-[11px] max-w-xl">
          {activeLayer 
            ? ARCHITECTURE_LAYERS.find(l => l.id === activeLayer)?.details
            : 'Hover or slide cursor over the chassis to trigger the commercial-grade exploded separation. Click any tier for telemetry.'}
        </div>

        <button 
          onClick={() => {
            setScrubValue(null)
            setIsHovered(false)
            setActiveLayer(null)
          }}
          className="px-3 py-1 text-[10px] text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
        >
          Reset Core
        </button>
      </div>
    </div>
  )
}
