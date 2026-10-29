'use client'

import { motion } from "framer-motion"

const projects = [
  {
    name: "Matrimonial Platform",
    tag: "React Native / Python FastAPI",
    status: "In Progress",
    description: "A matchmaking app with a coin-based unlock model instead of subscriptions — users spend coins to view specific locked profile details. Includes swipe/browse, chat, and a wallet & recharge system.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    tags: ["React Native (Expo)", "Python FastAPI", "PostgreSQL"],
    year: "2024",
  },
  {
    name: "Retail Sales Analytics",
    tag: "Python / Data Engineering",
    status: "In Progress",
    description: "An ETL pipeline built for data engineering practice: Python (pandas) transforms raw retail sales data into a MySQL star schema, followed by SQL analysis using window functions, CTEs, and RFM/cohort segmentation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["Python", "Pandas", "MySQL", "SQL"],
    year: "2024",
  },
  {
    name: "AutoTrade Platform",
    tag: "PHP / Laravel",
    status: "Live",
    description: "International automobile trading platform processing 500+ vehicle listings daily with 20+ RESTful APIs secured with Sanctum. Serving 10,000+ monthly active users with advanced search & filter capabilities.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80",
    tags: ["Laravel", "Sanctum", "MySQL", "REST API"],
    year: "2025",
  },
]

export default function SelectedProjects() {
  return (
    <section id="projects" className="w-full bg-white text-[#111] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              <span className="text-[#F05537]">❂</span> SELECTED WORK
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] uppercase break-words">
              <span className="text-[#111]">SELECTED</span><br/>
              <span className="text-gray-400">PROJECTS</span>
            </h2>
          </motion.div>
          <a
            href="https://github.com/puneetgautam"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-black transition-colors border-b border-gray-300 pb-1 self-end"
          >
            View on GitHub ↗
          </a>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-0 border-t border-gray-200">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-start gap-8 py-12 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-300 px-2"
            >
              {/* Number */}
              <div className="text-xs font-black text-gray-300 uppercase tracking-widest w-12 shrink-0 pt-1 group-hover:text-[#F05537] transition-colors">
                0{idx + 1}
              </div>

              {/* Title & description */}
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:text-[#F05537] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">/{project.tag}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                    project.status === 'Live' 
                      ? 'border-green-400 text-green-600' 
                      : 'border-[#F05537] text-[#F05537]'
                  }`}>{project.status}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((t, j) => (
                    <span key={j} className="px-3 py-1 border border-gray-200 text-xs font-medium text-gray-500 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-[220px] aspect-[4/3] overflow-hidden shrink-0 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <span className="absolute top-2 right-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-full">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
