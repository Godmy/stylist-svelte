export { PAGE_BUTTON_PRESET } from '$stylist/design-system/presets/button';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/props';
import type { Preset } from '$stylist/design-system/presets/preset';
import { buildClasses } from '$stylist/utils/classes';
import { computeAriaLabel } from '$stylist/utils/aria';
import { ICON_SIZES } from '$stylist/design-system/classes';

type ButtonStateProps<V extends string, S extends string> = Omit<Props, 'variant' | 'size'> & {
	variant?: V;
	size?: S;
};

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
	props: ButtonStateProps<V, S> & HTMLButtonAttributes
) {
	const variant = $derived((props.variant ?? preset.defaults.variant) as V);
	const size = $derived((props.size ?? preset.defaults.size) as S);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);
	const loading = $derived(props.loading ?? false);
	const block = $derived(props.block ?? preset.defaults.block);

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

	const ariaLabel = $derived(computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, ''));

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
export const createPageButtonState = createState;
export default createPageButtonState;






