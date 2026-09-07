import React, { useState } from 'react';
import { useContentStore, contentStore, PersonGroup, PersonItem } from '../../services/contentStore';
import { 
  Users, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  CheckCircle2, 
  Upload, 
  Layers, 
  Eye, 
  EyeOff, 
  Sparkles,
  FolderPlus
} from 'lucide-react';

export const AdminPeoplePage: React.FC = () => {
  const { personGroups } = useContentStore();
  const [activeGroupId, setActiveGroupId] = useState<string>(personGroups[0]?.id || 'grp-union');
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const activeGroup = personGroups.find((g) => g.id === activeGroupId) || personGroups[0];

  // Form state for new/editing Group
  const [groupForm, setGroupForm] = useState<Partial<PersonGroup>>({
    title: '',
    categoryTag: 'Special Group',
    description: '',
    layout: 'grid',
    published: true,
  });

  // Form state for Member
  const [memberForm, setMemberForm] = useState<PersonItem>({
    id: '',
    name: '',
    role: '',
    category: 'Custom',
    department: '',
    batch: '2025–26',
    image: '',
    bio: '',
    pageRef: 10,
    published: true,
  });

  const showNotification = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3500);
  };

  // Group Handlers
  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = (groupForm.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const newGroup: PersonGroup = {
      id: `grp-${Date.now()}`,
      slug: slug || `group-${Date.now()}`,
      title: groupForm.title || 'New Group',
      categoryTag: groupForm.categoryTag || 'Custom Team',
      description: groupForm.description || '',
      layout: groupForm.layout || 'grid',
      published: true,
      order: personGroups.length + 1,
      members: [],
    };
    contentStore.addPersonGroup(newGroup);
    setActiveGroupId(newGroup.id);
    setShowAddGroupModal(false);
    showNotification(`New People Group "${newGroup.title}" created successfully!`);
  };

  const handleDeleteGroup = (groupId: string, title: string) => {
    if (confirm(`Are you sure you want to delete the entire group "${title}" and all its members?`)) {
      contentStore.deletePersonGroup(groupId);
      setActiveGroupId(personGroups[0]?.id || '');
      showNotification(`Group "${title}" deleted.`);
    }
  };

  // Member Handlers
  const handleOpenAddMember = () => {
    setEditingMemberId(null);
    setMemberForm({
      id: `mem-${Date.now()}`,
      name: '',
      role: '',
      category: 'Custom',
      department: '',
      batch: '2025–26',
      image: '',
      bio: '',
      pageRef: 10,
      published: true,
    });
    setShowMemberModal(true);
  };

  const handleOpenEditMember = (member: PersonItem) => {
    setEditingMemberId(member.id);
    setMemberForm({ ...member });
    setShowMemberModal(true);
  };

  const handleSaveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMemberId) {
      contentStore.updateMemberInGroup(activeGroupId, editingMemberId, memberForm);
      showNotification(`Member "${memberForm.name}" updated successfully!`);
    } else {
      contentStore.addMemberToGroup(activeGroupId, memberForm);
      showNotification(`Member "${memberForm.name}" added to "${activeGroup.title}"!`);
    }
    setShowMemberModal(false);
  };

  const handleDeleteMember = (memberId: string, name: string) => {
    if (confirm(`Are you sure you want to remove "${name}" from this group?`)) {
      contentStore.deleteMemberFromGroup(activeGroupId, memberId);
      showNotification(`Member "${name}" removed.`);
    }
  };

  return (
    <div className="max-w-6xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">People, Committees & Custom Groups CMS</h1>
          <p className="text-xs text-[#A8A29A]">
            Manage Staff, Students, Editorial Board, Union Council, and create arbitrary new committees without writing code.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setGroupForm({ title: '', categoryTag: 'Special Committee', description: '', layout: 'grid', published: true });
              setShowAddGroupModal(true);
            }}
            className="px-4 py-2.5 rounded-xl bg-[#1C1814] hover:bg-[#2A2520] text-[#D8B572] font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#C5A059]/40 transition-all"
          >
            <FolderPlus className="w-4 h-4" />
            <span>New Custom Group</span>
          </button>

          <button
            onClick={handleOpenAddMember}
            className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Groups Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {personGroups.map((group) => {
          const isActive = group.id === activeGroupId;
          return (
            <button
              key={group.id}
              onClick={() => setActiveGroupId(group.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider shrink-0 transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#C5A059] text-[#0A0806] font-bold shadow-md'
                  : 'bg-[#1C1814] text-[#C8C2B5] hover:bg-[#2A2520] border border-[#C5A059]/20'
              }`}
            >
              <span>{group.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30">
                {group.members.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Group Details Bar */}
      {activeGroup && (
        <div className="bg-[#1C1814] rounded-3xl p-5 border border-[#C5A059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572] font-semibold uppercase">
                {activeGroup.categoryTag}
              </span>
              <span className="text-xs text-stone-400 font-mono">Layout: {activeGroup.layout}</span>
            </div>
            <h2 className="font-serif text-lg font-bold text-white">{activeGroup.title}</h2>
            <p className="text-xs text-[#A8A29A]">{activeGroup.description}</p>
          </div>

          {personGroups.length > 1 && (
            <button
              onClick={() => handleDeleteGroup(activeGroup.id, activeGroup.title)}
              className="p-2 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors self-end sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete Group</span>
            </button>
          )}
        </div>
      )}

      {/* Members Grid */}
      {activeGroup && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeGroup.members.map((member, idx) => (
            <div
              key={member.id}
              className="bg-[#1C1814] rounded-2xl p-4 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-14 rounded-xl object-cover bg-black shrink-0 border border-[#C5A059]/40"
                  />
                ) : (
                  <div className="w-12 h-14 rounded-xl bg-[#120F0C] border border-[#C5A059]/40 text-[#D8B572] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                )}

                <div className="min-w-0 space-y-0.5">
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#D8B572] transition-colors truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#D8B572] font-mono truncate uppercase">{member.role}</p>
                  {member.department && (
                    <p className="text-[11px] text-[#A8A29A] truncate font-sans">{member.department}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleOpenEditMember(member)}
                  className="p-1.5 rounded-lg bg-[#120F0C] text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] transition-colors"
                  title="Edit member"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDeleteMember(member.id, member.name)}
                  className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white transition-colors"
                  title="Delete member"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {activeGroup.members.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 py-12 text-center text-[#A8A29A] bg-[#1C1814] rounded-3xl border border-dashed border-[#C5A059]/30">
              <Users className="w-10 h-10 mx-auto text-[#C5A059]/40 mb-2" />
              <p className="font-serif text-base font-bold text-white">No members in this group yet</p>
              <p className="text-xs mt-1">Click "Add Member" above to add profiles with photos and designations.</p>
            </div>
          )}
        </div>
      )}

      {/* 1. Modal: Create Custom Group */}
      {showAddGroupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">Create New People / Committee Group</h3>
              <button onClick={() => setShowAddGroupModal(false)} className="text-[#A8A29A] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateGroup} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Group Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Panel 25, Better Agency, Creative Team"
                  value={groupForm.title}
                  onChange={(e) => setGroupForm({ ...groupForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Category Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Alumni Leaders, Technical Wing"
                  value={groupForm.categoryTag}
                  onChange={(e) => setGroupForm({ ...groupForm, categoryTag: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Description</label>
                <textarea
                  rows={2}
                  placeholder="Short description of this group..."
                  value={groupForm.description}
                  onChange={(e) => setGroupForm({ ...groupForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Card Layout</label>
                <select
                  value={groupForm.layout}
                  onChange={(e) => setGroupForm({ ...groupForm, layout: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  <option value="grid">Grid (Standard Cards)</option>
                  <option value="asymmetric">Asymmetric Editorial</option>
                  <option value="featured">Featured Large Portraits</option>
                  <option value="compact">Compact Row List</option>
                </select>
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddGroupModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Modal: Add / Edit Member */}
      {showMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg bg-[#1C1814] rounded-3xl border-2 border-[#C5A059] p-6 sm:p-8 space-y-5 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-[#2A2520] pb-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {editingMemberId ? 'Edit Member Profile' : `Add Member to ${activeGroup?.title}`}
              </h3>
              <button onClick={() => setShowMemberModal(false)} className="text-[#A8A29A] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMember} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammed Yaz R"
                  value={memberForm.name}
                  onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Role / Designation</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Magazine Editor, General Secretary, Coordinator"
                  value={memberForm.role}
                  onChange={(e) => setMemberForm({ ...memberForm, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department / Class</label>
                <input
                  type="text"
                  placeholder="e.g. Department of Physics"
                  value={memberForm.department || ''}
                  onChange={(e) => setMemberForm({ ...memberForm, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Profile Photo URL (or /images/magazine/page-XX.jpg)</label>
                <input
                  type="text"
                  placeholder="/images/magazine/page-09.jpg"
                  value={memberForm.image || ''}
                  onChange={(e) => setMemberForm({ ...memberForm, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Bio / Editorial Note</label>
                <textarea
                  rows={2}
                  placeholder="Short bio or note..."
                  value={memberForm.bio || ''}
                  onChange={(e) => setMemberForm({ ...memberForm, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="pt-4 border-t border-[#2A2520] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowMemberModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  {editingMemberId ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
