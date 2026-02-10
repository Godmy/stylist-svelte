import { ACCESSIBILITY_CLASSES, BASE_CLASSES, STATE_CLASSES } from './classes';
import { DEFAULT_FLAGS } from '../tokens/flags';
import { COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { INPUT_VARIANTS } from '../tokens/variants';

export const INPUT_BASE_CLASS = BASE_CLASSES.input;

export const INPUT_VARIANT_CLASSES = {
	default:
		'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	filled:
		'bg-[var(--color-secondary-50)] text-[var(--color-text-primary)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	outlined:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-[var(--color-border-primary)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary)] ' +
		'border border-transparent hover:bg-[var(--color-secondary-50)] focus:ring-2 focus:ring-[var(--color-primary-500)]',
	info:
		'bg-[var(--color-primary-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-primary-200)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]',
	success:
		'bg-[var(--color-success-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-success-200)] focus:ring-2 focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]',
	warning:
		'bg-[var(--color-warning-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-warning-200)] focus:ring-2 focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]',
	danger:
		'bg-[var(--color-danger-50)] text-[var(--color-text-primary)] ' +
		'border border-[var(--color-danger-200)] focus:ring-2 focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]',
	solid:
		'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]'
} as const;

export const INPUT_ERROR_CLASS =
	'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]';

export const INPUT_TOKENS = {
	INPUT_VARIANTS,
	COMPONENT_SIZE_SCALE: COMPACT_SIZE_SCALE,
	DEFAULT_FLAGS,
	STATE_CLASSES,
	INPUT_BASE_CLASS,
	INPUT_VARIANT_CLASSES,
	INPUT_ERROR_CLASS,
	ACCESSIBILITY_CLASSES
} as const;
