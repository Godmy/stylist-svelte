import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotCopyButton as CopyButtonProps } from '$stylist/control/interface/slot/copy-button';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { copyTextToClipboard } from '$stylist/interaction/function/script/copy-text-to-clipboard';

type CopyButtonStateProps = CopyButtonProps & HTMLButtonAttributes;

export function createCopyButtonState(props: CopyButtonStateProps) {
	const preset = createBasePreset(
		InteractionStyleManager.getInteractiveVariants(),
		TOKEN_SIZE,
		{
			variant: 'outline',
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
			'copy-button',
			props.class
		]
			.filter(Boolean)
			.join(' ')
	);

	const loaderClasses = $derived('animate-spin w-4 h-4');

	const attrs = $derived({
		'aria-busy': typeof loading === 'boolean' ? loading : undefined,
		'aria-live': typeof loading === 'boolean' && loading ? 'polite' : undefined,
		disabled: typeof disabled === 'boolean' ? disabled : undefined
	});

	const ariaLabel = $derived(resolveAriaLabel(
		typeof props.ariaLabel === 'string' ? props.ariaLabel : undefined,
		props as Record<string, unknown>,
		'Copy to clipboard'
	));
	let copied = $state(false);

	const iconClasses = $derived(
		`copy-button-icon transition-colors duration-[var(--duration-150)] ${
			copied ? 'text-[var(--color-success-600)]' : 'text-current'
		}`.trim()
	);

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
		},
		get copied() {
			return copied;
		},
		get iconClasses() {
			return iconClasses;
		},
		async handleCopy() {
			if (props.disabled || props.loading) return;

			const success = await copyTextToClipboard(props.text ?? '');

			if (success) {
				copied = true;
				props.onSuccess?.(props.successMessage ?? 'Copied to clipboard');
				setTimeout(() => {
					copied = false;
				}, 2000);
				return;
			}

			props.onError?.(new Error('Failed to copy to clipboard'));
		}
	};
}

export default createCopyButtonState;
