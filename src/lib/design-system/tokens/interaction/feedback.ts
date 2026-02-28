import { ALL_VARIANTS } from '../information/default-variants';
import { STATE_VARIANTS } from '../information/state-variants';

export const NOTIFICATION_BADGE_POSITIONS = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
export type NotificationBadgePosition = (typeof NOTIFICATION_BADGE_POSITIONS)[number];

export const NOTIFICATION_BADGE_VARIANTS = [
	...ALL_VARIANTS,
	...STATE_VARIANTS,
	'number',
	'dot'
] as const;
export type NotificationBadgeVariant = (typeof NOTIFICATION_BADGE_VARIANTS)[number];

export const STEP_ICON_STATUSES = ['pending', 'active', 'completed', 'error'] as const;
export type StepIconStatus = (typeof STEP_ICON_STATUSES)[number];
