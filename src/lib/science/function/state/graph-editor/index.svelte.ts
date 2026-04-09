import type { GraphEditorProps } from '$stylist/science/type/struct/graph-editor-props';
import type { GraphEditorPaletteNode } from '$stylist/science/type/struct/graph-editor-palette-node';

export function createGraphEditorState(props: GraphEditorProps) {
	let editorRef = $state<HTMLDivElement | null>(null);
	let addButtonAnchorRef = $state<HTMLDivElement | null>(null);
	let anchoredPalettePosition = $state({ ...(props.palettePosition ?? { x: 20, y: 80 }) });
	let isPaletteOpen = $state(props.showNodePalette ?? true);
	let isPropertiesPanelOpen = $state(props.showPropertiesPanel ?? true);
	let paletteSearchQuery = $state('');
	let paletteSelectedCategory = $state('all');

	$effect(() => {
		isPaletteOpen = props.showNodePalette ?? true;
	});

	$effect(() => {
		isPropertiesPanelOpen = props.showPropertiesPanel ?? true;
	});

	$effect(() => {
		anchoredPalettePosition = { ...(props.palettePosition ?? { x: 20, y: 80 }) };
	});

	const selectedNode = $derived(
		(props.selectedNodeIds ?? []).length > 0
			? (props.nodes ?? []).find((node) => node.id === props.selectedNodeIds?.[0])
			: undefined
	);

	const defaultPaletteNodes = $derived<GraphEditorPaletteNode[]>(
		(props.paletteNodes ?? []).length > 0
			? [...(props.paletteNodes ?? [])]
			: [
					{ id: 'source', type: 'source', title: 'Source', description: 'Data source node', color: 'var(--color-success-500)', category: 'source' },
					{ id: 'processor', type: 'processor', title: 'Processor', description: 'Process data', color: 'var(--color-secondary-500)', category: 'processor' },
					{ id: 'output', type: 'output', title: 'Output', description: 'Output node', color: 'var(--color-warning-500)', category: 'output' },
					{ id: 'gateway', type: 'gateway', title: 'Gateway', description: 'Decision point', color: 'var(--color-info-500)', category: 'gateway' },
					{ id: 'custom', type: 'custom', title: 'Custom', description: 'Custom node', color: 'var(--color-primary-500)', category: 'custom' }
				]
	);

	function handleNodeSelect(nodeId: string) {
		props.onNodeSelect?.(nodeId);
	}

	function handleNodeDrag(nodeId: string, position: { x: number; y: number }) {
		props.onNodeDrag?.(nodeId, position);
	}

	function handleNodeDelete(nodeId: string) {
		props.onNodeDelete?.(nodeId);
	}

	function handleNodeDuplicate(nodeId: string) {
		props.onNodeDuplicate?.(nodeId);
	}

	function handlePaletteNodeSelect(item: GraphEditorPaletteNode) {
		if (props.onNodeAdd) {
			const offset = props.offset ?? { x: 0, y: 0 };
			const zoom = props.zoom ?? 1;
			const centerX = (-offset.x + 400) / zoom;
			const centerY = (-offset.y + 300) / zoom;

			props.onNodeAdd({
				id: `${item.type}-${Date.now()}`,
				title: item.title,
				type: item.type as never,
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
		if ((props.selectedNodeIds ?? []).length > 0) {
			props.onPropertyChange?.(props.selectedNodeIds?.[0] ?? '', propertyId, value);
		}
	}

	function handleSave() {
		props.onSave?.({
			nodes: props.nodes ?? [],
			connections: props.connections ?? []
		});
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

	return {
		get editorRef() {
			return editorRef;
		},
		set editorRef(value: HTMLDivElement | null) {
			editorRef = value;
		},
		get addButtonAnchorRef() {
			return addButtonAnchorRef;
		},
		set addButtonAnchorRef(value: HTMLDivElement | null) {
			addButtonAnchorRef = value;
		},
		get anchoredPalettePosition() {
			return anchoredPalettePosition;
		},
		get isPaletteOpen() {
			return isPaletteOpen;
		},
		set isPaletteOpen(value: boolean) {
			isPaletteOpen = value;
		},
		get isPropertiesPanelOpen() {
			return isPropertiesPanelOpen;
		},
		set isPropertiesPanelOpen(value: boolean) {
			isPropertiesPanelOpen = value;
		},
		get paletteSearchQuery() {
			return paletteSearchQuery;
		},
		set paletteSearchQuery(value: string) {
			paletteSearchQuery = value;
		},
		get paletteSelectedCategory() {
			return paletteSelectedCategory;
		},
		set paletteSelectedCategory(value: string) {
			paletteSelectedCategory = value;
		},
		get selectedNode() {
			return selectedNode;
		},
		get defaultPaletteNodes() {
			return defaultPaletteNodes;
		},
		handleNodeSelect,
		handleNodeDrag,
		handleNodeDelete,
		handleNodeDuplicate,
		handlePaletteNodeSelect,
		handlePropertyChange,
		handleSave,
		recalculatePalettePosition,
		handleTogglePalette,
		handleToggleProperties
	};
}

export default createGraphEditorState;
