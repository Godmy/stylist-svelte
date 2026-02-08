import type { CommonSize, ColorVariant, SemanticVariant } from './variants';

export type BadgeVariant = 'default' | ColorVariant | SemanticVariant | 'error';
export type CodeBlockVariant = 'default' | 'terminal' | 'diff';
export type CodeBlockSize = 'sm' | 'md' | 'lg';
export type LabelSize = 'sm' | 'md' | 'lg';

export const BADGE_DEFAULT_VARIANT: BadgeVariant = 'default';
export const BADGE_DEFAULT_SIZE: CommonSize = 'md';
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
	gray: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]'
};
export const BADGE_SIZE_CLASSES: Record<CommonSize, string> = {
	sm: 'text-xs px-2 py-0.5',
	md: 'text-sm px-2.5 py-0.5',
	lg: 'text-base px-3 py-1'
};
export const BADGE_GROUP_CONTAINER_CLASSES = 'flex flex-wrap items-center gap-2';
export const BADGE_GROUP_OVERFLOW_CLASSES =
	'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5';

export const DEFAULT_LANGUAGE = 'text';
export const DEFAULT_CODE_BLOCK_VARIANT: CodeBlockVariant = 'default';
export const DEFAULT_CODE_BLOCK_SIZE: CodeBlockSize = 'md';
export const DEFAULT_SHOW_LINE_NUMBERS = false;
export const DEFAULT_START_LINE_NUMBER = 1;
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

export const DEFAULT_LABEL_SIZE: LabelSize = 'md';
export const DEFAULT_LABEL_REQUIRED = false;
export const DEFAULT_LABEL_DISABLED = false;
export const BASE_LABEL_CLASSES = 'font-medium';
export const REQUIRED_INDICATOR_CLASSES = 'text-red-500';
export const LABEL_SIZE_CLASSES: Record<LabelSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
};
export const LABEL_DISABLED_CLASSES = 'text-gray-400 cursor-not-allowed';
export const LABEL_ENABLED_CLASSES = 'text-gray-700';
