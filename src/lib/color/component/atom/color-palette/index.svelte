<script lang="ts">
	import createColorPaletteState from '$stylist/color/function/state/color-palette/index.svelte';
	import type { ThemeColorPaletteRecipe } from '$stylist/color/interface/recipe/color-palette';

	let props: ThemeColorPaletteRecipe = $props();

	const state = createColorPaletteState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	{#if state.title}
		<h3 class={state.headerClasses}>{state.title}</h3>
	{/if}

	<div class={state.gridClasses} style={state.gridStyle}>
		{#each state.colors as color}
			<button type="button" class={state.itemClasses} onclick={() => state.handleColorClick(color)}>
				<div
					class={state.colorSwatchClasses}
					style={`background-color: ${color.value}`}
					title={`${color.name}: ${color.value}`}
				></div>
				{#if state.showLabels}
					<div class={state.labelClasses}>
						{color.name}
					</div>
				{/if}
				{#if state.showValues}
					<div class={state.valueClasses}>
						{color.value}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.c-color-palette {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-color-palette__header {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.c-color-palette__grid {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 640px) {
		.c-color-palette__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 768px) {
		.c-color-palette__grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.c-color-palette__grid {
			grid-template-columns: repeat(var(--palette-cols, 4), minmax(0, 1fr));
		}
	}

	.c-color-palette__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-secondary);
		background: var(--color-background-primary);
		padding: 0.75rem;
		cursor: pointer;
		transition: background var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}

	.c-color-palette__item:hover {
		background: var(--color-background-secondary);
	}

	.c-color-palette__swatch {
		width: 3rem;
		height: 3rem;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-secondary);
	}

	.c-color-palette__label {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-color-palette__value {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>
