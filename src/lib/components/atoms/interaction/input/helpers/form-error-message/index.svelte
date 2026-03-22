<script lang="ts">
	import { createFormErrorMessageState } from '$stylist/design-system/runtime/input-state';
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

	/**
	 * FormErrorMessage component - displays an error message for form fields
	 *
	 * @param visible - Whether the error message is visible
	 * @param text - Error message text
	 * @param content - Snippet content for the error message
	 * @returns Accessible, styled error message for form fields
	 */

	import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
	type FormErrorVariant = TokenAppearance;
	type FormErrorMessageProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
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
	}: FormErrorMessageProps & InteractionHTMLAttributes<HTMLParagraphElement> = $props();

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















