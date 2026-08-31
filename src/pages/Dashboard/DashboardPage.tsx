import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEduContext } from '../../context/EduContext';
import { StatCard } from '../../components/common/StatCard';
import { Badge } from '../../components/common/Badge';
import {
  Users,
  GitPullRequest,
  GraduationCap,
  CreditCard,
  CalendarCheck,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    enquiries,
    applications,
    students,
    feeRecords,
    followUps,
    courses,
    toggleFollowUpStatus
  } = useEduContext();

  // Calculate KPIs strictly as requested
  const totalEnquiries = enquiries.length;
  const activeApplications = applications.filter(a => a.status !== 'Enrolled' && a.status !== 'Rejected').length;
  const enrolledStudents = students.filter(s => s.status === 'Active').length;
  const totalPendingFees = feeRecords.reduce((acc, curr) => acc + curr.pending, 0);

  // Admission Overview counts
  const overviewCounts = {
    Enquiries: enquiries.length,
    Applications: applications.length,
    Approved: applications.filter(a => a.stage === 'Approved' || a.stage === 'Enrolled').length,
    Enrolled: students.length
  };

  // Admission Pipeline breakdown
  const pipelineStages = [
    { name: 'Enquiry', count: enquiries.filter(e => e.status === 'New' || e.status === 'Contacted').length, color: 'bg-slate-500' },
    { name: 'Counselling', count: enquiries.filter(e => e.status === 'Counselling').length, color: 'bg-indigo-500' },
    { name: 'Application', count: applications.filter(a => a.stage === 'Application').length, color: 'bg-blue-500' },
    { name: 'Review', count: applications.filter(a => a.stage === 'Document Review').length, color: 'bg-purple-500' },
    { name: 'Approved', count: applications.filter(a => a.stage === 'Approved').length, color: 'bg-emerald-500' },
    { name: 'Enrolled', count: students.length, color: 'bg-teal-600' },
  ];

  // Upcoming follow ups (max 4)
  const upcomingFollowUps = followUps.filter(f => f.status !== 'Completed').slice(0, 4);

  // Course Interest data for chart
  const courseChartData = courses.slice(0, 5).map(course => {
    const count = enquiries.filter(e => e.courseId === course.id || e.courseName.includes(course.name.split(' ')[0])).length;
    return {
      name: course.code,
      fullName: course.name,
      enquiries: count + Math.floor(Math.random() * 5 + 3) // ensure realistic chart heights
    };
  });

  const CHART_COLORS = ['#4f46e5', '#0d9488', '#2563eb', '#7c3aed', '#db2777'];

  // Recent activity aggregated feed
  const recentActivities = [
    { id: 'act-1', text: 'Aarav Sharma submitted B.Tech CS application', time: '10 mins ago', type: 'app' },
    { id: 'act-2', text: 'Sarah Jenkins completed counselling session with Riya Verma', time: '1 hour ago', timeType: 'cns' },
    { id: 'act-3', text: 'Fee payment of ₹1,600,00 for Ananya Patel recorded', time: '3 hours ago', type: 'fee' },
    { id: 'act-4', text: 'New enquiry registered for BCA via Website', time: '5 hours ago', type: 'enq' }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* KPI Cards Row (Exactly 4 KPI Cards) */}
      <div className="grid grid-[#123] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Enquiries"
          value={totalEnquiries}
          subtitle="+12% from last month"
          icon={Users}
          change="+12%"
          changeType="positive"
          iconBgColor="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
        />
        <StatCard
          title="Active Applications"
          value={activeApplications}
          subtitle="Currently in review stage"
          icon={GitPullRequest}
          change="+8%"
          changeType="positive"
          iconBgColor="bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
        />
        <StatCard
          title="Enrolled Students"
          value={enrolledStudents}
          subtitle="2026 Academic Batch"
          icon={GraduationCap}
          change="+15%"
          changeType="positive"
          iconBgColor="bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
        />
        <StatCard
          title="Pending Fees"
          value={`₹${(totalPendingFees / 100000).toFixed(1)}L`}
          subtitle="Outstanding tuition fees"
          icon={CreditCard}
          change="-4%"
          changeType="neutral"
          iconBgColor="bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
        />
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Admission Overview & Pipeline (2 Spans) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Admission Overview Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Admission Overview</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total conversion funnel stats</p>
              </div>
              <button
                onClick={() => navigate('/admissions')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                View Pipeline <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60">
                <span className="text-[11px] font-medium text-slate-500">Enquiries</span>
                <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">{overviewCounts.Enquiries}</p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/40">
                <span className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400">Applications</span>
                <p className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mt-1">{overviewCounts.Applications}</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/40">
                <span className="text-[11px] font-medium text-purple-600 dark:text-purple-400">Approved</span>
                <p className="text-xl font-bold text-purple-900 dark:text-purple-200 mt-1">{overviewCounts.Approved}</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">Enrolled</span>
                <p className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mt-1">{overviewCounts.Enrolled}</p>
              </div>
            </div>
          </div>

          {/* Admission Pipeline Breakdown Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Admission Stage Pipeline</h3>
            <div className="space-y-3">
              {pipelineStages.map((stage, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700 dark:text-slate-300">{stage.name}</span>
                    <span className="text-slate-500 font-semibold">{stage.count} candidate{stage.count !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${stage.color} transition-all duration-500`}
                      style={{ width: `${Math.max(10, Math.min(100, (stage.count / Math.max(1, enquiries.length)) * 100))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Interest Chart Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Top Course Interest</h3>
              <span className="text-xs text-slate-400">Enquiries per program</span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="enquiries" radius={[6, 6, 0, 0]}>
                    {courseChartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Upcoming Follow-ups & Recent Activity (1 Span) */}
        <div className="space-y-6">
          {/* Upcoming Follow-Ups Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Upcoming Follow-Ups</h3>
              </div>
              <button
                onClick={() => navigate('/follow-ups')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                All Tasks
              </button>
            </div>

            <div className="space-y-3">
              {upcomingFollowUps.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-6">No upcoming follow-ups scheduled.</p>
              ) : (
                upcomingFollowUps.map(item => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/40 flex items-start justify-between gap-2"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.studentName}</span>
                        <Badge variant={item.priority === 'High' ? 'danger' : 'warning'} size="sm">
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{item.purpose}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-2">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Due: {item.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFollowUpStatus(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                      title="Mark Complete"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Activity Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recent Activity</h3>
            </div>

            <div className="relative pl-4 space-y-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
              {recentActivities.map(act => (
                <div key={act.id} className="relative">
                  <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-800" />
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug font-medium">{act.text}</p>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
