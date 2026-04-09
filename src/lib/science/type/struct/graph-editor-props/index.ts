import type { Snippet } from 'svelte';
import type { GraphToolbarRecipe } from '$stylist/science/interface/recipe/graph-toolbar';
import type { GraphEditorNodeData } from '$stylist/science/type/struct/graph-editor-node-data';
import type { GraphEditorConnectionData } from '$stylist/science/type/struct/graph-editor-connection-data';
import type { GraphEditorPaletteNode } from '$stylist/science/type/struct/graph-editor-palette-node';

export type GraphEditorProps = {
	nodes?: readonly GraphEditorNodeData[];
	connections?: readonly GraphEditorConnectionData[];
	selectedNodeIds?: readonly string[];
	zoom?: number;
	offset?: { x: number; y: number };
	showToolbar?: boolean;
	showMiniMap?: boolean;
	showNodePalette?: boolean;
	showPropertiesPanel?: boolean;
	showGrid?: boolean;
	palettePosition?: { x: number; y: number };
	toolbarItems?: readonly GraphToolbarRecipe[];
	paletteNodes?: GraphEditorPaletteNode[];
	onNodeSelect?: (nodeId: string) => void;
	onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
	onNodeDelete?: (nodeId: string) => void;
	onNodeDuplicate?: (nodeId: string) => void;
	onNodeAdd?: (node: GraphEditorNodeData) => void;
	onPropertyChange?: (nodeId: string, propertyId: string, value: unknown) => void;
	onZoomChange?: (zoom: number) => void;
	onOffsetChange?: (offset: { x: number; y: number }) => void;
	onSave?: (data: {
		nodes: readonly GraphEditorNodeData[];
		connections: readonly GraphEditorConnectionData[];
	}) => void;
	onExport?: () => void;
	onImport?: (data: unknown) => void;
	children?: Snippet;
	class?: string;
};
