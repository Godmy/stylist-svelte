<script lang="ts">
  import { Icon } from '$stylist';
  import type { HeatmapRecipe } from '$stylist/analytics/interface/recipe/heatmap';
  import Tooltip from '$stylist/control/svelte/atom/controls/tooltip/index.svelte';
  import { HeatmapStyleManager } from '$stylist/analytics/class/style-manager/heatmap';
  import { ObjectManagerHeatmap } from '$stylist/analytics/class/object-manager/heatmap';

  let {
    data = [],
    title = 'Heatmap',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'minimal',
    showAxis = true,
    axisColor = 'var(--color-border-primary)',
    cellPadding = 2,
    onCellClick,
    class: hostClass = '',
    chartClass = '',
    maxValue,
    minValue = 0,
    ...restProps
  }: HeatmapRecipe = $props();
  const resolvedColorScheme = $derived((colorScheme ?? 'minimal') as 'minimal' | 'ocean' | 'forest' | 'sunset');

  let rows = $derived(ObjectManagerHeatmap.resolveRows(data));
  let columns = $derived(ObjectManagerHeatmap.resolveColumns(data));
  let calculatedMaxValue = $derived(ObjectManagerHeatmap.resolveMaxValue(data, maxValue));
  let chartWidth = $derived(ObjectManagerHeatmap.resolveChartWidth(width, showAxis));
  let chartHeight = $derived(ObjectManagerHeatmap.resolveChartHeight(height, showAxis));
  let cellWidth = $derived(ObjectManagerHeatmap.resolveCellSize(chartWidth, columns.length));
  let cellHeight = $derived(ObjectManagerHeatmap.resolveCellSize(chartHeight, rows.length));
  let heatmapCells = $derived(ObjectManagerHeatmap.resolveHeatmapCells({
    data,
    rows,
    columns,
    cellWidth,
    cellHeight,
    showAxis,
    cellPadding,
    minValue,
    calculatedMaxValue,
    colorScheme: resolvedColorScheme
  }));

  let hoveredCell: string | null = $state(null);

  const containerClasses = $derived(HeatmapStyleManager.getContainerClasses(hostClass == null ? undefined : String(hostClass)));
  const chartContainerClasses = $derived(HeatmapStyleManager.getChartContainerClasses(chartClass == null ? undefined : String(chartClass)));
  const titleClasses = $derived(HeatmapStyleManager.getTitleClasses());
  const svgClasses = $derived(HeatmapStyleManager.getSvgClasses());
  const axisClasses = $derived(HeatmapStyleManager.getAxisClasses());
  const axisTextClasses = $derived(HeatmapStyleManager.getAxisTextClasses());
  const legendClasses = $derived(HeatmapStyleManager.getLegendClasses());
  const legendTitleClasses = $derived(HeatmapStyleManager.getLegendTitleClasses());
  const legendGradientClasses = $derived(HeatmapStyleManager.getLegendGradientClasses());
  const legendLabelsClasses = $derived(HeatmapStyleManager.getLegendLabelsClasses());
  const tooltipButtonClasses = $derived(HeatmapStyleManager.getTooltipButtonClasses());
</script>

<div class={containerClasses} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class={titleClasses}>{title}</h3>
      {#if showTooltip}
        <Tooltip content="This is a heatmap showing data density through color variations in a matrix format." placement="top">
          <Icon name="info" size="sm" class={tooltipButtonClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={chartContainerClasses}>
    <svg
      width={width}
      height={height}
      class={svgClasses}
    >
      {#if showAxis}
        <!-- X axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={height - 10}
          x2={width - 10}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
          class={axisClasses}
        />
        <!-- Y axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={10}
          x2={showAxis ? 50 : 5}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
          class={axisClasses}
        />

        <!-- X axis labels -->
        {#each columns as col, i}
          <text
            x={50 + i * cellWidth + cellWidth / 2}
            y={height - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-secondary)"
            class={axisTextClasses}
          >
            {ObjectManagerHeatmap.resolveAxisLabel(col)}
          </text>
        {/each}

        <!-- Y axis labels -->
        {#each rows as row, i}
          <text
            x={showAxis ? 45 : 0}
            y={10 + i * cellHeight + cellHeight / 2}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-secondary)"
            dominant-baseline="middle"
            class={axisTextClasses}
          >
            {ObjectManagerHeatmap.resolveAxisLabel(row)}
          </text>
        {/each}
      {/if}

      <!-- Cells -->
      {#each heatmapCells as cell}
        <g
          class={HeatmapStyleManager.getCellClasses(hoveredCell === cell.id)}
          onclick={() => onCellClick?.(cell)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCellClick?.(cell);
            }
          }}
          onfocus={() => hoveredCell = cell.id}
          onblur={() => hoveredCell = null}
          role="button"
          tabindex="0"
          aria-label={`Heatmap cell: ${cell.row} - ${cell.column}, Value: ${cell.value}`}
        >
          <rect
            x={cell.x}
            y={cell.y}
            width={cell.width}
            height={cell.height}
            fill={cell.color}
            rx="2"
            ry="2"
            style={`opacity: ${hoveredCell === cell.id ? 0.8 : 1};`}
          />
          {#if cell.width > 20 && cell.height > 15}
            <text
              x={cell.x + cell.width / 2}
              y={cell.y + cell.height / 2}
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="10"
              fill={cell.intensity > 0.5 ? "var(--color-text-inverse)" : "var(--color-text-primary)"}
              class="pointer-events-none text-xs"
            >
              {Math.round(cell.value)}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={legendClasses}>
      <div class={legendLabelsClasses}>
        <span>{minValue}</span>
        <span>{ObjectManagerHeatmap.resolveLegendMidpoint(minValue, calculatedMaxValue)}</span>
        <span>{calculatedMaxValue}</span>
      </div>
      <div class={legendGradientClasses} style={`background-image: ${ObjectManagerHeatmap.resolveLegendGradient(resolvedColorScheme)}`}></div>
      <div class={legendTitleClasses}>
        {ObjectManagerHeatmap.resolveLegendTitle(resolvedColorScheme)}
      </div>
    </div>
  {/if}
</div>










