import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonFactoryInput } from '$stylist/interaction/factory/button';
import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';

export function createIconButtonState(input: ButtonFactoryInput) {
	const variant = $derived((input.contract.variant ?? 'default') as string);
	const size = $derived((input.contract.size ?? 'md') as string);
	const disabled = $derived((input.contract.disabled ?? false) as boolean);
	const loading = $derived((input.contract.loading ?? false) as boolean);

	const isDisabled = $derived(disabled || loading);

	const ariaLabel = $derived(
		resolveAriaLabel(
			typeof input.contract.ariaLabel === 'string' ? input.contract.ariaLabel : undefined,
			input.contract as Record<string, unknown>,
			''
		)
	);

	const attrs = $derived({
		'aria-busy': loading || undefined,
		'aria-live': loading ? ('polite' as const) : undefined,
		'aria-label': ariaLabel || undefined,
		disabled: isDisabled || undefined
	});

	const iconSizeMap: Record<string, number> = {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	};

	const iconSize = $derived(iconSizeMap[size] ?? 16);

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
		get isDisabled() {
			return isDisabled;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get attrs() {
			return attrs;
		},
		get iconSize() {
			return iconSize;
		}
	};
}

export default createIconButtonState;
