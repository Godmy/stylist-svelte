import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Props } from '$stylist/information/type/struct/common';
import type { ButtonFactoryInput } from '$stylist/interaction/factory/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { RECORD_ICON_SIZE } from '$stylist/architecture/const/record/icon-size';
import type { Preset } from '$stylist/architecture/type/struct/preset';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
import { computeAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { buildClasses } from '$stylist/information/function/script/build-preset-class-names';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

interface ButtonStateProps<V extends string, S extends string> extends Omit<Props, 'variant' | 'size'> {
	variant?: V;
	size?: S;
}

function createButtonPreset(): Preset<TokenAppearance, TokenSize> & {
	loaderSize?: Record<string, string>;
} {
	return createBasePreset<TokenAppearance, TokenSize>(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
		variant: 'primary',
		size: 'md'
	});
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
		const sizeKey = size as keyof typeof RECORD_ICON_SIZE;
		const loaderSize = preset.loaderSize?.[size as string] ?? RECORD_ICON_SIZE[sizeKey] ?? 'w-4 h-4';
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

function createButtonStateFromFactoryInput(input: ButtonFactoryInput) {
	return createSharedButtonState(createButtonPreset(), {
		get variant() {
			return input.contract.variant;
		},
		get size() {
			return input.contract.size;
		},
		get disabled() {
			return input.contract.disabled;
		},
		get loading() {
			return input.contract.loading;
		},
		get block() {
			return input.contract.block;
		},
		get ariaLabel() {
			return input.contract.ariaLabel;
		},
		get class() {
			return input.html.class;
		}
	});
}

export function createButtonState<V extends string, S extends string>(
	preset: Preset<V, S> & { loaderSize?: Record<string, string> },
	props: ButtonStateProps<V, S> & HTMLButtonAttributes
): ReturnType<typeof createSharedButtonState<V, S>>;
export function createButtonState(input: ButtonFactoryInput): ReturnType<typeof createButtonStateFromFactoryInput>;
export function createButtonState<V extends string, S extends string>(
	inputOrPreset: ButtonFactoryInput | (Preset<V, S> & { loaderSize?: Record<string, string> }),
	props?: ButtonStateProps<V, S> & HTMLButtonAttributes
) {
	if (props) {
		return createSharedButtonState(
			inputOrPreset as Preset<V, S> & { loaderSize?: Record<string, string> },
			props
		);
	}

	return createButtonStateFromFactoryInput(inputOrPreset as ButtonFactoryInput);
}

export default createButtonState;




