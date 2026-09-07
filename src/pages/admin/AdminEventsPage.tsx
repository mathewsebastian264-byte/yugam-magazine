import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { EventItem } from '../../data/events';
import { Plus, Edit2, Trash2, Save, X, CheckCircle2, Sparkles, Calendar, Images } from 'lucide-react';

export const AdminEventsPage: React.FC = () => {
  const { events } = useContentStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const [formEvent, setFormEvent] = useState<EventItem>({
    id: '',
    title: '',
    tagline: '',
    category: 'Flagship Fest',
    date: '',
    pageReferences: [34],
    coverImage: '/images/magazine/page-34.jpg',
    description: '',
    highlights: [],
    galleryImages: [],
  });

  const handleEdit = (event: EventItem) => {
    setEditingId(event.id);
    setFormEvent({ ...event });
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to remove the event "${title}"?`)) {
      contentStore.deleteEvent(id);
      showNotification('Event chronicle removed successfully.');
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      contentStore.updateEvent(editingId, formEvent);
      setEditingId(null);
      showNotification('Event updated successfully!');
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formEvent.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const newEvent: EventItem = {
      ...formEvent,
      id: slug || `event-${Date.now()}`,
    };
    contentStore.addEvent(newEvent);
    setShowAddModal(false);
    showNotification('New campus event created and published!');
  };

  const showNotification = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3500);
  };

  return (
    <div className="max-w-6xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Campus Events & Annual Chronicle</h1>
          <p className="text-xs text-[#A8A29A]">Manage TRIONZA 2K26, sports tournaments, departmental fests, and photo galleries.</p>
        </div>

        <button
          onClick={() => {
            setFormEvent({
              id: '',
              title: '',
              tagline: '',
              category: 'Departmental Fest',
              date: '',
              pageReferences: [20],
              coverImage: '/images/magazine/page-20.jpg',
              description: '',
              highlights: [],
              galleryImages: [],
            });
            setShowAddModal(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Event</span>
        </button>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#1C1814] rounded-2xl p-5 border border-[#C5A059]/30 flex flex-col justify-between space-y-4 hover:border-[#C5A059]/60 transition-all group"
          >
            <div className="flex gap-4">
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-20 h-24 rounded-xl object-cover bg-black shrink-0 border border-[#C5A059]/30"
              />
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572] font-semibold uppercase">
                    {event.category}
                  </span>
                  <span className="text-[10px] text-[#A8A29A] font-mono">{event.date}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D8B572] transition-colors truncate">
                  {event.title}
                </h3>
                <p className="text-xs text-[#A8A29A] line-clamp-2 font-sans">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2A2520] flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-[#A8A29A]">
                {event.galleryImages.length} Photos • p.{event.pageReferences.join(', ')}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="px-3 py-1.5 rounded-lg bg-[#120F0C] text-[#D8B572] hover:bg-[#C5A059] hover:text-[#0A0806] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(event.id, event.title)}
                  className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white transition-colors"
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
                {editingId ? 'Edit Event Chronicle' : 'Create New Event'}
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

            <form onSubmit={editingId ? handleSaveEdit : handleAddEvent} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Event Title</label>
                  <input
                    type="text"
                    required
                    value={formEvent.title}
                    onChange={(e) => setFormEvent({ ...formEvent, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Category</label>
                  <input
                    type="text"
                    required
                    value={formEvent.category}
                    onChange={(e) => setFormEvent({ ...formEvent, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Date / Timeline</label>
                  <input
                    type="text"
                    required
                    value={formEvent.date}
                    onChange={(e) => setFormEvent({ ...formEvent, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Tagline / Subtitle</label>
                  <input
                    type="text"
                    value={formEvent.tagline}
                    onChange={(e) => setFormEvent({ ...formEvent, tagline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Cover Image URL</label>
                  <input
                    type="text"
                    value={formEvent.coverImage}
                    onChange={(e) => setFormEvent({ ...formEvent, coverImage: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Description / Full Story</label>
                  <textarea
                    rows={4}
                    required
                    value={formEvent.description}
                    onChange={(e) => setFormEvent({ ...formEvent, description: e.target.value })}
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
                  {editingId ? 'Save Changes' : 'Publish Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
