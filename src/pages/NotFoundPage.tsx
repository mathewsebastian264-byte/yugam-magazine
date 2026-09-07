import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Home } from 'lucide-react';
import { DiamondDivider } from '../components/DiamondDivider';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center p-6 bg-[#FAF8F4] text-[#120F0C] text-center">
      <div className="max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#120F0C] border-2 border-[#C5A059] flex items-center justify-center text-[#D8B572] font-serif font-bold text-3xl mx-auto shadow-md">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C]">
            Page Lost in the Archives
          </h1>
          <p className="font-serif italic text-base text-[#7E5B1D]">
            "Not all who wander through these pages are lost, but this chapter cannot be found."
          </p>
        </div>

        <DiamondDivider variant="gold" className="max-w-xs mx-auto my-4" />

        <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed font-sans">
          The requested edition page or article may have moved or is not cataloged in the current 2025–26 issue.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#9E7628] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Cover</span>
          </Link>
          <Link
            to="/archive"
            className="px-5 py-3 rounded-xl bg-[#120F0C] hover:bg-[#2A2520] text-[#D8B572] font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#C5A059]/40 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open 76-Page Reader</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
