'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { useSchoolStore } from '@/lib/store';

export default function Footer() {
  const { profile } = useSchoolStore();

  return (
    <footer className="bg-[#2b452b] text-[#F4F7F5] pt-16 pb-12 border-t border-[#4a8168]/30">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Top Prominent Action Buttons Bar */}
        <div className="pb-12 border-b border-[#4a8168]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#3fc298] uppercase">
              /ADMISSIONS OPEN • ACADEMIC YEAR 2026–2027
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Start Your Educational Journey Today
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              href="/admissions"
              className="px-6 py-3.5 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-[0_4px_16px_rgba(33,138,138,0.35)]"
            >
              <span>APPLY FOR ADMISSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20inquire%20about%20the%20fee%20structure%20and%20admission%20process.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#3fc298] hover:bg-white text-[#2b452b] font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>FEE INQUIRY</span>
            </a>

            <Link
              href="/results"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#4a8168]/40 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span>RESULT PORTAL</span>
              <ArrowUpRight className="w-4 h-4 text-[#3fc298]" />
            </Link>
          </div>
        </div>

        {/* Multi-Column Editorial Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-[#4a8168]/30 text-xs">
          
          {/* Col 1: Identity & Crest (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md bg-[#246272] border border-[#3fc298]/30 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/fgphs-logo.png"
                  alt="Federal Grammar School Crest"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h4 className="font-serif text-white font-black text-base uppercase tracking-tight">
                  Federal Grammar
                </h4>
                <p className="text-[10px] font-mono text-[#3fc298] uppercase tracking-widest">
                  /Public High School • Karachi
                </p>
              </div>
            </div>

            <p className="text-[#F4F7F5]/80 leading-relaxed text-xs max-w-sm font-light">
              Established in 1988 in Gulberg Town, Karachi. Accredited by the Board of Secondary Education Karachi (BSEK). Dedicated to nurturing intellect, moral discipline, and cutting-edge STEM literacy.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#246272]/50 text-[#3fc298] border border-[#4a8168]/30">
                /BSEK Affiliation Code: {profile.affiliationCode || 'BSEK-KHI-GUL-4192'}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-white/5 text-white border border-white/10">
                /Est. 1988
              </span>
            </div>
          </div>

          {/* Col 2: Academics (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono font-bold text-xs uppercase tracking-widest text-[#3fc298]">
              /ACADEMICS
            </h5>
            <ul className="space-y-2 text-[#F4F7F5]/80 font-normal">
              <li>
                <Link href="/academics" className="hover:text-[#3fc298] transition-colors">
                  Pre-School / Montessori
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#3fc298] transition-colors">
                  Primary Wing (Classes 1–5)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#3fc298] transition-colors">
                  Middle School (Classes 6–8)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#3fc298] transition-colors">
                  Matric Science (Biology)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#3fc298] transition-colors">
                  Computer Science Stream
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#3fc298] transition-colors">
                  Science & STEM Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Administration (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono font-bold text-xs uppercase tracking-widest text-[#3fc298]">
              /ADMISSIONS
            </h5>
            <ul className="space-y-2 text-[#F4F7F5]/80 font-normal">
              <li>
                <Link href="/admissions" className="hover:text-[#3fc298] transition-colors">
                  Apply Online 2026
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#3fc298] transition-colors">
                  Result Verification
                </Link>
              </li>
              <li>
                <Link href="/#notices" className="hover:text-[#3fc298] transition-colors">
                  Official Circulars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3fc298] transition-colors">
                  Faculty & Administration
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#3fc298] transition-colors">
                  Campus Photo Archive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3fc298] transition-colors">
                  Campus Visiting Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Campus Location & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-mono font-bold text-xs uppercase tracking-widest text-[#3fc298]">
              /CAMPUS & LOCATION
            </h5>
            <div className="space-y-2.5 text-[#F4F7F5]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3fc298] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span>{profile.address || 'A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950, Pakistan'}</span>
                  <a
                    href="https://maps.google.com/?q=Block+16+Federal+B+Area+Karachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#3fc298] hover:underline ml-1 font-mono"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3fc298] shrink-0" />
                <a
                  href={`tel:${profile.mobile.replace(/\s+/g, '')}`}
                  className="hover:text-[#3fc298] font-bold text-white transition-colors"
                >
                  {profile.mobile}
                </a>
                <span className="text-white/30">/</span>
                <a
                  href={`tel:${profile.landline.replace(/[^0-9]/g, '')}`}
                  className="hover:text-[#3fc298] text-[#F4F7F5] transition-colors"
                >
                  {profile.landline}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3fc298] shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[#3fc298] text-[#F4F7F5] transition-colors"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#3fc298] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Office Hours: 7:30 AM – 1:30 PM</span>
                  <span className="text-[11px] text-[#F4F7F5]/60 font-mono">Monday through Saturday (Admin till 2:30 PM)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credentials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F4F7F5]/60 font-mono">
          <p>© 2026 FEDERAL GRAMMAR PUBLIC HIGH SCHOOL KARACHI. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-4 text-[#4a8168]">
            <span className="text-[#3fc298]">/BSEK KARACHI RECOGNIZED</span>
            <span className="text-white/20">•</span>
            <Link href="/about" className="hover:text-[#3fc298] transition-colors uppercase">
              ABOUT US
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="hover:text-[#3fc298] transition-colors uppercase">
              POLICY & CONDUCT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
