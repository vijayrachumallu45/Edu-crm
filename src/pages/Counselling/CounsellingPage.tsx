import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { CounsellingSession, CounsellingMode, CounsellingOutcome } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import {
  Headphones,
  Plus,
  Search,
  Calendar,
  Clock,
  Phone,
  Video,
  UserCheck,
  Trash2,
  Edit
} from 'lucide-react';

export const CounsellingPage: React.FC = () => {
  const { counsellingSessions, addCounsellingSession, updateCounsellingSession, deleteCounsellingSession, userProfile } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<CounsellingSession | null>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    counsellor: userProfile.name,
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    mode: 'Phone' as CounsellingMode,
    outcome: 'Interested' as CounsellingOutcome,
    nextAction: 'Follow up call in 3 days',
    notes: ''
  });

  const handleOpenAddModal = () => {
    setEditingSession(null);
    setFormData({
      studentName: '',
      email: '',
      phone: '',
      counsellor: userProfile.name,
      date: new Date().toISOString().split('T')[0],
      time: '11:00',
      mode: 'Phone',
      outcome: 'Interested',
      nextAction: 'Follow up call in 3 days',
      notes: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (session: CounsellingSession) => {
    setEditingSession(session);
    setFormData({
      studentName: session.studentName,
      email: session.email,
      phone: session.phone,
      counsellor: session.counsellor,
      date: session.date,
      time: session.time,
      mode: session.mode,
      outcome: session.outcome,
      nextAction: session.nextAction,
      notes: session.notes
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName) return;

    if (editingSession) {
      updateCounsellingSession(editingSession.id, formData);
    } else {
      addCounsellingSession(formData);
    }
    setIsModalOpen(false);
  };

  const filteredSessions = counsellingSessions.filter(cs =>
    cs.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.counsellor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.outcome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getOutcomeVariant = (outcome: CounsellingOutcome) => {
    switch (outcome) {
      case 'Application Planned': return 'success';
      case 'Interested': return 'primary';
      case 'Needs Follow-Up': return 'warning';
      case 'Not Interested': return 'danger';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search counselling logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
        </div>

        {/* EXACT 1 PRIMARY ACTION BUTTON */}
        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" /> Schedule Counselling
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Student / Candidate</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4">Date & Time</th>
                <th className="py-3.5 px-4">Mode</th>
                <th className="py-3.5 px-4">Outcome</th>
                <th className="py-3.5 px-4">Next Action</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
              {filteredSessions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">No counselling logs recorded</p>
                  </td>
                </tr>
              ) : (
                filteredSessions.map(cs => {
                  const menuItems: ActionMenuItem[] = [
                    {
                      label: 'Edit Log',
                      icon: Edit,
                      onClick: () => handleOpenEditModal(cs)
                    },
                    {
                      label: 'Delete Log',
                      icon: Trash2,
                      variant: 'danger',
                      onClick: () => deleteCounsellingSession(cs.id)
                    }
                  ];

                  return (
                    <tr key={cs.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-700/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        <p>{cs.studentName}</p>
                        <p className="text-[10px] font-normal text-slate-400">{cs.email || cs.phone}</p>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                        {cs.counsellor}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        {cs.date} • {cs.time}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                          {cs.mode === 'Phone' && <Phone className="w-3.5 h-3.5 text-indigo-500" />}
                          {cs.mode === 'Online' && <Video className="w-3.5 h-3.5 text-emerald-500" />}
                          {cs.mode === 'In Person' && <UserCheck className="w-3.5 h-3.5 text-purple-500" />}
                          {cs.mode}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={getOutcomeVariant(cs.outcome)}>
                          {cs.outcome}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 max-w-xs truncate">
                        {cs.nextAction}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <ActionMenu items={menuItems} />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSession ? 'Edit Counselling Log' : 'Schedule Counselling Session'}
        subtitle="Log student guidance session details"
        maxWidth="lg"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student / Candidate Name *</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="Student Name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Counselling Mode</label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value as CounsellingMode })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Phone">Phone</option>
                <option value="Online">Online</option>
                <option value="In Person">In Person</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Outcome</label>
              <select
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value as CounsellingOutcome })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Interested">Interested</option>
                <option value="Needs Follow-Up">Needs Follow-Up</option>
                <option value="Application Planned">Application Planned</option>
                <option value="Not Interested">Not Interested</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Next Action Required</label>
            <input
              type="text"
              value={formData.nextAction}
              onChange={(e) => setFormData({ ...formData, nextAction: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="e.g. Send course brochure and fee structure via email"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl"
            >
              Save Session Log
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
