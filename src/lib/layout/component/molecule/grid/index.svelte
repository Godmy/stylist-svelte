<script lang="ts">
	import type { GridProps } from '$stylist/layout/interface/recipe/grid';
	import stateFn from '$stylist/layout/function/state/grid/index.svelte';

	let props: GridProps = $props();
	const state = stateFn(props);

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

	const cols = $derived(props.cols ?? 2);
	const responsive = $derived(props.responsive ?? true);
	const gap = $derived(GAP[props.gap ?? 'md'] ?? '1rem');
	const align = $derived(ALIGN[props.alignItems ?? 'stretch'] ?? 'stretch');
	const justify = $derived(JUSTIFY[props.justifyContent ?? 'start'] ?? 'flex-start');
	const colsMd = $derived(Math.min(cols, 4));
</script>

<div
	class={['layout-grid', responsive ? 'layout-grid--responsive' : undefined, props.class]
		.filter(Boolean)
		.join(' ')}
	style:--cols={cols}
	style:--cols-md={colsMd}
	style:--gap={gap}
	style:--align={align}
	style:--justify={justify}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-grid {
		display: grid;
		grid-template-columns: repeat(var(--cols, 2), 1fr);
		gap: var(--gap, 1rem);
		align-items: var(--align, stretch);
		justify-content: var(--justify, flex-start);
	}

	.layout-grid--responsive {
		grid-template-columns: 1fr;
	}

	@media (min-width: 640px) {
		.layout-grid--responsive {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 768px) {
		.layout-grid--responsive {
			grid-template-columns: repeat(var(--cols-md, 2), 1fr);
		}
	}

	@media (min-width: 1024px) {
		.layout-grid--responsive {
			grid-template-columns: repeat(var(--cols, 2), 1fr);
		}
	}
</style>
