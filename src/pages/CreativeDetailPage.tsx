import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContentStore } from '../services/contentStore';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { ArrowLeft, Feather, Eye, BookOpen, Share2 } from 'lucide-react';

export const CreativeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { literaryPieces } = useContentStore();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const piece = literaryPieces.find((p) => p.id === slug) || literaryPieces[0];

  if (!piece) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#120F0C]">Piece Not Found</h2>
        <p className="text-xs text-[#524C44] mt-2 mb-6">The requested literary piece could not be located.</p>
        <Link to="/creative" className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-white text-xs font-bold uppercase">
          Back to Literature
        </Link>
      </div>
    );
  }

  const isCenterpiece = piece.category === 'centerpiece';
  const scanImage = `/images/magazine/page-${String(piece.pageRef).padStart(2, '0')}.jpg`;

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/creative"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#7E5B1D] hover:text-[#120F0C] uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Creative Archive</span>
          </Link>
          <span className="text-xs font-mono text-[#7A7369]">
            Magazine Page {piece.pageRef}
          </span>
        </div>

        {/* Centerpiece Poem Layout vs Regular Reading Layout */}
        {isCenterpiece ? (
          <article className="bg-[#120F0C] text-white rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#C5A059] shadow-2xl relative overflow-hidden text-center space-y-8">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none filter grayscale"
              style={{ backgroundImage: `url(${scanImage})` }}
            />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#D8B572] border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest font-semibold">
                <Feather className="w-3.5 h-3.5" />
                <span>Centerpiece Anthology • Page {piece.pageRef}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wider leading-tight">
                {piece.title}
              </h1>

              {piece.subtitle && (
                <p className="font-serif italic text-lg sm:text-xl text-[#D8B572]">
                  "{piece.subtitle}"
                </p>
              )}

              <DiamondDivider variant="gold" className="max-w-xs mx-auto my-6 opacity-60" />

              <div className="space-y-4 font-serif text-sm sm:text-lg md:text-xl tracking-widest leading-loose text-[#D8D2C4] uppercase font-light">
                {piece.stanzas.map((line, idx) => (
                  <p key={idx} className="hover:text-[#D8B572] transition-colors">
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-8 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs font-mono text-[#D8B572]">
                  {piece.department}
                </span>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-white text-[#0A0806] text-xs font-mono uppercase font-bold tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Print Scan</span>
                </button>
              </div>
            </div>
          </article>
        ) : (
          <article className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-8 sm:p-12 shadow-editorial space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#7E5B1D] border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest font-semibold">
                {piece.category === 'regional' ? `${piece.language} Literature` : piece.category}
              </span>
              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7E5B1D] hover:underline"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Original Page {piece.pageRef}</span>
              </button>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#120F0C] leading-tight">
                {piece.title}
              </h1>
              {piece.subtitle && (
                <p className="font-serif italic text-base sm:text-lg text-[#7E5B1D] mt-1">
                  "{piece.subtitle}"
                </p>
              )}
              <p className="text-sm font-semibold text-[#524C44] mt-2">
                Written by <strong className="text-[#120F0C]">{piece.author}</strong> ({piece.department})
              </p>
            </div>

            {piece.quote && (
              <div className="p-4 bg-[#EAE2D3] rounded-2xl border-l-4 border-[#C5A059] text-sm italic font-serif text-[#120F0C]">
                "{piece.quote}"
              </div>
            )}

            <DiamondDivider variant="gold" className="my-6 max-w-xs" />

            <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#2A2520] leading-relaxed font-sans whitespace-pre-line pt-2">
              {piece.stanzas.map((stanza, idx) => (
                <p key={idx}>{stanza}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#DDD2BF] flex items-center justify-between text-xs text-[#7A7369]">
              <span>St. Joseph's College (Autonomous), Moolamattom</span>
              <button
                onClick={() => setLightboxOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-mono uppercase font-bold tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Page Scan</span>
              </button>
            </div>
          </article>
        )}

      </div>

      {/* Lightbox for Original Scan */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={[scanImage]}
        currentIndex={0}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
        title={piece.title}
        subtitle={`Author: ${piece.author} (${piece.department}) — Page ${piece.pageRef}`}
      />
    </div>
  );
};
