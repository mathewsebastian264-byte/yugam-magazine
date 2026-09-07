import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { Save, CheckCircle2, Shield, Settings, Info } from 'lucide-react';

export const AdminSettingsPage: React.FC = () => {
  const { magazineInfo } = useContentStore();
  const [formData, setFormData] = useState(magazineInfo);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contentStore.updateMagazineInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Magazine & College Settings</h1>
          <p className="text-xs text-[#A8A29A]">Configure metadata, institutional accreditations, and legal notices.</p>
        </div>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Magazine settings successfully updated and published!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[#1C1814] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Magazine Name (English)</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Malayalam Logotype</label>
            <input
              type="text"
              value={formData.malayalamTitle}
              onChange={(e) => setFormData({ ...formData, malayalamTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Official Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Edition / Volume Year</label>
            <input
              type="text"
              value={formData.edition}
              onChange={(e) => setFormData({ ...formData, edition: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">College Full Legal Name</label>
            <input
              type="text"
              value={formData.collegeName}
              onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">NAAC Accreditation & CGPA</label>
            <input
              type="text"
              value={formData.accreditation}
              onChange={(e) => setFormData({ ...formData, accreditation: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Campus Postal Address</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Copyright Notice</label>
            <textarea
              rows={2}
              value={formData.copyrightNotice}
              onChange={(e) => setFormData({ ...formData, copyrightNotice: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#2A2520] flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-gold-glow transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings Changes</span>
          </button>
        </div>
      </form>

    </div>
  );
};
