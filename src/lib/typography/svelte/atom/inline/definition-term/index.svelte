<script lang="ts">
	import type { ThemeDefinitionTermRecipe } from '$stylist/typography/interface/recipe/definition-term';
	import { createDefinitionTermState } from '$stylist/typography/function/state/definition-term';

	let props: ThemeDefinitionTermRecipe = $props();

	const state = createDefinitionTermState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<dt class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</dt>



