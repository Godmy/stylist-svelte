<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Copy = 'copy'; const Check = 'check';
import type { HTMLButtonAttributes } from 'svelte/elements';
import { copyToClipboard } from '$stylist/information/function/script/copy-text-to-clipboard';
import type { CopyButtonProps } from '$stylist/control/interface/component/button/other';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createButtonState } from '$stylist/control/function/state/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

	let props: CopyButtonProps & HTMLButtonAttributes = $props();

	let copied = $state(false);

	// Extract rest props manually to avoid $$restProps in runes mode
	let {
		variant,
		size,
		disabled,
		loading,
		block,
		loadingLabel,
		children,
		class: classProp,
		...restProps
	} = props;

	// Use centralized state management for base button properties
	let buttonState = createButtonState(
		createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
			variant: 'outline',
			size: 'sm'
		}),
		{
			...props,
			class: `${props.class ?? ''} copy-button`.trim()
		} as any
	);

	async function handleCopy() {
		if (props.disabled || props.loading) return;

		const success = await copyToClipboard(props.text ?? '');

		if (success) {
			copied = true;
			props.onSuccess?.(props.successMessage ?? 'Copied to clipboard');
			setTimeout(() => {
				copied = false;
			}, 2000);
		} else {
			props.onError?.(new Error('Failed to copy to clipboard'));
		}
	}

	let iconClasses = $derived(
		`copy-button-icon transition-colors duration-[var(--duration-150)] ${
			copied ? 'text-[var(--color-success-600)]' : 'text-current'
		}`.trim()
	);
</script>

<button
	{...restProps}
	type={props.type ?? 'button'}
	onclick={handleCopy}
	class={buttonState.classes}
	{...buttonState.attrs}
	aria-label={copied ? 'Copied' : buttonState.ariaLabel || undefined}
>
	{#if props.showIcon}
		{#if copied}
			<BaseIcon name={Check} class={iconClasses} aria-hidden="true" />
		{:else}
			<BaseIcon name={Copy} class={iconClasses} aria-hidden="true" />
		{/if}
	{/if}
	<span class="ml-2">{copied ? 'Copied!' : (props.label ?? 'Copy')}</span>
</button>
















