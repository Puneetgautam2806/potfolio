'use client'

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

const services = [
  {
    num: "001",
    title: "Backend Development",
    titleColor: "text-[#F05537]",
    desc: "Building scalable, production-grade backends in PHP & Laravel with clean architecture, queues, jobs, and efficient database design.",
    tags: ["PHP 8+", "Laravel", "RESTful APIs", "Sanctum Auth", "Queue & Jobs"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80"
  },
  {
    num: "002",
    title: "API Design & Integration",
    titleColor: "text-[#111]",
    desc: "Designing robust API ecosystems built for speed, security, and real-world production use — including third-party payment and logistics integrations.",
    tags: ["API Documentation", "Postman", "Payment Gateways", "Third-party APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
  },
  {
    num: "003",
    title: "Database Architecture",
    titleColor: "text-[#111]",
    desc: "Designing normalized schemas and writing heavily optimized queries to ensure your data scales securely and performs under pressure.",
    tags: ["MySQL", "Eloquent ORM", "Optimization", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80"
  }
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="services" ref={ref} className="w-full bg-white text-[#111] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 mb-8"
          >
            <span className="text-[#F05537]">❂</span> MY SERVICES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] uppercase break-words"
          >
            <span className="text-[#111]">POWERFUL</span><br/>
            <span className="text-[#111]">BACKEND </span><span className="text-gray-400">SERVICES</span><br/>
            <span className="text-gray-400">FOR YOUR BRAND</span>
          </motion.h2>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Skills quick reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-t-0 border-gray-200 mb-0"
        >
          {[
            { key: "backend_core", val: "PHP 8+, Laravel, REST APIs" },
            { key: "database_orm", val: "MySQL, Eloquent ORM, Query Optimization" },
            { key: "architecture", val: "MVC, SOLID, Queues, Jobs" },
            { key: "frontend", val: "JavaScript, jQuery, AJAX, HTML/CSS" },
            { key: "tools", val: "Git, Postman, Linux, Composer" },
            { key: "learning", val: "Python, Data Science (MCA Spec)" },
          ].map((s, i) => (
            <div key={i} className="p-6 border-r border-b border-gray-200 last:border-r-0">
              <span className="block text-[10px] font-bold text-[#F05537] uppercase tracking-widest mb-2 font-mono">{s.key}</span>
              <span className="text-sm text-gray-500 font-mono">{s.val}</span>
            </div>
          ))}
        </motion.div>

        {/* Service list */}
        <div className="relative">
          {/* Faint background line */}
          <div className="absolute left-[5px] top-[54px] bottom-[54px] w-[2px] bg-gray-200 hidden md:block" />
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[5px] top-[54px] bottom-[54px] w-[2px] bg-[#F05537] origin-top hidden md:block"
            style={{ scaleY }}
          />

          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-16 py-12 border-b border-gray-200 group relative z-10"
            >
              {/* Left: number + content */}
              <div className="flex gap-8 flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 w-20 pt-1 bg-white md:bg-transparent">
                  {/* Timeline dot replacing the static ❂ */}
                  <motion.div 
                    initial={{ backgroundColor: "#ffffff", borderColor: "#9ca3af", boxShadow: "0 0 0 0 rgba(240,85,55,0)" }}
                    whileInView={{ backgroundColor: "#F05537", borderColor: "#F05537", boxShadow: "0 0 0 4px rgba(240,85,55,0.15)" }}
                    viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                    transition={{ duration: 0.3 }}
                    className="w-3 h-3 rounded-full border-2 shrink-0 hidden md:block"
                  />
                  <span className="text-[#F05537] md:hidden">❂</span>
                  {svc.num}
                </div>

                <div className="flex flex-col gap-4">
                <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight ${svc.titleColor}`}>
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium max-w-sm leading-relaxed">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {svc.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 border border-gray-300 text-xs font-medium text-gray-600 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="w-full md:w-[260px] aspect-[4/3] shrink-0 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={svc.image}
                alt={svc.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F05537]" />
                <span className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
