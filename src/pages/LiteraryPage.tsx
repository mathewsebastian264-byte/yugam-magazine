import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContentStore } from '../services/contentStore';
import { LiteraryPiece } from '../data/literary';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Feather, BookOpen, Eye, ArrowRight, Sparkles, Filter, Bookmark } from 'lucide-react';

export const LiteraryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { literaryPieces } = useContentStore();

  const categories = ['All', 'Centerpiece', 'Poetry', 'Malayalam & Tamil', 'Stories & Articles', 'Graphic Comic'];

  const filteredPieces = literaryPieces.filter((piece) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Centerpiece') return piece.category === 'centerpiece';
    if (selectedCategory === 'Poetry') return piece.category === 'poem';
    if (selectedCategory === 'Malayalam & Tamil') return piece.category === 'regional' || piece.language === 'Malayalam' || piece.language === 'Tamil';
    if (selectedCategory === 'Stories & Articles') return piece.category === 'story';
    if (selectedCategory === 'Graphic Comic') return piece.category === 'comic';
    return true;
  });

  const scanImages = literaryPieces.map(p => `/images/magazine/page-${String(p.pageRef).padStart(2, '0')}.jpg`);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="V"
          badge="Creative Corpus & Poetry"
          title="Our Voices — Creative Archive"
          subtitle="Poems, Stories, Visual Comics, and Multi-Lingual Prose"
          description="Immerse in the literary reflections of St. Joseph's students — echoing joy, nostalgia, family bondings, and generational dreams."
        />

        {/* Filter Pills */}
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-14 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#C5A059] text-white font-bold shadow-sm'
                    : 'bg-[#EAE2D3] text-[#2A2520] hover:bg-[#DDD2BF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Creative Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece, idx) => {
            const isCenterpiece = piece.category === 'centerpiece';
            const scanImage = `/images/magazine/page-${String(piece.pageRef).padStart(2, '0')}.jpg`;

            return (
              <article
                key={piece.id}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl ${
                  isCenterpiece
                    ? 'bg-[#120F0C] text-white border-2 border-[#C5A059] md:col-span-2 lg:col-span-3'
                    : 'bg-[#F4EFE6] text-[#120F0C] border-[#C5A059]/30 shadow-editorial'
                }`}
              >
                {/* Background scan silhouette for centerpiece */}
                {isCenterpiece && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none filter grayscale"
                    style={{ backgroundImage: `url(${scanImage})` }}
                  />
                )}

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ${
                      isCenterpiece ? 'bg-[#C5A059] text-[#0A0806]' : 'bg-[#C5A059]/20 text-[#7E5B1D] border border-[#C5A059]/40'
                    }`}>
                      {piece.category === 'regional' ? `${piece.language} Literature` : piece.category}
                    </span>

                    <button
                      onClick={() => openLightbox(idx)}
                      className={`text-xs font-mono flex items-center gap-1 hover:underline ${
                        isCenterpiece ? 'text-[#D8B572]' : 'text-[#7E5B1D]'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Page {piece.pageRef}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className={`font-serif font-bold leading-tight ${
                      isCenterpiece ? 'text-2xl sm:text-4xl text-white uppercase tracking-wider' : 'text-xl sm:text-2xl text-[#120F0C]'
                    }`}>
                      {piece.title}
                    </h3>
                    {piece.subtitle && (
                      <p className={`font-serif italic text-xs sm:text-sm mt-1 ${isCenterpiece ? 'text-[#D8B572]' : 'text-[#7E5B1D]'}`}>
                        "{piece.subtitle}"
                      </p>
                    )}
                    <p className={`text-xs font-sans mt-2 ${isCenterpiece ? 'text-[#A8A29A]' : 'text-[#524C44]'}`}>
                      By <strong className={isCenterpiece ? 'text-white' : 'text-[#120F0C]'}>{piece.author}</strong> ({piece.department})
                    </p>
                  </div>

                  {piece.quote && (
                    <div className={`p-3.5 rounded-xl border-l-4 text-xs italic font-serif leading-relaxed ${
                      isCenterpiece ? 'bg-[#1C1814] border-[#C5A059] text-[#E5E0D6]' : 'bg-[#EAE2D3] border-[#C5A059] text-[#120F0C]'
                    }`}>
                      "{piece.quote}"
                    </div>
                  )}

                  {/* Excerpt */}
                  <div className={`space-y-2 font-serif text-xs sm:text-sm leading-relaxed ${
                    isCenterpiece ? 'text-[#D8D2C4] font-light tracking-wide' : 'text-[#2A2520]'
                  }`}>
                    {piece.stanzas.slice(0, isCenterpiece ? 6 : 4).map((line, sIdx) => (
                      <p key={sIdx} className="line-clamp-2">{line}</p>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className={`pt-4 mt-4 border-t flex items-center justify-between relative z-10 ${
                  isCenterpiece ? 'border-stone-800' : 'border-[#DDD2BF]'
                }`}>
                  <span className={`text-[11px] font-mono ${isCenterpiece ? 'text-[#D8B572]' : 'text-[#7A7369]'}`}>
                    {piece.stanzas.length} Stanzas / Lines
                  </span>

                  <Link
                    to={`/creative/${piece.id}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm ${
                      isCenterpiece
                        ? 'bg-[#C5A059] hover:bg-white text-[#0A0806]'
                        : 'bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806]'
                    }`}
                  >
                    <span>Read Full Piece</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={scanImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={literaryPieces[lightboxIndex]?.title}
        subtitle={`By ${literaryPieces[lightboxIndex]?.author} (${literaryPieces[lightboxIndex]?.department}) — Page ${literaryPieces[lightboxIndex]?.pageRef}`}
      />
    </div>
  );
};
