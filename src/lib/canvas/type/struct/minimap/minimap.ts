import type { LiteGraphNodeProps } from '$stylist/information/interface/recipe/litegraph-node';
import type { Snippet } from 'svelte';

export type MinimapViewport = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export type MinimapBounds = {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
};

export type MinimapNodeRect = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export type MinimapOffset = {
	x: number;
	y: number;
};

export type MinimapPoint = {
	x: number;
	y: number;
};

export type MinimapProps = {
	nodes?: readonly LiteGraphNodeProps[];
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
