<script lang="ts">
	import type { GraphCanvasProps } from '$stylist/canvas/type/struct/graph-canvas/graph-canvas-props';
	import { GraphCanvasStyleManager } from '$stylist/canvas/class/style-manager/graph-canvas';
	import { createGraphCanvasState } from '$stylist/canvas/function/state/graph-canvas';
	let props: GraphCanvasProps = $props();
	const state = createGraphCanvasState(props);

	let canvasRef: HTMLDivElement;
	let contentRef: HTMLDivElement;

	$effect(() => {
		const customEvent = new CustomEvent('graph-canvas-ready', {
			detail: {
				resetView: state.resetView,
				zoomToFit: () => state.zoomToFit(canvasRef, contentRef),
				snapToGrid: state.snapToGrid
			}
		});
		canvasRef?.dispatchEvent(customEvent);
	});
</script>

<div
	bind:this={canvasRef}
	class={state.containerClass}
	style={`width: ${state.width}px; height: ${state.height}px; overflow: hidden;`}
	onwheel={state.handleWheel}
	onmousedown={state.handleMouseDown}
	onmousemove={state.handleMouseMove}
	onmouseup={state.handleMouseUp}
	onmouseleave={state.handleMouseUp}
	onclick={state.handleClick}
	ondblclick={state.handleDoubleClick}
	oncontextmenu={state.handleContextMenu}
	{...state.restProps}
>
	<!-- Grid layer -->
	<div
		class={GraphCanvasStyleManager.getGridClass((props.gridMode ?? 'none') as import('$stylist/architecture/type/enum/marker').TokenMarker, props.gridClass)}
		style={`${GraphCanvasStyleManager.getGridStyles(state.gridSize, props.gridColor ?? '')} ${GraphCanvasStyleManager.getTransformStyles(state.offset.x, state.offset.y, state.zoom)}`}
		aria-hidden="true"
	></div>

	<!-- Content layer -->
	<div bind:this={contentRef} class={GraphCanvasStyleManager.getContentClass(props.contentClass)} style={GraphCanvasStyleManager.getTransformStyles(state.offset.x, state.offset.y, state.zoom)}>
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	</div>
</div>
