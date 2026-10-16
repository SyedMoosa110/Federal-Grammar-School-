'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';
import FeeCalculator from '@/components/FeeCalculator';
import {
  Calendar,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export default function AdmissionsPage() {
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
                <span>/ Admissions & Tuition Portfolio • Session 2026–2027</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Admission Guidelines <br />
                <span className="italic font-normal text-[#3fc298]">& Enrollment</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mt-4 leading-relaxed font-light max-w-2xl">
                Transparent admission criteria, age requirements, fee estimation, and direct online application for Federal Grammar Public High School, Block 16 Federal B Area Karachi.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Admission Process */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#4a8168]/20 mb-12">
              <div>
                <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-widest bg-[#3fc298]/10 px-3.5 py-1 rounded-full border border-[#3fc298]/30">
                  / Step-by-Step Pathway
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#2b452b] mt-3 uppercase tracking-tight">
                  Transparent 4-Stage Enrollment Protocol
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-[#4a8168] font-normal leading-relaxed">
                Admissions open for Pre-School, Primary, Middle, and Matriculation (BSEK Science & Computer Science groups).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-7 rounded-3xl bg-[#F4F7F5] border border-[#4a8168]/20 relative space-y-3 hover:border-[#218a8a] transition-all">
                <span className="font-mono text-xs font-bold text-[#218a8a] bg-[#3fc298]/15 border border-[#3fc298]/30 px-3 py-1 rounded-full inline-block">
                  STAGE 01
                </span>
                <h3 className="font-serif font-bold text-base uppercase tracking-tight text-[#2b452b]">
                  Application Dossier
                </h3>
                <p className="text-xs text-[#4a8168] leading-relaxed">
                  Submit the online admission form below or acquire a physical prospectus from the Block 16 campus reception during office hours.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#F4F7F5] border border-[#4a8168]/20 relative space-y-3 hover:border-[#218a8a] transition-all">
                <span className="font-mono text-xs font-bold text-[#218a8a] bg-[#3fc298]/15 border border-[#3fc298]/30 px-3 py-1 rounded-full inline-block">
                  STAGE 02
                </span>
                <h3 className="font-serif font-bold text-base uppercase tracking-tight text-[#2b452b]">
                  Diagnostic Evaluation
                </h3>
                <p className="text-xs text-[#4a8168] leading-relaxed">
                  Basic grade-appropriate assessment (English, Mathematics, Urdu) and an interactive parent dialogue with the academic supervisor.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#F4F7F5] border border-[#4a8168]/20 relative space-y-3 hover:border-[#218a8a] transition-all">
                <span className="font-mono text-xs font-bold text-[#218a8a] bg-[#3fc298]/15 border border-[#3fc298]/30 px-3 py-1 rounded-full inline-block">
                  STAGE 03
                </span>
                <h3 className="font-serif font-bold text-base uppercase tracking-tight text-[#2b452b]">
                  Fee Voucher Issuance
                </h3>
                <p className="text-xs text-[#4a8168] leading-relaxed">
                  Receive the official bank fee voucher deposit slip and submit dues at designated partner bank branches.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#F4F7F5] border border-[#4a8168]/20 relative space-y-3 hover:border-[#218a8a] transition-all">
                <span className="font-mono text-xs font-bold text-[#218a8a] bg-[#3fc298]/15 border border-[#3fc298]/30 px-3 py-1 rounded-full inline-block">
                  STAGE 04
                </span>
                <h3 className="font-serif font-bold text-base uppercase tracking-tight text-[#2b452b]">
                  Induction & Kit
                </h3>
                <p className="text-xs text-[#4a8168] leading-relaxed">
                  Collect student identity card, official uniform specifications, syllabus handbook, and orientation timetable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents & Age Criteria */}
        <section className="py-16 sm:py-24 bg-[#F4F7F5] border-b border-[#4a8168]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1: Required Documentation */}
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] space-y-5">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#218a8a]" />
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-[#2b452b]">
                    Mandatory Documentation
                  </h3>
                </div>
                <ul className="text-xs sm:text-sm text-[#4a8168] space-y-3 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0 mt-0.5" />
                    <span>Copy of NADRA B-Form or Child Official Birth Certificate (Verified)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0 mt-0.5" />
                    <span>Copy of Father&apos;s / Legal Guardian&apos;s Computerized CNIC</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0 mt-0.5" />
                    <span>4 recent passport-size colored photographs (light blue background)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0 mt-0.5" />
                    <span>Original School Leaving Certificate (SLC) & Report Card (for Grade 2 & above)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#218a8a] shrink-0 mt-0.5" />
                    <span>Karachi Board Migration Certificate (if transferring from other educational boards)</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Age Criteria */}
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#4a8168]/20 shadow-[0_8px_30px_rgba(33,138,138,0.06)] space-y-5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#218a8a]" />
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-[#2b452b]">
                    Age Criteria (As of August 2026)
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#4a8168]/20 text-[#4a8168] font-mono uppercase tracking-wider">
                        <th className="py-2.5">Academic Grade</th>
                        <th className="py-2.5">Permissible Age Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#4a8168]/15 text-[#4a8168] font-medium">
                      <tr>
                        <td className="py-2.5 font-bold text-[#2b452b]">Montessori / Nursery</td>
                        <td className="py-2.5 font-mono text-[#4a8168]">3.0 to 4.0 Years</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-[#2b452b]">Kindergarten / Prep</td>
                        <td className="py-2.5 font-mono text-[#4a8168]">4.0 to 5.0 Years</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-[#2b452b]">Class I (Primary)</td>
                        <td className="py-2.5 font-mono text-[#4a8168]">5.5 to 6.5 Years</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-[#2b452b]">Class VI (Middle)</td>
                        <td className="py-2.5 font-mono text-[#4a8168]">10.5 to 12.0 Years</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-[#2b452b]">Class IX (BSEK Matric)</td>
                        <td className="py-2.5 font-mono text-[#4a8168]">13.5 to 15.0 Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Application Form Section */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#4a8168]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold text-[#218a8a] uppercase tracking-widest bg-[#3fc298]/10 px-3.5 py-1 rounded-full border border-[#3fc298]/30">
                / Direct Enrollment Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#2b452b] mt-3">
                Submit Online Admission Application
              </h2>
              <p className="text-xs sm:text-sm text-[#4a8168] mt-2 font-normal">
                Provide student and parent contact details below to immediately log your application with the FGPHS administration registry.
              </p>
            </div>

            <InquiryForm />
          </div>
        </section>

        {/* Interactive Fee Calculator Section */}
        <section id="fee-calculator" className="py-16 sm:py-24 bg-[#F4F7F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeeCalculator />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
