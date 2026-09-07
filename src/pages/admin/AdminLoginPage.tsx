import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../../services/authService';
import { Shield, Lock, User, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('yugam2026');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await authService.login(username, password);
      if (res.success) {
        navigate('/admin/dashboard');
      } else {
        setError(res.message || 'Authentication failed. Please verify credentials.');
      }
    } catch (err) {
      setError('An unexpected server error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0806] text-[#FAF8F4] flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      <div className="absolute inset-0 dark-paper-bg opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-md bg-[#120F0C] rounded-3xl border-2 border-[#C5A059] shadow-2xl p-8 space-y-6 z-10">
        
        {/* Header Logo */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <img 
              src="/images/yugam-logo.png" 
              alt="YUGAM" 
              className="h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(197,160,89,0.4)]"
            />
          </div>
          <h1 className="font-serif text-2xl font-bold text-white tracking-wider">YUGAM CMS</h1>
          <p className="text-xs text-[#D8B572] font-mono uppercase tracking-widest">
            Astra Union 2025–26 • Editorial Panel
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-950/60 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Username</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#7E5B1D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#1C1814] border border-[#C5A059]/30 rounded-xl text-xs text-white placeholder-[#7A7369] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-[#A8A29A] uppercase tracking-wider block">Access Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#7E5B1D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#1C1814] border border-[#C5A059]/30 rounded-xl text-xs text-white placeholder-[#7A7369] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#C5A059] hover:bg-[#D8B572] text-[#0A0806] text-xs font-bold uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? <span>Verifying...</span> : <span>Sign In to Admin Portal</span>}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="p-3 bg-[#1C1814] rounded-xl border border-[#C5A059]/20 text-[11px] text-[#A8A29A] space-y-1">
          <p className="font-semibold text-[#D8B572]">Default Access Credentials:</p>
          <p>Username: <code className="text-white">admin</code> • Password: <code className="text-white">yugam2026</code></p>
        </div>

        <div className="text-center pt-2">
          <Link to="/" className="text-xs text-[#A8A29A] hover:text-[#D8B572] transition-colors">
            ← Return to Public Magazine Site
          </Link>
        </div>

      </div>
    </div>
  );
};
