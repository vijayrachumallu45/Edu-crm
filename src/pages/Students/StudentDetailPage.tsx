import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { Badge } from '../../components/common/Badge';
import {
  ArrowLeft,
  User,
  Users,
  BookOpen,
  CreditCard,
  GraduationCap,
  MessageSquare,
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const StudentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { students, feeRecords, feedbackItems, communicationLogs } = useEduContext();

  const student = students.find(s => s.id === id);
  const feeInfo = feeRecords.find(f => f.studentId === id || f.studentName === student?.name);
  const studentFeedback = feedbackItems.filter(f => f.studentName === student?.name);
  const studentComms = communicationLogs.filter(c => c.studentName === student?.name);

  if (!student) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Student record not found.</p>
        <button
          onClick={() => navigate('/students')}
          className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Return to Student Registry
        </button>
      </div>
    );
  }

  const getStatusVariant = (status: typeof student.status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'On Hold': return 'warning';
      case 'Completed': return 'primary';
      case 'Inactive': return 'danger';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/students')}
          className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{student.name}</h2>
            <Badge variant="primary" size="sm">{student.studentIdCode}</Badge>
            <Badge variant={getStatusVariant(student.status)} size="sm">{student.status}</Badge>
          </div>
          <p className="text-xs text-slate-500">{student.program} • Admitted {student.admissionDate}</p>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Personal Information */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Personal Information</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Full Name</span>
              <span className="font-semibold text-slate-900 dark:text-white">{student.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Email</span>
              <span className="font-semibold text-slate-900 dark:text-white">{student.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Phone</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">{student.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">City</span>
              <span className="font-semibold text-slate-900 dark:text-white">{student.city || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* 2. Parent / Guardian Details */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Parent / Guardian</h3>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Guardian Name</span>
              <span className="font-semibold text-slate-900 dark:text-white">{student.parentName || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Guardian Phone</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">{student.parentPhone || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Guardian Email</span>
              <span className="font-semibold text-slate-900 dark:text-white">{student.parentEmail || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* 3. Fee Summary */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Fee Summary</h3>
            </div>
            <Badge variant={student.feeStatus === 'Paid' ? 'success' : student.feeStatus === 'Overdue' ? 'danger' : 'warning'} size="sm">
              {student.feeStatus}
            </Badge>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Total Program Fee</span>
              <span className="font-semibold text-slate-900 dark:text-white">₹{student.totalFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Paid Fee</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">₹{student.paidFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Pending Fee</span>
              <span className="font-semibold text-rose-600 dark:text-rose-400">₹{student.pendingFee.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 4. Academic Summary */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Academic Performance Tracking</h3>
            </div>
            <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
              student.academicStatus === 'Good' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' :
              student.academicStatus === 'Needs Attention' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' :
              'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
            }`}>
              {student.academicStatus === 'At Risk' && <AlertTriangle className="w-3.5 h-3.5" />}
              {student.academicStatus}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
              <span className="text-[10px] text-slate-400 font-medium">Current Term</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{student.currentSemester}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
              <span className="text-[10px] text-slate-400 font-medium">Attendance Rate</span>
              <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">{student.attendance}%</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
              <span className="text-[10px] text-slate-400 font-medium">Performance Note</span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 line-clamp-2">{student.performance}</p>
            </div>
          </div>
        </div>

        {/* 5. Communication & Feedback */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Communication & Feedback</h3>
          </div>
          <div className="space-y-3 text-xs">
            {studentFeedback.length === 0 ? (
              <p className="text-slate-400 text-center py-2">No feedback submitted yet.</p>
            ) : (
              studentFeedback.map(f => (
                <div key={f.id} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{f.feedbackType}</span>
                    <span className="text-amber-500 font-bold">★ {f.rating}/5</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">"{f.comment}"</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
