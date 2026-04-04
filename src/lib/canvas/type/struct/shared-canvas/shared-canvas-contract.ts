import type { SharedCanvasProps } from '$stylist/interaction/interface/component/shared-canvas/other';

export type SharedCanvasContract = SharedCanvasProps & {
	selectedTool?: string;
	selectedColor?: string;
	showZoomControls?: boolean;
};
