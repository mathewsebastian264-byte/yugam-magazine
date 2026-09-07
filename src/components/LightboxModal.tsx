import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
  subtitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
  title,
  subtitle,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      onNavigate((currentIndex + 1) % images.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md select-none touch-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="w-full px-4 py-3 sm:py-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/90 to-transparent">
        <div className="text-white max-w-[70%] sm:max-w-[80%] truncate">
          {title && (
            <h4 className="font-serif text-sm sm:text-lg font-bold text-gold-400 truncate">
              {title}
            </h4>
          )}
          <p className="text-[11px] sm:text-xs text-stone-300 truncate">
            {subtitle || `Page ${currentIndex + 1} of ${images.length}`}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={currentImage}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Open original high-res in new tab"
            aria-label="Open original"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-ink-950 transition-colors shadow-md"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Main Center Image Viewport */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <img
          src={currentImage}
          alt={title || `Magazine spread ${currentIndex + 1}`}
          className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-md shadow-2xl transition-transform duration-200"
          loading="eager"
        />

        {/* Previous Button (Hidden on very small screens if user prefers swipe, visible on hover/tap) */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold-500 text-white hover:text-ink-950 transition-all border border-white/20 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-4 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold-500 text-white hover:text-ink-950 transition-all border border-white/20 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip & Mobile Swipe Hint */}
      <div className="w-full pb-3 sm:pb-4 px-2 z-20">
        <div className="text-center sm:hidden text-[10px] text-stone-400 font-mono mb-1.5">
          Swipe left/right to browse • Tap outside or ✕ to close
        </div>
        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto overflow-x-auto no-scrollbar py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`w-10 h-12 sm:w-14 sm:h-16 rounded overflow-hidden border-2 shrink-0 transition-all ${
                  idx === currentIndex
                    ? 'border-gold-500 scale-105 shadow-gold-glow opacity-100'
                    : 'border-white/20 opacity-40 hover:opacity-90'
                }`}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
