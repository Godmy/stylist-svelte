/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/attributes';
import type { Preset } from '$stylist/design-system/presets';
import { buildClasses } from '$stylist/utils/classes';
import { computeAriaLabel } from '$stylist/utils/aria';
import { ICON_SIZES } from '$stylist/design-system';

/**
 * Universal button state creator for all button components
 * Provides reactive state management using Svelte 5 runes
 *
 * @param preset - The button preset configuration
 * @param props - Component props
 * @returns Reactive state object with classes, aria attributes, and computed values
 */
export function createState<V extends string, S extends string>(
	preset: Preset<V, S> & { loaderSize?: Record<string, string> },
	props: Props & HTMLButtonAttributes
) {
	const variant = $derived(((props as any).variant as V) ?? preset.defaults.variant);
	const size = $derived(((props as any).size as S) ?? preset.defaults.size);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);
	const loading = $derived((props as any).loading ?? false);
	const block = $derived((props as any).block ?? preset.defaults.block);

	const classes = $derived(
		buildClasses(preset, {
			variant,
			size,
			disabled,
			loading,
			block,
			className: props.class
		})
	);

	const ariaLabel = $derived(
		computeAriaLabel((props as any).ariaLabel, props as Record<string, unknown>, '')
	);

	const loaderClasses = $derived.by(() => {
		const sizeKey = size as keyof typeof ICON_SIZES;
		const loaderSize = preset.loaderSize?.[size as string] ?? ICON_SIZES[sizeKey] ?? 'w-4 h-4';
		return `animate-spin ${loaderSize}`;
	});

	const isDisabled = $derived(disabled || loading);

	const attrs = $derived({
		'aria-busy': loading,
		'aria-live': loading ? ('polite' as const) : undefined,
		'aria-label': ariaLabel || undefined,
		disabled: isDisabled
	});

	// Use getters to avoid capturing initial values outside reactive context
	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get loading() {
			return loading;
		},
		get block() {
			return block;
		},
		get classes() {
			return classes;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get loaderClasses() {
			return loaderClasses;
		},
		get isDisabled() {
			return isDisabled;
		},
		get attrs() {
			return attrs;
		}
	};
}
