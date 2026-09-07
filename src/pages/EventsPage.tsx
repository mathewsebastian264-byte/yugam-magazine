import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContentStore } from '../services/contentStore';
import { EventItem } from '../data/events';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Calendar, Sparkles, Images, CheckCircle, ArrowRight, Eye, Filter } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeEventGallery, setActiveEventGallery] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeEventTitle, setActiveEventTitle] = useState<string>('');
  const { events } = useContentStore();

  const categories = ['All', 'Flagship Fest', 'Union Event', 'Academic & Tech', 'Cultural', 'Sports', 'Departmental Fest'];

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(e => e.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(e.category.toLowerCase()));

  const openEventGallery = (event: EventItem, initialIndex = 0) => {
    setActiveEventGallery(event.galleryImages.length > 0 ? event.galleryImages : [event.coverImage]);
    setActiveEventTitle(event.title);
    setLightboxIndex(initialIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="IV"
          badge="Campus Life & Milestone Fests"
          title="Events & Celebrations 2025–26"
          subtitle="Reliving the Grand Moments of the Academic Year"
          description="From national-level fests and cultural nights to thrilling sports championships and artistic symposiums."
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

        {/* Events Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredEvents.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={event.id}
                id={event.id}
                className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-6 sm:p-8 lg:p-10 shadow-editorial overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Image Reel / Cover (6 cols) */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      onClick={() => openEventGallery(event, 0)}
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 bg-[#120F0C] cursor-pointer shadow-md group"
                    >
                      <img
                        src={event.coverImage}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-4 h-4" />
                          <span>View Spread Gallery</span>
                        </span>
                      </div>
                      <div className="absolute top-3 left-3 bg-[#120F0C]/90 text-[#D8B572] text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                        p.{event.pageReferences.join(', ')}
                      </div>
                    </div>

                    {/* Thumbnail gallery */}
                    {event.galleryImages.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {event.galleryImages.slice(0, 4).map((img, thumbIdx) => (
                          <div
                            key={thumbIdx}
                            onClick={() => openEventGallery(event, thumbIdx)}
                            className="aspect-[4/3] rounded-lg overflow-hidden border border-[#C5A059]/30 bg-[#120F0C] cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Narrative (6 cols) */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#7E5B1D] border border-[#C5A059]/40 text-xs font-mono font-bold uppercase tracking-wider">
                        {event.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#524C44] bg-[#EAE2D3] px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-[#7E5B1D]" />
                        <span>{event.date}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] leading-tight">
                      {event.title}
                    </h3>

                    <p className="font-serif italic text-sm sm:text-base text-[#7E5B1D]">
                      "{event.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#2A2520] leading-relaxed font-sans line-clamp-4">
                      {event.description}
                    </p>

                    {event.highlights && event.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        {event.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#3D3730] font-sans">
                            <span className="text-[#7E5B1D]">❖</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t border-[#DDD2BF] flex items-center justify-between">
                      <button
                        onClick={() => openEventGallery(event, 0)}
                        className="text-xs font-mono text-[#7E5B1D] hover:underline flex items-center gap-1"
                      >
                        <Images className="w-3.5 h-3.5" />
                        <span>{event.galleryImages.length || 1} Photo Spreads</span>
                      </button>

                      <Link
                        to={`/events/${event.id}`}
                        className="px-4 py-2 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Full Chronicle</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={activeEventGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={activeEventTitle}
        subtitle="St. Joseph's College (Autonomous), Moolamattom — 2025–26 Issue"
      />
    </div>
  );
};
