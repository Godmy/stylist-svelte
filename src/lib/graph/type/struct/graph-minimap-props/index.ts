import type { RecipeLitegraphNode } from '$stylist/graph/interface/recipe/litegraph-node';
import type { Snippet } from 'svelte';
import type { GraphPosition2D } from '../graph-position-2d';

export type GraphMinimapProps = {
	nodes?: readonly RecipeLitegraphNode[];
	zoom?: number;
	offset?: GraphPosition2D;
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
	onOffsetChange?: (offset: GraphPosition2D) => void;
	onZoomChange?: (zoom: number) => void;
	onMapClick?: (position: GraphPosition2D) => void;
	children?: Snippet;
	class?: string;
};
