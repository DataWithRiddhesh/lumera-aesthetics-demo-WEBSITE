import type { LeadStatus } from '@/lib/qualify';

export interface DemoLead {
  name: string;
  service: string;
  status: LeadStatus;
  score: number;
  source: string;
  followUp: string;
}

export const demoLeads: DemoLead[] = [
  { name: 'Sarah', service: 'Botox', status: 'HOT', score: 90, source: 'Website', followUp: 'Tomorrow' },
  { name: 'John', service: 'Facial', status: 'WARM', score: 65, source: 'Instagram', followUp: '2 Days' },
  { name: 'Mike', service: 'Skin Treatment', status: 'COLD', score: 30, source: 'Google', followUp: '—' },
  { name: 'Aisha', service: 'Dermal Fillers', status: 'HOT', score: 85, source: 'Website', followUp: 'Today' },
  { name: 'David', service: 'Body Contouring', status: 'WARM', score: 55, source: 'Referral', followUp: '3 Days' },
  { name: 'Elena', service: 'Laser Hair Removal', status: 'COLD', score: 35, source: 'TikTok', followUp: '—' },
  { name: 'James', service: 'Skin Rejuvenation', status: 'WARM', score: 60, source: 'Website', followUp: '2 Days' },
  { name: 'Nina', service: 'Botox', status: 'HOT', score: 88, source: 'Instagram', followUp: 'Tomorrow' },
];

export const dashboardStats = {
  totalLeads: 128,
  hotLeads: 34,
  warmLeads: 52,
  coldLeads: 42,
  bookedConsultations: 27,
  followUpsDue: 19,
};
