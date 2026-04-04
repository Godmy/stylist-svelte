<script lang="ts">
	import type { GraphCanvasContract } from '$stylist/canvas/type/struct/graph-canvas/graph-canvas-contract';
	import { GraphCanvasStyleManager } from '$stylist/canvas/class/style-manager/graph-canvas';
	import { createGraphCanvasState } from '$stylist/canvas/function/state/graph-canvas';
	import { DEFAULT_GRAPH_CANVAS } from '$stylist/information/const/struct/graph-canvas';

	type GraphCanvasProps = GraphCanvasContract & {
		minZoom?: number;
		maxZoom?: number;
		panMode?: 'drag' | 'space' | 'always';
		panEnabled?: boolean;
		zoomEnabled?: boolean;
		snapThreshold?: number;
		onzoomchange?: (zoom: number) => void;
		onoffsetchange?: (offset: { x: number; y: number }) => void;
		onpanstart?: (event: MouseEvent) => void;
		onpan?: (event: MouseEvent) => void;
		onpanend?: (event: MouseEvent) => void;
		oncanvasclick?: (event: MouseEvent) => void;
	};

	const contract: GraphCanvasProps = $props();

	const canvasState = createGraphCanvasState(contract as any);

	let canvasRef: HTMLDivElement;
	let contentRef: HTMLDivElement;
	let isPanning = $state(false);
	let panStart = $state({ x: 0, y: 0 });
	let panOffsetStart = $state({ x: 0, y: 0 });

	function handleWheel(event: WheelEvent) {
		if (!contract.zoomEnabled) return;

		event.preventDefault();

		const zoomSensitivity = 0.001;
		const delta = -event.deltaY * zoomSensitivity;
		const newZoom = Math.min(
			Math.max(contract.minZoom ?? DEFAULT_GRAPH_CANVAS.minZoom, canvasState.zoom + delta),
			contract.maxZoom ?? DEFAULT_GRAPH_CANVAS.maxZoom
		);

		if (contract.onzoomchange) {
			contract.onzoomchange(newZoom);
		}
	}

	function handleMouseDown(event: MouseEvent) {
		const panMode = contract.panMode ?? 'drag';
		const isPanButton = event.button === 1;
		const isPanEnabled = contract.panEnabled ?? true;

		if (!isPanEnabled) return;

		if (panMode === 'always' || (panMode === 'space' && event.shiftKey) || isPanButton) {
			isPanning = true;
			panStart = { x: event.clientX, y: event.clientY };
			panOffsetStart = { x: canvasState.offset.x, y: canvasState.offset.y };

			if (contract.onpanstart) {
				contract.onpanstart(event);
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

		if (contract.onoffsetchange) {
			contract.onoffsetchange(newOffset);
		}

		if (contract.onpan) {
			contract.onpan(event);
		}
	}

	function handleMouseUp(event: MouseEvent) {
		if (!isPanning) return;

		isPanning = false;

		if (contract.onpanend) {
			contract.onpanend(event);
		}
	}

	function handleClick(event: MouseEvent) {
		if (contract.oncanvasclick) {
			contract.oncanvasclick(event);
		}
	}

	function handleDoubleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		if (contract.ondblclick) {
			contract.ondblclick(event);
		}
	}

	function handleContextMenu(event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		if (contract.oncontextmenu) {
			contract.oncontextmenu(event);
		}
	}

	function snapToGrid(value: number): number {
		if (!contract.snapToGrid) return value;
		const gridSize = canvasState.gridSize;
		const threshold = contract.snapThreshold ?? DEFAULT_GRAPH_CANVAS.snapThreshold;
		const snapped = Math.round(value / gridSize) * gridSize;
		return Math.abs(value - snapped) < threshold ? snapped : value;
	}

	function resetView() {
		if (contract.onzoomchange) contract.onzoomchange(1);
		if (contract.onoffsetchange) contract.onoffsetchange({ x: 0, y: 0 });
	}

	function zoomToFit() {
		if (!canvasRef || !contentRef) return;

		const children = Array.from(contentRef.children).filter(
			(node): node is HTMLElement => node instanceof HTMLElement
		);

		if (children.length === 0) {
			resetView();
			return;
		}

		let minLeft = Number.POSITIVE_INFINITY;
		let minTop = Number.POSITIVE_INFINITY;
		let maxRight = Number.NEGATIVE_INFINITY;
		let maxBottom = Number.NEGATIVE_INFINITY;

		for (const child of children) {
			const left = child.offsetLeft;
			const top = child.offsetTop;
			const width = child.offsetWidth;
			const height = child.offsetHeight;

			minLeft = Math.min(minLeft, left);
			minTop = Math.min(minTop, top);
			maxRight = Math.max(maxRight, left + width);
			maxBottom = Math.max(maxBottom, top + height);
		}

		if (!Number.isFinite(minLeft) || !Number.isFinite(minTop)) return;

		const contentWidth = Math.max(1, maxRight - minLeft);
		const contentHeight = Math.max(1, maxBottom - minTop);
		const padding = canvasState.gridSize * 2;
		const availableWidth = Math.max(1, canvasState.width - padding * 2);
		const availableHeight = Math.max(1, canvasState.height - padding * 2);
		const minZoom = contract.minZoom ?? DEFAULT_GRAPH_CANVAS.minZoom;
		const maxZoom = contract.maxZoom ?? DEFAULT_GRAPH_CANVAS.maxZoom;
		const fitZoom = Math.min(
			maxZoom,
			Math.max(minZoom, Math.min(availableWidth / contentWidth, availableHeight / contentHeight))
		);

		const centeredOffset = {
			x: (canvasState.width - contentWidth * fitZoom) / 2 - minLeft * fitZoom,
			y: (canvasState.height - contentHeight * fitZoom) / 2 - minTop * fitZoom
		};

		contract.onzoomchange?.(fitZoom);
		contract.onoffsetchange?.(centeredOffset);
	}

	$effect(() => {
		const customEvent = new CustomEvent('graph-canvas-ready', {
			detail: { resetView, zoomToFit, snapToGrid }
		});
		canvasRef?.dispatchEvent(customEvent);
	});
</script>

<div
	bind:this={canvasRef}
	class={GraphCanvasStyleManager.getContainerClass(String(contract.class ?? undefined))}
	style={`width: ${canvasState.width}px; height: ${canvasState.height}px; overflow: hidden;`}
	onwheel={handleWheel}
	onmousedown={handleMouseDown}
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
	onmouseleave={handleMouseUp}
	onclick={handleClick}
	ondblclick={handleDoubleClick}
	oncontextmenu={handleContextMenu}
	{...canvasState.restProps}
>
	<!-- Grid layer -->
	<div
		class={GraphCanvasStyleManager.getGridClass(contract.gridMode ?? 'none', contract.gridClass)}
		style={`${GraphCanvasStyleManager.getGridStyles(canvasState.gridSize, contract.gridColor ?? '')} ${GraphCanvasStyleManager.getTransformStyle(canvasState.zoom, canvasState.offset.x, canvasState.offset.y)}`}
		aria-hidden="true"
	></div>

	<!-- Content layer -->
	<div bind:this={contentRef} class={GraphCanvasStyleManager.getContentClass(contract.contentClass)} style={GraphCanvasStyleManager.getTransformStyle(canvasState.zoom, canvasState.offset.x, canvasState.offset.y)}>
		{@render contract.children?.()}
	</div>
</div>
