<script lang="ts">
	import createStackedLayoutState from '$stylist/layout/function/state/stacked-layout/index.svelte';
	import type { StackedLayoutProps } from '$stylist/layout/interface/recipe/stacked-layout';

	let props: StackedLayoutProps = $props();
	const state = createStackedLayoutState(props);

	const GAP: Record<string, string> = {
		none: '0',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem'
	};
	const ALIGN: Record<string, string> = {
		start: 'flex-start',
		center: 'center',
		end: 'flex-end',
		stretch: 'stretch'
	};
	const JUSTIFY: Record<string, string> = {
		start: 'flex-start',
		center: 'center',
		end: 'flex-end',
		between: 'space-between',
		around: 'space-around',
		evenly: 'space-evenly'
	};

	const direction = $derived(state.direction === 'horizontal' ? 'row' : 'column');
	const gap = $derived(GAP[state.gap] ?? '1rem');
	const align = $derived(ALIGN[state.alignItems] ?? 'stretch');
	const justify = $derived(JUSTIFY[state.justifyContent] ?? 'flex-start');
</script>

<div
	class={['layout-stacked', props.class].filter(Boolean).join(' ')}
	style:--direction={direction}
	style:--gap={gap}
	style:--align={align}
	style:--justify={justify}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-stacked {
		display: flex;
		flex-direction: var(--direction, column);
		gap: var(--gap, 1rem);
		align-items: var(--align, stretch);
		justify-content: var(--justify, flex-start);
	}
</style>
