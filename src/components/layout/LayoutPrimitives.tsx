import React from 'react';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const FullBleedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  paperTexture?: boolean;
  id?: string;
}> = ({ children, className = '', dark = false, paperTexture = true, id }) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${
        dark ? 'bg-[#0E0D0B] text-[#FAF8F4]' : 'bg-[#FAF8F4] text-[#120F0C]'
      } ${className}`}
    >
      {paperTexture && (
        <div
          className={`absolute inset-0 pointer-events-none ${
            dark ? 'dark-paper-bg opacity-35' : 'paper-bg opacity-40'
          }`}
        />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export const WideContainer: React.FC<LayoutContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </div>
  );
};

export const EditorialContainer: React.FC<LayoutContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const ReadingContainer: React.FC<LayoutContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-3xl w-full mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};
