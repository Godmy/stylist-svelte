/**
 * Status Dashboard CSS classes
 */

export const STATUS_DASHBOARD_CONTAINER_BASE_CLASSES = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-default]';

export const STATUS_DASHBOARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const STATUS_DASHBOARD_HEADER_CLASSES = 'flex justify-between items-center p-4 border-b border-[--color-border-default]';
export const STATUS_DASHBOARD_TITLE_CLASSES = 'text-lg font-semibold text-[--color-text-primary]';
export const STATUS_DASHBOARD_SUBTITLE_CLASSES = 'text-sm text-[--color-text-secondary] mt-1';

export const STATUS_DASHBOARD_ITEMS_GRID_HORIZONTAL_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4';
export const STATUS_DASHBOARD_ITEMS_GRID_VERTICAL_CLASSES = 'flex flex-col gap-4 p-4';

export const STATUS_DASHBOARD_ITEM_CARD_BASE_CLASSES = 'border border-[--color-border-default] rounded-lg p-4 bg-[--color-background-primary] transition-shadow hover:shadow-md';

export const STATUS_DASHBOARD_ITEM_CONTENT_CLASSES = 'flex items-center gap-3';
export const STATUS_DASHBOARD_ITEM_HEADER_CLASSES = 'flex items-center gap-3 mb-2';
export const STATUS_DASHBOARD_ITEM_TITLE_CLASSES = {
	sm: 'text-sm font-medium',
	md: 'text-base font-medium',
	lg: 'text-lg font-semibold'
} as const;

export const STATUS_DASHBOARD_ITEM_VALUE_CLASSES = 'text-2xl font-bold text-[--color-text-primary]';
export const STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES = {
	sm: 'text-xs text-[--color-text-secondary]',
	md: 'text-sm text-[--color-text-secondary]',
	lg: 'text-base text-[--color-text-secondary]'
} as const;

export const STATUS_DASHBOARD_ITEM_FOOTER_CLASSES = 'flex justify-between items-center mt-3 pt-3 border-t border-[--color-border-default]';
export const STATUS_DASHBOARD_ITEM_ACTIONS_CLASSES = 'flex gap-2';

export const STATUS_DASHBOARD_STATUS_ICON_WRAPPER_CLASSES = 'flex items-center justify-center w-10 h-10 rounded-full';
export const STATUS_DASHBOARD_STATUS_ICON_CLASSES = 'w-6 h-6';

export const STATUS_DASHBOARD_STATUS_ICON_COLOR_CLASSES = {
	success: 'bg-[--color-success-100] text-[--color-success-600]',
	warning: 'bg-[--color-warning-100] text-[--color-warning-600]',
	error: 'bg-[--color-danger-100] text-[--color-danger-600]',
	info: 'bg-[--color-info-100] text-[--color-info-600]',
	default: 'bg-[--color-neutral-100] text-[--color-neutral-600]'
} as const;

export const DEFAULT_STATUS_DASHBOARD_SIZE: keyof typeof STATUS_DASHBOARD_SIZE_CLASSES = 'md';
export const DEFAULT_STATUS_DASHBOARD_LAYOUT: 'horizontal' | 'vertical' = 'horizontal';
