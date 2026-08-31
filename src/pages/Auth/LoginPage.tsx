import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@eduflow.demo');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const { login } = useEduContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials.');
    }
  };

  const handleQuickDemoSignIn = () => {
    login('admin@eduflow.demo', 'admin123');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl p-8">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-indigo-600 items-center justify-center text-white shadow-lg shadow-indigo-500/30 mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">EduFlow CRM</h1>
          <p className="text-xs text-slate-400 mt-1">Education CRM — Frontend Demonstration</p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Demo Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-hidden focus:border-indigo-500 transition-colors"
              placeholder="admin@eduflow.demo"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-hidden focus:border-indigo-500 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-md shadow-indigo-600/20 transition-colors flex items-center justify-center gap-2"
          >
            Sign In to CRM <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-700"></div></div>
          <span className="relative px-3 bg-slate-800 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Instant Access</span>
        </div>

        <button
          type="button"
          onClick={handleQuickDemoSignIn}
          className="w-full py-2.5 px-4 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-600"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> One-Click Demo Sign In
        </button>

        <p className="text-[11px] text-center text-slate-500 mt-6">
          No external backend required • LocalStorage enabled
        </p>
      </div>
    </div>
  );
};
