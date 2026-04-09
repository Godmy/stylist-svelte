import { BurnDownChartStyleManager } from '$stylist/management/class/style-manager/burn-down-chart';
import type { BurnDownData } from '$stylist/management/interface/struct/burn-down-data';
import { BURN_DOWN_CHART_DEFAULT_MARGINS } from '$stylist/management/const/struct/burn-down-chart-margins';
import {
  getBurnDownMinMaxValues,
  generateBurnDownIdealPath,
  generateBurnDownActualPath,
  generateBurnDownXLabels,
  generateBurnDownYLabels
} from '$stylist/management/function/script/burn-down-chart';

export interface BurnDownChartStateProps {
  data: BurnDownData;
  width?: number;
  height?: number;
  title?: string;
}

export function createBurnDownChartState(props: BurnDownChartStateProps) {
  // Props with defaults
  const data = $derived(props.data);
  const width = $derived(props.width ?? 600);
  const height = $derived(props.height ?? 400);
  const title = $derived(props.title ?? "Burn Down Chart");

  // Computed
  const margins = BURN_DOWN_CHART_DEFAULT_MARGINS;
  const innerWidth = $derived(width - margins.left - margins.right);
  const innerHeight = $derived(height - margins.top - margins.bottom);

  const minMaxValues = $derived(getBurnDownMinMaxValues(data.points));
  const idealPath = $derived(generateBurnDownIdealPath(data.points, margins, innerWidth, innerHeight));
  const actualPath = $derived(generateBurnDownActualPath(data.points, margins, innerWidth, innerHeight));
  const xLabels = $derived(generateBurnDownXLabels(data.points, margins, innerWidth, height));
  const yLabels = $derived(generateBurnDownYLabels(data.points, margins, innerHeight, margins.top));

  // CSS classes
  const containerClass = $derived(BurnDownChartStyleManager.getContainerClass());
  const titleClass = $derived(BurnDownChartStyleManager.getTitleClass());
  const svgClass = $derived(BurnDownChartStyleManager.getSvgClass());
  const gridLineClass = $derived(BurnDownChartStyleManager.getGridLineClass());
  const axisClass = $derived(BurnDownChartStyleManager.getAxisClass());
  const idealLineClass = $derived(BurnDownChartStyleManager.getIdealLineClass());
  const actualLineClass = $derived(BurnDownChartStyleManager.getActualLineClass());
  const dataPointClass = $derived(BurnDownChartStyleManager.getDataPointClass());
  const xAxisLabelClass = $derived(BurnDownChartStyleManager.getXAxisLabelClass());
  const yAxisLabelClass = $derived(BurnDownChartStyleManager.getYAxisLabelClass());
  const legendContainerClass = $derived(BurnDownChartStyleManager.getLegendContainerClass());
  const legendLineClass = $derived(BurnDownChartStyleManager.getLegendLineClass());
  const legendTextClass = $derived(BurnDownChartStyleManager.getLegendTextClass());

  return {
    get data() {
      return data;
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
    get legendContainerClass() {
      return legendContainerClass;
    },
    get legendLineClass() {
      return legendLineClass;
    },
    get legendTextClass() {
      return legendTextClass;
    }
  };
}

export default createBurnDownChartState;
