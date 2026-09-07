import React, { useState } from 'react';
import { useContentStore, PersonGroup } from '../services/contentStore';
import { WideContainer, FullBleedSection } from '../components/layout/LayoutPrimitives';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Shield, Eye, Award, Users, Bookmark, Sparkles, BookOpen } from 'lucide-react';

export const EditorialPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { personGroups, advisors } = useContentStore();

  const editorialScans = [
    '/images/magazine/page-01.jpg',
    '/images/magazine/page-04.jpg',
    '/images/magazine/page-05.jpg',
    '/images/magazine/page-06.jpg',
    '/images/magazine/page-07.jpg',
    '/images/magazine/page-08.jpg',
    '/images/magazine/page-09.jpg',
    '/images/magazine/page-10.jpg',
    '/images/magazine/page-18.jpg',
    '/images/magazine/page-19.jpg',
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const activeGroups = personGroups.filter((g) => g.published);

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <WideContainer>
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="I"
          badge="Astra Union & Council"
          title="Editorial Board & College Leadership"
          subtitle="The Minds, Mentors, and Architects Behind 'Yugam'"
          description="Honoring the leadership, staff editorial advisory, student editors, elected union representatives, and campus committees."
        />

        {/* Quick Inspection CTA */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => openLightbox(0)}
            className="px-5 py-2.5 rounded-xl bg-[#120F0C] hover:bg-[#C5A059] text-[#D8B572] hover:text-[#0A0806] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all border border-[#C5A059]/40 shadow-sm cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Inspect Original Team & Council Print Spreads</span>
          </button>
        </div>

        {/* Dynamic Person Groups Loop */}
        <div className="space-y-20">
          {activeGroups.map((group, groupIdx) => (
            <section key={group.id} id={group.slug}>
              
              {/* Group Header */}
              <div className="text-center mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30 font-semibold">
                  {group.categoryTag}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] mt-2">
                  {group.title}
                </h2>
                {group.description && (
                  <p className="text-xs sm:text-sm text-[#524C44] mt-1 max-w-2xl mx-auto font-sans">
                    {group.description}
                  </p>
                )}
              </div>

              {/* Group Member Layouts */}
              {group.layout === 'featured' ? (
                /* Featured Large Cards */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {group.members.map((member, idx) => (
                    <div
                      key={member.id || idx}
                      className="bg-[#F4EFE6] rounded-2xl p-6 border border-[#C5A059]/30 shadow-editorial text-center space-y-4 group hover:shadow-2xl transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="w-40 h-48 rounded-xl overflow-hidden border-2 border-[#C5A059] mx-auto shadow-md bg-[#120F0C]">
                          <img
                            src={member.image || "/images/magazine/page-04.jpg"}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#120F0C]">
                            {member.name}
                          </h3>
                          <p className="text-xs font-mono uppercase tracking-wider text-[#7E5B1D] font-bold mt-0.5">
                            {member.role}
                          </p>
                        </div>
                        {member.bio && (
                          <p className="text-xs text-[#524C44] leading-relaxed font-sans">
                            {member.bio}
                          </p>
                        )}
                      </div>

                      {member.pageRef && (
                        <div className="pt-3 border-t border-[#DDD2BF] text-[11px] font-mono text-[#7A7369]">
                          Page {member.pageRef} Scan
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : group.layout === 'asymmetric' ? (
                /* Asymmetric 4-column cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.members.map((member, idx) => (
                    <div
                      key={member.id || idx}
                      className="bg-[#F4EFE6] rounded-2xl p-5 border border-[#C5A059]/30 shadow-editorial hover:shadow-xl transition-all text-center space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {member.image ? (
                          <div className="w-28 h-36 rounded-xl overflow-hidden border-2 border-[#C5A059] mx-auto shadow-md bg-[#120F0C]">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-28 h-36 rounded-xl border-2 border-[#C5A059]/50 mx-auto bg-[#EAE2D3] flex flex-col items-center justify-center p-3 shadow-inner">
                            <div className="w-12 h-12 rounded-full bg-[#120F0C] text-[#D8B572] flex items-center justify-center font-serif font-bold text-lg mb-1 border border-[#C5A059]">
                              {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <span className="text-[10px] font-mono text-[#7E5B1D] uppercase">Faculty</span>
                          </div>
                        )}

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E5B1D] block font-bold">
                            {member.role}
                          </span>
                          <h4 className="font-serif text-base font-bold text-[#120F0C] mt-0.5">
                            {member.name}
                          </h4>
                          {member.department && (
                            <p className="text-[11px] text-[#524C44] font-medium mt-0.5 font-sans">
                              {member.department}
                            </p>
                          )}
                        </div>

                        {member.bio && (
                          <p className="text-[11px] text-[#3D3730] leading-relaxed line-clamp-3 font-sans">
                            {member.bio}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 border-t border-[#DDD2BF] text-[10px] font-mono text-[#7A7369]">
                        {member.image ? `Photo: p.${member.pageRef || 9}` : 'Faculty Advisory'}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard Grid Layout */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {group.members.map((member, idx) => (
                    <div
                      key={member.id || idx}
                      className="bg-[#F4EFE6] rounded-xl p-4 border border-[#C5A059]/25 text-center hover:bg-[#FAF8F4] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {member.image ? (
                          <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-[#C5A059] mx-auto shadow-sm bg-[#120F0C]">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#120F0C] border border-[#C5A059] text-[#D8B572] flex items-center justify-center mx-auto text-xs font-serif font-bold shadow-sm">
                            {idx + 1}
                          </div>
                        )}
                        <h4 className="font-serif text-sm font-bold text-[#120F0C] leading-snug">
                          {member.name}
                        </h4>
                      </div>

                      <div className="mt-1">
                        <p className="text-[11px] font-mono text-[#7E5B1D] font-medium uppercase tracking-tight">
                          {member.role}
                        </p>
                        {member.department && (
                          <p className="text-[10px] text-[#7A7369] truncate font-sans mt-0.5">
                            {member.department}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {groupIdx < activeGroups.length - 1 && (
                <DiamondDivider variant="gold" className="mt-16" />
              )}
            </section>
          ))}
        </div>

      </WideContainer>

      {/* Lightbox for Team Scans */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={editorialScans}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title="Editorial & Union Official Print Spreads"
        subtitle="Astra College Union Magazine 2025–26"
      />
    </div>
  );
};
