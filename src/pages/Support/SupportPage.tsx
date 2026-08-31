import React, { useState } from 'react';
import { useEduContext } from '../../context/EduContext';
import { SupportTicket, TicketCategory, TicketStatus } from '../../types';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ActionMenu, ActionMenuItem } from '../../components/common/ActionMenu';
import {
  LifeBuoy,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Eye,
  MessageSquare
} from 'lucide-react';

export const SupportPage: React.FC = () => {
  const { supportTickets, addSupportTicket, updateTicketStatus } = useEduContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [resolutionText, setResolutionText] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    subject: '',
    category: 'Academic' as TicketCategory,
    priority: 'Medium' as const,
    description: '',
    status: 'Open' as TicketStatus
  });

  const handleOpenAddModal = () => {
    setFormData({
      studentName: '',
      subject: '',
      category: 'Academic',
      priority: 'Medium',
      description: '',
      status: 'Open'
    });
    setIsAddModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.subject) return;

    addSupportTicket(formData);
    setIsAddModalOpen(false);
  };

  const handleResolveTicket = (status: TicketStatus) => {
    if (!selectedTicket) return;
    updateTicketStatus(selectedTicket.id, status, resolutionText);
    setIsDetailModalOpen(false);
  };

  const filteredTickets = supportTickets.filter(t =>
    t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.ticketId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadgeVariant = (status: TicketStatus) => {
    switch (status) {
      case 'Open': return 'warning';
      case 'In Progress': return 'primary';
      case 'Resolved': return 'success';
      case 'Closed': return 'default';
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
            placeholder="Search support tickets..."
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
          <Plus className="w-4 h-4" /> Create Ticket
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Ticket ID</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Subject</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Priority</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
              {filteredTickets.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">No support tickets found</p>
                  </td>
                </tr>
              ) : (
                filteredTickets.map(ticket => {
                  const menuItems: ActionMenuItem[] = [
                    {
                      label: 'View Ticket',
                      icon: Eye,
                      onClick: () => {
                        setSelectedTicket(ticket);
                        setResolutionText(ticket.resolution || '');
                        setIsDetailModalOpen(true);
                      }
                    }
                  ];

                  return (
                    <tr key={ticket.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-700/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        {ticket.ticketId}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        {ticket.studentName}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 dark:text-slate-200 max-w-xs truncate">
                        {ticket.subject}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                        {ticket.category}
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={ticket.priority === 'High' ? 'danger' : 'default'} size="sm">
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={getStatusBadgeVariant(ticket.status)}>
                          {ticket.status}
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

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <Modal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          title={`Ticket ${selectedTicket.ticketId}`}
          subtitle={`Submitted by ${selectedTicket.studentName} on ${selectedTicket.date}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Subject</span>
              <p className="text-slate-700 dark:text-slate-300 font-semibold">{selectedTicket.subject}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Issue Description</span>
              <p className="text-slate-600 dark:text-slate-300">{selectedTicket.description}</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Resolution / Response Note</label>
              <textarea
                rows={3}
                value={resolutionText}
                onChange={(e) => setResolutionText(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
                placeholder="Enter resolution notes here..."
              />
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
              <button
                type="button"
                onClick={() => handleResolveTicket('In Progress')}
                className="px-3 py-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl hover:bg-indigo-100"
              >
                Mark In Progress
              </button>
              <button
                type="button"
                onClick={() => handleResolveTicket('Resolved')}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl"
              >
                Mark Resolved
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Ticket Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Create Support Ticket"
        subtitle="Log student inquiry or technical issue"
        maxWidth="md"
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Student Name *</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as TicketCategory })}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="Academic">Academic</option>
                <option value="Fee">Fee</option>
                <option value="Hostel/Transport">Hostel/Transport</option>
                <option value="General">General</option>
                <option value="Document">Document</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject / Summary *</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Brief topic summary"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden"
              placeholder="Details of student issue..."
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
              Create Ticket
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
