import type { ColorVariant, CommonSize, DefaultVariants } from '../tokens/variants';
import type {
	CounterVariant,
	IndicatorStatus,
	MessageStatusType,
	StatusIndicatorLabelStatus
} from '../tokens/indicators';

export const BASE_DOT_CLASSES = 'inline-block rounded-full';
export const DOT_COLOR_CLASSES: Record<ColorVariant, string> = {
	primary: 'bg-indigo-600',
	secondary: 'bg-gray-600',
	success: 'bg-green-600',
	warning: 'bg-yellow-600',
	danger: 'bg-red-600',
	info: 'bg-blue-600',
	gray: 'bg-gray-400'
};
export const DOT_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'w-2 h-2',
	md: 'w-3 h-3',
	lg: 'w-4 h-4'
};

export const BASE_COUNTER_CLASSES =
	'inline-flex items-center justify-center rounded-full font-medium';
export const COUNTER_VARIANT_CLASSES: Record<CounterVariant, string> = {
	default: 'bg-gray-100 text-gray-800',
	primary: 'bg-primary-500 text-primary-50',
	secondary: 'bg-secondary-500 text-secondary-50',
	danger: 'bg-red-500 text-white',
	success: 'bg-green-500 text-white',
	warning: 'bg-yellow-500 text-gray-800',
	info: 'bg-blue-500 text-white',
	gray: 'bg-gray-500 text-white',
	solid: 'bg-gray-500 text-white',
	outline: 'bg-transparent text-gray-800 border border-gray-300',
	ghost: 'bg-transparent text-gray-800',
	link: 'bg-transparent text-blue-600 underline',
	subtle: 'bg-gray-100 text-gray-800',
	neutral: 'bg-gray-200 text-gray-800'
};
export const COUNTER_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'px-1 min-w-[1.25rem] h-5 text-xs',
	md: 'px-1.5 min-w-[1.5rem] h-6 text-sm',
	lg: 'px-2 min-w-[1.75rem] h-7 text-base'
};

export const BASE_COUNT_BADGE_CLASSES =
	'inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full';

export const BASE_MARKER_CLASSES = 'inline-flex items-center justify-center flex-shrink-0';
export const MARKER_COLOR_CLASSES: Record<ColorVariant, string> = {
	primary: 'text-[var(--color-primary-500)]',
	secondary: 'text-[var(--color-secondary-500)]',
	success: 'text-[var(--color-success-500)]',
	warning: 'text-[var(--color-warning-500)]',
	danger: 'text-[var(--color-danger-500)]',
	info: 'text-[var(--color-info-500)]',
	gray: 'text-[var(--color-text-tertiary)]'
};
export const MARKER_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'h-4 w-4 text-xs',
	md: 'h-5 w-5 text-sm',
	lg: 'h-6 w-6 text-base'
};
export const BULLET_CLASSES = 'rounded-full bg-current';
export const BULLET_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'h-1.5 w-1.5',
	md: 'h-2 w-2',
	lg: 'h-2.5 w-2.5'
};

export const MESSAGE_STATUS_COLORS: Record<MessageStatusType, string> = {
	sent: 'text-gray-400',
	delivered: 'text-gray-400',
	read: 'text-green-500'
};
export const MESSAGE_STATUS_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5'
};

export const STATUS_INDICATOR_CONTAINER_CLASSES = 'flex items-center';
export const STATUS_INDICATOR_DOT_BASE_CLASSES = 'w-3 h-3 rounded-full mr-2';
export const STATUS_INDICATOR_STATUS_CLASSES: Record<IndicatorStatus, string> = {
	online: 'bg-green-500',
	offline: 'bg-gray-500',
	away: 'bg-yellow-500',
	busy: 'bg-red-500'
};
export const STATUS_INDICATOR_STATUS_TEXT: Record<IndicatorStatus, string> = {
	online: 'Online',
	offline: 'Offline',
	away: 'Away',
	busy: 'Busy'
};

export const STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES = ['flex', 'items-center'] as const;
export const STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES: Record<'sm' | 'md' | 'lg', string> = {
	sm: 'w-2 h-2',
	md: 'w-3 h-3',
	lg: 'w-4 h-4'
};
export const STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES: Record<'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom', string> = {
	success: 'bg-green-500',
	warning: 'bg-yellow-500',
	error: 'bg-red-500',
	info: 'bg-blue-500',
	neutral: 'bg-gray-500',
	custom: 'bg-gray-500' // fallback for custom
};
