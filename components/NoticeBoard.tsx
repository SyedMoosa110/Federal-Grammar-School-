'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Notice } from '@/lib/school-data';
import { useSchoolStore } from '@/lib/store';
import {
  Bell,
  Calendar,
  FileText,
  X,
  ChevronRight
} from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';

export default function NoticeBoard() {
  const { notices } = useSchoolStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalNotice, setActiveModalNotice] = useState<Notice | null>(null);

  const categories = ['All', 'Urgent', 'Academic', 'Examination', 'Holiday'];

  const filteredNotices = notices
    .filter(n => n.isActive)
    .filter(n => selectedCategory === 'All' || n.category === selectedCategory);

  const getBadgeStyle = (category: Notice['category']) => {
    switch (category) {
      case 'Urgent':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Examination':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Academic':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Holiday':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    }
  };

  return (
    <section id="notices" className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/90 text-[#0f2b5c] mb-2 border border-blue-200/60">
              <Bell className="w-3.5 h-3.5 text-blue-700 animate-bounce" />
              <span>Official Circulars & Bulletins</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2b5c] tracking-tight">
              School Notice Board
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Real-time administrative notices, Karachi Board examination dates, and curricular announcements
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full md:w-auto bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0f2b5c] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredNotices.map((notice, index) => (
            <AnimatedCard
              key={notice.id}
              delay={0.05 * index}
              onClick={() => setActiveModalNotice(notice)}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {notice.priority === 'High' && (
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                  <div className="bg-red-500 text-white text-[9px] font-black uppercase text-center py-1 absolute top-3 right-[-32px] w-28 transform rotate-45 shadow-xs">
                    Urgent
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                      notice.category
                    )}`}
                  >
                    {notice.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3" />
                    {notice.date}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm sm:text-base line-clamp-2 mb-2 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-900">
                <span>Read Full Announcement</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No notices in this category right now.</p>
            <p className="text-xs text-slate-500 mt-1">Select &quot;All&quot; to view all active announcements.</p>
          </div>
        )}
      </div>

      {/* Notice Detail Animated Modal */}
      <AnimatePresence>
        {activeModalNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalNotice(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 z-10"
            >
              <button
                onClick={() => setActiveModalNotice(null)}
                type="button"
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close circular details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                    activeModalNotice.category
                  )}`}
                >
                  {activeModalNotice.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeModalNotice.date}
                </span>
              </div>

              <h3 className="text-base sm:text-xl font-black text-[#0f2b5c] mb-4 leading-snug">
                {activeModalNotice.title}
              </h3>

              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                <p>{activeModalNotice.content}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <span className="text-[11px] text-center sm:text-left">
                  FGPHS Administration Desk • Gulberg Town Karachi
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalNotice(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#0f2b5c] text-white font-bold rounded-xl hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  Close Circular
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
