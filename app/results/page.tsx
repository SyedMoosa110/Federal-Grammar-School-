'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResultChecker from '@/components/ResultChecker';
import { ShieldCheck } from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F5] text-[#2b452b] w-full overflow-x-hidden antialiased selection:bg-[#218a8a] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-20 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Search and Result View */}
          <ResultChecker />

          {/* Grading System Reference */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)]">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#218a8a]" />
              <h3 className="font-serif font-bold text-base uppercase tracking-tight text-[#2b452b]">
                Board of Secondary Education Karachi (BSEK) Grading Standard
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-center text-xs">
              <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                <p className="font-serif font-black text-[#218a8a] text-base">A-1</p>
                <p className="font-bold text-[#2b452b] font-mono mt-0.5">80% & Above</p>
                <p className="text-[10px] text-[#4a8168] font-mono uppercase mt-1">Outstanding</p>
              </div>

              <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                <p className="font-serif font-black text-[#218a8a] text-base">A</p>
                <p className="font-bold text-[#2b452b] font-mono mt-0.5">70% to 79%</p>
                <p className="text-[10px] text-[#4a8168] font-mono uppercase mt-1">Excellent</p>
              </div>

              <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                <p className="font-serif font-black text-[#246272] text-base">B</p>
                <p className="font-bold text-[#2b452b] font-mono mt-0.5">60% to 69%</p>
                <p className="text-[10px] text-[#4a8168] font-mono uppercase mt-1">Very Good</p>
              </div>

              <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                <p className="font-serif font-black text-[#4a8168] text-base">C</p>
                <p className="font-bold text-[#2b452b] font-mono mt-0.5">50% to 59%</p>
                <p className="text-[10px] text-[#4a8168] font-mono uppercase mt-1">Good</p>
              </div>

              <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                <p className="font-serif font-black text-[#4a8168] text-base">D</p>
                <p className="font-bold text-[#2b452b] font-mono mt-0.5">40% to 49%</p>
                <p className="text-[10px] text-[#4a8168] font-mono uppercase mt-1">Fair / Pass</p>
              </div>
            </div>

            <p className="text-[11px] text-[#4a8168] mt-5 leading-relaxed font-mono">
              * Official Institutional Record: Online marksheet verification reflects digitized records from the school ledger. For certified physical transcripts bearing the Principal&apos;s embossed seal, please present the student roll number at the administration counter at A-17 Block 16, Federal B Area Karachi.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
