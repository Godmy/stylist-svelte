import type { RecipeWorkspaceNode } from '$stylist/workspace/interface/recipe/workspace-node';
import type { Snippet } from 'svelte';
import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export type MinimapProps = {
	nodes?: readonly RecipeWorkspaceNode[];
	zoom?: number;
	offset?: Point2D;
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
	onOffsetChange?: (offset: Point2D) => void;
	onZoomChange?: (zoom: number) => void;
	onMapClick?: (position: Point2D) => void;
	children?: Snippet;
	class?: string;
};
