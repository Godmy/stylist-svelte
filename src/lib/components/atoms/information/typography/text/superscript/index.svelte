<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * Superscript component - Displays superscript text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the superscript text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the superscript text is disabled
	 * @param block - Whether the superscript text should span the full width
	 * @param children - Snippet content for the superscript text (if not using default text content)
	 * @returns An accessible, styled superscript text element
	 */

	let props: TypographyTextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'sm');
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				variant: _variant,
				size: _size,
				disabled: _disabled,
				block: _block,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	const classes = $derived(
		`text-xs align-super ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<sup {...restProps} class={classes}>
	{#if children}
		{@render children()}
	{/if}
</sup>

