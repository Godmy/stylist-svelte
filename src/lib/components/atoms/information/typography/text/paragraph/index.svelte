<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * Paragraph component - Displays a paragraph text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the paragraph ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the paragraph is disabled
	 * @param block - Whether the paragraph should span the full width
	 * @param children - Snippet content for the paragraph (if not using default text content)
	 * @returns An accessible, styled paragraph element
	 */

	let props: TypographyTextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);

	const classes = $derived(
		`text-base ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<p {...props} class={classes}>
	{#if children}
		{@render children()}
	{/if}
</p>

