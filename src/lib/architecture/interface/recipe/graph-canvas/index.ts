import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { GraphPosition2D } from '$stylist/architecture/type/struct/graph-position-2d';

export interface RecipeGraphCanvas
	extends ComputeIntersectAll<[SlotTheme, SlotChildren, HTMLAttributes<HTMLDivElement>]> {
	width?: number;
	height?: number;
	zoom?: number;
	offsetX?: number;
	offsetY?: number;
	gridSize?: number;
	gridMode?: string;
	gridColor?: string;
	backgroundColor?: string;
	snapToGrid?: boolean;
	minZoom?: number;
	maxZoom?: number;
	panMode?: 'drag' | 'space' | 'always';
	panEnabled?: boolean;
	zoomEnabled?: boolean;
	snapThreshold?: number;
	gridClass?: string;
	contentClass?: string;
	onzoomchange?: (zoom: number) => void;
	onoffsetchange?: (offset: GraphPosition2D) => void;
	onpanstart?: (event: MouseEvent) => void;
	onpan?: (event: MouseEvent) => void;
	onpanend?: (event: MouseEvent) => void;
	oncanvasclick?: (event: MouseEvent) => void;
}
