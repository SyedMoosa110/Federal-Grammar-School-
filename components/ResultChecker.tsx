'use client';

import { useState, useEffect } from 'react';
import { StudentResult } from '@/lib/school-data';
import { useSchoolStore } from '@/lib/store';
import {
  Search,
  Award,
  Printer,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  QrCode
} from 'lucide-react';

export default function ResultChecker() {
  const { results, isLoaded } = useSchoolStore();
  const [rollInput, setRollInput] = useState('');
  const [searchedResult, setSearchedResult] = useState<StudentResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Default to first available result when store loads
  useEffect(() => {
    if (isLoaded && !searchedResult) {
      const keys = Object.keys(results);
      if (keys.length > 0) {
        setSearchedResult(results[keys[0]]);
      }
    }
  }, [isLoaded, results, searchedResult]);

  const handleSearch = (roll: string) => {
    const cleaned = roll.trim().toUpperCase();
    if (!cleaned) {
      setErrorMsg('Please enter a valid Roll Number.');
      return;
    }

    if (results[cleaned]) {
      setSearchedResult(results[cleaned]);
      setErrorMsg('');
    } else {
      setSearchedResult(null);
      const availableRolls = Object.keys(results).slice(0, 3).join(', ');
      setErrorMsg(`No record found for Roll Number "${cleaned}". Try: ${availableRolls || 'FG-2026-101'}`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Search Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#4a8168]/20 shadow-[0_20px_50px_rgba(36,98,114,0.08)]">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#3fc298]/10 text-[#218a8a] border border-[#3fc298]/30 uppercase">
            <Award className="w-3.5 h-3.5 text-[#218a8a]" />
            <span>/ Official Examination Verification</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#2b452b]">
            Online Student Result Portal
          </h2>
          <p className="text-xs sm:text-sm text-[#4a8168] font-normal max-w-xl mx-auto">
            Verify certified academic transcripts, mid-term report cards, and Board of Secondary Education Karachi (BSEK) assessment marks.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(rollInput);
            }}
            className="pt-4 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#218a8a] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Enter Roll Number (e.g. FG-2026-101)"
                value={rollInput}
                onChange={(e) => setRollInput(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 text-sm font-mono uppercase bg-[#F4F7F5] border border-[#4a8168]/30 text-[#2b452b] rounded-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#218a8a] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white font-mono uppercase tracking-wider font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <span>Verify Result</span>
            </button>
          </form>

          {/* Quick Sample Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-[#4a8168] text-[11px]">Active Sample Roll Numbers:</span>
            {['FG-2026-101', 'FG-2026-102', 'FG-2026-103'].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  setRollInput(sample);
                  handleSearch(sample);
                }}
                className="px-2.5 py-1 rounded bg-[#3fc298]/15 hover:bg-[#3fc298]/30 text-[#218a8a] text-[11px] font-bold border border-[#3fc298]/30 transition-colors cursor-pointer"
              >
                {sample}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs font-mono text-red-700 flex items-center gap-2 justify-center mt-3 text-left sm:text-center">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      </div>

      {/* Result Card Display */}
      {searchedResult && (
        <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#4a8168]/20 shadow-[0_20px_50px_rgba(36,98,114,0.08)] relative overflow-hidden animate-in fade-in duration-300">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#4a8168]/20 gap-3 print:hidden">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#3fc298]/15 text-[#218a8a] font-mono font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1.5 border border-[#3fc298]/30">
                <CheckCircle className="w-3.5 h-3.5 text-[#218a8a]" />
                <span>Verified Candidate Ledger</span>
              </span>
              <span className="text-xs font-mono text-[#4a8168]">• BSEK Registered Portfolio</span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#218a8a] hover:bg-[#3fc298] hover:text-[#2b452b] text-white rounded-full text-xs font-mono uppercase font-bold shadow transition-colors cursor-pointer self-start sm:self-auto min-h-[38px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Official Marksheet</span>
            </button>
          </div>

          {/* Marksheet Body */}
          <div className="pt-6">
            {/* Header */}
            <div className="text-center pb-6 border-b-2 border-[#246272]">
              <div className="flex items-center justify-center gap-2 mb-1">
                <GraduationCap className="w-6 h-6 text-[#218a8a]" />
                <h3 className="font-serif text-lg sm:text-2xl font-black text-[#2b452b] uppercase tracking-wide">
                  Federal Grammar Public High School
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#4a8168] font-medium">
                A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950, Pakistan
              </p>
              <p className="text-[10px] sm:text-[11px] font-mono font-bold text-[#218a8a] mt-0.5">
                Recognized by Board of Secondary Education Karachi (BSEK) • Affiliation Code: BSEK-KHI-GUL-4192
              </p>
              <div className="inline-block mt-3 px-3 py-1 bg-[#218a8a] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full">
                Official Statement of Marks & Academic Progress
              </div>
            </div>

            {/* Student Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#4a8168]/20 text-xs font-mono">
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Student Name
                </span>
                <span className="font-bold text-[#2b452b] text-xs sm:text-sm font-sans">{searchedResult.studentName}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Father Name
                </span>
                <span className="font-medium text-[#2b452b] text-xs sm:text-sm font-sans">{searchedResult.fatherName}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Roll Number
                </span>
                <span className="font-bold text-[#218a8a] text-xs sm:text-sm">{searchedResult.rollNo}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Class & Group
                </span>
                <span className="font-medium text-[#2b452b] text-xs sm:text-sm font-sans">
                  {searchedResult.classGrade} ({searchedResult.group})
                </span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Session
                </span>
                <span className="text-[#2b452b]">{searchedResult.session}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Examination
                </span>
                <span className="text-[#2b452b]">{searchedResult.exam}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Issue Date
                </span>
                <span className="text-[#2b452b]">{searchedResult.issueDate}</span>
              </div>
              <div>
                <span className="text-[#4a8168] block text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-wider">
                  Status
                </span>
                <span className="font-bold text-[#218a8a] bg-[#3fc298]/15 px-2 py-0.5 rounded border border-[#3fc298]/30 text-[11px]">
                  {searchedResult.status}
                </span>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="py-6 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[440px] font-mono">
                <thead>
                  <tr className="bg-[#F4F7F5] border-y-2 border-[#246272] font-bold text-[#2b452b]">
                    <th className="py-3 px-3">Subject / Paper</th>
                    <th className="py-3 px-3 text-center">Max Marks</th>
                    <th className="py-3 px-3 text-center">Marks Obtained</th>
                    <th className="py-3 px-3 text-center">Grade</th>
                    <th className="py-3 px-3 text-right">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4a8168]/20 font-medium text-[#2b452b]">
                  {searchedResult.subjects.map((sub, index) => (
                    <tr key={index} className="hover:bg-[#F4F7F5]">
                      <td className="py-3 px-3 font-sans font-bold text-[#2b452b]">{sub.name}</td>
                      <td className="py-3 px-3 text-center text-[#4a8168]">{sub.totalMarks}</td>
                      <td className="py-3 px-3 text-center font-bold text-[#2b452b]">{sub.obtainedMarks}</td>
                      <td className="py-3 px-3 text-center">
                        <span className="px-2.5 py-0.5 rounded bg-[#3fc298]/15 text-[#218a8a] font-bold text-[11px] border border-[#3fc298]/30">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-[#218a8a] text-[11px] font-bold">
                        {sub.obtainedMarks >= 80 ? 'Distinction' : 'Passed'}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-[#F4F7F5] border-t-2 border-[#246272] font-bold text-xs sm:text-sm">
                    <td className="py-3.5 px-3 text-[#218a8a] font-sans">Grand Aggregate:</td>
                    <td className="py-3.5 px-3 text-center text-[#4a8168]">{searchedResult.totalMarks}</td>
                    <td className="py-3.5 px-3 text-center text-[#218a8a] font-black">{searchedResult.obtainedMarks}</td>
                    <td className="py-3.5 px-3 text-center text-[#218a8a] font-black">{searchedResult.percentage}%</td>
                    <td className="py-3.5 px-3 text-right font-black text-[#246272]">{searchedResult.overallGrade}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Official Stamps & Signatures */}
            <div className="pt-6 border-t border-[#4a8168]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#4a8168]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl border border-[#4a8168]/30 flex items-center justify-center bg-[#F4F7F5] shrink-0">
                  <QrCode className="w-8 h-8 text-[#2b452b]" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono">
                  <p className="font-bold text-[#2b452b]">DIGITAL LEDGER VERIFIED</p>
                  <p className="text-[#4a8168]">Security Hash: BSEK-FG-8921-OK</p>
                </div>
              </div>

              <div className="flex justify-between w-full sm:w-auto gap-8 sm:gap-14 text-center text-[10px] sm:text-[11px] font-mono">
                <div className="border-t-2 border-[#4a8168]/30 w-28 sm:w-40 pt-1.5">
                  <p className="font-bold text-[#2b452b]">Controller of Exams</p>
                  <p className="text-[9px] text-[#4a8168] font-sans">FGPHS Examination Branch</p>
                </div>
                <div className="border-t-2 border-[#4a8168]/30 w-28 sm:w-40 pt-1.5">
                  <p className="font-bold text-[#2b452b]">Principal</p>
                  <p className="text-[9px] text-[#4a8168] font-sans">Prof. M. Tariq Khan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
