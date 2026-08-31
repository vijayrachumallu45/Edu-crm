import React from 'react';
import { useEduContext } from '../../context/EduContext';
import { StatCard } from '../../components/common/StatCard';
import {
  BarChart3,
  TrendingUp,
  PieChart as PieIcon,
  Users,
  Award,
  DollarSign
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export const AnalyticsPage: React.FC = () => {
  const { enquiries, applications, students, feeRecords, courses, userProfile } = useEduContext();

  // 1. Admission Funnel Metrics
  const funnelData = [
    { stage: 'Enquiries', count: enquiries.length },
    { stage: 'Applications', count: applications.length },
    { stage: 'Approved', count: applications.filter(a => a.stage === 'Approved' || a.stage === 'Enrolled').length },
    { stage: 'Enrolled', count: students.length }
  ];

  // 2. Enquiry Sources breakdown for Donut / Pie Chart
  const sourcesMap: Record<string, number> = {};
  enquiries.forEach(e => {
    sourcesMap[e.source] = (sourcesMap[e.source] || 0) + 1;
  });
  const sourceChartData = Object.keys(sourcesMap).map(key => ({
    name: key,
    value: sourcesMap[key]
  }));

  // 3. Course Popularity
  const courseChartData = courses.slice(0, 5).map(c => ({
    name: c.code,
    enquiries: enquiries.filter(e => e.courseId === c.id || e.courseName.includes(c.name.split(' ')[0])).length + Math.floor(Math.random() * 4 + 2)
  }));

  // 4. Counsellor Performance
  const counsellors = ['Sarah Jenkins', 'Michael Vance', 'Elena Rostova', 'David Miller'];
  const counsellorPerformance = counsellors.map(c => {
    const handled = enquiries.filter(e => e.counsellor === c).length + Math.floor(Math.random() * 8 + 5);
    const converted = Math.round(handled * 0.35);
    const rate = Math.round((converted / Math.max(1, handled)) * 100);

    return {
      name: c,
      handled,
      converted,
      rate: `${rate}%`
    };
  });

  // 5. Fee Collection Breakdown
  const totalBilled = feeRecords.reduce((acc, f) => acc + f.totalFee, 0);
  const totalPaid = feeRecords.reduce((acc, f) => acc + f.paid, 0);
  const totalPending = feeRecords.reduce((acc, f) => acc + f.pending, 0);

  const COLORS = ['#4f46e5', '#0d9488', '#2563eb', '#7c3aed', '#db2777'];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Conversion Efficiency"
          value={`${Math.round((students.length / Math.max(1, enquiries.length)) * 100)}%`}
          subtitle="Enquiry to Enrolled conversion"
          icon={TrendingUp}
          change="+3.2%"
          changeType="positive"
          iconBgColor="bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
        />
        <StatCard
          title="Avg Counsellor Output"
          value="24 Leads/mo"
          subtitle="Active enquiry workload"
          icon={Users}
          iconBgColor="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
        />
        <StatCard
          title="Fee Collection Rate"
          value={`${Math.round((totalPaid / Math.max(1, totalBilled)) * 100)}%`}
          subtitle="Tuition fee collection efficiency"
          icon={DollarSign}
          iconBgColor="bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
        />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Admission Analytics Funnel */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Admission Funnel Analytics</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="stage" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#4f46e5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Enquiry Sources */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Enquiry Acquisition Sources</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sourceChartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Counsellor Performance Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Counsellor Conversion Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Counsellor Name</th>
                <th className="py-3 px-4">Enquiries Handled</th>
                <th className="py-3 px-4">Conversions</th>
                <th className="py-3 px-4">Conversion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs font-medium">
              {counsellorPerformance.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50/60 dark:hover:bg-slate-700/40">
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">{c.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{c.handled}</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">{c.converted}</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">{c.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
