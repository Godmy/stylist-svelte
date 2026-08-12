<script lang="ts">
	import type { RecipeGridLayout } from '$stylist/layout/interface/recipe/grid-layout';
	import createGridLayoutState from './state.svelte';

	let props: RecipeGridLayout = $props();
	const state = createGridLayoutState(props);

	const itemColSpanStyle = (colSpan?: number, rowSpan?: number): string => {
		let style = '';
		if (colSpan) style += `grid-column: span ${colSpan};`;
		if (rowSpan) style += `grid-row: span ${rowSpan};`;
		return style;
	};
</script>

<div
	class={['layout-grid-layout', props.class].filter(Boolean).join(' ')}
	style={state.layoutStyle}
	role="grid"
	aria-label={props['aria-label'] ?? 'Grid layout'}
	{...state.restProps}
>
	{#each state.items as item}
		<div
			class={['layout-grid-layout__item', item.class, props.itemClass].filter(Boolean).join(' ')}
			style={itemColSpanStyle(item.colSpan, item.rowSpan)}
			role="gridcell"
		>
			{#if typeof item.content === 'string'}
				{@html item.content}
			{:else}
				{@render item.content()}
			{/if}
		</div>
	{/each}
</div>

<style>
	.layout-grid-layout {
		display: grid;
	}

	.layout-grid-layout__item {
		padding: 1rem;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}
</style>
