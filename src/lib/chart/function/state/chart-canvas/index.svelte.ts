import type { ChartCanvasRecipe as ChartCanvasProps } from '$stylist/chart/interface/recipe/chart-canvas';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartCanvasState(props: ChartCanvasProps) {
	const width = $derived(props.width ?? 640);
	const height = $derived(props.height ?? 380);
	const padding = $derived(36);
	const wrapperClasses = $derived(
		ChartStyleManager.getChartCanvasWrapperClasses(resolveClassName(props.class))
	);
	const svgClasses = $derived(ChartStyleManager.getChartSvgClasses());

	return {
		get width() { return width; },
		get height() { return height; },
		get padding() { return padding; },
		get wrapperClasses() { return wrapperClasses; },
		get svgClasses() { return svgClasses; }
	};
}

export default createChartCanvasState;
