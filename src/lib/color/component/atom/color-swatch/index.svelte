<script lang="ts">
	import type { ThemeColorSwatchRecipe } from '$stylist/color/interface/recipe/color-swatch';
	import createColorSwatchState from '$stylist/color/function/state/color-swatch/index.svelte';

	let props: ThemeColorSwatchRecipe = $props();
	const state = createColorSwatchState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, content: _content, color: _color, size: _size, ...rest } = props;
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
		<div class="c-color-swatch__content">
			{@render props.content()}
		</div>
	{/if}
</div>

<style>
	.c-color-swatch {
		display: inline-block;
		border-radius: var(--radius-md, 0.375rem);
		border: 1px solid var(--color-border-secondary);
		overflow: hidden;
	}

	.c-color-swatch__content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
