import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type IndicatorStatus = 'online' | 'offline' | 'away' | 'busy';

export interface StatusIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  status?: IndicatorStatus;
  label?: string;
  children?: Snippet;
  class?: string;
}

export const DEFAULT_STATUS_INDICATOR_STATUS: IndicatorStatus = 'online';

const BASE_CONTAINER_CLASSES = 'flex items-center';
const DOT_BASE_CLASSES = 'w-3 h-3 rounded-full mr-2';
const STATUS_CLASSES_MAP: Record<IndicatorStatus, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500'
};
const STATUS_TEXT_MAP: Record<IndicatorStatus, string> = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
  busy: 'Busy'
};

export const getStatusIndicatorContainerClasses = (className = '') => {
  return [BASE_CONTAINER_CLASSES, className].filter(Boolean).join(' ');
};

export const getStatusIndicatorDotClasses = (status: IndicatorStatus) => {
  return [DOT_BASE_CLASSES, STATUS_CLASSES_MAP[status]].filter(Boolean).join(' ');
};

export const getStatusIndicatorLabel = (status: IndicatorStatus, label?: string) => {
  return label || STATUS_TEXT_MAP[status];
};
