<script lang="ts">
	import { createFormHelperTextState } from '$stylist/design-system/utils/model-helpers/input-state';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

	/**
	 * FormHelperText component - displays helper text for form fields
	 *
	 * @param variant - Visual variant ('default' | 'info' | 'success' | 'warning' | 'danger')
	 * @param text - Helper text content
	 * @param content - Snippet content for the helper text
	 * @returns Accessible, styled helper text for form fields
	 */

	import type { InputVariant } from '$stylist/design-system/tokens/interaction/variants';
	type FormHelperVariant = InputVariant;
	type FormHelperTextProps = {
		variant?: InputVariant;
		size?: ComponentSize;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};

	let {
		variant = 'default',
		size = 'md',
		text = '',
		content,
		class: className = '',
		...restProps
	}: FormHelperTextProps & HTMLAttributes<HTMLParagraphElement> = $props();

	const formHelperState = $derived(createFormHelperTextState({
		variant,
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














