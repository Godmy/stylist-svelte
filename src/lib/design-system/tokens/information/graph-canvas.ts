/**
 * Токены для холста графа
 */

export const GRAPH_CANVAS_GRID_MODES = ['none', 'dots', 'lines', 'cross'] as const;

export const GRAPH_CANVAS_PAN_MODES = ['drag', 'space', 'always'] as const;

/**
 * Конфигурация сетки по умолчанию
 */
export const GRAPH_CANVAS_DEFAULTS = {
	gridSize: 20,
	gridColor: 'rgba(128, 128, 128, 0.2)',
	backgroundColor: '#1e1e1e',
	minZoom: 0.1,
	maxZoom: 3,
	zoomStep: 0.1,
	snapThreshold: 10,
	panButton: 'middle' // 'left' | 'middle' | 'right'
} as const;

/**
 * Режим сетки
 */
export type GraphCanvasGridMode = (typeof GRAPH_CANVAS_GRID_MODES)[number];

/**
 * Режим панорамирования
 */
export type GraphCanvasPanMode = (typeof GRAPH_CANVAS_PAN_MODES)[number];
