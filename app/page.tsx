'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroEditorial from '@/components/HeroEditorial';
import PhilosophyManifesto from '@/components/PhilosophyManifesto';
import AcademicPrograms from '@/components/AcademicPrograms';
import FacultyShowcase from '@/components/FacultyShowcase';
import StatsRibbon from '@/components/StatsRibbon';
import CampusLifeRibbon from '@/components/CampusLifeRibbon';
import EditorialNotices from '@/components/EditorialNotices';
import TestimonialsMasonry from '@/components/TestimonialsMasonry';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F5] text-[#2b452b] w-full overflow-x-hidden antialiased selection:bg-[#218a8a] selection:text-white">
      {/* SECTION A: Sticky Full-Width Header */}
      <Navbar />

      <main className="flex-1 w-full pt-[72px]">
        {/* SECTION B: Editorial Hero Section (Split Asymmetrical Banner) */}
        <HeroEditorial />

        {/* SECTION C: Institutional Values & Statement Ribbon (Full-Bleed Deep Forest Panel) */}
        <PhilosophyManifesto />

        {/* SECTION D: Academic Programs Hub (/Pre-School, /Primary, /Secondary, /Matric & Cambridge) */}
        <AcademicPrograms />

        {/* SECTION E: Faculty & Modern Infrastructure Bento Grid */}
        <FacultyShowcase />

        {/* SECTION F: Metrics & Numbers Ribbon (4-Column Sage Green Dividers) */}
        <StatsRibbon />

        {/* Co-Curricular & Campus Life Culture */}
        <CampusLifeRibbon />

        {/* SECTION G: Notice Board & Academic Circulars (Clean Lined Tabular Cards) */}
        <EditorialNotices />

        {/* SECTION H: Testimonials (Parent & Alumni Voice Masonry on Soft Ivory) */}
        <TestimonialsMasonry />

        {/* ========================================================= */}
        {/* EDITORIAL CONTACT US & DIRECT INQUIRY SECTION (FULL SIZE) */}
        {/* ========================================================= */}
        <ContactSection id="contact" />
      </main>

      {/* SECTION J: Master Multi-Column Footer */}
      <Footer />
    </div>
  );
}
