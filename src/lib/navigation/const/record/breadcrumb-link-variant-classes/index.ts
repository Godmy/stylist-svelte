import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const BREADCRUMB_LINK_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	primary: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	secondary: 'text-[var(--color-secondary-600)] hover:text-[var(--color-secondary-700)]',
	success: 'text-[var(--color-success-600)] hover:text-[var(--color-success-700)]',
	warning: 'text-[var(--color-warning-600)] hover:text-[var(--color-warning-700)]',
	danger: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	error: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	info: 'text-[var(--color-info-600)] hover:text-[var(--color-info-700)]',
	solid: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	outline: 'text-[var(--color-text-primary)] hover:underline',
	ghost: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline',
	subtle: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	gray: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	dark: 'text-[var(--color-neutral-800)] hover:text-[var(--color-neutral-900)]',
	light: 'text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-500)]',
	elevated: 'text-[var(--color-text-primary)] hover:underline',
	flat: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
};
