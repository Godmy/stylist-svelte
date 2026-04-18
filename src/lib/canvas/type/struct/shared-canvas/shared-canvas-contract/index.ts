import type { SlotSharedCanvas as SharedCanvasProps } from '$stylist/canvas/interface/slot/shared-canvas';

export type SharedCanvasContract = SharedCanvasProps & {
	selectedTool?: string;
	selectedColor?: string;
	showZoomControls?: boolean;
};
