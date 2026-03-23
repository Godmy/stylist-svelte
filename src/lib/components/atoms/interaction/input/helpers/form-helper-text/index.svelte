<script lang="ts">
	import { createFormHelperTextState } from '$stylist/design-system/runtime/input-state/index';
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

	/**
	 * FormHelperText component - displays helper text for form fields
	 *
	 * @param variant - Visual variant ('default' | 'info' | 'success' | 'warning' | 'danger')
	 * @param text - Helper text content
	 * @param content - Snippet content for the helper text
	 * @returns Accessible, styled helper text for form fields
	 */

	import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
	type FormHelperVariant = TokenAppearance;
	type FormHelperTextProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
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
	}: FormHelperTextProps & InteractionHTMLAttributes<HTMLParagraphElement> = $props();

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















