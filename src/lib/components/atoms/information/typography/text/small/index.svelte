<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TypographyTextProps } from '$stylist/design-system/props';

	/**
	 * Small component - Displays small text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the small text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the small text is disabled
	 * @param block - Whether the small text should span the full width
	 * @param children - Snippet content for the small text (if not using default text content)
	 * @returns An accessible, styled small text element
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
		`text-sm ${disabled ? 'text-gray-400' : 'text-gray-600'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<small {...restProps} class={classes}>
	{#if children}
		{@render children?.()}
	{/if}
</small>

