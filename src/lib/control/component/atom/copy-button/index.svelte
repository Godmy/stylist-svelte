<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media'; const Copy = 'copy'; const Check = 'check';
import type { SlotCopyButton as CopyButtonProps } from '$stylist/control/interface/slot/copy-button';
import { createCopyButtonState } from '$stylist/control/function/state/copy-button';

	let props: CopyButtonProps = $props();
	const state = createCopyButtonState(props);

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

</script>

<button
	{...restButtonProps}
	type={props.type ?? 'button'}
	onclick={state.handleCopy}
	class={state.classes}
	disabled={state.disabled}
	aria-busy={state.loading ? true : undefined}
	aria-live={state.loading ? 'polite' : undefined}
	aria-label={state.copied ? 'Copied' : state.ariaLabel || undefined}
>
	{#if props.showIcon}
		{#if state.copied}
			<BaseIcon name={Check} class={state.iconClasses} aria-hidden="true" />
		{:else}
			<BaseIcon name={Copy} class={state.iconClasses} aria-hidden="true" />
		{/if}
	{/if}
	<span class="ml-2">{state.copied ? 'Copied!' : (props.label ?? 'Copy')}</span>
</button>
















