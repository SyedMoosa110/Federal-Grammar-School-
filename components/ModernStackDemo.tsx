'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Award,
  CheckCircle2,
  PartyPopper,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';

export interface ModernStackDemoProps {
  className?: string;
}

/**
 * ModernStackDemo showcases:
 * 1. motion/react viewport fade-in + hover scale micro-interactions
 * 2. Lucide icons integration
 * 3. Conditional Tailwind classes merged via cn()
 * 4. Interactive canvas-confetti celebration trigger
 * 5. Base shadcn/ui UI components (Card, Button, Badge)
 */
export default function ModernStackDemo({ className }: ModernStackDemoProps) {
  const [celebrated, setCelebrated] = useState(false);
  const [activeTier, setActiveTier] = useState<'science' | 'cs'>('cs');

  const triggerCelebration = () => {
    setCelebrated(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0f2b5c', '#f59e0b', '#10b981', '#3b82f6'],
      });
    } catch {
      // Fallback gracefully if canvas-confetti is unavailable
    }
    setTimeout(() => setCelebrated(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={cn('w-full max-w-xl mx-auto', className)}
    >
      <Card className="border-2 border-blue-600/30 shadow-xl overflow-hidden bg-white/95 backdrop-blur-md">
        <CardHeader className="bg-gradient-to-r from-blue-50/80 via-slate-50 to-amber-50/50 pb-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <Badge variant="gold" className="gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>Matric Stream 2026</span>
            </Badge>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
              BSEK Affiliated
            </span>
          </div>

          <CardTitle className="text-xl sm:text-2xl text-[#0f2b5c] flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-700" />
            <span>Academic Track Selection</span>
          </CardTitle>

          <CardDescription>
            Choose your secondary stream and experience smooth inertial scrolling & modern component styling.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-5 space-y-4">
          {/* Interactive Tier Toggle using cn() for conditional styling */}
          <div className="grid grid-cols-2 gap-2.5 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTier('cs')}
              className={cn(
                'py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5',
                activeTier === 'cs'
                  ? 'bg-[#0f2b5c] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Computer Science</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTier('science')}
              className={cn(
                'py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5',
                activeTier === 'science'
                  ? 'bg-[#0f2b5c] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Biology & Science</span>
            </button>
          </div>

          {/* Highlights List */}
          <div className="space-y-2 text-xs text-slate-700 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            {activeTier === 'cs' ? (
              <>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>IBA Karachi Hour of Code Programming Lab & Robotics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Python, HTML5/CSS3, and Board Practical Exam Syllabus</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Physics, Chemistry, and Biology Laboratory Coursework</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pre-Medical preparatory foundations with 100% BSEK pass rate</span>
                </div>
              </>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <span className="text-[11px] text-slate-500">
            Ready for Session 2026–2027 enrollment
          </span>

          <Button
            variant="gold"
            size="default"
            onClick={triggerCelebration}
            className="w-full sm:w-auto gap-2"
          >
            <PartyPopper className={cn('w-4 h-4 transition-transform', celebrated && 'animate-spin')} />
            <span>{celebrated ? 'Congratulations!' : 'Celebrate & Explore'}</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export { ModernStackDemo };
