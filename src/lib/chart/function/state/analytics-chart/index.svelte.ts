import type { AnalyticsChartRecipe } from '$stylist/chart/interface/recipe/analytics-chart';
import { AnalyticsChartStyleManager } from '$stylist/chart/class/style-manager/analytics-chart';

export function createAnalyticsChartState(props: AnalyticsChartRecipe) {
	const classNameStr = $derived(typeof props.class === 'string' ? props.class : undefined);
	const chartClassStr = $derived(typeof props.chartClass === 'string' ? props.chartClass : undefined);
	const legendClassStr = $derived(typeof props.legendClass === 'string' ? props.legendClass : undefined);

	const containerClasses = $derived(AnalyticsChartStyleManager.getContainerClass(classNameStr));
	const headerClasses = $derived(AnalyticsChartStyleManager.getHeaderClass());
	const titleContainerClasses = $derived(AnalyticsChartStyleManager.getTitleContainerClass());
	const titleClasses = $derived(AnalyticsChartStyleManager.getTitleClass());
	const subtitleClasses = $derived(AnalyticsChartStyleManager.getSubtitleClass());
	const trendContainerClasses = $derived(AnalyticsChartStyleManager.getTrendContainerClass(props.trendValue ?? 0));
	const chartContainerClasses = $derived(AnalyticsChartStyleManager.getChartContainerClass(chartClassStr));
	const legendContainerClasses = $derived(AnalyticsChartStyleManager.getLegendContainerClass(legendClassStr));
	const legendItemClasses = $derived(AnalyticsChartStyleManager.getLegendItemClass());
	const legendColorClasses = $derived(AnalyticsChartStyleManager.getLegendColorClass());
	const legendLabelClasses = $derived(AnalyticsChartStyleManager.getLegendLabelClass());
	const legendValueClasses = $derived(AnalyticsChartStyleManager.getLegendValueClass());

	return {
		get classNameStr() {
			return classNameStr;
		},
		get chartClassStr() {
			return chartClassStr;
		},
		get legendClassStr() {
			return legendClassStr;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleContainerClasses() {
			return titleContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		},
		get trendContainerClasses() {
			return trendContainerClasses;
		},
		get chartContainerClasses() {
			return chartContainerClasses;
		},
		get legendContainerClasses() {
			return legendContainerClasses;
		},
		get legendItemClasses() {
			return legendItemClasses;
		},
		get legendColorClasses() {
			return legendColorClasses;
		},
		get legendLabelClasses() {
			return legendLabelClasses;
		},
		get legendValueClasses() {
			return legendValueClasses;
		}
	};
}

export default createAnalyticsChartState;
