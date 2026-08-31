import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import {
  ArrowLeft,
  User,
  BookOpen,
  GraduationCap,
  Briefcase,
  Clock,
  Plus,
  UserCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';

export const EnquiryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { enquiries, updateEnquiry, addEnquiryActivity, convertEnquiryToStudent } = useEduContext();

  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [activityForm, setActivityForm] = useState({
    title: '',
    description: '',
    type: 'Note' as 'Call' | 'Counselling' | 'Note' | 'Follow-up'
  });

  const enquiry = enquiries.find(e => e.id === id);

  if (!enquiry) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Enquiry not found.</p>
        <button
          onClick={() => navigate('/enquiries')}
          className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Return to Enquiries List
        </button>
      </div>
    );
  }

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityForm.title) return;

    addEnquiryActivity(enquiry.id, activityForm.title, activityForm.description, activityForm.type);
    setIsActivityModalOpen(false);
    setActivityForm({ title: '', description: '', type: 'Note' });
  };

  const handleStatusStepClick = (newStatus: typeof enquiry.status) => {
    updateEnquiry(enquiry.id, { status: newStatus });
    addEnquiryActivity(enquiry.id, `Status updated to ${newStatus}`, `Stage changed to ${newStatus}`, 'Status Change');
  };

  const statuses: typeof enquiry.status[] = ['New', 'Contacted', 'Counselling', 'Application', 'Converted', 'Closed'];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/enquiries')}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{enquiry.studentName}</h2>
              <Badge variant="primary" size="sm">{enquiry.id}</Badge>
            </div>
            <p className="text-xs text-slate-500">Created on {enquiry.createdAt}</p>
          </div>
        </div>

        {enquiry.status !== 'Converted' && (
          <button
            onClick={() => convertEnquiryToStudent(enquiry.id)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
          >
            <UserCheck className="w-4 h-4" /> Convert to Student
          </button>
        )}
      </div>

      {/* Interactive Status Stepper Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Enquiry Lifecycle Stage</p>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {statuses.map((st) => {
            const isActive = enquiry.status === st;
            const isCompleted = statuses.indexOf(enquiry.status) > statuses.indexOf(st);

            return (
              <button
                key={st}
                onClick={() => handleStatusStepClick(st)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:border-slate-700 hover:border-indigo-300'
                }`}
              >
                {st}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Cards Grid Layout (Personal, Academic, Program Interest, CRM Info) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Personal Information */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Personal Information</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Full Name</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.studentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Email Address</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Phone Number</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">{enquiry.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">City / Location</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.city || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* 2. Academic Information */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Academic Background</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Qualification</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.qualification || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Previous Institution</span>
              <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">{enquiry.prevInstitution || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Graduation Year</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.gradYear || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Grade / GPA</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.grade || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* 3. Program Interest */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Program Interest</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Applied Course</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{enquiry.courseName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Preferred Intake</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.preferredIntake}</span>
            </div>
          </div>
        </div>

        {/* 4. CRM Information */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">CRM Details</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Acquisition Source</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.source}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Assigned Counsellor</span>
              <span className="font-semibold text-slate-900 dark:text-white">{enquiry.counsellor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Next Follow-Up Date</span>
              <span className="font-mono font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {enquiry.nextFollowUp}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Activity Timeline</h3>
          </div>
          <button
            onClick={() => setIsActivityModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Log Activity
          </button>
        </div>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
          {enquiry.activities?.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-4">No activity logged yet.</p>
          ) : (
            enquiry.activities.map((act) => (
              <div key={act.id} className="relative">
                <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-800" />
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{act.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{act.date} • {act.author}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{act.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for adding activity note */}
      <Modal
        isOpen={isActivityModalOpen}
        onClose={() => setIsActivityModalOpen(false)}
        title="Log Activity / Note"
        subtitle={`Add interaction log for ${enquiry.studentName}`}
        maxWidth="md"
      >
        <form onSubmit={handleAddActivity} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Activity Type</label>
            <select
              value={activityForm.type}
              onChange={(e) => setActivityForm({ ...activityForm, type: e.target.value as any })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
            >
              <option value="Call">Call Log</option>
              <option value="Counselling">Counselling Note</option>
              <option value="Note">General Note</option>
              <option value="Follow-up">Follow-Up Log</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Activity Title *</label>
            <input
              type="text"
              required
              value={activityForm.title}
              onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="e.g. Telephonic discussion regarding scholarship"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={3}
              value={activityForm.description}
              onChange={(e) => setActivityForm({ ...activityForm, description: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Summary of conversation or note details..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsActivityModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl"
            >
              Add Activity
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
// Improved enquiry status workflow
