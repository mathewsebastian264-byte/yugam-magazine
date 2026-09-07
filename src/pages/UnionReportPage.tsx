import React, { useState } from 'react';
import { useContentStore } from '../services/contentStore';
import { WideContainer } from '../components/layout/LayoutPrimitives';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Calendar, Eye, Flag, Trophy, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export const UnionReportPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { unionReport: unionReportData } = useContentStore();

  const reportScans = [
    '/images/magazine/page-11.jpg',
    '/images/magazine/page-12.jpg',
    '/images/magazine/page-13.jpg',
    '/images/magazine/page-14.jpg',
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <WideContainer>
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="III"
          badge="Year-in-Review"
          title="Union Annual Report 2025–26"
          subtitle={`Annual Activity Report — ${unionReportData.institution}`}
          description={`Presented by ${unionReportData.author} on behalf of the Astra College Union Council.`}
        />

        {/* Quick Inspection CTA */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => openLightbox(0)}
            className="px-5 py-2.5 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all border border-[#C5A059]/40 shadow-sm cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Inspect Original Report Print Pages (p. 11–14)</span>
          </button>
        </div>

        {/* Executive Summary Banner */}
        <div className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-8 sm:p-12 shadow-editorial mb-16 relative overflow-hidden">
          <Bookmark className="absolute -top-6 -right-6 w-36 h-36 text-[#C5A059]/10 pointer-events-none" />
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] font-bold block">
              Academic Year: 2025–2026
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C]">
              Leadership, Creativity & Campus Unity
            </h2>
            <p className="editorial-dropcap text-[#2A2520] text-base sm:text-lg leading-relaxed font-sans">
              {unionReportData.introduction}
            </p>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l-2 border-[#C5A059]/50 ml-4 md:ml-20 lg:ml-32 space-y-12 pb-8">
          {unionReportData.sections.map((section, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#C5A059] border-2 border-[#FAF8F4] shadow-md" />

              <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-editorial hover:shadow-xl transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {section.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#7E5B1D] border border-[#C5A059]/40 font-bold">
                        {section.badge}
                      </span>
                    )}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#120F0C]">
                      {section.title}
                    </h3>
                  </div>

                  {section.date && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#524C44] bg-[#EAE2D3] px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-[#7E5B1D]" />
                      <span className="font-medium">{section.date}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#2A2520] leading-relaxed font-sans">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Section */}
        <div className="mt-16 bg-[#120F0C] text-white rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-[#C5A059] shadow-2xl text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D8B572] font-bold block">
            Annual Conclusion
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            A Year of Cherished Memories
          </h3>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#C8C2B5] leading-relaxed font-light">
            {unionReportData.conclusion}
          </p>
          <div className="pt-4">
            <span className="font-serif italic text-[#D8B572] font-bold text-sm sm:text-base">
              — {unionReportData.author}
            </span>
          </div>
        </div>

      </WideContainer>

      {/* Lightbox for Original Union Report Scans */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={reportScans}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title="Official Union Annual Report 2025–26"
        subtitle={`Page ${lightboxIndex + 11} of 76 — St. Joseph's College (Autonomous)`}
      />
    </div>
  );
};
