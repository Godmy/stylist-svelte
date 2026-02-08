import { ACCESSIBILITY_CLASSES, BASE_CLASSES, DEFAULT_FLAGS, STATE_CLASSES } from './classes';
import { COMPACT_SIZE_SCALE } from './sizes';
import { INPUT_VARIANTS } from './variants';

export type InputAddonPosition = 'left' | 'right';

export const INPUT_BASE_CLASS = BASE_CLASSES.input;

export const INPUT_VARIANT_CLASSES = {
	default:
		'bg-[var(--color-bg-primary,#ffffff)] text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-border-primary,#d1d5db)] focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]',
	filled:
		'bg-[var(--color-secondary-50,#f8fafc)] text-[var(--color-text-primary,#111827)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]',
	outlined:
		'bg-transparent text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-border-primary,#d1d5db)] focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]',
	ghost:
		'bg-transparent text-[var(--color-text-primary,#111827)] ' +
		'border border-transparent hover:bg-[var(--color-secondary-50,#f8fafc)] focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)]',
	info:
		'bg-[var(--color-primary-50,#eff6ff)] text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-primary-200,#bfdbfe)] focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]',
	success:
		'bg-[var(--color-success-50,#f0fdf4)] text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-success-200,#bbf7d0)] focus:ring-2 focus:ring-[var(--color-success-500,#22c55e)] focus:border-[var(--color-success-500,#22c55e)]',
	warning:
		'bg-[var(--color-warning-50,#fffbeb)] text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-warning-200,#fde68a)] focus:ring-2 focus:ring-[var(--color-warning-500,#f59e0b)] focus:border-[var(--color-warning-500,#f59e0b)]',
	danger:
		'bg-[var(--color-danger-50,#fef2f2)] text-[var(--color-text-primary,#111827)] ' +
		'border border-[var(--color-danger-200,#fecaca)] focus:ring-2 focus:ring-[var(--color-danger-500,#ef4444)] focus:border-[var(--color-danger-500,#ef4444)]',
	solid:
		'bg-[var(--color-primary-600,#2563eb)] text-[var(--color-text-inverse,#ffffff)] ' +
		'border border-transparent focus:ring-2 focus:ring-[var(--color-primary-500,#3b82f6)] focus:border-[var(--color-primary-500,#3b82f6)]'
} as const;

export const INPUT_ERROR_CLASS =
	'border-[var(--color-danger-500,#ef4444)] focus:ring-[var(--color-danger-500,#ef4444)] focus:border-[var(--color-danger-500,#ef4444)]';

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
