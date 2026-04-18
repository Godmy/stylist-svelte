<script lang="ts">
	import type { SlotTransformable as TransformProps } from '$stylist/animation/interface/slot/transformable';
	import { createTransformableState } from '$stylist/animation/function/state/transformable';

	let props: TransformProps = $props();
	const state = createTransformableState(props);
</script>

<div
	class={state.classes}
	style={state.inlineStyle !== 'none' ? `transform: ${state.inlineStyle}; transition: transform 300ms ease-in-out;` : undefined}
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
