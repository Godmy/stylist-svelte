import type { Preset } from '$stylist/interaction/type/struct/preset/preset';
import { VARIANT_CLASSES } from '$stylist/interaction/const/record/variant-classes';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import { RECORD_CLASS_SIZE } from '$stylist/layout/const/record/class-size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

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
				RECORD_CLASS_SIZE[s as keyof typeof RECORD_CLASS_SIZE] ??
					(s === 'sm'
						? 'h-8 px-3 text-xs'
						: s === 'lg'
							? 'h-11 px-6 text-base'
							: 'h-9 px-4 text-sm')
			])
		) as Record<S, string>,
		variant: Object.fromEntries(
			variants.map((v) => [
				v,
				VARIANT_CLASSES[v as TokenAppearance] ??
					(v === 'outline'
						? 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-neutral-400)] hover:bg-[var(--color-background-secondary)]'
						: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent hover:bg-[var(--color-primary-700)]')
			])
		) as Record<V, string>,
		state: { disabled: 'opacity-[var(--opacity-50)] cursor-not-allowed', block: 'w-full' }
	},
	loaderSize: Object.fromEntries(
		sizes.map((s) => [s, s === 'sm' ? 'w-3 h-3' : s === 'lg' ? 'w-5 h-5' : 'w-4 h-4'])
	) as Record<S, string>
});
