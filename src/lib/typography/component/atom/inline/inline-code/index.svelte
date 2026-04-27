<script lang="ts">
	import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';
	import { createInlineCodeState } from '$stylist/typography/function/state/inline-code';

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
		{#if children}{#if children}{@render children()}{/if}{/if}
	{/if}
</code>


