'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, Database, Shield, Server, GraduationCap, Code2, Gauge } from 'lucide-react'

export default function CinematicSpecs() {
  const specs = [
    {
      category: "01 // BACKEND ARCHITECTURE",
      icon: Cpu,
      items: [
        { name: "Primary Framework", value: "Laravel 10.x / 11.x (PHP 8.2+)" },
        { name: "Architecture Style", value: "RESTful, Service-Repository, Clean DTOs" },
        { name: "Authentication", value: "Laravel Sanctum, JWT, Stateful Session Guards" },
        { name: "Async Processing", value: "Database & Redis Queues, Horizon Daemons" },
        { name: "Validation & Errors", value: "FormRequests, Custom Exceptions, JSON:API Specs" }
      ]
    },
    {
      category: "02 // DATA STORAGE & PERFORMANCE",
      icon: Database,
      items: [
        { name: "Relational Database", value: "MySQL 8.0+ (InnoDB Engine)" },
        { name: "ORM & Optimization", value: "Eloquent ORM, Eager Loading, Index Tuning" },
        { name: "Query Latency Target", value: "< 45ms Across 500k+ Records" },
        { name: "Data Modeling", value: "Normalized Schemas, Foreign Constraints, Soft Deletes" },
        { name: "Analytics & Scripts", value: "Python, Pandas, MCA Data Science Spec" }
      ]
    },
    {
      category: "03 // DEPLOYMENT & PROTOCOLS",
      icon: Server,
      items: [
        { name: "Web Servers", value: "Nginx, Apache HTTP Server" },
        { name: "Operating System", value: "Ubuntu Linux / Debian Environments" },
        { name: "API Tooling", value: "Postman API Collections & Documentation" },
        { name: "Version Control", value: "Git, GitHub Workflows, Feature Branching" },
        { name: "Third-Party Integrations", value: "Stripe, PayPal, Custom Financial Webhooks" }
      ]
    }
  ]

  return (
    <section id="specs" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>// 04 &bull; Engineering Data Sheet</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Technical Specifications &amp; <br />
              <span className="text-zinc-500">System Capabilities</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l border-red-500/30 pl-4">
            Audited engineering parameters, query speed targets, and stack telemetry across all deployed services.
          </p>
        </div>

        {/* 3-Column Spec Sheets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono">
          {specs.map((group, idx) => {
            const Icon = group.icon
            return (
              <div 
                key={idx}
                className="rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-red-500 font-semibold mb-6 pb-3 border-b border-white/[0.06]">
                    <span className="tracking-wider">{group.category}</span>
                    <Icon className="w-4 h-4 text-red-500" />
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item, i) => (
                      <div key={i} className="flex flex-col pb-3 border-b border-white/[0.04] last:border-b-0 last:pb-0">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.name}</span>
                        <span className="text-xs text-white font-medium mt-0.5">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
                  <span>TELEMETRY: VERIFIED</span>
                  <span className="text-emerald-400">STATUS: PASS</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Academic Foundation Callout Strip */}
        <div className="mt-8 p-6 rounded-sm bg-[#0c0e15] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-white uppercase tracking-wider">
                Master of Computer Applications (MCA) &bull; Data Science Specialization
              </span>
              <span className="block text-[11px] text-zinc-500 font-normal">
                Advanced algorithms, computational data models, Python/Pandas data pipelines, and relational schema normalization.
              </span>
            </div>
          </div>

          <div className="text-[10px] text-red-400 px-3 py-1 rounded-xs bg-red-950/40 border border-red-500/30 uppercase tracking-widest shrink-0">
            ADVANCED DEGREE
          </div>
        </div>
      </div>
    </section>
  )
}
