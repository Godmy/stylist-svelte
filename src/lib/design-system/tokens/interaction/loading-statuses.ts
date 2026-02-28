/** Loading status indicators. */
export const LOADING_STATUSES = ['idle', 'loading', 'success', 'error'] as const;
export type LoadingStatus = (typeof LOADING_STATUSES)[number];
