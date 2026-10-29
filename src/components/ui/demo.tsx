'use client'

import { motion } from "framer-motion"
import { HeroOrb } from "./HeroOrb"
import { useState, useEffect } from "react"

const Typewriter = ({ text, delay }: { text: string, delay: number }) => {
  const [currentText, setCurrentText] = useState('')
  
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const startTyping = () => {
      let i = 0
      const type = () => {
        setCurrentText(text.slice(0, i + 1))
        i++
        if (i < text.length) {
          timeout = setTimeout(type, 150)
        }
      }
      type()
    }
    timeout = setTimeout(startTyping, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <>
      {currentText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "circInOut" }}
        className="inline-block font-light text-white ml-2 -mb-2"
        style={{ transform: "translateY(-4%)" }}
      >
        |
      </motion.span>
    </>
  )
}

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#F05537] overflow-hidden font-sans">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white"></div>
        <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-white"></div>
        <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-white"></div>
        <div className="absolute left-0 right-0 top-[70%] h-[1px] bg-white"></div>
      </div>

      {/* Top Navbar */}
      <nav className="absolute top-0 w-full z-50 px-8 lg:px-12 py-6 flex items-center justify-between text-white">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-1">
          puneetgautam<sup className="text-[10px]">®</sup>
        </div>
        <ul className="hidden lg:flex items-center gap-12 font-medium text-sm tracking-wide">
          <li className="border-b-2 border-white pb-1"><a href="#home">Home</a></li>
          <li><a href="#about" className="opacity-80 hover:opacity-100">About</a></li>
          <li><a href="#experience" className="opacity-80 hover:opacity-100">Work <span className="text-[10px] opacity-60">(3)</span></a></li>
          <li><a href="#services" className="opacity-80 hover:opacity-100">Services <span className="text-[10px] opacity-60">(3)</span></a></li>
          <li><a href="#contact" className="opacity-80 hover:opacity-100">Contact</a></li>
        </ul>
        <div className="flex flex-col gap-[5px] cursor-pointer">
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-8 h-[2px] bg-white"></div>
        </div>
      </nav>
      
      {/* Background Huge Watermark Text */}
      <div className="absolute top-[10%] left-0 w-full flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[26vw] font-black tracking-tighter text-[#E04B2D] uppercase leading-none whitespace-nowrap">
          PUNEET
        </h1>
      </div>

      {/* Center Cutout Portrait (Anchored to the absolute bottom of the screen, behind the text) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[900px] h-[90vh] flex items-end justify-center pointer-events-none z-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/puneet-portrait.png" 
          alt="Puneet Gautam" 
          className="max-w-full h-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto h-screen flex flex-col justify-between px-8 lg:px-12 pb-8">
        
        {/* Middle Section */}
        <div className="flex-1 flex items-center justify-between mt-20 relative">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[280px] text-white text-sm font-medium leading-relaxed tracking-wide uppercase pl-4"
          >
            I BUILD SCALABLE BACKENDS & DATA-DRIVEN APIS THAT HOLD UP UNDER REAL PRODUCTION TRAFFIC.
          </motion.div>

          {/* Center Cutout Portrait */}
          {/* Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block bg-white p-3 pb-4 w-[240px] shadow-2xl z-30 transform rotate-2 hover:rotate-0 transition-transform duration-300 relative right-4"
          >
            <div className="w-full aspect-square bg-[#0a0c10] mb-3 overflow-hidden relative">
              <HeroOrb />
            </div>
            <div className="flex justify-between items-center text-xs font-medium text-gray-800">
              <span className="flex items-center gap-1"><span className="text-[#3fd0c0] text-[14px]">❂</span> SYSTEM</span>
              <span className="text-gray-500">/Active</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end relative z-30 w-full pb-6 pl-4">
          
          {/* Bottom Left: Huge Name */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-white font-medium text-lg mb-1 tracking-wider">©2026</span>
            <h1 className="text-7xl md:text-[9vw] lg:text-[11vw] font-black tracking-tighter text-white uppercase leading-[0.8] m-0 whitespace-nowrap">
              <Typewriter text="PUNEET" delay={1200} />
            </h1>
          </motion.div>

          {/* Bottom Right: Dark Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-[#111] text-white p-4 w-[280px] md:w-[320px] flex gap-4 items-center relative right-4"
          >
            <div className="w-16 h-16 bg-gray-800 shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/puneet-portrait.png" alt="Puneet Gautam" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col flex-1 justify-center">
              <div className="text-xs text-gray-400 mb-1 flex justify-between w-full">
                <span>Let's Talk</span>
                <span className="text-white">❂</span>
              </div>
              <div className="font-bold text-sm tracking-wide">Puneet Gautam</div>
              <div className="text-xs text-gray-400">Backend Developer</div>
            </div>
            <a 
              href="https://wa.me/917014377316"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
            >
              ↗
            </a>
          </motion.div>
        </div>

      </div>

    </div>
  )
}
