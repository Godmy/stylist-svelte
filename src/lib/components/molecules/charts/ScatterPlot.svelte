<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Activity, Info } from 'lucide-svelte';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type ChartDataPoint = {
    id: string;
    x: number;
    y: number;
    name?: string;
    size?: number; // for bubble size
    color?: string;
    category?: string;
    description?: string;
  };

  type Category = {
    id: string;
    name: string;
    color: string;
  };

  type ScatterPoint = ChartDataPoint & {
    x: number; // This will be the calculated X position in the chart
    y: number; // This will be the calculated Y position in the chart
    size: number;
    color: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    data: ChartDataPoint[];
    title?: string;
    width?: number;
    height?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    colorScheme?: string;
    maxX?: number;
    maxY?: number;
    minX?: number;
    minY?: number;
    showAxis?: boolean;
    axisColor?: string;
    showGrid?: boolean;
    gridColor?: string;
    pointSize?: number;
    showLabels?: boolean;
    onPointClick?: (item: ChartDataPoint) => void;
    class?: string;
    chartClass?: string;
  };

  let {
    data = [],
    title = 'Scatter Plot',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'default',
    maxX,
    maxY,
    minX = 0,
    minY = 0,
    showAxis = true,
    axisColor = '#E5E7EB',
    showGrid = true,
    gridColor = '#E5E7EB',
    pointSize = 6,
    showLabels = false,
    onPointClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: Props = $props();

  // Calculate min/max values if not provided
  let calculatedMaxX = $derived(maxX || (data.length > 0 ? Math.max(...data.map(d => d.x)) : 100));
  let calculatedMaxY = $derived(maxY || (data.length > 0 ? Math.max(...data.map(d => d.y)) : 100));
  
  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));
  
  // Calculate point positions
  let pointPositions = $derived(() => {
    const positions: ScatterPoint[] = data.map(point => {
      const x = (point.x - minX) / (calculatedMaxX - minX) * chartWidth + (showAxis ? 50 : 5);
      const y = chartHeight + (showAxis ? 10 : 5) - ((point.y - minY) / (calculatedMaxY - minY) * chartHeight);
      const size = point.size || pointSize;
      
      return {
        ...point,
        x,
        y,
        size,
        color: point.color || getCategoryColor(point.category || 'default')
      };
    });
    
    return positions;
  }) as () => ScatterPoint[];

  // Extract categories from data
  let categories = $derived(() => {
    const categoryMap = new Map<string, Category>();
    data.forEach(point => {
      if (point.category && !categoryMap.has(point.category)) {
        categoryMap.set(point.category, {
          id: point.category,
          name: point.category,
          color: getCategoryColor(point.category)
        });
      }
    });
    return Array.from(categoryMap.values());
  }) as () => Category[];

  // Get default color based on category or index
  function getCategoryColor(category: string): string {
    const colorSchemes: Record<string, Record<string, string>> = {
      default: {
        'default': '#3B82F6',
        'category1': '#3B82F6',
        'category2': '#10B981',
        'category3': '#EF4444',
        'category4': '#F59E0B',
        'category5': '#8B5CF6',
        'category6': '#EC4899'
      },
      warm: {
        'default': '#F87171',
        'category1': '#F87171',
        'category2': '#FB923C',
        'category3': '#FBBF24',
        'category4': '#FCD34D',
        'category5': '#FDE68A'
      },
      cool: {
        'default': '#60A5FA',
        'category1': '#60A5FA',
        'category2': '#34D399',
        'category3': '#6EE7B7',
        'category4': '#93C5FD',
        'category5': '#BFDBFE'
      }
    };
    
    const scheme = colorSchemes[colorScheme] || colorSchemes.default;
    return scheme[category] || scheme['default'];
  }

  let hoveredPoint: string | null = $state(null);
</script>

<div class={`scatter-plot ${hostClass}`} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a scatter plot showing the relationship between two variables as points on a 2D plane." position="top">
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
      {#if showGrid}
        <!-- Grid lines -->
        {#each Array(10).fill(0) as _, i}
          <!-- Horizontal grid lines -->
          <line 
            x1={showAxis ? 50 : 5} 
            y1={10 + i * (chartHeight / 10)} 
            x2={width - 10} 
            y2={10 + i * (chartHeight / 10)} 
            stroke={gridColor} 
            stroke-width="0.5"
            stroke-dasharray="3,3"
          />
          <!-- Vertical grid lines -->
          <line 
            x1={50 + i * (chartWidth / 10)} 
            y1={showAxis ? 10 : 5} 
            x2={50 + i * (chartWidth / 10)} 
            y2={height - 10} 
            stroke={gridColor} 
            stroke-width="0.5"
            stroke-dasharray="3,3"
          />
        {/each}
      {/if}

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
        
        <!-- X axis labels -->
        {#each [minX, minX + (calculatedMaxX - minX) * 0.25, minX + (calculatedMaxX - minX) * 0.5, minX + (calculatedMaxX - minX) * 0.75, calculatedMaxX] as val, i}
          <text 
            x={50 + i * (chartWidth / 4)} 
            y={height - 5} 
            text-anchor="middle" 
            font-size="10" 
            fill="#6B7280"
          >
            {Math.round(val)}
          </text>
        {/each}
        
        <!-- Y axis labels -->
        {#each [minY, minY + (calculatedMaxY - minY) * 0.25, minY + (calculatedMaxY - minY) * 0.5, minY + (calculatedMaxY - minY) * 0.75, calculatedMaxY] as val, i}
          <text 
            x={showAxis ? 45 : 0} 
            y={height - 15 - (i * (chartHeight / 4))} 
            text-anchor="end" 
            font-size="10" 
            fill="#6B7280"
          >
            {Math.round(val)}
          </text>
        {/each}
      {/if}

      <!-- Points -->
      {#each pointPositions() as point}
        <g
          class="cursor-pointer"
          onclick={() => onPointClick?.(point)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onPointClick?.(point);
            }
          }}
          onfocus={() => hoveredPoint = point.id}
          onblur={() => hoveredPoint = null}
          role="button"
          tabindex="0"
          aria-label={`Scatter plot point: ${point.name || 'unnamed'}, X: ${point.x}, Y: ${point.y}`}
        >
          <circle
            cx={point.x}
            cy={point.y}
            r={hoveredPoint === point.id ? point.size * 1.5 : point.size}
            fill={point.color}
            class="transition-all duration-200 ease-in-out"
          />
          {#if showLabels && point.name}
            <text 
              x={point.x} 
              y={point.y - (hoveredPoint === point.id ? point.size * 1.5 : point.size) - 5} 
              text-anchor="middle" 
              font-size="10" 
              fill={point.color}
              dominant-baseline="baseline"
              class="pointer-events-none"
            >
              {point.name}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend && categories.length > 1}
    <div class="flex flex-wrap gap-4 mt-4">
      {#each categories() as category}
        <div class="flex items-center">
          <div 
            class="w-4 h-4 rounded-full mr-2" 
            style={`background-color: ${category.color}`}
          ></div>
          <span class="text-sm text-gray-700">{category.name}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
