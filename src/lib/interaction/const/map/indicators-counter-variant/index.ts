export const INDICATORS_COUNTER_VARIANT = {
	default: 'bg-[--color-neutral-100] text-[--color-text-primary]',
	primary: 'bg-[--color-primary-500] text-[--color-text-inverse]',
	secondary: 'bg-[--color-secondary-500] text-[--color-text-inverse]',
	danger: 'bg-[--color-danger-500] text-[var(--color-text-inverse)]',
	success: 'bg-[--color-success-500] text-[var(--color-text-inverse)]',
	warning: 'bg-[--color-warning-500] text-[--color-text-primary]',
	info: 'bg-[--color-info-500] text-[var(--color-text-inverse)]',
	gray: 'bg-[--color-neutral-500] text-[var(--color-text-inverse)]',
	solid: 'bg-[--color-neutral-500] text-[var(--color-text-inverse)]',
	outline: 'bg-transparent text-[--color-text-primary] border border-[--color-border-secondary]',
	ghost: 'bg-transparent text-[--color-text-primary]',
	link: 'bg-transparent text-[--color-info-600] underline',
	subtle: 'bg-[--color-neutral-100] text-[--color-text-primary]',
	neutral: 'bg-[--color-neutral-200] text-[--color-text-primary]',
	dark: 'bg-[--color-neutral-800] text-[var(--color-text-inverse)]',
	light: 'bg-[--color-neutral-100] text-[--color-text-primary]'
} as const;

