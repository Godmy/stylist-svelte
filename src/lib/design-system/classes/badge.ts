import type { ComponentSize } from '../tokens/sizes';
import type { CodeBlockVariant } from '../tokens/variants';
import type { BadgeVariant, CodeBlockSize } from '../tokens';

export const BASE_BADGE_CLASSES = 'inline-flex items-center font-semibold rounded-full';
export const BADGE_VARIANT_CLASSES: Record<BadgeVariant, string> = {
	default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
	primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)]',
	success: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
	error: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
	info: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	gray: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
	neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]'
};
export const BADGE_SIZE_CLASSES: Record<ComponentSize, string> = {
	sm: 'text-xs px-2 py-0.5',
	md: 'text-sm px-2.5 py-0.5',
	lg: 'text-base px-3 py-1',
	xl: 'text-lg px-3.5 py-1.5'
};

export const BADGE_GROUP_CONTAINER_CLASSES = 'flex flex-wrap items-center gap-2';
export const BADGE_GROUP_OVERFLOW_CLASSES =
	'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5';

export const BASE_CODE_BLOCK_CLASSES = 'rounded-md overflow-x-auto font-mono';
export const CODE_BLOCK_VARIANT_CLASSES: Record<CodeBlockVariant, string> = {
	default: 'bg-gray-900 text-gray-100',
	terminal: 'bg-black text-green-400 font-mono',
	diff: 'bg-gray-50 text-gray-800'
};
export const CODE_BLOCK_SIZE_CLASSES: Record<CodeBlockSize, string> = {
	sm: 'text-xs p-2',
	md: 'text-sm p-4',
	lg: 'text-base p-6'
};



