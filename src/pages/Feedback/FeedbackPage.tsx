import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { FeedbackItem, FeedbackType } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import {
  MessageSquare,
  Plus,
  Search,
  Star
} from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  const { feedbackItems, addFeedback } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    studentName: '',
    feedbackType: 'Counselling' as FeedbackType,
    rating: 5,
    comment: '',
    status: 'Published' as const
  });

  const handleOpenAddModal = () => {
    setFormData({
      studentName: '',
      feedbackType: 'Counselling',
      rating: 5,
      comment: '',
      status: 'Published'
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.comment) return;

    addFeedback(formData);
    setIsModalOpen(false);
  };

  const filteredItems = feedbackItems.filter(f =>
    f.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.feedbackType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const avgRating = feedbackItems.length > 0
    ? (feedbackItems.reduce((acc, curr) => acc + curr.rating, 0) / feedbackItems.length).toFixed(1)
    : '5.0';

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Banner KPI Card */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">Overall Student Satisfaction</span>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-3xl font-bold">{avgRating}</span>
            <div className="flex items-center text-amber-400">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-indigo-200">({feedbackItems.length} reviews)</span>
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search feedback..."
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
          <Plus className="w-4 h-4" /> Submit Feedback
        </button>
      </div>

      {/* Main Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="primary" size="sm">{item.feedbackType}</Badge>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{item.rating}.0</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic">"{item.comment}"</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white text-xs">{item.studentName}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Feedback Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Submit Student Feedback"
        subtitle="Log student rating and evaluation details"
        maxWidth="md"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student Name *</label>
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
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Feedback Category</label>
              <select
                value={formData.feedbackType}
                onChange={(e) => setFormData({ ...formData, feedbackType: e.target.value as FeedbackType })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Counselling">Counselling</option>
                <option value="Admission">Admission</option>
                <option value="Course">Course</option>
                <option value="Support">Support</option>
                <option value="Overall Experience">Overall Experience</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Rating (1 to 5 Stars)</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value={5}>5 Stars - Excellent</option>
                <option value={4}>4 Stars - Good</option>
                <option value={3}>3 Stars - Average</option>
                <option value={2}>2 Stars - Poor</option>
                <option value={1}>1 Star - Unsatisfactory</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Feedback Comment *</label>
            <textarea
              rows={3}
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Enter feedback experience details..."
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
              Save Feedback
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
