import { Flame, TrendingUp, Snowflake, CalendarCheck, BellRing, Users, ArrowLeft, BarChart3 } from 'lucide-react';
import { demoLeads, dashboardStats } from '@/data/leads';
import type { LeadStatus } from '@/lib/qualify';

interface DashboardProps {
  onBackHome: () => void;
}

const statCards = [
  { key: 'totalLeads', label: 'Total Leads', icon: Users, color: 'charcoal', value: dashboardStats.totalLeads },
  { key: 'hotLeads', label: 'Hot Leads', icon: Flame, color: 'red', value: dashboardStats.hotLeads },
  { key: 'warmLeads', label: 'Warm Leads', icon: TrendingUp, color: 'amber', value: dashboardStats.warmLeads },
  { key: 'coldLeads', label: 'Cold Leads', icon: Snowflake, color: 'blue', value: dashboardStats.coldLeads },
  { key: 'booked', label: 'Booked Consultations', icon: CalendarCheck, color: 'green', value: dashboardStats.bookedConsultations },
  { key: 'followUps', label: 'Follow-ups Due', icon: BellRing, color: 'champagne', value: dashboardStats.followUpsDue },
];

const colorMap: Record<string, string> = {
  charcoal: 'bg-charcoal-800 text-ivory-50',
  red: 'bg-red-500 text-white',
  amber: 'bg-amber-500 text-white',
  blue: 'bg-sky-500 text-white',
  green: 'bg-emerald-500 text-white',
  champagne: 'bg-champagne-500 text-white',
};

function StatusBadge({ status }: { status: LeadStatus }) {
  const styles: Record<LeadStatus, string> = {
    HOT: 'bg-red-50 text-red-600 ring-1 ring-red-200',
    WARM: 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
    COLD: 'bg-slate-100 text-slate-500 ring-1 ring-slate-200',
  };
  const icons: Record<LeadStatus, typeof Flame> = {
    HOT: Flame,
    WARM: TrendingUp,
    COLD: Snowflake,
  };
  const Icon = icons[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}>
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 80 ? 'bg-red-400' : score >= 50 ? 'bg-amber-400' : 'bg-slate-300';
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-charcoal-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-medium text-charcoal-600">{score}</span>
    </div>
  );
}

export default function Dashboard({ onBackHome }: DashboardProps) {
  return (
    <div className="min-h-screen bg-ivory-100 pt-20">
      {/* Header */}
      <div className="border-b border-charcoal-100 bg-white">
        <div className="container-lux flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal-800 text-champagne-400">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium text-charcoal-800">Lead Intelligence</h1>
              <p className="text-xs text-charcoal-400">Demo dashboard &bull; Sales Speed-Up Agent</p>
            </div>
          </div>
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 rounded-full border border-charcoal-200 px-5 py-2.5 text-sm font-medium text-charcoal-600 transition-colors hover:bg-charcoal-800 hover:text-ivory-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Site
          </button>
        </div>
      </div>

      <div className="container-lux py-10">
        {/* Stats grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {statCards.map((stat) => (
            <div
              key={stat.key}
              className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-charcoal-100 transition-all duration-300 hover:shadow-card"
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${colorMap[stat.color]}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="font-serif text-3xl font-medium text-charcoal-800">{stat.value}</p>
              <p className="text-xs text-charcoal-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lead table */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-charcoal-100">
          <div className="flex items-center justify-between border-b border-charcoal-100 px-6 py-5">
            <h2 className="font-serif text-xl font-medium text-charcoal-800">Recent Leads</h2>
            <span className="rounded-full bg-champagne-50 px-3 py-1 text-xs font-medium text-champagne-600">
              {demoLeads.length} records
            </span>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal-100 bg-ivory-50/50 text-left text-xs uppercase tracking-wider text-charcoal-400">
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Lead Status</th>
                  <th className="px-6 py-4 font-medium">Score</th>
                  <th className="px-6 py-4 font-medium">Source</th>
                  <th className="px-6 py-4 font-medium">Follow-up</th>
                </tr>
              </thead>
              <tbody>
                {demoLeads.map((lead, i) => (
                  <tr
                    key={i}
                    className="border-b border-charcoal-50 transition-colors last:border-0 hover:bg-ivory-50/60"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne-100 font-serif text-sm font-medium text-champagne-700">
                          {lead.name[0]}
                        </div>
                        <span className="text-sm font-medium text-charcoal-800">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-charcoal-600">{lead.service}</td>
                    <td className="px-6 py-4"><StatusBadge status={lead.status} /></td>
                    <td className="px-6 py-4"><ScoreBar score={lead.score} /></td>
                    <td className="px-6 py-4 text-sm text-charcoal-500">{lead.source}</td>
                    <td className="px-6 py-4 text-sm text-charcoal-500">{lead.followUp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-charcoal-50 md:hidden">
            {demoLeads.map((lead, i) => (
              <div key={i} className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne-100 font-serif text-sm font-medium text-champagne-700">
                      {lead.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal-800">{lead.name}</p>
                      <p className="text-xs text-charcoal-400">{lead.service}</p>
                    </div>
                  </div>
                  <StatusBadge status={lead.status} />
                </div>
                <div className="mt-3 flex items-center justify-between pl-12">
                  <ScoreBar score={lead.score} />
                  <span className="text-xs text-charcoal-400">{lead.source} &bull; {lead.followUp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification rules note */}
        <div className="mt-6 rounded-2xl border border-champagne-200 bg-champagne-50/60 p-5">
          <p className="text-sm text-charcoal-600">
            <span className="font-semibold text-charcoal-800">Qualification rules:</span>{' '}
            ASAP + specific treatment &rarr; HOT (90) &bull; This Week &rarr; WARM (65) &bull;
            Just Exploring &rarr; COLD (30). These simple rules will later be
            replaced by an AI API for richer scoring.
          </p>
        </div>
      </div>
    </div>
  );
}
