import type { Token } from '$stylist/token/type/struct/token';
import { CANVAS_TOOLBAR_DRAWING_TOOL } from '$stylist/canvas/const/array/canvas-toolbar-drawing-tool';

export const TOKEN_CANVAS_SETTING = [
	{ key: 'canvas-toolbar-drawing-tool', label: 'Canvas Toolbar Drawing Tool', domain: 'canvas', controlKind: 'radio', values: CANVAS_TOOLBAR_DRAWING_TOOL }
] satisfies readonly Token[];