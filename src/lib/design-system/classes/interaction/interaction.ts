import { BASE_CLASSES } from '../information/classes';
import type { DefaultVariants } from '../../tokens/architecture/variants';

export const INTERACTIVE_BASE_CLASS = BASE_CLASSES.interactive;

const PRIMARY_SOLID_CLASSES =
	'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
	'border border-transparent hover:bg-[var(--color-primary-700)]';

export const VARIANT_CLASSES: Record<DefaultVariants, string> = {
	default:
		'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] hover:bg-[var(--color-bg-secondary)]',
	primary: PRIMARY_SOLID_CLASSES,
	secondary:
		'bg-[var(--color-secondary-600)] text-[var(--color-text-inverse)] ' +
		'border border-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-500)]',
	success:
		'bg-[var(--color-success-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-success-700)]',
	warning:
		'bg-[var(--color-warning-500)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-warning-600)]',
	danger:
		'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-danger-700)]',
	info:
		'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-primary-600)]',
	solid: PRIMARY_SOLID_CLASSES,
	outline:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-400)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-neutral-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-bg-secondary)]',
	link:
		'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2 ' +
		'border border-transparent hover:text-[var(--color-primary-700)]',
	subtle:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-neutral-200)]',
	neutral:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-200)]',
	dark:
		'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)] ' +
		'border border-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-700)]',
	light:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-200)]'
};

// Define the actual interactive variants for the tokens
export const INTERACTIVE_VARIANTS = Object.keys(VARIANT_CLASSES) as (keyof typeof VARIANT_CLASSES)[];
