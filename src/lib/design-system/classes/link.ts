import type { CompactSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';

export const ABBR_CLASSES = 'underline decoration-dotted cursor-help';
export const DEFINITION_DESCRIPTION_CLASSES = 'text-sm text-[var(--color-text-secondary)]';
export const DEFINITION_TERM_CLASSES = 'font-medium text-[var(--color-text-primary)]';
export const EM_CLASSES = 'italic';
export const HIGHLIGHT_CLASSES = 'bg-yellow-200 text-[var(--color-text-primary)]';

export const INLINE_CODE_BASE_CLASSES = 'font-mono px-1.5 py-0.5 rounded';
export const INLINE_CODE_CLASSES: Record<'default' | 'subtle', string> = {
	default: 'bg-slate-100 text-slate-800',
	subtle: 'bg-slate-50 text-slate-700'
};
export const DEFAULT_INLINE_CODE_VARIANT: keyof typeof INLINE_CODE_CLASSES = 'default';

export const KBD_CLASSES =
	'inline-flex items-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-xs font-medium text-slate-800';

export const LINK_VARIANT_CLASSES: Record<DefaultVariants | 'gray' | 'muted', string> = {
	default: 'text-[var(--color-text-primary)]',
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	info: 'text-[var(--color-info-600)]',
	solid: 'text-[var(--color-primary-500)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)]',
	gray: 'text-[var(--color-neutral-600)]',
	muted: 'text-[var(--color-text-tertiary)]',
	dark: 'text-[var(--color-text-inverse)]',
	light: 'text-[var(--color-text-primary)]'
};
export const LINK_SIZE_CLASSES: Record<CompactSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
};
export const LINK_DISABLED_CLASSES = 'opacity-50 pointer-events-none';
export const LINK_HOVER_CLASSES = 'hover:opacity-80';
export const LINK_UNDERLINE_CLASSES = 'underline underline-offset-2';
export const DEFAULT_LINK_DISABLED = false;
export const DEFAULT_LINK_SIZE: keyof typeof LINK_SIZE_CLASSES = 'md';
export const DEFAULT_LINK_UNDERLINE = true;
export const DEFAULT_LINK_VARIANT: keyof typeof LINK_VARIANT_CLASSES = 'default';

export const DEFAULT_ABBR_TITLE = 'Abbreviation';