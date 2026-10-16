'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, BookOpen, Laptop, Sparkles, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Program {
  id: string;
  category: '/Pre-School' | '/Primary' | '/Secondary' | '/Matric & Cambridge';
  title: string;
  tag: string;
  grade: string;
  age: string;
  description: string;
  highlights: string[];
  icon: typeof BookOpen;
}

const PROGRAMS: Program[] = [
  {
    id: 'pre-school',
    category: '/Pre-School',
    title: 'Montessori & Pre-Primary Wing',
    tag: '/FOUNDATIONAL YEARS',
    grade: 'Montessori, Nursery & KG',
    age: 'Ages 3 to 5 Years',
    description: 'Child-centric activity-based learning environment fostering English phonics, motor coordination, social empathy, and Islamic ethics.',
    highlights: [
      'Activity-based play & learn desks',
      'Phonics, vocabulary, and language drills',
      'Cognitive motor skill development',
      'Caring and experienced female faculty'
    ],
    icon: Sparkles
  },
  {
    id: 'primary',
    category: '/Primary',
    title: 'Junior Primary Wing',
    tag: '/ELEMENTARY YEARS',
    grade: 'Classes I to V (English Medium)',
    age: 'Ages 6 to 10 Years',
    description: 'Strong foundational grounding across Mathematics, General Science, English comprehension, Urdu literature, and Quranic Tajweed.',
    highlights: [
      'Computer laboratory foundational literacy',
      'Daily Quranic recitation & Tajweed',
      'Language arts & expressive writing',
      'Monthly diagnostic assessments'
    ],
    icon: BookOpen
  },
  {
    id: 'secondary-middle',
    category: '/Secondary',
    title: 'Middle School Preparatory',
    tag: '/PRE-MATRICULATION',
    grade: 'Classes VI to VIII',
    age: 'Ages 11 to 13 Years',
    description: 'Bridge program preparing students for board examination rigors with science laboratory demonstrations, speech competitions, and coding.',
    highlights: [
      'Physics, Chemistry & Biology lab demos',
      'Introductory computer programming',
      'Inter-house speech & debate contests',
      'Analytical mathematics foundations'
    ],
    icon: Laptop
  },
  {
    id: 'matric-science',
    category: '/Matric & Cambridge',
    title: 'BSEK Matric Science Wing',
    tag: '/BOARD EXAMINATIONS',
    grade: 'Classes IX & X (Science Stream)',
    age: 'Ages 14 to 16 Years',
    description: 'Secondary Board registered center offering Biology, Physics, and Chemistry groups with complete practical coursework and 100% pass guarantee.',
    highlights: [
      'Rigorous Karachi Board past paper mastery',
      'Dedicated science laboratory practicals',
      'Pre-Medical & Pre-Engineering track',
      'Top Karachi Board ranking record'
    ],
    icon: GraduationCap
  },
  {
    id: 'matric-cs',
    category: '/Matric & Cambridge',
    title: 'Computer Science Stream',
    tag: '/STEM & COMPUTING',
    grade: 'Classes IX & X (Computer Science)',
    age: 'Ages 14 to 16 Years',
    description: 'Recognized participant in IBA Karachi computer literacy and coding sessions, cultivating software developers and tech innovators.',
    highlights: [
      'IBA Karachi Hour of Code sessions',
      'Python, algorithms & database basics',
      'Modern computer laboratory terminals',
      'Hands-on practical exam preparation'
    ],
    icon: Laptop
  }
];

const FILTER_TABS = [
  'All Wings',
  '/Pre-School',
  '/Primary',
  '/Secondary',
  '/Matric & Cambridge'
] as const;

export default function AcademicPrograms() {
  const [activeFilter, setActiveFilter] = useState<typeof FILTER_TABS[number]>('All Wings');

  const filteredPrograms = PROGRAMS.filter(
    (p) => activeFilter === 'All Wings' || p.category === activeFilter
  );

  return (
    <section id="programs" className="relative bg-[#F4F7F5] py-20 lg:py-28 border-t border-[#4a8168]/20">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4a8168]/20 text-xs font-mono tracking-widest text-[#218a8a] uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#218a8a]" />
              <span>/ Academic Curriculum Streams</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#2b452b] uppercase tracking-tight">
              Academic Programs Hub
            </h2>
            <p className="text-xs sm:text-sm text-[#4a8168] mt-2 max-w-xl leading-relaxed font-normal">
              Explore our structured academic streams from foundational pre-school to secondary board matriculation in Karachi.
            </p>
          </div>

          {/* Category Switcher with Smooth Indicator in Sea Teal */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 bg-white p-1.5 rounded-full border border-[#4a8168]/20 shadow-xs self-start md:self-auto">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  'relative px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap z-10',
                  activeFilter === tab ? 'text-white' : 'text-[#4a8168] hover:text-[#2b452b]'
                )}
              >
                {activeFilter === tab && (
                  <motion.div
                    layoutId="academicFilterBubble"
                    className="absolute inset-0 bg-[#218a8a] rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-Style Program Cards Grid with Ocean Teal Shift Hover & Arrow Rotate 45 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-[#4a8168]/20 shadow-xs hover:bg-[#246272] hover:border-[#3fc298] hover:shadow-[0_16px_36px_rgba(36,98,114,0.3)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Top Header Pill & Category */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F4F7F5] text-[#246272] border border-[#4a8168]/20 group-hover:bg-[#3fc298]/15 group-hover:text-[#3fc298] group-hover:border-[#3fc298]/30 transition-colors">
                        {prog.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 group-hover:bg-[#3fc298] group-hover:text-[#2b452b] group-hover:border-[#3fc298] flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4 transition-colors" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2b452b] group-hover:text-white transition-colors leading-snug">
                        {prog.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs font-mono font-bold text-[#4a8168] group-hover:text-[#3fc298] transition-colors">
                          {prog.grade}
                        </p>
                        <span className="text-[#4a8168]/40 group-hover:text-white/60">•</span>
                        <span className="text-[11px] font-mono text-[#4a8168] group-hover:text-[#F4F7F5]/80 transition-colors">
                          {prog.age}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#4a8168] group-hover:text-[#F4F7F5]/90 leading-relaxed pt-1 transition-colors">
                      {prog.description}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-2 border-t border-[#4a8168]/15 group-hover:border-white/20 space-y-2 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#218a8a] group-hover:text-[#3fc298] font-bold block mb-1">
                        / Key Highlights
                      </span>
                      {prog.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-[#4a8168] group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#218a8a] group-hover:text-[#3fc298] shrink-0 mt-0.5 transition-colors" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA with 45 Degree Rotating Arrow Circle */}
                  <div className="pt-6 mt-6 border-t border-[#4a8168]/15 group-hover:border-white/20 flex items-center justify-between transition-colors">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#218a8a] group-hover:text-[#3fc298] transition-colors"
                    >
                      <span>Apply for Program</span>
                    </Link>

                    {/* Arrow Circle that tilts 45deg on card hover */}
                    <div className="w-8 h-8 rounded-full bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 group-hover:bg-[#3fc298] group-hover:text-[#2b452b] group-hover:border-[#3fc298] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shrink-0 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
