'use client'

import { motion } from "framer-motion"

const logos = ["Laravel", "PHP 8+", "MySQL", "REST API", "Python"]

export default function About() {
  return (
    <>
      {/* Logo Marquee Strip */}
      <section className="w-full bg-white border-t border-b border-gray-200 py-8 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-24">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap shrink-0">
            TRUSTED BY<br/>LEADING BRANDS
          </div>
          <div className="flex items-center gap-10 md:gap-16 flex-wrap justify-center md:justify-start">
            {logos.map((logo, i) => (
              <span key={i} className="text-gray-300 font-black uppercase tracking-tight text-sm md:text-base whitespace-nowrap">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About / Impact Section */}
      <section id="about" className="w-full bg-white text-[#111] py-24 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Top tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 mb-12"
          >
            <span className="text-[#F05537]">❂</span> BACKEND JOURNEYS.
          </motion.div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

            {/* LEFT: Headline + Stats */}
            <div className="min-w-0">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 break-words"
              >
                <span className="text-[#111]">MY IMPACT</span><br/>
                <span className="text-[#111]">THROUGH </span><span className="text-gray-300">BACKEND</span><br/>
                <span className="text-gray-300">ENGINEERING</span>
              </motion.h2>

              {/* Stat grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-200 border border-gray-200 max-w-xl"
              >
                {[
                  { num: "3+", label: "Years\nExperience" },
                  { num: "20+", label: "REST APIs\nShipped" },
                  { num: "10k+", label: "Monthly\nActive Users" },
                  { num: "MCA", label: "Data Science\nSpec." },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col gap-1 p-5">
                    <span className="text-3xl font-black tracking-tighter">{s.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-pre-line leading-tight">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: Photo + Bio + Badge */}
            <div className="flex flex-col gap-8">
              {/* Photo with crosshair corners */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/puneet-portrait.png"
                  alt="Puneet Gautam"
                  className="w-full h-full object-cover object-top"
                />
                {["-top-3 -left-3", "-top-3 -right-3", "-bottom-3 -left-3", "-bottom-3 -right-3"].map((pos, i) => (
                  <span key={i} className={`absolute ${pos} text-gray-400 text-lg font-bold leading-none z-10`}>+</span>
                ))}
              </motion.div>

              {/* Bio text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm font-medium text-gray-500 leading-relaxed"
              >
                I'm a backend developer with 3+ years of production experience building scalable web applications in PHP and Laravel. I'm completing my MCA with a Data Science specialization at Apex University, Jaipur.
              </motion.p>

              {/* Availability badge */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 shrink-0 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
