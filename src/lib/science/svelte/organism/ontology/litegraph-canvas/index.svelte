<script lang="ts">
	import type { Snippet } from 'svelte';
	import type {
		LitegraphNode as LitegraphNodeType,
		LitegraphConnection,
		GraphToolbarItem,
		LitegraphNodeProperty as LitegraphNodePropertyType,
		LitegraphPort as LitegraphPortType
	} from '$stylist/science/interface/record/science';
	import type { GraphCanvasRecipe } from '$stylist';
	import type { LiteGraphPort as LitegraphPortRecipe, LitegraphNodeProperty as LitegraphNodePropertyRecipe, LitegraphNodeRecipe } from '$stylist';
	import { GraphCanvas } from '$stylist';
	import { GraphToolbar, LitegraphNode, ConnectionLine } from '$stylist';
	import { Minimap } from '$stylist';

	import type { LitegraphCanvasContract } from '$stylist/science/interface/record/science';

	const ICONS = {
		zoomIn: 'zoom-in',
		zoomOut: 'zoom-out',
		zoomFit: 'maximize',
		grid: 'grid-3-x-3',
		select: 'mouse-pointer-2',
		pan: 'hand',
		add: 'plus',
		save: 'save',
		export: 'download',
		import: 'upload',
		delete: 'trash-2',
		duplicate: 'copy'
	} as const;

	type NodeAddPayload = LitegraphNodeType & {
		properties?: readonly LitegraphNodePropertyRecipe[];
	};

	let props: LitegraphCanvasContract = $props();
	let {
		nodes = [],
		connections = [],
		selectedNodeIds = [],
		zoom = 1,
		offset = { x: 0, y: 0 },
		showGrid = true,
		gridMode = 'dot',
		panMode = 'drag',
		showToolbar = true,
		showMiniMap = false,
		toolbarItems = [],
		allowAddNodes = true,
		allowDeleteNodes = true,
		allowDuplicateNodes = true,
		onNodeSelect,
		onNodeDrag,
		onNodeDelete,
		onNodeDuplicate,
		onNodeAdd,
		onConnectionStart,
		onConnectionEnd,
		onZoomChange,
		onOffsetChange,
		onSave,
		onExport,
		onImport,
		class: className = '',
		children,
		toolbarContent,
		...restProps
	} = props;

	let canvasHostRef = $state<HTMLDivElement | null>(null);
	let canvasSize = $state({ width: 800, height: 600 });
	let internalZoom = $state(zoom);
	let internalOffset = $state({ ...offset });
	let isGridVisible = $state(showGrid);
	let activeTool = $state<'select' | 'pan' | 'add'>('select');
	let isConnecting = $state(false);
	let connectionStartPort = $state<LitegraphPortRecipe | null>(null);
	let connectionStartPosition = $state<{ x: number; y: number } | null>(null);
	let connectionCurrentPosition = $state<{ x: number; y: number } | null>(null);

	$effect(() => {
		internalZoom = zoom;
	});

	$effect(() => {
		internalOffset = { ...offset };
	});

	$effect(() => {
		isGridVisible = showGrid;
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

			const width = Math.max(320, Math.floor(entry.contentRect.width));
			const height = Math.max(240, Math.floor(entry.contentRect.height));
			canvasSize = { width, height };
		});

		observer.observe(canvasHostRef);
		return () => observer.disconnect();
	});

	function updateZoom(nextZoom: number) {
		const clamped = Math.min(Math.max(nextZoom, 0.1), 3);
		internalZoom = clamped;
		onZoomChange?.(clamped);
	}

	function updateOffset(nextOffset: { x: number; y: number }) {
		internalOffset = nextOffset;
		onOffsetChange?.(nextOffset);
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
		if (nodes.length === 0) {
			updateZoom(1);
			updateOffset({ x: 0, y: 0 });
			return;
		}

		const padding = 80;
		const minX = Math.min(...nodes.map((node) => node.x ?? 0));
		const minY = Math.min(...nodes.map((node) => node.y ?? 0));
		const maxX = Math.max(...nodes.map((node) => (node.x ?? 0) + (node.width ?? 220)));
		const maxY = Math.max(
			...nodes.map((node) => (node.y ?? 0) + (typeof node.height === 'number' ? node.height : 140))
		);

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
		if (!onNodeDelete) {
			return;
		}

		selectedNodeIds.forEach((id) => onNodeDelete(id));
	}

	function handleDuplicateSelected() {
		if (!onNodeDuplicate) {
			return;
		}

		selectedNodeIds.forEach((id) => onNodeDuplicate(id));
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
		onConnectionStart?.(port as LitegraphPortType, event);
	}

	function handlePortConnectionEnd(port: LitegraphPortRecipe, _event: MouseEvent) {
		if (isConnecting && connectionStartPort && onConnectionEnd && connectionStartPort.id !== port.id) {
			onConnectionEnd(connectionStartPort as LitegraphPortType, port as LitegraphPortType);
		}

		isConnecting = false;
		connectionStartPort = null;
		connectionStartPosition = null;
		connectionCurrentPosition = null;
	}

	function handleCanvasMouseMove(event: MouseEvent) {
		if (!isConnecting) {
			return;
		}

		connectionCurrentPosition = toCanvasPosition(event.clientX, event.clientY);
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
		if (activeTool !== 'add' || !allowAddNodes || !onNodeAdd) {
			return;
		}

		const position = toCanvasPosition(event.clientX, event.clientY);
		onNodeAdd({
			id: `node-${Date.now()}`,
			title: 'Node',
			type: 'custom',
			x: Math.round(position.x),
			y: Math.round(position.y),
			color: 'var(--color-secondary-500)',
			inputs: [{ id: 'in-1', name: 'in', direction: 'input', type: 'any', label: 'In' }],
			outputs: [{ id: 'out-1', name: 'out', direction: 'output', type: 'any', label: 'Out' }],
			properties: []
		});
		activeTool = 'select';
	}

	const defaultToolbarItems = $derived<GraphToolbarItem[]>([
		{
			id: 'tool-select',
			type: 'button',
			icon: ICONS.select,
			label: 'Select',
			tooltip: 'Select tool',
			active: activeTool === 'select'
		},
		{
			id: 'tool-pan',
			type: 'button',
			icon: ICONS.pan,
			label: 'Pan',
			tooltip: 'Pan tool',
			active: activeTool === 'pan'
		},
		{
			id: 'tool-add',
			type: 'button',
			icon: ICONS.add,
			label: 'Add',
			tooltip: 'Add node on canvas click',
			active: activeTool === 'add',
			disabled: !allowAddNodes
		},
		{ id: 'separator-1', type: 'separator' },
		{ id: 'zoom-in', type: 'button', icon: ICONS.zoomIn, label: 'Zoom In', onclick: handleZoomIn },
		{ id: 'zoom-out', type: 'button', icon: ICONS.zoomOut, label: 'Zoom Out', onclick: handleZoomOut },
		{ id: 'zoom-fit', type: 'button', icon: ICONS.zoomFit, label: 'Fit', onclick: handleZoomToFit },
		{ id: 'separator-2', type: 'separator' },
		{
			id: 'toggle-grid',
			type: 'button',
			icon: ICONS.grid,
			label: 'Grid',
			active: isGridVisible,
			onclick: handleToggleGrid
		},
		{ id: 'separator-3', type: 'separator' },
		{ id: 'save', type: 'button', icon: ICONS.save, label: 'Save', onclick: onSave },
		{ id: 'export', type: 'button', icon: ICONS.export, label: 'Export', onclick: onExport },
		{
			id: 'import',
			type: 'button',
			icon: ICONS.import,
			label: 'Import',
			onclick: () => onImport?.(null)
		},
		{ id: 'separator-4', type: 'separator' },
		{
			id: 'duplicate',
			type: 'button',
			icon: ICONS.duplicate,
			label: 'Duplicate',
			disabled: selectedNodeIds.length === 0 || !allowDuplicateNodes,
			onclick: handleDuplicateSelected
		},
		{
			id: 'delete',
			type: 'button',
			icon: ICONS.delete,
			label: 'Delete',
			disabled: selectedNodeIds.length === 0 || !allowDeleteNodes,
			onclick: handleDeleteSelected
		}
	]);

	const allToolbarItems = $derived(toolbarItems.length > 0 ? toolbarItems : defaultToolbarItems);
	const effectivePanMode = $derived<'drag' | 'space'>(
		activeTool === 'pan' ? 'drag' : panMode
	);
	const effectiveGridMode = $derived<GraphCanvasRecipe['gridMode']>(
		gridMode === 'none' || gridMode === 'dots' || gridMode === 'lines' || gridMode === 'cross' ? 'dot' : gridMode
	);
</script>

<svelte:window onmousemove={handleCanvasMouseMove} onmouseup={handleCanvasMouseUp} />

<div class={`litegraph-canvas ${className ?? ''}`} {...restProps}>
	{#if showToolbar}
		<div class="litegraph-canvas__toolbar">
			<GraphToolbar
				id="litegraph-toolbar"
				items={allToolbarItems}
				orientation="horizontal"
				size="sm"
				onItemClick={handleToolbarItemClick}
			>
				{#if toolbarContent}
					{@render toolbarContent?.()}
				{/if}
			</GraphToolbar>
		</div>
	{/if}

	<div class="litegraph-canvas__container" bind:this={canvasHostRef}>
		<GraphCanvas
			width={canvasSize.width}
			height={canvasSize.height}
			zoom={internalZoom}
			minZoom={0.1}
			maxZoom={3}
			offsetX={internalOffset.x}
			offsetY={internalOffset.y}
			gridMode={effectiveGridMode}
			gridColor={isGridVisible ? undefined : 'transparent'}
			panMode={effectivePanMode}
			snapToGrid={true}
			onzoomchange={updateZoom}
			onoffsetchange={updateOffset}
			oncanvasclick={handleCanvasClick}
			class="litegraph-canvas__canvas"
		>
			<svg class="litegraph-canvas__connections" style="overflow: visible;">
				{#each connections as connection}
					<ConnectionLine
						id={connection.id}
						startX={connection.startX ?? 0}
						startY={connection.startY ?? 0}
						endX={connection.endX ?? 0}
						endY={connection.endY ?? 0}
						type={connection.type as 'step' | 'straight' | 'curve' | 'polyline' | 'bezier' | 'arc' | 'loop' | 'elbow' | 'smooth-step' | undefined}
						color={connection.color}
						active={connection.active}
						onclick={connection.onclick}
					/>
				{/each}

				{#if isConnecting && connectionStartPosition && connectionCurrentPosition}
					<ConnectionLine
						id="connection-dragging"
						startX={connectionStartPosition.x}
						startY={connectionStartPosition.y}
						endX={connectionCurrentPosition.x}
						endY={connectionCurrentPosition.y}
						type="bezier"
						color="var(--color-primary-500)"
						active={true}
						showArrow={false}
						animated={true}
					/>
				{/if}
			</svg>

			{#each nodes as node}
				<LitegraphNode
					id={node.id}
					title={node.title}
					type={node.type as 'default' | 'custom' | 'source' | 'processor' | 'output' | 'gateway'}
					x={node.x ?? 0}
					y={node.y ?? 0}
					color={node.color}
					selected={selectedNodeIds.includes(node.id)}
					inputs={node.inputs ? [...node.inputs] as LitegraphPortRecipe[] : undefined}
					outputs={node.outputs ? [...node.outputs] as LitegraphPortRecipe[] : undefined}
					properties={node.properties ? [...node.properties] as any : undefined}
					draggable={true}
					selectable={true}
					deletable={allowDeleteNodes}
					duplicable={allowDuplicateNodes}
					onNodeSelect={onNodeSelect ? (nodeId) => onNodeSelect(nodeId ?? '') : undefined}
					onNodeDrag={onNodeDrag ? (nodeId, position) => onNodeDrag(nodeId ?? '', position) : undefined}
					ondelete={onNodeDelete ? (nodeId) => onNodeDelete(nodeId ?? '') : undefined}
					onduplicate={onNodeDuplicate ? (nodeId) => onNodeDuplicate(nodeId ?? '') : undefined}
					onConnectionStart={handlePortConnectionStart}
					onConnectionEnd={handlePortConnectionEnd}
				/>
			{/each}

			{#if children}
				{@render children?.()}
			{/if}
		</GraphCanvas>

		{#if showMiniMap}
			<div class="litegraph-canvas__minimap" style="width: 220px; height: 150px;">
				<Minimap>
					{#if true}{/if}
				</Minimap>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.litegraph-canvas) {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--color-background-primary);
		border-radius: var(--border-radius-lg);
		overflow: hidden;
	}

	:global(.litegraph-canvas__toolbar) {
		display: flex;
		align-items: center;
		padding: var(--spacing-3);
		background: color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%);
		border-bottom: 1px solid var(--color-border-primary);
	}

	:global(.litegraph-canvas__container) {
		position: relative;
		flex: 1 1 auto;
		display: flex;
		overflow: hidden;
	}

	:global(.litegraph-canvas__canvas) {
		flex: 1 1 auto;
	}

	:global(.litegraph-canvas__connections) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: var(--z-index-layer5);
	}

	:global(.litegraph-canvas__connections > *) {
		pointer-events: stroke;
	}

	:global(.litegraph-canvas__minimap) {
		position: absolute;
		bottom: var(--spacing-4);
		right: var(--spacing-4);
		z-index: var(--z-index-docked);
	}
</style>

