import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LayoutTemplate,
  Settings, 
  MessageSquare, 
  Users, 
  Sparkles, 
  BookOpen, 
  Award, 
  Image, 
  LogOut, 
  ExternalLink,
  Shield,
  Layers,
  ChevronRight,
  FolderPlus
} from 'lucide-react';
import { authService } from '../../services/authService';

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Homepage Builder', path: '/admin/homepage', icon: LayoutTemplate },
    { label: 'People & Groups', path: '/admin/people', icon: Users },
    { label: 'Union Leadership', path: '/admin/union', icon: Shield },
    { label: 'Leadership Messages', path: '/admin/messages', icon: MessageSquare },
    { label: 'Events & Fests', path: '/admin/events', icon: Sparkles },
    { label: 'Creative & Poems', path: '/admin/creative', icon: BookOpen },
    { label: 'Achievers & Awards', path: '/admin/achievers', icon: Award },
    { label: 'Media Library', path: '/admin/media', icon: Image },
    { label: 'Magazine Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#14120F] text-[#FAF8F4] flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0E0D0B] border-r border-[#C5A059]/30 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header */}
          <div className="p-5 border-b border-[#2A2520] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#1C1814] border border-[#C5A059]/40 flex items-center justify-center p-1.5 shadow-sm">
                <img 
                  src="/images/yugam-logo.png" 
                  alt="YUGAM" 
                  className="h-full w-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-white tracking-wide">YUGAM CMS</h2>
                <p className="text-[10px] font-mono text-[#C5A059] uppercase">Editorial Control</p>
              </div>
            </div>
          </div>

          {/* User Badge */}
          <div className="p-3 mx-3 my-3 bg-[#1C1814] rounded-xl border border-[#C5A059]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="block text-xs font-bold text-white capitalize">{user?.username || 'Admin'}</span>
                <span className="text-[10px] text-[#A8A29A] font-mono">Authenticated Session</span>
              </div>
            </div>
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#D8B572]">
              Super Admin
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0A0806] font-bold shadow-md'
                      : 'text-[#C8C2B5] hover:bg-[#1C1814] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#2A2520] space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#1C1814] hover:bg-[#2A2520] text-[#D8B572] text-xs font-semibold border border-[#C5A059]/30 transition-colors"
          >
            <span>Live Public Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs font-semibold border border-red-800/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-[#14120F] p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

    </div>
  );
};
