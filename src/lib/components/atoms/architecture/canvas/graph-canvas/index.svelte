<script lang="ts">
	import type { GraphCanvasProps, GraphCanvasPosition } from '$stylist/design-system/contracts';
	import { createGraphCanvasState } from '$stylist/design-system/models/architecture/graph-canvas.svelte';
	import { GRAPH_CANVAS_DEFAULTS } from '$stylist/design-system/defaults';

	let props: GraphCanvasProps = $props();

	const canvasState = createGraphCanvasState(props);

	let canvasRef: HTMLDivElement;
	let isPanning = $state(false);
	let panStart = $state({ x: 0, y: 0 } as GraphCanvasPosition);
	let panOffsetStart = $state({ x: 0, y: 0 } as GraphCanvasPosition);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				width: _width,
				height: _height,
				zoom: _zoom,
				minZoom: _minZoom,
				maxZoom: _maxZoom,
				offsetX: _offsetX,
				offsetY: _offsetY,
				gridSize: _gridSize,
				gridMode: _gridMode,
				gridColor: _gridColor,
				backgroundColor: _backgroundColor,
				panMode: _panMode,
				panEnabled: _panEnabled,
				zoomEnabled: _zoomEnabled,
				selectionEnabled: _selectionEnabled,
				snapToGrid: _snapToGrid,
				snapThreshold: _snapThreshold,
				contentClass: _contentClass,
				gridClass: _gridClass,
				onzoomchange: _onzoomchange,
				onoffsetchange: _onoffsetchange,
				onpanstart: _onpanstart,
				onpan: _onpan,
				onpanend: _onpanend,
				oncanvasclick: _oncanvasclick,
				ondblclick: _ondblclick,
				oncontextmenu: _oncontextmenu,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	function handleWheel(event: WheelEvent) {
		if (!props.zoomEnabled) return;

		event.preventDefault();

		const zoomSensitivity = 0.001;
		const delta = -event.deltaY * zoomSensitivity;
		const newZoom = Math.min(
			Math.max(props.minZoom ?? GRAPH_CANVAS_DEFAULTS.minZoom, canvasState.zoom + delta),
			props.maxZoom ?? GRAPH_CANVAS_DEFAULTS.maxZoom
		);

		if (props.onzoomchange) {
			props.onzoomchange(newZoom);
		}
	}

	function handleMouseDown(event: MouseEvent) {
		const panMode = props.panMode ?? 'drag';
		const isPanButton = event.button === 1; // Middle mouse button
		const isPanEnabled = props.panEnabled ?? true;

		if (!isPanEnabled) return;

		// Pan always or space key
		if (panMode === 'always' || (panMode === 'space' && event.shiftKey) || isPanButton) {
			isPanning = true;
			panStart = { x: event.clientX, y: event.clientY };
			panOffsetStart = { x: canvasState.offset.x, y: canvasState.offset.y };

			if (props.onpanstart) {
				props.onpanstart(event);
			}
		}
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isPanning) return;

		const deltaX = event.clientX - panStart.x;
		const deltaY = event.clientY - panStart.y;

		const newOffset = {
			x: panOffsetStart.x + deltaX,
			y: panOffsetStart.y + deltaY
		};

		if (props.onoffsetchange) {
			props.onoffsetchange(newOffset);
		}

		if (props.onpan) {
			props.onpan(event);
		}
	}

	function handleMouseUp(event: MouseEvent) {
		if (!isPanning) return;

		isPanning = false;

		if (props.onpanend) {
			props.onpanend(event);
		}
	}

	function handleClick(event: MouseEvent) {
		if (props.oncanvasclick) {
			props.oncanvasclick(event);
		}
	}

	function handleDoubleClick(event: MouseEvent) {
		if (props.ondblclick) {
			props.ondblclick(event);
		}
	}

	function handleContextMenu(event: MouseEvent) {
		if (props.oncontextmenu) {
			props.oncontextmenu(event);
		}
	}

	// Snap to grid helper
	function snapToGrid(value: number): number {
		if (!props.snapToGrid) return value;
		const gridSize = canvasState.gridSize;
		const threshold = props.snapThreshold ?? GRAPH_CANVAS_DEFAULTS.snapThreshold;
		const snapped = Math.round(value / gridSize) * gridSize;
		return Math.abs(value - snapped) < threshold ? snapped : value;
	}

	// Expose helper methods
	function resetView() {
		if (props.onzoomchange) props.onzoomchange(1);
		if (props.onoffsetchange) props.onoffsetchange({ x: 0, y: 0 });
	}

	function zoomToFit() {
		// TODO: Implement zoom to fit content
	}

	$effect(() => {
		// Expose methods to parent via custom events if needed
		const customEvent = new CustomEvent('graph-canvas-ready', {
			detail: { resetView, zoomToFit, snapToGrid }
		});
		canvasRef?.dispatchEvent(customEvent);
	});
</script>

<div
	bind:this={canvasRef}
	class={`${canvasState.containerClass}`}
	style={`width: ${canvasState.width}px; height: ${canvasState.height}px; overflow: hidden;`}
	onwheel={handleWheel}
	onmousedown={handleMouseDown}
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
	onmouseleave={handleMouseUp}
	onclick={handleClick}
	ondblclick={handleDoubleClick}
	oncontextmenu={handleContextMenu}
	{...restProps}
>
	<!-- Grid layer -->
	<div
		class={canvasState.gridClass}
		style={`${canvasState.gridStyles} ${canvasState.transformStyle}`}
		aria-hidden="true"
	></div>

	<!-- Content layer -->
	<div class={`${canvasState.contentClass}`} style={canvasState.transformStyle}>
		{@render props.children?.()}
	</div>
</div>

<style>
	:global(.graph-canvas) {
		position: relative;
		display: block;
		overflow: hidden;
		background: var(--background-color, var(--color-background-primary));
		border-radius: var(--border-radius-lg);
		user-select: none;
	}

	/* Grid layer */
	:global(.graph-canvas__grid) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		will-change: transform;
	}

	/* Grid modes */
	:global(.graph-canvas__grid--none) {
		display: none;
	}

	:global(.graph-canvas__grid--dots) {
		background-image: var(--gradient-custom142);
		background-size: var(--grid-size, 20px) var(--grid-size, 20px);
	}

	:global(.graph-canvas__grid--lines) {
		background-image: var(--gradient-custom42);
		background-size: var(--grid-size, 20px) var(--grid-size, 20px);
	}

	:global(.graph-canvas__grid--cross) {
		background-image: var(--gradient-custom52);
		background-size: var(--grid-size, 20px) var(--grid-size, 20px);
	}

	/* Content layer */
	:global(.graph-canvas__content) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		will-change: transform;
		transform-origin: 0 0;
	}

	/* Cursor states */
	:global(.graph-canvas[panning="true"]) {
		cursor: grabbing;
	}

	:global(.graph-canvas[panning="false"]) {
		cursor: grab;
	}

	:global(.graph-canvas[zooming="true"]) {
		cursor: zoom-in;
	}
</style>



