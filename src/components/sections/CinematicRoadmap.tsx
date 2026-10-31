'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react'

const EXPERIENCES = [
  {
    role: "PHP Laravel Developer",
    company: "JapaneseCarTrade.com",
    period: "Aug 2023 — Present",
    current: true,
    location: "Jaipur, India",
    desc: "Engineered and maintained the Laravel backend of an international automobile trading platform handling 500+ vehicle listings daily for 10,000+ monthly active users. Modernized legacy PHP modules to MVC & SOLID architecture.",
    points: [
      "Engineered and maintained the Laravel backend handling 500+ vehicle listings daily for 10,000+ monthly active users.",
      "Built and delivered 20+ RESTful APIs with JWT/Sanctum authentication; clear, documented contracts reduced frontend integration time by 30%.",
      "Tuned critical MySQL queries through indexing and restructuring, achieving a 40% reduction in average API response time under concurrent load.",
      "Implemented Laravel Queues and Jobs to process 1,000+ daily emails and notifications asynchronously, eliminating request timeouts.",
      "Contributed to the migration of legacy PHP modules to Laravel (MVC, SOLID), improving code quality and maintainability.",
      "Developed 8+ AJAX-powered web features using JavaScript, jQuery, HTML5, and CSS3, cutting page reloads by 60%.",
      "Integrated payment gateway and notification APIs to enable secure, end-to-end transaction processing.",
      "Troubleshot and resolved production issues across PHP/Laravel apps, MySQL queries, and API integrations to maintain 99.9%+ platform stability.",
      "Delivered features on schedule in 2-week Agile/Scrum sprints, working closely with cross-functional developers and stakeholders."
    ],
    tags: ["PHP 8+", "Laravel", "REST APIs", "Sanctum & JWT", "MySQL Indexing", "Queues & Jobs", "AJAX / jQuery", "Agile/Scrum"]
  },
  {
    role: "PHP Web Developer",
    company: "Gradient Softech",
    period: "Oct 2022 — Jul 2023",
    current: false,
    location: "Kota, India",
    desc: "Delivered 5+ end-to-end client web applications (e-commerce platforms, admin dashboards, CMS) from requirements to production deployment.",
    points: [
      "Delivered 5+ end-to-end client web applications (e-commerce platforms, admin dashboards, CMS) from initial requirements to production.",
      "Created reusable PHP component libraries adopted across multiple client projects, reducing average delivery time by 20%.",
      "Owned the full project lifecycle independently: requirements gathering, database modeling, feature development, testing, and Linux server deployment."
    ],
    tags: ["PHP", "MySQL", "Linux Server", "E-Commerce", "Admin Dashboards", "CMS", "Apache", "Component Libraries"]
  }
]

export default function CinematicRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="roadmap" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>// 03 &bull; Career Progression</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Production Experience &amp; <br />
              <span className="text-zinc-500">Timeline Roadmap</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l border-red-500/30 pl-4">
            Hands-on production track record in high-traffic marketplace infrastructure, API design, and full-cycle development.
          </p>
        </div>

        {/* Roadmap Timeline Container */}
        <div ref={containerRef} className="relative ml-2 md:ml-4 max-w-4xl flex flex-col gap-0">
          {/* Static Faint Track */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-zinc-800" />
          
          {/* Animated Glowing Red Laser Fill */}
          <motion.div 
            className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 to-red-600 origin-top shadow-[0_0_10px_#dc2626]"
            style={{ scaleY }}
          />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 pb-14 last:pb-0"
            >
              {/* Reversible Synchronized Glowing Node */}
              <motion.div 
                initial={{ backgroundColor: "#18181b", borderColor: "#3f3f46", boxShadow: "0 0 0 0 rgba(220,38,38,0)" }}
                whileInView={{ backgroundColor: "#dc2626", borderColor: "#ef4444", boxShadow: "0 0 15px 4px rgba(220,38,38,0.4)" }}
                viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10"
              />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-sm bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all font-mono">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white font-sans">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs bg-red-950/60 text-red-400 border border-red-500/40">
                        ACTIVE ROLE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex items-center gap-3 text-xs text-red-400 font-semibold mb-4">
                  <span className="uppercase">{exp.company}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-zinc-500 flex items-center gap-1 font-normal">
                    <MapPin className="w-3 h-3 text-zinc-600" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-5 font-normal">
                  {exp.desc}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 text-xs text-zinc-400 mb-6 font-sans">
                  {exp.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-[10px]">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-xs bg-[#131622] border border-white/10 text-zinc-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications Credentials Track */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span>// Academic &amp; Professional Qualifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {/* MCA */}
            <div className="p-6 rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-red-500 font-semibold mb-3">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>POSTGRADUATION</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">2024 — 2026</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white uppercase mb-1 font-sans">
                  MCA (Data Science)
                </h4>
                <p className="text-xs text-red-400 font-semibold mb-2">Apex University, Jaipur</p>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Specialization in Data Science, advanced algorithms, computational data structures, and relational schema normalization.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-emerald-400">
                STATUS: IN PROGRESS
              </div>
            </div>

            {/* Bachelor's */}
            <div className="p-6 rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-red-500 font-semibold mb-3">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>UNDERGRADUATE</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">2020 — 2024</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white uppercase mb-1 font-sans">
                  Bachelor&apos;s Degree, Science
                </h4>
                <p className="text-xs text-red-400 font-semibold mb-2">University of Kota, India</p>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Foundational computational logic, mathematical modeling, analytical problem-solving, and scientific methodologies.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-zinc-400">
                GRADUATED: MAY 2024
              </div>
            </div>

            {/* Certification */}
            <div className="p-6 rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-red-500 font-semibold mb-3">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>CERTIFICATION</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">DEC 2021</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white uppercase mb-1 font-sans">
                  PHP Web Development Training
                </h4>
                <p className="text-xs text-red-400 font-semibold mb-2">SRV HR Solutions</p>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Professional hands-on immersion in PHP web architecture, relational databases, MVC design patterns, and full-stack delivery.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-emerald-400">
                CREDENTIAL: VERIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
