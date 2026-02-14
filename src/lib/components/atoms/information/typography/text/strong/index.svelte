<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * Strong component - Displays bold text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the strong text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the strong text is disabled
	 * @param block - Whether the strong text should span the full width
	 * @param children - Snippet content for the strong text (if not using default text content)
	 * @returns An accessible, styled strong text element
	 */

	let props: TypographyTextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
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
		`font-bold ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<strong {...restProps} class={classes}>
	{#if children}
		{@render children()}
	{/if}
</strong>

