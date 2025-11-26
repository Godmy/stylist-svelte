import type { IndicatorStatus } from './types';

// Default values
export const DEFAULT_STATUS_INDICATOR_STATUS: IndicatorStatus = 'online';

// Base classes for the container
export const BASE_CONTAINER_CLASSES = 'flex items-center';

// Base classes for the status dot
export const DOT_BASE_CLASSES = 'w-3 h-3 rounded-full mr-2';

// Status classes mapping
export const STATUS_CLASSES_MAP: Record<IndicatorStatus, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500'
};

// Status text mapping
export const STATUS_TEXT_MAP: Record<IndicatorStatus, string> = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
  busy: 'Busy'
};
