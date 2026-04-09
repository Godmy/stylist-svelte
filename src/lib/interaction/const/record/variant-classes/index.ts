import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

const PRIMARY_SOLID_CLASSES =
	'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
	'border border-transparent hover:bg-[var(--color-primary-700)]';

export const VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]',
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
	error:
		'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-danger-700)]',
	info:
		'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] ' +
		'border border-transparent hover:bg-[var(--color-primary-600)]',
	solid: PRIMARY_SOLID_CLASSES,
	outline:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-400)] hover:bg-[var(--color-background-secondary)] hover:border-[var(--color-neutral-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-background-secondary)]',
	link:
		'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2 ' +
		'border border-transparent hover:text-[var(--color-primary-700)]',
	subtle:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-neutral-200)]',
	neutral:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-200)]',
	gray:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-200)]',
	dark:
		'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)] ' +
		'border border-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-700)]',
	light:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-200)]',
	elevated:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-secondary)] shadow-sm hover:shadow-md',
	flat:
		'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-background-primary)]'
};
