<script lang="ts">
	import type { ThemeHighlightRecipe } from '$stylist/typography/interface/recipe/highlight';
	import { createHighlightState } from '$stylist/typography/function/state/highlight';

	let props: ThemeHighlightRecipe = $props();

	const state = createHighlightState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<mark class={state.classes} {...restProps}>
	{#if children}
		{#if children}{#if children}{@render children()}{/if}{/if}
	{/if}
</mark>



