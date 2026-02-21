import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from '../interaction/interaction';

export const PRICE_ALERT_BASE_CLASSES = `${BASE_CLASSES.card} p-4`;

export const PRICE_ALERT_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  monitoring: 'border-blue-200 bg-blue-50',
  reached: 'border-green-200 bg-green-50',
  exceeded: 'border-red-200 bg-red-50'
} as const;

export const PRICE_ALERT_SIZE_CLASSES = {
  sm: 'p-2 text-sm',
  md: 'p-4 text-base',
  lg: 'p-6 text-lg'
} as const;

export const PRICE_ALERT_TITLE_CLASSES = 'font-semibold mb-2';

export const PRICE_ALERT_CONTENT_CLASSES = 'flex justify-between items-center';

export const PRICE_ALERT_PRICE_INFO_CLASSES = 'space-y-1';

export const PRICE_ALERT_CURRENT_PRICE_CLASSES = 'text-sm text-gray-600';

export const PRICE_ALERT_TARGET_PRICE_CLASSES = 'text-sm font-medium';

export const PRICE_ALERT_STATUS_BADGE_CLASSES = 'px-2 py-1 rounded text-xs font-medium';