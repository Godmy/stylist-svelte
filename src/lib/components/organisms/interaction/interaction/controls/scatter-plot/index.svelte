<script lang="ts">
  import { ScatterPlotStyleManager } from '$stylist/design-system/styles';
  import type { ScatterPlotProps } from '$stylist/design-system/props';

  let {
    data = [],
    title = 'Scatter Plot',
    width = 700,
    height = 420,
    showLegend = true,
    showAxis = true,
    showGrid = true,
    pointSize = 6,
    showLabels = false,
    class: className = '',
    onPointClick,
    ...restProps
  }: ScatterPlotProps = $props();

  const maxX = $derived(Math.max(...data.map((d) => d.x), 100));
  const maxY = $derived(Math.max(...data.map((d) => d.y), 100));
  const chartWidth = $derived(width - 70);
  const chartHeight = $derived(height - 40);

  function pointX(x: number): number { return 50 + (x / (maxX || 1)) * chartWidth; }
  function pointY(y: number): number { return 10 + chartHeight - (y / (maxY || 1)) * chartHeight; }
</script>

<div class={ScatterPlotStyleManager.root(className)} style={`width:${width}px`} {...restProps}>
  <h3 class="text-lg font-semibold mb-3">{title}</h3>
  <div class="border rounded-lg p-3 overflow-x-auto">
    <svg width={width} height={height}>
      {#if showGrid}
        {#each Array(5).fill(0) as _, i}
          <line x1="50" y1={10 + i * (chartHeight / 4)} x2={width - 20} y2={10 + i * (chartHeight / 4)} stroke="#e5e7eb" stroke-width="1" />
        {/each}
      {/if}
      {#if showAxis}
        <line x1="50" y1={height - 30} x2={width - 20} y2={height - 30} stroke="#9ca3af" />
        <line x1="50" y1="10" x2="50" y2={height - 30} stroke="#9ca3af" />
      {/if}
      {#each data as d}
        <g
          role="button"
          tabindex="0"
          onclick={() => onPointClick?.(d)}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onPointClick?.(d);
            }
          }}
        >
          <circle cx={pointX(d.x)} cy={pointY(d.y)} r={d.size || pointSize} fill={d.color || '#3b82f6'} />
          {#if showLabels && d.name}
            <text x={pointX(d.x)} y={pointY(d.y) - 8} text-anchor="middle" font-size="10">{d.name}</text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>
  {#if showLegend}
    <div class="mt-2 text-xs text-gray-600">X max: {Math.round(maxX)}, Y max: {Math.round(maxY)}</div>
  {/if}
</div>

