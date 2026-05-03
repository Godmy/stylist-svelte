<script lang="ts">
  import type { CanvasChartProps } from '$stylist/chart/type/struct/canvas-chart-props';
  import { createCanvasChartState } from '$stylist/chart/function/state/canvas-chart';
  import { ObjectManagerCanvasChart } from '$stylist/chart/class/object-manager/canvas-chart';
  import { CanvasChartStyleManager } from '$stylist/chart/class/style-manager/canvas-chart';

  let props: CanvasChartProps = $props();
  const state = createCanvasChartState(props);

  let canvasRef: HTMLCanvasElement | null = null;
  const resolvedColors = $derived(ObjectManagerCanvasChart.resolveColors(state.colors));
  const resolvedData = $derived(state.data as any[]);
  const resolvedType = $derived(state.type);

  $effect(() => {
    if (ObjectManagerCanvasChart.shouldDrawChart(canvasRef, resolvedData)) {
      ObjectManagerCanvasChart.drawChart({
        canvas: canvasRef,
        data: resolvedData,
        type: resolvedType,
        title: state.title,
        xAxisLabel: props.xAxisLabel ?? '',
        yAxisLabel: props.yAxisLabel ?? '',
        showGrid: state.showGrid,
        colors: resolvedColors
      });
    }
  });
</script>

<canvas
  bind:this={canvasRef}
  width={state.width}
  height={state.height}
  class={state.canvasClasses}
  {...state.restProps}
></canvas>
