import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { Enquiry, EnquiryStatus } from '../../types';
import { Badge } from '../../components/common/Badge';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import { Modal } from '../../components/common/Modal';
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  UserCheck
} from 'lucide-react';

export const EnquiriesListPage: React.FC = () => {
  const navigate = useNavigate();
  const { enquiries, addEnquiry, updateEnquiry, deleteEnquiry, convertEnquiryToStudent, courses } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEnquiry, setEditingEnquiry] = useState<Enquiry | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    city: '',
    qualification: '',
    prevInstitution: '',
    gradYear: '2026',
    grade: '',
    courseId: courses[0]?.id || '',
    courseName: courses[0]?.name || '',
    preferredIntake: 'Fall 2026',
    source: 'Website' as Enquiry['source'],
    status: 'New' as EnquiryStatus,
    counsellor: 'Sarah Jenkins',
    nextFollowUp: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    notes: ''
  });

  const handleOpenAddModal = () => {
    setEditingEnquiry(null);
    setFormData({
      studentName: '',
      email: '',
      phone: '',
      city: '',
      qualification: '',
      prevInstitution: '',
      gradYear: '2026',
      grade: '',
      courseId: courses[0]?.id || '',
      courseName: courses[0]?.name || '',
      preferredIntake: 'Fall 2026',
      source: 'Website',
      status: 'New',
      counsellor: 'Sarah Jenkins',
      nextFollowUp: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      notes: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (enquiry: Enquiry) => {
    setEditingEnquiry(enquiry);
    setFormData({
      studentName: enquiry.studentName,
      email: enquiry.email,
      phone: enquiry.phone,
      city: enquiry.city,
      qualification: enquiry.qualification,
      prevInstitution: enquiry.prevInstitution,
      gradYear: enquiry.gradYear,
      grade: enquiry.grade,
      courseId: enquiry.courseId,
      courseName: enquiry.courseName,
      preferredIntake: enquiry.preferredIntake,
      source: enquiry.source,
      status: enquiry.status,
      counsellor: enquiry.counsellor,
      nextFollowUp: enquiry.nextFollowUp,
      notes: enquiry.notes
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;

    if (editingEnquiry) {
      updateEnquiry(editingEnquiry.id, formData);
    } else {
      addEnquiry(formData);
    }
    setIsModalOpen(false);
  };

  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch =
      enq.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.phone.includes(searchQuery) ||
      enq.courseName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || enq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeVariant = (status: EnquiryStatus) => {
    switch (status) {
      case 'New': return 'info';
      case 'Contacted': return 'default';
      case 'Counselling': return 'purple';
      case 'Application': return 'primary';
      case 'Converted': return 'success';
      case 'Closed': return 'danger';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header Bar: Title, Search/Filter controls, and EXACT 1 PRIMARY ACTION BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search enquiries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Counselling">Counselling</option>
              <option value="Application">Application</option>
              <option value="Converted">Converted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* PRIMARY ACTION BUTTON (Exactly 1 main action) */}
        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all focus:outline-hidden"
        >
          <Plus className="w-4 h-4" /> Add Enquiry
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Program</th>
                <th className="py-3.5 px-4">Phone</th>
                <th className="py-3.5 px-4">Source</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
              {filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <div className="max-w-xs mx-auto text-center space-y-2">
                      <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">No enquiries found</p>
                      <p className="text-xs text-slate-500">Try another search filter or add your first enquiry.</p>
                      <button
                        onClick={handleOpenAddModal}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Enquiry
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map(enquiry => {
                  const menuItems: ActionMenuItem[] = [
                    {
                      label: 'View Details',
                      icon: Eye,
                      onClick: () => navigate(`/enquiries/${enquiry.id}`)
                    },
                    {
                      label: 'Edit Enquiry',
                      icon: Edit,
                      onClick: () => handleOpenEditModal(enquiry)
                    },
                    ...(enquiry.status !== 'Converted' ? [{
                      label: 'Convert to Student',
                      icon: UserCheck,
                      variant: 'primary' as const,
                      onClick: () => convertEnquiryToStudent(enquiry.id)
                    }] : []),
                    {
                      label: 'Delete',
                      icon: Trash2,
                      variant: 'danger',
                      onClick: () => deleteEnquiry(enquiry.id)
                    }
                  ];

                  return (
                    <tr
                      key={enquiry.id}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-700/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        <div
                          onClick={() => navigate(`/enquiries/${enquiry.id}`)}
                          className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <p>{enquiry.studentName}</p>
                          <p className="text-[10px] font-normal text-slate-400">{enquiry.email}</p>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 max-w-xs truncate">
                        {enquiry.courseName}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                        {enquiry.phone}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                        {enquiry.source}
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={getStatusBadgeVariant(enquiry.status)}>
                          {enquiry.status}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                        {enquiry.counsellor}
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
        title={editingEnquiry ? 'Edit Enquiry' : 'Add New Enquiry'}
        subtitle="Fill in student enquiry information below"
        maxWidth="lg"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                placeholder="e.g. Aarav Sharma"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                placeholder="student@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                placeholder="New Delhi"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Program / Course *</label>
              <select
                value={formData.courseId}
                onChange={(e) => {
                  const selectedCourse = courses.find(c => c.id === e.target.value);
                  setFormData({
                    ...formData,
                    courseId: e.target.value,
                    courseName: selectedCourse ? selectedCourse.name : formData.courseName
                  });
                }}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 cursor-pointer"
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Lead Source</label>
              <select
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value as Enquiry['source'] })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 cursor-pointer"
              >
                <option value="Website">Website</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Walk-in">Walk-in</option>
                <option value="Advertisement">Advertisement</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Qualification</label>
              <input
                type="text"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                placeholder="10+2 / Graduation"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as EnquiryStatus })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 cursor-pointer"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Counselling">Counselling</option>
                <option value="Application">Application</option>
                <option value="Converted">Converted</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Notes</label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
              placeholder="Additional enquiry background context..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-sm"
            >
              Save Enquiry
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
