<script lang="ts">
	import type { SpacerProps } from '$stylist/layout/interface/recipe/spacer';
	import createSpacerState from '$stylist/layout/function/state/spacer/index.svelte';

	let props: SpacerProps = $props();
	const state = createSpacerState(props);
</script>

<div
	class={['layout-spacer', `layout-spacer--${state.axis}`, props.class].filter(Boolean).join(' ')}
	style:--spacer-size={state.sizeValue}
	aria-hidden="true"
	{...state.restProps}
></div>

<style>
	.layout-spacer {
		display: inline-block;
		flex-shrink: 0;
	}

	.layout-spacer--horizontal {
		width: var(--spacer-size, 1rem);
		height: auto;
	}

	.layout-spacer--vertical {
		width: auto;
		height: var(--spacer-size, 1rem);
		display: block;
	}

	.layout-spacer--both {
		width: var(--spacer-size, 1rem);
		height: var(--spacer-size, 1rem);
	}
</style>
