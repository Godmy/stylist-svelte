<script lang="ts">
	import { FORM_HELPER_TEXT_PRESET } from '$stylist/design-system/classes/input';
	import { createFormHelperTextState } from '../state.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CompactSize } from '$stylist/design-system/tokens/sizes';

	/**
	 * FormHelperText component - displays helper text for form fields
	 *
	 * @param variant - Visual variant ('default' | 'info' | 'success' | 'warning' | 'danger')
	 * @param text - Helper text content
	 * @param content - Snippet content for the helper text
	 * @returns Accessible, styled helper text for form fields
	 */

	import type { InputVariant } from '$stylist/design-system';
	type FormHelperVariant = InputVariant;
	type FormHelperTextProps = {
		variant?: (typeof FORM_HELPER_TEXT_PRESET.variants)[number];
		size?: CompactSize;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};

	let {
		variant = 'default',
		size = FORM_HELPER_TEXT_PRESET.defaults.size,
		text = '',
		content,
		class: className = '',
		...restProps
	}: FormHelperTextProps & HTMLAttributes<HTMLParagraphElement> = $props();
	const formHelperState = $derived(createFormHelperTextState({ 
		variant: variant as FormHelperVariant, 
		size,
		class: className 
	}));

	let classes = $derived([formHelperState.classes].filter(Boolean).join(' '));
</script>

<p class={classes} {...restProps}>
	{#if content}
		{@render content()}
	{:else}
		{text}
	{/if}
</p>
