<script lang="ts">
	import type { ThemeEmRecipe } from '$stylist/typography/interface/recipe/em';
	import { createEmState } from '$stylist/typography/function/state/em';

	let props: ThemeEmRecipe = $props();

	const state = createEmState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<em class={state.classes} {...restProps}>
	{#if children}
		{#if children}{#if children}{@render children()}{/if}{/if}
	{/if}
</em>



