<script lang="ts">
	import { FORM_ERROR_MESSAGE_PRESET } from '$stylist/design-system/classes/input';
	import { createFormErrorMessageState } from '../state.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CompactSize } from '$stylist/design-system/tokens/sizes';

	/**
	 * FormErrorMessage component - displays an error message for form fields
	 *
	 * @param visible - Whether the error message is visible
	 * @param text - Error message text
	 * @param content - Snippet content for the error message
	 * @returns Accessible, styled error message for form fields
	 */

	import type { InputVariant } from '$stylist/design-system';
	type FormErrorVariant = InputVariant;
	type FormErrorMessageProps = {
		variant?: (typeof FORM_ERROR_MESSAGE_PRESET.variants)[number];
		size?: CompactSize;
		visible?: boolean;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};

	let {
		visible = true,
		variant = 'error',
		size = FORM_ERROR_MESSAGE_PRESET.defaults.size,
		text = '',
		content,
		class: className = '',
		...restProps
	}: FormErrorMessageProps & HTMLAttributes<HTMLParagraphElement> = $props();

	const formErrorState = $derived(createFormErrorMessageState({
		variant: variant satisfies FormErrorVariant,
		size,
		class: className
	}));

	let classes = $derived([formErrorState.classes].filter(Boolean).join(' '));
</script>

{#if visible}
	<p class={classes} {...restProps}>
		{#if content}
			{@render content()}
		{:else}
			{text}
		{/if}
	</p>
{/if}
