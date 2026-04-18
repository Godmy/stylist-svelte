<script lang="ts">
	import { createSkeletonRectangleState } from '$stylist/notification/function/state/skeleton-rectangle';
	import type { SkeletonRectangleProps } from '$stylist/notification/type/struct/skeleton-rectangle-props';

	let props: SkeletonRectangleProps = $props();
	const state = createSkeletonRectangleState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>
