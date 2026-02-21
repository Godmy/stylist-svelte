import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from '../interaction/interaction';

export const ALERT_CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`;

export const ALERT_CARD_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  info: 'border-l-4 border-blue-500',
  success: 'border-l-4 border-green-500',
  warning: 'border-l-4 border-yellow-500',
  error: 'border-l-4 border-red-500'
} as const;

export const ALERT_CARD_SIZE_CLASSES = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
} as const;

export const ALERT_CARD_ICON_CONTAINER_CLASSES = 'flex items-center mb-[--spacing-md]';

export const ALERT_CARD_ICON_CLASSES = 'w-10 h-10 mr-[--spacing-sm]';

export const ALERT_CARD_TEXT_CONTAINER_CLASSES = '';

export const ALERT_CARD_TITLE_CLASSES = 'text-lg font-semibold';

export const ALERT_CARD_SUBTITLE_CLASSES = 'text-[--color-text-secondary]';

export const ALERT_CARD_ACTIONS_CONTAINER_CLASSES = 'mt-[--spacing-md]';

export const ALERT_CARD_ACTION_BUTTON_CLASSES = 'mr-[--spacing-sm] mb-[--spacing-sm] px-4 py-2 bg-[--color-primary-500] text-[--color-text-inverse] rounded hover:bg-[--color-primary-600]';