import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const SPINNER_COLOR_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-secondary)]',
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	error: 'text-[var(--color-danger-600)]',
	info: 'text-[var(--color-info-600)]',
	solid: 'text-[var(--color-primary-600)]',
	outline: 'text-[var(--color-text-primary)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)]',
	subtle: 'text-[var(--color-neutral-400)]',
	neutral: 'text-[var(--color-neutral-500)]',
	gray: 'text-[var(--color-neutral-500)]',
	dark: 'text-[var(--color-neutral-800)]',
	light: 'text-[var(--color-neutral-200)]',
	elevated: 'text-[var(--color-primary-600)]',
	flat: 'text-[var(--color-text-primary)]'
};
