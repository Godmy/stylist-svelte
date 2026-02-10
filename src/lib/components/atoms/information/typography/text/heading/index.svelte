<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/attributes';
	import { buildClasses } from '$stylist/utils/classes';
	import { computeAriaLabel } from '$stylist/utils/aria';

	/**
	 * Heading component - Displays a heading text with various levels and styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the heading ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the heading is disabled
	 * @param block - Whether the heading should span the full width
	 * @param children - Snippet content for the heading (if not using default text content)
	 * @returns An accessible, styled heading element
	 */

	let props: TypographyTextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);

	const classes = $derived(`text-xl font-bold ${props.class ?? ''}`);

	const ariaLabel = $derived(
		computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, '')
	);

	const attrs = $derived({
		'aria-label': ariaLabel || undefined
	});
</script>

<h2 {...props} class={classes} {...attrs}>
	{#if children}
		{@render children()}
	{/if}
</h2>
