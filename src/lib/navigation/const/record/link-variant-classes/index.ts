import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const LINK_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-primary)] hover:text-[var(--color-primary-600)]',
	primary: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	secondary: 'text-[var(--color-secondary-600)] hover:text-[var(--color-secondary-700)]',
	success: 'text-[var(--color-success-600)] hover:text-[var(--color-success-700)]',
	warning: 'text-[var(--color-warning-600)] hover:text-[var(--color-warning-700)]',
	danger: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	error: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	info: 'text-[var(--color-info-600)] hover:text-[var(--color-info-700)]',
	solid: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	outline: 'text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]',
	ghost: 'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
	link: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline underline-offset-2',
	subtle: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	gray: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	dark: 'text-[var(--color-neutral-800)] hover:text-[var(--color-neutral-900)]',
	light: 'text-[var(--color-neutral-300)] hover:text-[var(--color-neutral-400)]',
	elevated: 'text-[var(--color-text-primary)] shadow-sm hover:shadow-md',
	flat: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
};
