'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import {
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ArchMember {
  id: string;
  name: string;
  role: string;
  image: string;
  rotation: string;
  translateY: string;
}

const ARCH_MEMBERS: ArchMember[] = [
  {
    id: 'm1',
    name: 'Engr. M. Hamza',
    role: 'BSEK Topper • FAST Alumnus',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    rotation: '-rotate-[60deg] lg:-rotate-[68deg]',
    translateY: 'translate-y-16 sm:translate-y-24 lg:translate-y-32'
  },
  {
    id: 'm2',
    name: 'Mrs. Saima Khurram',
    role: 'Montessori Directress',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    rotation: '-rotate-[42deg] lg:-rotate-[50deg]',
    translateY: 'translate-y-9 sm:translate-y-14 lg:translate-y-18'
  },
  {
    id: 'm3',
    name: 'Dr. Ayesha Rehan',
    role: 'Senior Physician & Parent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    rotation: '-rotate-[25deg] lg:-rotate-[32deg]',
    translateY: 'translate-y-4 sm:translate-y-6 lg:translate-y-8'
  },
  {
    id: 'm4',
    name: 'Prof. M. Tariq Khan',
    role: 'Principal & Administrator',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    rotation: '-rotate-[10deg] lg:-rotate-[14deg]',
    translateY: 'translate-y-1 sm:translate-y-2 lg:translate-y-2'
  },
  {
    id: 'm5',
    name: 'STEM Directorate',
    role: 'Robotics & Coding Mentors',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    rotation: 'rotate-0',
    translateY: 'translate-y-0'
  },
  {
    id: 'm6',
    name: 'Syed Ali Shan',
    role: 'A-Grade Science Scholar',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    rotation: 'rotate-[10deg] lg:rotate-[14deg]',
    translateY: 'translate-y-1 sm:translate-y-2 lg:translate-y-2'
  },
  {
    id: 'm7',
    name: 'Dr. Bilal Farooqi',
    role: 'Civil Hospital Resident',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rotation: 'rotate-[25deg] lg:rotate-[32deg]',
    translateY: 'translate-y-4 sm:translate-y-6 lg:translate-y-8'
  },
  {
    id: 'm8',
    name: 'Zainab Fatima',
    role: 'UI Designer & Alumna',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    rotation: 'rotate-[42deg] lg:rotate-[50deg]',
    translateY: 'translate-y-9 sm:translate-y-14 lg:translate-y-18'
  },
  {
    id: 'm9',
    name: 'M. Zubair Qureshi',
    role: 'Senior Physics Faculty',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    rotation: 'rotate-[60deg] lg:rotate-[68deg]',
    translateY: 'translate-y-16 sm:translate-y-24 lg:translate-y-32'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F5] text-[#2b452b] w-full overflow-x-hidden antialiased selection:bg-[#218a8a] selection:text-white">
      {/* Full-width sticky Navigation */}
      <Navbar />

      <main className="flex-1 w-full pt-[72px]">
        {/* ========================================================= */}
        {/* SECTION 1: FULL-SIZE EDITORIAL CONTACT US & FORM          */}
        {/* ========================================================= */}
        <ContactSection isFullPage={true} />

        {/* ========================================================= */}
        {/* SECTION 2: SEMI-CIRCULAR FAN ARCH OF FACULTY & STUDENTS   */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 lg:py-36 bg-[#246272] text-white relative overflow-hidden border-t border-[#4a8168]/30">
          <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            
            {/* The Semi-Circular Fan / Arch of Portraits */}
            <div className="relative pt-6 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden">
              <div className="flex items-center justify-center -space-x-3 sm:-space-x-4 md:-space-x-6 lg:-space-x-8 max-w-full py-6">
                {ARCH_MEMBERS.map((member) => (
                  <div
                    key={member.id}
                    className={`relative w-20 h-24 sm:w-28 sm:h-34 md:w-36 md:h-44 lg:w-44 lg:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-3 border-white bg-neutral-900 transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer shrink-0 ${member.rotation} ${member.translateY}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 150px, 180px"
                      className="object-cover"
                    />
                    
                    {/* Subtle Overlay Label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-2 sm:p-3 flex flex-col justify-end text-white">
                      <p className="text-[10px] sm:text-xs font-bold leading-tight">{member.name}</p>
                      <p className="text-[8px] sm:text-[10px] text-neutral-300 truncate">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Content Under the Arch */}
            <div className="max-w-3xl mx-auto text-center space-y-4 pt-4 sm:pt-6">
              {/* Star Rating Badge */}
              <div className="inline-flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-1 text-[#3fc298]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3fc298] text-[#3fc298]" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-white">
                  4.9 Institutional Rating
                </p>
                <p className="text-[11px] text-[#F4F7F5]/80 font-normal -mt-0.5">
                  Trusted by 1,200+ parents & alumni across Karachi
                </p>
              </div>

              {/* Bold / Italic Editorial Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Ready to Power Up <br />
                <span className="italic font-serif font-normal text-[#3fc298]">
                  Your Child&apos;s Future?
                </span>
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-[#F4F7F5]/80 max-w-lg mx-auto leading-relaxed font-normal">
                Join thousands of Karachi scholars boosting academic excellence with smarter STEM tools, Sindh board mastery, and dedicated moral character mentorship.
              </p>

              {/* Sea Teal Pill CTA Button with Arrow */}
              <div className="pt-3">
                <Link
                  href="/#admissions"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_8px_25px_rgba(33,138,138,0.35)] hover:scale-105 active:scale-95 group"
                >
                  <span>Apply for Admissions</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#218a8a] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: INTERACTIVE CAMPUS LOCATION MAP (FULL SIZE)   */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-t border-[#4a8168]/20">
          <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#218a8a] font-bold bg-[#3fc298]/10 px-3 py-1 rounded-full border border-[#3fc298]/30">
                  / Campus Visit Navigation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#2b452b] mt-2">
                  Visit Our Karachi Campus
                </h3>
                <p className="text-xs sm:text-sm text-[#4a8168] font-mono mt-1">
                  A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950, Pakistan
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Block+16+Federal+B+Area+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#218a8a] hover:underline"
              >
                <span>Open in Google Maps Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#4a8168]/20 shadow-xl h-80 sm:h-96 lg:h-[420px] relative bg-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.356499806465!2d67.0652778!3d24.9297222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4217111111%3A0x1111111111111111!2sBlock%2016%20Federal%20B%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075950!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Federal Grammar Public High School Karachi Location Map"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Master Multi-Column Footer */}
      <Footer />
    </div>
  );
}
