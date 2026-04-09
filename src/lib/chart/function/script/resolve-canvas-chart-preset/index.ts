import type { CanvasChartRecipe } from '$stylist/chart/interface/recipe/canvas-chart';
import { PRESET_CANVAS_CHART } from '$stylist/chart/const/struct/canvas-chart';

export function resolveCanvasChartPreset(
	name: 'default' | 'minimal' | 'bold' | 'small' | 'large'
): CanvasChartRecipe {
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
