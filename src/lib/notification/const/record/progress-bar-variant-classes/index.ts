import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const PROGRESS_BAR_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'bg-[var(--color-primary-600)]',
	primary: 'bg-[var(--color-primary-600)]',
	secondary: 'bg-[var(--color-secondary-600)]',
	success: 'bg-[var(--color-success-600)]',
	warning: 'bg-[var(--color-warning-500)]',
	danger: 'bg-[var(--color-danger-600)]',
	error: 'bg-[var(--color-danger-600)]',
	info: 'bg-[var(--color-info-600)]',
	solid: 'bg-[var(--color-primary-600)]',
	outline: 'bg-[var(--color-primary-600)] border border-[var(--color-primary-700)]',
	ghost: 'bg-[var(--color-primary-300)]',
	link: 'bg-[var(--color-primary-600)]',
	subtle: 'bg-[var(--color-neutral-400)]',
	neutral: 'bg-[var(--color-neutral-500)]',
	gray: 'bg-[var(--color-neutral-500)]',
	dark: 'bg-[var(--color-neutral-700)]',
	light: 'bg-[var(--color-neutral-300)]',
	elevated: 'bg-[var(--color-primary-600)] shadow-sm',
	flat: 'bg-[var(--color-primary-600)]'
};
