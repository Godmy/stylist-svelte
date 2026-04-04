<script lang="ts">
	import { createSkeletonCircleState } from '$stylist/feedback/function/state/skeleton-circle/skeleton-circle.svelte';
	import type { SkeletonCircleProps } from '$stylist/feedback/interface/component/skeleton-circle/other/skeleton-circle';

	let props: SkeletonCircleProps = $props();
	const state = createSkeletonCircleState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>
