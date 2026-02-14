import { STATE_CLASSES } from './classes';
import type { CommonSize } from '../tokens/variants';

export const TAB_BASE_CLASSES =
	'inline-flex items-center justify-center rounded-md transition-colors';
export const TAB_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'px-2 py-1 text-sm',
	md: 'px-3 py-1.5 text-base',
	lg: 'px-4 py-2 text-lg'
};

export const TAB_VARIANT_CLASSES: Record<string, string> = {
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)] underline underline-offset-4',
	info: 'text-[var(--color-info-600)]',
	solid: 'bg-[var(--color-primary-600)] text-white',
	outline: 'border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)]',
	subtle: 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
};

export const TAB_ACTIVE_CLASSES = 'bg-[var(--color-background-secondary)] font-semibold';
export const TAB_INACTIVE_CLASSES =
	'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]';

export const DISABLED_CLASSES = STATE_CLASSES.disabled;

export const TAB_LIST_BASE_CLASSES = 'flex items-center gap-2';
export const TAB_LIST_LAYOUT_CLASSES = 'flex flex-col';

export const TAB_INDICATOR_BASE_CLASSES =
	'absolute bottom-0 h-0.5 rounded-full transition-all duration-200';

export const TAB_PANEL_VISIBLE_CLASS = 'block';
export const TAB_PANEL_HIDDEN_CLASS = STATE_CLASSES.hidden;

