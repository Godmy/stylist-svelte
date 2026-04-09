<script lang="ts">
  
  import { LineChartStyleManager } from '$stylist/chart/class/style-manager/line-chart';
  import { Icon } from '$stylist';
  import Tooltip from '$stylist/control/svelte/atom/tooltip/index.svelte';
  import type { LineChartRecipe } from '$stylist/chart/interface/recipe/line-chart';
  import { ObjectManagerLineChart } from '$stylist/chart/class/object-manager/line-chart';

  let {
    data = [],
    title = 'Line Chart',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'default',
    maxValue,
    showAxis = true,
    axisColor = 'var(--color-border-secondary)',
    smooth = true,
    strokeWidth = 2,
    onPointClick,
    variant = 'default',
    size = 'md',
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: LineChartRecipe = $props();
  const resolvedColorScheme = $derived((colorScheme ?? 'default') as 'default' | 'neutral' | 'warm' | 'cool');

  const baseClasses = $derived(`${LineChartStyleManager.getBaseClasses()} ${LineChartStyleManager.getVariantClasses(variant)} ${hostClass}`);
  const titleContainerClasses = $derived(LineChartStyleManager.getTitleContainerClasses());
  const titleClasses = $derived(LineChartStyleManager.getTitleClasses());
  const chartContainerClasses = $derived(`${LineChartStyleManager.getChartContainerClasses()} ${chartClass}`);
  const infoIconClasses = $derived(LineChartStyleManager.getInfoIconClasses());
  const legendContainerClasses = $derived(LineChartStyleManager.getLegendContainerClasses());
  const legendItemClasses = $derived(LineChartStyleManager.getLegendItemClasses());
  const legendLabelClasses = $derived(LineChartStyleManager.getLegendLabelClasses());

  let calculatedMaxValue = $derived(ObjectManagerLineChart.resolveMaxValue(data, maxValue));
  let chartWidth = $derived(ObjectManagerLineChart.resolveChartWidth(width, showAxis));
  let chartHeight = $derived(ObjectManagerLineChart.resolveChartHeight(height, showAxis));
  let yAxisValues = $derived(ObjectManagerLineChart.resolveYAxisValues(calculatedMaxValue));
  let linePaths = $derived(ObjectManagerLineChart.resolveLinePaths({
    data,
    chartWidth,
    chartHeight,
    showAxis,
    calculatedMaxValue,
    smooth
  }));

  let hoveredPoint: { seriesIndex: number; pointIndex: number } | null = $state(null);
</script>

<div class={baseClasses} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class={titleContainerClasses}>
      <h3 class={titleClasses}>{title}</h3>
      {#if showTooltip}
        <Tooltip content="This is a line chart showing trends over time with data points connected by lines." placement="top">
          <Icon name="info" size="sm" class={infoIconClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={chartContainerClasses}>
    <svg
      width={width}
      height={height}
      class="overflow-visible"
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
        />
        <!-- Y axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={10}
          x2={showAxis ? 50 : 5}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
        />

        <!-- Y axis labels -->
        {#each yAxisValues as val, i}
          <text
            x={showAxis ? 45 : 0}
            y={height - 15 - (i * (chartHeight / 4))}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-secondary)"
          >
            {Math.round(val)}
          </text>
          <line
            x1={showAxis ? 48 : 3}
            y1={height - 10 - (i * (chartHeight / 4))}
            x2={width - 10}
            y2={height - 10 - (i * (chartHeight / 4))}
            stroke={axisColor}
            stroke-dasharray="3,3"
            stroke-width="0.5"
          />
        {/each}

        <!-- X axis labels (only for the first dataset) -->
        {#if data[0]}
          {#each data[0].data as item, i}
            <text
              x={50 + i * (chartWidth / (data[0].data.length - 1 || 1))}
              y={height - 5}
              text-anchor="middle"
              font-size="10"
              fill="var(--color-text-secondary)"
            >
              {item.name}
            </text>
          {/each}
        {/if}
      {/if}

      <!-- Lines -->
      {#each data as series, seriesIndex}
        <path
          d={linePaths[seriesIndex]}
          fill="none"
          stroke={series.color || ObjectManagerLineChart.resolveDefaultColor(seriesIndex, resolvedColorScheme)}
          stroke-width={strokeWidth}
          class="transition-all duration-[var(--duration-300)] ease-in-out"
        />

        <!-- Points -->
        {#each series.data as point, pointIndex}
          {@const pointPosition = ObjectManagerLineChart.resolvePointPosition({
            pointIndex,
            seriesLength: series.data.length,
            chartWidth,
            chartHeight,
            showAxis,
            calculatedMaxValue,
            pointValue: point.value
          })}
          <circle
            cx={pointPosition.x}
            cy={pointPosition.y}
            r={hoveredPoint?.seriesIndex === seriesIndex && hoveredPoint?.pointIndex === pointIndex ? 6 : 4}
            fill={series.color || ObjectManagerLineChart.resolveDefaultColor(seriesIndex, resolvedColorScheme)}
            class="cursor-pointer transition-all duration-[var(--duration-200)] ease-in-out"
            onclick={() => onPointClick?.(point, series)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPointClick?.(point, series);
              }
            }}
            onfocus={() => hoveredPoint = { seriesIndex, pointIndex }}
            onblur={() => hoveredPoint = null}
            role="button"
            tabindex="0"
            aria-label={ObjectManagerLineChart.resolveAriaLabel(point)}
          />
        {/each}
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={legendContainerClasses}>
      {#each data as series, i}
        <div class={legendItemClasses}>
          <div
            class="w-4 h-1 rounded mr-2"
            style={`background-color: ${series.color || ObjectManagerLineChart.resolveDefaultColor(i, resolvedColorScheme)}`}
          ></div>
          <span class={legendLabelClasses}>{series.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>






