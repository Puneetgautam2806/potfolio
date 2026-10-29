'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Mail, Phone, MessageSquare, Copy, Check, ArrowUpRight, Send, Shield } from 'lucide-react'
import LinkedInIcon from '@/components/ui/LinkedInIcon'
import GitHubIcon from '@/components/ui/GitHubIcon'

export default function CinematicContact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyEmail = () => {
    navigator.clipboard.writeText('pgpuneet2001@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText('+917014377316')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Trigger mailto or acknowledge transmission
    window.location.href = `mailto:pgpuneet2001@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`
    setFormSubmitted(true)
  }

  return (
    <footer id="contact" className="relative py-28 md:py-36 bg-[#06080a] border-t border-white/[0.08] text-white">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] crimson-glow opacity-50 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>// 05 &bull; Initiate Transmission</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Open Channel &amp; <br />
              <span className="text-zinc-500">Engineering Inquiry</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l border-red-500/30 pl-4">
            Available for senior backend engineering contracts, architectural consulting, and full-time technical roles.
          </p>
        </div>

        {/* Contact Split Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 font-mono">
          {/* Left: Direct Transmission Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* GitHub Profile Card */}
              <a
                href="https://github.com/Puneetgautam2806"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] hover:border-white/40 hover:bg-[#111420] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">CODE REPOSITORIES</span>
                    <span className="text-xs md:text-sm text-white font-semibold group-hover:text-red-400 transition-colors">
                      github.com/Puneetgautam2806
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-xs bg-[#131622] group-hover:bg-red-600 border border-white/10 text-zinc-400 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* LinkedIn Direct Connect Card */}
              <a
                href="https://www.linkedin.com/in/puneet-gautam-ab41b11b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] hover:border-[#0a66c2]/60 hover:bg-[#111420] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#0a66c2]/20 border border-[#0a66c2]/40 flex items-center justify-center text-[#0a66c2] group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">VERIFIED PROFILE</span>
                    <span className="text-xs md:text-sm text-white font-semibold group-hover:text-red-400 transition-colors">
                      linkedin.com/in/puneet-gautam-ab41b11b4
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-xs bg-[#131622] group-hover:bg-[#0a66c2] border border-white/10 text-zinc-400 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Email Card */}
              <div className="p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">DIRECT DISPATCH</span>
                    <a href="mailto:pgpuneet2001@gmail.com" className="text-xs md:text-sm text-white font-semibold hover:text-red-400 transition-colors">
                      pgpuneet2001@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xs bg-[#131622] hover:bg-[#1a1f30] border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">WHATSAPP &bull; TEL</span>
                    <a href="https://wa.me/917014377316" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-white font-semibold hover:text-emerald-400 transition-colors">
                      +91 70143 77316
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-xs bg-[#131622] hover:bg-[#1a1f30] border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://wa.me/917014377316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location & Status Card */}
              <div className="p-6 rounded-sm bg-[#0c0f16] border border-white/[0.08] font-mono text-xs text-zinc-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 uppercase">DEPLOYMENT BASE:</span>
                  <span className="text-white">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 uppercase">TIMEZONE:</span>
                  <span className="text-white">IST (UTC +5:30) &bull; Global Remote Sync</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 uppercase">RESPONSE LATENCY:</span>
                  <span className="text-red-400 font-semibold">&lt; 4 Hours Typical</span>
                </div>
              </div>
            </div>

            {/* Encrypted Comms Note */}
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
              <Shield className="w-3.5 h-3.5 text-red-500" />
              <span>DIRECT DISPATCH &bull; NO INTERMEDIARY TRACKERS</span>
            </div>
          </div>

          {/* Right: Message Terminal Console (7 cols) */}
          <div className="lg:col-span-7 rounded-sm bg-[#0a0d13] border border-white/[0.1] p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-500" />
                <span className="text-white uppercase font-bold tracking-wider">SECURE TRANSMISSION TERMINAL</span>
              </div>
              <span className="text-[10px] text-emerald-400">STATUS: READY</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-zinc-500 mb-1.5 tracking-wider">
                    Client Name // Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Motors"
                    className="w-full px-3.5 py-2.5 rounded-xs bg-[#06080b] border border-white/10 focus:border-red-500 text-white text-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-zinc-500 mb-1.5 tracking-wider">
                    Reply Email // Channel
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. director@satoshimotors.com"
                    className="w-full px-3.5 py-2.5 rounded-xs bg-[#06080b] border border-white/10 focus:border-red-500 text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-zinc-500 mb-1.5 tracking-wider">
                  System Requirements // Scope Brief
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the architectural requirements, API scale, database constraints, or role specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xs bg-[#06080b] border border-white/10 focus:border-red-500 text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xs bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:shadow-[0_0_30px_rgba(220,38,38,0.55)] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Inquiry Directly</span>
              </button>
            </form>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold uppercase">Puneet Gautam</span>
            <span>&bull;</span>
            <span>Senior Backend Developer</span>
            <span>&bull;</span>
            <span className="text-zinc-600">&copy; 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">TOP // RETURN</a>
            <a href="https://github.com/Puneetgautam2806" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-white">
              <GitHubIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span>GITHUB</span>
            </a>
            <a href="https://www.linkedin.com/in/puneet-gautam-ab41b11b4/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-white">
              <LinkedInIcon className="w-3.5 h-3.5 text-[#0a66c2]" />
              <span>LINKEDIN</span>
            </a>
            <span className="text-red-500 font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
