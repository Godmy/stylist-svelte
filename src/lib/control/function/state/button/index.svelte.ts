import type { RecipeButton } from '$stylist/control/interface/recipe/button';
import { VARIANT_CLASSES } from '$stylist/interaction/const/record/variant-classes';
import type { ButtonFactoryInput } from '$stylist/interaction/factory/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export function createButtonState(input: ButtonFactoryInput | RecipeButton) {
	const preset = createBasePreset<TokenAppearance, TokenSize>(
		Object.keys(VARIANT_CLASSES) as TokenAppearance[],
		TOKEN_SIZE,
		{
			variant: 'primary',
			size: 'md'
		}
	);

	const props = $derived.by(() => {
		if ('contract' in input && 'html' in input) {
			return {
				...input.html.attrs,
				...input.slots,
				variant: input.contract.variant as TokenAppearance,
				size: input.contract.size as TokenSize,
				disabled: input.contract.disabled as boolean | undefined,
				loading: input.contract.loading as boolean | undefined,
				block: input.contract.block as boolean | undefined,
				loadingLabel: input.contract.loadingLabel as string | undefined,
				ariaLabel: input.contract.ariaLabel as string | undefined,
				class: input.html.class
			} as RecipeButton;
		}

		return input;
	});

	const variant = $derived((props.variant ?? preset.defaults.variant) as TokenAppearance);
	const size = $derived((props.size ?? preset.defaults.size) as TokenSize);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);
	const loading = $derived(props.loading ?? false);
	const block = $derived(props.block ?? preset.defaults.block);
	const loadingLabel = $derived(props.loadingLabel ?? 'Loading...');
	const classes = $derived('');

	const ariaLabel = $derived(
		resolveAriaLabel(
			typeof props.ariaLabel === 'string' ? props.ariaLabel : undefined,
			props as Record<string, unknown>,
			''
		)
	);

	const loaderClasses = $derived('c-button-m__loader');
	const isDisabled = $derived(disabled || loading);

	const attrs = $derived({
		'aria-busy': typeof loading === 'boolean' ? loading : undefined,
		'aria-live': typeof loading === 'boolean' && loading ? ('polite' as const) : undefined,
		'aria-label': ariaLabel || undefined,
		disabled: typeof isDisabled === 'boolean' ? isDisabled : undefined
	});

	const restAttrs = $derived.by(() => {
		const {
			variant,
			size,
			disabled,
			loading,
			block,
			loadingLabel: restLoadingLabel,
			children,
			class: className,
			label,
			icon,
			iconLeft,
			iconRight,
			badge,
			count,
			dot,
			showBadge,
			background,
			backgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundSize,
			backgroundRepeat,
			gradient,
			opacity,
			borderStyle,
			borderWidth,
			borderColor,
			borderRadius,
			borderTop,
			borderBottom,
			borderLeft,
			borderRight,
			...rest
		} = props as RecipeButton & Record<string, unknown>;
		return rest;
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
		get loadingLabel() {
			return loadingLabel;
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
		},
		get restAttrs() {
			return restAttrs;
		}
	};
}
