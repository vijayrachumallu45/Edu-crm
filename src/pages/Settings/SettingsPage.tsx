import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { AdmissionStage } from '../../types';
import { Modal } from '../../components/common/Modal';
import {
  Settings as SettingsIcon,
  User,
  Sun,
  Moon,
  Sliders,
  RotateCcw,
  Check
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { userProfile, updateUserProfile, courses, resetToMockData } = useEduContext();

  const [activeTab, setActiveTab] = useState<'profile' | 'appearance' | 'preferences'>('profile');
  const [profileForm, setProfileForm] = useState({
    name: userProfile.name,
    email: userProfile.email,
    role: userProfile.role
  });
  const [prefForm, setPrefForm] = useState({
    currency: userProfile.currency,
    defaultCourse: userProfile.defaultCourse,
    defaultAdmissionStage: userProfile.defaultAdmissionStage
  });

  const [savedSuccess, setSavedSuccess] = useState('');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(profileForm);
    setSavedSuccess('Profile details updated successfully!');
    setTimeout(() => setSavedSuccess(''), 3000);
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(prefForm);
    setSavedSuccess('CRM preferences updated successfully!');
    setTimeout(() => setSavedSuccess(''), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Success Notification Banner */}
      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-150">
          <Check className="w-4 h-4" /> {savedSuccess}
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'profile'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('appearance')}
          className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'appearance'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Appearance
        </button>
        <button
          onClick={() => setActiveTab('preferences')}
          className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 ${
            activeTab === 'preferences'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          CRM Preferences
        </button>
      </div>

      {/* Tab 1: Profile */}
      {activeTab === 'profile' && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-500/20"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{userProfile.name}</h3>
              <p className="text-xs text-slate-500">{userProfile.role}</p>
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Role Title</label>
              <input
                type="text"
                value={profileForm.role}
                onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-xs transition-all"
            >
              Save Profile
            </button>
          </form>
        </div>
      )}

      {/* Tab 2: Appearance */}
      {activeTab === 'appearance' && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Color Theme</h3>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <button
              onClick={() => updateUserProfile({ theme: 'light' })}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                userProfile.theme === 'light'
                  ? 'border-indigo-600 bg-indigo-50/50 text-indigo-600 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/60'
              }`}
            >
              <Sun className="w-6 h-6" />
              <span className="text-xs font-bold">Light Mode</span>
            </button>

            <button
              onClick={() => updateUserProfile({ theme: 'dark' })}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                userProfile.theme === 'dark'
                  ? 'border-indigo-600 bg-indigo-950/60 text-indigo-400 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/60'
              }`}
            >
              <Moon className="w-6 h-6" />
              <span className="text-xs font-bold">Dark Mode</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: CRM Preferences */}
      {activeTab === 'preferences' && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-6">
          <form onSubmit={handleSavePreferences} className="space-y-4 max-w-md">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Currency Symbol</label>
              <select
                value={prefForm.currency}
                onChange={(e) => setPrefForm({ ...prefForm, currency: e.target.value as any })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="₹">₹ (Indian Rupee)</option>
                <option value="$">$ (US Dollar)</option>
                <option value="€">€ (Euro)</option>
                <option value="£">£ (British Pound)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Default Course Selection</label>
              <select
                value={prefForm.defaultCourse}
                onChange={(e) => setPrefForm({ ...prefForm, defaultCourse: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                {courses.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Default Admission Stage</label>
              <select
                value={prefForm.defaultAdmissionStage}
                onChange={(e) => setPrefForm({ ...prefForm, defaultAdmissionStage: e.target.value as AdmissionStage })}
                className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Enquiry">Enquiry</option>
                <option value="Counselling">Counselling</option>
                <option value="Application">Application</option>
                <option value="Document Review">Document Review</option>
                <option value="Approved">Approved</option>
                <option value="Enrolled">Enrolled</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-xs transition-all"
            >
              Save Preferences
            </button>
          </form>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Reset Local Demo Data</h4>
            <p className="text-[11px] text-slate-500 mb-3">Reset all LocalStorage data back to factory mock datasets.</p>
            <button
              onClick={() => setIsResetModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 font-semibold text-xs rounded-xl hover:bg-rose-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset to Initial Mock Data
            </button>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset All Local CRM Data?"
        subtitle="This action will replace all current LocalStorage data with original mock records."
        maxWidth="sm"
      >
        <div className="space-y-4 pt-2">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Are you sure you want to proceed? Any custom records added during this session will be replaced by the standard mock datasets.
          </p>
          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsResetModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                resetToMockData();
                setIsResetModalOpen(false);
                setSavedSuccess('Local CRM data reset to factory mock data!');
                setTimeout(() => setSavedSuccess(''), 3000);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl"
            >
              Yes, Reset Data
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
