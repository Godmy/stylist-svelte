import type { Token } from '$stylist/token/type/struct/token';
import { PLAYGROUND_CANVAS_SHELL_BACKGROUND_TYPE } from '$stylist/playground/const/array/playground-canvas-shell-background-type';
import { PLAYGROUND_CANVAS_SHELL_VIEWPORT_SIZE } from '$stylist/playground/const/array/playground-canvas-shell-viewport-size';

export const TOKEN_PLAYGROUND_SETTING = [
	{ key: 'playground-canvas-shell-background-type', label: 'Playground Canvas Shell Background Type', domain: 'playground', controlKind: 'radio', values: PLAYGROUND_CANVAS_SHELL_BACKGROUND_TYPE },
	{ key: 'playground-canvas-shell-viewport-size', label: 'Playground Canvas Shell Viewport Size', domain: 'playground', controlKind: 'radio', values: PLAYGROUND_CANVAS_SHELL_VIEWPORT_SIZE }
] satisfies readonly Token[];