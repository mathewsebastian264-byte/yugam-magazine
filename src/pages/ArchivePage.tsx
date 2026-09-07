import React, { useState, useRef } from 'react';
import { useContentStore } from '../services/contentStore';
import { WideContainer } from '../components/layout/LayoutPrimitives';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { BookOpen, Search, Grid, Maximize2, ChevronLeft, ChevronRight, Filter, Eye, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ArchivePage: React.FC = () => {
  const { archivePages } = useContentStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [readerMode, setReaderMode] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const categories = [
    'All',
    'Cover & Prelims',
    'Messages & Leadership',
    'Union Report',
    'Literary & Art',
    'Fests & Events',
    'Campus Life & Gallery',
  ];

  const filteredPages = archivePages.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(p.pageNumber).includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  const allImages = archivePages.map((p) => p.image);

  const openLightbox = (index: number) => {
    setActivePageIndex(index);
    setLightboxOpen(true);
  };

  const handleNextPage = () => {
    setActivePageIndex((prev) => (prev < 75 ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : 75));
  };

  // Mobile touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNextPage(); // Swiped left -> next page
    if (diff < -50) handlePrevPage(); // Swiped right -> prev page
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <WideContainer>
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="VIII"
          badge="Complete 76-Page Print Edition"
          title="Digital Archive & Interactive Reader"
          subtitle="Astra College Union Magazine 2025–26"
          description="Browse the entire 76-page magazine in high resolution. Toggle between the interactive single-page flipbook reader or the thumbnail grid index."
        />

        {/* View Mode Toggle & Search Toolbar */}
        <div className="bg-[#F4EFE6] rounded-2xl border border-[#C5A059]/30 p-4 mb-8 shadow-editorial flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Dual Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-[#EAE2D3] p-1 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setReaderMode(false)}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                !readerMode
                  ? 'bg-[#C5A059] text-white font-bold shadow-sm'
                  : 'text-[#2A2520] hover:text-[#120F0C]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid Index (76)</span>
            </button>

            <button
              onClick={() => setReaderMode(true)}
              className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                readerMode
                  ? 'bg-[#C5A059] text-white font-bold shadow-sm'
                  : 'text-[#2A2520] hover:text-[#120F0C]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Flipbook Reader</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7E5B1D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search page number, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF8F4] border border-[#DDD2BF] text-xs text-[#120F0C] placeholder-[#7A7369] focus:outline-none focus:ring-2 focus:ring-[#C5A059] font-sans"
            />
          </div>

        </div>

        {/* Category Filters */}
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2 mb-10 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#120F0C] text-[#D8B572] border border-[#C5A059] font-bold shadow-sm'
                    : 'bg-[#EAE2D3] text-[#2A2520] hover:bg-[#DDD2BF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 1. FLIPBOOK READER MODE */}
        {readerMode ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="bg-[#120F0C] rounded-3xl p-4 sm:p-8 border-2 border-[#C5A059] shadow-2xl relative select-none"
            >
              <div className="relative aspect-[3/4] max-h-[75vh] mx-auto rounded-xl overflow-hidden bg-black shadow-inner flex items-center justify-center">
                <img
                  src={allImages[activePageIndex]}
                  alt={`Yugam Page ${activePageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Floating Previous & Next Buttons */}
                <button
                  onClick={handlePrevPage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0A0806]/80 text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors border border-[#C5A059]/40 shadow-lg backdrop-blur-sm"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextPage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0A0806]/80 text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors border border-[#C5A059]/40 shadow-lg backdrop-blur-sm"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Enlarge Trigger */}
                <button
                  onClick={() => openLightbox(activePageIndex)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-[#0A0806]/90 text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors border border-[#C5A059]/40 flex items-center gap-1.5 text-xs font-mono font-bold"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Fullscreen Zoom</span>
                </button>
              </div>

              {/* Reader Navigation Footer */}
              <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#D8B572] font-bold">
                    Page {activePageIndex + 1} of 76
                  </span>
                  <span>•</span>
                  <span className="text-white truncate max-w-xs font-serif font-bold">
                    {archivePages[activePageIndex]?.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <input
                    type="range"
                    min="0"
                    max="75"
                    value={activePageIndex}
                    onChange={(e) => setActivePageIndex(parseInt(e.target.value))}
                    className="w-full sm:w-48 accent-[#C5A059] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="bg-[#F4EFE6] rounded-2xl p-4 border border-[#C5A059]/30">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7E5B1D] font-bold block mb-2">
                Quick Thumbnail Jump
              </span>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {allImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePageIndex(idx)}
                    className={`w-12 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activePageIndex === idx
                        ? 'border-[#C5A059] scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt={`p${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* 2. GRID INDEX MODE */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {filteredPages.map((page) => (
              <div
                key={page.pageNumber}
                onClick={() => openLightbox(page.pageNumber - 1)}
                className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-editorial hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#120F0C]">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-[#120F0C]/90 text-[#D8B572] text-[10px] font-mono px-2 py-0.5 rounded border border-[#C5A059]/30">
                    p.{page.pageNumber}
                  </div>
                </div>

                <div className="p-3 text-center space-y-0.5">
                  <h4 className="font-serif text-xs font-bold text-[#120F0C] truncate group-hover:text-[#7E5B1D]">
                    {page.title}
                  </h4>
                  <p className="text-[10px] font-mono text-[#7E5B1D] truncate">
                    {page.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </WideContainer>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={activePageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setActivePageIndex}
        title={archivePages[activePageIndex]?.title}
        subtitle={`Page ${activePageIndex + 1} of 76 — St. Joseph's College (Autonomous), Moolamattom`}
      />
    </div>
  );
};
