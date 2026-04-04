<script lang="ts">
	import type { BorderRecipe as BorderRecipe } from '$stylist/layout/interface/recipe/border';
	import { createBorderState } from '$stylist/layout/function/state/border';

	let props: BorderRecipe = $props();
	const state = createBorderState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				borderStyle,
				borderWidth,
				borderColor,
				borderRadius,
				borderTop,
				borderBottom,
				borderLeft,
				borderRight,
				animated,
				...rest
			} = props;
			return rest;
		})()
	);

	const inlineStyle = $derived(
		Object.entries(state.styles as unknown as Record<string, string | number>)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ')
	);
</script>

<div class={state.classes} style={inlineStyle} {...restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
