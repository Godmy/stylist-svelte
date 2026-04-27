<script lang="ts">
	import type { ViewportProps } from '$stylist/canvas/type/struct/viewport/viewport-props';
	import { createViewportState } from '$stylist/canvas/function/state/viewport';
	import Stage from '$stylist/canvas/component/atom/stage/index.svelte';
	import Grid from '$stylist/layout/component/atom/grid/index.svelte';

	let props: ViewportProps = $props();
	const state = createViewportState(props);
</script>

<div
	class={state.classes}
	role="button"
	aria-roledescription="pan and zoom viewport"
	aria-label="Interactive viewport"
	aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown + - 0"
	tabindex="0"
	onmousedown={state.handleMouseDown}
	onmousemove={state.handleMouseMove}
	onmouseup={state.handleMouseUp}
	onmouseleave={state.handleMouseUp}
	onwheel={state.handleWheel}
	onkeydown={state.handleKeyDown}
	{...state.restProps}
>
	<Grid zoom={state.camera.zoom} visible={state.showGrid} />
	<Stage camera={state.camera} worldWidth={state.worldWidth} worldHeight={state.worldHeight}>
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	</Stage>
</div>
