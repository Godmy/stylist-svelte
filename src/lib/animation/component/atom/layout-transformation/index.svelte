<script lang="ts">
	import type { SlotTransformation as TransformationProps } from '$stylist/animation/interface/slot/transformation';
	import createTransformationState from '$stylist/animation/function/state/transformation/index.svelte';

	let props: TransformationProps = $props();
	const state = createTransformationState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				scale,
				rotate,
				translateX,
				translateY,
				skewX,
				skewY,
				transformOrigin,
				duration,
				easing,
				delay,
				animateOnHover,
				animateOnClick,
				animateInfinite,
				disabled,
				...rest
			} = props;
			return rest;
		})()
	);

	const inlineStyle = $derived(
		Object.entries(state.styles as unknown as Record<string, string | number>)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ')
	);

	function handleMouseEnter() {
		state.setHovered(true);
	}

	function handleMouseLeave() {
		state.setHovered(false);
	}

	function handleMouseDown() {
		state.setActive(true);
	}

	function handleMouseUp() {
		state.setActive(false);
	}
</script>

<div
	class={state.classes}
	style={inlineStyle}
	{...restProps}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
>
	{#if props.children}
		{#if props.children}{@render props.children()}{/if}
	{/if}
</div>

<style>
	.c-layout-transformation {
		position: relative;
		display: inline-block;
	}

	.c-layout-transformation--disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
