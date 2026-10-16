'use client';

import { useState } from 'react';
import { useSchoolStore } from '@/lib/store';
import {
  Calculator,
  Printer,
  Receipt,
  Sparkles,
  X
} from 'lucide-react';

export default function FeeCalculator() {
  const { fees, profile } = useSchoolStore();
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(3); // Default to Class IX & X Matric
  const [siblingDiscount, setSiblingDiscount] = useState<number>(0);
  const [transportRoute, setTransportRoute] = useState<number>(0);
  const [showVoucherModal, setShowVoucherModal] = useState(false);

  const safeIndex = (selectedGradeIndex >= 0 && selectedGradeIndex < fees.length) ? selectedGradeIndex : 0;
  const selectedTier = fees[safeIndex] || fees[0];

  // Calculations
  const baseTuition = selectedTier.monthlyTuition;
  const lab = selectedTier.labCharges;
  const discountAmount = Math.round((baseTuition * siblingDiscount) / 100);
  const finalTuition = baseTuition - discountAmount;
  const totalMonthly = finalTuition + lab + transportRoute;
  const admissionInitialTotal = selectedTier.admissionFee + selectedTier.annualResourceFee + totalMonthly;

  const transportOptions = [
    { label: 'Self Conveyance / No School Van', cost: 0 },
    { label: 'Gulberg Town / Block 16 Local (Rs. 2,200/mo)', cost: 2200 },
    { label: 'F.B Area Blocks 1 to 20 (Rs. 2,800/mo)', cost: 2800 },
    { label: 'North Nazimabad / Buffer Zone (Rs. 3,500/mo)', cost: 3500 }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#4a8168]/20 shadow-[0_20px_50px_rgba(36,98,114,0.08)]">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#4a8168]/20">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30 mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#218a8a]" />
            <span>/ Official Fee Voucher Simulator</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-[#2b452b] uppercase tracking-tight">
            Tuition & Monthly Fee Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#4a8168] mt-1 font-normal">
            Calculate accurate monthly installments, laboratory charges, sibling concessions, and generate official admission deposit voucher.
          </p>
        </div>

        <button
          onClick={() => setShowVoucherModal(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white rounded-full text-xs font-mono uppercase tracking-wider font-bold shadow-md transition-all self-start md:self-auto cursor-pointer min-h-[44px]"
        >
          <Receipt className="w-4 h-4" />
          <span>Generate Voucher Preview</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Config Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Select Grade */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#2b452b] uppercase tracking-wider mb-2.5">
              1. Select Academic Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fees.map((tier, idx) => (
                <div
                  key={tier.grade}
                  onClick={() => setSelectedGradeIndex(idx)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedGradeIndex === idx
                      ? 'border-[#218a8a] bg-[#3fc298]/10 shadow-sm'
                      : 'border-[#4a8168]/20 hover:border-[#218a8a]/50 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-[#2b452b] font-serif">{tier.grade}</p>
                      <p className="text-[11px] text-[#218a8a] font-mono font-bold">{tier.section}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedGradeIndex === idx ? 'border-[#218a8a] bg-[#218a8a]' : 'border-[#4a8168]/40'
                    }`}>
                      {selectedGradeIndex === idx && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-mono font-black text-[#2b452b] mt-2">
                    Rs. {tier.monthlyTuition.toLocaleString()} <span className="text-[10px] font-normal text-[#4a8168] font-sans">/ month</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sibling Concession */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#2b452b] uppercase tracking-wider mb-2.5">
              2. Sibling Merit & Concession
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { label: 'First Child', pct: 0, sub: 'Standard Tuition' },
                { label: 'Second Child', pct: 15, sub: '15% Concession' },
                { label: 'Third Child', pct: 25, sub: '25% Concession' }
              ].map((item) => (
                <button
                  key={item.pct}
                  type="button"
                  onClick={() => setSiblingDiscount(item.pct)}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    siblingDiscount === item.pct
                      ? 'border-[#218a8a] bg-[#3fc298]/15 text-[#218a8a] font-bold ring-1 ring-[#218a8a]'
                      : 'border-[#4a8168]/20 text-[#4a8168] hover:bg-[#F4F7F5] text-xs'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">{item.pct}% Off</span>
                  <span className="text-[10px] text-[#4a8168] leading-tight block font-mono mt-0.5">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Transport Route */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#2b452b] uppercase tracking-wider mb-2.5">
              3. School Van Transport (Optional)
            </label>
            <select
              value={transportRoute}
              onChange={(e) => setTransportRoute(Number(e.target.value))}
              className="w-full p-3.5 text-xs sm:text-sm bg-[#F4F7F5] border border-[#4a8168]/30 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] font-medium text-[#2b452b]"
            >
              {transportOptions.map((opt) => (
                <option key={opt.cost} value={opt.cost}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Summary Card - Deep Ocean Teal Accent */}
        <div className="lg:col-span-5 bg-[#246272] text-[#F4F7F5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-[#4a8168]/30">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#2b452b] font-mono font-bold bg-[#3fc298] px-2.5 py-0.5 rounded-full">
                  /Official Estimate
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold uppercase tracking-tight text-white mt-2">
                  {selectedTier.grade}
                </h4>
              </div>
              <span className="bg-[#218a8a] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                Active Tier
              </span>
            </div>

            <div className="py-4 space-y-3 text-xs font-mono">
              <div className="flex justify-between text-[#F4F7F5]/80">
                <span className="font-sans">Standard Monthly Tuition:</span>
                <span className="font-bold text-white">Rs. {baseTuition.toLocaleString()}</span>
              </div>

              {siblingDiscount > 0 && (
                <div className="flex justify-between text-[#3fc298] font-bold">
                  <span className="font-sans">Sibling Concession ({siblingDiscount}%):</span>
                  <span>- Rs. {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-[#F4F7F5]/80">
                <span className="font-sans">Computer & Science Lab:</span>
                <span className="font-bold text-white">Rs. {lab.toLocaleString()}</span>
              </div>

              {transportRoute > 0 && (
                <div className="flex justify-between text-[#F4F7F5]/80">
                  <span className="font-sans">Van Transport Route:</span>
                  <span className="font-bold text-white">Rs. {transportRoute.toLocaleString()}</span>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                <div>
                  <p className="text-xs text-[#3fc298] font-bold uppercase tracking-wider font-mono">
                    Total Monthly Installment
                  </p>
                  <p className="text-[10px] text-[#F4F7F5]/60 font-sans">Payable by 10th of each calendar month</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl sm:text-3xl font-black text-white">
                    Rs. {totalMonthly.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* One-time Admission Details */}
            <div className="mt-4 p-4 rounded-2xl bg-[#2b452b]/50 border border-white/10 text-xs space-y-2 text-[#F4F7F5]/80 font-mono">
              <div className="font-bold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 text-[#3fc298] font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#3fc298]" /> One-Time New Admission Charges
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="font-sans">Admission Processing:</span>
                <span className="text-white">Rs. {selectedTier.admissionFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="font-sans">Annual Resource & Exams:</span>
                <span className="text-white">Rs. {selectedTier.annualResourceFee.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white text-xs">
                <span className="font-sans">Total Due Upon Admission:</span>
                <span className="text-[#3fc298] font-black">Rs. {admissionInitialTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setShowVoucherModal(true)}
              className="w-full py-4 bg-[#3fc298] hover:bg-white text-[#2b452b] font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <Printer className="w-4 h-4 text-[#2b452b]" />
              <span>Print / Download Sample Fee Voucher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Official Fee Voucher Modal */}
      {showVoucherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2b452b]/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-8 shadow-2xl border border-[#4a8168]/20 relative my-6 text-[#2b452b]">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#4a8168]/20 gap-2">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#218a8a]" />
                <h4 className="font-serif font-bold text-sm sm:text-base uppercase tracking-tight text-[#2b452b]">
                  Official Fee Voucher Preview
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-[#218a8a] text-white text-xs font-mono uppercase font-bold rounded-full hover:bg-[#3fc298] hover:text-[#2b452b] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print Voucher</span>
                </button>
                <button
                  onClick={() => setShowVoucherModal(false)}
                  className="p-2 text-[#4a8168] hover:text-[#2b452b] rounded-xl hover:bg-[#F4F7F5] cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#218a8a]" />
                </button>
              </div>
            </div>

            {/* Voucher Body */}
            <div className="mt-4 border-2 border-[#246272] rounded-2xl p-4 sm:p-6 bg-[#F4F7F5] text-[#2b452b] text-xs font-mono">
              {/* Header */}
              <div className="text-center pb-4 border-b-2 border-[#246272]">
                <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#4a8168] uppercase">
                  {profile.affiliation || 'Board of Secondary Education Karachi (BSEK) Recognized'}
                </p>
                <h3 className="font-serif text-lg sm:text-2xl font-black text-[#246272] uppercase tracking-wide mt-0.5">
                  {profile.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#4a8168] font-sans mt-0.5">
                  {profile.address} • Phone: {profile.landline} / {profile.mobile}
                </p>
                <div className="inline-block mt-2 px-3 py-1 bg-[#218a8a] text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider rounded-full">
                  Official Bank Deposit Challan — {profile.admissionsSession || 'Session 2026-2027'}
                </div>
              </div>

              {/* Student Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-[#4a8168]/20 text-[11px]">
                <div>
                  <span className="text-[#4a8168] block text-[10px] font-sans">Challan No:</span>
                  <span className="font-bold text-[#218a8a]">FG-VCH-2026-849</span>
                </div>
                <div>
                  <span className="text-[#4a8168] block text-[10px] font-sans">Grade / Class:</span>
                  <span className="font-bold text-[#2b452b]">{selectedTier.grade}</span>
                </div>
                <div>
                  <span className="text-[#4a8168] block text-[10px] font-sans">Issue Date:</span>
                  <span>14-Oct-2026</span>
                </div>
                <div>
                  <span className="text-[#4a8168] block text-[10px] font-sans">Due Date:</span>
                  <span className="font-bold text-[#218a8a]">10-Nov-2026</span>
                </div>
              </div>

              {/* Dues Breakdown Table */}
              <div className="py-4 overflow-x-auto">
                <table className="w-full text-left text-[11px] border-collapse min-w-[280px]">
                  <thead>
                    <tr className="border-b border-[#246272] font-bold text-[#2b452b]">
                      <th className="py-1">Description / Head</th>
                      <th className="py-1 text-right">Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#4a8168]/20">
                    <tr>
                      <td className="py-1.5">Monthly Tuition Fee</td>
                      <td className="py-1.5 text-right">Rs. {baseTuition.toLocaleString()}</td>
                    </tr>
                    {siblingDiscount > 0 && (
                      <tr className="text-[#218a8a] font-semibold">
                        <td className="py-1.5">Sibling Concession ({siblingDiscount}%)</td>
                        <td className="py-1.5 text-right">- Rs. {discountAmount.toLocaleString()}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-1.5">Computer Lab & Science Laboratory</td>
                      <td className="py-1.5 text-right">Rs. {lab.toLocaleString()}</td>
                    </tr>
                    {transportRoute > 0 && (
                      <tr>
                        <td className="py-1.5">School Van Transport Facility</td>
                        <td className="py-1.5 text-right">Rs. {transportRoute.toLocaleString()}</td>
                      </tr>
                    )}
                    <tr className="border-t-2 border-[#246272] font-bold text-xs bg-white">
                      <td className="py-2.5 px-2 text-[#218a8a]">Total Payable Within Due Date:</td>
                      <td className="py-2.5 px-2 text-right text-base text-[#246272] font-black">
                        Rs. {totalMonthly.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bank instruction & Signatures */}
              <div className="pt-3 border-t border-[#4a8168]/20 text-[10px] text-[#4a8168] space-y-2 font-sans">
                <p><strong>Designated Bank:</strong> Habib Bank Limited (HBL) / Meezan Bank, Federal B Area Branch Karachi.</p>
                <p>Late fee surcharge applicable after the 10th of every calendar month.</p>

                <div className="grid grid-cols-3 gap-2 pt-6 text-center text-[9px] sm:text-[10px] font-mono">
                  <div className="border-t border-[#4a8168]/20 pt-1 font-semibold">Bank Cashier</div>
                  <div className="border-t border-[#4a8168]/20 pt-1 font-semibold">Accounts Officer</div>
                  <div className="border-t border-[#4a8168]/20 pt-1 font-semibold">Parent / Depositor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
