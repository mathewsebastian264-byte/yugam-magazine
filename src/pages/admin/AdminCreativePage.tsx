import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { LiteraryPiece } from '../../data/literary';
import { Plus, Edit2, Trash2, Save, X, CheckCircle2, BookOpen, Feather } from 'lucide-react';

export const AdminCreativePage: React.FC = () => {
  const { literaryPieces } = useContentStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const [formPiece, setFormPiece] = useState<LiteraryPiece>({
    id: '',
    title: '',
    author: '',
    department: '',
    category: 'poem',
    pageRef: 25,
    language: 'English',
    stanzas: [''],
  });

  const handleEdit = (piece: LiteraryPiece) => {
    setEditingId(piece.id);
    setFormPiece({ ...piece });
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete the literary piece "${title}"?`)) {
      contentStore.deleteLiteraryPiece(id);
      showNotification('Literary work deleted successfully.');
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      contentStore.updateLiteraryPiece(editingId, formPiece);
      setEditingId(null);
      showNotification('Literary piece updated successfully!');
    }
  };

  const handleAddPiece = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formPiece.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const newPiece: LiteraryPiece = {
      ...formPiece,
      id: slug || `piece-${Date.now()}`,
    };
    contentStore.addLiteraryPiece(newPiece);
    setShowAddModal(false);
    showNotification('New literary piece published to Creative Archive!');
  };

  const showNotification = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3500);
  };

  return (
    <div className="max-w-6xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Creative Archive & Literary Works</h1>
          <p className="text-xs text-[#A8A29A]">Manage student poems, centerpiece anthologies, stories, and regional language pieces.</p>
        </div>

        <button
          onClick={() => {
            setFormPiece({
              id: '',
              title: '',
              author: '',
              department: '',
              category: 'poem',
              pageRef: 25,
              language: 'English',
              stanzas: [''],
            });
            setShowAddModal(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Literary Work</span>
        </button>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Grid of Literary Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {literaryPieces.map((piece) => (
          <div
            key={piece.id}
            className="bg-[#1C1814] rounded-2xl p-5 border border-[#C5A059]/30 flex flex-col justify-between space-y-4 hover:border-[#C5A059]/60 transition-all group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572] font-semibold">
                  {piece.category} • {piece.language || 'English'}
                </span>
                <span className="text-[10px] text-[#A8A29A] font-mono">Page {piece.pageRef}</span>
              </div>

              <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D8B572] transition-colors truncate">
                {piece.title}
              </h3>

              <p className="text-xs text-[#C8C2B5] font-sans">
                By <strong className="text-white">{piece.author}</strong> ({piece.department})
              </p>

              <p className="text-xs text-[#A8A29A] italic font-serif line-clamp-3">
                "{piece.stanzas[0]}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#2A2520] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#A8A29A]">{piece.stanzas.length} Stanzas / Lines</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(piece)}
                  className="px-2.5 py-1 rounded-lg bg-[#120F0C] text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(piece.id, piece.title)}
                  className="p-1 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {(editingId || showAddModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-5 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {editingId ? 'Edit Literary Work' : 'Add New Literary Work'}
              </h3>
              <button
                onClick={() => {
                  setEditingId(null);
                  setShowAddModal(false);
                }}
                className="text-[#A8A29A] hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={editingId ? handleSaveEdit : handleAddPiece} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Title</label>
                  <input
                    type="text"
                    required
                    value={formPiece.title}
                    onChange={(e) => setFormPiece({ ...formPiece, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Author Name</label>
                  <input
                    type="text"
                    required
                    value={formPiece.author}
                    onChange={(e) => setFormPiece({ ...formPiece, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department / Class</label>
                  <input
                    type="text"
                    required
                    value={formPiece.department}
                    onChange={(e) => setFormPiece({ ...formPiece, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Category</label>
                  <select
                    value={formPiece.category}
                    onChange={(e) => setFormPiece({ ...formPiece, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="centerpiece">Centerpiece Anthology</option>
                    <option value="poem">Poem</option>
                    <option value="story">Short Story / Article</option>
                    <option value="regional">Regional Language</option>
                    <option value="comic">Graphic Comic / Manga</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Page Reference in PDF</label>
                  <input
                    type="number"
                    value={formPiece.pageRef}
                    onChange={(e) => setFormPiece({ ...formPiece, pageRef: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">
                    Poem Stanzas / Lines (Separate each line/stanza with a new line)
                  </label>
                  <textarea
                    rows={8}
                    required
                    value={formPiece.stanzas.join('\n')}
                    onChange={(e) => setFormPiece({ ...formPiece, stanzas: e.target.value.split('\n') })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] leading-relaxed font-sans"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setShowAddModal(false);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  {editingId ? 'Save Changes' : 'Publish Work'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
