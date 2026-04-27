<script lang="ts">
  import { Icon } from '$stylist';
  import Tooltip from '$stylist/control/component/atom/tooltip/index.svelte';
  import type { LineChartRecipe } from '$stylist/chart/interface/recipe/line-chart';
  import { createLineChartState } from '$stylist/chart/function/state/line-chart';
  import { ObjectManagerLineChart } from '$stylist/chart/class/object-manager/line-chart';

  let props: LineChartRecipe = $props();
  const state = createLineChartState(props);
</script>

<div class={state.baseClasses} style={`width: ${props.width ?? 600}px; height: ${props.height ?? 400}px;`} {...props}>
  {#if props.title}
    <div class={state.titleContainerClasses}>
      <h3 class={state.titleClasses}>{props.title}</h3>
      {#if props.showTooltip}
        <Tooltip content="This is a line chart showing trends over time with data points connected by lines." placement="top">
          <Icon name="info" size="sm" class={state.infoIconClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={state.chartContainerClasses}>
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
        {#each state.yAxisValues as val, i}
          <text
            x={props.showAxis ? 45 : 0}
            y={(props.height ?? 400) - 15 - (i * (state.chartHeight / 4))}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-secondary)"
          >
            {Math.round(val)}
          </text>
          <line
            x1={props.showAxis ? 48 : 3}
            y1={(props.height ?? 400) - 10 - (i * (state.chartHeight / 4))}
            x2={(props.width ?? 600) - 10}
            y2={(props.height ?? 400) - 10 - (i * (state.chartHeight / 4))}
            stroke={props.axisColor ?? 'var(--color-border-secondary)'}
            stroke-dasharray="3,3"
            stroke-width="0.5"
          />
        {/each}

        <!-- X axis labels (only for the first dataset) -->
        {#if props.data?.[0]}
          {#each props.data[0].data as item, i}
            <text
              x={50 + i * (state.chartWidth / (props.data[0].data.length - 1 || 1))}
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
          d={state.linePaths[seriesIndex]}
          fill="none"
          stroke={series.color ?? ObjectManagerLineChart.resolveDefaultColor(seriesIndex, state.resolvedColorScheme)}
          stroke-width={props.strokeWidth ?? 2}
          class="transition-all duration-[var(--duration-300)] ease-in-out"
        />

        <!-- Points -->
        {#each series.data as point, pointIndex}
          {@const pointPosition = ObjectManagerLineChart.resolvePointPosition({
            pointIndex,
            seriesLength: series.data.length,
            chartWidth: state.chartWidth,
            chartHeight: state.chartHeight,
            showAxis: props.showAxis ?? true,
            calculatedMaxValue: state.calculatedMaxValue,
            pointValue: point.value
          })}
          <circle
            cx={pointPosition.x}
            cy={pointPosition.y}
            r={state.isPointHovered(seriesIndex, pointIndex) ? 6 : 4}
            fill={series.color ?? ObjectManagerLineChart.resolveDefaultColor(seriesIndex, state.resolvedColorScheme)}
            class="cursor-pointer transition-all duration-[var(--duration-200)] ease-in-out"
            onclick={() => props.onPointClick?.(point, series)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                props.onPointClick?.(point, series);
              }
            }}
            onfocus={() => state.focusPoint(seriesIndex, pointIndex)}
            onblur={state.clearFocusedPoint}
            role="button"
            tabindex="0"
            aria-label={ObjectManagerLineChart.resolveAriaLabel(point)}
          />
        {/each}
      {/each}
    </svg>
  </div>

  {#if props.showLegend}
    <div class={state.legendContainerClasses}>
      {#each props.data ?? [] as series, i}
        <div class={state.legendItemClasses}>
          <div
            class="w-4 h-1 rounded mr-2"
            style={`background-color: ${series.color ?? ObjectManagerLineChart.resolveDefaultColor(i, state.resolvedColorScheme)}`}
          ></div>
          <span class={state.legendLabelClasses}>{series.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

