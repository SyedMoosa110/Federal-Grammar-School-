'use client';

import React, { useState } from 'react';
import { useSchoolStore } from '@/lib/store';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  id?: string;
  isFullPage?: boolean;
}

export default function ContactSection({ id = 'contact', isFullPage = false }: ContactSectionProps) {
  const { profile, addInquiry } = useSchoolStore();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    agreed: false
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out your First Name, Email, and Message.');
      return;
    }
    if (!formData.agreed) {
      alert('Please check the communication consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: fullName,
          fatherName: 'Contact Us Note',
          contactNumber: formData.phone || profile.whatsapp,
          email: formData.email,
          selectedClass: formData.subject,
          gender: 'Male',
          message: formData.message,
          notes: 'Submitted via Editorial Contact Form'
        })
      }).catch(() => {
        // Fallback gracefully
      });

      const created = addInquiry({
        studentName: fullName,
        fatherName: 'Contact Inquiry',
        contactNumber: formData.phone || profile.whatsapp,
        email: formData.email,
        selectedClass: formData.subject,
        gender: 'Male',
        message: formData.message,
        notes: 'Submitted via Editorial Contact Desk'
      });
      setSubmittedRef(created.id);
      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.55 }
        });
      } catch {}
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={id}
      className={`w-full bg-[#F4F7F5] text-[#2b452b] transition-all relative overflow-hidden ${
        isFullPage ? 'py-12 sm:py-16 lg:py-24' : 'py-20 sm:py-28 lg:py-32 border-t border-[#4a8168]/20'
      }`}
    >
      {/* Decorative Subtle Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #218a8a 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: EDITORIAL DIRECTORY & INSTITUTIONAL CREST     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 sm:space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3fc298]/10 border border-[#3fc298]/30 text-xs font-mono uppercase tracking-widest text-[#218a8a] font-bold mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#218a8a] animate-pulse" />
                <span>/ Direct Communication Desk</span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#2b452b] leading-[1.05]">
                Contact Us
              </h2>
              
              <p className="text-base sm:text-lg text-[#4a8168] mt-4 font-normal max-w-xl leading-relaxed">
                We would be delighted to hear from you. Please send us your query, and our admissions team will respond shortly.
              </p>
            </div>

            {/* 2x2 Clean Contact Directory Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
              
              {/* Item 1: Email */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#4a8168]/20 hover:border-[#218a8a] hover:shadow-[0_8px_25px_rgba(33,138,138,0.12)] transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2b452b] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#218a8a]" />
                    <span>Email</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleCopy('admissions@fgphs.edu.pk', 'email')}
                    className="text-[10px] font-mono text-[#4a8168] hover:text-[#218a8a] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs text-[#4a8168] leading-relaxed mb-3">
                  Inquire by email for formal prospectus and queries.
                </p>
                <a
                  href="mailto:admissions@fgphs.edu.pk"
                  className="inline-block text-xs sm:text-sm font-bold text-[#2b452b] hover:text-[#218a8a] underline underline-offset-4 transition-colors font-mono"
                >
                  admissions@fgphs.edu.pk
                </a>
              </div>

              {/* Item 2: Phone */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#4a8168]/20 hover:border-[#218a8a] hover:shadow-[0_8px_25px_rgba(33,138,138,0.12)] transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2b452b] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#218a8a]" />
                    <span>Landline</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleCopy('021-36336037', 'phone')}
                    className="text-[10px] font-mono text-[#4a8168] hover:text-[#218a8a] transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs text-[#4a8168] leading-relaxed mb-3">
                  Call on weekdays from 7:30 AM to 1:30 PM.
                </p>
                <a
                  href="tel:02136336037"
                  className="inline-block text-xs sm:text-sm font-bold text-[#2b452b] hover:text-[#218a8a] underline underline-offset-4 transition-colors font-mono"
                >
                  021-36336037
                </a>
              </div>

              {/* Item 3: Mobile & WhatsApp */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#4a8168]/20 hover:border-[#218a8a] hover:shadow-[0_8px_25px_rgba(33,138,138,0.12)] transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2b452b] flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#218a8a]" />
                    <span>WhatsApp</span>
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#218a8a] bg-[#3fc298]/15 px-2 py-0.5 rounded-full border border-[#3fc298]/30">
                    Active Desk
                  </span>
                </div>
                <p className="text-xs text-[#4a8168] leading-relaxed mb-3">
                  Instant WhatsApp admissions desk from 9 AM to 5 PM.
                </p>
                <a
                  href={`https://wa.me/${(profile.whatsapp || '923213760773').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#218a8a] hover:underline underline-offset-4 font-mono"
                >
                  <span>{profile.mobile || '+92 321 3760773'}</span>
                  <ExternalLink className="w-3 h-3 text-[#218a8a]" />
                </a>
              </div>

              {/* Item 4: Campus Office */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#4a8168]/20 hover:border-[#218a8a] hover:shadow-[0_8px_25px_rgba(33,138,138,0.12)] transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2b452b] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#218a8a]" />
                    <span>Office</span>
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Block+16+Federal+B+Area+Karachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-[#218a8a] hover:underline transition-colors"
                  >
                    Map ↗
                  </a>
                </div>
                <p className="text-xs text-[#4a8168] leading-relaxed mb-2">
                  Visit us at our Karachi campus headquarters.
                </p>
                <p className="text-xs sm:text-sm text-[#2b452b] font-medium leading-relaxed">
                  {profile.address || 'A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950'}
                </p>
              </div>

            </div>

            {/* Institutional Seal & Credentials Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#4a8168]/20 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#4a8168]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#218a8a] shrink-0" />
                <span className="font-semibold text-[#2b452b]">BSEK Code: {profile.affiliationCode || 'BSEK-KHI-GUL-4192'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#4a8168]">
                  <Clock className="w-3.5 h-3.5 text-[#218a8a]" />
                  <span>Mon–Sat 7:30 AM–1:30 PM</span>
                </span>
                <span className="font-bold text-[#218a8a] bg-[#3fc298]/15 px-2.5 py-1 rounded-full border border-[#3fc298]/30">
                  Est. 1988
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CRISP WHITE FLOATING MESSAGE CARD            */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-7 sm:p-9 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(36,98,114,0.08)] border border-[#4a8168]/20 w-full transition-all">
              
              {submittedRef ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#3fc298]/15 text-[#218a8a] rounded-2xl flex items-center justify-center mx-auto shadow-xs border border-[#3fc298]/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#218a8a] font-bold bg-[#3fc298]/15 px-3.5 py-1.5 rounded-full inline-block border border-[#3fc298]/30">
                    / Message Successfully Dispatched
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#2b452b] tracking-tight">
                    Thank You for Contacting FGPHS
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#4a8168] leading-relaxed max-w-md mx-auto">
                    Your inquiry has been logged under Tracking Dossier{' '}
                    <strong className="font-mono text-[#218a8a] bg-[#3fc298]/15 px-2 py-0.5 rounded border border-[#3fc298]/30">
                      {submittedRef.toUpperCase()}
                    </strong>. 
                    Our admissions counselors will review your message and reply promptly.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={`https://wa.me/${(profile.whatsapp || '923213760773').replace(/[^0-9]/g, '')}?text=Assalam-o-Alaikum%2C%20I%20have%20submitted%20inquiry%20dossier%20${submittedRef}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow-up on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          subject: 'General Inquiry',
                          message: '',
                          agreed: false
                        });
                      }}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F4F7F5] hover:bg-white text-[#2b452b] font-mono text-xs uppercase font-bold transition-colors cursor-pointer border border-[#4a8168]/20"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b452b] tracking-tight">
                      Write Us a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a8168] mt-1 font-normal">
                      Have questions about admissions, syllabus, or board registration? Send us a message below.
                    </p>
                  </div>

                  {/* First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all placeholder:text-[#4a8168]/50 font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                        Last name *
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all placeholder:text-[#4a8168]/50 font-normal"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all placeholder:text-[#4a8168]/50 font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 321 3760773"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all placeholder:text-[#4a8168]/50 font-normal"
                      />
                    </div>
                  </div>

                  {/* Inquiry Topic Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                      Subject / Department
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl px-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all font-normal cursor-pointer"
                    >
                      <option value="General Inquiry">General School Inquiry</option>
                      <option value="Admissions 2026-2027">Admissions Session 2026–2027</option>
                      <option value="Fee Structure">Tuition & Fee Structure</option>
                      <option value="BSEK Board Examination">BSEK Board & Exam Verification</option>
                      <option value="Parent Counseling">Parent Counseling & Campus Visit</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2b452b] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Leave us a message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F4F7F5] hover:bg-white focus:bg-white text-[#2b452b] border border-[#4a8168]/30 rounded-2xl p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all placeholder:text-[#4a8168]/50 font-normal resize-none"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id={`privacyPolicy-${id}`}
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-4 h-4 rounded border-[#4a8168]/30 text-[#218a8a] focus:ring-[#218a8a] cursor-pointer accent-[#218a8a]"
                    />
                    <label
                      htmlFor={`privacyPolicy-${id}`}
                      className="text-xs text-[#4a8168] cursor-pointer select-none"
                    >
                      I agree to the Institutional Privacy Policy.
                    </label>
                  </div>

                  {/* Vibrant Sea Teal Pill Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_16px_rgba(33,138,138,0.3)] flex items-center justify-center gap-2 cursor-pointer min-h-[50px] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  {/* WhatsApp Direct Action Alternative */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-[#4a8168] font-mono">
                      Need immediate assistance?{' '}
                      <a
                        href={`https://wa.me/${(profile.whatsapp || '923213760773').replace(/[^0-9]/g, '')}?text=Assalam-o-Alaikum%2C%20I%20have%20an%20urgent%20inquiry%20regarding%20admissions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#218a8a] hover:text-[#3fc298] hover:underline inline-flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat directly on WhatsApp</span>
                      </a>
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
