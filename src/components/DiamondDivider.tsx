import React from 'react';

interface DiamondDividerProps {
  className?: string;
  variant?: 'gold' | 'dark' | 'light';
  symbol?: string;
}

export const DiamondDivider: React.FC<DiamondDividerProps> = ({
  className = '',
  variant = 'gold',
  symbol = '❖'
}) => {
  const colorStyles = {
    gold: {
      line: 'from-transparent via-gold-500/60 to-transparent',
      text: 'text-gold-500',
    },
    dark: {
      line: 'from-transparent via-ink-700/40 to-transparent',
      text: 'text-ink-700',
    },
    light: {
      line: 'from-transparent via-paper-300 to-transparent',
      text: 'text-paper-400',
    }
  };

  const style = colorStyles[variant];

  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className={`h-[1px] flex-1 bg-gradient-to-r ${style.line}`} />
      <span className={`px-4 text-xs font-serif tracking-widest select-none ${style.text}`}>
        {symbol}
      </span>
      <div className={`h-[1px] flex-1 bg-gradient-to-r ${style.line}`} />
    </div>
  );
};
