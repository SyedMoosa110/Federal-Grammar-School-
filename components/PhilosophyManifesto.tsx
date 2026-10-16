'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { BookOpen, Microscope, Sparkles, Trophy } from 'lucide-react';

const TILES = [
  {
    id: '01',
    title: 'Montessori & Early Foundation',
    category: '/01. MONTESSORI',
    image: '/images/campus-building-day.jpg',
    description: 'Activity-based sensory learning nurturing phonics, motor skills, and polite social values in early childhood.',
    icon: Sparkles
  },
  {
    id: '02',
    title: 'Empirical Science Laboratories',
    category: '/02. SCIENCE LABS',
    image: '/images/science-lab.jpg',
    description: 'Fully equipped Physics, Chemistry, and Biology laboratories registered with Karachi Secondary Board.',
    icon: Microscope
  },
  {
    id: '03',
    title: 'Digital Computing & Library',
    category: '/03. STEM & LIBRARY',
    image: '/images/computer-lab.jpg',
    description: 'Computer workstations and curated reference library cultivating algorithmic thinking and deep reading.',
    icon: BookOpen
  },
  {
    id: '04',
    title: 'Athletics & Sports Ground',
    category: '/04. SPORTS GROUND',
    image: '/images/sports-annual.jpg',
    description: 'Annual athletics championships, cricket tournaments, physical endurance, and disciplined team leadership.',
    icon: Trophy
  }
];

export default function PhilosophyManifesto() {
  return (
    <section id="philosophy" className="relative bg-[#2b452b] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background Architectural Watermark (Seamless, Refined & Continuous) */}
      <div className="absolute top-10 sm:top-14 lg:top-16 inset-x-0 select-none pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
          className="flex whitespace-nowrap w-max font-serif font-black text-6xl sm:text-8xl lg:text-[140px] tracking-[0.12em] leading-none uppercase select-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.07)',
            color: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <span className="pr-16">FEDERAL GRAMMAR • EST. 1988 • KARACHI •</span>
          <span className="pr-16">FEDERAL GRAMMAR • EST. 1988 • KARACHI •</span>
          <span className="pr-16">FEDERAL GRAMMAR • EST. 1988 • KARACHI •</span>
          <span className="pr-16">FEDERAL GRAMMAR • EST. 1988 • KARACHI •</span>
        </motion.div>
      </div>

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header & High-Contrast Manifesto */}
        <div className="max-w-4xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#246272]/95 backdrop-blur-md text-[#3fc298] border border-[#3fc298]/30 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3fc298] animate-pulse" />
            <span>/ Institutional Values & Statement</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase text-white">
            &ldquo;EDUCATION IS NOT JUST PREPARATION FOR LIFE; EDUCATION IS LIFE ITSELF.&rdquo;
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F4F7F5]/90 mt-4 leading-relaxed max-w-2xl font-light">
            Since 1988, Federal Grammar Public High School in Block 16, Federal B Area has stood as an academic anchor in Gulberg Town Karachi. Our holistic philosophy balances rigorous Karachi Secondary Board academics with contemporary STEM literacy and high moral character.
          </p>
        </div>

        {/* Interactive 4-Card Photo Feature with Deep Ocean Teal & Mint Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TILES.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden bg-[#246272] border border-[#4a8168]/40 hover:border-[#3fc298] shadow-xl flex flex-col justify-between min-h-[380px] cursor-pointer transition-all duration-300"
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b452b] via-[#2b452b]/60 to-black/30" />
                </div>

                {/* Top Category Badge */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#2b452b]/85 backdrop-blur-md text-[#3fc298] border border-[#3fc298]/30">
                    {tile.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#3fc298] group-hover:text-[#2b452b] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Captions */}
                <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#2b452b] via-[#2b452b]/95 to-transparent">
                  <h3 className="font-serif font-black text-lg sm:text-xl text-white tracking-tight uppercase leading-snug">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-[#F4F7F5]/85 mt-2 leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
