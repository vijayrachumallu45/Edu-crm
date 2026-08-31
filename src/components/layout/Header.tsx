import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import {
  Search,
  Bell,
  Sun,
  Moon,
  LogOut,
  User,
  CheckCheck,
  X
} from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    userProfile,
    updateUserProfile,
    notifications,
    markNotificationAsRead,
    clearNotifications,
    logout,
    enquiries,
    students
  } = useEduContext();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Determine current page title based on path
  const getPageTitle = (path: string) => {
    if (path === '/') return 'Dashboard Overview';
    if (path.startsWith('/enquiries/')) return 'Enquiry Details';
    if (path.startsWith('/enquiries')) return 'Enquiries Management';
    if (path.startsWith('/students/')) return 'Student Profile';
    if (path.startsWith('/students')) return 'Students Registry';
    if (path.startsWith('/admissions')) return 'Admission Pipeline';
    if (path.startsWith('/courses/')) return 'Course Details';
    if (path.startsWith('/courses')) return 'Course Catalog';
    if (path.startsWith('/counselling')) return 'Counselling Sessions';
    if (path.startsWith('/follow-ups')) return 'Follow-Up Tasks';
    if (path.startsWith('/campaigns')) return 'Marketing Campaigns';
    if (path.startsWith('/fees')) return 'Fee Management';
    if (path.startsWith('/support')) return 'Support Tickets';
    if (path.startsWith('/feedback')) return 'Student Feedback';
    if (path.startsWith('/analytics')) return 'CRM Analytics & Reports';
    if (path.startsWith('/settings')) return 'System Settings';
    return 'EduFlow CRM';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered search results across enquiries & students
  const filteredEnquiries = searchQuery.trim()
    ? enquiries.filter(e => e.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || e.email.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredStudents = searchQuery.trim()
    ? students.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.studentIdCode.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const toggleTheme = () => {
    updateUserProfile({ theme: userProfile.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-700/80 px-6 flex items-center justify-between sticky top-0 z-20 transition-colors">
      {/* Page Title */}
      <div>
        <h1 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
          {getPageTitle(location.pathname)}
        </h1>
      </div>

      {/* Center Search & Right Controls */}
      <div className="flex items-center gap-4">
        {/* Global Search Bar */}
        <div className="relative w-64 md:w-80" ref={searchRef}>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search enquiries or students..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-100 dark:bg-slate-900/60 border border-transparent dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Search Dropdown */}
          {showSearchResults && searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 max-h-80 overflow-y-auto">
              {filteredEnquiries.length === 0 && filteredStudents.length === 0 ? (
                <div className="p-3 text-center text-xs text-slate-500">No matching records found.</div>
              ) : (
                <>
                  {filteredEnquiries.length > 0 && (
                    <div className="mb-2">
                      <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enquiries</div>
                      {filteredEnquiries.slice(0, 3).map(e => (
                        <div
                          key={e.id}
                          onClick={() => {
                            navigate(`/enquiries/${e.id}`);
                            setShowSearchResults(false);
                            setSearchQuery('');
                          }}
                          className="px-2.5 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg cursor-pointer flex justify-between items-center text-xs"
                        >
                          <div>
                            <p className="font-semibold text-slate-800 dark:text-slate-200">{e.studentName}</p>
                            <p className="text-[10px] text-slate-400">{e.courseName}</p>
                          </div>
                          <span className="text-[10px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full">{e.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredStudents.length > 0 && (
                    <div>
                      <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students</div>
                      {filteredStudents.slice(0, 3).map(s => (
                        <div
                          key={s.id}
                          onClick={() => {
                            navigate(`/students/${s.id}`);
                            setShowSearchResults(false);
                            setSearchQuery('');
                          }}
                          className="px-2.5 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg cursor-pointer flex justify-between items-center text-xs"
                        >
                          <div>
                            <p className="font-semibold text-slate-800 dark:text-slate-200">{s.name}</p>
                            <p className="text-[10px] text-slate-400">{s.studentIdCode} • {s.program}</p>
                          </div>
                          <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full">{s.status}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700 transition-colors"
          title={`Switch to ${userProfile.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {userProfile.theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Notifications Icon & Popup */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700 transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-800" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Notifications ({unreadCount})</span>
                {notifications.length > 0 && (
                  <button
                    onClick={clearNotifications}
                    className="text-[11px] text-slate-500 hover:text-indigo-600 dark:text-slate-400 flex items-center gap-1"
                  >
                    <CheckCheck className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-xs text-slate-500 text-center py-4">No new notifications</p>
                ) : (
                  notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationAsRead(n.id)}
                      className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                        n.read
                          ? 'bg-slate-50/50 border-slate-100 text-slate-500 dark:bg-slate-800/40 dark:border-slate-700/50 dark:text-slate-400'
                          : 'bg-indigo-50/50 border-indigo-100 text-slate-800 dark:bg-indigo-950/40 dark:border-indigo-800/50 dark:text-slate-200 font-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900 dark:text-white">{n.title}</span>
                        <span className="text-[10px] text-slate-400">{n.time}</span>
                      </div>
                      <p className="text-[11px] mt-1 text-slate-600 dark:text-slate-300 leading-snug">{n.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors text-left"
          >
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-indigo-500/20"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{userProfile.name}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{userProfile.role}</p>
            </div>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
              <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700/80">
                <p className="text-xs font-bold text-slate-900 dark:text-white">{userProfile.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">{userProfile.email}</p>
              </div>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate('/settings');
                }}
                className="w-full px-4 py-2 text-left text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5 text-slate-400" /> Settings & Profile
              </button>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  logout();
                  navigate('/login');
                }}
                className="w-full px-4 py-2 text-left text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
