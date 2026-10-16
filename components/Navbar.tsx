'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  GraduationCap,
  Calculator,
  MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAcademicsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setAcademicsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Academics', href: '/#programs', hasDropdown: true },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty', href: '/#faculty' },
    { name: 'Campus Life', href: '/#campus-life' },
    { name: 'About', href: '/about' },
    { name: 'Portal', href: '/results' },
  ];

  const academicItems = [
    { title: 'Montessori & Pre-School', sub: 'Early childhood foundation', href: '/#programs' },
    { title: 'Primary Wing (Grade 1-5)', sub: 'English, Science & Quran', href: '/#programs' },
    { title: 'Middle School (Grade 6-8)', sub: 'Laboratory & computing prep', href: '/#programs' },
    { title: 'BSEK Matric (Science & CS)', sub: 'Karachi Board 100% pass record', href: '/#programs' },
  ];

  return (
    <>
      {/* Full-Size Edge-to-Edge Sticky Navigation Header */}
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 border-b',
          scrolled
            ? 'bg-[#F4F7F5]/95 backdrop-blur-md border-[#4a8168]/20 shadow-[0_4px_24px_rgba(33,138,138,0.08)]'
            : 'bg-[#F4F7F5]/85 backdrop-blur-md border-[#4a8168]/20 shadow-xs'
        )}
      >
        <nav
          aria-label="Main Navigation"
          className="max-w-7xl 2xl:max-w-[1600px] mx-auto w-full flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5"
        >
          {/* Left: Brand Monogram / Logo with Clean Typography */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#218a8a] rounded-full p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden relative shadow-xs shrink-0 bg-[#246272] border border-[#218a8a] flex items-center justify-center text-white">
              <Image
                src="/images/fgphs-logo.png"
                alt="Federal Grammar School Crest"
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-xs sm:text-sm tracking-tight uppercase text-[#2b452b] group-hover:text-[#218a8a] transition-colors leading-none">
                Federal Grammar
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#4a8168] uppercase mt-0.5">
                Public High School • Est. 1988
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Animated Underline */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setAcademicsDropdown(true)}
                    onMouseLeave={() => setAcademicsDropdown(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setAcademicsDropdown(!academicsDropdown)}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-3.5 py-1.5 text-xs font-semibold text-[#4a8168] hover:text-[#2b452b] transition-colors flex items-center gap-1 rounded-full cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          academicsDropdown ? 'rotate-180 text-[#218a8a]' : 'text-[#218a8a]/70'
                        )}
                      />
                      {(hoveredLink === link.name || academicsDropdown) && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 inset-x-2 h-[2px] bg-[#218a8a] rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {academicsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-[#FFFFFF] rounded-2xl shadow-[0_16px_36px_rgba(36,98,114,0.15)] border border-[#4a8168]/20 p-2 z-50 space-y-1"
                        >
                          <div className="px-3 py-1.5 border-b border-[#F4F7F5]">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#218a8a] font-bold">
                              / Academic Streams
                            </span>
                          </div>
                          {academicItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setAcademicsDropdown(false)}
                              className="block p-2.5 rounded-xl hover:bg-[#F4F7F5] transition-colors group"
                            >
                              <p className="text-xs font-bold text-[#2b452b] group-hover:text-[#218a8a] transition-colors">
                                {item.title}
                              </p>
                              <p className="text-[10px] text-[#4a8168] mt-0.5">{item.sub}</p>
                            </Link>
                          ))}
                          <div className="pt-1.5 border-t border-[#F4F7F5] px-2 pb-1">
                            <Link
                              href="/academics"
                              onClick={() => setAcademicsDropdown(false)}
                              className="text-[11px] font-mono font-bold text-[#218a8a] hover:text-[#3fc298] hover:underline flex items-center justify-between"
                            >
                              <span>View Full Syllabus →</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (link.href === '/' && pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-semibold transition-colors block rounded-full',
                      isActive ? 'text-[#218a8a] font-bold' : 'text-[#4a8168] hover:text-[#2b452b]'
                    )}
                  >
                    {link.name}
                  </Link>
                  {(hoveredLink === link.name || isActive) && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 inset-x-2 h-[2px] bg-[#218a8a] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Vibrant Sea Teal Pill CTA Button ("Apply for Admission") with Hover to Mint #3fc298 */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 pl-3.5 sm:pl-4 pr-1.5 py-1.5 rounded-full bg-[#218a8a] hover:bg-[#3fc298] text-white hover:text-[#2b452b] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(33,138,138,0.25)] hover:shadow-[0_6px_20px_rgba(63,194,152,0.35)] cursor-pointer"
              >
                <span className="whitespace-nowrap">Apply for Admission</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#218a8a] group-hover:bg-[#2b452b] group-hover:text-white flex items-center justify-center transition-all group-hover:rotate-45 shadow-xs shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            {/* Circular Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F4F7F5] hover:bg-[#EBF0ED] border border-[#4a8168]/20 text-[#2b452b] flex items-center justify-center transition-all shadow-xs cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#218a8a]"
            >
              {menuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#218a8a]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b452b]" />}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Slide-out Full Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-[#2b452b]/60 backdrop-blur-sm z-50"
              aria-hidden="true"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-[#F4F7F5] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#4a8168]/20"
            >
              {/* Drawer Header */}
              <div className="p-5 sm:p-6 border-b border-[#4a8168]/20 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm bg-[#246272] shrink-0 border border-[#218a8a] flex items-center justify-center">
                    <Image
                      src="/images/fgphs-logo.png"
                      alt="FGPHS Crest"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-[#2b452b] text-sm leading-tight tracking-tight uppercase">
                      Federal Grammar
                    </h3>
                    <p className="text-[10px] font-mono text-[#4a8168] uppercase tracking-wider">
                      /Karachi • Est. 1988
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-[#F4F7F5] hover:bg-[#EBF0ED] text-[#2b452b] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#218a8a]" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-5 sm:p-6 space-y-5 flex-1">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#218a8a] font-bold block mb-2">
                    / Main Navigation
                  </span>

                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Academic Programs & Wings', href: '/#programs' },
                    { name: 'Admissions 2026–2027', href: '/admissions' },
                    { name: 'Faculty & Administration', href: '/#faculty' },
                    { name: 'Campus Life & Athletics', href: '/#campus-life' },
                    { name: 'Academic Notice Board', href: '/#notices' },
                    { name: 'About Federal Grammar', href: '/about' },
                    { name: 'Contact & Location Desk', href: '/#contact' },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3.5 py-2.5 rounded-xl font-bold text-sm text-[#2b452b] hover:bg-white hover:text-[#218a8a] border border-transparent hover:border-[#4a8168]/20 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Quick Utility Portals */}
                <div className="pt-4 border-t border-[#4a8168]/20 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#218a8a] font-bold block mb-1">
                    / Student & Parent Services
                  </span>

                  <Link
                    href="/results"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#4a8168]/20 hover:border-[#218a8a] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#3fc298]/15 text-[#218a8a] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-[#2b452b] group-hover:text-[#218a8a]">
                          Online Result Verification
                        </p>
                        <p className="text-[10px] text-[#4a8168] font-mono">BSEK Exam Transcripts</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#4a8168] group-hover:text-[#218a8a]" />
                  </Link>

                  <Link
                    href="/admissions"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#4a8168]/20 hover:border-[#218a8a] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#218a8a]/15 text-[#218a8a] flex items-center justify-center">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-[#2b452b] group-hover:text-[#218a8a]">
                          Admissions & Fee Estimator
                        </p>
                        <p className="text-[10px] text-[#4a8168] font-mono">Session 2026–2027 Active</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#4a8168] group-hover:text-[#218a8a]" />
                  </Link>
                </div>

                {/* Campus Verified Info Card */}
                <div className="p-4 rounded-2xl bg-white border border-[#4a8168]/20 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#2b452b] font-bold">
                    <MapPin className="w-4 h-4 text-[#218a8a]" />
                    <span>Block 16, Federal B Area, Karachi</span>
                  </div>
                  <p className="text-[#4a8168] text-[11px] leading-relaxed">
                    A-17, Gulberg Town, Karachi, 75950 • BSEK Code: BSEK-KHI-GUL-4192
                  </p>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-5 border-t border-[#4a8168]/20 bg-white space-y-3">
                <a
                  href="https://wa.me/923213760773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#218a8a] hover:bg-[#3fc298] text-white hover:text-[#2b452b] font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-[#4a8168] font-mono pt-1">
                  <span>Tel: 021-36336037</span>
                  <span className="font-bold text-[#218a8a]">7:30 AM – 1:30 PM</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
