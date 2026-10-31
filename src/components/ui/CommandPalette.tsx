'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Search, Server, Cpu, Database, Award, Mail, Phone, ExternalLink, X, ArrowRight } from 'lucide-react'
import GitHubIcon from '@/components/ui/GitHubIcon'
import LinkedInIcon from '@/components/ui/LinkedInIcon'

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const actions = [
    {
      title: "Launch Live Systems Simulator",
      category: "Interactive Engine",
      icon: Cpu,
      href: "#simulator",
      desc: "Simulate 500k vehicle queries & Redis queue benchmarks"
    },
    {
      title: "Inspect JapaneseCarTrade.com Architecture",
      category: "Case Study",
      icon: Server,
      href: "#work",
      desc: "500+ daily listings, 10k+ MAU, 20+ Sanctum REST APIs"
    },
    {
      title: "View Technical Specifications",
      category: "Telemetry",
      icon: Database,
      href: "#specs",
      desc: "Laravel 10+, MySQL 8+, InnoDB indexing, Horizon queues"
    },
    {
      title: "Academic & Career Roadmap",
      category: "Credentials",
      icon: Award,
      href: "#roadmap",
      desc: "MCA Data Science (Apex Univ) & 3+ years experience"
    },
    {
      title: "Connect via LinkedIn",
      category: "Verified Profile",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/puneet-gautam-ab41b11b4/",
      external: true,
      desc: "linkedin.com/in/puneet-gautam-ab41b11b4"
    },
    {
      title: "Explore GitHub Repositories",
      category: "Source Code",
      icon: GitHubIcon,
      href: "https://github.com/Puneetgautam2806",
      external: true,
      desc: "github.com/Puneetgautam2806"
    },
    {
      title: "Direct WhatsApp Line",
      category: "Instant Comms",
      icon: Phone,
      href: "https://wa.me/917014377316",
      external: true,
      desc: "+91 70143 77316"
    },
    {
      title: "Dispatch Transmission (Contact)",
      category: "Direct Relay",
      icon: Mail,
      href: "#contact",
      desc: "pgpuneet2001@gmail.com"
    }
  ]

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase()) ||
    act.desc.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (href: string, external?: boolean) => {
    setIsOpen(false)
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating Pill Trigger on Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0d1017]/90 hover:bg-[#131722] border border-white/10 hover:border-red-500/50 backdrop-blur-md text-xs font-mono text-zinc-300 shadow-2xl transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#dc2626] animate-pulse" />
          <span className="text-zinc-400 group-hover:text-white transition-colors">Command Palette</span>
          <kbd className="px-2 py-0.5 rounded-xs bg-white/10 text-[10px] text-zinc-400 group-hover:text-red-400">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Modal Backdrop & Palette */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-xl rounded-sm bg-[#0a0d14] border border-white/[0.15] shadow-2xl overflow-hidden font-mono"
            >
              {/* Search input header */}
              <div className="px-4 py-3 bg-[#0d1018] border-b border-white/[0.08] flex items-center gap-3">
                <Search className="w-4 h-4 text-red-500" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or jump to system section..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-zinc-500 font-mono"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Action List */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                {filtered.length === 0 ? (
                  <div className="p-6 text-center text-xs text-zinc-500">
                    No architecture commands match &quot;{query}&quot;
                  </div>
                ) : (
                  filtered.map((act, idx) => {
                    const Icon = act.icon
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(act.href, act.external)}
                        className="w-full flex items-center justify-between p-3 rounded-xs hover:bg-white/[0.05] transition-all text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xs bg-[#121520] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-red-400 group-hover:border-red-500/40 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                              {act.title}
                            </span>
                            <span className="block text-[10px] text-zinc-500">
                              {act.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                          <span className="px-1.5 py-0.5 rounded-xs bg-white/[0.04] uppercase tracking-wider text-[9px]">
                            {act.category}
                          </span>
                          {act.external ? (
                            <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white" />
                          ) : (
                            <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
                          )}
                        </div>
                      </button>
                    )
                  })
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 bg-[#06080b] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
                <span>Navigate with mouse or click</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
