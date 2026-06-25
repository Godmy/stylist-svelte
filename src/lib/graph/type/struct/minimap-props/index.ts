import type { RecipeLitegraphNode } from '$stylist/graph/interface/recipe/litegraph-node';
import type { Snippet } from 'svelte';
import type { MinimapOffset } from '$stylist/graph/type/struct/minimap-offset';
import type { MinimapPoint } from '$stylist/graph/type/struct/minimap-point';

export type MinimapProps = {
	nodes?: readonly RecipeLitegraphNode[];
	zoom?: number;
	offset?: MinimapOffset;
	width?: number;
	height?: number;
	miniMapZoom?: number;
	showZoomControls?: boolean;
	showViewport?: boolean;
	nodeColor?: string;
	activeNodeColor?: string;
	viewportColor?: string;
	backgroundColor?: string;
	gridColor?: string;
	onOffsetChange?: (offset: MinimapOffset) => void;
	onZoomChange?: (zoom: number) => void;
	onMapClick?: (position: MinimapPoint) => void;
	children?: Snippet;
	class?: string;
};
