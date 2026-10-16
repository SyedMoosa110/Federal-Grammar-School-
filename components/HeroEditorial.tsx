'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Award,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { useSchoolStore } from '@/lib/store';

export default function HeroEditorial() {
  const { profile } = useSchoolStore();

  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-[#F4F7F5] pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-[#4a8168]/20">
      
      {/* Subtle Grain / Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #218a8a 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#3fc298]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#246272]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Split Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION (7 COLS)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Category Badges using mint #3fc298 text on soft emerald transparent pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3fc298]/10 border border-[#3fc298]/30 text-xs font-mono font-bold tracking-wider uppercase text-[#218a8a] shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#3fc298]" />
              <span>Admissions Open 2026–2027</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fc298] animate-pulse" />
            </motion.div>

            {/* High-Impact Academic Editorial Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="space-y-3"
            >
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-[#2b452b] tracking-tight leading-[1.06]">
                Nurturing Intellect, <br />
                <span className="italic font-normal text-[#218a8a]">Character</span>, and <br />
                Lifelong Excellence.
              </h1>

              <p className="text-base sm:text-lg text-[#4a8168] leading-relaxed max-w-xl font-normal pt-2">
                Established in 1988 in Federal B Area Karachi, Federal Grammar Public High School balances rigorous Sindh Board matriculation with modern computer science, experimental laboratories, and classical ethical values.
              </p>
            </motion.div>

            {/* Feature buttons with dual styling (Solid #218a8a button + outlined #4a8168 button) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              {/* Solid #218a8a Button */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#218a8a] hover:bg-[#3fc298] text-white hover:text-[#2b452b] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_25px_rgba(33,138,138,0.28)] hover:shadow-[0_12px_30px_rgba(63,194,152,0.38)] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Apply for Admission</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#218a8a] group-hover:bg-[#2b452b] group-hover:text-white flex items-center justify-center transition-all group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

              {/* Outlined #4a8168 Button */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href="/#programs"
                  className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#4a8168]/40 text-[#2b452b] bg-white hover:bg-[#F4F7F5] hover:border-[#218a8a] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#218a8a]" />
                  <span>Academic Wings</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Micro Institutional Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 border-t border-[#4a8168]/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#4a8168] font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#218a8a]" />
                <span>BSEK Code: {profile.affiliationCode || 'BSEK-KHI-GUL-4192'}</span>
              </div>
              <span className="text-[#4a8168]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#218a8a]" />
                <span>100% Board Examination Pass Record</span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT: FRAMED EDITORIAL HERO CARD WITH TAB CUTOUT BORDERS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Framed Card Container */}
              <div className="bg-[#FFFFFF] p-0 rounded-[36px] border border-[#4a8168]/20 shadow-[0_20px_50px_rgba(36,98,114,0.12)] relative">
                
                {/* Photo Viewport */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[36px] overflow-hidden border border-[#4a8168]/20">
                  <Image
                    src="/images/hero-stem-lab.jpg"
                    alt="Federal Grammar Public High School Students in Science Lab"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b452b]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge: Karachi Secondary Board Recognized */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#4a8168]/20 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2b452b] shadow-md">
                      <Award className="w-3.5 h-3.5 text-[#218a8a]" />
                      <span>Karachi Board Affiliated</span>
                    </span>
                  </div>

                  {/* Bottom Caption on Photo */}
                  <div className="absolute bottom-4 inset-x-4 z-10 text-white">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#3fc298] font-bold">
                      /STEM & Computer Science Lab
                    </p>
                    <p className="text-sm font-semibold text-white/95 mt-0.5 leading-snug">
                      Hands-on practicals, IBA Hour of Code, and empirical research.
                    </p>
                  </div>
                </div>

                {/* Floating Stat Badge: "25+ Years of Trust" */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#F4F7F5]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#4a8168]/20 shadow-[0_12px_30px_rgba(36,98,114,0.15)] z-20 flex items-center gap-3.5 max-w-[240px] sm:max-w-[260px]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#246272] text-[#3fc298] flex items-center justify-center font-black text-sm shrink-0 shadow-sm border border-[#218a8a]">
                    <GraduationCap className="w-6 h-6 text-[#3fc298]" />
                  </div>
                  <div>
                    <span className="font-serif font-black text-xl sm:text-2xl text-[#2b452b] leading-none block">
                      25+ Years
                    </span>
                    <span className="text-[11px] font-mono text-[#4a8168] uppercase tracking-wider block mt-0.5">
                      Of Institutional Trust
                    </span>
                  </div>
                </motion.div>

                {/* Floating Stat Badge Right Top: "100% Pass" */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                  whileHover={{ y: -3 }}
                  className="absolute -top-4 -right-3 sm:-right-6 bg-white p-3 sm:p-3.5 rounded-2xl border border-[#4a8168]/20 shadow-[0_10px_25px_rgba(36,98,114,0.12)] z-20 flex items-center gap-2.5"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fc298] animate-pulse" />
                  <div className="text-left">
                    <p className="font-mono font-black text-xs text-[#2b452b] leading-none">100% PASS</p>
                    <p className="text-[9px] font-mono text-[#4a8168] uppercase tracking-widest mt-0.5">BSEK Matric</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
