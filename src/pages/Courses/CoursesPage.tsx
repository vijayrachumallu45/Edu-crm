import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { Course } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import {
  BookOpen,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  Clock,
  Award,
  Users
} from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const { courses, addCourse, updateCourse, deleteCourse, userProfile } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    programType: 'Undergraduate' as Course['programType'],
    duration: '3 Years',
    fees: 240000,
    totalSeats: 100,
    availableSeats: 30,
    status: 'Active' as Course['status'],
    description: '',
    eligibility: '10+2 with minimum 50% aggregate'
  });

  const handleOpenAddModal = () => {
    setEditingCourse(null);
    setFormData({
      code: `CRS-${Math.floor(100 + Math.random() * 900)}`,
      name: '',
      programType: 'Undergraduate',
      duration: '3 Years',
      fees: 240000,
      totalSeats: 100,
      availableSeats: 30,
      status: 'Active',
      description: '',
      eligibility: '10+2 with minimum 50% aggregate'
    });
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      code: course.code,
      name: course.name,
      programType: course.programType,
      duration: course.duration,
      fees: course.fees,
      totalSeats: course.totalSeats,
      availableSeats: course.availableSeats,
      status: course.status,
      description: course.description,
      eligibility: course.eligibility
    });
    setIsAddModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    if (editingCourse) {
      updateCourse(editingCourse.id, formData);
    } else {
      addCourse(formData);
    }
    setIsAddModalOpen(false);
  };

  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.programType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
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
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      {/* Grid of Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => {
          const menuItems: ActionMenuItem[] = [
            {
              label: 'View Details',
              icon: Eye,
              onClick: () => {
                setSelectedCourse(course);
                setIsDetailModalOpen(true);
              }
            },
            {
              label: 'Edit Course',
              icon: Edit,
              onClick: () => handleOpenEditModal(course)
            },
            {
              label: 'Delete',
              icon: Trash2,
              variant: 'danger',
              onClick: () => deleteCourse(course.id)
            }
          ];

          return (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      {course.code}
                    </span>
                    <Badge variant={course.status === 'Active' ? 'success' : 'warning'} size="sm">
                      {course.status}
                    </Badge>
                  </div>
                  <ActionMenu items={menuItems} />
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-3 line-clamp-1">{course.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{course.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2.5">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.availableSeats} / {course.totalSeats} seats left</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold text-slate-500">{course.programType}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {userProfile.currency}{course.fees.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <Modal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          title={`${selectedCourse.name} (${selectedCourse.code})`}
          subtitle={`Program Type: ${selectedCourse.programType}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white">Course Overview</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{selectedCourse.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-400">Duration</span>
                <p className="font-semibold text-slate-900 dark:text-white mt-0.5">{selectedCourse.duration}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-400">Total Program Fee</span>
                <p className="font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">{userProfile.currency}{selectedCourse.fees.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-400">Seat Allocation</span>
                <p className="font-semibold text-slate-900 dark:text-white mt-0.5">{selectedCourse.availableSeats} available out of {selectedCourse.totalSeats}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-400">Status</span>
                <p className="font-semibold text-emerald-600 mt-0.5">{selectedCourse.status}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800">
              <span className="font-bold text-indigo-900 dark:text-indigo-200">Eligibility Criteria</span>
              <p className="text-indigo-700 dark:text-indigo-300 mt-1">{selectedCourse.eligibility}</p>
            </div>
          </div>
        </Modal>
      )}

      {/* Add / Edit Course Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={editingCourse ? 'Edit Course Details' : 'Add New Course'}
        subtitle="Configure course offering and tuition fees"
        maxWidth="md"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Course Code *</label>
              <input
                type="text"
                required
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Course Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="e.g. Master of Business Administration"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Program Type</label>
              <select
                value={formData.programType}
                onChange={(e) => setFormData({ ...formData, programType: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Certification">Certification</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="e.g. 2 Years / 3 Years"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Tuition Fees ({userProfile.currency}) *</label>
              <input
                type="number"
                required
                value={formData.fees}
                onChange={(e) => setFormData({ ...formData, fees: Number(e.target.value) })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Total Seats</label>
              <input
                type="number"
                value={formData.totalSeats}
                onChange={(e) => setFormData({ ...formData, totalSeats: Number(e.target.value) })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Program overview and scope..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl"
            >
              Save Course
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
