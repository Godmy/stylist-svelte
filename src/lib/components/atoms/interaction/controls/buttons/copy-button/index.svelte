<script lang="ts">
	import { Copy, Check } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { copyToClipboard } from '$stylist/utils/clipboard/';
	import type { CopyButtonProps } from '$stylist/design-system/attributes';
	import { COPY_BUTTON_PRESET } from '$stylist/design-system/presets';
	import { createState } from '../state.svelte';

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
	let buttonState = createState(COPY_BUTTON_PRESET, {
		...props,
		class: `${props.class ?? ''} copy-button`.trim()
	});

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
		`copy-button-icon transition-colors duration-150 ${
			copied ? 'text-[var(--color-success-600,#16a34a)]' : 'text-current'
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
			<Check class={iconClasses} aria-hidden="true" />
		{:else}
			<Copy class={iconClasses} aria-hidden="true" />
		{/if}
	{/if}
	<span class="ml-2">{copied ? 'Copied!' : (props.label ?? 'Copy')}</span>
</button>
