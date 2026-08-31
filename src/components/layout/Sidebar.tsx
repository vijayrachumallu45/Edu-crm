import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  GitPullRequest,
  BookOpen,
  Headphones,
  CalendarCheck,
  Megaphone,
  CreditCard,
  LifeBuoy,
  BarChart3,
  Settings,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Enquiries', href: '/enquiries', icon: Users },
    { name: 'Students', href: '/students', icon: GraduationCap },
    { name: 'Admissions', href: '/admissions', icon: GitPullRequest },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Counselling', href: '/counselling', icon: Headphones },
    { name: 'Follow-Ups', href: '/follow-ups', icon: CalendarCheck },
    { name: 'Campaigns', href: '/campaigns', icon: Megaphone },
    { name: 'Fees', href: '/fees', icon: CreditCard },
    { name: 'Support', href: '/support', icon: LifeBuoy },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 z-30 select-none">
      {/* Brand Logo Header */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-slate-800/80">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-tight text-lg">EduFlow</span>
              <span className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/80 border border-indigo-800/60 px-1.5 py-0.5 rounded">CRM</span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Education Intelligence</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Main Menu</p>
        </div>

        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));

          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-3.5 h-3.5 text-indigo-200" />}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Status Card */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-slate-200">Local System Active</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Zero Backend • Pure Frontend</p>
        </div>
      </div>
    </aside>
  );
};
