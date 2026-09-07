import React, { useState } from 'react';
import { useContentStore, contentStore, HomepageSectionConfig } from '../../services/contentStore';
import { 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Save, 
  CheckCircle2, 
  Layers, 
  LayoutTemplate,
  Sparkles
} from 'lucide-react';

export const AdminHomepageBuilderPage: React.FC = () => {
  const { homepageSections } = useContentStore();
  const [sections, setSections] = useState<HomepageSectionConfig[]>(
    [...homepageSections].sort((a, b) => a.order - b.order)
  );
  const [saved, setSaved] = useState(false);

  const toggleSection = (id: string) => {
    setSections(
      sections.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;

    const temp = newSections[index];
    newSections[index] = newSections[targetIndex];
    newSections[targetIndex] = temp;

    // Update order values
    const reordered = newSections.map((s, i) => ({ ...s, order: i + 1 }));
    setSections(reordered);
  };

  const handleTitleChange = (id: string, title: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, title } : s)));
  };

  const handleSubtitleChange = (id: string, subtitle: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, subtitle } : s)));
  };

  const handleSave = () => {
    contentStore.updateHomepageSections(sections);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Homepage Layout & Section Builder</h1>
          <p className="text-xs text-[#A8A29A]">Reorder sections, toggle visibility, and customize section titles for the public homepage.</p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow transition-all self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save Homepage Layout</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Homepage layout and section order successfully updated and live!</span>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-3">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              section.enabled
                ? 'bg-[#1C1814] border-[#C5A059]/30 text-white'
                : 'bg-[#14120F] border-stone-800 text-stone-500 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#120F0C] border border-[#C5A059]/40 text-[#D8B572] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {idx + 1}
              </div>

              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572] uppercase font-bold">
                    {section.type}
                  </span>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => handleTitleChange(section.id, e.target.value)}
                    className="bg-transparent font-serif font-bold text-sm sm:text-base text-white focus:outline-none focus:border-b border-[#C5A059] truncate w-full max-w-sm"
                  />
                </div>
                {section.subtitle !== undefined && (
                  <input
                    type="text"
                    value={section.subtitle || ''}
                    placeholder="Section Subtitle / Tagline"
                    onChange={(e) => handleSubtitleChange(section.id, e.target.value)}
                    className="bg-transparent text-xs text-[#A8A29A] focus:outline-none focus:border-b border-[#C5A059] w-full max-w-md block"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              {/* Move Up */}
              <button
                disabled={idx === 0}
                onClick={() => moveSection(idx, 'up')}
                className="p-2 rounded-lg bg-[#120F0C] hover:bg-[#2A2520] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Move Up"
              >
                <ArrowUp className="w-4 h-4" />
              </button>

              {/* Move Down */}
              <button
                disabled={idx === sections.length - 1}
                onClick={() => moveSection(idx, 'down')}
                className="p-2 rounded-lg bg-[#120F0C] hover:bg-[#2A2520] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Move Down"
              >
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Toggle Enable/Disable */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-mono font-bold ${
                  section.enabled
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                    : 'bg-stone-900 text-stone-400'
                }`}
                title={section.enabled ? 'Enabled on Homepage' : 'Hidden from Homepage'}
              >
                {section.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span className="hidden sm:inline">{section.enabled ? 'Visible' : 'Hidden'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
