import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContentStore } from '../services/contentStore';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Calendar, ArrowLeft, Eye, Images, Sparkles, CheckCircle2, Share2 } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { events } = useContentStore();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const event = events.find((e) => e.id === slug) || events[0];

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#120F0C]">Event Not Found</h2>
        <p className="text-xs text-[#524C44] mt-2 mb-6">The requested event chronicle could not be located.</p>
        <Link to="/events" className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-white text-xs font-bold uppercase">
          Back to All Events
        </Link>
      </div>
    );
  }

  const openLightbox = (index: number = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#7E5B1D] hover:text-[#120F0C] uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events & Fests</span>
          </Link>
          <span className="text-xs font-mono text-[#7A7369]">
            Source Spreads: p.{event.pageReferences.join(', ')}
          </span>
        </div>

        {/* Hero Event Banner */}
        <div className="bg-[#120F0C] text-white rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl relative">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-[#0A0806]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-mono font-bold uppercase tracking-wider">
                  {event.category}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 text-[#E5E0D6] text-xs font-mono backdrop-blur-sm border border-white/20">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{event.date}</span>
                </div>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {event.title}
              </h1>
              <p className="font-serif italic text-sm sm:text-lg text-[#D8B572]">
                "{event.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Event Narrative Body */}
        <div className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-6 sm:p-10 lg:p-12 shadow-editorial space-y-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7E5B1D] font-bold block mb-1">
              Editorial Reportage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C]">
              About the Event
            </h2>
            <DiamondDivider variant="gold" className="my-4 max-w-xs" />
            <p className="editorial-dropcap text-[#2A2520] text-sm sm:text-base leading-relaxed font-sans font-normal pt-2">
              {event.description}
            </p>
          </div>

          {/* Highlights List */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="bg-[#FAF8F4] rounded-2xl p-6 border border-[#C5A059]/30 space-y-3 shadow-sm">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#120F0C] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7E5B1D]" />
                <span>Milestones & Program Highlights</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3D3730] font-sans">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7E5B1D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Event Photo Gallery Strip */}
          {event.galleryImages.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#DDD2BF]">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#120F0C] flex items-center gap-2">
                  <Images className="w-4 h-4 text-[#7E5B1D]" />
                  <span>Photo Gallery & Print Spreads ({event.galleryImages.length})</span>
                </h3>
                <span className="text-xs font-mono text-[#7A7369]">Click any photo to enlarge</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {event.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="aspect-[4/3] rounded-xl overflow-hidden border border-[#C5A059]/30 bg-[#120F0C] cursor-pointer group shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={img}
                      alt={`${event.title} spread ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={event.galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={event.title}
        subtitle={`${event.date} — St. Joseph's College (Autonomous), Moolamattom`}
      />
    </div>
  );
};
