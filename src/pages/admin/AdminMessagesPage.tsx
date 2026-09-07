import React, { useState } from 'react';
import { useContentStore, contentStore } from '../../services/contentStore';
import { MessageItem } from '../../data/messages';
import { Save, CheckCircle2, MessageSquare, Edit3, Eye } from 'lucide-react';

export const AdminMessagesPage: React.FC = () => {
  const { messages } = useContentStore();
  const [selectedId, setSelectedId] = useState(messages[0].id);
  const [activeMessage, setActiveMessage] = useState<MessageItem>(messages[0]);
  const [saved, setSaved] = useState(false);

  const handleSelect = (msg: MessageItem) => {
    setSelectedId(msg.id);
    setActiveMessage(msg);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    contentStore.updateMessage(selectedId, activeMessage);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleContentChange = (index: number, text: string) => {
    const updated = [...activeMessage.content];
    updated[index] = text;
    setActiveMessage({ ...activeMessage, content: updated });
  };

  const addParagraph = () => {
    setActiveMessage({ ...activeMessage, content: [...activeMessage.content, ''] });
  };

  const removeParagraph = (index: number) => {
    setActiveMessage({
      ...activeMessage,
      content: activeMessage.content.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="max-w-5xl space-y-6">
      
      <div>
        <h1 className="font-serif text-2xl font-bold text-white">Leadership Messages & Editorial Notes</h1>
        <p className="text-xs text-[#A8A29A]">Edit official messages from the Principal, Advisors, and Student Editor.</p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Message successfully updated and published to public site!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Messages List */}
        <div className="md:col-span-4 space-y-2">
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => handleSelect(msg)}
              className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                selectedId === msg.id
                  ? 'bg-[#C5A059] text-[#0A0806] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#1C1814] text-[#FAF8F4] border-[#C5A059]/20 hover:bg-[#2A2520]'
              }`}
            >
              <img
                src={msg.image}
                alt={msg.author}
                className="w-10 h-12 rounded-lg object-cover bg-black shrink-0 border border-black/20"
              />
              <div className="min-w-0">
                <h4 className="font-serif text-xs font-bold truncate">{msg.author}</h4>
                <p className="text-[10px] opacity-80 uppercase font-mono truncate">{msg.role}</p>
                <span className="text-[9px] opacity-70">Page {msg.pageRef}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column: Editor Form */}
        <div className="md:col-span-8">
          <form onSubmit={handleSave} className="bg-[#1C1814] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Author Name</label>
                <input
                  type="text"
                  value={activeMessage.author}
                  onChange={(e) => setActiveMessage({ ...activeMessage, author: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Role / Designation</label>
                <input
                  type="text"
                  value={activeMessage.role}
                  onChange={(e) => setActiveMessage({ ...activeMessage, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Department / Institution</label>
                <input
                  type="text"
                  value={activeMessage.department}
                  onChange={(e) => setActiveMessage({ ...activeMessage, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Message Title / Heading</label>
                <input
                  type="text"
                  value={activeMessage.title}
                  onChange={(e) => setActiveMessage({ ...activeMessage, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Pull Quote / Highlight Line</label>
                <textarea
                  rows={2}
                  value={activeMessage.quote || ''}
                  onChange={(e) => setActiveMessage({ ...activeMessage, quote: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider">
                  Message Paragraphs ({activeMessage.content.length})
                </label>
                <button
                  type="button"
                  onClick={addParagraph}
                  className="text-xs font-mono text-[#D8B572] hover:underline"
                >
                  + Add Paragraph
                </button>
              </div>

              {activeMessage.content.map((paragraph, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A8A29A]">
                    <span>Paragraph {pIdx + 1}</span>
                    {activeMessage.content.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeParagraph(pIdx)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    value={paragraph}
                    onChange={(e) => handleContentChange(pIdx, e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#120F0C] border border-[#C5A059]/30 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] leading-relaxed font-sans"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2A2520] flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-gold-glow transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Message</span>
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
};
