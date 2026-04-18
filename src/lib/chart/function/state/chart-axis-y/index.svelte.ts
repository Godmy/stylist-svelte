import type { ChartAxisYProps } from '$stylist/chart/interface/recipe/chart-axis-y-props';
import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartAxisYState(props: ChartAxisYProps) {
	const axisClasses = $derived(ChartStyleManager.getChartAxisClasses(resolveClassName(props.class)));
	const gridClasses = $derived(ChartStyleManager.getChartAxisGridClasses());
	const labelClasses = $derived(ChartStyleManager.getChartAxisLabelClasses());
	const metrics = $derived(ObjectManagerChart.getAxisYMetrics(props));

	return {
		get axisClasses() { return axisClasses; },
		get gridClasses() { return gridClasses; },
		get labelClasses() { return labelClasses; },
		get x() { return metrics.x; },
		get startY() { return metrics.startY; },
		get endY() { return metrics.endY; },
		get tickSize() { return metrics.tickSize; },
		get showArrow() { return metrics.showArrow; },
		get ticks() { return metrics.ticks; }
	};
}

export default createChartAxisYState;
