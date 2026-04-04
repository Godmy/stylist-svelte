<script lang="ts">
	import { createSkeletonRectangleState } from '$stylist/feedback/function/state/skeleton-rectangle/skeleton-rectangle.svelte';
	import type { SkeletonRectangleProps } from '$stylist/feedback/interface/component/skeleton-rectangle/other/skeleton-rectangle';

	let props: SkeletonRectangleProps = $props();
	const state = createSkeletonRectangleState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>
