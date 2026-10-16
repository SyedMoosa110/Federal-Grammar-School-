'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Sparkles, Users, HeartHandshake } from 'lucide-react';

export default function CampusLifeRibbon() {
  const activities = [
    {
      num: '01',
      title: 'Annual Sports Tournaments',
      desc: 'Cricket championships, track athletics, badminton, and physical fitness coaching.',
      icon: Trophy
    },
    {
      num: '02',
      title: 'Speech & Qirat Contests',
      desc: 'Inter-school Urdu & English debates, recitation competitions, and stage dramatics.',
      icon: Sparkles
    },
    {
      num: '03',
      title: 'STEM & Coding Hackathons',
      desc: 'Annual Science Fair and IBA Karachi Hour of Code robotics and software showcases.',
      icon: Users
    },
    {
      num: '04',
      title: 'Moral & Civic Leadership',
      desc: 'Student council governance, community hygiene drives, and Islamic value seminars.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="campus-life" className="relative bg-[#2b452b] text-[#F4F7F5] py-20 lg:py-28 overflow-hidden">
      
      {/* Ambient Forest & Teal Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#246272] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#3fc298] rounded-full blur-[140px]" />
      </div>

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-[#246272]/60 text-[#3fc298] px-3.5 py-1.5 rounded-full border border-[#3fc298]/30 inline-block mb-3">
              /CAMPUS LIFE & CO-CURRICULAR CULTURE
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              School Life Is the Foundation of Character.
            </h2>

            <p className="text-xs sm:text-sm text-[#F4F7F5]/80 mt-3 leading-relaxed max-w-2xl font-light">
              Beyond textbook memorization, our students discover leadership potential through athletic teamwork, scientific invention, and moral integrity.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="self-start lg:self-auto shrink-0"
          >
            <Link
              href="/gallery"
              className="px-6 py-3.5 rounded-full bg-[#218a8a] text-white hover:bg-[#3fc298] hover:text-[#2b452b] font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-[0_4px_16px_rgba(33,138,138,0.35)]"
            >
              <span>View Campus Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Photo & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Widescreen Collaborative Photo (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#4a8168]/30 shadow-2xl aspect-[16/10] sm:aspect-[16/9] group"
          >
            <Image
              src="/images/sports-annual.jpg"
              alt="Federal Grammar School Students Campus Life & Sports Tournaments"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b452b] via-[#2b452b]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#218a8a] text-white px-2.5 py-1 rounded-full shadow-sm">
                  /ATHLETIC DISTINCTION
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-black uppercase mt-2 drop-shadow-sm">
                  Annual Sports Championship & Athletics
                </h3>
              </div>
              <span className="text-xs font-mono text-[#3fc298] font-bold hidden sm:inline-block">
                Karachi Ground
              </span>
            </div>
          </motion.div>

          {/* Right Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease: 'easeOut' }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-5 rounded-2xl bg-[#246272]/50 backdrop-blur-xs border border-[#4a8168]/30 hover:border-[#3fc298]/70 hover:bg-[#246272]/80 transition-all space-y-1.5 cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#3fc298]">
                      /{act.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#3fc298] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-serif font-black text-sm uppercase text-white group-hover:text-[#3fc298] transition-colors">
                    {act.title}
                  </h4>
                  <p className="text-xs text-[#F4F7F5]/80 leading-relaxed font-light">
                    {act.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
