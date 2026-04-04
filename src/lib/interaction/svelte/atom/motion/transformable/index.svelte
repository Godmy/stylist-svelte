<script lang="ts">
	import type { TransformProps } from '$stylist/interaction/interface/proto/transformable';
	import { createTransformableState } from '$stylist/interaction/function/state/transformable';

	let props: TransformProps = $props();
	const state = createTransformableState(props);
</script>

<div
	class={state.classes}
	style={state.inlineStyle}
	{...state.restProps}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
	onmousedown={state.handleMouseDown}
	onmouseup={state.handleMouseUp}
>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
