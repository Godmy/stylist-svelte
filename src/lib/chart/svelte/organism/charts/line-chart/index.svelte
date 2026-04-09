<script lang="ts">
  import { Icon } from '$stylist';
  import Tooltip from '$stylist/control/svelte/atom/tooltip/index.svelte';
  import type { LineChartRecipe } from '$stylist/chart/interface/recipe/line-chart';
  import { createLineChartState } from '$stylist/chart/function/state/line-chart';
  import { ObjectManagerLineChart } from '$stylist/chart/class/object-manager/line-chart';

  let props: LineChartRecipe = $props();
  const lineChartState = createLineChartState(props);

  let hoveredPoint: { seriesIndex: number; pointIndex: number } | null = $state(null);
</script>

<div class={lineChartState.baseClasses} style={`width: ${props.width ?? 600}px; height: ${props.height ?? 400}px;`} {...props}>
  {#if props.title}
    <div class={lineChartState.titleContainerClasses}>
      <h3 class={lineChartState.titleClasses}>{props.title}</h3>
      {#if props.showTooltip}
        <Tooltip content="This is a line chart showing trends over time with data points connected by lines." placement="top">
          <Icon name="info" size="sm" class={lineChartState.infoIconClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={lineChartState.chartContainerClasses}>
    <svg
      width={props.width ?? 600}
      height={props.height ?? 400}
      class="overflow-visible"
    >
      {#if props.showAxis}
        <!-- X axis -->
        <line
          x1={props.showAxis ? 50 : 5}
          y1={(props.height ?? 400) - 10}
          x2={(props.width ?? 600) - 10}
          y2={(props.height ?? 400) - 10}
          stroke={props.axisColor ?? 'var(--color-border-secondary)'}
          stroke-width="1"
        />
        <!-- Y axis -->
        <line
          x1={props.showAxis ? 50 : 5}
          y1={10}
          x2={props.showAxis ? 50 : 5}
          y2={(props.height ?? 400) - 10}
          stroke={props.axisColor ?? 'var(--color-border-secondary)'}
          stroke-width="1"
        />

        <!-- Y axis labels -->
        {#each lineChartState.yAxisValues as val, i}
          <text
            x={props.showAxis ? 45 : 0}
            y={(props.height ?? 400) - 15 - (i * (lineChartState.chartHeight / 4))}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-secondary)"
          >
            {Math.round(val)}
          </text>
          <line
            x1={props.showAxis ? 48 : 3}
            y1={(props.height ?? 400) - 10 - (i * (lineChartState.chartHeight / 4))}
            x2={(props.width ?? 600) - 10}
            y2={(props.height ?? 400) - 10 - (i * (lineChartState.chartHeight / 4))}
            stroke={props.axisColor ?? 'var(--color-border-secondary)'}
            stroke-dasharray="3,3"
            stroke-width="0.5"
          />
        {/each}

        <!-- X axis labels (only for the first dataset) -->
        {#if props.data?.[0]}
          {#each props.data[0].data as item, i}
            <text
              x={50 + i * (lineChartState.chartWidth / (props.data[0].data.length - 1 || 1))}
              y={(props.height ?? 400) - 5}
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
      {#each props.data ?? [] as series, seriesIndex}
        <path
          d={lineChartState.linePaths[seriesIndex]}
          fill="none"
          stroke={series.color ?? ObjectManagerLineChart.resolveDefaultColor(seriesIndex, lineChartState.resolvedColorScheme)}
          stroke-width={props.strokeWidth ?? 2}
          class="transition-all duration-[var(--duration-300)] ease-in-out"
        />

        <!-- Points -->
        {#each series.data as point, pointIndex}
          {@const pointPosition = ObjectManagerLineChart.resolvePointPosition({
            pointIndex,
            seriesLength: series.data.length,
            chartWidth: lineChartState.chartWidth,
            chartHeight: lineChartState.chartHeight,
            showAxis: props.showAxis ?? true,
            calculatedMaxValue: lineChartState.calculatedMaxValue,
            pointValue: point.value
          })}
          <circle
            cx={pointPosition.x}
            cy={pointPosition.y}
            r={hoveredPoint?.seriesIndex === seriesIndex && hoveredPoint?.pointIndex === pointIndex ? 6 : 4}
            fill={series.color ?? ObjectManagerLineChart.resolveDefaultColor(seriesIndex, lineChartState.resolvedColorScheme)}
            class="cursor-pointer transition-all duration-[var(--duration-200)] ease-in-out"
            onclick={() => props.onPointClick?.(point, series)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                props.onPointClick?.(point, series);
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

  {#if props.showLegend}
    <div class={lineChartState.legendContainerClasses}>
      {#each props.data ?? [] as series, i}
        <div class={lineChartState.legendItemClasses}>
          <div
            class="w-4 h-1 rounded mr-2"
            style={`background-color: ${series.color ?? ObjectManagerLineChart.resolveDefaultColor(i, lineChartState.resolvedColorScheme)}`}
          ></div>
          <span class={lineChartState.legendLabelClasses}>{series.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

