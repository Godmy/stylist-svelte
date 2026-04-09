import type { BarChartRecipe } from '$stylist/chart/interface/recipe/bar-chart';
import { BarChartStyleManager } from '$stylist/chart/class/style-manager/bar-chart';
import { ObjectManagerBarChart } from '$stylist/chart/class/object-manager/bar-chart';

export function createBarChartState(props: BarChartRecipe) {
	const containerHostClass = $derived(typeof props.class === 'string' ? props.class : undefined);
	const resolvedColorScheme = $derived((props.colorScheme ?? 'minimal') as 'minimal' | 'ocean' | 'forest' | 'sunset');
	const calculatedMaxValue = $derived(ObjectManagerBarChart.resolveMaxValue(props.data ?? [], props.maxValue));
	const chartWidth = $derived(ObjectManagerBarChart.resolveChartWidth(props.width ?? 600, props.showAxis ?? true));
	const chartHeight = $derived(ObjectManagerBarChart.resolveChartHeight(props.height ?? 400, props.showAxis ?? true));
	const barPositions = $derived(ObjectManagerBarChart.resolveBarPositions({
		data: props.data ?? [],
		barWidth: props.barWidth ?? 30,
		barGap: props.barGap ?? 10,
		chartHeight,
		showAxis: props.showAxis ?? true,
		calculatedMaxValue,
		colorScheme: resolvedColorScheme
	}));
	const yAxisValues = $derived(ObjectManagerBarChart.resolveYAxisValues(calculatedMaxValue));

	const containerClasses = $derived(BarChartStyleManager.getContainerClasses(containerHostClass));
	const titleContainerClasses = $derived(BarChartStyleManager.getTitleContainerClasses());
	const titleClasses = $derived(BarChartStyleManager.getTitleClasses());
	const infoIconClasses = $derived(BarChartStyleManager.getInfoIconClasses());
	const chartContainerClasses = $derived(BarChartStyleManager.getChartContainerClasses(props.chartClass));
	const svgClasses = $derived(BarChartStyleManager.getSvgClasses());
	const barClasses = $derived((isHovered: boolean) => BarChartStyleManager.getBarClasses(isHovered));
	const legendClasses = $derived(BarChartStyleManager.getLegendClasses());
	const legendItemClasses = $derived(BarChartStyleManager.getLegendItemClasses());
	const legendTextClasses = $derived(BarChartStyleManager.getLegendTextClasses());
	const legendValueClasses = $derived(BarChartStyleManager.getLegendValueClasses());

	return {
		get containerHostClass() {
			return containerHostClass;
		},
		get resolvedColorScheme() {
			return resolvedColorScheme;
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
		get barPositions() {
			return barPositions;
		},
		get yAxisValues() {
			return yAxisValues;
		},
		get containerClasses() {
			return containerClasses;
		},
		get titleContainerClasses() {
			return titleContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get infoIconClasses() {
			return infoIconClasses;
		},
		get chartContainerClasses() {
			return chartContainerClasses;
		},
		get svgClasses() {
			return svgClasses;
		},
		get barClasses() {
			return barClasses;
		},
		get legendClasses() {
			return legendClasses;
		},
		get legendItemClasses() {
			return legendItemClasses;
		},
		get legendTextClasses() {
			return legendTextClasses;
		},
		get legendValueClasses() {
			return legendValueClasses;
		}
	};
}

export default createBarChartState;