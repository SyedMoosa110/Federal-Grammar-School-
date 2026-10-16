'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, GraduationCap, Users, Award, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: string;
  category: 'alumni' | 'parent';
  name: string;
  role: string;
  badge: string;
  avatarText: string;
  rating: number;
  quote: string;
  achievement?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    category: 'alumni',
    name: 'Engr. Muhammad Hamza Siddiqui',
    role: 'Senior Software Engineer & Tech Lead',
    badge: 'BSEK Matric Topper • Class of 2016',
    avatarText: 'HS',
    rating: 5,
    quote:
      'The analytical foundation and computer science mentorship I received at Federal Grammar School were exceptional. Studying under teachers who cared about conceptual clarity rather than rote memorization prepared me directly for NED University of Engineering & Technology.',
    achievement: '92.4% BSEK Science Group • Software Graduate',
  },
  {
    id: 't2',
    category: 'parent',
    name: 'Dr. Ayesha Rehan',
    role: 'Consultant Physician & Mother of 2 FGPHS Students',
    badge: 'Parent of Grade IV & Grade IX Students',
    avatarText: 'AR',
    rating: 5,
    quote:
      'Finding an institution in Federal B Area that combines rigorous academic standards with traditional moral values and character development is rare. Federal Grammar School has given my daughter the confidence to speak in public, excel in sciences, and cultivate genuine curiosity.',
    achievement: 'Campus Parent since 2018'
  },
  {
    id: 't3',
    category: 'alumni',
    name: 'Dr. Bilal Ahmed Farooqi',
    role: 'Medical Resident, Civil Hospital Karachi',
    badge: 'BSEK Biology Merit • Class of 2017',
    avatarText: 'BF',
    rating: 5,
    quote:
      'Our biology and chemistry laboratory sessions at Federal Grammar were second to none. The teachers spent extra hours after school conducting practicals and solving Karachi Board past papers, which directly helped me clear the MDCAT on my first attempt.',
    achievement: 'Dow University MBBS Graduate',
  },
  {
    id: 't4',
    category: 'parent',
    name: 'Syed Tariq Mehmood',
    role: 'Chartered Accountant & Resident of Gulberg Town',
    badge: 'Parent of Class X Matric Candidate',
    avatarText: 'TM',
    rating: 5,
    quote:
      'The administrative discipline and regular parent-teacher reviews keep us informed about every exam, attendance record, and test result. When my son needed extra help in Mathematics before the board exams, the faculty organized remedial sessions without any hesitation.',
    achievement: '100% Attendance & Academic Distinction'
  },
  {
    id: 't5',
    category: 'alumni',
    name: 'Zainab Fatima',
    role: 'Product Designer & Visual Artist',
    badge: 'Montessori to Secondary Alumna',
    avatarText: 'ZF',
    rating: 5,
    quote:
      'From annual debates and speech competitions to science exhibitions, Federal Grammar taught me that education is multifaceted. The creative freedom and encouraging faculty helped me discover my true passion for digital design and communication.',
    achievement: 'Indus Valley School of Art Alumna',
  },
  {
    id: 't6',
    category: 'parent',
    name: 'Mrs. Saima Khurram',
    role: 'Educator & Mother of Early Years Student',
    badge: 'Montessori Parent Community',
    avatarText: 'SK',
    rating: 5,
    quote:
      'The Montessori wing provides a safe, nurturing environment where kids develop early phonics, sensory learning, and social grace. My 4-year-old comes home excited every single day and recites new concepts with genuine joy.',
    achievement: 'Early Childhood Milestone Awardee'
  }
];

export default function TestimonialsMasonry() {
  const [filter, setFilter] = useState<'all' | 'alumni' | 'parent'>('all');

  const filtered = testimonials.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="testimonials" className="relative bg-[#F4F7F5] py-20 sm:py-28 overflow-hidden border-t border-[#4a8168]/20">
      
      {/* Background Subtle Mint Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3fc298]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#4a8168]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3fc298]/10 border border-[#3fc298]/30 text-xs font-mono tracking-widest text-[#218a8a] uppercase mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#218a8a]" />
              <span>/ Parent & Alumni Voice</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2b452b] leading-tight">
              Testimonials & Reflections
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#4a8168] leading-relaxed font-normal">
            Reflections from parents, Karachi Board toppers, doctors, and engineers whose foundational education began at Federal Grammar Public High School.
          </p>
        </div>

        {/* Filter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'all'
                ? 'bg-[#218a8a] text-white font-bold shadow-md'
                : 'bg-white text-[#4a8168] hover:text-[#2b452b] hover:bg-[#F4F7F5] border border-[#4a8168]/20'
            }`}
          >
            All Perspectives ({testimonials.length})
          </button>
          <button
            onClick={() => setFilter('alumni')}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'alumni'
                ? 'bg-[#218a8a] text-white font-bold shadow-md'
                : 'bg-white text-[#4a8168] hover:text-[#2b452b] hover:bg-[#F4F7F5] border border-[#4a8168]/20'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Alumni & Toppers</span>
          </button>
          <button
            onClick={() => setFilter('parent')}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'parent'
                ? 'bg-[#218a8a] text-white font-bold shadow-md'
                : 'bg-white text-[#4a8168] hover:text-[#2b452b] hover:bg-[#F4F7F5] border border-[#4a8168]/20'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Parent Community</span>
          </button>
        </div>

        {/* Masonry / Responsive Grid on Soft Ivory Backdrop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-7 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] hover:shadow-[0_16px_36px_rgba(33,138,138,0.14)] hover:border-[#218a8a]/60 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Row: Stars + Category Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#218a8a] text-[#218a8a]" />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Teal Quote Marks */}
                  <div className="mb-3 text-[#246272]/30">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>

                  {/* Body Quote */}
                  <p className="text-sm text-[#2b452b]/80 leading-relaxed font-normal mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: User Avatar & Attribution */}
                <div className="pt-5 border-t border-[#F4F7F5] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black tracking-wider text-white shadow-xs bg-[#246272]">
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-xs text-[#2b452b]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#4a8168] line-clamp-1">{item.role}</p>
                    </div>
                  </div>

                  {item.achievement && (
                    <div
                      title={item.achievement}
                      className="hidden sm:flex items-center gap-1 text-[10px] text-[#218a8a] font-mono font-bold"
                    >
                      <Award className="w-3.5 h-3.5 text-[#218a8a]" />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Editorial Callout in Deep Ocean Teal */}
        <div className="mt-14 p-8 rounded-3xl bg-[#246272] border border-[#4a8168]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#3fc298] text-[#2b452b] flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-md">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-tight">
                Are you a Federal Grammar School Alumnus?
              </h4>
              <p className="text-xs text-[#F4F7F5]/80">
                Join our Alumni Network and mentor the next generation of scholars across Karachi.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923213760773?text=Assalam-o-Alaikum%20FGPHS%20Administration%2C%20I%20am%20an%20alumnus%20of%20Federal%20Grammar%20School%20and%20would%20like%20to%20connect%20with%20the%20Alumni%20Directory."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#3fc298] hover:bg-white text-[#2b452b] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_16px_rgba(63,194,152,0.3)] hover:scale-105 shrink-0 cursor-pointer"
          >
            Connect With Alumni Registry →
          </a>
        </div>
      </div>
    </section>
  );
}
