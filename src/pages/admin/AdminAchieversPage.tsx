import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { AchieverItem } from '../../data/achievers';
import { Plus, Edit2, Trash2, Save, X, CheckCircle2, Award, Trophy, User } from 'lucide-react';

export const AdminAchieversPage: React.FC = () => {
  const { bestOutgoingStudents, kalolsavamWinners, featuredArtists } = useContentStore();
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [editingStudent, setEditingStudent] = useState<AchieverItem | null>(null);
  const [editingArtist, setEditingArtist] = useState<AchieverItem | null>(null);

  const showNotification = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3500);
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      contentStore.updateBestOutgoingStudent(editingStudent.id, editingStudent);
      setEditingStudent(null);
      showNotification('Best Outgoing Student updated successfully!');
    }
  };

  const handleSaveArtist = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArtist) {
      contentStore.updateFeaturedArtist(editingArtist.id, editingArtist);
      setEditingArtist(null);
      showNotification('Featured Artist artwork updated successfully!');
    }
  };

  return (
    <div className="max-w-6xl space-y-8">
      
      <div>
        <h1 className="font-serif text-2xl font-bold text-white">Achievers, Honors & Fine Arts</h1>
        <p className="text-xs text-[#A8A29A]">Manage Best Outgoing Students, MG University Kalolsavam Champions, and Artworks.</p>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* 1. Best Outgoing Students */}
      <div className="space-y-4">
        <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-[#D8B572]" />
          <span>Best Outgoing Students (UG & PG)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bestOutgoingStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[#1C1814] rounded-2xl p-5 border border-[#C5A059]/30 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-28 rounded-xl object-cover bg-black shrink-0 border border-[#C5A059]/40"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="min-w-0 space-y-1">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#C5A059] text-[#0A0806] font-bold uppercase">
                    {student.title}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white truncate">{student.name}</h3>
                  <p className="text-xs text-[#D8B572]">{student.department}</p>
                  <p className="text-[11px] font-mono text-[#A8A29A]">{student.batch}</p>
                  <span className="text-[10px] text-stone-500">Source: Page {student.pageRef}</span>
                </div>
              </div>

              <button
                onClick={() => setEditingStudent({ ...student })}
                className="p-2 rounded-lg bg-[#120F0C] text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors shrink-0 cursor-pointer"
                title="Edit student"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Kalolsavam Champions */}
      <div className="space-y-4 pt-4 border-t border-[#2A2520]">
        <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#D8B572]" />
          <span>MG University Kalolsavam Champions</span>
        </h2>

        <div className="bg-[#1C1814] rounded-2xl border border-[#C5A059]/30 overflow-hidden">
          <div className="divide-y divide-[#2A2520]">
            {kalolsavamWinners.map((winner, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#120F0C] border border-[#C5A059] text-[#D8B572] flex items-center justify-center font-mono font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">{winner.name}</h4>
                    <p className="text-xs text-[#A8A29A]">{winner.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-[#C5A059]/20 text-[#D8B572] text-[10px] font-mono font-bold uppercase">
                    {winner.prize}
                  </span>
                  <p className="text-[11px] text-[#A8A29A] mt-1 font-sans">{winner.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Featured Fine Artists */}
      <div className="space-y-4 pt-4 border-t border-[#2A2520]">
        <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-[#D8B572]" />
          <span>Featured Student Fine Artists</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredArtists.map((artist) => (
            <div key={artist.id} className="bg-[#1C1814] rounded-2xl p-4 border border-[#C5A059]/20 text-center space-y-2 relative group">
              <img
                src={artist.image}
                alt={artist.title}
                className="w-full aspect-square rounded-xl object-cover bg-black border border-[#C5A059]/30"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <h4 className="font-serif text-sm font-bold text-white truncate">{artist.title}</h4>
              <p className="text-xs text-[#D8B572]">{artist.name}</p>
              <p className="text-[10px] text-[#A8A29A] font-mono">{artist.department}</p>

              <button
                onClick={() => setEditingArtist({ ...artist })}
                className="absolute top-6 right-6 p-1.5 rounded-lg bg-[#120F0C]/90 text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                title="Edit artwork"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Student Modal */}
      {editingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">Edit Best Outgoing Student</h3>
              <button onClick={() => setEditingStudent(null)} className="text-[#A8A29A] hover:text-white p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Student Name</label>
                <input
                  type="text"
                  required
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Award Title (e.g. Best Outgoing Student (UG))</label>
                <input
                  type="text"
                  required
                  value={editingStudent.title}
                  onChange={(e) => setEditingStudent({ ...editingStudent, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department</label>
                <input
                  type="text"
                  required
                  value={editingStudent.department}
                  onChange={(e) => setEditingStudent({ ...editingStudent, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Photo URL (or /images/...)</label>
                <input
                  type="text"
                  value={editingStudent.image}
                  onChange={(e) => setEditingStudent({ ...editingStudent, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingStudent(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Artist Modal */}
      {editingArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">Edit Student Artwork</h3>
              <button onClick={() => setEditingArtist(null)} className="text-[#A8A29A] hover:text-white p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveArtist} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Artwork Title</label>
                <input
                  type="text"
                  required
                  value={editingArtist.title}
                  onChange={(e) => setEditingArtist({ ...editingArtist, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Artist Name</label>
                <input
                  type="text"
                  required
                  value={editingArtist.name}
                  onChange={(e) => setEditingArtist({ ...editingArtist, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department</label>
                <input
                  type="text"
                  required
                  value={editingArtist.department}
                  onChange={(e) => setEditingArtist({ ...editingArtist, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Artwork Image URL</label>
                <input
                  type="text"
                  value={editingArtist.image}
                  onChange={(e) => setEditingArtist({ ...editingArtist, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingArtist(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
