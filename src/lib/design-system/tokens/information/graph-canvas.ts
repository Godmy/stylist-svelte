import type { PrimitiveMarker } from '../architecture/primitives';
import { PAN_MODES } from '../architecture/pan-modes';

export type GraphCanvasGridMode = PrimitiveMarker;
export type GraphCanvasPanMode = (typeof PAN_MODES)[number];



