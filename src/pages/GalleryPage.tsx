import React, { useState } from 'react';
import { useContentStore } from '../services/contentStore';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Eye, Images, Filter, Camera, Palette } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { archivePages, featuredArtists } = useContentStore();

  const categories = ['All', 'Fests & TRIONZA', 'Union & Leadership', 'Cultural & Stage', 'Sports & Athletics', 'Art & Sketches', 'Campus Life'];

  // Map gallery images from archivePages with intelligent categorization
  const galleryItems = React.useMemo(() => {
    return archivePages.map((page) => {
      let cat = 'Campus Life';
      if (page.pageNumber >= 34 && page.pageNumber <= 40) cat = 'Fests & TRIONZA';
      else if (page.pageNumber === 15 || page.pageNumber === 16 || page.pageNumber === 17) cat = 'Union & Leadership';
      else if (page.pageNumber >= 20 && page.pageNumber <= 22) cat = 'Cultural & Stage';
      else if (page.pageNumber >= 28 && page.pageNumber <= 30) cat = 'Cultural & Stage';
      else if (page.pageNumber >= 18 && page.pageNumber <= 19) cat = 'Union & Leadership';
      else if (page.pageNumber === 24 || (page.pageNumber >= 18 && page.pageNumber <= 20)) cat = 'Sports & Athletics';
      else if (page.pageNumber === 3 || page.pageNumber === 10 || page.pageNumber === 11 || page.pageNumber === 30 || page.pageNumber === 31) cat = 'Art & Sketches';
      else if (page.pageNumber >= 55 && page.pageNumber <= 60) cat = 'Fests & TRIONZA';

      return {
        ...page,
        galleryCategory: cat,
      };
    });
  }, [archivePages]);

  const filteredItems = React.useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.galleryCategory === selectedCategory);
  }, [selectedCategory, galleryItems]);

  const allImages = filteredItems.map((item) => item.image);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="VII"
          badge="Visual Archive & Fine Arts"
          title="Photo Stories & Art Exhibition"
          subtitle="Capturing Moments, Celebrations, and Creative Expressions Across Campus"
          description="A curated visual retrospective of events, stage performances, sports battles, and student artworks from the 2025–26 academic year."
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

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.pageNumber}
              onClick={() => openLightbox(idx)}
              className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-editorial hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#120F0C]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Enlarge</span>
                  </span>
                </div>
                <div className="absolute top-2 left-2 bg-[#120F0C]/90 text-[#D8B572] text-[10px] font-mono px-2 py-0.5 rounded border border-[#C5A059]/30">
                  p.{item.pageNumber}
                </div>
              </div>

              <div className="p-3 text-center">
                <h4 className="font-serif text-xs font-bold text-[#120F0C] truncate group-hover:text-[#7E5B1D]">
                  {item.title}
                </h4>
                <p className="text-[10px] font-mono text-[#7E5B1D] truncate mt-0.5">
                  {item.galleryCategory}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={filteredItems[lightboxIndex]?.title}
        subtitle={`Page ${filteredItems[lightboxIndex]?.pageNumber} of 76 — St. Joseph's College (Autonomous), Moolamattom`}
      />
    </div>
  );
};
