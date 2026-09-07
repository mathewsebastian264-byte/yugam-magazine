import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, BookOpen, Shield, Sparkles } from 'lucide-react';
import { useContentStore } from '../services/contentStore';
import { WideContainer } from './layout/LayoutPrimitives';
import { DiamondDivider } from './DiamondDivider';

export const Footer: React.FC = () => {
  const { magazineInfo } = useContentStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0806] text-[#FAF8F4] border-t-2 border-[#C5A059] relative overflow-hidden">
      {/* Background Soft Texture */}
      <div className="absolute inset-0 dark-paper-bg opacity-30 pointer-events-none" />

      <WideContainer className="py-16 sm:py-20 relative z-10">
        
        {/* Monumental Official YUGAM Logo Closing Banner */}
        <div className="text-center space-y-4 pb-14 border-b border-stone-800">
          <div className="flex justify-center">
            <img
              src="/images/yugam-logo.png"
              alt="YUGAM — A Voice of Generation"
              className="h-20 sm:h-28 md:h-36 w-auto object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(197,160,89,0.35)]"
            />
          </div>

          <p className="text-xs sm:text-sm text-stone-400 font-mono uppercase tracking-widest max-w-xl mx-auto">
            Astra College Union Magazine • Academic Year 2025–2026
          </p>
        </div>

        {/* 4-Column Structured Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14">
          
          {/* Col 1: Institution Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D8B572] border-b border-stone-800 pb-2">
              The Institution
            </h4>
            <div className="space-y-2 text-xs text-stone-300 font-sans leading-relaxed">
              <p className="font-bold text-white text-sm">
                {magazineInfo.collegeName}
              </p>
              <p>{magazineInfo.location}</p>
              <p className="text-[#D8B572] font-mono text-[11px] pt-1">
                {magazineInfo.accreditation}
              </p>
              <p className="text-stone-400 text-[11px]">
                Autonomous • Affiliated to Mahatma Gandhi University
              </p>
            </div>
          </div>

          {/* Col 2: Magazine Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D8B572] border-b border-stone-800 pb-2">
              Explore Chapters
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
              <Link to="/editorial" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Editorial Board</Link>
              <Link to="/union" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Union Council</Link>
              <Link to="/messages" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Messages</Link>
              <Link to="/events" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Events & Fests</Link>
              <Link to="/creative" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Creative Archive</Link>
              <Link to="/achievers" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Achievers & Art</Link>
              <Link to="/gallery" className="hover:text-[#D8B572] transition-colors py-0.5">❖ Photo Gallery</Link>
              <Link to="/about" className="hover:text-[#D8B572] transition-colors py-0.5">❖ About College</Link>
            </div>
          </div>

          {/* Col 3: Digital Archive & Reader */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D8B572] border-b border-stone-800 pb-2">
              Print Edition Archive
            </h4>
            <div className="space-y-2.5">
              <Link
                to="/archive"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161410] hover:bg-[#C5A059] hover:text-[#0A0806] text-[#D8B572] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-wider transition-all group"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <div>
                  <span className="block font-bold">Digital Flipbook Reader</span>
                  <span className="text-[10px] opacity-80 normal-case font-normal">All 76 Rasterized Pages</span>
                </div>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#120F0C] border border-stone-800 text-[#D8B572] text-[11px] font-mono w-full">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>{magazineInfo.circulationNote}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#D8B572] border-b border-stone-800 pb-2">
              Reader Navigation
            </h4>
            <div className="space-y-2">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161410] hover:bg-[#C5A059] hover:text-[#0A0806] text-stone-200 text-xs font-mono uppercase tracking-wider transition-colors border border-stone-800 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>

              <Link
                to="/archive"
                className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-[#120F0C] hover:bg-stone-800 text-[#D8B572] hover:text-white text-[11px] font-mono transition-colors border border-[#C5A059]/20"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open 76-Page Flipbook</span>
              </Link>
            </div>
          </div>

        </div>

        <DiamondDivider variant="gold" className="my-8 opacity-40" />

        {/* Copyright & Disclaimer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center md:text-left font-sans">
          <p className="max-w-3xl leading-relaxed">
            {magazineInfo.copyrightNotice}
          </p>
          <div className="flex items-center gap-2 shrink-0 text-stone-300 font-mono text-[11px]">
            <span>Volume <strong>2025–2026</strong></span>
            <span>•</span>
            <span className="text-[#D8B572]">Astra College Union</span>
          </div>
        </div>

      </WideContainer>
    </footer>
  );
};
