<script lang="ts">
	import { createSkeletonTextState } from '$stylist/notification/function/state/skeleton-text';
	import type { SkeletonTextProps } from '$stylist/notification/interface/component/skeleton-text/other/skeleton-text';

	let props: SkeletonTextProps = $props();
	const state = createSkeletonTextState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>
