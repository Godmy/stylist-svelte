import { LITEGRAPH_CANVAS_ICONS } from '$stylist/science/const/record/litegraph-canvas-icons';
import type { GraphToolbarItem, LitegraphCanvasContract, LitegraphPort } from '$stylist/science/interface/record/science';
import type { GraphCanvasRecipe, LiteGraphPort as LitegraphPortRecipe } from '$stylist/science/interface/recipe';
import type { LitegraphCanvasNodeAddPayload } from '$stylist/science/type/struct/litegraph-canvas-node-add-payload';

export function createLitegraphCanvasState(props: LitegraphCanvasContract) {
	let canvasHostRef = $state<HTMLDivElement | null>(null);
	let canvasSize = $state({ width: 800, height: 600 });
	let internalZoom = $state(props.zoom ?? 1);
	let internalOffset = $state({ ...(props.offset ?? { x: 0, y: 0 }) });
	let isGridVisible = $state(props.showGrid ?? true);
	let activeTool = $state<'select' | 'pan' | 'add'>('select');
	let isConnecting = $state(false);
	let connectionStartPort = $state<LitegraphPortRecipe | null>(null);
	let connectionStartPosition = $state<{ x: number; y: number } | null>(null);
	let connectionCurrentPosition = $state<{ x: number; y: number } | null>(null);

	$effect(() => {
		internalZoom = props.zoom ?? 1;
	});

	$effect(() => {
		internalOffset = { ...(props.offset ?? { x: 0, y: 0 }) };
	});

	$effect(() => {
		isGridVisible = props.showGrid ?? true;
	});

	$effect(() => {
		if (!canvasHostRef || typeof ResizeObserver === 'undefined') {
			return;
		}

		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			if (!entry) {
				return;
			}

			canvasSize = {
				width: Math.max(320, Math.floor(entry.contentRect.width)),
				height: Math.max(240, Math.floor(entry.contentRect.height))
			};
		});

		observer.observe(canvasHostRef);

		return () => observer.disconnect();
	});

	function updateZoom(nextZoom: number) {
		const clamped = Math.min(Math.max(nextZoom, 0.1), 3);
		internalZoom = clamped;
		props.onZoomChange?.(clamped);
	}

	function updateOffset(nextOffset: { x: number; y: number }) {
		internalOffset = nextOffset;
		props.onOffsetChange?.(nextOffset);
	}

	function toCanvasPosition(clientX: number, clientY: number) {
		const rect = canvasHostRef?.getBoundingClientRect();
		if (!rect) {
			return { x: clientX, y: clientY };
		}

		return {
			x: (clientX - rect.left - internalOffset.x) / internalZoom,
			y: (clientY - rect.top - internalOffset.y) / internalZoom
		};
	}

	function handleZoomIn() {
		updateZoom(internalZoom + 0.1);
	}

	function handleZoomOut() {
		updateZoom(internalZoom - 0.1);
	}

	function handleZoomToFit() {
		if ((props.nodes ?? []).length === 0) {
			updateZoom(1);
			updateOffset({ x: 0, y: 0 });
			return;
		}

		const padding = 80;
		const nodes = props.nodes ?? [];
		const minX = Math.min(...nodes.map((node) => node.x ?? 0));
		const minY = Math.min(...nodes.map((node) => node.y ?? 0));
		const maxX = Math.max(...nodes.map((node) => (node.x ?? 0) + (node.width ?? 220)));
		const maxY = Math.max(...nodes.map((node) => (node.y ?? 0) + (typeof node.height === 'number' ? node.height : 140)));
		const contentWidth = Math.max(1, maxX - minX + padding * 2);
		const contentHeight = Math.max(1, maxY - minY + padding * 2);
		const nextZoom = Math.min(canvasSize.width / contentWidth, canvasSize.height / contentHeight, 1.5);

		updateZoom(nextZoom);
		updateOffset({
			x: -(minX - padding) * nextZoom,
			y: -(minY - padding) * nextZoom
		});
	}

	function handleToggleGrid() {
		isGridVisible = !isGridVisible;
	}

	function handleDeleteSelected() {
		if (!props.onNodeDelete) {
			return;
		}

		(props.selectedNodeIds ?? []).forEach((id) => props.onNodeDelete?.(id));
	}

	function handleDuplicateSelected() {
		if (!props.onNodeDuplicate) {
			return;
		}

		(props.selectedNodeIds ?? []).forEach((id) => props.onNodeDuplicate?.(id));
	}

	function handleToolbarItemClick(itemId: string) {
		if (itemId === 'tool-select') {
			activeTool = 'select';
			return;
		}

		if (itemId === 'tool-pan') {
			activeTool = 'pan';
			return;
		}

		if (itemId === 'tool-add') {
			activeTool = activeTool === 'add' ? 'select' : 'add';
		}
	}

	function handlePortConnectionStart(port: LitegraphPortRecipe, event: MouseEvent) {
		isConnecting = true;
		connectionStartPort = port;
		const origin = toCanvasPosition(event.clientX, event.clientY);
		connectionStartPosition = origin;
		connectionCurrentPosition = origin;
		props.onConnectionStart?.(port as LitegraphPort, event);
	}

	function handlePortConnectionEnd(port: LitegraphPortRecipe) {
		if (isConnecting && connectionStartPort && props.onConnectionEnd && connectionStartPort.id !== port.id) {
			props.onConnectionEnd(connectionStartPort as LitegraphPort, port as LitegraphPort);
		}

		isConnecting = false;
		connectionStartPort = null;
		connectionStartPosition = null;
		connectionCurrentPosition = null;
	}

	function handleCanvasMouseMove(event: MouseEvent) {
		if (isConnecting) {
			connectionCurrentPosition = toCanvasPosition(event.clientX, event.clientY);
		}
	}

	function handleCanvasMouseUp() {
		if (!isConnecting) {
			return;
		}

		isConnecting = false;
		connectionStartPort = null;
		connectionStartPosition = null;
		connectionCurrentPosition = null;
	}

	function handleCanvasClick(event: MouseEvent) {
		if (activeTool !== 'add' || !props.allowAddNodes || !props.onNodeAdd) {
			return;
		}

		const position = toCanvasPosition(event.clientX, event.clientY);
		props.onNodeAdd({
			id: `node-${Date.now()}`,
			title: 'Node',
			type: 'custom',
			x: Math.round(position.x),
			y: Math.round(position.y),
			color: 'var(--color-secondary-500)',
			inputs: [{ id: 'in-1', name: 'in', direction: 'input', type: 'any', label: 'In' }],
			outputs: [{ id: 'out-1', name: 'out', direction: 'output', type: 'any', label: 'Out' }],
			properties: []
		} as LitegraphCanvasNodeAddPayload);
		activeTool = 'select';
	}

	const defaultToolbarItems = $derived<GraphToolbarItem[]>([
		{ id: 'tool-select', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.select, label: 'Select', tooltip: 'Select tool', active: activeTool === 'select' },
		{ id: 'tool-pan', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.pan, label: 'Pan', tooltip: 'Pan tool', active: activeTool === 'pan' },
		{ id: 'tool-add', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.add, label: 'Add', tooltip: 'Add node on canvas click', active: activeTool === 'add', disabled: !props.allowAddNodes },
		{ id: 'separator-1', type: 'separator' },
		{ id: 'zoom-in', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.zoomIn, label: 'Zoom In', onclick: handleZoomIn },
		{ id: 'zoom-out', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.zoomOut, label: 'Zoom Out', onclick: handleZoomOut },
		{ id: 'zoom-fit', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.zoomFit, label: 'Fit', onclick: handleZoomToFit },
		{ id: 'separator-2', type: 'separator' },
		{ id: 'toggle-grid', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.grid, label: 'Grid', active: isGridVisible, onclick: handleToggleGrid },
		{ id: 'separator-3', type: 'separator' },
		{ id: 'save', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.save, label: 'Save', onclick: props.onSave },
		{ id: 'export', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.export, label: 'Export', onclick: props.onExport },
		{ id: 'import', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.import, label: 'Import', onclick: () => props.onImport?.(null) },
		{ id: 'separator-4', type: 'separator' },
		{ id: 'duplicate', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.duplicate, label: 'Duplicate', disabled: (props.selectedNodeIds ?? []).length === 0 || !props.allowDuplicateNodes, onclick: handleDuplicateSelected },
		{ id: 'delete', type: 'button', icon: LITEGRAPH_CANVAS_ICONS.delete, label: 'Delete', disabled: (props.selectedNodeIds ?? []).length === 0 || !props.allowDeleteNodes, onclick: handleDeleteSelected }
	]);

	const allToolbarItems = $derived(
		(props.toolbarItems ?? []).length > 0 ? props.toolbarItems ?? [] : defaultToolbarItems
	);
	const effectivePanMode = $derived<'drag' | 'space'>(
		activeTool === 'pan' ? 'drag' : (props.panMode ?? 'drag')
	);
	const effectiveGridMode = $derived<GraphCanvasRecipe['gridMode']>(
		props.gridMode === 'none' || props.gridMode === 'dots' || props.gridMode === 'lines' || props.gridMode === 'cross'
			? 'dot'
			: (props.gridMode ?? 'dot')
	);

	return {
		get canvasHostRef() {
			return canvasHostRef;
		},
		set canvasHostRef(value: HTMLDivElement | null) {
			canvasHostRef = value;
		},
		get canvasSize() {
			return canvasSize;
		},
		get internalZoom() {
			return internalZoom;
		},
		get internalOffset() {
			return internalOffset;
		},
		get isGridVisible() {
			return isGridVisible;
		},
		get isConnecting() {
			return isConnecting;
		},
		get connectionStartPosition() {
			return connectionStartPosition;
		},
		get connectionCurrentPosition() {
			return connectionCurrentPosition;
		},
		get allToolbarItems() {
			return allToolbarItems;
		},
		get effectivePanMode() {
			return effectivePanMode;
		},
		get effectiveGridMode() {
			return effectiveGridMode;
		},
		updateZoom,
		updateOffset,
		handleToolbarItemClick,
		handlePortConnectionStart,
		handlePortConnectionEnd,
		handleCanvasMouseMove,
		handleCanvasMouseUp,
		handleCanvasClick
	};
}

export default createLitegraphCanvasState;
