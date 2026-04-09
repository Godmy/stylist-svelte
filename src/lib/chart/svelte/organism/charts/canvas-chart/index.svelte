<script lang="ts">
  import type { CanvasChartRecipe } from '$stylist/chart/interface/recipe/canvas-chart';
  import { ObjectManagerCanvasChart } from '$stylist/chart/class/object-manager/canvas-chart';
  import { CanvasChartStyleManager } from '$stylist/chart/class/style-manager/canvas-chart';

  type CanvasChartProps = CanvasChartRecipe & {
    xAxisLabel?: string;
    yAxisLabel?: string;
  };

  let {
    width = 800,
    height = 600,
    data = [],
    type = 'line',
    title = '',
    xAxisLabel = '',
    yAxisLabel = '',
    showGrid = true,
    colors,
    class: className = '',
    ...restProps
  }: CanvasChartProps = $props();

  let canvasRef: HTMLCanvasElement | null = null;
  const resolvedColors = $derived(ObjectManagerCanvasChart.resolveColors(colors));
  const resolvedData = $derived(data as any[]); // TODO: Fix type mismatch with CanvasChartDataPoint
  const resolvedType = $derived(type);

  $effect(() => {
    if (ObjectManagerCanvasChart.shouldDrawChart(canvasRef, resolvedData)) {
      ObjectManagerCanvasChart.drawChart({
        canvas: canvasRef,
        data: resolvedData,
        type: resolvedType,
        title: title ?? '',
        xAxisLabel: xAxisLabel ?? '',
        yAxisLabel: yAxisLabel ?? '',
        showGrid,
        colors: resolvedColors
      });
    }
  });
</script>

<canvas
  bind:this={canvasRef}
  width={width}
  height={height}
  class={CanvasChartStyleManager.getCanvasClasses(className ?? undefined)}
  {...restProps}
></canvas>













