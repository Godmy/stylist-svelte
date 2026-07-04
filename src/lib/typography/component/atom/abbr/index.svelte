<script lang="ts">
	import type { RecipeAbbr } from '$stylist/typography/interface/recipe/abbr';
	import createAbbrState from '$stylist/typography/function/state/abbr/index.svelte';

	let props: RecipeAbbr = $props();

	const state = createAbbrState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, title: _title, ...rest } = props;
			return rest;
		})()
	);
</script>

<abbr class={state.classes} title={state.title} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</abbr>

<style>
	.c-typography-abbr {
		text-decoration: underline dotted;
		text-underline-offset: 0.12em;
		cursor: help;
	}
</style>
