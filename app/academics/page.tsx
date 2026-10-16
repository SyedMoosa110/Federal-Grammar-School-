'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Laptop,
  Microscope,
  CheckCircle2
} from 'lucide-react';

export default function AcademicsPage() {
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
                <span>/ Academic Framework • BSEK Affiliated</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Academic Wings <br />
                <span className="italic font-normal text-[#3fc298]">& Curriculum</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mt-4 leading-relaxed font-light max-w-2xl">
                Structured progressive curriculum spanning early childhood Montessori discovery, comprehensive primary literacy, and Karachi Secondary Education Board (BSEK) science and computer science matriculation.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Levels Detail */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Level 1: Pre-Primary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#4a8168]/20">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30 uppercase">
                  / Early Childhood Education
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2b452b]">
                  Pre-Primary Wing (Montessori & Kindergarten)
                </h2>
                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  Our Pre-School section is designed to foster natural curiosity, spoken English fluency, phonics recognition, and foundational numeracy in a secure and cheerful setting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4a8168] pt-2 font-medium">
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Jolly Phonics & Spoken English drills</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Sensory & motor coordination kits</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Quranic recitation & daily Dua memorization</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Safe indoor play & activity stations</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F4F7F5] p-7 rounded-3xl border border-[#4a8168]/20 text-xs space-y-4 shadow-[0_8px_30px_rgba(33,138,138,0.06)]">
                <h4 className="font-serif font-bold text-[#2b452b] text-sm uppercase">
                  Key Learning Domains:
                </h4>
                <ul className="space-y-2 text-[#4a8168] font-normal">
                  <li>• English Language & Phonics Mastery</li>
                  <li>• Urdu Reading & Writing (حروف تہجی)</li>
                  <li>• Basic Mathematics & Spatial Concepts</li>
                  <li>• General Science & Environmental Awareness</li>
                  <li>• Expressive Art, Rhymes & Motor Grace</li>
                </ul>
                <div className="pt-3 border-t border-[#4a8168]/20">
                  <Link href="/admissions" className="text-[#218a8a] font-mono font-bold hover:underline">
                    Inquire for Nursery / Prep Admission →
                  </Link>
                </div>
              </div>
            </div>

            {/* Level 2: Primary & Middle */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#4a8168]/20">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30 uppercase">
                  / Elementary & Junior School
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2b452b]">
                  Primary & Middle Wings (Grade 1 to 8)
                </h2>
                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  The primary and middle years bridge basic literacy into rigorous subject mastery. Curriculum follows the Sindh Textbook Board augmented with modern English readers and computer software modules.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4a8168] pt-2 font-medium">
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Hands-on weekly computer lab classes</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>General science experimental demonstrations</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Speech, spelling bee & Naat competitions</span>
                  </div>
                  <div className="p-3.5 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Monthly assessments & parent feedback reports</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F4F7F5] p-7 rounded-3xl border border-[#4a8168]/20 text-xs space-y-4 shadow-[0_8px_30px_rgba(33,138,138,0.06)]">
                <h4 className="font-serif font-bold text-[#2b452b] text-sm uppercase">
                  Subjects Covered (Grade 1-8):
                </h4>
                <ul className="space-y-2 text-[#4a8168] font-normal">
                  <li>• English Grammar & Comprehension</li>
                  <li>• Urdu & Sindhi (Provincial Syllabus)</li>
                  <li>• Mathematics & Arithmetic Reasoning</li>
                  <li>• General Science (Physics, Chemistry, Bio basics)</li>
                  <li>• Computer Education & Practical Typing</li>
                  <li>• Social Studies & Pakistan Geography</li>
                  <li>• Islamiat / Ethics & Quranic Tajweed</li>
                </ul>
              </div>
            </div>

            {/* Level 3: Secondary (Class 9 & 10 Matric) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30 uppercase">
                  / BSEK Karachi Secondary Certification
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2b452b]">
                  Matriculation — Class IX & X
                </h2>
                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  As an officially listed institution under the Board of Secondary Education Karachi, FGPHS prepares students thoroughly for the Secondary School Certificate (SSC) examinations with two high-demand streams:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Stream A: Science Group */}
                  <div className="p-5 bg-[#F4F7F5] rounded-3xl border border-[#4a8168]/20 space-y-2 hover:border-[#218a8a] transition-colors">
                    <div className="flex items-center gap-2 text-[#218a8a] font-bold text-sm">
                      <Microscope className="w-5 h-5 text-[#218a8a]" />
                      <span className="uppercase font-mono">Science (Biology) Group</span>
                    </div>
                    <p className="text-xs text-[#4a8168]">
                      Ideal for students aiming for pre-medical college admissions, biotechnology, and health sciences.
                    </p>
                    <ul className="text-[11px] text-[#4a8168] space-y-1 pt-1 font-normal font-mono">
                      <li>• Physics (Theory + Board Practicals)</li>
                      <li>• Chemistry (Theory + Board Practicals)</li>
                      <li>• Biology (Theory + Lab Practicals)</li>
                      <li>• Mathematics, English, Urdu, Islamiat, Pak Studies</li>
                    </ul>
                  </div>

                  {/* Stream B: Computer Science Group */}
                  <div className="p-5 bg-[#F4F7F5] rounded-3xl border border-[#4a8168]/20 space-y-2 hover:border-[#218a8a] transition-colors">
                    <div className="flex items-center gap-2 text-[#218a8a] font-bold text-sm">
                      <Laptop className="w-5 h-5 text-[#218a8a]" />
                      <span className="uppercase font-mono">Computer Science Group</span>
                    </div>
                    <p className="text-xs text-[#4a8168]">
                      Ideal for students aiming for software engineering, computer systems, and pre-engineering colleges.
                    </p>
                    <ul className="text-[11px] text-[#4a8168] space-y-1 pt-1 font-normal font-mono">
                      <li>• Computer Science (Theory + Lab Exam)</li>
                      <li>• Physics (Theory + Lab Practicals)</li>
                      <li>• Advanced Mathematics</li>
                      <li>• English, Urdu, Islamiat, Pak Studies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-[#4a8168]/20">
                  <Image
                    src="/images/campus-facade-gate.jpg"
                    alt="Federal Grammar Public High School Academic Campus Karachi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 p-5 bg-white text-[#2b452b] rounded-2xl text-xs space-y-1 border border-[#4a8168]/20 shadow-xs">
                  <p className="font-serif font-bold text-[#218a8a]">/ BSEK Karachi Examination Excellence</p>
                  <p className="text-[#4a8168] font-sans text-xs">
                    Comprehensive past paper drills, weekly test series, and board practical rehearsal ensure top grades for our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action - Deep Forest */}
        <section className="py-16 bg-[#2b452b] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3fc298] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
              / Academic Session 2026–2027
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Enroll Your Child for the Upcoming Academic Year
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F7F5]/80 max-w-xl mx-auto font-light">
              Limited seats in Pre-Primary, Middle, and Matriculation streams. Submit your inquiry online or visit our Block 16 campus reception.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Link
                href="/admissions"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all"
              >
                Start Online Admission Process →
              </Link>
              <Link
                href="/results"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all"
              >
                Verify Student Results
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
