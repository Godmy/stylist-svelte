/** Status indicators for online presence and availability. */
export const PRESENCE_STATUSES = ['online', 'offline', 'away', 'busy'] as const;
export type PresenceStatus = (typeof PRESENCE_STATUSES)[number];
