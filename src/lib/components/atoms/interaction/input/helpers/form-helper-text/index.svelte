<script lang="ts">
	import { FORM_HELPER_TEXT_PRESET } from '$stylist/design-system/presets';
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

	type FormHelperVariant = (typeof FORM_HELPER_TEXT_PRESET.variants)[number];
	type FormHelperTextProps = {
		variant?: FormHelperVariant;
		size?: CompactSize;
		text?: string;
		content?: () => any;
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
	const state = $derived(createFormHelperTextState({ variant, size, class: className }));

	let classes = $derived([state.classes].filter(Boolean).join(' '));
</script>

<p class={classes} {...restProps}>
	{#if content}
		{@render content()}
	{:else}
		{text}
	{/if}
</p>
