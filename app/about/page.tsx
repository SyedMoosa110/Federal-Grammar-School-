'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  BookOpen,
  CheckCircle2,
  Compass,
  Heart,
  History,
  Laptop,
  Users
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F5] text-[#2b452b] w-full overflow-x-hidden antialiased selection:bg-[#218a8a] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-[72px]">
        {/* Page Banner Header - Deep Ocean Teal */}
        <section className="bg-[#246272] text-white pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[#4a8168]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3fc298]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest text-[#3fc298] uppercase mb-4">
                <span>/ Institutional Heritage • Established 1988</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                About Federal <br />
                <span className="italic font-normal text-[#3fc298]">Grammar School</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mt-4 leading-relaxed font-light max-w-2xl">
                Serving Federal B Area and Gulberg Town Karachi for over three decades with distinguished academic rigor, moral character, and hands-on STEM education.
              </p>
            </div>
          </div>
        </section>

        {/* History & Campus Overview */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#4a8168]/20">
                  <Image
                    src="/images/real-google-campus.jpg"
                    alt="Federal Grammar Public High School Campus - Official Real Google Maps Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 bg-[#2b452b] text-[#F4F7F5] p-5 rounded-2xl shadow-2xl max-w-xs border border-[#4a8168]/30">
                  <p className="text-[10px] font-mono text-[#3fc298] uppercase font-bold tracking-wider">
                    / Verified Campus Center
                  </p>
                  <p className="text-xs font-medium mt-1 text-[#F4F7F5]/90">
                    A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-[#3fc298]/10 text-[#218a8a] uppercase border border-[#3fc298]/30">
                  <History className="w-3.5 h-3.5" />
                  <span>/ Origins & History</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#2b452b] leading-tight tracking-tight uppercase">
                  Over 38 Years of Continuous Academic Excellence
                </h2>

                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  Federal Grammar Public High School (FGPHS) was established in 1988 with the guiding mandate of providing families across Federal B Area with structured, English-medium, values-driven schooling at the highest standards of the Board of Secondary Education Karachi (BSEK).
                </p>

                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  Over the decades, the institution has nurtured thousands of alumni who have gone on to prestigious positions across medical colleges (Dow, Civil Hospital), engineering institutions (NED, FAST-NUCES), civil services, and corporate leadership.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                    <p className="font-serif text-2xl sm:text-3xl font-black text-[#218a8a]">1,200+</p>
                    <p className="text-[11px] sm:text-xs text-[#4a8168] font-bold mt-1 uppercase font-mono">
                      Graduates in Universities
                    </p>
                  </div>
                  <div className="p-4 bg-[#F4F7F5] rounded-2xl border border-[#4a8168]/20">
                    <p className="font-serif text-2xl sm:text-3xl font-black text-[#218a8a]">100%</p>
                    <p className="text-[11px] sm:text-xs text-[#4a8168] font-bold mt-1 uppercase font-mono">
                      Karachi Board Pass Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Core Values */}
        <section className="py-16 sm:py-24 bg-[#F4F7F5] border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-widest bg-[#3fc298]/10 px-3.5 py-1 rounded-full border border-[#3fc298]/30">
                / Guiding Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#2b452b] mt-3 uppercase tracking-tight">
                Vision, Mission & Ethical Creed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vision */}
              <div className="bg-white rounded-3xl p-7 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] space-y-4 hover:border-[#218a8a] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2b452b] uppercase tracking-tight">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  To be acknowledged as Karachi’s foremost community high school where academic excellence, computer literacy, and moral dignity converge to develop responsible citizens.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-3xl p-7 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] space-y-4 hover:border-[#218a8a] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2b452b] uppercase tracking-tight">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed">
                  To provide disciplined, rigorous, and technologically progressive education through modern pedagogical methods, Sindh Board syllabus mastery, and genuine character mentorship.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-3xl p-7 border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] space-y-4 hover:border-[#218a8a] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3fc298]/15 text-[#218a8a] border border-[#3fc298]/30 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2b452b] uppercase tracking-tight">Core Values</h3>
                <ul className="text-xs text-[#4a8168] space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Academic Integrity & Conceptual Mastery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Islamic Morals & Mutual Respect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Early Computer Science & Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0" />
                    <span>Civic Responsibility & National Pride</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones & Historical Partnerships */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-widest bg-[#3fc298]/10 px-3.5 py-1 rounded-full border border-[#3fc298]/30">
                / Key Milestones
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#2b452b] mt-3 uppercase tracking-tight">
                Distinguished Record of Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Highlight 1: IBA Hour of Code */}
              <div className="bg-[#F4F7F5] rounded-3xl p-7 sm:p-8 border border-[#4a8168]/20 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Laptop className="w-5 h-5 text-[#218a8a]" />
                    <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-wider">
                      / Historical STEM Record
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2b452b]">
                    IBA Karachi &ldquo;Hour of Code&rdquo; Initiative
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a8168] mt-2 leading-relaxed font-normal">
                    Federal Grammar Public High School holds the distinction of participating in the landmark <strong>&ldquo;Hour of Code&rdquo;</strong> computer literacy initiative featured in the official <em>IBA Karachi Newsletter (2016)</em>. Our secondary students engaged in programming algorithms, logic circuits, and interactive problem solving with university researchers.
                  </p>
                </div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#4a8168]/20">
                  <Image
                    src="/images/campus-entrance.jpg"
                    alt="Campus Main Entrance and Official Signage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Highlight 2: Civic Atlas & Youth Development */}
              <div className="bg-[#F4F7F5] rounded-3xl p-7 sm:p-8 border border-[#4a8168]/20 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-[#218a8a]" />
                    <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-wider">
                      / Community Leadership
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2b452b]">
                    Civic Atlas & Environmental Forums
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a8168] mt-2 leading-relaxed font-normal">
                    FGPHS scholars actively participate in community awareness, civic cleanliness drives, and public speaking competitions coordinated through educational alliances, instilling a deep sense of social responsibility and ethical citizenship.
                  </p>
                </div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#4a8168]/20">
                  <Image
                    src="/images/campus-security.jpg"
                    alt="Campus Security & Daily Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
