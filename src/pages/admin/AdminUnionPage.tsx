import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { EditorialMember } from '../../data/editorial';
import { Plus, Edit2, Trash2, Save, X, CheckCircle2, User, Users, Shield } from 'lucide-react';

export const AdminUnionPage: React.FC = () => {
  const { unionCouncil } = useContentStore();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const [formMember, setFormMember] = useState<EditorialMember>({
    name: '',
    role: '',
    department: '',
    category: 'union',
    image: '',
    pageRef: 10,
  });

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setFormMember({ ...unionCouncil[index] });
  };

  const handleDelete = (index: number) => {
    if (confirm(`Are you sure you want to remove "${unionCouncil[index].name}" from the Union Council?`)) {
      contentStore.deleteUnionMember(index);
      showNotification('Union council member deleted successfully.');
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      contentStore.updateUnionMember(editingIndex, formMember);
      setEditingIndex(null);
      showNotification('Union member updated successfully!');
    }
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    contentStore.addUnionMember({ ...formMember, category: 'union' });
    setShowAddModal(false);
    setFormMember({ name: '', role: '', department: '', category: 'union', image: '', pageRef: 10 });
    showNotification('New Union member successfully added and published!');
  };

  const showNotification = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3500);
  };

  return (
    <div className="max-w-5xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Astra Union Council Leadership</h1>
          <p className="text-xs text-[#A8A29A]">Manage student union representatives, designations, profile photos, and department mappings.</p>
        </div>

        <button
          onClick={() => {
            setFormMember({ name: '', role: '', department: '', category: 'union', image: '', pageRef: 10 });
            setShowAddModal(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Union Member</span>
        </button>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Union Members List */}
      <div className="bg-[#1C1814] rounded-3xl border border-[#C5A059]/30 overflow-hidden">
        <div className="divide-y divide-[#2A2520]">
          {unionCouncil.map((member, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#221E19] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-11 h-14 rounded-xl object-cover border border-[#C5A059] shrink-0 bg-[#120F0C]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#120F0C] border border-[#C5A059] text-[#D8B572] flex items-center justify-center font-serif font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="font-serif text-sm font-bold text-white truncate">{member.name}</h4>
                  <div className="flex items-center gap-2 text-[11px] font-mono mt-0.5">
                    <span className="text-[#D8B572] uppercase">{member.role}</span>
                    {member.department && (
                      <>
                        <span className="text-stone-600">•</span>
                        <span className="text-[#A8A29A] truncate">{member.department}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleEdit(idx)}
                  className="p-2 rounded-lg bg-[#120F0C] text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors cursor-pointer"
                  title="Edit member"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-2 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white transition-colors cursor-pointer"
                  title="Delete member"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit / Add Modal */}
      {(editingIndex !== null || showAddModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {editingIndex !== null ? 'Edit Union Member' : 'Add New Union Member'}
              </h3>
              <button
                onClick={() => {
                  setEditingIndex(null);
                  setShowAddModal(false);
                }}
                className="text-[#A8A29A] hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={editingIndex !== null ? handleSaveEdit : handleAddMember} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Full Name</label>
                <input
                  type="text"
                  required
                  value={formMember.name}
                  onChange={(e) => setFormMember({ ...formMember, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  placeholder="e.g. Sanet Shaji"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Union Role / Designation</label>
                <input
                  type="text"
                  required
                  value={formMember.role}
                  onChange={(e) => setFormMember({ ...formMember, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  placeholder="e.g. Chairman, General Secretary, Arts Secretary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Profile Photo URL (Image link / /images/...)</label>
                <input
                  type="text"
                  value={formMember.image || ''}
                  onChange={(e) => setFormMember({ ...formMember, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  placeholder="https://... or /images/magazine/page-10.jpg"
                />
                {formMember.image && (
                  <div className="flex items-center gap-3 mt-2 p-2 bg-[#120F0C] rounded-xl border border-[#C5A059]/20">
                    <img 
                      src={formMember.image} 
                      alt="Preview" 
                      className="w-10 h-12 object-cover rounded-lg border border-[#C5A059]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="text-[11px] text-[#D8B572] font-mono">Live Photo Preview</span>
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department / Class (Optional)</label>
                <input
                  type="text"
                  value={formMember.department || ''}
                  onChange={(e) => setFormMember({ ...formMember, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  placeholder="e.g. Department of Physics"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Page Reference in PDF</label>
                <input
                  type="number"
                  value={formMember.pageRef || 10}
                  onChange={(e) => setFormMember({ ...formMember, pageRef: parseInt(e.target.value) || 10 })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingIndex(null);
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
                  {editingIndex !== null ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
