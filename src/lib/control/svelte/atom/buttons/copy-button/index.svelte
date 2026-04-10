<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Copy = 'copy'; const Check = 'check';
import { copyTextToClipboard } from '$stylist/interaction/function/script/copy-text-to-clipboard';
import type { CopyButtonProps } from '$stylist/control/interface/component/button/other';
import { createCopyButtonState } from '$stylist/control/function/state/copy-button';

	let props: CopyButtonProps = $props();

	let copied = $state(false);

	// Use centralized state management for base button properties
	const controlState = createCopyButtonState(props);

	// Extract rest props manually to avoid $$restProps in runes mode
	let restButtonProps = $derived.by(() => {
		const {
			variant,
			size,
			disabled,
			loading,
			block,
			loadingLabel,
			children,
			class: classProp,
			text,
			label,
			successMessage,
			showIcon,
			onSuccess,
			onError,
			...restProps
		} = props;
		return restProps;
	});

	async function handleCopy() {
		if (props.disabled || props.loading) return;

		const success = await copyTextToClipboard(props.text ?? '');

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
	{...restButtonProps}
	type={props.type ?? 'button'}
	onclick={handleCopy}
	class={controlState.classes}
	disabled={controlState.disabled}
	aria-busy={controlState.loading ? true : undefined}
	aria-live={controlState.loading ? 'polite' : undefined}
	aria-label={copied ? 'Copied' : controlState.ariaLabel || undefined}
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
















