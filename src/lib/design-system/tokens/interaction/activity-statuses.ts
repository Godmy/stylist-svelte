/** Activity status indicators for system and user activity. */
export const ACTIVITY_STATUSES = ['active', 'inactive', 'pending', 'paused', 'complete'] as const;
export type ActivityStatus = (typeof ACTIVITY_STATUSES)[number];
