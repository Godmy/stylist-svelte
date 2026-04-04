<script lang="ts">
	import type { HoverProps } from '$stylist/interaction/interface/proto/hoverable';
	import { createHoverableState } from '$stylist/interaction/function/state/hoverable';

	let props: HoverProps = $props();
	const state = createHoverableState(props);
</script>

<div
	class={state.classes}
	{...state.restProps}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
