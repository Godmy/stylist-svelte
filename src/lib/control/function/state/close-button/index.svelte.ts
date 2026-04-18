import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotButtonElement as ButtonElementProps } from '$stylist/control/interface/slot/button-element';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';

type CloseButtonProps = ButtonElementProps & HTMLButtonAttributes;

export function createCloseButtonState(props: CloseButtonProps) {
	const preset = createBasePreset(
		InteractionStyleManager.getInteractiveVariants(),
		TOKEN_SIZE,
		{
			variant: 'ghost',
			size: 'sm'
		}
	);

	const variant = $derived((props.variant ?? preset.defaults.variant) as string);
	const size = $derived((props.size ?? preset.defaults.size) as string);
	const disabled = $derived(props.disabled ?? preset.defaults.disabled);
	const loading = $derived(props.loading ?? false);

	const classes = $derived(
		[
			preset.classes.variant[variant as keyof typeof preset.classes.variant],
			preset.classes.size[size as keyof typeof preset.classes.size],
			disabled && preset.classes.state['disabled'],
			loading && preset.classes.state['loading'],
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);

	const loaderClasses = $derived('animate-spin w-4 h-4');

	const ariaLabel = $derived(resolveAriaLabel(
		typeof props.ariaLabel === 'string' ? props.ariaLabel : undefined,
		props as Record<string, unknown>,
		'Close'
	));

	const attrs = $derived({
		'aria-busy': typeof loading === 'boolean' ? loading : undefined,
		'aria-live': typeof loading === 'boolean' && loading ? 'polite' : undefined,
		disabled: typeof disabled === 'boolean' ? disabled : undefined
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
		get classes() {
			return classes;
		},
		get loaderClasses() {
			return loaderClasses;
		},
		get attrs() {
			return attrs;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}

export default createCloseButtonState;
