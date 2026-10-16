'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, X, FileText } from 'lucide-react';
import { Notice } from '@/lib/school-data';
import { useSchoolStore } from '@/lib/store';

export default function EditorialNotices() {
  const { notices } = useSchoolStore();
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const activeNotices = notices.filter(n => n.isActive).slice(0, 6);

  return (
    <section id="notices" className="relative bg-[#F4F7F5] py-20 lg:py-28 border-t border-[#4a8168]/20">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3fc298]/10 border border-[#3fc298]/30 text-xs font-mono tracking-widest text-[#218a8a] uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#218a8a]" />
              <span>/ Bulletins & Circulars</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#2b452b] uppercase tracking-tight">
              Notice Board & Circulars
            </h2>
            <p className="text-xs sm:text-sm text-[#4a8168] mt-2 max-w-xl leading-relaxed font-normal">
              Official circulars, Karachi Secondary Board examination notifications, admissions updates, and campus schedules.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-mono font-bold text-[#246272] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#4a8168]/20 shadow-xs">
              /OCTOBER 2026 ACTIVE FEED
            </span>
          </div>
        </div>

        {/* Clean Lined Tabular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeNotices.map((notice, i) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveNotice(notice)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#4a8168]/20 hover:border-[#218a8a] shadow-xs hover:shadow-[0_12px_30px_rgba(33,138,138,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Date Stamp & Category */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#F4F7F5]">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30">
                    /{notice.category}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#246272] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#4a8168]" />
                    <span>{notice.date.toUpperCase()}</span>
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-black uppercase tracking-tight text-[#2b452b] group-hover:text-[#218a8a] transition-colors leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs text-[#4a8168] mt-2.5 line-clamp-3 leading-relaxed font-normal">
                  {notice.content}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F4F7F5] flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-[#4a8168] group-hover:text-[#218a8a] transition-colors">
                  READ CIRCULAR
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F4F7F5] text-[#218a8a] border border-[#4a8168]/20 group-hover:bg-[#218a8a] group-hover:text-white group-hover:border-[#218a8a] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Notice Inspection Modal */}
      <AnimatePresence>
        {activeNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNotice(null)}
              className="fixed inset-0 bg-[#2b452b]/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#4a8168]/20 z-10"
            >
              <button
                onClick={() => setActiveNotice(null)}
                type="button"
                className="absolute top-5 right-5 p-2 rounded-full text-[#4a8168] hover:text-[#2b452b] hover:bg-[#F4F7F5] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#218a8a] text-white">
                  /{activeNotice.category}
                </span>
                <span className="text-xs font-mono text-[#4a8168] flex items-center gap-1 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-[#218a8a]" />
                  {activeNotice.date}
                </span>
              </div>

              <h3 className="font-serif text-xl font-black uppercase text-[#2b452b] mb-4 leading-snug">
                {activeNotice.title}
              </h3>

              <div className="bg-[#F4F7F5] rounded-2xl p-5 border border-[#4a8168]/20 text-xs sm:text-sm text-[#2b452b] leading-relaxed whitespace-pre-line">
                <p>{activeNotice.content}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4a8168]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4a8168] font-mono">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#218a8a]" />
                  <span>/ADMINISTRATION DESK</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-bold rounded-full transition-colors cursor-pointer text-xs uppercase"
                >
                  CLOSE CIRCULAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
