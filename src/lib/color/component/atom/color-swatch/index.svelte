<script lang="ts">
	import type { ThemeColorSwatchRecipe } from '$stylist/color/interface/recipe/color-swatch';
	import { createColorSwatchState } from '$stylist/color/function/state/color-swatch';

	let props: ThemeColorSwatchRecipe = $props();
	const state = createColorSwatchState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				content: _content,
				color: _color,
				size: _size,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	class={state.classes}
	style={`background-color: ${state.color}; width: ${state.size}px; height: ${state.size}px;`}
	{...restProps}
>
	{#if props.content}
		<div class="flex h-full w-full items-center justify-center">
			{@render props.content()}
		</div>
	{/if}
</div>

