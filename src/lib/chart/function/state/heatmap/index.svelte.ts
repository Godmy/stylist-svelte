import type { HeatmapRecipe } from '$stylist/chart/interface/recipe/heatmap';
import { HeatmapStyleManager } from '$stylist/chart/class/style-manager/heatmap';
import { ObjectManagerHeatmap } from '$stylist/chart/class/object-manager/heatmap';

export function createHeatmapState(props: HeatmapRecipe) {
	const hostClass = $derived(typeof props.class === 'string' ? props.class : undefined);
	const chartClass = $derived(typeof props.chartClass === 'string' ? props.chartClass : undefined);
	const resolvedColorScheme = $derived((props.colorScheme ?? 'minimal') as 'minimal' | 'ocean' | 'forest' | 'sunset');

	const rows = $derived(ObjectManagerHeatmap.resolveRows(props.data ?? []));
	const columns = $derived(ObjectManagerHeatmap.resolveColumns(props.data ?? []));
	const calculatedMaxValue = $derived(ObjectManagerHeatmap.resolveMaxValue(props.data ?? [], props.maxValue));
	const chartWidth = $derived(ObjectManagerHeatmap.resolveChartWidth(props.width ?? 600, props.showAxis ?? true));
	const chartHeight = $derived(ObjectManagerHeatmap.resolveChartHeight(props.height ?? 400, props.showAxis ?? true));
	const cellWidth = $derived(ObjectManagerHeatmap.resolveCellSize(chartWidth, columns.length));
	const cellHeight = $derived(ObjectManagerHeatmap.resolveCellSize(chartHeight, rows.length));
	const heatmapCells = $derived(ObjectManagerHeatmap.resolveHeatmapCells({
		data: props.data ?? [],
		rows,
		columns,
		cellWidth,
		cellHeight,
		showAxis: props.showAxis ?? true,
		cellPadding: props.cellPadding ?? 2,
		minValue: props.minValue ?? 0,
		calculatedMaxValue,
		colorScheme: resolvedColorScheme
	}));

	const containerClasses = $derived(HeatmapStyleManager.getContainerClasses(hostClass));
	const chartContainerClasses = $derived(HeatmapStyleManager.getChartContainerClasses(chartClass));
	const titleClasses = $derived(HeatmapStyleManager.getTitleClasses());
	const svgClasses = $derived(HeatmapStyleManager.getSvgClasses());
	const axisClasses = $derived(HeatmapStyleManager.getAxisClasses());
	const axisTextClasses = $derived(HeatmapStyleManager.getAxisTextClasses());
	const legendClasses = $derived(HeatmapStyleManager.getLegendClasses());
	const legendTitleClasses = $derived(HeatmapStyleManager.getLegendTitleClasses());
	const legendGradientClasses = $derived(HeatmapStyleManager.getLegendGradientClasses());
	const legendLabelsClasses = $derived(HeatmapStyleManager.getLegendLabelsClasses());
	const tooltipButtonClasses = $derived(HeatmapStyleManager.getTooltipButtonClasses());
	const cellClasses = $derived((isHovered: boolean) => HeatmapStyleManager.getCellClasses(isHovered));

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
		get rows() {
			return rows;
		},
		get columns() {
			return columns;
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
		get cellWidth() {
			return cellWidth;
		},
		get cellHeight() {
			return cellHeight;
		},
		get heatmapCells() {
			return heatmapCells;
		},
		get containerClasses() {
			return containerClasses;
		},
		get chartContainerClasses() {
			return chartContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get svgClasses() {
			return svgClasses;
		},
		get axisClasses() {
			return axisClasses;
		},
		get axisTextClasses() {
			return axisTextClasses;
		},
		get legendClasses() {
			return legendClasses;
		},
		get legendTitleClasses() {
			return legendTitleClasses;
		},
		get legendGradientClasses() {
			return legendGradientClasses;
		},
		get legendLabelsClasses() {
			return legendLabelsClasses;
		},
		get tooltipButtonClasses() {
			return tooltipButtonClasses;
		},
		get cellClasses() {
			return cellClasses;
		}
	};
}

export default createHeatmapState;