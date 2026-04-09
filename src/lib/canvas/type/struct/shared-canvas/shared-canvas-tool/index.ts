import type { SHARED_CANVAS_TOOL_DEFINITIONS } from '$stylist/canvas/const/struct/canvas';

export type SharedCanvasTool = (typeof SHARED_CANVAS_TOOL_DEFINITIONS)[number]['id'];
