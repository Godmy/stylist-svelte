import type { HTMLAttributes } from 'svelte/elements';
import type { ChartLegendProps } from '$stylist/chart/interface/recipe/chart-legend';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartLegendState(props: ChartLegendProps & HTMLAttributes<HTMLDivElement>) {
	const classes = $derived(mergeClassNames('c-chart-legend', resolveClassName(props.class)));
	const itemClasses = $derived('c-chart-legend__item');
	const dotClasses = $derived('c-chart-legend__dot');

	return {
		get classes() {
			return classes;
		},
		get itemClasses() {
			return itemClasses;
		},
		get dotClasses() {
			return dotClasses;
		}
	};
}

export default createChartLegendState;
