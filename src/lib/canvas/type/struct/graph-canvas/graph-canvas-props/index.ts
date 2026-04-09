import type { GraphCanvasPosition } from '$stylist/science/interface/recipe/graph-canvas';
import type { GraphCanvasContract } from '..';

export type GraphCanvasProps = GraphCanvasContract & {
	minZoom?: number;
	maxZoom?: number;
	panMode?: 'drag' | 'space' | 'always';
	panEnabled?: boolean;
	zoomEnabled?: boolean;
	snapThreshold?: number;
	onzoomchange?: (zoom: number) => void;
	onoffsetchange?: (offset: GraphCanvasPosition) => void;
	onpanstart?: (event: MouseEvent) => void;
	onpan?: (event: MouseEvent) => void;
	onpanend?: (event: MouseEvent) => void;
	oncanvasclick?: (event: MouseEvent) => void;
};
