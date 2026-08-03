import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeChartCanvas as ChartCanvasProps } from '$stylist/chart/interface/recipe/chart-canvas';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartCanvasState(props: ChartCanvasProps & HTMLAttributes<HTMLDivElement>) {
	const width = $derived(props.width ?? 640);
	const height = $derived(props.height ?? 380);
	const padding = $derived(36);
	const wrapperClasses = $derived(mergeClassNames('c-chart-canvas', resolveClassName(props.class)));
	const svgClasses = $derived('c-chart-canvas__svg');

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get padding() {
			return padding;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export default createChartCanvasState;
