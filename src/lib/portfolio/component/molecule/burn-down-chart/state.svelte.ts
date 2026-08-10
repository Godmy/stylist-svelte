import { BURN_DOWN_CHART_DEFAULT_MARGINS } from '$stylist/portfolio/const/map/burn-down-chart-default-margins';
import type { RecipeBurnDownChart } from '$stylist/portfolio/interface/recipe/burn-down-chart';

import { getBurnDownMinMaxValues } from '$stylist/portfolio/function/script/get-burn-down-min-max-values';
import { generateBurnDownIdealPath } from '$stylist/portfolio/function/script/generate-burn-down-ideal-path';
import { generateBurnDownActualPath } from '$stylist/portfolio/function/script/generate-burn-down-actual-path';
import { generateBurnDownXLabels } from '$stylist/portfolio/function/script/generate-burn-down-x-labels';
import { generateBurnDownYLabels } from '$stylist/portfolio/function/script/generate-burn-down-y-labels';

export function createBurnDownChartState(props: RecipeBurnDownChart) {
	// Props with defaults
	const data = $derived(props.data);
	const width = $derived(props.width ?? 600);
	const height = $derived(props.height ?? 400);
	const title = $derived(props.title ?? 'Burn Down Chart');

	// Computed
	const margins = BURN_DOWN_CHART_DEFAULT_MARGINS;
	const innerWidth = $derived(width - margins.left - margins.right);
	const innerHeight = $derived(height - margins.top - margins.bottom);

	const minMaxValues = $derived(getBurnDownMinMaxValues(data.points));
	const idealPath = $derived(
		generateBurnDownIdealPath(data.points, margins, innerWidth, innerHeight)
	);
	const actualPath = $derived(
		generateBurnDownActualPath(data.points, margins, innerWidth, innerHeight)
	);
	const xLabels = $derived(generateBurnDownXLabels(data.points, margins, innerWidth, height));
	const yLabels = $derived(generateBurnDownYLabels(data.points, margins, innerHeight, margins.top));

	// CSS classes
	const containerClass = 'burn-down-chart';
	const titleClass = 'burn-down-chart__title';
	const svgClass = 'burn-down-chart__svg';
	const gridLineClass = 'burn-down-chart__grid-line';
	const axisClass = 'burn-down-chart__axis';
	const idealLineClass = 'burn-down-chart__ideal-line';
	const actualLineClass = 'burn-down-chart__actual-line';
	const dataPointClass = 'burn-down-chart__data-point';
	const xAxisLabelClass = 'burn-down-chart__x-axis-label';
	const yAxisLabelClass = 'burn-down-chart__y-axis-label';
	const legendLineClass = 'burn-down-chart__legend-line';
	const legendTextClass = 'burn-down-chart__legend-text';

	return {
		get data() {
			return data;
		},
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get svgClass() {
			return svgClass;
		},
		get gridLineClass() {
			return gridLineClass;
		},
		get axisClass() {
			return axisClass;
		},
		get idealLineClass() {
			return idealLineClass;
		},
		get actualLineClass() {
			return actualLineClass;
		},
		get dataPointClass() {
			return dataPointClass;
		},
		get xAxisLabelClass() {
			return xAxisLabelClass;
		},
		get yAxisLabelClass() {
			return yAxisLabelClass;
		},
		get legendLineClass() {
			return legendLineClass;
		},
		get legendTextClass() {
			return legendTextClass;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get title() {
			return title;
		},
		get margins() {
			return margins;
		},
		get innerWidth() {
			return innerWidth;
		},
		get innerHeight() {
			return innerHeight;
		},
		get minMaxValues() {
			return minMaxValues;
		},
		get idealPath() {
			return idealPath;
		},
		get actualPath() {
			return actualPath;
		},
		get xLabels() {
			return xLabels;
		},
		get yLabels() {
			return yLabels;
		}
	};
}
