import type { ChartLegendProps } from '$stylist/navigation/interface/recipe/chart-legend';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

export function createChartLegendState(props: ChartLegendProps) {
	const classes = $derived(ChartStyleManager.getChartLegendClasses(resolveClassName(props.class)));
	const itemClasses = $derived(ChartStyleManager.getChartLegendItemClasses());
	const dotClasses = $derived(ChartStyleManager.getChartLegendDotClasses());

	return {
		get classes() { return classes; },
		get itemClasses() { return itemClasses; },
		get dotClasses() { return dotClasses; }
	};
}

export default createChartLegendState;
