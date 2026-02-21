<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	import type { TextProps } from '$stylist/design-system/props';

	/**
	 * Text component - Displays regular text with various styles.
	 *
	 * @param variant - Visual style variant
	 * @param size - Size of the text ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the text is disabled
	 * @param block - Whether the text should span the full width
	 * @param children - Snippet content for the text (if not using default text content)
	 * @returns An accessible, styled text element
	 */

	let props: TextProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

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
		`text-base ${disabled ? 'text-gray-400' : 'text-gray-700'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
	);
</script>

<span {...restProps} class={classes}>
	{#if children}
		{@render children?.()}
	{/if}
</span>

