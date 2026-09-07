import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Sparkles, Award, User, Feather, ArrowRight, Layers, FileText } from 'lucide-react';
import { useContentStore } from '../services/contentStore';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  category: 'People' | 'Events' | 'Literature' | 'Achievers' | 'Archive' | 'Sections';
  subtitle: string;
  path: string;
  image?: string;
  pageRef?: number;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();
  const content = useContentStore();

  // Handle ESC and Ctrl+K shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Build searchable index
  const allSearchableItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // 1. Leadership & Editorial
    content.messages.forEach((msg) => {
      items.push({
        id: `msg-${msg.id}`,
        title: msg.author,
        category: 'People',
        subtitle: `${msg.role} — ${msg.title}`,
        path: '/messages',
        image: msg.image,
        pageRef: msg.pageRef,
      });
    });

    content.editorialTeam.forEach((member, i) => {
      items.push({
        id: `ed-${i}`,
        title: member.name,
        category: 'People',
        subtitle: `${member.role} (${member.department || 'Editorial Desk'})`,
        path: '/editorial',
        image: member.image,
        pageRef: member.pageRef,
      });
    });

    content.unionCouncil.forEach((rep, i) => {
      items.push({
        id: `union-${i}`,
        title: rep.name,
        category: 'People',
        subtitle: `Astra Union 2025–26 — ${rep.role}`,
        path: '/editorial',
        pageRef: rep.pageRef || 10,
      });
    });

    content.nccPanel.forEach((cadet, i) => {
      items.push({
        id: `ncc-${i}`,
        title: cadet.name,
        category: 'People',
        subtitle: `18(K) Battalion NCC — ${cadet.role}`,
        path: '/editorial',
        pageRef: cadet.pageRef || 18,
      });
    });

    // 2. Events & Fests
    content.events.forEach((event) => {
      items.push({
        id: `event-${event.id}`,
        title: event.title,
        category: 'Events',
        subtitle: `${event.date} • ${event.tagline}`,
        path: `/events#${event.id}`,
        image: event.coverImage,
        pageRef: event.pageReferences[0],
      });
    });

    // 3. Creative & Literary
    content.literaryPieces.forEach((piece) => {
      items.push({
        id: `lit-${piece.id}`,
        title: piece.title,
        category: 'Literature',
        subtitle: `By ${piece.author} (${piece.department}) • p.${piece.pageRef}`,
        path: `/creative/${piece.id}`,
        image: piece.bgImage,
        pageRef: piece.pageRef,
      });
    });

    // 4. Achievers & Artists
    content.bestOutgoingStudents.forEach((student) => {
      items.push({
        id: `ach-${student.id}`,
        title: student.name,
        category: 'Achievers',
        subtitle: `${student.title} • ${student.department}`,
        path: '/achievers',
        image: student.image,
        pageRef: student.pageRef,
      });
    });

    content.featuredArtists.forEach((art) => {
      items.push({
        id: `art-${art.id}`,
        title: art.title,
        category: 'Achievers',
        subtitle: `Artist: ${art.name} (${art.department}) • p.${art.pageRef}`,
        path: '/achievers',
        image: art.image,
        pageRef: art.pageRef,
      });
    });

    // 5. 76-Page Archive Items
    content.archivePages.forEach((page) => {
      items.push({
        id: `page-${page.pageNumber}`,
        title: `Page ${page.pageNumber}: ${page.title}`,
        category: 'Archive',
        subtitle: `Print Edition Section: ${page.category}`,
        path: `/archive`,
        image: page.image,
        pageRef: page.pageNumber,
      });
    });

    return items;
  }, [content]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return allSearchableItems.slice(0, 8);

    const q = query.toLowerCase().trim();
    return allSearchableItems.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchText =
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        String(item.pageRef || '').includes(q);
      return matchCat && matchText;
    });
  }, [query, selectedCategory, allSearchableItems]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResultItem) => {
    navigate(item.path);
    onClose();
  };

  const categories = ['All', 'People', 'Events', 'Literature', 'Achievers', 'Archive'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-[#FAF8F4] rounded-2xl shadow-2xl border-2 border-[#C5A059] overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#DDD2BF] bg-[#F4EFE6] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#7E5B1D] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search YUGAM for people, events, poems, artwork, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#120F0C] placeholder-[#7A7369] focus:outline-none font-sans font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#7A7369] hover:text-[#120F0C] p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#EAE2D3] hover:bg-[#DDD2BF] text-[#120F0C] text-xs font-mono font-bold transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 p-3 px-4 bg-[#FAF8F4] border-b border-[#DDD2BF] overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C5A059] text-white font-bold shadow-sm'
                  : 'bg-[#EAE2D3] text-[#3D3730] hover:bg-[#DDD2BF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-[#DDD2BF]/60 space-y-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[#7A7369]">
              <FileText className="w-10 h-10 mx-auto text-[#C5A059]/50 mb-2" />
              <p className="font-serif text-lg font-bold text-[#120F0C]">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for a student name, event (e.g. TRIONZA), or page number.</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="p-3 sm:p-3.5 rounded-xl hover:bg-[#F4EFE6] cursor-pointer transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {item.image ? (
                    <div className="w-10 h-12 rounded-lg overflow-hidden border border-[#C5A059]/40 shrink-0 bg-[#120F0C]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-[#EAE2D3] border border-[#C5A059]/40 text-[#7E5B1D] flex items-center justify-center font-serif font-bold text-xs shrink-0">
                      ❖
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#120F0C] group-hover:text-[#7E5B1D] truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/15 text-[#7E5B1D] font-semibold uppercase shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#524C44] truncate mt-0.5 font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#7E5B1D] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold hidden sm:inline">Jump</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 px-4 bg-[#F4EFE6] border-t border-[#DDD2BF] flex items-center justify-between text-[11px] font-mono text-[#7A7369]">
          <span>Use search to navigate all 76 magazine pages</span>
          <span>Showing {filteredResults.length} matching items</span>
        </div>

      </div>
    </div>
  );
};
