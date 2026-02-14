<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * Subscript component - Displays subscript text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the subscript text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the subscript text is disabled
	 * @param block - Whether the subscript text should span the full width
	 * @param children - Snippet content for the subscript text (if not using default text content)
	 * @returns An accessible, styled subscript text element
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
		`text-xs align-sub ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<sub {...restProps} class={classes}>
	{#if children}
		{@render children()}
	{/if}
</sub>

