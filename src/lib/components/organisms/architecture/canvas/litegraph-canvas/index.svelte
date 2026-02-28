<script lang="ts">
	import type { Snippet } from 'svelte';
	import type {
		LiteGraphNodeProps,
		LiteGraphPort,
		ConnectionLineProps,
		GraphToolbarItem,
		GraphCanvasProps
	} from '$stylist/design-system/contracts';
	import { Separator, GraphCanvas, IconButton } from '$stylist/components/atoms';
	import { GraphToolbar, LitegraphNode, ConnectionLine } from '$stylist/components/molecules';

	const ZoomIn = 'zoom-in';
	const ZoomOut = 'zoom-out';
	const Maximize = 'maximize';
	const Grid3X3 = 'grid-3-x-3';
	const MousePointer2 = 'mouse-pointer-2';
	const Hand = 'hand';
	const Plus = 'plus';
	const Trash2 = 'trash-2';
	const Copy = 'copy';
	const Save = 'save';
	const Download = 'download';
	const Upload = 'upload';


	type Props = {
		/** Р Р€Р В·Р В»РЎвЂ№ Р С–РЎР‚Р В°РЎвЂћР В° */
		nodes?: readonly LiteGraphNodeProps[];
		/** Р РЋР С•Р ВµР Т‘Р С‘Р Р…Р ВµР Р…Р С‘РЎРЏ */
		connections?: readonly ConnectionLineProps[];
		/** Р вЂ™РЎвЂ№Р В±РЎР‚Р В°Р Р…Р Р…РЎвЂ№Р Вµ РЎС"Р В·Р В»РЎвЂ№ */
		selectedNodeIds?: readonly string[];
		/** Р СљР В°РЎРѓРЎв‚¬РЎвЂљР В°Р В± */
		zoom?: number;
		/** Р РЋР СР ВµРЎвЂ°Р ВµР Р…Р С‘Р Вµ */
		offset?: { x: number; y: number };
		/** Р СџР С•Р С”Р В°Р В·РЎвЂ№Р Р†Р В°РЎвЂљРЎРЉ РЎРѓР ВµРЎвЂљР С”РЎС“ */
		showGrid?: boolean;
		/** Р В Р ВµР В¶Р С‘Р С РЎРѓР ВµРЎвЂљР С”Р С‘ */
		gridMode?: GraphCanvasProps['gridMode'];
		/** Р В Р ВµР В¶Р С‘Р С Р С—Р В°Р Р…Р С•РЎР‚Р В°Р СР С‘РЎР‚Р С•Р Р†Р В°Р Р…Р С‘РЎРЏ */
		panMode?: GraphCanvasProps['panMode'];
		/** Р СџР С•Р С”Р В°Р В·РЎвЂ№Р Р†Р В°РЎвЂљРЎРЉ Р С—Р В°Р Р…Р ВµР В»РЎРЉ Р С‘Р Р…РЎРѓРЎвЂљРЎР‚РЎС“Р СР ВµР Р…РЎвЂљР С•Р Р† */
		showToolbar?: boolean;
		/** Р СџР С•Р С”Р В°Р В·РЎвЂ№Р Р†Р В°РЎвЂљРЎРЉ Р СР С‘Р Р…Р С‘-Р С”Р В°РЎР‚РЎвЂљРЎС“ */
		showMiniMap?: boolean;
		/** Р В­Р В»Р ВµР СР ВµР Р…РЎвЂљРЎвЂ№ Р С—Р В°Р Р…Р ВµР В»Р С‘ Р С‘Р Р…РЎРѓРЎвЂљРЎР‚РЎС“Р СР ВµР Р…РЎвЂљР С•Р Р† */
		toolbarItems?: readonly GraphToolbarItem[];
		/** Р СљР С•Р В¶Р Р…Р С• Р В»Р С‘ Р Т‘Р С•Р В±Р В°Р Р†Р В»РЎРЏРЎвЂљРЎРЉ РЎС“Р В·Р В»РЎвЂ№ */
		allowAddNodes?: boolean;
		/** Р СљР С•Р В¶Р Р…Р С• Р В»Р С‘ РЎС“Р Т‘Р В°Р В»РЎРЏРЎвЂљРЎРЉ РЎС“Р В·Р В»РЎвЂ№ */
		allowDeleteNodes?: boolean;
		/** Р СљР С•Р В¶Р Р…Р С• Р В»Р С‘ Р Т‘РЎС“Р В±Р В»Р С‘РЎР‚Р С•Р Р†Р В°РЎвЂљРЎРЉ РЎС“Р В·Р В»РЎвЂ№ */
		allowDuplicateNodes?: boolean;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р Р†РЎвЂ№Р Т‘Р ВµР В»Р ВµР Р…Р С‘РЎРЏ РЎС“Р В·Р В»Р В° */
		onNodeSelect?: (nodeId: string) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р С—Р ВµРЎР‚Р ВµР СР ВµРЎвЂ°Р ВµР Р…Р С‘РЎРЏ РЎС“Р В·Р В»Р В° */
		onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” РЎС“Р Т‘Р В°Р В»Р ВµР Р…Р С‘РЎРЏ РЎС“Р В·Р В»Р В° */
		onNodeDelete?: (nodeId: string) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р Т‘РЎС“Р В±Р В»Р С‘РЎР‚Р С•Р Р†Р В°Р Р…Р С‘РЎРЏ РЎС“Р В·Р В»Р В° */
		onNodeDuplicate?: (nodeId: string) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р Р…Р В°РЎвЂЎР В°Р В»Р В° Р С—Р С•Р Т‘Р С”Р В»РЎР‹РЎвЂЎР ВµР Р…Р С‘РЎРЏ */
		onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р В·Р В°Р Р†Р ВµРЎР‚РЎв‚¬Р ВµР Р…Р С‘РЎРЏ Р С—Р С•Р Т‘Р С”Р В»РЎР‹РЎвЂЎР ВµР Р…Р С‘РЎРЏ */
		onConnectionEnd?: (fromPort: LiteGraphPort, toPort: LiteGraphPort) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р С‘Р В·Р СР ВµР Р…Р ВµР Р…Р С‘РЎРЏ Р СР В°РЎРѓРЎв‚¬РЎвЂљР В°Р В±Р В° */
		onZoomChange?: (zoom: number) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р С‘Р В·Р СР ВµР Р…Р ВµР Р…Р С‘РЎРЏ РЎРѓР СР ВµРЎвЂ°Р ВµР Р…Р С‘РЎРЏ */
		onOffsetChange?: (offset: { x: number; y: number }) => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” РЎРѓР С•РЎвЂ¦РЎР‚Р В°Р Р…Р ВµР Р…Р С‘РЎРЏ */
		onSave?: () => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” РЎРЊР С”РЎРѓР С—Р С•РЎР‚РЎвЂљР В° */
		onExport?: () => void;
		/** Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С” Р С‘Р СР С—Р С•РЎР‚РЎвЂљР В° */
		onImport?: (data: unknown) => void;
		/** Р вЂќР С•РЎвЂЎР ВµРЎР‚Р Р…Р С‘Р в„– Р С”Р С•Р Р…РЎвЂљР ВµР Р…РЎвЂљ */
		children?: Snippet;
		/** Р С™Р С•Р Р…РЎвЂљР ВµР Р…РЎвЂљ Р С—Р В°Р Р…Р ВµР В»Р С‘ Р С‘Р Р…РЎРѓРЎвЂљРЎР‚РЎС“Р СР ВµР Р…РЎвЂљР С•Р Р† */
		toolbarContent?: Snippet;
		class?: string;
	};

	let {
		nodes = [],
		connections = [],
		selectedNodeIds = [],
		zoom = 1,
		offset = { x: 0, y: 0 },
		showGrid = true,
		gridMode = 'dots',
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
	}: Props = $props();

	// Р РЋР С•РЎРѓРЎвЂљР С•РЎРЏР Р…Р С‘Р Вµ
	let isConnecting = $state(false);
	let connectionStartPort = $state<LiteGraphPort | null>(null);
	let connectionCurrentPosition = $state<{ x: number; y: number } | null>(null);

	// Р С’Р С”РЎвЂљР С‘Р Р†Р Р…РЎвЂ№Р в„– Р С‘Р Р…РЎРѓРЎвЂљРЎР‚РЎС“Р СР ВµР Р…РЎвЂљ
	let activeTool = $state<'select' | 'pan' | 'add'>('select');

	// Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С”Р С‘ Р С‘Р Р…РЎРѓРЎвЂљРЎР‚РЎС“Р СР ВµР Р…РЎвЂљР С•Р Р†
	function handleZoomIn() {
		if (onZoomChange) {
			onZoomChange(Math.min(zoom + 0.1, 3));
		}
	}

	function handleZoomOut() {
		if (onZoomChange) {
			onZoomChange(Math.max(zoom - 0.1, 0.1));
		}
	}

	function handleZoomToFit() {
		// TODO: Р В Р ВµР В°Р В»Р С‘Р В·Р С•Р Р†Р В°РЎвЂљРЎРЉ zoom to fit
		if (onZoomChange) onZoomChange(1);
		if (onOffsetChange) onOffsetChange({ x: 0, y: 0 });
	}

	function handleToggleGrid() {
		// Р СџР ВµРЎР‚Р ВµР С”Р В»РЎР‹РЎвЂЎР ВµР Р…Р С‘Р Вµ РЎР‚Р ВµР В¶Р С‘Р СР В° РЎРѓР ВµРЎвЂљР С”Р С‘
	}

	function handleAddNode() {
		activeTool = activeTool === 'add' ? 'select' : 'add';
	}

	function handleDeleteSelected() {
		if (selectedNodeIds.length > 0 && onNodeDelete) {
			selectedNodeIds.forEach((id) => onNodeDelete(id));
		}
	}

	function handleDuplicateSelected() {
		if (selectedNodeIds.length > 0 && onNodeDuplicate) {
			selectedNodeIds.forEach((id) => onNodeDuplicate(id));
		}
	}

	// Р С›Р В±РЎР‚Р В°Р В±Р С•РЎвЂљРЎвЂЎР С‘Р С”Р С‘ РЎРѓР С•Р ВµР Т‘Р С‘Р Р…Р ВµР Р…Р С‘Р в„–
	function handlePortConnectionStart(port: LiteGraphPort, event: MouseEvent) {
		isConnecting = true;
		connectionStartPort = port;
		connectionCurrentPosition = { x: event.clientX, y: event.clientY };

		if (onConnectionStart) {
			onConnectionStart(port, event);
		}
	}

	function handlePortConnectionEnd(port: LiteGraphPort, event: MouseEvent) {
		if (isConnecting && connectionStartPort && onConnectionEnd) {
			// Р СњР Вµ РЎРѓР С•Р ВµР Т‘Р С‘Р Р…РЎРЏРЎвЂљРЎРЉ Р С—Р С•РЎР‚РЎвЂљ РЎРѓ РЎРѓР В°Р СР С‘Р С РЎРѓР С•Р В±Р С•Р в„–
			if (connectionStartPort.id !== port.id) {
				onConnectionEnd(connectionStartPort, port);
			}
		}

		isConnecting = false;
		connectionStartPort = null;
		connectionCurrentPosition = null;
	}

	function handleCanvasClick(event: MouseEvent) {
		if (activeTool === 'add') {
			// TODO: Р вЂќР С•Р В±Р В°Р Р†Р С‘РЎвЂљРЎРЉ РЎС“Р В·Р ВµР В» Р Р† Р С—Р С•Р В·Р С‘РЎвЂ Р С‘РЎР‹ Р С”Р В»Р С‘Р С”Р В°
			console.log('Add node at', event.clientX, event.clientY);
		}
	}

	// Р вЂќР ВµРЎвЂћР С•Р В»РЎвЂљР Р…РЎвЂ№Р Вµ РЎРЊР В»Р ВµР СР ВµР Р…РЎвЂљРЎвЂ№ toolbar
	const defaultToolbarItems = $derived<GraphToolbarItem[]>([
		{
			id: 'tool-select',
			type: 'button',
			icon: MousePointer2,
			label: 'Select',
			tooltip: 'Select Tool (V)',
			active: activeTool === 'select',
			disabled: false
		},
		{
			id: 'tool-pan',
			type: 'button',
			icon: Hand,
			label: 'Pan',
			tooltip: 'Pan Tool (H)',
			active: activeTool === 'pan',
			disabled: false
		},
		{
			id: 'tool-add',
			type: 'button',
			icon: Plus,
			label: 'Add',
			tooltip: 'Add Node (N)',
			active: activeTool === 'add',
			disabled: !allowAddNodes
		},
		{ id: 'separator-1', type: 'separator' },
		{
			id: 'zoom-in',
			type: 'button',
			icon: ZoomIn,
			label: 'Zoom In',
			tooltip: 'Zoom In (Ctrl+)',
			onclick: handleZoomIn
		},
		{
			id: 'zoom-out',
			type: 'button',
			icon: ZoomOut,
			label: 'Zoom Out',
			tooltip: 'Zoom Out (Ctrl-)',
			onclick: handleZoomOut
		},
		{
			id: 'zoom-fit',
			type: 'button',
			icon: Maximize,
			label: 'Fit',
			tooltip: 'Zoom to Fit',
			onclick: handleZoomToFit
		},
		{ id: 'separator-2', type: 'separator' },
		{
			id: 'toggle-grid',
			type: 'button',
			icon: Grid3X3,
			label: 'Grid',
			tooltip: 'Toggle Grid',
			active: showGrid,
			onclick: handleToggleGrid
		},
		{ id: 'separator-3', type: 'separator' },
		{
			id: 'duplicate',
			type: 'button',
			icon: Copy,
			label: 'Duplicate',
			tooltip: 'Duplicate Selected (Ctrl+D)',
			disabled: selectedNodeIds.length === 0 || !allowDuplicateNodes,
			onclick: handleDuplicateSelected
		},
		{
			id: 'delete',
			type: 'button',
			icon: Trash2,
			label: 'Delete',
			tooltip: 'Delete Selected (Del)',
			disabled: selectedNodeIds.length === 0 || !allowDeleteNodes,
			onclick: handleDeleteSelected
		}
	]);

	const allToolbarItems = $derived(
		toolbarItems.length > 0 ? toolbarItems : defaultToolbarItems
	);
</script>

<div class={`litegraph-canvas ${className ?? ''}`} {...restProps}>
	{#if showToolbar}
		<div class="litegraph-canvas__toolbar">
			<GraphToolbar
				id="litegraph-toolbar"
				items={allToolbarItems}
				orientation="horizontal"
				size="sm"
			>
				{#if toolbarContent}
					{@render toolbarContent?.()}
				{/if}
			</GraphToolbar>
		</div>
	{/if}

	<div class="litegraph-canvas__container">
		<GraphCanvas
			width={800}
			height={600}
			zoom={zoom}
			offsetX={offset.x}
			offsetY={offset.y}
			gridMode={showGrid ? gridMode : 'none'}
			panMode={panMode}
			snapToGrid={true}
			onzoomchange={onZoomChange}
			onoffsetchange={onOffsetChange}
			oncanvasclick={handleCanvasClick}
			class="litegraph-canvas__canvas"
		>
			<!-- Р В Р ВµР Р…Р Т‘Р ВµРЎР‚Р С‘Р С РЎРѓР С•Р ВµР Т‘Р С‘Р Р…Р ВµР Р…Р С‘РЎРЏ -->
			<svg class="litegraph-canvas__connections" style="overflow: visible;">
				{#each connections as connection}
					<ConnectionLine
						id={connection.id}
						startX={connection.startX}
						startY={connection.startY}
						endX={connection.endX}
						endY={connection.endY}
						type={connection.type}
						color={connection.color}
						active={connection.active}
						onclick={connection.onclick}
					/>
				{/each}

				{#if isConnecting && connectionStartPort && connectionCurrentPosition}
					<ConnectionLine
						id="connection-dragging"
						startX={connectionStartPort.direction === 'output' ? 100 : 0}
						startY={50}
						endX={connectionCurrentPosition.x}
						endY={connectionCurrentPosition.y}
						type="bezier"
						color="#3b82f6"
						active={true}
						showArrow={false}
						animated={true}
					/>
				{/if}
			</svg>

			<!-- Р В Р ВµР Р…Р Т‘Р ВµРЎР‚Р С‘Р С РЎС"Р В·Р В»РЎвЂ№ -->
			{#each nodes as node}
				<LitegraphNode
					id={node.id}
					title={node.title}
					type={node.type}
					x={node.x}
					y={node.y}
					color={node.color}
					selected={selectedNodeIds.includes(node.id)}
					inputs={node.inputs}
					outputs={node.outputs}
					properties={node.properties}
					draggable={true}
					selectable={true}
					deletable={allowDeleteNodes}
					duplicable={allowDuplicateNodes}
					onselect={onNodeSelect}
					ondrag={onNodeDrag}
					ondelete={onNodeDelete}
					onduplicate={onNodeDuplicate}
					onConnectionStart={handlePortConnectionStart}
					onConnectionEnd={handlePortConnectionEnd}
				/>
			{/each}

			{#if children}
				{@render children?.()}
			{/if}
		</GraphCanvas>

		{#if showMiniMap}
			<div class="litegraph-canvas__minimap">
				<!-- TODO: Р В Р ВµР В°Р В»Р С‘Р В·Р С•Р Р†Р В°РЎвЂљРЎРЉ Р СР С‘Р Р…Р С‘-Р С”Р В°РЎР‚РЎвЂљРЎС“ -->
				<div class="litegraph-canvas__minimap-placeholder">MiniMap</div>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.litegraph-canvas) {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #0f0f0f;
		border-radius: 8px;
		overflow: hidden;
	}

	:global(.litegraph-canvas__toolbar) {
		display: flex;
		align-items: center;
		padding: 0.75rem;
		background: #141414;
		border-bottom: 1px solid #374151;
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
		z-index: 5;
	}

	:global(.litegraph-canvas__connections > *) {
		pointer-events: stroke;
	}

	:global(.litegraph-canvas__minimap) {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		width: 200px;
		height: 150px;
		background: #1e1e1e;
		border: 1px solid #374151;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgb(0 0 0 / 0.3);
		overflow: hidden;
		z-index: 10;
	}

	:global(.litegraph-canvas__minimap-placeholder) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-size: 0.75rem;
		color: #6b7280;
	}
</style>

