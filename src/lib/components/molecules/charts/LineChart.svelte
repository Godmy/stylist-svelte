<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TrendingUp, Info } from 'lucide-svelte';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type ChartDataPoint = {
    id: string;
    name: string;
    value: number;
    color?: string;
    description?: string;
  };

  type LineChartData = {
    id: string;
    label: string;
    data: ChartDataPoint[];
    color?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    data: LineChartData[];
    title?: string;
    width?: number;
    height?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    colorScheme?: string;
    maxValue?: number;
    showAxis?: boolean;
    axisColor?: string;
    smooth?: boolean;
    strokeWidth?: number;
    onPointClick?: (item: ChartDataPoint, series: LineChartData) => void;
    class?: string;
    chartClass?: string;
  };

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
    axisColor = '#E5E7EB',
    smooth = true,
    strokeWidth = 2,
    onPointClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: Props = $props();

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
  }) as () => string[];

  // Get default color based on index and scheme
  function getDefaultColor(index: number, scheme: string): string {
    const schemes: Record<string, string[]> = {
      default: ['#3B82F6', '#10B981', '#EF4444', '#F59E0B', '#8B5CF6', '#EC4899'],
      warm: ['#F87171', '#FB923C', '#FBBF24', '#FCD34D', '#FDE68A'],
      cool: ['#60A5FA', '#34D399', '#6EE7B7', '#93C5FD', '#BFDBFE'],
      neutral: ['#6B7280', '#9CA3AF', '#D1D5DB', '#E5E7EB', '#F3F4F6']
    };
    
    const colorList = schemes[scheme] || schemes.default;
    return colorList[index % colorList.length];
  }

  let hoveredPoint: { seriesIndex: number; pointIndex: number } | null = $state(null);
</script>

<div class={`line-chart ${hostClass}`} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a line chart showing trends over time with data points connected by lines." position="top">
          <Info class="h-4 w-4 text-gray-500" />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={`chart-container border rounded-lg p-4 ${chartClass}`}>
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
            fill="#6B7280"
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
              fill="#6B7280"
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
          class="transition-all duration-300 ease-in-out"
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
            class="cursor-pointer transition-all duration-200 ease-in-out"
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
    <div class="flex flex-wrap gap-4 mt-4">
      {#each data as series, i}
        <div class="flex items-center">
          <div 
            class="w-4 h-1 rounded mr-2" 
            style={`background-color: ${series.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class="text-sm text-gray-700">{series.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
