import type { RecipeChartAxisX as ChartAxisXProps } from '$stylist/chart/interface/recipe/chart-axis-x';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartAxisXState(props: ChartAxisXProps) {
	const axisClasses = $derived(mergeClassNames('c-chart-axis', resolveClassName(props.class)));
	const gridClasses = $derived('c-chart-axis__grid');
	const labelClasses = $derived('c-chart-axis__label');

	return {
		get axisClasses() {
			return axisClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
}

export default createChartAxisXState;
