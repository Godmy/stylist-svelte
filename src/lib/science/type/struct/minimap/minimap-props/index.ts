import type { LiteGraphNodeProps } from '$stylist/science/type/struct/lite-graph-node-props';
import type { Snippet } from 'svelte';
import type { MinimapOffset } from '../minimap-offset';
import type { MinimapPoint } from '../minimap-point';

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
