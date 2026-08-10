import type { RecipeChartAxisY } from '$stylist/chart/interface/recipe/chart-axis-y';
import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartAxisYState(props: RecipeChartAxisY) {
	const axisClasses = $derived(mergeClassNames('c-chart-axis', resolveClassName(props.class)));
	const gridClasses = $derived('c-chart-axis__grid');
	const labelClasses = $derived('c-chart-axis__label');
	const metrics = $derived(ObjectManagerChart.getAxisYMetrics(props));

	return {
		get axisClasses() {
			return axisClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get x() {
			return metrics.x;
		},
		get startY() {
			return metrics.startY;
		},
		get endY() {
			return metrics.endY;
		},
		get tickSize() {
			return metrics.tickSize;
		},
		get showArrow() {
			return metrics.showArrow;
		},
		get ticks() {
			return metrics.ticks;
		}
	};
}

export default createChartAxisYState;
