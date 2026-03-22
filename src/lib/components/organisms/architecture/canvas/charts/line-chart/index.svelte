<script lang="ts">
  import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
  import { LineChartStyleManager } from '$stylist/design-system/styles/architecture/line-chart';
  import { Icon } from '$stylist/components/atoms';
  import Tooltip from '$stylist/components/atoms/interaction/controls/tooltip/index.svelte';

  // Types
  export type ChartDataPoint = {
    id: string;
    name: string;
    value: number;
    color?: string;
    description?: string;
  };

  export type LineChartData = {
    id: string;
    label: string;
    data: ChartDataPoint[];
    color?: string;
  };

  export type TokenLineType = 'default' | 'minimal' | 'elegant' | 'bold';
  export type LineChartSize = 'sm' | 'md' | 'lg';

  export interface ILineChartProps {
    data: LineChartData[];
    title?: string;
    width?: number;
    height?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    colorScheme?: 'default' | 'warm' | 'cool' | 'neutral';
    maxValue?: number;
    showAxis?: boolean;
    axisColor?: string;
    smooth?: boolean;
    strokeWidth?: number;
    onPointClick?: (item: ChartDataPoint, series: LineChartData) => void;
    variant?: TokenLineType;
    size?: LineChartSize;
    class?: string;
    chartClass?: string;
  }

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
  }: ILineChartProps & ArchitectureHTMLAttributes<HTMLDivElement> = $props();

  // Определяем стили
  const baseClasses = $derived(`${LineChartStyleManager.getBaseClasses()} ${LineChartStyleManager.getVariantClasses(variant)} ${hostClass}`);
  const titleContainerClasses = $derived(LineChartStyleManager.getTitleContainerClasses());
  const titleClasses = $derived(LineChartStyleManager.getTitleClasses());
  const chartContainerClasses = $derived(`${LineChartStyleManager.getChartContainerClasses()} ${chartClass}`);
  const infoIconClasses = $derived(LineChartStyleManager.getInfoIconClasses());
  const legendContainerClasses = $derived(LineChartStyleManager.getLegendContainerClasses());
  const legendItemClasses = $derived(LineChartStyleManager.getLegendItemClasses());
  const legendLabelClasses = $derived(LineChartStyleManager.getLegendLabelClasses());

  // Calculate max value if not provided
  let allValues = $derived(data.flatMap(series => series.data.map(d => d.value)));
  let calculatedMaxValue = $derived(maxValue || (allValues.length > 0 ? Math.max(...allValues) : 100));

  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));

  // Calculate points for each line
  let linePaths = $derived(() => {
    const paths: string[] = [];

    for (const series of data) {
      // Calculate points for this series
      const points = [];
      const segmentWidth = chartWidth / (series.data.length - 1 || 1);

      for (let i = 0; i < series.data.length; i++) {
        const x = (showAxis ? 50 : 5) + i * segmentWidth;
        const y = chartHeight + (showAxis ? 10 : 5) - ((series.data[i].value / calculatedMaxValue) * chartHeight);
        points.push({ x, y, dataPoint: series.data[i] });
      }

      // Create path
      let path = '';
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (i === 0) {
          path += `M ${point.x} ${point.y} `;
        } else {
          if (smooth) {
            const prevPoint = points[i - 1];
            const cp1x = prevPoint.x + (point.x - prevPoint.x) / 2;
            path += `C ${cp1x} ${prevPoint.y}, ${cp1x} ${point.y}, ${point.x} ${point.y} `;
          } else {
            path += `L ${point.x} ${point.y} `;
          }
        }
      }

      paths.push(path);
    }

    return paths;
  });

  // Get default color based on index and scheme
  function getDefaultColor(index: number, scheme: string): string {
    const schemes: Record<string, string[]> = {
      default: [
        'var(--color-primary-500)',
        'var(--color-success-500)',
        'var(--color-error-500)',
        'var(--color-warning-500)',
        'var(--color-secondary-500)',
        'var(--color-danger-500)'
      ],
      warm: [
        'var(--color-danger-400)',
        'var(--color-warning-500)',
        'var(--color-warning-400)',
        'var(--color-warning-300)',
        'var(--color-warning-200)'
      ],
      cool: [
        'var(--color-primary-400)',
        'var(--color-success-400)',
        'var(--color-success-300)',
        'var(--color-info-400)',
        'var(--color-info-300)'
      ],
      neutral: [
        'var(--color-text-tertiary)',
        'var(--color-text-secondary)',
        'var(--color-border-secondary)',
        'var(--color-border-primary)',
        'var(--color-background-tertiary)'
      ]
    };

    const colorList = schemes[scheme] || schemes.default;
    return colorList[index % colorList.length];
  }

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
        {#each [0, calculatedMaxValue * 0.25, calculatedMaxValue * 0.5, calculatedMaxValue * 0.75, calculatedMaxValue] as val, i}
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
          d={linePaths()[seriesIndex]}
          fill="none"
          stroke={series.color || getDefaultColor(seriesIndex, colorScheme)}
          stroke-width={strokeWidth}
          class="transition-all duration-[var(--duration-300)] ease-in-out"
        />

        <!-- Points -->
        {#each series.data as point, pointIndex}
          {@const x = (showAxis ? 50 : 5) + pointIndex * (chartWidth / (series.data.length - 1 || 1))}
          {@const y = chartHeight + (showAxis ? 10 : 5) - ((point.value / calculatedMaxValue) * chartHeight)}
          <circle
            cx={x}
            cy={y}
            r={hoveredPoint?.seriesIndex === seriesIndex && hoveredPoint?.pointIndex === pointIndex ? 6 : 4}
            fill={series.color || getDefaultColor(seriesIndex, colorScheme)}
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
            aria-label={`Data point: ${point.name}, Value: ${point.value}`}
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
            style={`background-color: ${series.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class={legendLabelClasses}>{series.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>





