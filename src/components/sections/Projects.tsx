'use client'

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

const experiences = [
  {
    role: "Laravel Developer",
    company: "JapaneseCarTrade.com",
    period: "Mar 2025 – Present",
    current: true,
    description: "Architect and maintain the Laravel backend for an international automobile trading platform processing 500+ vehicle listings daily. Built 20+ RESTful APIs secured with Sanctum.",
    tags: ["Laravel", "REST APIs", "MySQL", "Queues"],
  },
  {
    role: "PHP Developer",
    company: "JapaneseCarTrade.com",
    period: "Aug 2023 – Feb 2025",
    current: false,
    description: "Built core PHP modules for car listing management and search workflows serving 10,000+ monthly active users. Integrated third-party APIs for payments.",
    tags: ["PHP 8+", "AJAX", "Payment Gateways", "Scrum"],
  },
  {
    role: "PHP Web Developer",
    company: "Gradient Softech",
    period: "Oct 2022 – Jul 2023",
    current: false,
    description: "Delivered 5+ end-to-end client web applications including e-commerce platforms and CMS systems, managing the complete project lifecycle.",
    tags: ["PHP", "MySQL", "Linux Server", "E-Commerce"],
  }
]

export default function Experience() {
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
    <section id="experience" className="w-full bg-white text-[#111] py-28 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Giant section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[11rem] font-black tracking-tighter leading-none uppercase text-gray-200 mb-16 select-none"
        >
          EXPERIENCE
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Crosshair photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full lg:w-[360px] aspect-square shrink-0 bg-gray-100"
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

          {/* Right: Stats + Timeline */}
          <div className="flex-1 flex flex-col gap-10">

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {[
                { num: "20+", label: "PROJECTS COMPLETED", desc: "Successfully shipped robust RESTful APIs for international production systems." },
                { num: "10k+", label: "MONTHLY USERS", desc: "My systems reliably serve thousands of active users every day." },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-6 border border-gray-100 p-6"
                >
                  <div className="text-5xl font-black tracking-tighter leading-none">{stat.num}</div>
                  <div className="flex flex-col gap-1 pt-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      <span className="text-[#F05537]">❂</span> {stat.label}
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <div ref={ref} className="relative ml-2 flex flex-col gap-0">
              {/* Faint background line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200" />
              {/* Animated fill line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F05537] origin-top"
                style={{ scaleY }}
              />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ backgroundColor: "#ffffff", borderColor: "#9ca3af", boxShadow: "0 0 0 0 rgba(240,85,55,0)" }}
                    whileInView={{ backgroundColor: "#F05537", borderColor: "#F05537", boxShadow: "0 0 0 4px rgba(240,85,55,0.15)" }}
                    viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-[5px] top-1 w-3 h-3 rounded-full border-2 z-10"
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="text-lg font-black uppercase tracking-tight">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-[10px] font-bold uppercase tracking-widest border border-[#F05537] text-[#F05537] px-2 py-0.5 rounded-full">
                        current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="text-gray-600">{exp.company}</span>
                    <span>·</span>
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-lg">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
