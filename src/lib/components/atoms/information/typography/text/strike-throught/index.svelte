<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * StrikeThrough component - Displays text with a strikethrough effect and various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the strike-through text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the strike-through text is disabled
	 * @param block - Whether the strike-through text should span the full width
	 * @param children - Snippet content for the strike-through text (if not using default text content)
	 * @returns An accessible, styled strike-through text element
	 */

	let props: TypographyTextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);

	const classes = $derived(
		`line-through ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<span {...props} class={classes}>
	{#if children}
		{@render children()}
	{/if}
</span>

