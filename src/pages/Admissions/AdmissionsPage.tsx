import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { AdmissionStage, Application } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import {
  GitPullRequest,
  Plus,
  Search,
  CheckCircle2,
  FileCheck,
  ChevronRight,
  Eye,
  Trash2
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { applications, updateApplicationStage, addApplication, deleteApplication, courses } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newAppForm, setNewAppForm] = useState({
    studentName: '',
    email: '',
    phone: '',
    program: courses[0]?.name || '',
    applicationDate: new Date().toISOString().split('T')[0],
    stage: 'Application' as AdmissionStage,
    status: 'Submitted' as Application['status'],
    counsellor: 'Sarah Jenkins',
    documentStatus: 'Submitted' as Application['documentStatus'],
    academicSummary: '10+2 / Graduation Completed',
    notes: ''
  });

  const stages: AdmissionStage[] = [
    'Enquiry',
    'Counselling',
    'Application',
    'Document Review',
    'Approved',
    'Enrolled'
  ];

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAppForm.studentName) return;

    addApplication(newAppForm);
    setIsAddModalOpen(false);
    setNewAppForm({
      studentName: '',
      email: '',
      phone: '',
      program: courses[0]?.name || '',
      applicationDate: new Date().toISOString().split('T')[0],
      stage: 'Application',
      status: 'Submitted',
      counsellor: 'Sarah Jenkins',
      documentStatus: 'Submitted',
      academicSummary: '10+2 / Graduation Completed',
      notes: ''
    });
  };

  const filteredApplications = applications.filter(app =>
    app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.appNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.program.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
          />
        </div>

        {/* EXACT 1 PRIMARY ACTION BUTTON */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" /> Create Application
        </button>
      </div>

      {/* Stage Kanban Board View */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
        {stages.map(stage => {
          const stageApps = filteredApplications.filter(app => app.stage === stage);

          return (
            <div key={stage} className="bg-slate-100/70 dark:bg-slate-800/50 rounded-2xl p-3 border border-slate-200/60 dark:border-slate-700/60 flex flex-col h-[520px]">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{stage}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {stageApps.length}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {stageApps.length === 0 ? (
                  <div className="h-28 flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-[11px] text-slate-400 text-center px-2">
                    No candidates in stage
                  </div>
                ) : (
                  stageApps.map(app => (
                    <div
                      key={app.id}
                      className="bg-white dark:bg-slate-800 rounded-xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-xs transition-all space-y-2 group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{app.studentName}</p>
                          <p className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">{app.appNumber}</p>
                        </div>
                        <ActionMenu
                          items={[
                            {
                              label: 'View Details',
                              icon: Eye,
                              onClick: () => {
                                setSelectedApp(app);
                                setIsDetailModalOpen(true);
                              }
                            },
                            {
                              label: 'Delete',
                              icon: Trash2,
                              variant: 'danger',
                              onClick: () => deleteApplication(app.id)
                            }
                          ]}
                        />
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{app.program}</p>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700">
                        <span>Doc: {app.documentStatus}</span>
                        <span>{app.applicationDate}</span>
                      </div>

                      {/* Quick stage navigation controls */}
                      <div className="flex items-center justify-between pt-1 gap-1">
                        {stages.indexOf(stage) > 0 && (
                          <button
                            onClick={() => updateApplicationStage(app.id, stages[stages.indexOf(stage) - 1])}
                            className="text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline"
                          >
                            ← Prev
                          </button>
                        )}
                        {stages.indexOf(stage) < stages.length - 1 && (
                          <button
                            onClick={() => updateApplicationStage(app.id, stages[stages.indexOf(stage) + 1])}
                            className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-0.5 ml-auto"
                          >
                            Next →
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <Modal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          title={`Application Details - ${selectedApp.appNumber}`}
          subtitle={`Submitted by ${selectedApp.studentName}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
              <div>
                <span className="text-[10px] text-slate-400">Student Name</span>
                <p className="font-semibold text-slate-900 dark:text-white">{selectedApp.studentName}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400">Application Number</span>
                <p className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">{selectedApp.appNumber}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400">Program</span>
                <p className="font-semibold text-slate-900 dark:text-white">{selectedApp.program}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400">Current Stage</span>
                <p className="font-semibold text-purple-600 dark:text-purple-400">{selectedApp.stage}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-slate-900 dark:text-white">Document Verification Status</span>
              <div className="flex items-center gap-2">
                <Badge variant={selectedApp.documentStatus === 'Verified' ? 'success' : selectedApp.documentStatus === 'Submitted' ? 'primary' : 'warning'}>
                  {selectedApp.documentStatus}
                </Badge>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Academic Summary</span>
              <p className="text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                {selectedApp.academicSummary}
              </p>
            </div>

            {selectedApp.notes && (
              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Admission Officer Notes</span>
                <p className="text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                  {selectedApp.notes}
                </p>
              </div>
            )}
          </div>
        </Modal>
      )}

      {/* Add New Application Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Create New Application"
        subtitle="File candidate admission application"
        maxWidth="lg"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={newAppForm.studentName}
                onChange={(e) => setNewAppForm({ ...newAppForm, studentName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="Candidate Name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Program / Course</label>
              <select
                value={newAppForm.program}
                onChange={(e) => setNewAppForm({ ...newAppForm, program: e.target.value })}
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
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Current Stage</label>
              <select
                value={newAppForm.stage}
                onChange={(e) => setNewAppForm({ ...newAppForm, stage: e.target.value as AdmissionStage })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                {stages.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Document Status</label>
              <select
                value={newAppForm.documentStatus}
                onChange={(e) => setNewAppForm({ ...newAppForm, documentStatus: e.target.value as any })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Pending">Pending</option>
                <option value="Submitted">Submitted</option>
                <option value="Verified">Verified</option>
              </select>
            </div>
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
              Create Application
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
