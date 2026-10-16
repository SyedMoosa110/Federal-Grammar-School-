'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, Laptop, Microscope, ShieldCheck, Award, Palette } from 'lucide-react';
import { useSchoolStore } from '@/lib/store';

export default function FacultyShowcase() {
  const { profile } = useSchoolStore();

  return (
    <section id="faculty" className="relative bg-[#F4F7F5] py-20 lg:py-28 overflow-hidden border-t border-[#4a8168]/20">
      
      {/* Background Subtle Watermark */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none opacity-[0.03] font-serif font-black text-8xl lg:text-[180px] leading-none whitespace-nowrap overflow-hidden text-[#2b452b]">
        FACULTY & INFRASTRUCTURE
      </div>

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-white text-[#218a8a] px-3.5 py-1.5 rounded-full border border-[#4a8168]/20 inline-block mb-3 shadow-xs">
              /ACADEMIC PEDAGOGY & INFRASTRUCTURE
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase text-[#2b452b]">
              Faculty & Modern Infrastructure
            </h2>

            <p className="text-xs sm:text-sm text-[#4a8168] mt-3 leading-relaxed max-w-2xl font-normal">
              Meet our experienced educators, Karachi Board curriculum specialists, and STEM laboratory facilities guiding students from foundational classes to matriculation honors.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="self-start md:self-auto shrink-0"
          >
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-full bg-[#218a8a] hover:bg-[#3fc298] text-white hover:text-[#2b452b] font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-[0_4px_16px_rgba(33,138,138,0.25)]"
            >
              <span>Faculty Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Large Tile - Teaching Faculty Profile & Leadership (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(36,98,114,0.06)] hover:border-[#218a8a] hover:shadow-[0_16px_36px_rgba(36,98,114,0.14)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30">
                  /LEADERSHIP & MENTORSHIP
                </span>
                <span className="text-[11px] font-mono text-[#218a8a] font-bold">
                  Est. 1988
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#246272] text-[#3fc298] flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#218a8a]">
                  MT
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2b452b]">
                    {profile.principal || 'Prof. Muhammad Tariq Khan'}
                  </h3>
                  <p className="text-xs text-[#4a8168] font-mono">
                    Principal & Academic Administrator (M.Sc, M.Ed)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed italic border-l-2 border-[#218a8a] pl-3.5 my-3">
                &ldquo;Our vision is grounded in providing a disciplined, nurturing learning environment that marries rigorous Karachi Secondary Board academics with contemporary technical skills and high ethical character.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#4a8168]/15 flex flex-wrap items-center gap-4 text-xs text-[#4a8168]">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#218a8a]" />
                <span>38+ Years Administrative Distinction</span>
              </span>
              <span className="text-[#4a8168]/40">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Award className="w-3.5 h-3.5 text-[#218a8a]" />
                <span>BSEK Board Examination Advisor</span>
              </span>
            </div>
          </motion.div>

          {/* Bento Item 2: Medium Tile - Digital Computer Labs in Deep Ocean Teal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 bg-[#246272] text-white rounded-3xl p-6 sm:p-8 border border-[#4a8168]/40 hover:border-[#3fc298] shadow-[0_8px_30px_rgba(36,98,114,0.15)] hover:shadow-[0_16px_36px_rgba(36,98,114,0.3)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/15 text-[#3fc298] border border-[#3fc298]/30">
                  /DIGITAL COMPUTER LABS
                </span>
                <div className="w-8 h-8 rounded-full bg-[#2b452b] text-[#3fc298] border border-[#3fc298]/30 flex items-center justify-center">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                Digital Computer Labs & STEM
              </h3>

              <p className="text-xs sm:text-sm text-[#F4F7F5]/90 leading-relaxed">
                Celebrated participants in the IBA Karachi Hour of Code. Equipped with high-speed networked PC workstations, algorithmic programming instruction, and practical examination labs.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 text-xs text-[#F4F7F5]/80">
              <span className="font-mono text-[#3fc298] font-bold block mb-1">
                /CORE DISCIPLINES:
              </span>
              <span>Python • Web Foundations • Algorithmic Logic • Database Basics</span>
            </div>
          </motion.div>

          {/* Bento Item 3: Medium Tile - Science Exhibition Highlights (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#4a8168]/20 hover:border-[#218a8a] shadow-[0_8px_30px_rgba(36,98,114,0.06)] hover:shadow-[0_16px_36px_rgba(36,98,114,0.12)] transition-all duration-300 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 flex items-center justify-center mb-2">
              <Microscope className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30">
              /SCIENCE EXHIBITION
            </span>
            <h4 className="font-serif text-lg font-black uppercase tracking-tight text-[#2b452b]">
              Empirical Science Labs
            </h4>
            <p className="text-xs text-[#4a8168] leading-relaxed">
              Physics, Chemistry, and Biology apparatus meeting Karachi Secondary Board standards with annual project exhibitions.
            </p>
          </motion.div>

          {/* Bento Item 4: Medium Tile - Creative Arts & Speech Studio (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#4a8168]/20 hover:border-[#218a8a] shadow-[0_8px_30px_rgba(36,98,114,0.06)] hover:shadow-[0_16px_36px_rgba(36,98,114,0.12)] transition-all duration-300 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 flex items-center justify-center mb-2">
              <Palette className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30">
              /CREATIVE ARTS STUDIO
            </span>
            <h4 className="font-serif text-lg font-black uppercase tracking-tight text-[#2b452b]">
              Creative Arts & Speech
            </h4>
            <p className="text-xs text-[#4a8168] leading-relaxed">
              Inter-school debates, English speech declamations, calligraphy, and visual arts studios encouraging student expression.
            </p>
          </motion.div>

          {/* Bento Item 5: Early Childhood Montessori Educators (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#4a8168]/20 hover:border-[#218a8a] shadow-[0_8px_30px_rgba(36,98,114,0.06)] hover:shadow-[0_16px_36px_rgba(36,98,114,0.12)] transition-all duration-300 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30">
              /MONTESSORI WING
            </span>
            <h4 className="font-serif text-lg font-black uppercase tracking-tight text-[#2b452b]">
              Montessori Directorate
            </h4>
            <p className="text-xs text-[#4a8168] leading-relaxed">
              Certified female early-childhood educators fostering play-based sensory foundations, phonetic drills, and Islamic morals.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
