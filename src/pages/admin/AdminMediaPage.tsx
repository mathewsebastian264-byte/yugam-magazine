import React, { useState } from 'react';
import { useContentStore, contentStore, MediaItem } from '../../services/contentStore';
import { Upload, Search, Copy, Check, Trash2, Eye, Image as ImageIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { LightboxModal } from '../../components/LightboxModal';

export const AdminMediaPage: React.FC = () => {
  const { mediaLibrary } = useContentStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const categories = ['All', 'Cover', 'Editorial', 'Events', 'Literature', 'Campus'];

  const filteredMedia = mediaLibrary.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.url.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyUrl = (item: MediaItem) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];

    // Security & File Validation
    const validMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validMimes.includes(file.type)) {
      alert('Security validation failed: Only valid image files (JPEG, PNG, WebP, GIF) are permitted.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      alert('File size exceeds the 15MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const resultUrl = uploadEvent.target?.result as string;
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const newMedia: MediaItem = {
        id: `upload-${Date.now()}`,
        url: resultUrl,
        title: sanitizedName,
        category: 'Campus',
        altText: sanitizedName,
        uploadedAt: new Date().toISOString().split('T')[0],
      };
      contentStore.addMedia(newMedia);
      setUploadMessage(`Successfully uploaded and cataloged "${sanitizedName}"!`);
      setTimeout(() => setUploadMessage(null), 4000);
    };
    reader.readAsDataURL(file);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-6xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Media & Asset Library</h1>
          <p className="text-xs text-[#A8A29A]">Upload, catalog, preview, and copy URLs for high-resolution magazine assets.</p>
        </div>

        <label className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer self-start sm:self-auto">
          <Upload className="w-4 h-4" />
          <span>Upload Image Asset</span>
          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      {uploadMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{uploadMessage}</span>
        </div>
      )}

      {/* Controls: Search & Categories */}
      <div className="bg-[#1C1814] rounded-2xl p-4 border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Search className="w-4 h-4 text-[#7E5B1D] shrink-0" />
          <input
            type="text"
            placeholder="Search media by filename or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-white placeholder-[#7A7369] focus:outline-none w-full sm:w-64"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C5A059] text-[#0A0806] font-bold shadow-sm'
                  : 'bg-[#120F0C] text-[#A8A29A] hover:bg-[#2A2520]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMedia.map((item, idx) => (
          <div
            key={item.id}
            className="bg-[#1C1814] rounded-xl overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div
              onClick={() => openLightbox(idx)}
              className="relative aspect-[3/4] overflow-hidden bg-black cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="p-2.5 space-y-1.5">
              <h4 className="font-serif text-[11px] font-bold text-white truncate">{item.title}</h4>
              
              <div className="flex items-center justify-between pt-1 border-t border-[#2A2520]">
                <button
                  onClick={() => handleCopyUrl(item)}
                  className="px-2 py-1 rounded bg-[#120F0C] hover:bg-[#C5A059] hover:text-[#0A0806] text-[#D8B572] text-[10px] font-mono flex items-center gap-1 transition-colors w-full justify-center"
                  title="Copy relative path"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredMedia.map((m) => m.url)}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        title={filteredMedia[lightboxIndex]?.title}
        subtitle="Media Library Asset — St. Joseph's College (Autonomous), Moolamattom"
      />

    </div>
  );
};
