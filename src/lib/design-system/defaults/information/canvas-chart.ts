import type { CanvasChartPreset } from '../../contracts/information/canvas-chart';

export const CANVAS_CHART_PRESET: CanvasChartPreset = {
	width: 800,
	height: 600,
	type: 'line',
	variant: 'default',
	size: 'md',
	showGrid: true,
	showLegend: true,
	showTooltip: true,
	colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
};

export const CANVAS_CHART_MINIMAL_PRESET: CanvasChartPreset = {
	...CANVAS_CHART_PRESET,
	variant: 'minimal',
	showGrid: false
};

export const CANVAS_CHART_BOLD_PRESET: CanvasChartPreset = {
	...CANVAS_CHART_PRESET,
	variant: 'bold',
	size: 'lg'
};

export const CANVAS_CHART_SMALL_PRESET: CanvasChartPreset = {
	...CANVAS_CHART_PRESET,
	size: 'sm',
	width: 400,
	height: 300
};

export const CANVAS_CHART_LARGE_PRESET: CanvasChartPreset = {
	...CANVAS_CHART_PRESET,
	size: 'lg',
	width: 1200,
	height: 800
};

export function getCanvasChartPreset(
	name: 'default' | 'minimal' | 'bold' | 'small' | 'large'
): CanvasChartPreset {
	switch (name) {
		case 'minimal':
			return CANVAS_CHART_MINIMAL_PRESET;
		case 'bold':
			return CANVAS_CHART_BOLD_PRESET;
		case 'small':
			return CANVAS_CHART_SMALL_PRESET;
		case 'large':
			return CANVAS_CHART_LARGE_PRESET;
		case 'default':
		default:
			return CANVAS_CHART_PRESET;
	}
}
