import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface CinematicIntroProps {
  onEnter: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnter }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase(3);
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0806] text-[#FAF8F4] flex flex-col items-center justify-center p-6 select-none overflow-hidden animate-in fade-in duration-500">
      
      {/* Background Soft Grain & Vignette */}
      <div className="absolute inset-0 dark-paper-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0806]/60 to-[#0A0806] pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={onEnter}
        className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#1C1814] hover:bg-[#C5A059] hover:text-[#0A0806] text-[#D8B572] text-xs font-mono uppercase tracking-widest border border-[#C5A059]/30 transition-all z-20"
      >
        Skip Intro ✕
      </button>

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        
        {/* Phase 1: Logo Reveal */}
        <div className={`transition-all duration-1000 transform ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
          <div className="flex justify-center mb-6">
            <img 
              src="/images/yugam-logo.png" 
              alt="YUGAM Calligraphy Logo" 
              className="h-24 sm:h-32 w-auto object-contain brightness-0 invert drop-shadow-[0_0_35px_rgba(197,160,89,0.5)]"
            />
          </div>
          <div className="space-y-1">
            <p className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-[0.25em] uppercase">
              YUGAM
            </p>
          </div>
        </div>

        {/* Phase 2: Tagline Reveal */}
        <div className={`transition-all duration-1000 delay-200 transform ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D8B572] font-medium tracking-wider">
            "A Voice of Generation"
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#A8A29A] uppercase tracking-widest mt-2">
            Astra College Union Magazine • 2025–2026
          </p>
          <p className="text-[11px] text-[#7A7369] font-sans mt-0.5">
            St. Joseph's College (Autonomous), Moolamattom
          </p>
        </div>

        {/* Phase 3: CTA Reveal */}
        <div className={`pt-6 transition-all duration-700 transform ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button
            onClick={onEnter}
            className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-sm uppercase tracking-widest shadow-gold-glow transition-all transform hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Enter The Magazine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Subtle Bottom Credit */}
      <div className="absolute bottom-6 text-[10px] font-mono text-[#524C44] tracking-widest uppercase">
        Volume 2025–26 • Autonomous Digital Edition
      </div>
    </div>
  );
};
