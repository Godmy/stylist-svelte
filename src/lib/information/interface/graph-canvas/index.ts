import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenMarker } from '$stylist/architecture/type/token/marker';
import type { TokenPanMode } from '$stylist/architecture/type/token/pan-mode';

export interface GraphCanvasProps extends HtmlAttributesBase<HTMLDivElement> {
	width?: number;
	height?: number;
	zoom?: number;
	minZoom?: number;
	maxZoom?: number;
	offsetX?: number;
	offsetY?: number;
	gridSize?: number;
	gridMode?: TokenMarker;
	gridColor?: string;
	backgroundColor?: string;
	panMode?: TokenPanMode;
	panEnabled?: boolean;
	zoomEnabled?: boolean;
	selectionEnabled?: boolean;
	snapToGrid?: boolean;
	snapThreshold?: number;
	contentClass?: string;
	gridClass?: string;
	onzoomchange?: (zoom: number) => void;
	onoffsetchange?: (offset: { x: number; y: number }) => void;
	onpanstart?: (event: MouseEvent) => void;
	onpan?: (event: MouseEvent) => void;
	onpanend?: (event: MouseEvent) => void;
	oncanvasclick?: (event: MouseEvent) => void;
	ondblclick?: (event: MouseEvent) => void;
	oncontextmenu?: (event: MouseEvent) => void;
	children?: Snippet;
}

export interface GraphCanvasPosition {
	x: number;
	y: number;
}

export interface GraphCanvasViewport {
	position: GraphCanvasPosition;
	zoom: number;
	width: number;
	height: number;
}





