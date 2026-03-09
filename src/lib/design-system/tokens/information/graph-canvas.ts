import type { MarkerType } from '../architecture/markers';
import { PAN_MODES } from '../architecture/pan-modes';

export const GRAPH_CANVAS_DEFAULTS = {
	gridSize: 20,
	gridColor: 'rgba(128, 128, 128, 0.2)',
	backgroundColor: '#1e1e1e',
	minZoom: 0.1,
	maxZoom: 3,
	zoomStep: 0.1,
	snapThreshold: 10,
	panButton: 'middle'
} as const;

export type GraphCanvasGridMode = MarkerType;
export type GraphCanvasPanMode = (typeof PAN_MODES)[number];
