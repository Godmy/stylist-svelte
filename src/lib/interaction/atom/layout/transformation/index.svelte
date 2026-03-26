<script lang="ts">
	import type { TransformationProps } from '$stylist/interaction/interface/transformation';
	import { createTransformationState } from '$stylist/interaction/state/transformation';

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
		{@render props.children?.()}
	{/if}
</div>
