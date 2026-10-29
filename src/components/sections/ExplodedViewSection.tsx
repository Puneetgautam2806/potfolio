'use client'

import { motion } from 'framer-motion'
import ExplodedArchitectureCore from '@/components/ui/ExplodedArchitectureCore'
import { Sparkles, Cpu, Layers } from 'lucide-react'

export default function ExplodedViewSection() {
  return (
    <section id="architecture" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] crimson-glow opacity-30 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>// 01 &bull; Engineering Breakdown</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              System Anatomy <br className="hidden md:inline" />
              <span className="text-zinc-500">&amp; Exploded View</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l border-red-500/30 pl-4">
            <span className="text-white font-semibold">Hover or slide cursor over the chassis</span> to deconstruct 
            the production backend into its individual security, routing, compute, caching, and storage layers.
          </div>
        </div>

        {/* The Interactive Exploded View Chassis */}
        <ExplodedArchitectureCore />

        {/* Technical Sub-spec Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          <div className="p-5 rounded-sm bg-[#0c0e15] border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600/60" />
            <div className="flex items-center gap-2 text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>Zero-Lag Concurrency</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Decoupled queue workers process non-critical mutations asynchronously through Redis, maintaining sub-45ms client round-trips.
            </p>
          </div>

          <div className="p-5 rounded-sm bg-[#0c0e15] border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600/60" />
            <div className="flex items-center gap-2 text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Multi-Tenant Sanctum Guards</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Stateful and token-based hybrid session routing securing sensitive administrative operations and consumer endpoints alike.
            </p>
          </div>

          <div className="p-5 rounded-sm bg-[#0c0e15] border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600/60" />
            <div className="flex items-center gap-2 text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Optimized Schema Indices</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Composite B-Tree indices and strictly eager-loaded Eloquent scopes eliminating N+1 queries across multi-thousand vehicle tables.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
