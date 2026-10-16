'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSchoolStore } from '@/lib/store';
import { GalleryItem } from '@/lib/school-data';
import {
  Calendar,
  X,
  ZoomIn
} from 'lucide-react';

export default function GalleryPage() {
  const { gallery } = useSchoolStore();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const availableCategories = Array.from(new Set(gallery.map((g) => g.category))).filter(Boolean);
  const filters = ['All', ...availableCategories];

  const filteredItems = gallery.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F5] text-[#2b452b] w-full overflow-x-hidden antialiased selection:bg-[#218a8a] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-[72px]">
        {/* Banner - Deep Ocean Teal */}
        <section className="bg-[#246272] text-white pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[#4a8168]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3fc298]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest text-[#3fc298] uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3fc298]" />
                <span>/ Campus Visual Archive • Verified Photography</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Campus Gallery <br />
                <span className="italic font-normal text-[#3fc298]">& Facilities</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mt-4 leading-relaxed font-light max-w-2xl">
                Authentic photographic archives of Federal Grammar Public High School, Block 16 Federal B Area, showcasing classrooms, science laboratories, and campus life.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 sm:py-24 bg-[#F4F7F5] border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === filter
                      ? 'bg-[#218a8a] text-white font-bold shadow-md'
                      : 'bg-white text-[#4a8168] hover:text-[#2b452b] hover:bg-[#F4F7F5] border border-[#4a8168]/20'
                  }`}
                >
                  {filter === 'All' ? 'All Archive Photos' : filter}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] hover:shadow-[0_16px_36px_rgba(33,138,138,0.14)] hover:border-[#218a8a] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2b452b]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 bg-white rounded-full text-[#2b452b] font-mono font-bold text-xs flex items-center gap-2 shadow-xl">
                        <ZoomIn className="w-4 h-4 text-[#218a8a]" />
                        <span>Inspect Full Image</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30">
                        /{item.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#4a8168] flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#218a8a]" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold uppercase tracking-tight text-[#2b452b] group-hover:text-[#218a8a] text-base sm:text-lg transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#4a8168] mt-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2b452b]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-[#246272] rounded-3xl overflow-hidden shadow-2xl border border-[#4a8168]/30">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#246272] text-white border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#2b452b] bg-[#3fc298] px-2.5 py-0.5 rounded-full">
                  /{activeItem.category}
                </span>
                <span className="text-xs font-mono text-[#3fc298]">{activeItem.date}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-tight text-white">{activeItem.title}</h3>
              <p className="text-xs text-[#F4F7F5]/80 mt-1 leading-relaxed font-light">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
