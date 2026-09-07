import React from 'react';
import { magazineInfo } from '../data/magazineInfo';
import { SectionHeader } from '../components/SectionHeader';
import { DiamondDivider } from '../components/DiamondDivider';
import { Shield, Building2, Award, BookOpen, MapPin, Mail, Phone, Calendar, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAF8F4] text-[#120F0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          romanNumeral="VIII"
          badge="Heritage & Colophon"
          title="About St. Joseph's & 'Yugam'"
          subtitle="A Legacy of Excellence, Values, and Intellectual Enlightenment"
          description="Learn about St. Joseph's College (Autonomous), Moolamattom and the story of the 2025–26 Union Magazine."
        />

        {/* 1. THE INSTITUTION */}
        <section className="mb-16">
          <div className="bg-[#F4EFE6] rounded-3xl border border-[#C5A059]/30 p-8 sm:p-12 shadow-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#7E5B1D] border border-[#C5A059]/40 text-xs font-mono font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Established in 1981</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#120F0C] leading-tight">
                  St. Joseph's College (Autonomous), Moolamattom
                </h2>

                <p className="editorial-dropcap text-[#2A2520] text-sm sm:text-base leading-relaxed font-sans">
                  Nestled amidst the serene, green foothills of Arakulam in Moolamattom, Idukki, St. Joseph's College (Autonomous) stands as a beacon of premier higher education and moral empowerment. Established in 1981 and managed by the Carmelites of Mary Immaculate (CMI) Fathers, the college is re-accredited with <strong>A+ Grade by NAAC (CGPA 3.50)</strong> and affiliated with <strong>Mahatma Gandhi University</strong>.
                </p>

                <p className="text-[#3D3730] text-sm leading-relaxed font-sans">
                  The institution fosters holistic academic, physical, and moral development, giving students modern laboratories, robotics research incubators, literary societies, and active cultural platforms that nurture future-ready leaders.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#C5A059]/30 text-center shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#7E5B1D]">1981</span>
                    <span className="text-[11px] font-mono text-[#524C44] uppercase">Founded</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#C5A059]/30 text-center shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#7E5B1D]">NAAC A+</span>
                    <span className="text-[11px] font-mono text-[#524C44] uppercase">CGPA 3.50</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#C5A059]/30 text-center shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#7E5B1D]">Autonomous</span>
                    <span className="text-[11px] font-mono text-[#524C44] uppercase">M.G. Univ</span>
                  </div>
                </div>
              </div>

              {/* Campus Facade Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#FAF8F4] shadow-2xl bg-[#120F0C]">
                  <img
                    src="/images/magazine/page-02.jpg"
                    alt="St. Joseph's College Campus"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3.5 bg-[#120F0C] text-[#E5E0D6] text-xs font-mono text-center border-t border-[#C5A059]/30">
                    St. Joseph's Main Campus & Academy Facade
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <DiamondDivider variant="gold" className="my-16" />

        {/* 2. THE STORY OF YUGAM */}
        <section className="mb-16">
          <div className="bg-[#120F0C] text-white rounded-3xl border-2 border-[#C5A059] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8B572] font-bold block">
                The Theme
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                "A Voice of Generation"
              </h2>

              <p className="font-serif italic text-[#D8B572] text-lg sm:text-xl">
                "We were never simply passing through these years. These years were passing through us."
              </p>

              <p className="text-sm sm:text-base text-[#C8C2B5] leading-relaxed font-light">
                <strong>Yugam</strong> represents an epoch—a transformative era of self-discovery, debates, laughter, friendships, and artistic endeavors. Published under the auspices of the Astra College Union 2025–26, this digital publication serves as an everlasting testament to the dreams and boundless talents of the student fraternity.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs font-mono text-[#D8B572]">
                <span>❖ 76 Original Pages</span>
                <span>❖ 14 Major Fests & Events</span>
                <span>❖ Multi-Lingual Literary Corpus</span>
              </div>
            </div>
          </div>
        </section>

        <DiamondDivider variant="gold" className="my-16" />

        {/* 3. COLOPHON & OFFICIAL PUBLICATION CREDITS */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7E5B1D] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
              Colophon
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#120F0C] mt-2">
              Publication Credits & Notice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Box 1: Publication Team */}
            <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-editorial space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#120F0C] border-b border-[#C5A059]/30 pb-2">
                Editorial Board & Management
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#2A2520] font-sans">
                <p><strong>Manager:</strong> Rev. Fr. Dr. Thomas Puthussery CMI</p>
                <p><strong>Bursar:</strong> Rev. Fr. Bobin Jose Kumarettu CMI</p>
                <p><strong>Principal:</strong> Dr. Joseph George</p>
                <p><strong>Student Magazine Editor:</strong> Muhammed Yaz R (Dept. of Physics)</p>
                <p><strong>Staff Editors:</strong> Ms. Christy Joseph, Mr. Roby Mathew, Mr. Jose James</p>
                <p><strong>Student Sub-Editors:</strong> Ivan Sebastian, Sruthy S Kumar, Rahul Rajan</p>
              </div>
            </div>

            {/* Box 2: Legal & Circulation */}
            <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-editorial space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#120F0C] border-b border-[#C5A059]/30 pb-2">
                Circulation & Copyright Notice
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#2A2520] font-sans">
                <div className="inline-block px-3 py-1 bg-[#C5A059] text-white font-mono text-xs rounded-md font-bold uppercase shadow-sm">
                  {magazineInfo.circulationNote}
                </div>
                <p className="leading-relaxed text-[#3D3730] italic">
                  {magazineInfo.copyrightNotice}
                </p>
                <p className="text-xs text-[#7A7369] font-mono">
                  Autonomous College Magazine Series | Volume 2025–26
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CAMPUS CONTACT & LOCATION */}
        <section>
          <div className="bg-[#F4EFE6] rounded-2xl p-8 border border-[#C5A059]/30 shadow-editorial text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#120F0C]">
              Campus Address
            </h3>
            <p className="text-sm text-[#2A2520]">
              <strong>St. Joseph's College (Autonomous)</strong><br />
              Arakulam P.O., Moolamattom, Idukki District, Kerala - 685591, India
            </p>
            <p className="text-xs text-[#7E5B1D] font-mono font-medium">
              Re-Accredited with A+ Grade by NAAC with CGPA 3.50 | Affiliated to M.G. University
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
