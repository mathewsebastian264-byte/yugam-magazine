import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  BookOpen, 
  ChevronRight, 
  Search, 
  ArrowUpRight
} from 'lucide-react';
import { useContentStore } from '../services/contentStore';
import { SearchModal } from './SearchModal';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { magazineInfo } = useContentStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Editorial', path: '/editorial', desc: 'Board, Patrons & NCC' },
    { name: 'Union', path: '/union', desc: 'Astra Council 2025–26' },
    { name: 'Messages', path: '/messages', desc: 'Principal & Advisors' },
    { name: 'Events & Fests', path: '/events', desc: 'TRIONZA 2K26 & Sports' },
    { name: 'Creative', path: '/creative', desc: 'Poems, Stories & Comics' },
    { name: 'Achievers', path: '/achievers', desc: 'Valedictory Honors' },
    { name: 'Gallery', path: '/gallery', desc: 'Photo Stories & Sketches' },
    { name: 'About', path: '/about', desc: 'College & Colophon' },
  ];

  return (
    <>
      {/* Top Editorial Metadata Banner (Desktop Only) */}
      <div className={`hidden lg:block bg-[#120F0C] text-[#E5E0D6] border-b border-[#C5A059]/30 transition-all duration-300 ${
        scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-1.5 opacity-100'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-[#D8B572] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {magazineInfo.collegeName}
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-400">{magazineInfo.accreditation}</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span>Astra College Union • Volume <strong>2025–2026</strong></span>
            <span className="text-stone-600">•</span>
            <Link to="/archive" className="text-[#D8B572] hover:text-white transition-colors flex items-center gap-1">
              <span>Original 76-Page Print Edition</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Persistent Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F4]/98 backdrop-blur-md shadow-editorial border-b border-[#C5A059]/30 py-2'
            : 'bg-[#FAF8F4] border-b border-[#DDD2BF]/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            
            {/* Left Brand Identity with Official YUGAM Logo */}
            <Link to="/" className="group flex items-center gap-3 select-none">
              <img
                src="/images/yugam-logo.png"
                alt="YUGAM — A Voice of Generation"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#7E5B1D] border border-[#C5A059]/40 font-bold self-center">
                {magazineInfo.edition}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                      isActive
                        ? 'bg-[#C5A059] text-[#0A0806] font-bold shadow-sm'
                        : 'text-[#2A2520] hover:text-[#7E5B1D] hover:bg-[#EAE2D3]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#7E5B1D] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Digital Reader Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE2D3] text-[#2A2520] hover:text-[#7E5B1D] transition-colors flex items-center gap-1.5 border border-[#DDD2BF]"
                title="Search YUGAM (Ctrl + K)"
              >
                <Search className="w-4 h-4 text-[#7E5B1D]" />
                <span className="hidden sm:inline text-[10px] font-mono text-[#7A7369] font-bold bg-[#FAF8F4] px-1.5 py-0.5 rounded border border-[#DDD2BF]">
                  ⌘K
                </span>
              </button>

              {/* 76 Pages CTA */}
              <Link
                to="/archive"
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-mono uppercase font-bold tracking-wider transition-all border border-[#C5A059]/40 shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>76 Pages</span>
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl bg-[#F4EFE6] text-[#120F0C] hover:bg-[#EAE2D3] border border-[#DDD2BF] lg:hidden transition-colors"
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
              </button>
            </div>

          </div>
        </div>

        {/* 📱 Full-Screen Editorial Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[62px] z-50 bg-[#0E0D0B] text-[#FAF8F4] overflow-y-auto flex flex-col justify-between p-6 animate-in fade-in duration-200">
            
            <div className="space-y-6">
              {/* Mobile Menu Header with Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <img
                  src="/images/yugam-logo.png"
                  alt="YUGAM"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <span className="text-xs font-mono text-[#D8B572] bg-[#1C1814] px-2.5 py-1 rounded border border-[#C5A059]/30">
                  Volume 2025–26
                </span>
              </div>

              {/* Main Links with Large Typography */}
              <nav className="space-y-2.5">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center justify-between p-3.5 rounded-2xl transition-all border ${
                        isActive
                          ? 'bg-[#C5A059] text-[#0A0806] border-[#C5A059] font-bold'
                          : 'bg-[#161410] text-[#FAF8F4] border-stone-800/80 hover:bg-[#1C1814]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono opacity-60">0{idx + 1}</span>
                          <span className="font-serif text-lg sm:text-xl font-bold">{link.name}</span>
                        </div>
                        <p className="text-xs opacity-75 mt-0.5 font-sans">{link.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-70" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Mobile Reader Banner */}
            <div className="pt-6 mt-6 border-t border-stone-800 space-y-4">
              <Link
                to="/archive"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-gold-glow"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Full 76-Page Digital Edition</span>
              </Link>

              <div className="text-center text-xs text-stone-400 space-y-0.5 font-sans">
                <p className="font-serif font-bold text-white">{magazineInfo.collegeName}</p>
                <p className="text-[11px] font-mono text-[#D8B572]">{magazineInfo.accreditation}</p>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
