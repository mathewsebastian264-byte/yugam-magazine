import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContentStore, contentStore } from '../../services/contentStore';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Award, 
  Image, 
  MessageSquare, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  Clock,
  LayoutTemplate
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const content = useContentStore();
  const [resetConfirm, setResetConfirm] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleReset = () => {
    contentStore.resetToDefaults();
    setResetConfirm(false);
    setMessage('All website content successfully restored to verified 2025–26 PDF seed data!');
    setTimeout(() => setMessage(null), 4000);
  };

  const totalMembers = content.personGroups.reduce((acc, g) => acc + g.members.length, 0);

  const statCards = [
    { label: 'Campus Events & Fests', count: content.events.length, icon: Sparkles, path: '/admin/events', color: 'from-amber-600/20 to-amber-900/10' },
    { label: 'People & Committees', count: `${content.personGroups.length} Groups (${totalMembers})`, icon: Users, path: '/admin/people', color: 'from-blue-600/20 to-blue-900/10' },
    { label: 'Homepage Sections', count: `${content.homepageSections.filter(s => s.enabled).length} Active`, icon: LayoutTemplate, path: '/admin/homepage', color: 'from-emerald-600/20 to-emerald-900/10' },
    { label: 'Creative Literature', count: content.literaryPieces.length, icon: BookOpen, path: '/admin/creative', color: 'from-purple-600/20 to-purple-900/10' },
    { label: 'Achievers & Awards', count: content.bestOutgoingStudents.length + content.featuredArtists.length + content.kalolsavamWinners.length, icon: Award, path: '/admin/achievers', color: 'from-rose-600/20 to-rose-900/10' },
    { label: 'Media Library Assets', count: content.mediaLibrary.length, icon: Image, path: '/admin/media', color: 'from-yellow-600/20 to-yellow-900/10' },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Header Banner */}
      <div className="bg-[#1C1814] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572] font-semibold">
              Live CMS Active
            </span>
            <span className="text-xs text-[#A8A29A] font-mono">Volume 2025–26</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Editorial Overview & Content Suite
          </h1>
          <p className="text-xs sm:text-sm text-[#A8A29A]">
            Manage all live text, members, fests, literature, and media assets for St. Joseph's College Magazine.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Preview Public Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {message && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800/60 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link
              key={idx}
              to={stat.path}
              className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-[#1C1814] border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all hover:shadow-xl group flex flex-col justify-between space-y-4`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#120F0C] text-[#D8B572] border border-[#C5A059]/30">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-bold text-white">{stat.count}</span>
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D8B572] transition-colors">
                  {stat.label}
                </h3>
                <span className="text-[11px] font-mono text-[#A8A29A] flex items-center gap-1 mt-1">
                  <span>Manage items</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity Log */}
      <div className="bg-[#1C1814] rounded-3xl p-6 border border-[#C5A059]/20 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-base font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D8B572]" />
            <span>Recent CMS Activity Logs</span>
          </h2>
          <span className="text-[11px] font-mono text-[#A8A29A]">Real-time audit record</span>
        </div>

        <div className="divide-y divide-[#2A2520] max-h-48 overflow-y-auto">
          {content.activityLogs.map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="text-white font-semibold">{log.action}:</span>
                <span className="text-[#A8A29A]">{log.entity}</span>
              </div>
              <span className="text-[10px] font-mono text-stone-500">
                {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Actions & Reset */}
      <div className="bg-[#1C1814] rounded-3xl p-6 border border-[#C5A059]/20 space-y-4">
        <h2 className="font-serif text-lg font-bold text-white">System Controls & Emergency Reset</h2>
        <p className="text-xs text-[#A8A29A] leading-relaxed">
          The public website reads live from this CMS store. Any updates you make immediately publish to all visitors.
          If you ever want to discard modifications and restore the pristine original 76-page magazine PDF dataset, use the button below.
        </p>

        <div className="pt-2">
          {resetConfirm ? (
            <div className="p-4 bg-red-950/40 border border-red-800/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-red-300">Are you sure? This will reset all edits to the original seed data.</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setResetConfirm(false)}
                  className="px-4 py-2 rounded-xl bg-[#2A2520] text-[#C8C2B5] text-xs font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setResetConfirm(true)}
              className="px-4 py-2.5 rounded-xl bg-[#2A2520] hover:bg-red-900/40 text-red-400 text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors border border-red-800/30"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Content to Original PDF Dataset</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
