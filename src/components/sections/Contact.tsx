'use client'

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="w-full text-[#111]">

      {/* Statement Band */}
      <div className="relative w-full text-center py-24 overflow-hidden border-t border-gray-100 bg-white">
        {/* Aurora blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute left-[5%] top-[-30%] w-[400px] h-[400px] rounded-full bg-[#F05537] opacity-10 blur-[80px]" />
          <div className="absolute right-[5%] top-[20%] w-[350px] h-[350px] rounded-full bg-amber-400 opacity-10 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#F05537] bg-[rgba(240,85,55,0.08)] px-4 py-1.5 rounded-full mb-8"
          >
            Open to opportunities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-[6vw] font-black tracking-tighter leading-[0.9] uppercase text-[#111] max-w-4xl mx-auto"
          >
            Let's build backends that{" "}
            <em className="not-italic" style={{ background: "linear-gradient(90deg, #F05537, #e3a343)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              hold up
            </em>{" "}
            under real traffic.
          </motion.h2>
        </div>
      </div>

      {/* Main Contact Block */}
      <div className="relative w-full min-h-[70vh] overflow-hidden">
        {/* Full-bleed cinematic background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1600&q=80"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 flex flex-col lg:flex-row items-start lg:items-center gap-16">

          {/* Left: Contact form card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[400px] bg-white shadow-2xl shrink-0 overflow-hidden"
          >
            {/* Card header */}
            <div className="bg-gradient-to-br from-[#c0392b] to-[#8e44ad] px-6 py-5 flex items-center justify-between">
              <span className="font-black text-white text-lg tracking-tight">Puneet ®</span>
              <span className="w-6 h-6 rounded-full border-2 border-white/60" />
            </div>

            {/* Form body */}
            <div className="px-6 py-8">
              <h3 className="text-center font-black text-lg uppercase tracking-wide mb-8 text-[#111]">Reach Out to Me</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="jane@name.com"
                    className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Your Message"
                    className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  />
                </div>
                <a
                  href="https://wa.me/917014377316"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-[#111] text-white text-xs font-black uppercase tracking-widest text-center py-4 hover:bg-[#F05537] transition-colors"
                >
                  YOUR MESSAGE →
                </a>
              </form>
            </div>
          </motion.div>

          {/* Right: Big text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/70"
            >
              <span className="text-[#F05537]">❂</span> DESIGN INSIGHTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-white break-words"
            >
              LET'S CREATE<br/>TOGETHER
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2 text-white/60 text-sm font-medium"
            >
              <span>📧 pgpuneet2001@gmail.com</span>
              <span>📱 +91 7014377316</span>
              <span>📍 Jaipur, IN · Open to relocation</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white py-14 px-6 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div className="space-y-2">
            <div className="font-black text-2xl tracking-tighter">Puneet Gautam ®</div>
            <div className="text-sm text-gray-500">Backend Developer — PHP & Laravel</div>
            <div className="text-sm font-medium text-gray-700">pgpuneet2001@gmail.com</div>
            <div className="text-sm text-gray-400">+91 7014377316 · Jaipur, IN</div>
          </div>

          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-gray-400">
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-black transition-colors">Experience</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-black transition-colors">Projects</a></li>
            </ul>
            <ul className="space-y-3">
              <li><a href="https://github.com/puneetgautam" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/puneetgautam-ab41b11b4" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn ↗</a></li>
              <li><a href="https://wa.me/917014377316" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">WhatsApp ↗</a></li>
            </ul>
          </div>

          <div className="text-[10vw] md:text-[5vw] font-black tracking-tighter leading-none opacity-5 select-none">
            PUNEET®
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
          <span className="font-mono text-xs text-gray-400">© 2026 Puneet Gautam. All rights reserved.</span>
          <span className="font-mono text-xs text-gray-400">Based in Jaipur, IN · puneetgautam.dev</span>
        </div>
      </footer>
    </section>
  )
}
