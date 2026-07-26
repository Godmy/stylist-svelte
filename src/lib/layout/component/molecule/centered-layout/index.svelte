<script lang="ts">
	import createCenteredLayoutState from '$stylist/layout/function/state/centered-layout/index.svelte';
	import type { CenteredLayoutProps } from '$stylist/layout/interface/recipe/centered-layout';

	let props: CenteredLayoutProps = $props();
	const state = createCenteredLayoutState(props);

	const horizontal = $derived(state.axis === 'both' || state.axis === 'horizontal');
	const vertical = $derived(state.axis === 'both' || state.axis === 'vertical');
</script>

<div
	class={[
		'layout-centered',
		horizontal && 'layout-centered--h',
		vertical && 'layout-centered--v',
		state.fillHeight && 'layout-centered--fill-h',
		state.fillWidth && 'layout-centered--fill-w',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	{...state.restProps}
>
	{#if state.maxWidth}
		<div class="layout-centered__inner" style:--max-width={state.maxWidth}>
			{#if props.children}{@render props.children()}{/if}
		</div>
	{:else if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-centered {
		display: flex;
	}

	.layout-centered--h {
		justify-content: center;
	}

	.layout-centered--v {
		align-items: center;
	}

	.layout-centered--fill-h {
		height: 100%;
	}

	.layout-centered--fill-w {
		width: 100%;
	}

	.layout-centered__inner {
		width: 100%;
		max-width: var(--max-width);
	}
</style>
