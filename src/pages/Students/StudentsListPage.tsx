import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { Student, StudentStatus } from '../../types';
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
  AlertCircle
} from 'lucide-react';

export const StudentsListPage: React.FC = () => {
  const navigate = useNavigate();
  const { students, addStudent, updateStudent, deleteStudent, courses } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    program: courses[0]?.name || '',
    admissionDate: new Date().toISOString().split('T')[0],
    status: 'Active' as StudentStatus,
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    totalFee: courses[0]?.fees || 240000,
    paidFee: Math.round((courses[0]?.fees || 240000) * 0.5),
    pendingFee: Math.round((courses[0]?.fees || 240000) * 0.5),
    feeStatus: 'Partially Paid' as const,
    currentSemester: 'Semester 1',
    attendance: 90,
    academicStatus: 'Good' as const,
    performance: 'Consistent performer.'
  });

  const handleOpenAddModal = () => {
    setEditingStudent(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      program: courses[0]?.name || '',
      admissionDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      totalFee: courses[0]?.fees || 240000,
      paidFee: Math.round((courses[0]?.fees || 240000) * 0.5),
      pendingFee: Math.round((courses[0]?.fees || 240000) * 0.5),
      feeStatus: 'Partially Paid',
      currentSemester: 'Semester 1',
      attendance: 90,
      academicStatus: 'Good',
      performance: 'Consistent performer.'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (student: Student) => {
    setEditingStudent(student);
    setFormData({
      name: student.name,
      email: student.email,
      phone: student.phone,
      city: student.city,
      program: student.program,
      admissionDate: student.admissionDate,
      status: student.status,
      parentName: student.parentName,
      parentPhone: student.parentPhone,
      parentEmail: student.parentEmail,
      totalFee: student.totalFee,
      paidFee: student.paidFee,
      pendingFee: student.pendingFee,
      feeStatus: student.feeStatus as any,
      currentSemester: student.currentSemester,
      attendance: student.attendance,
      academicStatus: student.academicStatus as any,
      performance: student.performance
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (editingStudent) {
      updateStudent(editingStudent.id, formData);
    } else {
      addStudent(formData);
    }
    setIsModalOpen(false);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentIdCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeVariant = (status: StudentStatus) => {
    switch (status) {
      case 'Active': return 'success';
      case 'On Hold': return 'warning';
      case 'Completed': return 'primary';
      case 'Inactive': return 'danger';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header Bar: Title, Search/Filter, EXACT 1 PRIMARY ACTION BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search students..."
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
              <option value="Active">Active</option>
              <option value="On Hold">On Hold</option>
              <option value="Completed">Completed</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* PRIMARY ACTION BUTTON */}
        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all focus:outline-hidden"
        >
          <Plus className="w-4 h-4" /> Enroll Student
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Student ID</th>
                <th className="py-3.5 px-4">Student Name</th>
                <th className="py-3.5 px-4">Program</th>
                <th className="py-3.5 px-4">Admission Date</th>
                <th className="py-3.5 px-4">Academic Risk</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <div className="max-w-xs mx-auto text-center space-y-2">
                      <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">No students found</p>
                      <p className="text-xs text-slate-500">Try adjusting your search criteria or enroll a new student.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => {
                  const menuItems: ActionMenuItem[] = [
                    {
                      label: 'View Profile',
                      icon: Eye,
                      onClick: () => navigate(`/students/${student.id}`)
                    },
                    {
                      label: 'Edit Record',
                      icon: Edit,
                      onClick: () => handleOpenEditModal(student)
                    },
                    {
                      label: 'Delete Record',
                      icon: Trash2,
                      variant: 'danger',
                      onClick: () => deleteStudent(student.id)
                    }
                  ];

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-700/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        {student.studentIdCode}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        <div
                          onClick={() => navigate(`/students/${student.id}`)}
                          className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <p>{student.name}</p>
                          <p className="text-[10px] font-normal text-slate-400">{student.email}</p>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 max-w-xs truncate">
                        {student.program}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        {student.admissionDate}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${
                          student.academicStatus === 'Good' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' :
                          student.academicStatus === 'Needs Attention' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' :
                          'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                        }`}>
                          {student.academicStatus === 'At Risk' && <AlertCircle className="w-3 h-3 text-rose-500" />}
                          {student.academicStatus} ({student.attendance}%)
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={getStatusBadgeVariant(student.status)}>
                          {student.status}
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

      {/* Add / Edit Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingStudent ? 'Edit Student Profile' : 'Enroll New Student'}
        subtitle="Specify student enrollment information"
        maxWidth="lg"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="e.g. Ishita Nair"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="ishita@student.demo"
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
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Program / Degree</label>
              <select
                value={formData.program}
                onChange={(e) => {
                  const selCourse = courses.find(c => c.name === e.target.value);
                  const fee = selCourse ? selCourse.fees : 240000;
                  setFormData({
                    ...formData,
                    program: e.target.value,
                    totalFee: fee,
                    pendingFee: Math.max(0, fee - formData.paidFee)
                  });
                }}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                {courses.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Parent / Guardian Name</label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="Parent full name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Parent Phone</label>
              <input
                type="text"
                value={formData.parentPhone}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="+91 98765 00000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as StudentStatus })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Active">Active</option>
                <option value="On Hold">On Hold</option>
                <option value="Completed">Completed</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Academic Performance Status</label>
              <select
                value={formData.academicStatus}
                onChange={(e) => setFormData({ ...formData, academicStatus: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Good">Good</option>
                <option value="Needs Attention">Needs Attention</option>
                <option value="At Risk">At Risk</option>
              </select>
            </div>
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
              Save Student Record
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
// Advanced student filtering
