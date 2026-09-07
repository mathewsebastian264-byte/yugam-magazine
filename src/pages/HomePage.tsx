import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Quote, 
  Shield, 
  Compass, 
  ChevronRight, 
  Eye, 
  Images, 
  Users, 
  Feather,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useContentStore } from '../services/contentStore';
import { FullBleedSection, WideContainer, EditorialContainer, ReadingContainer } from '../components/layout/LayoutPrimitives';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';

export const HomePage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const {
    magazineInfo,
    homepageSections,
    messages,
    events: eventsData,
    literaryPieces,
    bestOutgoingStudents,
    featuredArtists,
    archivePages,
    personGroups,
  } = useContentStore();

  const allMagazinePages = archivePages.map((p) => p.image);

  const openLightbox = (index: number = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const centerpiecePoem = literaryPieces.find((p) => p.id === 'this-was-our-story') || literaryPieces[0];
  const trionzaEvent = eventsData.find((e) => e.id === 'trionza-2k26') || eventsData[0];
  const principalMsg = messages.find((m) => m.id === 'principals-message') || messages[0];
  const advisorMsg = messages.find((m) => m.id === 'union-advisors-message') || messages[1];
  const unionGroup = personGroups.find((g) => g.id === 'grp-union') || personGroups[0];

  const issueTOC = [
    { num: '01', title: 'Editorial & Leadership', path: '/editorial', desc: 'Patrons, Editors, Union Council & NCC' },
    { num: '02', title: 'Official Messages', path: '/messages', desc: 'Principal, Advisors & Editor Note' },
    { num: '03', title: 'Union Annual Report', path: '/union-report', desc: 'Full Chronicle of 2025–26 Events' },
    { num: '04', title: 'Campus Fests & Events', path: '/events', desc: 'TRIONZA 2K26, Comquest & Sports' },
    { num: '05', title: 'Literary Corner', path: '/creative', desc: 'Centerpiece Poems, Stories & Comics' },
    { num: '06', title: 'Achievers & Art', path: '/achievers', desc: 'Best Outgoing & Student Sketches' },
    { num: '07', title: 'Full 76-Page Archive', path: '/archive', desc: 'Interactive Digital Flipbook Reader' },
  ];

  // Sort enabled sections
  const activeSections = [...homepageSections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="w-full bg-[#FAF8F4] text-[#120F0C] overflow-x-hidden">
      
      {activeSections.map((section) => {
        switch (section.type) {
          
          // 1. HERO SECTION
          case 'hero':
            return (
              <FullBleedSection
                key={section.id}
                className="bg-gradient-to-b from-[#F4EFE6] via-[#FAF8F4] to-[#EAE2D3]/40 border-b border-[#C5A059]/30 py-12 sm:py-16 lg:py-20"
              >
                <WideContainer>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left Column: Typography & Actions (7 cols) */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120F0C] text-[#D8B572] border border-[#C5A059]/50 text-xs font-mono tracking-wider shadow-sm">
                        <Shield className="w-3.5 h-3.5 text-[#D8B572] shrink-0" />
                        <span className="font-semibold">{magazineInfo.collegeName}</span>
                        <span className="text-[#7E5B1D]">•</span>
                        <span className="text-white font-mono">{magazineInfo.edition}</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-center lg:justify-start">
                          <img
                            src="/images/yugam-logo.png"
                            alt="YUGAM — A Voice of Generation"
                            className="h-24 sm:h-32 md:h-40 lg:h-44 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                      <p className="text-[#3D3730] text-sm sm:text-base lg:text-lg leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                        The official digital adaptation of the 76-page <strong>Astra College Union Magazine 2025–26</strong>. 
                        A vibrant editorial chronicle commemorating student intellectual excellence, creative poetry, national fests, and campus nostalgia.
                      </p>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                        <Link
                          to="/archive"
                          className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#9E7628] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-editorial transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Open 76-Page Digital Reader</span>
                        </Link>
                        <Link
                          to="/messages"
                          className="px-6 py-3.5 rounded-xl bg-[#120F0C] hover:bg-[#2A2520] text-[#D8B572] font-semibold text-xs sm:text-sm uppercase tracking-wider border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2"
                        >
                          <span>Explore Messages & Notes</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="pt-4 border-t border-[#DDD2BF] grid grid-cols-3 gap-4 text-center lg:text-left">
                        <div>
                          <span className="text-[#7A7369] uppercase tracking-wider block font-mono text-[9px] sm:text-[10px] font-bold">Principal</span>
                          <strong className="text-xs sm:text-sm text-[#120F0C] font-serif block truncate">{magazineInfo.leadership?.principal || 'Dr. Joseph George'}</strong>
                        </div>
                        <div>
                          <span className="text-[#7A7369] uppercase tracking-wider block font-mono text-[9px] sm:text-[10px] font-bold">Student Editor</span>
                          <strong className="text-xs sm:text-sm text-[#120F0C] font-serif block truncate">{magazineInfo.leadership?.studentEditor || 'Muhammed Yaz R'}</strong>
                        </div>
                        <div>
                          <span className="text-[#7A7369] uppercase tracking-wider block font-mono text-[9px] sm:text-[10px] font-bold">Accreditation</span>
                          <strong className="text-xs sm:text-sm text-[#7E5B1D] font-mono block truncate">NAAC A+ (3.50)</strong>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: 3D Cover Showcase (5 cols) */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative group max-w-xs sm:max-w-sm w-full">
                        <div className="absolute -inset-3 bg-gradient-to-tr from-[#C5A059]/40 via-[#120F0C]/20 to-transparent rounded-2xl blur-xl group-hover:opacity-100 transition-opacity opacity-75" />

                        <div 
                          onClick={() => openLightbox(0)}
                          className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F4] bg-[#F4EFE6] cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-300"
                        >
                          <img
                            src="/images/magazine/page-01.jpg"
                            alt="Yugam 2025-26 Official Cover"
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                            <div className="text-white flex items-center justify-between w-full">
                              <div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8B572]">Click to View</span>
                                <h4 className="font-serif text-base font-bold">Cover & Editorial Board</h4>
                              </div>
                              <Eye className="w-5 h-5 text-[#D8B572]" />
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => openLightbox(0)}
                          className="absolute -bottom-3 -right-3 bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] border-2 border-[#C5A059] rounded-xl px-3.5 py-1.5 text-xs font-mono font-bold shadow-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Click to view all 76 pages"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>76 FULL PAGES</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 2. TOC RIBBON
          case 'toc':
            return (
              <FullBleedSection key={section.id} dark className="py-8 bg-[#120F0C] border-y border-[#C5A059]/40">
                <WideContainer>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D8B572] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#C5A059]" />
                      <span>{section.title}</span>
                    </span>
                    <Link to="/archive" className="text-xs font-mono text-[#D8B572] hover:text-white underline underline-offset-2">
                      View All 76 Pages →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                    {issueTOC.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="bg-[#1C1814] hover:bg-[#C5A059] hover:text-[#0A0806] rounded-xl p-3 border border-[#C5A059]/30 transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-[#D8B572] group-hover:text-[#0A0806] font-bold block mb-1">
                            {item.num}
                          </span>
                          <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#0A0806] leading-snug">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-[10px] text-[#A8A29A] group-hover:text-[#1C1814] truncate mt-2 font-sans">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 3. EDITORIAL MESSAGES
          case 'messages':
            return (
              <FullBleedSection key={section.id} className="py-16 sm:py-20 bg-[#FAF8F4]">
                <WideContainer>
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                      Institutional Guidance
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C] mt-2">
                      {section.title}
                    </h2>
                    <DiamondDivider variant="gold" className="max-w-xs mx-auto my-3" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Principal Card */}
                    <div className="bg-[#F4EFE6] rounded-2xl border border-[#C5A059]/30 p-6 sm:p-8 shadow-editorial relative overflow-hidden flex flex-col justify-between">
                      <Quote className="absolute -bottom-6 -right-6 w-32 h-32 text-[#C5A059]/10 pointer-events-none" />
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-[#C5A059] shrink-0 shadow-md bg-[#120F0C]">
                            <img src={principalMsg.image} alt={principalMsg.author} className="w-full h-full object-cover object-top" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E5B1D] block">
                              Principal's Message
                            </span>
                            <h3 className="font-serif text-xl font-bold text-[#120F0C]">{principalMsg.author}</h3>
                            <p className="text-xs text-[#524C44] font-sans">{principalMsg.department || 'Principal, St. Joseph\'s College'}</p>
                          </div>
                        </div>

                        <blockquote className="font-serif italic text-sm sm:text-base text-[#120F0C] leading-relaxed border-l-3 border-[#C5A059] pl-3 py-1">
                          "{principalMsg.quote}"
                        </blockquote>

                        <p className="text-xs sm:text-sm text-[#3D3730] leading-relaxed font-sans line-clamp-4">
                          {principalMsg.content[1] || principalMsg.content[0]}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#DDD2BF] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#7A7369]">Page {principalMsg.pageRef} Spread</span>
                        <Link to="/messages" className="text-xs font-bold uppercase tracking-wider text-[#7E5B1D] hover:text-[#9E7628] flex items-center gap-1">
                          <span>Read Full Message</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Advisor Card */}
                    <div className="bg-[#F4EFE6] rounded-2xl border border-[#C5A059]/30 p-6 sm:p-8 shadow-editorial relative overflow-hidden flex flex-col justify-between">
                      <Quote className="absolute -bottom-6 -right-6 w-32 h-32 text-[#C5A059]/10 pointer-events-none" />
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-[#C5A059] shrink-0 shadow-md bg-[#120F0C]">
                            <img src={advisorMsg.image} alt={advisorMsg.author} className="w-full h-full object-cover object-top" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E5B1D] block">
                              Union Advisor's Message
                            </span>
                            <h3 className="font-serif text-xl font-bold text-[#120F0C]">{advisorMsg.author}</h3>
                            <p className="text-xs text-[#524C44] font-sans">{advisorMsg.department}</p>
                          </div>
                        </div>

                        <blockquote className="font-serif italic text-sm sm:text-base text-[#120F0C] leading-relaxed border-l-3 border-[#C5A059] pl-3 py-1">
                          "{advisorMsg.quote}"
                        </blockquote>

                        <p className="text-xs sm:text-sm text-[#3D3730] leading-relaxed font-sans line-clamp-4">
                          {advisorMsg.content[1] || advisorMsg.content[0]}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#DDD2BF] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#7A7369]">Page {advisorMsg.pageRef} Spread</span>
                        <Link to="/messages" className="text-xs font-bold uppercase tracking-wider text-[#7E5B1D] hover:text-[#9E7628] flex items-center gap-1">
                          <span>Read Full Message</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 4. TRIONZA 2K26 FEATURE STORY
          case 'trionza':
            return (
              <FullBleedSection key={section.id} className="py-16 sm:py-20 bg-[#F4EFE6] border-y border-[#DDD2BF]">
                <WideContainer>
                  <div className="bg-[#120F0C] text-white rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      
                      <div className="lg:col-span-6 relative bg-[#0A0806] p-6 sm:p-8 flex flex-col justify-between">
                        <div 
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 group cursor-pointer"
                          onClick={() => openLightbox(33)}
                        >
                          <img
                            src={trionzaEvent.coverImage}
                            alt="TRIONZA 2K26 National Education Fest"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-4 py-2 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                              <Eye className="w-4 h-4" />
                              <span>Inspect Feature Page</span>
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <img src="/images/magazine/page-35.jpg" alt="ExploreX" className="rounded-lg object-cover aspect-video border border-[#C5A059]/30" />
                          <img src="/images/magazine/page-36.jpg" alt="Inauguration" className="rounded-lg object-cover aspect-video border border-[#C5A059]/30" />
                          <img src="/images/magazine/page-40.jpg" alt="Vidhu Prathap concert" className="rounded-lg object-cover aspect-video border border-[#C5A059]/30" />
                        </div>
                      </div>

                      <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#D8B572] border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest font-bold">
                              National Milestone
                            </span>
                            <span className="text-xs font-mono text-[#A8A29A]">16 & 17 Jan 2026</span>
                          </div>

                          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                            {trionzaEvent.title}
                          </h3>
                          <p className="font-serif italic text-base text-[#D8B572] mt-1 mb-4">
                            "{trionzaEvent.tagline}"
                          </p>

                          <p className="text-sm sm:text-base text-[#C8C2B5] leading-relaxed font-sans">
                            {trionzaEvent.description}
                          </p>

                          <ul className="mt-4 space-y-2 text-xs text-[#E5E0D6] font-sans">
                            <li className="flex items-center gap-2">
                              <span className="text-[#C5A059]">❖</span>
                              <span>ExploreX Mega Science & Defense Exhibition (ISRO, Indian Army & Robotics)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-[#C5A059]">❖</span>
                              <span>Live Mega Concert by renowned playback singer <strong>Vidhu Prathap</strong></span>
                            </li>
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-stone-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-[#D8B572]">10 Photo Spreads (p.34–40, 68–70)</span>
                          <Link
                            to="/events/trionza-2k26"
                            className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-white text-[#0A0806] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                          >
                            <span>View Full Fest Gallery</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 5. CENTERPIECE POEM (Full-Width Dark Editorial Treatment)
          case 'centerpiece':
            return (
              <FullBleedSection key={section.id} dark className="py-20 bg-[#0E0D0B] text-[#E5E0D6] border-b border-[#C5A059]/40">
                <ReadingContainer className="text-center space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/20 text-[#D8B572] border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest font-semibold">
                    <span>❖</span>
                    <span>Literary Anthology Spotlight</span>
                    <span>❖</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-widest uppercase leading-tight">
                    {centerpiecePoem.title}
                  </h2>

                  <DiamondDivider variant="gold" className="max-w-xs mx-auto my-4 opacity-60" />

                  <div className="space-y-4 font-serif text-sm sm:text-base md:text-xl tracking-widest leading-loose text-[#D8D2C4] uppercase font-light">
                    {centerpiecePoem.stanzas.slice(0, 8).map((line, idx) => (
                      <p key={idx} className="transition-opacity hover:text-[#D8B572]">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/creative"
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-gold-glow"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read All Student Poems & Literature</span>
                    </Link>
                  </div>
                </ReadingContainer>
              </FullBleedSection>
            );

          // 6. UNION COUNCIL SPOTLIGHT
          case 'union':
            return (
              <FullBleedSection key={section.id} className="py-16 sm:py-20 bg-[#FAF8F4]">
                <WideContainer>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                        {unionGroup?.categoryTag || 'Student Leadership'}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C] mt-2">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#524C44] mt-1 font-sans">
                        {unionGroup?.description || 'Elected representatives leading campus vibrancy (Featured on Page 10).'}
                      </p>
                    </div>
                    <Link
                      to="/editorial"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7E5B1D] hover:text-[#9E7628] group"
                    >
                      <span>View All Leadership Teams</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {unionGroup?.members.slice(0, 10).map((rep, idx) => (
                      <div
                        key={rep.id || idx}
                        className="bg-[#F4EFE6] rounded-xl p-4 border border-[#C5A059]/25 text-center hover:bg-[#FAF8F4] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          {rep.image ? (
                            <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-[#C5A059] mx-auto shadow-sm bg-[#120F0C]">
                              <img
                                src={rep.image}
                                alt={rep.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-[#120F0C] border border-[#C5A059] text-[#D8B572] flex items-center justify-center mx-auto text-xs font-serif font-bold shadow-sm">
                              {idx + 1}
                            </div>
                          )}
                          <h4 className="font-serif text-sm font-bold text-[#120F0C] leading-snug">{rep.name}</h4>
                        </div>
                        <p className="text-[11px] font-mono text-[#7E5B1D] font-medium uppercase tracking-tight mt-1">
                          {rep.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 7. EVENTS GRID
          case 'events':
            return (
              <FullBleedSection key={section.id} className="py-16 sm:py-20 bg-[#FAF8F4] border-t border-[#DDD2BF]">
                <WideContainer>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                        Campus Vibe
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C] mt-2">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#524C44] mt-1 font-sans">
                        Reliving sports tournaments, departmental symposiums, and cultural milestones.
                      </p>
                    </div>
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7E5B1D] hover:text-[#9E7628] group"
                    >
                      <span>Explore All Events</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {eventsData.slice(1, 4).map((event) => (
                      <div
                        key={event.id}
                        className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-editorial hover:shadow-2xl transition-all duration-300 flex flex-col group"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#120F0C]">
                          <img
                            src={event.coverImage}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#120F0C]/90 text-[#D8B572] border border-[#C5A059]/40 text-[10px] font-mono px-2.5 py-1 rounded-md backdrop-blur-sm">
                            {event.category}
                          </div>
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                            {event.date}
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <h3 className="font-serif text-xl font-bold text-[#120F0C] group-hover:text-[#7E5B1D] transition-colors leading-snug">
                              {event.title}
                            </h3>
                            <p className="font-serif italic text-xs text-[#7E5B1D] mt-1 mb-3">
                              "{event.tagline}"
                            </p>
                            <p className="text-xs text-[#3D3730] line-clamp-3 leading-relaxed font-sans">
                              {event.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#DDD2BF] flex items-center justify-between">
                            <span className="text-[11px] font-mono text-[#7A7369]">
                              {event.pageReferences.length} Spreads
                            </span>
                            <Link
                              to={`/events/${event.id}`}
                              className="text-xs font-bold text-[#7E5B1D] hover:text-[#9E7628] flex items-center gap-1"
                            >
                              <span>View Gallery</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          // 8. ACHIEVERS & ART
          case 'achievers':
            return (
              <FullBleedSection key={section.id} className="py-16 sm:py-20 bg-[#F4EFE6] border-t border-[#DDD2BF]">
                <WideContainer>
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                      Honors & Fine Arts
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C] mt-2">
                      {section.title}
                    </h2>
                    <DiamondDivider variant="gold" className="max-w-xs mx-auto my-3" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {bestOutgoingStudents.map((achiever) => (
                      <div
                        key={achiever.id}
                        className="bg-[#FAF8F4] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-editorial flex flex-col sm:flex-row gap-6 items-center"
                      >
                        <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-[#C5A059] shrink-0 shadow-lg bg-[#120F0C]">
                          <img
                            src={achiever.image}
                            alt={achiever.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2 text-center sm:text-left">
                          <div className="inline-block px-3 py-0.5 rounded-full bg-[#C5A059] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                            {achiever.title}
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-[#120F0C]">
                            {achiever.name}
                          </h3>
                          <p className="text-xs font-semibold text-[#7E5B1D]">
                            {achiever.department}
                          </p>
                          <p className="text-[11px] text-[#7A7369] font-mono">
                            {achiever.batch}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link
                      to="/achievers"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#120F0C] hover:text-[#7E5B1D] underline underline-offset-4"
                    >
                      <span>View Kalolsavam Champions & Student Artwork Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </WideContainer>
              </FullBleedSection>
            );

          default:
            return null;
        }
      })}

      {/* Lightbox for Full 76-Page Magazine Edition */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={allMagazinePages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={archivePages[lightboxIndex]?.title || "Yugam Magazine Official Publication"}
        subtitle={`Page ${lightboxIndex + 1} of 76 — St. Joseph's College (Autonomous), Moolamattom`}
      />

    </div>
  );
};
