<script lang="ts">
	import type { BadgeRecipe } from '$stylist/typography/interface/recipe/badge';
	import { createBadgeState } from '$stylist/typography/function/state/badge';

	let props: BadgeRecipe = $props();

	const state = createBadgeState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</span>


