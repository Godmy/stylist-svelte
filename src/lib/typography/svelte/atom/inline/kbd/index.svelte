<script lang="ts">
	import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';
	import { createKbdState } from '$stylist/typography/function/state/kbd';

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
		{@render children?.()}
	{/if}
</kbd>



