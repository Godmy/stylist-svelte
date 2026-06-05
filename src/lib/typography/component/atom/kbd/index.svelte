<script lang="ts">
	import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';
	import createKbdState from '$stylist/typography/function/state/kbd/index.svelte';

	let props: ThemeKbdRecipe = $props();

	const state = createKbdState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<kbd class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</kbd>

<style>
	.c-typography-kbd {
		padding: 0.125rem 0.45rem;
		border: 1px solid var(--color-neutral-200);
		border-radius: 0.375rem;
		background: var(--color-neutral-100);
		color: var(--color-text-primary);
		font-family: var(--font-family-mono, monospace);
		font-size: var(--text-size-xs, 0.75rem);
	}
</style>
