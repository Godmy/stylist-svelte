<script lang="ts">
	import type { BaseLayoutProps } from '$stylist/layout/type/struct/layout-extended/base-layout-props';
	import createVerticalLayoutState from '$stylist/layout/function/state/vertical-layout/index.svelte';

	let props: BaseLayoutProps = $props();
	const state = createVerticalLayoutState(props);

	const GAP: Record<string, string> = {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
		'2xl': '3rem'
	};
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

	const gap = $derived(GAP[state.gap] ?? '1rem');
	const align = $derived(ALIGN[state.alignItems] ?? 'stretch');
	const justify = $derived(JUSTIFY[state.justifyContent] ?? 'center');
</script>

<div
	class={['layout-v', state.fillHeight && 'layout-v--fill', props.class].filter(Boolean).join(' ')}
	style:--gap={gap}
	style:--align={align}
	style:--justify={justify}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-v {
		display: flex;
		flex-direction: column;
		gap: var(--gap, 1rem);
		align-items: var(--align, stretch);
		justify-content: var(--justify, center);
	}

	.layout-v--fill {
		height: 100%;
	}
</style>
