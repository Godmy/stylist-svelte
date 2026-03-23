import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Props } from '$stylist/design-system/contracts';
import { ICON_SIZES } from '$stylist/design-system/runtime/sizing/index';
import type { Preset } from '$stylist/design-system/runtime/types';
import { computeAriaLabel } from '$stylist/design-system/utils/aria';
import { buildClasses } from '$stylist/design-system/utils/classes';

interface ButtonStateProps<V extends string, S extends string> extends Omit<Props, 'variant' | 'size'> {
	variant?: V;
	size?: S;
}


function createSharedButtonState<V extends string, S extends string>(
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

export function createButtonState<V extends string, S extends string>(
	preset: Preset<V, S> & { loaderSize?: Record<string, string> },
	props: ButtonStateProps<V, S> & HTMLButtonAttributes
) {
	return createSharedButtonState(preset, props);
}

export default createButtonState;


