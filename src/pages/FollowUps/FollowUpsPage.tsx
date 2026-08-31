import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { FollowUp, FollowUpStatus } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import {
  CalendarCheck,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  Edit,
  Trash2
} from 'lucide-react';

export const FollowUpsPage: React.FC = () => {
  const { followUps, addFollowUp, updateFollowUp, toggleFollowUpStatus, deleteFollowUp, userProfile } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFollowUp, setEditingFollowUp] = useState<FollowUp | null>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    counsellor: userProfile.name,
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    purpose: '',
    status: 'Upcoming' as FollowUpStatus,
    priority: 'Medium' as const
  });

  const handleOpenAddModal = () => {
    setEditingFollowUp(null);
    setFormData({
      studentName: '',
      counsellor: userProfile.name,
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      purpose: '',
      status: 'Upcoming',
      priority: 'Medium'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: FollowUp) => {
    setEditingFollowUp(item);
    setFormData({
      studentName: item.studentName,
      counsellor: item.counsellor,
      date: item.date,
      purpose: item.purpose,
      status: item.status,
      priority: item.priority as any
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.purpose) return;

    if (editingFollowUp) {
      updateFollowUp(editingFollowUp.id, formData);
    } else {
      addFollowUp(formData);
    }
    setIsModalOpen(false);
  };

  const followUpStatusPriority: Record<FollowUpStatus, number> = {
    Overdue: 0,
    Upcoming: 1,
    Completed: 2
  };

  const filteredFollowUps = followUps
    .filter(f => {
      const matchesSearch =
        f.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.purpose.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'All' || f.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((first, second) => {
      const statusDifference = followUpStatusPriority[first.status] - followUpStatusPriority[second.status];
      return statusDifference !== 0 ? statusDifference : first.date.localeCompare(second.date);
    });

  const getStatusBadgeVariant = (status: FollowUpStatus) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Upcoming': return 'primary';
      case 'Overdue': return 'danger';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search follow-up tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
            />
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Overdue">Overdue</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* EXACT 1 PRIMARY ACTION BUTTON */}
        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" /> Add Follow-Up
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Student / Candidate</th>
                <th className="py-3.5 px-4">Follow-Up Date</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4">Purpose</th>
                <th className="py-3.5 px-4">Priority</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
              {filteredFollowUps.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">No follow-ups recorded</p>
                  </td>
                </tr>
              ) : (
                filteredFollowUps.map(item => {
                  const menuItems: ActionMenuItem[] = [
                    {
                      label: item.status === 'Completed' ? 'Mark Pending' : 'Mark Complete',
                      icon: CheckCircle2,
                      variant: 'primary',
                      onClick: () => toggleFollowUpStatus(item.id)
                    },
                    {
                      label: 'Edit Task',
                      icon: Edit,
                      onClick: () => handleOpenEditModal(item)
                    },
                    {
                      label: 'Delete Task',
                      icon: Trash2,
                      variant: 'danger',
                      onClick: () => deleteFollowUp(item.id)
                    }
                  ];

                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-50/60 dark:hover:bg-slate-700/40 transition-colors ${
                        item.status === 'Overdue' ? 'bg-rose-50/30 dark:bg-rose-950/20' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        {item.studentName}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                        {item.counsellor}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 dark:text-slate-200 max-w-xs truncate">
                        {item.purpose}
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={item.priority === 'High' ? 'danger' : item.priority === 'Medium' ? 'warning' : 'default'} size="sm">
                          {item.priority}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={getStatusBadgeVariant(item.status)}>
                          {item.status}
                        </Badge>
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

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingFollowUp ? 'Edit Follow-Up Task' : 'Add Follow-Up Task'}
        subtitle="Set reminders for student communication"
        maxWidth="md"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student / Enquiry Name *</label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Candidate Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Follow-Up Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Priority Level</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Task Purpose / Notes *</label>
            <textarea
              rows={3}
              required
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="e.g. Call student regarding document verification clearance"
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
              Save Task
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
