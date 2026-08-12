<script lang="ts">
	import type { RecipeHorizontalLayout } from '$stylist/layout/interface/recipe/horizontal-layout';
	import createHorizontalLayoutState from './state.svelte';

	let props: RecipeHorizontalLayout = $props();
	const state = createHorizontalLayoutState(props);

	const ALIGN: Record<string, string> = {
		top: 'flex-start',
		'top-center': 'flex-start',
		'top-start': 'flex-start',
		'top-end': 'flex-start',
		bottom: 'flex-end',
		'bottom-center': 'flex-end',
		'bottom-start': 'flex-end',
		'bottom-end': 'flex-end',
		left: 'center',
		'left-center': 'center',
		'left-start': 'flex-start',
		'left-end': 'flex-end',
		right: 'center',
		'right-center': 'center',
		'right-start': 'flex-start',
		'right-end': 'flex-end',
		center: 'center',
		justify: 'center',
		stretch: 'stretch',
		baseline: 'baseline'
	};

	const JUSTIFY: Record<string, string> = {
		stretch: 'stretch',
		baseline: 'flex-start',
		between: 'space-between',
		around: 'space-around',
		evenly: 'space-evenly',
		justify: 'center',
		start: 'flex-start',
		center: 'center',
		end: 'flex-end'
	};

	const gapValue = $derived(typeof state.gap === 'number' ? `${state.gap}px` : '1rem');
	const alignValue = $derived(ALIGN[state.alignItems] ?? 'center');
	const justifyValue = $derived(JUSTIFY[state.justifyContent] ?? 'center');
</script>

<div
	class={['layout-h', props.class].filter(Boolean).join(' ')}
	style:--gap={gapValue}
	style:--align={alignValue}
	style:--justify={justifyValue}
	style:--wrap={state.wrap ? 'wrap' : 'nowrap'}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-h {
		display: flex;
		flex-direction: row;
		gap: var(--gap, 1rem);
		align-items: var(--align, center);
		justify-content: var(--justify, center);
		flex-wrap: var(--wrap, wrap);
	}
</style>
