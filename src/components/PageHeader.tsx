import React from 'react';
import { DiamondDivider } from './DiamondDivider';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  align = 'center'
}) => {
  return (
    <div className={`py-12 md:py-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/30 text-xs font-mono uppercase tracking-widest mb-4">
          <span>❖</span>
          <span>{badge}</span>
          <span>❖</span>
        </div>
      )}

      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="font-serif italic text-lg sm:text-xl text-gold-700 mt-2 font-medium">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-ink-700/80 font-sans leading-relaxed mt-4">
          {description}
        </p>
      )}

      <DiamondDivider variant="gold" className="max-w-xs mx-auto mt-6" />
    </div>
  );
};
