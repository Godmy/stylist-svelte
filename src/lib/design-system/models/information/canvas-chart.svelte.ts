import type { CanvasChartProps, CanvasChartState, ChartDataPoint, CanvasChartVariant, CanvasChartSize } from '../../contracts/information/canvas-chart';
import { CanvasChartStyleManager } from '../../styles/information/canvas-chart';
import { CANVAS_CHART_PRESET } from '../../contracts/information/canvas-chart';
import { cn } from '../../utils/cn/index';

export { CANVAS_CHART_PRESET };

/**
 * Creates centralized state for CanvasChart component
 * @param preset - Preset configuration for the canvas chart
 * @param props - Component props
 * @returns Reactive state object with classes and attributes
 */
export function createCanvasChartState(
  preset: typeof CANVAS_CHART_PRESET,
  props: Partial<CanvasChartProps>
) {
  // Extract props with defaults from preset
  const {
    width = preset.width,
    height = preset.height,
    type = preset.type,
    variant = preset.variant,
    size = preset.size,
    showGrid = preset.showGrid,
    showLegend = preset.showLegend,
    showTooltip = preset.showTooltip,
    colors = preset.colors,
    class: hostClass = ''
  } = props;

  // Reactive state
  let isRendering = $state(false);
  let hoveredPoint = $state<ChartDataPoint | null>(null);
  let selectedPoint = $state<ChartDataPoint | null>(null);

  // Actions
  function setHoveredPoint(point: ChartDataPoint | null) {
    hoveredPoint = point;
  }

  function setSelectedPoint(point: ChartDataPoint | null) {
    selectedPoint = point;
  }

  function startRendering() {
    isRendering = true;
  }

  function stopRendering() {
    isRendering = false;
  }

  // Derived classes using style manager
  const wrapperClasses = $derived(
    CanvasChartStyleManager.getWrapperClasses(String(hostClass ?? ''))
  );

  const canvasClasses = $derived(
    CanvasChartStyleManager.getCanvasClasses()
  );

  const containerClasses = $derived(
    CanvasChartStyleManager.getContainerClasses(width, height)
  );

  const titleClasses = $derived(
    CanvasChartStyleManager.getTitleClasses()
  );

  const legendClasses = $derived(
    CanvasChartStyleManager.getLegendClasses()
  );

  const legendItemClasses = $derived(
    CanvasChartStyleManager.getLegendItemClasses()
  );

  const gridClasses = $derived(
    CanvasChartStyleManager.getGridClasses(showGrid)
  );

  // Computed attributes
  const attrs = $derived({
    'data-chart-type': type,
    'data-variant': variant,
    'data-size': size,
    'data-rendering': isRendering,
    width,
    height
  });

  return {
    // Props with defaults
    width,
    height,
    type,
    variant,
    size,
    showGrid,
    showLegend,
    showTooltip,
    colors,
    
    // Actions
    setHoveredPoint,
    setSelectedPoint,
    startRendering,
    stopRendering,

    // State
    get isRendering() {
      return isRendering;
    },
    get hoveredPoint() {
      return hoveredPoint;
    },
    get selectedPoint() {
      return selectedPoint;
    },

    // Classes
    get wrapperClasses() {
      return wrapperClasses;
    },
    get canvasClasses() {
      return canvasClasses;
    },
    get containerClasses() {
      return containerClasses;
    },
    get titleClasses() {
      return titleClasses;
    },
    get legendClasses() {
      return legendClasses;
    },
    get legendItemClasses() {
      return legendItemClasses;
    },
    get gridClasses() {
      return gridClasses;
    },

    // Attributes
    get attrs() {
      return attrs;
    }
  };
}

/**
 * CanvasChart model type
 */
export type CanvasChartModel = ReturnType<typeof createCanvasChartState>;

export default createCanvasChartState;

