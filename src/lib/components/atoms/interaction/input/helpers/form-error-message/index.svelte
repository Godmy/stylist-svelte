<script lang="ts">
	import { createFormErrorMessageState } from '$stylist/design-system/models/interaction/form-error-message.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CompactSize } from '$stylist/design-system/tokens/architecture/sizes';

	/**
	 * FormErrorMessage component - displays an error message for form fields
	 *
	 * @param visible - Whether the error message is visible
	 * @param text - Error message text
	 * @param content - Snippet content for the error message
	 * @returns Accessible, styled error message for form fields
	 */

	import type { InputVariant } from '$stylist/design-system';
	import { INPUT_VARIANTS } from '$stylist/design-system/tokens/architecture/variants';
	type FormErrorVariant = InputVariant;
	type FormErrorMessageProps = {
		variant?: (typeof INPUT_VARIANTS)[number];
		size?: CompactSize;
		visible?: boolean;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};

	let {
		visible = true,
		variant = 'error',
		size = 'md',
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





