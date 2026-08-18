<script lang="ts">
	import createSplitLayoutState from './state.svelte';
	import type { RecipeSplitLayout } from '$stylist/layout/interface/recipe/split-layout';

	let props: RecipeSplitLayout = $props();
	const state = createSplitLayoutState(props);

	const GAP: Record<string, string> = {
		none: '0',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem'
	};
	const PANEL_SIZE: Record<string, string> = {
		'1/4': '25%',
		'1/3': '33.333333%',
		'2/5': '40%',
		'1/2': '50%',
		'3/5': '60%',
		'2/3': '66.666667%',
		'3/4': '75%'
	};

	const gap = $derived(GAP[state.gap] ?? '1rem');
	const primaryWidth = $derived(PANEL_SIZE[state.primarySize] ?? '66.666667%');
	const secondaryWidth = $derived(PANEL_SIZE[state.secondarySize] ?? '33.333333%');
</script>

<div
	class={[
		'layout-split',
		state.direction === 'vertical' && 'layout-split--vertical',
		state.responsive && 'layout-split--responsive',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	style:--gap={gap}
	style:--primary-width={primaryWidth}
	style:--secondary-width={secondaryWidth}
	{...state.restProps}
>
	<div class="layout-split__primary">
		{@render props.primary()}
	</div>
	<div class="layout-split__secondary">
		{@render props.secondary()}
	</div>
</div>

<style>
	.layout-split {
		display: flex;
		flex-direction: row;
		gap: var(--gap, 1rem);
	}

	.layout-split--vertical {
		flex-direction: column;
	}

	.layout-split--vertical .layout-split__primary,
	.layout-split--vertical .layout-split__secondary {
		flex-basis: auto;
	}

	.layout-split__primary {
		flex: 0 1 var(--primary-width);
		min-width: 0;
	}

	.layout-split__secondary {
		flex: 0 1 var(--secondary-width);
		min-width: 0;
	}

	.layout-split--responsive {
		flex-direction: column;
	}

	.layout-split--responsive .layout-split__primary,
	.layout-split--responsive .layout-split__secondary {
		flex-basis: auto;
	}

	@media (min-width: 1024px) {
		.layout-split--responsive {
			flex-direction: row;
		}

		.layout-split--responsive .layout-split__primary {
			flex-basis: var(--primary-width);
		}

		.layout-split--responsive .layout-split__secondary {
			flex-basis: var(--secondary-width);
		}
	}
</style>
