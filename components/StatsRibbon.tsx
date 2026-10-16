'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Users, BookOpen } from 'lucide-react';
import { useSchoolStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function StatsRibbon() {
  const { profile } = useSchoolStore();

  const stats = [
    {
      value: '100%',
      title: 'Board Examination Pass Rate',
      tag: '/BSEK MATRIC SCIENCE & CS',
      subtext: 'Unbroken 100% passing record across Karachi Secondary Education Board (BSEK) annual examinations.',
      icon: Award,
    },
    {
      value: '25+',
      title: 'Years of Educational Excellence',
      tag: '/ESTABLISHED IN 1988',
      subtext: 'Providing premier schooling in Block 16 Federal B Area, Gulberg Town Karachi for over two decades.',
      icon: Clock,
    },
    {
      value: '40+',
      title: 'Certified Educators',
      tag: '/SUBJECT SPECIALISTS',
      subtext: 'Dedicated faculty comprising Karachi Board examiners, STEM trainers, and Montessori diploma specialists.',
      icon: Users,
    },
    {
      value: '15:1',
      title: 'Student-Teacher Ratio',
      tag: '/INDIVIDUAL MENTORSHIP',
      subtext: 'Close academic monitoring ensuring individual attention, diagnostic assessments, and character formation.',
      icon: BookOpen,
    }
  ];

  return (
    <section id="stats" className="bg-[#F4F7F5] py-14 sm:py-18 border-y border-[#4a8168]/20">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header Micro-copy */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 pb-4 border-b border-[#4a8168]/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#218a8a] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#4a8168] font-bold">
              / Institutional Benchmark Metrics
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#218a8a] hidden sm:inline-block font-semibold">
            Karachi Board Affiliation Code: {profile.affiliationCode || 'BSEK-KHI-GUL-4192'}
          </span>
        </div>

        {/* 4-Column Stats Ribbon with Thin Sage Green Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#4a8168]/20 bg-white rounded-3xl border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(36,98,114,0.06)] overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            // Alternating numeric highlighting between ocean teal #246272 and bright mint #3fc298
            const numColor = i % 2 === 0 ? 'text-[#246272]' : 'text-[#3fc298]';

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: 'easeOut' }}
                whileHover={{ y: -2 }}
                className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4 hover:bg-[#F4F7F5] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#218a8a] uppercase">
                    {stat.tag}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <p className={cn('font-serif text-4xl sm:text-5xl font-black tracking-tight leading-none', numColor)}>
                    {stat.value}
                  </p>
                  <h3 className="font-serif font-bold text-sm sm:text-base uppercase tracking-wider text-[#2b452b] pt-2">
                    {stat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#4a8168] leading-relaxed font-normal pt-2 border-t border-[#4a8168]/15">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
