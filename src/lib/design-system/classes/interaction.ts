import { ACCESSIBILITY_CLASSES, BASE_CLASSES, STATE_CLASSES } from './classes';
import { DEFAULT_FLAGS } from '../tokens/flags';
import { COMPONENT_SIZE_SCALE, COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { ICON_SIZES, SIZE_CLASSES } from './sizes';
import type { DefaultVariants } from '../tokens/variants';

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

export const INTERACTION_TOKENS = {
	INTERACTIVE_VARIANTS,
	COMPONENT_SIZE_SCALE,
	COMPACT_SIZE_SCALE,
	DEFAULT_FLAGS,
	STATE_CLASSES,
	INTERACTIVE_BASE_CLASS,
	ACCESSIBILITY_CLASSES,
	VARIANT_CLASSES,
	SIZE_CLASSES,
	ICON_SIZES
} as const;

export interface Preset<V extends string, S extends string> {
	variants: readonly V[];
	sizes: readonly S[];
	defaults: {
		variant: V;
		size: S;
		disabled: boolean;
		block?: boolean;
	};
	classes: {
		base: string;
		size: Record<S, string>;
		variant: Record<V, string>;
		state: Record<string, string>;
		focusVisible?: string;
	};
	loaderSize?: Record<S, string>;
}

export const createBasePreset = <V extends string, S extends string>(
	variants: readonly V[],
	sizes: readonly S[],
	defaults: { variant: V; size: S }
): Preset<V, S> => ({
	variants,
	sizes,
	defaults: { ...defaults, disabled: false, block: false },
	classes: {
		base: 'inline-flex items-center justify-center rounded-md transition-colors',
		focusVisible: 'focus-visible:outline-none focus-visible:ring-2',
		size: Object.fromEntries(
			sizes.map((s) => [
				s,
				SIZE_CLASSES[s as keyof typeof SIZE_CLASSES] ??
					(s === 'sm' ? 'h-8 px-3 text-xs' : s === 'lg' ? 'h-11 px-6 text-base' : 'h-9 px-4 text-sm')
			])
		) as Record<S, string>,
		variant: Object.fromEntries(
			variants.map((v) => [
				v,
				VARIANT_CLASSES[v as keyof typeof VARIANT_CLASSES] ??
					(v === 'outline' ? 'border bg-transparent' : PRIMARY_SOLID_CLASSES)
			])
		) as Record<V, string>,
		state: { disabled: 'opacity-50 cursor-not-allowed', block: 'w-full' }
	},
	loaderSize: Object.fromEntries(
		sizes.map((s) => [s, s === 'sm' ? 'w-3 h-3' : s === 'lg' ? 'w-5 h-5' : 'w-4 h-4'])
	) as Record<S, string>
});
