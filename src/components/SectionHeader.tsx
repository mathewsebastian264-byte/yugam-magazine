import React from 'react';
import { DiamondDivider } from './DiamondDivider';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left';
  romanNumeral?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  romanNumeral,
}) => {
  return (
    <div className={`py-8 sm:py-12 md:py-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      
      {/* Top Roman Numeral or Badge */}
      <div className={`flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {romanNumeral && (
          <span className="text-xs font-serif font-bold text-[#7E5B1D] px-2.5 py-0.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/30">
            SECTION {romanNumeral}
          </span>
        )}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#7E5B1D] border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest font-semibold">
            <span>❖</span>
            <span>{badge}</span>
            <span>❖</span>
          </div>
        )}
      </div>

      {/* Main Serif Title */}
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#120F0C] tracking-tight leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-serif italic text-base sm:text-xl text-[#7E5B1D] mt-2 font-medium">
          "{subtitle}"
        </p>
      )}

      {/* Description */}
      {description && (
        <p className={`text-sm sm:text-base text-[#3D3730] font-sans leading-relaxed mt-3 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}

      <DiamondDivider variant="gold" className={`max-w-xs mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
