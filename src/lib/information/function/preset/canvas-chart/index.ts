import type { CanvasChartPreset } from '$stylist/information/interface/canvas-chart';
import { PRESET_CANVAS_CHART } from '$stylist/information/const/preset/canvas-chart';

export function getCanvasChartPreset(
	name: 'default' | 'minimal' | 'bold' | 'small' | 'large'
): CanvasChartPreset {
	switch (name) {
		case 'minimal':
			return {
				...PRESET_CANVAS_CHART,
				variant: 'minimal',
				showGrid: false
			};
		case 'bold':
			return {
				...PRESET_CANVAS_CHART,
				variant: 'bold',
				size: 'lg'
			};
		case 'small':
			return {
				...PRESET_CANVAS_CHART,
				size: 'sm',
				width: 400,
				height: 300
			};
		case 'large':
			return {
				...PRESET_CANVAS_CHART,
				size: 'lg',
				width: 1200,
				height: 800
			};
		case 'default':
		default:
			return PRESET_CANVAS_CHART;
	}
}
