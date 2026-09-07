import React, { useState } from 'react';
import { useContentStore } from '../services/contentStore';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { LightboxModal } from '../components/LightboxModal';
import { Award, Palette, Trophy, Sparkles, Eye, CheckCircle2, Shield, Flame } from 'lucide-react';

export const AchieversPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { bestOutgoingStudents, featuredArtists, kalolsavamWinners } = useContentStore();

  const artImages = featuredArtists.map(a => a.image);

  const sportsChampionship = [
    { rank: '1st Prize', team: 'Team Athletico', points: 'Champions', color: 'bg-amber-500 text-black' },
    { rank: '2nd Prize', team: 'Team Santos', points: 'Runners-Up', color: 'bg-stone-300 text-black' },
    { rank: '3rd Prize', team: 'Team Spartens', points: 'Second Runner-Up', color: 'bg-amber-700 text-white' },
    { rank: '4th Position', team: 'Team Estadio', points: 'Fourth Place', color: 'bg-stone-700 text-white' },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="VI"
          badge="Excellence & Distinction"
          title="Achievers & Fine Arts Showcase"
          subtitle="Celebrating University Champions, Outgoing Titans, and Master Student Artists"
          description="Recognizing the peak achievements of students in academics, university-level cultural arts, sports tournaments, and studio illustrations."
        />

        {/* 1. BEST OUTGOING STUDENTS */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
              Valedictory Honors
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] mt-2">
              Best Outgoing Students 2025–26
            </h2>
            <p className="text-xs text-[#524C44] mt-1">
              Honoring exemplary leadership, scholarship, and all-round campus distinction (Featured on Page 3).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bestOutgoingStudents.map((student) => (
              <div
                key={student.id}
                className="bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-editorial flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition-all"
              >
                <div className="w-36 h-48 rounded-2xl overflow-hidden border-2 border-[#C5A059] shrink-0 shadow-md bg-[#120F0C]">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div className="inline-block px-3 py-0.5 rounded-full bg-[#C5A059] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    {student.title}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#120F0C]">
                    {student.name}
                  </h3>
                  <p className="text-xs font-bold text-[#7E5B1D]">
                    {student.department}
                  </p>
                  <p className="text-[11px] font-mono text-[#524C44]">
                    Batch: {student.batch}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-[#7A7369]">Page {student.pageRef} Scan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider variant="gold" className="my-16" />

        {/* 2. SPORTS TOURNAMENT CHAMPIONSHIPS */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
              Athletic Meet & AFL
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] mt-2">
              Sports Tournament Championships
            </h2>
            <p className="text-xs text-[#524C44] mt-1">
              Official team rankings from the Inter-Departmental Sports & Astra Football League.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sportsChampionship.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4EFE6] rounded-2xl p-5 border border-[#C5A059]/30 text-center space-y-2 shadow-editorial hover:shadow-lg transition-all"
              >
                <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center font-bold font-mono text-xs mx-auto shadow-sm`}>
                  {idx + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-[#120F0C]">{item.team}</h4>
                <span className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#7E5B1D] font-bold">
                  {item.rank}
                </span>
                <p className="text-[11px] text-[#7A7369] font-mono">{item.points}</p>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider variant="gold" className="my-16" />

        {/* 3. MG UNIVERSITY KALOLSAVAM CHAMPIONS */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
              Cultural Laurels
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] mt-2">
              MG University Kalolsavam Champions
            </h2>
            <p className="text-xs text-[#524C44] mt-1">
              Celebrating exceptional student triumphs in university-level cultural arts competitions.
            </p>
          </div>

          <div className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-6 sm:p-8 shadow-editorial max-w-5xl mx-auto">
            <div className="divide-y divide-[#DDD2BF]">
              {kalolsavamWinners.map((winner, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#120F0C] border border-[#C5A059] text-[#D8B572] flex items-center justify-center font-serif font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#120F0C]">{winner.name}</h4>
                      <p className="text-xs text-[#524C44]">{winner.department}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:text-right pl-13 sm:pl-0">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-[#C5A059] text-white text-xs font-mono font-bold uppercase shadow-sm">
                        {winner.prize}
                      </span>
                      <p className="text-xs text-[#7E5B1D] font-medium mt-1">{winner.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiamondDivider variant="gold" className="my-16" />

        {/* 4. FEATURED STUDENT ARTISTS */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
              Fine Arts Gallery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120F0C] mt-2">
              Student Fine Arts & Illustration Gallery
            </h2>
            <p className="text-xs text-[#524C44] mt-1">
              Master student pencil sketches and ink illustrations published across the magazine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredArtists.map((artist, idx) => (
              <div
                key={artist.id}
                onClick={() => openLightbox(idx)}
                className="bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-editorial hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-[#120F0C]">
                  <img
                    src={artist.image}
                    alt={artist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[#C5A059] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1 text-center">
                  <h4 className="font-serif text-sm font-bold text-[#120F0C] group-hover:text-[#7E5B1D] transition-colors">
                    {artist.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#7E5B1D]">
                    {artist.name}
                  </p>
                  <p className="text-[11px] text-[#7A7369] font-mono">
                    {artist.department} • p.{artist.pageRef}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={artImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={featuredArtists[lightboxIndex]?.title}
        subtitle={`Artwork by ${featuredArtists[lightboxIndex]?.name} (${featuredArtists[lightboxIndex]?.department}) — Page ${featuredArtists[lightboxIndex]?.pageRef}`}
      />
    </div>
  );
};
