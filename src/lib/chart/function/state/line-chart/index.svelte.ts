import type { LineChartRecipe } from '$stylist/chart/interface/recipe/line-chart';
import { LineChartStyleManager } from '$stylist/chart/class/style-manager/line-chart';
import { ObjectManagerLineChart } from '$stylist/chart/class/object-manager/line-chart';

export function createLineChartState(props: LineChartRecipe) {
	const hostClass = $derived(typeof props.class === 'string' ? props.class : undefined);
	const chartClass = $derived(typeof props.chartClass === 'string' ? props.chartClass : undefined);
	const resolvedColorScheme = $derived((props.colorScheme ?? 'default') as 'default' | 'neutral' | 'warm' | 'cool');

	const baseClasses = $derived(`${LineChartStyleManager.getBaseClasses()} ${LineChartStyleManager.getVariantClasses(props.variant ?? 'default')} ${hostClass}`);
	const titleContainerClasses = $derived(LineChartStyleManager.getTitleContainerClasses());
	const titleClasses = $derived(LineChartStyleManager.getTitleClasses());
	const chartContainerClasses = $derived(`${LineChartStyleManager.getChartContainerClasses()} ${chartClass}`);
	const infoIconClasses = $derived(LineChartStyleManager.getInfoIconClasses());
	const legendContainerClasses = $derived(LineChartStyleManager.getLegendContainerClasses());
	const legendItemClasses = $derived(LineChartStyleManager.getLegendItemClasses());
	const legendLabelClasses = $derived(LineChartStyleManager.getLegendLabelClasses());

	const calculatedMaxValue = $derived(ObjectManagerLineChart.resolveMaxValue(props.data ?? [], props.maxValue));
	const chartWidth = $derived(ObjectManagerLineChart.resolveChartWidth(props.width ?? 600, props.showAxis ?? true));
	const chartHeight = $derived(ObjectManagerLineChart.resolveChartHeight(props.height ?? 400, props.showAxis ?? true));
	const yAxisValues = $derived(ObjectManagerLineChart.resolveYAxisValues(calculatedMaxValue));
	const linePaths = $derived(ObjectManagerLineChart.resolveLinePaths({
		data: props.data ?? [],
		chartWidth,
		chartHeight,
		showAxis: props.showAxis ?? true,
		calculatedMaxValue,
		smooth: props.smooth ?? true
	}));

	return {
		get hostClass() {
			return hostClass;
		},
		get chartClass() {
			return chartClass;
		},
		get resolvedColorScheme() {
			return resolvedColorScheme;
		},
		get baseClasses() {
			return baseClasses;
		},
		get titleContainerClasses() {
			return titleContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get chartContainerClasses() {
			return chartContainerClasses;
		},
		get infoIconClasses() {
			return infoIconClasses;
		},
		get legendContainerClasses() {
			return legendContainerClasses;
		},
		get legendItemClasses() {
			return legendItemClasses;
		},
		get legendLabelClasses() {
			return legendLabelClasses;
		},
		get calculatedMaxValue() {
			return calculatedMaxValue;
		},
		get chartWidth() {
			return chartWidth;
		},
		get chartHeight() {
			return chartHeight;
		},
		get yAxisValues() {
			return yAxisValues;
		},
		get linePaths() {
			return linePaths;
		}
	};
}

export default createLineChartState;