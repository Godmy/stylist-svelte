<script lang="ts">
	import { createFormHelperTextState } from '$stylist/input/function/script/create-form-helper-text-state';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';

	/**
	 * FormHelperText component - displays helper text for form fields
	 *
	 * @param variant - Visual variant ('default' | 'info' | 'success' | 'warning' | 'danger')
	 * @param text - Helper text content
	 * @param content - Snippet content for the helper text
	 * @returns Accessible, styled helper text for form fields
	 */

	import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
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
















