import type { RecipeHeatmap } from '$stylist/chart/interface/recipe/heatmap';
import { ObjectManagerHeatmap } from '$stylist/chart/class/object-manager/heatmap';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createHeatmapState(props: RecipeHeatmap) {
	let hoveredCell = $state<string | null>(null);
	const hostClass = $derived(typeof props.class === 'string' ? props.class : undefined);
	const chartClass = $derived(typeof props.chartClass === 'string' ? props.chartClass : undefined);
	const resolvedColorScheme = $derived(
		(props.colorScheme ?? 'minimal') as 'minimal' | 'ocean' | 'forest' | 'sunset'
	);

	const rows = $derived(ObjectManagerHeatmap.resolveRows(props.data ?? []));
	const columns = $derived(ObjectManagerHeatmap.resolveColumns(props.data ?? []));
	const calculatedMaxValue = $derived(
		ObjectManagerHeatmap.resolveMaxValue(props.data ?? [], props.maxValue)
	);
	const chartWidth = $derived(
		ObjectManagerHeatmap.resolveChartWidth(props.width ?? 600, props.showAxis ?? true)
	);
	const chartHeight = $derived(
		ObjectManagerHeatmap.resolveChartHeight(props.height ?? 400, props.showAxis ?? true)
	);
	const cellWidth = $derived(ObjectManagerHeatmap.resolveCellSize(chartWidth, columns.length));
	const cellHeight = $derived(ObjectManagerHeatmap.resolveCellSize(chartHeight, rows.length));
	const heatmapCells = $derived(
		ObjectManagerHeatmap.resolveHeatmapCells({
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
		})
	);

	const containerClasses = $derived(mergeClassNames('c-heatmap', hostClass));
	const chartContainerClasses = $derived(mergeClassNames('c-heatmap__chart-container', chartClass));
	const titleClasses = $derived('c-heatmap__title');
	const svgClasses = $derived('c-heatmap__svg');
	const axisClasses = $derived('c-heatmap__axis');
	const axisTextClasses = $derived('c-heatmap__axis-text');
	const legendClasses = $derived('c-heatmap__legend');
	const legendTitleClasses = $derived('c-heatmap__legend-title');
	const legendGradientClasses = $derived('c-heatmap__legend-gradient');
	const legendLabelsClasses = $derived('c-heatmap__legend-labels');
	const tooltipButtonClasses = $derived('c-heatmap__tooltip-button');
	const cellClasses = $derived((isHovered: boolean) =>
		mergeClassNames(
			'c-heatmap__cell',
			isHovered ? 'c-heatmap__cell--hovered' : 'c-heatmap__cell--idle'
		)
	);

	function handleCellFocus(cellId: string) {
		hoveredCell = cellId;
	}

	function handleCellBlur() {
		hoveredCell = null;
	}

	return {
		get hoveredCell() {
			return hoveredCell;
		},
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
		},
		handleCellFocus,
		handleCellBlur
	};
}

export default createHeatmapState;
