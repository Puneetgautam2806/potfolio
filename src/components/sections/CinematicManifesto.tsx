'use client'

import { motion } from 'framer-motion'
import { Activity, Database, Cpu, Layers, Zap, Award, ArrowUpRight, GraduationCap } from 'lucide-react'

const PRODUCTION_METRICS = [
  {
    num: "500+",
    label: "Daily Listings Ingested",
    sub: "Automated ingestion pipeline with batch validation",
    icon: Layers,
    color: "from-red-500 to-amber-500",
    glow: "rgba(220, 38, 38, 0.25)"
  },
  {
    num: "10,000+",
    label: "Monthly Active Users",
    sub: "High-traffic international marketplace throughput",
    icon: Activity,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.25)"
  },
  {
    num: "40%",
    label: "Query Latency Reduction",
    sub: "MySQL composite indexing & eager-loaded Eloquent scopes",
    icon: Database,
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(59, 130, 246, 0.25)"
  },
  {
    num: "1,000+",
    label: "Async Jobs / Day",
    sub: "Laravel Horizon & Redis queues handling mail/webhooks",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.25)"
  }
]

export default function CinematicManifesto() {
  return (
    <section id="manifesto" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-950/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-blue-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-6">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span>// 01 &bull; Engineering Manifesto &amp; Production Scale</span>
        </div>

        {/* Hero-Scale Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.98]">
              While others write syntax, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-zinc-200 to-zinc-400">
                I architect throughput.
              </span>
            </h2>
            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-red-400 uppercase tracking-widest">
              <span className="h-[1px] w-6 bg-red-500" />
              <span>PHP LARAVEL DEVELOPER &bull; DATA SCIENCE MCA &bull; 3+ YEARS HIGH-TRAFFIC ENGINEERING</span>
            </div>
          </div>

          <div className="lg:col-span-4 font-mono text-xs text-zinc-400 leading-relaxed border-l-2 border-red-500/40 pl-6 space-y-3">
            <p className="text-zinc-300">
              Most web platforms fail when concurrent queries saturate the database or background jobs choke server memory.
            </p>
            <p>
              I architect resilient backends that survive high concurrency. At <strong className="text-white">JapaneseCarTrade.com</strong>, I modernized legacy PHP systems into high-performance Laravel micro-architectures, tuned MySQL execution by 40%, and deployed asynchronous queue workers serving 10,000+ global users.
            </p>
          </div>
        </div>

        {/* Real-World Production Scale Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono mb-16">
          {PRODUCTION_METRICS.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.25)' }}
                className="relative p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] transition-all group overflow-hidden"
              >
                {/* Subtle top indicator beam */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${metric.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">METRIC_0{i + 1}</span>
                  <div className="p-1.5 rounded-xs bg-white/[0.04] text-zinc-400 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight mb-1 group-hover:text-red-400 transition-colors">
                  {metric.num}
                </div>

                <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-2 font-sans">
                  {metric.label}
                </div>

                <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                  {metric.sub}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-zinc-500">
                  <span>AUDITED</span>
                  <span className="text-emerald-400 font-semibold">VERIFIED PRODUCTION</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Academic Rigor Meets Production Engineering Card */}
        <div className="p-8 rounded-sm bg-[#0a0d14] border border-white/[0.1] relative overflow-hidden font-mono">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-950/10 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs text-red-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span className="tracking-widest uppercase">Academic Rigor &bull; MCA in Data Science</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase text-white font-sans tracking-tight">
                Computer Science Foundations Backed by Production Mastery
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                Currently pursuing Master of Computer Applications (Data Science) at Apex University, Jaipur. Combining theoretical mastery of computational algorithms, algorithmic schema normalization, and Python data structures with 3+ years of commercial battle-tested Laravel engineering.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#simulator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xs bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.35)]"
              >
                <span>Launch Query Simulator</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xs bg-[#121520] hover:bg-[#181d2a] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>Inspect Flagship Case Study</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
