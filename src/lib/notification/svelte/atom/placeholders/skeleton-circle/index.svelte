<script lang="ts">
	import { createSkeletonCircleState } from '$stylist/notification/function/state/skeleton-circle';
	import type { SkeletonCircleProps } from '$stylist/notification/interface/component/skeleton-circle/other/skeleton-circle';

	let props: SkeletonCircleProps = $props();
	const state = createSkeletonCircleState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>
