import { COMPONENT_SIZE_SCALE, COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { DEFAULT_FLAGS } from '../tokens/flags';
import { ACCESSIBILITY_CLASSES, STATE_CLASSES } from '../classes/classes';
import { ICON_SIZES, SIZE_CLASSES } from '../classes/sizes';
import { INTERACTIVE_BASE_CLASS, INTERACTIVE_VARIANTS, VARIANT_CLASSES } from '../classes/interaction';

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
					(v === 'outline' ? 'border bg-transparent' : 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent hover:bg-[var(--color-primary-700)]')
			])
		) as Record<V, string>,
		state: { disabled: 'opacity-50 cursor-not-allowed', block: 'w-full' }
	},
	loaderSize: Object.fromEntries(
		sizes.map((s) => [s, s === 'sm' ? 'w-3 h-3' : s === 'lg' ? 'w-5 h-5' : 'w-4 h-4'])
	) as Record<S, string>
});

