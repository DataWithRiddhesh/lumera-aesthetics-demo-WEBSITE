import type { interestOptions, timelineOptions } from '@/data/services';

export type LeadStatus = 'HOT' | 'WARM' | 'COLD';

export interface LeadQualification {
  status: LeadStatus;
  score: number;
}

/**
 * Simple rule-based lead qualification.
 * This is intentionally transparent and replaceable — a later AI API can
 * swap in for richer scoring without changing the interface.
 *
 * Rules:
 *  - ASAP + a specific treatment  -> HOT (90)
 *  - ASAP + "Not Sure Yet"         -> WARM (70)
 *  - This Week                    -> WARM (65)
 *  - Next Week                    -> WARM (50)
 *  - Just Exploring               -> COLD (30)
 */
export function qualifyLead(
  interest: (typeof interestOptions)[number],
  timeline: (typeof timelineOptions)[number],
): LeadQualification {
  const isSpecific = interest !== 'Not Sure Yet';

  if (timeline === 'ASAP') {
    return isSpecific
      ? { status: 'HOT', score: 90 }
      : { status: 'WARM', score: 70 };
  }
  if (timeline === 'This Week') {
    return { status: 'WARM', score: 65 };
  }
  if (timeline === 'Next Week') {
    return { status: 'WARM', score: 50 };
  }
  return { status: 'COLD', score: 30 };
}
