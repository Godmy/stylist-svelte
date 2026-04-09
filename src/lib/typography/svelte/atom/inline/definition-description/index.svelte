<script lang="ts">
	import type { ThemeDefinitionDescriptionRecipe } from '$stylist/typography/interface/recipe/definition-description';
	import { createDefinitionDescriptionState } from '$stylist/typography/function/state/definition-description';

	let props: ThemeDefinitionDescriptionRecipe = $props();

	const state = createDefinitionDescriptionState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<dd class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</dd>



