<script lang="ts">
	import type { Snippet } from 'svelte';
	import type {
		LiteGraphNodeProps,
		LiteGraphPort,
		ConnectionLineProps,
		GraphToolbarItem,
		LiteGraphNodeProperty
	} from '$stylist';
	import {
		LitegraphCanvas,
		NodePalette
	} from '$stylist';
	import { NodePropertiesPanel } from '$stylist';
	import { IconButton, Separator, Icon } from '$stylist';

	type NodeData = LiteGraphNodeProps & {
		properties?: readonly LiteGraphNodeProperty[];
	};

	type ConnectionData = ConnectionLineProps;

	type PaletteNode = {
		id: string;
		type: string;
		title: string;
		description?: string;
		color?: string;
		category: string;
	};

	type Props = {
		nodes?: readonly NodeData[];
		connections?: readonly ConnectionData[];
		selectedNodeIds?: readonly string[];
		zoom?: number;
		offset?: { x: number; y: number };
		showToolbar?: boolean;
		showMiniMap?: boolean;
		showNodePalette?: boolean;
		showPropertiesPanel?: boolean;
		showGrid?: boolean;
		palettePosition?: { x: number; y: number };
		toolbarItems?: readonly GraphToolbarItem[];
		paletteNodes?: PaletteNode[];
		onNodeSelect?: (nodeId: string) => void;
		onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
		onNodeDelete?: (nodeId: string) => void;
		onNodeDuplicate?: (nodeId: string) => void;
		onNodeAdd?: (node: NodeData) => void;
		onPropertyChange?: (nodeId: string, propertyId: string, value: unknown) => void;
		onZoomChange?: (zoom: number) => void;
		onOffsetChange?: (offset: { x: number; y: number }) => void;
		onSave?: (data: { nodes: readonly NodeData[]; connections: readonly ConnectionData[] }) => void;
		onExport?: () => void;
		onImport?: (data: unknown) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		nodes = [],
		connections = [],
		selectedNodeIds = [],
		zoom = 1,
		offset = { x: 0, y: 0 },
		showToolbar = true,
		showMiniMap = true,
		showNodePalette = true,
		showPropertiesPanel = true,
		showGrid = true,
		palettePosition = { x: 20, y: 80 },
		toolbarItems = [],
		paletteNodes = [],
		onNodeSelect,
		onNodeDrag,
		onNodeDelete,
		onNodeDuplicate,
		onNodeAdd,
		onPropertyChange,
		onZoomChange,
		onOffsetChange,
		onSave,
		onExport,
		onImport,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	let editorRef = $state<HTMLDivElement | null>(null);
	let addButtonAnchorRef = $state<HTMLDivElement | null>(null);
	let anchoredPalettePosition = $state({ ...palettePosition });

	// Состояние UI
	let isPaletteOpen = $state(showNodePalette);
	let isPropertiesPanelOpen = $state(showPropertiesPanel);
	let paletteSearchQuery = $state('');
	let paletteSelectedCategory = $state('all');

	$effect(() => {
		isPaletteOpen = showNodePalette;
	});

	$effect(() => {
		isPropertiesPanelOpen = showPropertiesPanel;
	});

	$effect(() => {
		anchoredPalettePosition = { ...palettePosition };
	});

	// Выбранный узел для панели свойств
	const selectedNode = $derived(
		selectedNodeIds.length > 0
			? nodes.find((n) => n.id === selectedNodeIds[0])
			: undefined
	);

	// Предустановленные узлы для палитры
	const defaultPaletteNodes = $derived<PaletteNode[]>(
		paletteNodes.length > 0 ? paletteNodes : [
			{ id: 'source', type: 'source', title: 'Source', description: 'Data source node', color: 'var(--color-success-500)', category: 'source' },
			{ id: 'processor', type: 'processor', title: 'Processor', description: 'Process data', color: 'var(--color-secondary-500)', category: 'processor' },
			{ id: 'output', type: 'output', title: 'Output', description: 'Output node', color: 'var(--color-warning-500)', category: 'output' },
			{ id: 'gateway', type: 'gateway', title: 'Gateway', description: 'Decision point', color: 'var(--color-info-500)', category: 'gateway' },
			{ id: 'custom', type: 'custom', title: 'Custom', description: 'Custom node', color: 'var(--color-primary-500)', category: 'custom' }
		]
	);

	function handleNodeSelect(nodeId: string) {
		if (onNodeSelect) {
			onNodeSelect(nodeId);
		}
	}

	function handleNodeDrag(nodeId: string, position: { x: number; y: number }) {
		if (onNodeDrag) {
			onNodeDrag(nodeId, position);
		}
	}

	function handleNodeDelete(nodeId: string) {
		if (onNodeDelete) {
			onNodeDelete(nodeId);
		}
	}

	function handleNodeDuplicate(nodeId: string) {
		if (onNodeDuplicate) {
			onNodeDuplicate(nodeId);
		}
	}

	function handlePaletteNodeSelect(item: PaletteNode) {
		if (onNodeAdd) {
			const centerX = (-offset.x + 400) / zoom;
			const centerY = (-offset.y + 300) / zoom;

			onNodeAdd({
				id: `${item.type}-${Date.now()}`,
				title: item.title,
				type: item.type as any,
				x: centerX,
				y: centerY,
				color: item.color,
				inputs: [],
				outputs: [],
				properties: []
			});
		}
		isPaletteOpen = false;
	}

	function handlePropertyChange(propertyId: string, value: unknown) {
		if (selectedNodeIds.length > 0 && onPropertyChange) {
			onPropertyChange(selectedNodeIds[0], propertyId, value);
		}
	}

	function handleSave() {
		if (onSave) {
			onSave({ nodes, connections });
		}
	}

	function recalculatePalettePosition() {
		if (!editorRef || !addButtonAnchorRef) {
			return;
		}

		const editorRect = editorRef.getBoundingClientRect();
		const anchorRect = addButtonAnchorRef.getBoundingClientRect();
		const gap = 12;

		anchoredPalettePosition = {
			x: anchorRect.right - editorRect.left + gap,
			y: anchorRect.top - editorRect.top
		};
	}

	function handleTogglePalette() {
		recalculatePalettePosition();
		isPaletteOpen = !isPaletteOpen;
	}

	function handleToggleProperties() {
		isPropertiesPanelOpen = !isPropertiesPanelOpen;
	}
</script>

<svelte:window onresize={recalculatePalettePosition} />

<div bind:this={editorRef} class={`graph-editor ${className ?? ''}`} {...restProps}>
	<!-- Main Canvas Area -->
	<div class="graph-editor__main">
		<LitegraphCanvas
			nodes={nodes}
			connections={connections}
			selectedNodeIds={selectedNodeIds}
			zoom={zoom}
			offset={offset}
			showGrid={showGrid}
			showToolbar={showToolbar}
			showMiniMap={showMiniMap}
			toolbarItems={toolbarItems}
			onNodeSelect={handleNodeSelect}
			onNodeDrag={handleNodeDrag}
			onNodeDelete={handleNodeDelete}
			onNodeDuplicate={handleNodeDuplicate}
			onNodeAdd={onNodeAdd}
			onZoomChange={onZoomChange}
			onOffsetChange={onOffsetChange}
			onSave={handleSave}
			onExport={onExport}
			onImport={onImport}
		>
			{#if children}
				{@render children?.()}
			{/if}
		</LitegraphCanvas>
	</div>

	<!-- Node Palette -->
	{#if showNodePalette}
		<div class="graph-editor__palette">
			<NodePalette
				isOpen={isPaletteOpen}
				x={anchoredPalettePosition.x}
				y={anchoredPalettePosition.y}
				items={defaultPaletteNodes}
				searchQuery={paletteSearchQuery}
				selectedCategory={paletteSelectedCategory}
				viewMode="list"
				onSearch={(query) => paletteSearchQuery = query}
				onNodeSelect={handlePaletteNodeSelect}
				onClose={() => isPaletteOpen = false}
				onCategorySelect={(category) => paletteSelectedCategory = category}
			/>
		</div>
	{/if}

	<!-- Properties Panel -->
	{#if showPropertiesPanel && isPropertiesPanelOpen && selectedNode}
		<div class="graph-editor__properties">
			<NodePropertiesPanel
				id="properties-panel"
				nodeId={selectedNode.id}
				title="Node Properties"
				properties={selectedNode.properties ?? []}
				size="md"
				editable={true}
				showHeader={true}
				showClose={true}
				onPropertyChange={handlePropertyChange}
				onclose={() => isPropertiesPanelOpen = false}
			/>
		</div>
	{/if}

	<!-- Quick Actions Bar -->
	<div class="graph-editor__quick-actions">
		<div class="graph-editor__quick-anchor" bind:this={addButtonAnchorRef}>
			<IconButton
				variant="primary"
				size="md"
				aria-label="Add node"
				title="Add Node"
				onclick={handleTogglePalette}
			>
				<Icon name="plus" size={20} />
			</IconButton>
		</div>

		<Separator orientation="vertical" />

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Save graph"
			title="Save Graph"
			onclick={handleSave}
		>
			<Icon name="save" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Export graph"
			title="Export Graph"
			onclick={onExport}
		>
			<Icon name="download" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Import graph"
			title="Import Graph"
			onclick={() => onImport?.(null)}
		>
			<Icon name="upload" size={18} />
		</IconButton>

		<Separator orientation="vertical" />

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Toggle properties panel"
			title="Toggle Properties"
			onclick={handleToggleProperties}
		>
			<Icon name="settings" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Help"
			title="Help"
		>
			<Icon name="info" size={18} />
		</IconButton>
	</div>
</div>

<style>
	:global(.graph-editor) {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: var(--color-background-primary);
	}

	:global(.graph-editor__main) {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:global(.graph-editor__palette) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: var(--z-index-layer50);
		pointer-events: none;
	}

	:global(.graph-editor__palette > *) {
		pointer-events: auto;
	}

	:global(.graph-editor__properties) {
		position: absolute;
		top: var(--spacing-4);
		right: var(--spacing-4);
		z-index: var(--z-index-layer50);
	}

	:global(.graph-editor__quick-actions) {
		position: absolute;
		bottom: var(--spacing-6);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3) var(--spacing-4);
		background: color-mix(in srgb, var(--color-background-primary) 95%, transparent);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-custom42);
		z-index: var(--z-index-layer50);
		backdrop-filter: blur(8px);
	}

	:global(.graph-editor__quick-actions .separator) {
		height: var(--spacing-6);
		margin: 0 var(--spacing-1);
	}

	:global(.graph-editor__quick-anchor) {
		display: inline-flex;
	}
</style>

