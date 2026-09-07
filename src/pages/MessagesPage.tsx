import React, { useState } from 'react';
import { messages } from '../data/messages';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Quote, Eye } from 'lucide-react';

export const MessagesPage: React.FC = () => {
  const [activeMessageId, setActiveMessageId] = useState(messages[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const messageImages = messages.map(m => m.image);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="II"
          badge="Official Communications"
          title="Editorial Messages & Notes"
          subtitle="Inspiring Perspectives from College Leadership and the Editorial Desk"
          description="Read the official messages of guidance, pride, and artistic expression for the release of 'Yugam' 2025–26."
        />

        {/* Tab Navigation (Horizontal scroll on mobile, centered on desktop) */}
        <div className="flex items-center sm:justify-center gap-2 mb-10 sm:mb-14 overflow-x-auto no-scrollbar py-2">
          {messages.map((msg) => {
            const isActive = activeMessageId === msg.id;
            return (
              <button
                key={msg.id}
                onClick={() => setActiveMessageId(msg.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase shrink-0 transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C5A059] text-white shadow-md font-bold'
                    : 'bg-[#EAE2D3] text-[#2A2520] hover:bg-[#DDD2BF]'
                }`}
              >
                <span className="text-xs">❖</span>
                <span>{msg.role}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Message Sections */}
        <div className="space-y-12 sm:space-y-16">
          {messages.map((msg, index) => {
            if (activeMessageId !== msg.id && activeMessageId !== 'all') return null;

            return (
              <article
                key={msg.id}
                className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-6 sm:p-10 lg:p-14 shadow-editorial relative overflow-hidden"
              >
                <Quote className="absolute -bottom-8 -right-8 w-40 h-40 sm:w-56 sm:h-56 text-[#C5A059]/10 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                  
                  {/* Left Column: Author Portrait & Page Scan */}
                  <div className="lg:col-span-4 space-y-5 sm:space-y-6 text-center lg:text-left">
                    <div className="relative group inline-block mx-auto lg:mx-0">
                      <div className="w-48 h-60 sm:w-60 sm:h-76 rounded-2xl overflow-hidden border-4 border-[#FAF8F4] shadow-2xl bg-[#120F0C] mx-auto">
                        <img
                          src={msg.image}
                          alt={msg.author}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <button
                        onClick={() => openLightbox(index)}
                        className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#C5A059]/40 shadow-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect Original Scan (p.{msg.pageRef})</span>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#120F0C]">
                        {msg.author}
                      </h3>
                      <p className="text-xs font-bold text-[#7E5B1D] uppercase tracking-wider font-mono">
                        {msg.role}
                      </p>
                      {msg.department && (
                        <p className="text-xs text-[#524C44] font-medium">
                          {msg.department}
                        </p>
                      )}
                    </div>

                    {msg.quote && (
                      <div className="p-4 bg-[#EAE2D3]/90 rounded-2xl border-l-4 border-[#C5A059] text-xs italic font-serif text-[#120F0C] text-left leading-relaxed shadow-sm">
                        "{msg.quote}"
                      </div>
                    )}
                  </div>

                  {/* Right Column: Full Verbatim Text */}
                  <div className="lg:col-span-8 space-y-5 sm:space-y-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#7E5B1D] font-bold block mb-1">
                        Official Magazine Address
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#120F0C]">
                        {msg.title}
                      </h2>
                      {msg.subtitle && (
                        <p className="font-serif italic text-sm sm:text-base text-[#7E5B1D] mt-1">
                          "{msg.subtitle}"
                        </p>
                      )}
                    </div>

                    <DiamondDivider variant="gold" className="my-4" />

                    <div className="space-y-4 text-[#2A2520] text-sm sm:text-base leading-relaxed font-sans font-normal">
                      {msg.content.map((paragraph, pIdx) => {
                        const isFirst = pIdx === 0;
                        return (
                          <p
                            key={pIdx}
                            className={isFirst ? "editorial-dropcap font-medium" : ""}
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>

                    {msg.signoff && (
                      <div className="pt-6 mt-6 border-t border-[#DDD2BF] text-right">
                        <p className="font-serif italic text-[#120F0C] font-bold text-sm sm:text-base">
                          — {msg.signoff}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Lightbox for Scanned Pages */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={messageImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={messages[lightboxIndex]?.title}
        subtitle={`${messages[lightboxIndex]?.author} (${messages[lightboxIndex]?.role})`}
      />
    </div>
  );
};
