import type { ChartAxisXRecipe as ChartAxisXProps } from '$stylist/chart/interface/recipe/chart-axis-x';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartAxisXState(props: ChartAxisXProps) {
	const axisClasses = $derived(ChartStyleManager.getChartAxisClasses(resolveClassName(props.class)));
	const gridClasses = $derived(ChartStyleManager.getChartAxisGridClasses());
	const labelClasses = $derived(ChartStyleManager.getChartAxisLabelClasses());

	return {
		get axisClasses() { return axisClasses; },
		get gridClasses() { return gridClasses; },
		get labelClasses() { return labelClasses; }
	};
}

export default createChartAxisXState;
