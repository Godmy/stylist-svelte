import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';

export const INPUT_VARIANT_CLASSES: Record<TokenAppearance | 'filled', string> = {
	default:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	filled:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	outline:
		'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] border border-transparent hover:bg-[var(--color-secondary-50)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	info:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	success:
		'bg-[var(--color-success-50)] text-[var(--color-text-primary)] border border-[var(--color-success-200)] focus:ring-2 focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]',
	warning:
		'bg-[var(--color-warning-50)] text-[var(--color-text-primary)] border border-[var(--color-warning-200)] focus:ring-2 focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]',
	danger:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	error:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	primary:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	solid:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	secondary:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] border border-[var(--color-secondary-200)] focus:ring-2 focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]',
	link:
		'bg-transparent text-[var(--color-primary-600)] border border-transparent underline underline-offset-2 focus:ring-2 focus:ring-[var(--color-primary-500)]',
	subtle:
		'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)] border border-[var(--color-neutral-100)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	neutral:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] border border-[var(--color-neutral-300)] focus:ring-2 focus:ring-[var(--color-neutral-400)]',
	gray:
		'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] border border-[var(--color-neutral-300)] focus:ring-2 focus:ring-[var(--color-neutral-400)]',
	dark:
		'bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)] border border-[var(--color-neutral-800)] focus:ring-2 focus:ring-[var(--color-neutral-700)]',
	light:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	elevated:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] shadow-sm focus:ring-2 focus:ring-[var(--color-primary-500)]',
	flat:
		'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)]'
};
