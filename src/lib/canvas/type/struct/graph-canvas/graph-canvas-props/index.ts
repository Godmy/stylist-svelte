import type {
	GraphCanvasPosition,
	GraphCanvasRecipe as GraphCanvasPropsBase
} from '$stylist/science/interface/recipe/graph-canvas';

export type GraphCanvasProps = GraphCanvasPropsBase & {
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
