'use client';

import { useState } from 'react';
import { useSchoolStore } from '@/lib/store';
import {
  Send,
  CheckCircle2,
  User,
  Phone,
  Mail,
  School,
  MapPin,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InquiryForm({ defaultClass = '' }: { defaultClass?: string }) {
  const { addInquiry } = useSchoolStore();

  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    contactNumber: '',
    email: '',
    selectedClass: defaultClass || 'Class IX (Computer Science)',
    previousSchool: '',
    gender: 'Male' as 'Male' | 'Female',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.fatherName.trim() || !formData.contactNumber.trim()) {
      alert('Please fill in Student Name, Father Name, and Contact Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(err => console.log('API fallback', err));

      const created = addInquiry({
        studentName: formData.studentName,
        fatherName: formData.fatherName,
        contactNumber: formData.contactNumber,
        email: formData.email,
        selectedClass: formData.selectedClass,
        previousSchool: formData.previousSchool,
        gender: formData.gender,
        address: formData.address,
        message: formData.message,
        notes: 'Submitted via Online Website Portal'
      });

      setSubmittedRef(created.id);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#4a8168]/20 shadow-2xl text-center">
        <div className="w-16 h-16 bg-[#3fc298]/15 text-[#218a8a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs border border-[#3fc298]/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#218a8a] bg-[#3fc298]/15 px-3.5 py-1 rounded-full border border-[#3fc298]/30">
          / Application Logged In Registry
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2b452b] mt-4 mb-2">
          Application Received
        </h3>

        <p className="text-xs sm:text-sm text-[#4a8168] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for registering interest for <strong>{formData.studentName}</strong> ({formData.selectedClass}).
          Our admissions desk at Federal B Area Gulberg Town campus has received your portfolio.
        </p>

        <div className="bg-[#F4F7F5] rounded-2xl p-5 max-w-sm mx-auto border border-[#4a8168]/20 mb-6 text-left text-xs space-y-2.5 font-mono">
          <div className="flex justify-between items-center pb-2 border-b border-[#4a8168]/20">
            <span className="text-[#4a8168] font-sans">Tracking Reference:</span>
            <span className="font-bold text-[#218a8a] bg-[#3fc298]/15 px-2.5 py-0.5 rounded text-xs border border-[#3fc298]/30">
              {submittedRef.toUpperCase()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4a8168] font-sans">Contact Mobile:</span>
            <span className="font-bold text-[#2b452b]">{formData.contactNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4a8168] font-sans">Campus Center:</span>
            <span className="text-[#218a8a] font-bold">Federal B Area Block 16</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/923213760773?text=Assalam-o-Alaikum%20FGPHS%20Admissions%2C%20I%20have%20submitted%20inquiry%20reference%20${submittedRef.toUpperCase()}%20for%20${encodeURIComponent(formData.studentName)}%20(${encodeURIComponent(formData.selectedClass)}).`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#218a8a]/20 transition-all cursor-pointer"
          >
            <span>Connect via Admissions WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                studentName: '',
                fatherName: '',
                contactNumber: '',
                email: '',
                selectedClass: 'Class IX (Computer Science)',
                previousSchool: '',
                gender: 'Male',
                address: '',
                message: ''
              });
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F4F7F5] hover:bg-white text-[#2b452b] font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer border border-[#4a8168]/20"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#4a8168]/20 shadow-[0_20px_50px_rgba(36,98,114,0.08)] space-y-6">
      <div className="border-b border-[#4a8168]/20 pb-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#218a8a] uppercase font-bold">
            <span className="w-2 h-2 rounded-full bg-[#218a8a]" />
            <span>/ Admissions Desk • Session 2026–2027</span>
          </div>
          <span className="text-[11px] font-mono bg-[#3fc298]/10 text-[#246272] px-2.5 py-0.5 rounded border border-[#3fc298]/30">
            BSEK Code: BSEK-KHI-GUL-4192
          </span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2b452b] mt-2">
          Online Admission Inquiry
        </h3>
        <p className="text-xs text-[#4a8168] mt-1 font-normal">
          Complete the official form below. An academic counselor will contact you within 24 hours to schedule an entry assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Student Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Student Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Muhammad Farhan"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Father / Guardian Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Tariq Mehmood"
              value={formData.fatherName}
              onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact Mobile */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Parent Mobile Number (WhatsApp) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="tel"
              required
              placeholder="0321 1234567"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="email"
              placeholder="parent@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Selected Class */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Target Academic Level *
          </label>
          <select
            value={formData.selectedClass}
            onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
            className="w-full px-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] font-medium text-[#2b452b]"
          >
            <optgroup label="Montessori & Early Years">
              <option value="Montessori / Nursery">Montessori / Nursery (Age 3-4)</option>
              <option value="Kindergarten / Prep">Kindergarten / Prep (Age 4-5)</option>
            </optgroup>
            <optgroup label="Primary School (Grade 1 - 5)">
              <option value="Class I">Class I</option>
              <option value="Class II">Class II</option>
              <option value="Class III">Class III</option>
              <option value="Class IV">Class IV</option>
              <option value="Class V">Class V</option>
            </optgroup>
            <optgroup label="Middle School (Grade 6 - 8)">
              <option value="Class VI">Class VI</option>
              <option value="Class VII">Class VII</option>
              <option value="Class VIII">Class VIII</option>
            </optgroup>
            <optgroup label="Secondary Section (Karachi Board BSEK)">
              <option value="Class IX (Computer Science)">Class IX (Computer Science Group)</option>
              <option value="Class IX (Science - Biology)">Class IX (Science - Biology Group)</option>
              <option value="Class X (Computer Science)">Class X (Computer Science Group)</option>
              <option value="Class X (Science - Biology)">Class X (Science - Biology Group)</option>
            </optgroup>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Student Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'Male' | 'Female' })}
            className="w-full px-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] font-medium text-[#2b452b]"
          >
            <option value="Male">Boy (Male)</option>
            <option value="Female">Girl (Female)</option>
          </select>
        </div>
      </div>

      {/* Previous School & Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Previous School Attended (If Any)
          </label>
          <div className="relative">
            <School className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="e.g. Previous school name & area"
              value={formData.previousSchool}
              onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
            Residential Area / Address
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="e.g. Block 16, Federal B Area, Karachi"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full pl-10 pr-3.5 py-3 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all text-[#2b452b]"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#2b452b] mb-1.5 font-bold">
          Additional Inquiries or Remarks
        </label>
        <textarea
          rows={2}
          placeholder="Questions regarding transport routes, computer lab access, fee installments, or timings..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3.5 text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:border-transparent transition-all resize-none text-[#2b452b]"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-full bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-xl shadow-[#218a8a]/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer min-h-[48px]"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Registering Inquiry...</span>
          </span>
        ) : (
          <>
            <span>Submit Official Admission Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#4a8168] pt-2 border-t border-[#4a8168]/20 gap-2 text-center sm:text-left font-mono">
        <span>Reviewed daily by Admissions Directorate</span>
        <span className="font-bold text-[#218a8a] flex items-center gap-1 justify-center">
          <Sparkles className="w-3.5 h-3.5" />
          Direct WhatsApp / Call Follow-up
        </span>
      </div>
    </form>
  );
}
