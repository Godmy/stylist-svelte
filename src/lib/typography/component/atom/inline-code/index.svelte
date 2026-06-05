<script lang="ts">
	import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';
	import createInlineCodeState from '$stylist/typography/function/state/inline-code/index.svelte';

	let props: ThemeInlineCodeRecipe = $props();

	const state = createInlineCodeState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<code class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</code>

<style>
	.c-typography-inline-code {
		padding: 0.125rem 0.375rem;
		border-radius: 0.375rem;
		background: var(--color-background-secondary, var(--color-neutral-100));
		color: var(--color-text-primary);
		font-family: var(--typography-font-family-mono, var(--font-family-mono, monospace));
		font-size: var(--text-size-sm, 0.875rem);
		line-height: 1.4;
		white-space: nowrap;
	}
</style>
