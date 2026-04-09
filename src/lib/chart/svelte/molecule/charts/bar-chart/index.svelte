<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import Tooltip from '$stylist/control/svelte/atom/tooltip/index.svelte';
  import { BarChartStyleManager } from '$stylist/chart/class/style-manager/bar-chart';
  import type { BarChartRecipe } from '$stylist/chart/interface/recipe/bar-chart';
  import { ObjectManagerBarChart } from '$stylist/chart/class/object-manager/bar-chart';

  let {
    data = [],
    title = 'Bar Chart',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'minimal',
    maxValue,
    barGap = 10,
    barWidth = 30,
    showAxis = true,
    axisColor = 'var(--color-border-primary)',
    onBarClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: BarChartRecipe = $props();
  const containerHostClass = hostClass == null ? undefined : String(hostClass);
  const resolvedColorScheme = $derived((colorScheme ?? 'minimal') as 'minimal' | 'ocean' | 'forest' | 'sunset');

  // Calculate max value if not provided
  let calculatedMaxValue = $derived(ObjectManagerBarChart.resolveMaxValue(data, maxValue));
  let chartWidth = $derived(ObjectManagerBarChart.resolveChartWidth(width, showAxis));
  let chartHeight = $derived(ObjectManagerBarChart.resolveChartHeight(height, showAxis));
  const barPositions = $derived(ObjectManagerBarChart.resolveBarPositions({
    data,
    barWidth,
    barGap,
    chartHeight,
    showAxis,
    calculatedMaxValue,
    colorScheme: resolvedColorScheme
  }));
  const yAxisValues = $derived(ObjectManagerBarChart.resolveYAxisValues(calculatedMaxValue));

  let hoveredBar: number | null = $state(null);
</script>

<div class={BarChartStyleManager.getContainerClasses(containerHostClass)} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class={BarChartStyleManager.getTitleContainerClasses()}>
      <h3 class={BarChartStyleManager.getTitleClasses()}>{title}</h3>
      {#if showTooltip}
        <Tooltip content="This is a bar chart showing categorical data with rectangular bars proportional to the values they represent." placement="top">
          <BaseIcon name="info" class={BarChartStyleManager.getInfoIconClasses()} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={BarChartStyleManager.getChartContainerClasses(chartClass)}>
    <svg
      width={width}
      height={height}
      class={BarChartStyleManager.getSvgClasses()}
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
            fill="var(--color-text-tertiary)"
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

        <!-- X axis labels -->
        {#each barPositions as position, i (position.x)}
          <text
            x={position.x + barWidth / 2}
            y={height - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-tertiary)"
          >
            {data[i].name}
          </text>
        {/each}
      {/if}

      <!-- Bars -->
      {#each barPositions as position, i}
        <g
          class="cursor-pointer"
          onclick={() => onBarClick?.(data[i])}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onBarClick?.(data[i]);
            }
          }}
          onfocus={() => hoveredBar = i}
          onblur={() => hoveredBar = null}
          role="button"
          tabindex="0"
          aria-label={`Bar chart item: ${data[i].name}, Value: ${data[i].value}`}
        >
          <rect
            x={position.x}
            y={position.y}
            width={position.width}
            height={position.height}
            fill={position.color}
            rx="2"
            ry="2"
            class={BarChartStyleManager.getBarClasses(hoveredBar === i)}
            style={`opacity: ${hoveredBar === i ? 0.8 : 1};`}

          />
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={BarChartStyleManager.getLegendClasses()}>
      {#each data as item, i}
        <div class={BarChartStyleManager.getLegendItemClasses()}>
          <div
            class="w-4 h-4 rounded mr-2"
            style={`background-color: ${item.color || ObjectManagerBarChart.resolveDefaultColor(i, resolvedColorScheme)}`}
          ></div>
          <span class={BarChartStyleManager.getLegendTextClasses()}>{item.name}</span>
          <span class={BarChartStyleManager.getLegendValueClasses()}>({item.value})</span>
        </div>
      {/each}
    </div>
  {/if}
</div>


















